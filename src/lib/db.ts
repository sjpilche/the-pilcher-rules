import { Pool } from "pg";

// Single cached pool — shared across dev hot-reloads via globalThis,
// and across production requests via module scope.
declare global {
  // eslint-disable-next-line no-var
  var _pgPool: Pool | undefined;
}

function getPool(): Pool {
  // In dev, stash on globalThis so HMR doesn't leak pools.
  // In prod (and during build), use the module-level ref on globalThis too —
  // it's fine because there's no HMR in prod; the key thing is we never
  // create more than one pool per process.
  if (globalThis._pgPool) return globalThis._pgPool;

  const connectionString = process.env.POSTGRES_URL;
  if (!connectionString) {
    throw new Error("POSTGRES_URL environment variable is not set");
  }

  globalThis._pgPool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
    max: 10,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 5_000,
  });

  return globalThis._pgPool;
}

// Lazy proxy — the pool is only created on the first actual query,
// never at import/module-load time. This means the build can safely
// import this file without triggering a connection (as long as no
// page calls db.query() at build time).
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
