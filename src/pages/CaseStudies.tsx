import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight,
  ChevronDown,
  Building2,
  Heart,
  Plane,
  Factory,
  Banknote,
  CheckCircle2,
  TrendingUp,
  Shield,
  Zap,
  Database
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import ServiceHero from "@/components/ServiceHero";
import { CountUpNumber } from "@/components/CountUpNumber";
import { cn } from "@/lib/utils";
import { scrollToId } from "@/lib/scrollUtils";

// Sub-navigation items
const subNavItems = [
  { id: "cs-bfsi", label: "BFSI" },
  { id: "cs-healthcare", label: "Healthcare" },
  { id: "cs-aviation", label: "Aviation" },
  { id: "cs-oil-gas", label: "Oil & Gas" },
  { id: "cs-financial-services", label: "Financial Services" },
  { id: "cs-faqs", label: "FAQs" },
];

// Industry data structure
const industries = [
  {
    id: "cs-bfsi",
    name: "BFSI",
    icon: Building2,
    lead: "Always‑on, compliant, and personalized—core banking at cloud speed.",
    kpis: [
      { value: 40, suffix: "%", label: "Faster processing" },
      { value: 24, suffix: "×7", label: "Uptime" },
      { value: 60, suffix: "×", label: "Automation" },
    ],
    cases: [
      {
        title: "Global Markets Workbench — 60× automation",
        overview: "Unified trade processing for a top AU bank's global markets desk.",
        challenges: ["Siloed systems", "Manual handoffs", "Compliance visibility"],
        solution: "Low‑code workflow (Appian), APIs into trading/settlement; real‑time dashboards.",
        techBadges: ["Appian", "REST APIs", "Audit trails", "SSO/IAM"],
        outcomes: ["~40% faster processing", "Improved compliance tracking", "Near‑zero manual rework"],
      },
      {
        title: "Customer Sophistication Classification — 80× automation",
        overview: "Automated CSC/PSA renewals and reminders; removed manual follow‑ups.",
        challenges: ["Thousands of expiries", "Backlog", "Audit pain"],
        solution: "Appian jobs + notifications; CMS sync; escalations; role‑based access.",
        techBadges: ["Appian", "CMS connector", "Email/SMS", "RBAC"],
        outcomes: ["~80% cycle time reduction", "Zero missed approvals", "Clean audit trails"],
      },
    ],
    ctaText: "View all industries",
    ctaLink: "/industries",
  },
  {
    id: "cs-healthcare",
    name: "Healthcare",
    icon: Heart,
    lead: "Interoperable EHR, AI‑assisted care, and operational visibility.",
    kpis: [
      { value: 20, suffix: "%", label: "Operational efficiency lift" },
      { value: 15, suffix: "%", label: "Lower readmissions" },
      { value: 99.97, suffix: "%", label: "Platform uptime" },
    ],
    cases: [
      {
        title: "Employee Management System — 30× automation",
        overview: "Portal for attendance, certifications, and performance.",
        challenges: ["Fragmented HR tools", "Missed expiries", "Slow reporting"],
        solution: "Appian portal; HRIS integration; KPI dashboards; mobile access.",
        techBadges: ["Appian", "HRIS API", "Mobile responsive", "PHI encryption"],
        outcomes: ["~20% admin cost reduction", "Real‑time compliance reporting", "Higher productivity"],
      },
    ],
    ctaText: "See healthcare insights",
    ctaLink: "/industries#healthcare",
  },
  {
    id: "cs-aviation",
    name: "Aviation",
    icon: Plane,
    lead: "Predictive ops, faster turnarounds, and pilot‑first digital flows.",
    kpis: [
      { value: 30, suffix: "%", label: "Reduction in downtime" },
      { value: 50, suffix: "%", label: "Fuel savings potential" },
      { value: 85, suffix: "%", label: "Faster turnarounds" },
    ],
    cases: [
      {
        title: "Solo Pilot Platform",
        overview: "Unified portal for flight requests, services, and payments.",
        challenges: ["Phone/email coordination", "Inconsistent fees", "Multi‑role access"],
        solution: "Angular portal + Appian orchestration; OTP; Hyperpay; QR service verification.",
        techBadges: ["Angular", "Appian", "PostgreSQL", "Hyperpay", "QR"],
        outcomes: ["Faster confirmations", "Fewer manual calls", "Transparent billing", "Higher CSAT"],
      },
    ],
    ctaText: "Explore aviation",
    ctaLink: "/industries#aviation",
  },
  {
    id: "cs-oil-gas",
    name: "Oil & Gas",
    icon: Factory,
    lead: "Instrumented, automated, safer—data‑driven operations from well to refinery.",
    kpis: [
      { value: 30, suffix: "%", label: "Operational efficiency" },
      { value: 10, suffix: "%", label: "Maintenance cost reduction" },
      { value: 5, suffix: "%", label: "OEE improvement" },
    ],
    cases: [
      {
        title: "Turnkey Apps — 20× automation",
        overview: "Field workforce scheduling, job tracking, and offline reporting.",
        challenges: ["Manual rosters", "Limited visibility", "Remote connectivity"],
        solution: "Appian workflows; mobile app (offline); asset integrations; dashboards.",
        techBadges: ["Appian", "React Native", "Asset APIs", "Power BI"],
        outcomes: ["~30% operational efficiency lift", "Faster maintenance cycles", "Cleaner data"],
      },
    ],
    ctaText: "Explore oil & gas",
    ctaLink: "/industries#oil-gas",
  },
  {
    id: "cs-financial-services",
    name: "Financial Services",
    icon: Banknote,
    lead: "Complex approvals and splits—digitized and audit‑ready.",
    kpis: [
      { value: 50, suffix: "%", label: "Faster cycle time" },
      { value: 25, suffix: "×", label: "Automation" },
      { value: 100, suffix: "%", label: "Audit trail coverage" },
    ],
    cases: [
      {
        title: "Intercompany Workflow — 25× automation",
        overview: "Cross‑entity approvals, dynamic splits, and reconciliation.",
        challenges: ["Email‑based routing", "Calculation errors", "Audit gaps"],
        solution: "Appian workflow; rule engine; SAP/Oracle finance integration; dashboards.",
        techBadges: ["Appian", "Rule engine", "SAP/Oracle API", "Audit log"],
        outcomes: ["~50% faster cycle", "Fewer errors", "Full audit trail", "Easier compliance"],
      },
    ],
    ctaText: "View more",
    ctaLink: "/industries#bfsi",
  },
];

// FAQ data
const faqs = [
  {
    question: "Why one page?",
    answer: "Faster scan, fewer clicks; drill‑down keeps it tidy. You can explore all our case studies across industries without navigating multiple pages.",
  },
  {
    question: "Can I get the architecture?",
    answer: "Ask for a deep‑dive; we share sanitized diagrams on request. Contact our team to discuss detailed technical architecture for any case study.",
  },
  {
    question: "Security & compliance?",
    answer: "Zero‑Trust, encryption in transit/at rest, RBAC, audit trails. All our solutions are built with security-first principles and compliance requirements in mind.",
  },
];

export default function CaseStudies() {
  const [activeSection, setActiveSection] = useState(subNavItems[0].id);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    scrollToId(id, 120);
    window.history.pushState({}, "", `#${id}`);
  };

  return (
    <>
      <Helmet>
        <title>Case Studies | Systechnosoft</title>
        <meta 
          name="description" 
          content="Proven results in BFSI, Healthcare, Aviation, and Oil & Gas. Explore detailed challenges, solutions, and outcomes—delivered with cloud, data, and AI." 
        />
        <link rel="canonical" href="https://systechnosoft.com/case-studies" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Case Studies | Systechnosoft" />
        <meta property="og:description" content="Proven results in BFSI, Healthcare, Aviation, and Oil & Gas. Explore detailed challenges, solutions, and outcomes—delivered with cloud, data, and AI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://systechnosoft.com/case-studies" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies | Systechnosoft" />
        <meta name="twitter:description" content="Proven results in BFSI, Healthcare, Aviation, and Oil & Gas. Explore detailed challenges, solutions, and outcomes—delivered with cloud, data, and AI." />
        
        {/* Structured Data - CollectionPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Case Studies",
            "description": "Proven results in BFSI, Healthcare, Aviation, and Oil & Gas",
            "provider": {
              "@type": "Organization",
              "name": "Systechnosoft Technologies"
            },
            "hasPart": industries.map(industry => ({
              "@type": "Article",
              "headline": industry.name,
              "description": industry.lead,
              "url": `https://systechnosoft.com/case-studies#${industry.id}`
            }))
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <ServiceHero
          title="Case Studies"
          subtitle="Real outcomes across BFSI, Healthcare, Aviation, and Oil & Gas—delivered with cloud, data, and AI."
          uspChips={[
            "ISO 27001",
            "SOC 2",
            "GDPR/DPDP aware"
          ]}
          primaryButton={{
            text: "Talk to an Expert",
            href: "/contact"
          }}
          secondaryButton={{
            text: "See industries →",
            href: "/industries"
          }}
          image={{
            alt: "Case Studies",
            placeholderPrompt: "A professional showcase of successful technology projects across different industries, with charts, metrics, and industry icons"
          }}
        />

        {/* Sticky Sub-navigation */}
        <nav 
          className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          role="tablist"
          aria-label="Case study sections"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-center overflow-x-auto py-4 space-x-2 scrollbar-hide">
              {subNavItems.map((item) => (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={activeSection === item.id}
                  aria-controls={item.id}
                  tabIndex={activeSection === item.id ? 0 : -1}
                  onClick={() => scrollToSection(item.id)}
                  onKeyDown={(e) => {
                    const currentIndex = subNavItems.findIndex(i => i.id === item.id);
                    if (e.key === "ArrowLeft" && currentIndex > 0) {
                      scrollToSection(subNavItems[currentIndex - 1].id);
                    }
                    if (e.key === "ArrowRight" && currentIndex < subNavItems.length - 1) {
                      scrollToSection(subNavItems[currentIndex + 1].id);
                    }
                  }}
                  className={cn(
                    "flex-shrink-0 font-medium text-sm px-4 py-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Industry Sections */}
        {industries.map((industry, idx) => (
          <section
            key={industry.id}
            id={industry.id}
            ref={(el) => (sectionsRef.current[idx] = el)}
            className="py-16 md:py-20 border-b border-border last:border-b-0"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              {/* Industry Header */}
              <div className="mb-12">
                <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                  Industry
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <industry.icon className="w-10 h-10 text-primary" aria-hidden="true" />
                  <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground">
                    {industry.name}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  {industry.lead}
                </p>
              </div>

              {/* Outcome Ribbon - KPIs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {industry.kpis.map((kpi, kpiIdx) => (
                  <motion.div
                    key={kpiIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: kpiIdx * 0.1, duration: 0.4 }}
                    className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="text-4xl font-bold text-primary mb-2 font-montserrat">
                      <CountUpNumber 
                        end={kpi.value} 
                        suffix={kpi.suffix}
                        duration={2000}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {kpi.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Case Studies - Accordion Cards */}
              <div className="space-y-6 mb-12">
                <Accordion type="single" collapsible className="space-y-4">
                  {industry.cases.map((caseStudy, caseIdx) => (
                    <AccordionItem
                      key={caseIdx}
                      value={`case-${idx}-${caseIdx}`}
                      className="border border-border rounded-2xl overflow-hidden bg-card shadow-sm hover:border-primary/60 hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition-all duration-200"
                    >
                      <AccordionTrigger className="px-6 py-5 text-left hover:no-underline group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="bg-primary/10 rounded-lg p-3 mt-1">
                            <TrendingUp className="w-5 h-5 text-primary" aria-hidden="true" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                              {caseStudy.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {caseStudy.overview}
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      
                      <AccordionContent className="px-6 pb-6">
                        <div className="space-y-6 pt-4">
                          {/* Overview */}
                          <div>
                            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2 flex items-center gap-2">
                              <Database className="w-4 h-4 text-primary" aria-hidden="true" />
                              Overview
                            </h4>
                            <p className="text-muted-foreground">
                              {caseStudy.overview}
                            </p>
                          </div>

                          {/* Challenges */}
                          <div>
                            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                              Challenges
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                              {caseStudy.challenges.map((challenge, chIdx) => (
                                <li 
                                  key={chIdx}
                                  className="flex items-start gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg p-3"
                                >
                                  <span className="text-destructive mt-0.5">•</span>
                                  {challenge}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Solution */}
                          <div>
                            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2 flex items-center gap-2">
                              <Zap className="w-4 h-4 text-primary" aria-hidden="true" />
                              Solution
                            </h4>
                            <p className="text-muted-foreground mb-3">
                              {caseStudy.solution}
                            </p>
                            
                            {/* Tech Stack Badges */}
                            <div className="flex flex-wrap gap-2">
                              {caseStudy.techBadges.map((tech, techIdx) => (
                                <Badge 
                                  key={techIdx} 
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Outcomes */}
                          <div>
                            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                              Outcomes
                            </h4>
                            <ul className="space-y-2">
                              {caseStudy.outcomes.map((outcome, outIdx) => (
                                <li 
                                  key={outIdx}
                                  className="flex items-start gap-3 text-muted-foreground"
                                >
                                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                                  <span>{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* CTA within accordion */}
                          <div className="pt-4 border-t border-border flex gap-3">
                            <Button asChild size="sm">
                              <Link to="/contact">
                                Talk to an Expert
                              </Link>
                            </Button>
                            <Button asChild variant="outline" size="sm">
                              <Link to="/case-studies" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                View more case studies
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* CTA Bar */}
              <div className="bg-muted/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-muted-foreground text-center md:text-left">
                  See how we've done it in the real world.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild variant="default">
                    <Link to={industry.ctaLink}>
                      {industry.ctaText}
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/contact">
                      Talk to an Expert
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* FAQs Section */}
        <section
          id="cs-faqs"
          ref={(el) => (sectionsRef.current[industries.length] = el)}
          className="py-16 md:py-20 bg-muted/30"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions about our case studies
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="border border-border rounded-xl overflow-hidden bg-card"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <span className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Final CTA */}
            <div className="mt-12 text-center">
              <div className="inline-flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Book a consultation →
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/industries">
                    See industries →
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
