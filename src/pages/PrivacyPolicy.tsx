import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { LegalHero } from "@/components/legal/LegalHero";

const LAST_UPDATED = "January 15, 2025";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: `${window.location.origin}/privacy-policy`,
    isPartOf: {
      "@type": "Organization",
      name: "Systechnosoft Technologies",
      url: window.location.origin,
    },
    dateModified: LAST_UPDATED,
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy — Systechnosoft Technologies</title>
        <meta
          name="description"
          content="How Systechnosoft collects, uses, shares, and protects personal data. GDPR/DPDP/CCPA aligned. Manage cookie preferences anytime."
        />
        <link rel="canonical" href={`${window.location.origin}/privacy-policy`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Skip to main content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#E52629] focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-[#E52629] focus:ring-offset-2"
        >
          Skip to main content
        </a>

        <LegalHero
          title="Privacy Policy"
          description="How we collect, use, and protect your information."
          lastUpdated={LAST_UPDATED}
        />

        <div className="container mx-auto px-4 py-12">
          <main id="main-content" className="max-w-3xl md:max-w-4xl mx-auto">
            <style>{`
              .legal-content {
                text-align: center;
              }
              .legal-content h2 {
                @apply text-3xl font-bold text-[#1C1C1C] mb-6 font-montserrat;
              }
              .legal-content h3 {
                @apply text-xl font-semibold text-[#1C1C1C] mb-3 font-montserrat;
              }
              .legal-content p,
              .legal-content ul,
              .legal-content ol,
              .legal-content li {
                @apply text-[#3C3C3C] font-inter leading-8 md:leading-9;
              }
              .legal-content ul,
              .legal-content ol {
                @apply list-none space-y-3 mb-6;
              }
              .legal-content li {
                @apply text-center;
              }
              .legal-content a {
                @apply text-[#E52629] hover:underline focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:outline-none rounded transition-all duration-200;
              }
              .legal-content a:hover {
                @apply scale-[1.03] inline-block;
              }
              .legal-content section {
                @apply mb-16 scroll-mt-24 animate-fade-in;
              }
            `}</style>
            <div className="legal-content space-y-16">
                {/* Introduction */}
                <section id="introduction">
                  <h2>Introduction</h2>
                  <p>
                    Systechnosoft Technologies ("<strong>Systechnosoft</strong>", "<strong>we</strong>", "<strong>us</strong>") is committed to protecting your privacy. This Privacy Policy explains what personal data we collect, how we use and share it, and your rights when you visit our website or interact with us. We align with the <strong>GDPR</strong> (EU/UK), <strong>CCPA/CPRA</strong> (California), and India's <strong>DPDP Act</strong>. Our website does <strong>not</strong> offer user accounts. This notice is client-facing and does not cover employee data.
                  </p>
                  <p>
                    <strong>Controller:</strong> Systechnosoft Technologies Private Limited, [Registered Address].<br />
                    <strong>Contact:</strong>{" "}
                    <a href="mailto:privacy@systechnosoft.com">
                      privacy@systechnosoft.com
                    </a>
                    <br />
                    <strong>Last updated:</strong> {LAST_UPDATED}
                  </p>
                </section>

                {/* Scope */}
                <section id="scope">
                  <h2>Scope</h2>
                  <p>
                    This Policy applies to data collected via our website, contact/demo forms, events/webinars, and business communications. It does not cover third-party websites linked from our site.
                  </p>
                </section>

                {/* Data We Collect */}
                <section id="data-we-collect">
                  <h2>Data We Collect</h2>
                  <ul>
                    <li>
                      <strong>You provide:</strong> name, business email, phone, job title, company, message content.
                    </li>
                    <li>
                      <strong>Business contact context:</strong> professional details provided B2B (still personal data).
                    </li>
                    <li>
                      <strong>Automatically collected:</strong> IP, device/browser info, approximate location, pages viewed, referrers, events; via cookies/pixels/server logs.
                    </li>
                    <li>
                      <strong>Third-party sources:</strong> referrals/partners/event registrations.
                    </li>
                    <li>
                      <strong>We do not knowingly collect:</strong> sensitive personal data or children's data.
                    </li>
                  </ul>
                </section>

                {/* How We Use Data */}
                <section id="how-we-use">
                  <h2>How We Use Data</h2>
                  <ul>
                    <li>Respond to inquiries, schedule demos, deliver requested info/services.</li>
                    <li>Operate, secure, and improve site; analytics and performance measurement.</li>
                    <li>
                      <strong>Marketing (opt-in/legitimate interest):</strong> newsletters, product updates; easy opt-out.
                    </li>
                    <li>
                      Advertising/retargeting <strong>only with consent</strong> (cookies/pixels).
                    </li>
                    <li>Use of service providers (hosting, analytics, CRM, email).</li>
                    <li>Legal compliance, fraud and security, defend rights.</li>
                  </ul>
                </section>

                {/* Legal Bases */}
                <section id="legal-bases">
                  <h2>Legal Bases (GDPR/UK & similar)</h2>
                  <ul>
                    <li>
                      <strong>Consent:</strong> non-essential cookies; electronic marketing where required.
                    </li>
                    <li>
                      <strong>Legitimate interests:</strong> B2B comms, site improvement, security (balanced with your rights).
                    </li>
                    <li>
                      <strong>Contract:</strong> pre-contract/contract performance if engaging an individual.
                    </li>
                    <li>
                      <strong>Legal obligation:</strong> record-keeping, regulatory requests.
                    </li>
                  </ul>
                </section>

                {/* Cookies & Tracking */}
                <section id="cookies">
                  <h2>Cookies & Tracking</h2>
                  <p>
                    We use <strong>Essential</strong>, <strong>Analytics/Performance</strong>, <strong>Functional</strong>, and <strong>Advertising/Marketing</strong> cookies. Non-essential categories run <strong>only with consent</strong> in applicable regions. See our{" "}
                    <a href="/cookie-policy">
                      Cookie Policy
                    </a>{" "}
                    for full details.
                  </p>
                </section>

                {/* Sharing Your Data */}
                <section id="sharing">
                  <h2>Sharing Your Data</h2>
                  <p>
                    We <strong>do not sell</strong> personal data. We share with:
                  </p>
                  <ul>
                    <li>
                      <strong>Service providers</strong> (hosting/cloud, analytics, CRM/email, security) under DPAs
                    </li>
                    <li>
                      <strong>Partners</strong> only to fulfill your request
                    </li>
                    <li>
                      <strong>Legal</strong>/compliance
                    </li>
                    <li>
                      <strong>Business transfers</strong> (e.g., M&A)
                    </li>
                  </ul>
                  <p>
                    Providers may be in other countries and must protect data appropriately.
                  </p>
                </section>

                {/* International Transfers */}
                <section id="transfers">
                  <h2>International Transfers</h2>
                  <p>
                    Data may be processed in India, the EU, the US, or other locations. For EEA/UK transfers we use <strong>Standard Contractual Clauses (SCCs)</strong> and additional safeguards as needed. Under India's <strong>DPDP</strong>, we follow government notifications and contractual protections.
                  </p>
                </section>

                {/* Retention */}
                <section id="retention">
                  <h2>Retention</h2>
                  <p>
                    We keep data only as long as needed for the purposes above or as required by law, then delete or anonymize it. Typical periods: inquiries <strong>~12 months</strong> after closure; client records <strong>term + 5–7 years</strong> (tax/audit); analytics per tool settings (e.g., <strong>14 months</strong>); security logs <strong>~6–12 months</strong>.
                  </p>
                </section>

                {/* Security */}
                <section id="security">
                  <h2>Security</h2>
                  <p>
                    HTTPS everywhere, encryption in transit/at rest where feasible, role-based access, least privilege, logging/monitoring, firewalls, vulnerability management, incident response, backups, staff training. No method is 100% secure, but we continuously improve safeguards.
                  </p>
                </section>

                {/* Your Rights */}
                <section id="your-rights">
                  <h2>Your Rights</h2>
                  <div>
                    <h3>Global</h3>
                    <p>Withdraw consent, opt-out of marketing, object where applicable.</p>
                  </div>
                  <div>
                    <h3>EEA/UK (GDPR)</h3>
                    <p>
                      Access, rectify, erase, restrict, port, object (incl. absolute right to object to direct marketing); complain to a DPA.
                    </p>
                  </div>
                  <div>
                    <h3>California (CCPA/CPRA)</h3>
                    <p>
                      Know/access, delete, correct, <strong>opt-out of sale/sharing</strong> (honor <strong>Global Privacy Control</strong>), non-discrimination.
                    </p>
                  </div>
                  <div>
                    <h3>India (DPDP)</h3>
                    <p>
                      Information, access, correction/erasure, withdraw consent, grievance redressal via Grievance Officer / Data Protection Board.
                    </p>
                  </div>
                  <p>
                    <strong>Submit a request:</strong> email us at{" "}
                    <a href="mailto:privacy@systechnosoft.com">
                      privacy@systechnosoft.com
                    </a>.
                  </p>
                </section>

                {/* Children's Privacy */}
                <section id="children">
                  <h2>Children's Privacy</h2>
                  <p>
                    Site not directed to children under 16 (or under 18 per DPDP). We do not knowingly collect children's data. If you believe a child provided data, contact us to delete it.
                  </p>
                </section>

                {/* Updates to this Policy */}
                <section id="updates">
                  <h2>Updates to this Policy</h2>
                  <p>
                    We may update this Policy. We'll revise the <strong>Last updated</strong> date and post a prominent notice for material changes. Continued use after updates signifies acknowledgment.
                  </p>
                </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
