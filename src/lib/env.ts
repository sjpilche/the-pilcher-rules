/**
 * Environment variable validation
 * Logs warnings at startup if critical vars are missing or misconfigured
 */

export function validateEnvVars(): void {
  const warnings: string[] = [];

  // Check POSTGRES_URL (optional but important for persistence)
  if (!process.env.POSTGRES_URL) {
    warnings.push(
      "[WARN] POSTGRES_URL is not set. Lead data will not be persisted to database."
    );
  }

  // Check RESEND_API_KEY (optional but important for email)
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "re_your_api_key_here") {
    warnings.push(
      "[WARN] RESEND_API_KEY is not set or is using placeholder. Emails will not be sent."
    );
  }

  // Check CONTACT_EMAIL (has a fallback but good to log if missing)
  if (!process.env.CONTACT_EMAIL) {
    warnings.push(
      "[INFO] CONTACT_EMAIL not set, using default: hello@jakecfo.com"
    );
  }

  // Check NEXT_PUBLIC_SITE_URL (should not point to localhost in production)
  if (
    process.env.NEXT_PUBLIC_SITE_URL &&
    process.env.NEXT_PUBLIC_SITE_URL.includes("localhost")
  ) {
    const nodeEnv = process.env.NODE_ENV || "development";
    if (nodeEnv !== "development") {
      warnings.push(
        "[ERROR] NEXT_PUBLIC_SITE_URL points to localhost in " +
          nodeEnv +
          " environment. This should be set to the actual site URL."
      );
    }
  }

  // Log all warnings/info
  if (warnings.length > 0) {
    console.log("");
    console.log("=== Environment Configuration ===");
    warnings.forEach((w) => console.log(w));
    console.log("==================================");
    console.log("");
  }
}
