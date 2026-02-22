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

function getPool(): Pool {
  if (process.env.NODE_ENV === "production") {
    return createPool();
  }
  return globalThis._pgPool ?? (globalThis._pgPool = createPool());
}

// Lazy proxy — pool is only created on first query, not at module load time.
// This prevents build failures when POSTGRES_URL is not set in the build env.
export const db = new Proxy({} as Pool, {
  get(_target, prop) {
    return (getPool() as unknown as Record<string | symbol, unknown>)[prop];
  },
});

/**
 * Returns true if the DB is configured (POSTGRES_URL is set).
 * Use this to gracefully degrade when DB is not yet connected.
 */
export function isDbConfigured(): boolean {
  return Boolean(process.env.POSTGRES_URL);
}
