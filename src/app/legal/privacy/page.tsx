import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Jake by Pilcher Rules collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <Link
        href="/"
        className="text-slate-400 hover:text-white text-sm transition-colors mb-10 inline-block"
      >
        &larr; Back to home
      </Link>

      <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-slate-400 text-sm mb-12">
        Last updated: February 26, 2026
      </p>

      <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 leading-relaxed">
        <p>
          Pilcher Rules LLC (&quot;we,&quot; &quot;us,&quot; or &quot;Pilcher
          Rules&quot;) operates the website jakecfo.com and the Jake product
          (collectively, the &quot;Service&quot;). This Privacy Policy explains
          what information we collect, how we use it, and the choices you have.
        </p>

        {/* 1 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            1. Information We Collect
          </h2>

          <h3 className="text-white text-base font-medium mt-4 mb-2">
            a. Information You Provide
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong className="text-white">Contact &amp; demo forms:</strong>{" "}
              name, email address, company name, phone number, job title, annual
              revenue range, and any message or description you include.
            </li>
            <li>
              <strong className="text-white">Account creation:</strong> if you
              sign up for a Jake account, we collect credentials and profile
              details necessary to operate your account.
            </li>
          </ul>

          <h3 className="text-white text-base font-medium mt-4 mb-2">
            b. Information Collected Automatically
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong className="text-white">Analytics:</strong> we use Google
              Analytics 4 (GA4) to collect anonymized usage data such as pages
              visited, session duration, referral source, browser type, device
              type, and approximate geographic location (city/country level).
              Google may set cookies on your device for this purpose.
            </li>
            <li>
              <strong className="text-white">Server logs:</strong> our hosting
              provider (Vercel) automatically records your IP address, request
              URL, timestamp, and HTTP headers for security and performance
              monitoring.
            </li>
            <li>
              <strong className="text-white">Cookies:</strong> we use
              strictly-necessary cookies (e.g., admin session cookies) and
              analytics cookies (Google Analytics). We do not use advertising or
              tracking cookies. See Section 6 for details.
            </li>
          </ul>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            2. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Respond to your inquiry or schedule a product demo</li>
            <li>Send you a confirmation email and relevant follow-ups</li>
            <li>Operate, maintain, and improve the Service</li>
            <li>
              Detect and prevent fraud, abuse, and security incidents
            </li>
            <li>
              Comply with legal obligations
            </li>
          </ul>
          <p className="mt-3 font-medium text-white">
            We do not sell, rent, or trade your personal information to third
            parties.
          </p>
        </section>

        {/* 3 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            3. Third-Party Services
          </h2>
          <p>
            We share limited information with the following service providers,
            solely to operate the Service:
          </p>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10 text-white">
                  <th className="py-2 pr-4">Provider</th>
                  <th className="py-2 pr-4">Purpose</th>
                  <th className="py-2">Data Shared</th>
                </tr>
              </thead>
              <tbody className="text-slate-400">
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-4">Vercel</td>
                  <td className="py-2 pr-4">Website hosting &amp; CDN</td>
                  <td className="py-2">Server logs, IP address</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-4">Neon (PostgreSQL)</td>
                  <td className="py-2 pr-4">Database hosting</td>
                  <td className="py-2">Form submissions</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-4">Resend</td>
                  <td className="py-2 pr-4">Transactional email</td>
                  <td className="py-2">Email address, name</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-4">Google Analytics</td>
                  <td className="py-2 pr-4">Website analytics</td>
                  <td className="py-2">Anonymized usage data</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            Each provider is bound by its own privacy policy and processes data
            on our behalf.
          </p>
        </section>

        {/* 4 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            4. Data Storage &amp; Security
          </h2>
          <p>
            Form submissions and account data are stored in a PostgreSQL
            database hosted by Neon (neon.tech) with encryption at rest and in
            transit. Access is restricted to authorized Pilcher Rules team
            members via password-protected admin dashboards. Email notifications
            are delivered via Resend (resend.com) using TLS-encrypted
            connections.
          </p>
          <p className="mt-3">
            While we implement commercially reasonable security measures, no
            method of transmission or storage is 100% secure. We cannot
            guarantee absolute security.
          </p>
        </section>

        {/* 5 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            5. Data Retention
          </h2>
          <p>
            We retain your personal information for as long as necessary to
            provide the Service and fulfill the purposes described in this
            policy, or as required by law. Specifically:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <strong className="text-white">Contact/demo requests:</strong>{" "}
              retained for up to 24 months from submission, then deleted unless
              an active business relationship exists.
            </li>
            <li>
              <strong className="text-white">Analytics data:</strong> Google
              Analytics data is retained for 14 months per Google&apos;s default
              retention settings.
            </li>
            <li>
              <strong className="text-white">Server logs:</strong> retained by
              Vercel per their data retention policy (typically 30 days).
            </li>
          </ul>
        </section>

        {/* 6 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            6. Cookies &amp; Tracking
          </h2>
          <p>Cookies used on jakecfo.com:</p>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10 text-white">
                  <th className="py-2 pr-4">Cookie</th>
                  <th className="py-2 pr-4">Type</th>
                  <th className="py-2">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-slate-400">
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-4 font-mono text-xs">
                    admin_session
                  </td>
                  <td className="py-2 pr-4">Strictly necessary</td>
                  <td className="py-2">Admin authentication</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-4 font-mono text-xs">_ga, _ga_*</td>
                  <td className="py-2 pr-4">Analytics</td>
                  <td className="py-2">
                    Google Analytics visitor identification
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            You can disable analytics cookies by configuring your browser
            settings or by using the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6200] hover:text-[#ff8533]"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            . We do not use advertising pixels, retargeting, or fingerprinting.
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            7. Your Rights
          </h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <strong className="text-white">Access</strong> the personal data
              we hold about you
            </li>
            <li>
              <strong className="text-white">Correct</strong> inaccurate or
              incomplete data
            </li>
            <li>
              <strong className="text-white">Delete</strong> your personal data
            </li>
            <li>
              <strong className="text-white">Opt out</strong> of analytics
              tracking
            </li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, email us at{" "}
            <a
              href="mailto:hello@jakecfo.com"
              className="text-[#FF6200] hover:text-[#ff8533]"
            >
              hello@jakecfo.com
            </a>
            . We will respond within 30 days.
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            8. California Residents (CCPA)
          </h2>
          <p>
            If you are a California resident, the California Consumer Privacy
            Act (CCPA) provides you with additional rights, including:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              The right to know what personal information we collect, use, and
              disclose
            </li>
            <li>The right to request deletion of your personal information</li>
            <li>
              The right to opt out of the sale of personal information — we do
              not sell personal information
            </li>
            <li>
              The right to non-discrimination for exercising your CCPA rights
            </li>
          </ul>
          <p className="mt-3">
            To make a CCPA request, email{" "}
            <a
              href="mailto:hello@jakecfo.com"
              className="text-[#FF6200] hover:text-[#ff8533]"
            >
              hello@jakecfo.com
            </a>{" "}
            with the subject line &quot;CCPA Request.&quot;
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            9. Children&apos;s Privacy
          </h2>
          <p>
            The Service is not directed to individuals under the age of 18. We
            do not knowingly collect personal information from children. If we
            learn that we have collected data from a child, we will delete it
            promptly.
          </p>
        </section>

        {/* 10 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            10. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we
            will revise the &quot;Last updated&quot; date at the top of this
            page. We encourage you to review this policy periodically. Continued
            use of the Service after changes constitutes acceptance of the
            updated policy.
          </p>
        </section>

        {/* 11 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            11. Contact Us
          </h2>
          <p>
            If you have questions or concerns about this Privacy Policy, contact
            us:
          </p>
          <div className="mt-3 p-4 rounded-lg bg-white/5 border border-white/10 text-sm space-y-1">
            <p className="text-white font-medium">Pilcher Rules LLC</p>
            <p>
              Email:{" "}
              <a
                href="mailto:hello@jakecfo.com"
                className="text-[#FF6200] hover:text-[#ff8533]"
              >
                hello@jakecfo.com
              </a>
            </p>
            <p>
              Website:{" "}
              <a
                href="https://jakecfo.com"
                className="text-[#FF6200] hover:text-[#ff8533]"
              >
                jakecfo.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
