import { Pool } from "pg";

// Reuse the pool across hot-reloads in development
declare global {
  // eslint-disable-next-line no-var
  var _pgPool: Pool | undefined;
}

function createPool(): Pool {
  const connectionString = process.env.POSTGRES_URL;
  if (!connectionString) {
    throw new Error("POSTGRES_URL environment variable is not set");
  }
  return new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false }, // required for Azure Postgres
    max: 10,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 5_000,
  });
}

export const db: Pool =
  process.env.NODE_ENV === "production"
    ? createPool()
    : (globalThis._pgPool ?? (globalThis._pgPool = createPool()));

/**
 * Returns true if the DB is configured (POSTGRES_URL is set).
 * Use this to gracefully degrade when DB is not yet connected.
 */
export function isDbConfigured(): boolean {
  return Boolean(process.env.POSTGRES_URL);
}
