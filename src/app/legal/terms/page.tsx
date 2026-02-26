import Link from "next/link";

export const metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of the Jake by Pilcher Rules website and services.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <Link
        href="/"
        className="text-slate-400 hover:text-white text-sm transition-colors mb-10 inline-block"
      >
        &larr; Back to home
      </Link>

      <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
      <p className="text-slate-400 text-sm mb-12">
        Last updated: February 26, 2026
      </p>

      <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 leading-relaxed">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and
          use of the jakecfo.com website and the Jake product (collectively, the
          &quot;Service&quot;) operated by Pilcher Rules LLC (&quot;we,&quot;
          &quot;us,&quot; or &quot;Pilcher Rules&quot;). By accessing or using
          the Service, you agree to be bound by these Terms. If you do not
          agree, do not use the Service.
        </p>

        {/* 1 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            1. Eligibility
          </h2>
          <p>
            You must be at least 18 years of age and have the legal capacity to
            enter into a binding agreement to use the Service. By using the
            Service, you represent and warrant that you meet these requirements.
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            2. Use of the Service
          </h2>
          <p>
            The Service is provided for informational purposes, to facilitate
            inquiries about Jake products, and to deliver AI-powered
            construction finance tools. You agree to use the Service only for
            lawful purposes and in accordance with these Terms. You shall not:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              Use the Service in any way that violates applicable law or
              regulation
            </li>
            <li>
              Attempt to gain unauthorized access to any part of the Service or
              its related systems
            </li>
            <li>
              Interfere with or disrupt the Service or its infrastructure
            </li>
            <li>
              Scrape, crawl, or use automated tools to extract data from the
              Service without written permission
            </li>
            <li>
              Upload or transmit malware, viruses, or other harmful code
            </li>
          </ul>
        </section>

        {/* 3 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            3. Accounts
          </h2>
          <p>
            Certain features of the Service may require you to create an
            account. You are responsible for maintaining the confidentiality of
            your account credentials and for all activity under your account. You
            agree to notify us immediately at{" "}
            <a
              href="mailto:hello@jakecfo.com"
              className="text-[#FF6200] hover:text-[#ff8533]"
            >
              hello@jakecfo.com
            </a>{" "}
            if you suspect unauthorized use of your account.
          </p>
        </section>

        {/* 4 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            4. Intellectual Property
          </h2>
          <p>
            All content on the Service — including text, graphics, logos, icons,
            images, software, and the Jake brand — is the property of Pilcher
            Rules LLC or its licensors and is protected by United States and
            international intellectual property laws. You may not reproduce,
            distribute, modify, create derivative works of, publicly display, or
            otherwise exploit any content without our prior written consent.
          </p>
        </section>

        {/* 5 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            5. AI-Generated Output
          </h2>
          <p>
            The Service uses artificial intelligence to generate financial
            insights, reports, and recommendations for the construction
            industry. AI output is provided for informational purposes only and
            does not constitute financial, legal, tax, or professional advice.
            You are solely responsible for any decisions you make based on AI
            output. We do not guarantee the accuracy, completeness, or
            reliability of any AI-generated content.
          </p>
        </section>

        {/* 6 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            6. Your Data
          </h2>
          <p>
            You retain ownership of any data you submit to the Service. By
            submitting data, you grant us a limited, non-exclusive license to
            use, process, and store that data solely for the purpose of
            providing and improving the Service. Our use of your personal
            information is governed by our{" "}
            <Link
              href="/legal/privacy"
              className="text-[#FF6200] hover:text-[#ff8533]"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            7. No Warranty
          </h2>
          <p>
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
            AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE
            UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT ANY DEFECTS WILL BE
            CORRECTED.
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            8. Limitation of Liability
          </h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, PILCHER RULES LLC AND ITS
            OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR
            ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
            DAMAGES, OR ANY LOSS OF PROFITS OR REVENUE, WHETHER INCURRED
            DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR
            OTHER INTANGIBLE LOSSES RESULTING FROM:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Your access to or use of (or inability to use) the Service</li>
            <li>
              Any conduct or content of any third party on the Service
            </li>
            <li>
              Any AI-generated output or recommendations
            </li>
            <li>
              Unauthorized access to or alteration of your data
            </li>
          </ul>
          <p className="mt-3">
            In no event shall our total liability exceed the greater of $100 USD
            or the amount you have paid us in the twelve (12) months preceding
            the claim.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            9. Indemnification
          </h2>
          <p>
            You agree to indemnify, defend, and hold harmless Pilcher Rules LLC
            from any claims, damages, losses, liabilities, and expenses
            (including reasonable attorneys&apos; fees) arising out of or related
            to your use of the Service or violation of these Terms.
          </p>
        </section>

        {/* 10 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            10. Termination
          </h2>
          <p>
            We may suspend or terminate your access to the Service at any time,
            with or without cause and without notice. Upon termination, your
            right to use the Service ceases immediately. Sections that by their
            nature should survive termination (including Intellectual Property,
            Limitation of Liability, and Indemnification) shall survive.
          </p>
        </section>

        {/* 11 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            11. Governing Law
          </h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of the State of Texas, without regard to its conflict of law
            principles. Any disputes arising under these Terms shall be resolved
            exclusively in the state or federal courts located in Texas.
          </p>
        </section>

        {/* 12 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            12. Changes to These Terms
          </h2>
          <p>
            We may update these Terms at any time. When we do, we will revise
            the &quot;Last updated&quot; date at the top of this page. Continued
            use of the Service after changes constitutes acceptance of the
            revised Terms. If you do not agree to the revised Terms, you must
            stop using the Service.
          </p>
        </section>

        {/* 13 */}
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            13. Contact
          </h2>
          <p>Questions about these Terms? Contact us:</p>
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
