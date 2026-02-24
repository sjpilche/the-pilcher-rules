/**
 * Simple in-memory rate limiter
 * Tracks requests per IP address and route
 */

interface RateLimitConfig {
  maxRequests: number;
  windowMs: number; // milliseconds
}

const DEFAULT_CONFIG: RateLimitConfig = {
  maxRequests: 5,
  windowMs: 15 * 60 * 1000, // 15 minutes
};

// Map of "ip:route" -> array of timestamps
const requestTimestamps: Map<string, number[]> = new Map();

export function getRateLimitKey(ip: string, route: string): string {
  return `${ip}:${route}`;
}

export function checkRateLimit(
  ip: string,
  route: string,
  config: Partial<RateLimitConfig> = {}
): { allowed: boolean; remaining: number; resetAt: number } {
  const mergedConfig = { ...DEFAULT_CONFIG, ...config };
  const key = getRateLimitKey(ip, route);

  let timestamps = requestTimestamps.get(key);
  if (!timestamps) {
    timestamps = [];
    requestTimestamps.set(key, timestamps);
  }

  const now = Date.now();
  const cutoffTime = now - mergedConfig.windowMs;

  // Remove old timestamps outside the window
  const filteredTimestamps = timestamps.filter(
    (timestamp) => timestamp > cutoffTime
  );
  requestTimestamps.set(key, filteredTimestamps);

  const requestCount = filteredTimestamps.length;

  if (requestCount >= mergedConfig.maxRequests) {
    // Rate limit exceeded
    const oldestRequest = Math.min(...filteredTimestamps);
    const resetAt = oldestRequest + mergedConfig.windowMs;

    return {
      allowed: false,
      remaining: 0,
      resetAt,
    };
  }

  // Record this request
  filteredTimestamps.push(now);
  requestTimestamps.set(key, filteredTimestamps);

  return {
    allowed: true,
    remaining: mergedConfig.maxRequests - requestCount - 1,
    resetAt: now + mergedConfig.windowMs,
  };
}

/**
 * Cleanup old entries to prevent memory bloat
 * Call periodically (e.g., every hour)
 */
export function cleanupOldEntries(): void {
  const now = Date.now();
  const cutoffTime = now - DEFAULT_CONFIG.windowMs;

  for (const [key, timestamps] of requestTimestamps.entries()) {
    const filtered = timestamps.filter((timestamp) => timestamp > cutoffTime);
    if (filtered.length === 0) {
      requestTimestamps.delete(key);
    } else {
      requestTimestamps.set(key, filtered);
    }
  }
}
