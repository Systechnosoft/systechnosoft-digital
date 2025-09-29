import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Cloud, 
  Shield, 
  Zap, 
  Database, 
  Lock,
  ArrowRight,
  CheckCircle,
  Server,
  Settings,
  Globe,
  ChevronRight,
  Eye,
  Monitor,
  Layers,
  Workflow,
  Clock,
  Target,
  FileCheck,
  HardDrive,
  Users,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

// Circuit pattern background
const CircuitPattern = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20">
    <svg width="100%" height="100%" className="absolute inset-0" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M20 20h60M20 80h60M80 20v60M20 50h30v30h30" stroke="rgba(229, 38, 41, 0.1)" strokeWidth="1" fill="none"/>
          <circle cx="50" cy="50" r="3" fill="rgba(229, 38, 41, 0.2)" />
          <circle cx="20" cy="20" r="2" fill="rgba(0, 122, 255, 0.2)" />
          <circle cx="80" cy="80" r="2" fill="rgba(0, 122, 255, 0.2)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  </div>
);

// Navigation items
const subNavItems = [
  { id: "cloud-overview", label: "Overview" },
  { id: "cloud-migrations", label: "Migrations" },
  { id: "cloud-architecture", label: "Architecture & Security" },
  { id: "cloud-ops", label: "Managed Ops" },
  { id: "cloud-backup", label: "Backup & Recovery" },
  { id: "cloud-faqs", label: "FAQs" }
];

export default function CloudServices() {
  const [activeSection, setActiveSection] = useState("cloud-overview");

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = subNavItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(subNavItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 160;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Cloud Services | Systechnosoft Technologies</title>
        <meta name="description" content="Design, migrate, and operate secure, scalable cloud platforms on Azure, AWS, and Google Cloud—aligned to Zero-Trust and measured SLAs." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Cloud Services",
            "provider": { "@type": "Organization", "name": "Systechnosoft Technologies" },
            "areaServed": ["IN", "GLOBAL"]
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">
        {/* Breadcrumbs */}
        <nav className="bg-gray-50 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-gray-900">Services</Link></li>
              <ChevronRight className="h-4 w-4" />
              <li><span className="text-gray-500">IT Solutions</span></li>
              <ChevronRight className="h-4 w-4" />
              <li><span className="text-gray-900 font-medium">Cloud Services</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="cloud-hero" className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
          <CircuitPattern />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6">Cloud Services</h1>
            <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
              Design, migrate, and operate secure, scalable cloud platforms on Azure, AWS, and Google Cloud—aligned to Zero-Trust and measured SLAs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge className="bg-white/10 text-white border-white/20 px-4 py-2">99.9% uptime designs</Badge>
              <Badge className="bg-white/10 text-white border-white/20 px-4 py-2">Zero-trust aligned</Badge>
              <Badge className="bg-white/10 text-white border-white/20 px-4 py-2">24×7 monitoring</Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#E52629] hover:bg-[#E52629]/90" data-track="cloud-hero-cta">
                <Link to="/contact?src=cloud-hero">Claim Your Free Insight <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/contact?type=arch-review">Request Architecture Review</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <div id="cloud-nav" className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex overflow-x-auto py-4 space-x-8 scrollbar-none">
              {subNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors rounded-full",
                    activeSection === item.id ? "bg-[#E52629] text-white" : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Overview Section */}
        <section id="cloud-overview" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-bold text-3xl md:text-4xl mb-6">Cloud Platforms & Outcomes</h2>
                <div className="space-y-4 mb-8">
                  <h3 className="font-semibold text-xl">Platforms:</h3>
                  <p className="text-gray-600"><strong>Azure, AWS, Google Cloud, Microsoft 365/SharePoint, Google Workspace, SaaS</strong></p>
                  <h3 className="font-semibold text-xl mt-6">Outcomes:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Faster delivery</li>
                    <li>Reduced ops toil</li>
                    <li>Predictable costs</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <Cloud className="h-32 w-32 text-blue-600" />
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#E52629] mb-2">40%</div>
                  <div className="font-medium mb-2">faster workflows</div>
                  <div className="text-sm text-gray-500">Representative outcome</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#E52629] mb-2">30%</div>
                  <div className="font-medium mb-2">ops efficiency</div>
                  <div className="text-sm text-gray-500">Representative outcome</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#E52629] mb-2">50%</div>
                  <div className="font-medium mb-2">faster intercompany processing</div>
                  <div className="text-sm text-gray-500">Representative outcome</div>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-sm text-gray-500 italic text-center">
              Figures are representative outcomes from enterprise programs; details available on request.
            </p>
          </div>
        </section>

        {/* Migrations Section */}
        <section id="cloud-migrations" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
          <CircuitPattern />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-bold text-3xl md:text-4xl mb-12 text-center">Cloud Migrations</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <Cloud className="h-6 w-6 text-[#E52629] mb-4" />
                  <h3 className="font-semibold text-xl mb-3">Azure Migrations</h3>
                  <p className="text-white/80">Landing zones, AVD, PaaS refactors.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <Server className="h-6 w-6 text-[#E52629] mb-4" />
                  <h3 className="font-semibold text-xl mb-3">AWS & GCP Migrations</h3>
                  <p className="text-white/80">VPC/VPN, IAM hardening, phased cutovers.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <Database className="h-6 w-6 text-[#E52629] mb-4" />
                  <h3 className="font-semibold text-xl mb-3">M365 & Google Workspace</h3>
                  <p className="text-white/80">Mail/Drive/SharePoint moves with coexistence.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mb-12">
              <h3 className="font-semibold text-xl mb-8 text-center">5-Step Process</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {["Assess", "Plan", "Landing Zone", "Move", "Validate"].map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-[#E52629] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="ml-3 font-medium">{step}</div>
                    {index < 4 && <ArrowRight className="mx-4 h-4 w-4 text-white/50" />}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/contact?type=migration">Talk to a Migration Lead</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Architecture & Security */}
        <section id="cloud-architecture" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-bold text-3xl md:text-4xl mb-12 text-center">Architecture & Security</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                { title: "Identity & Access (Entra ID / AWS IAM)", icon: <Lock className="h-6 w-6" /> },
                { title: "Network & Segmentation (VNet/VPC, NAC, WAF)", icon: <Globe className="h-6 w-6" /> },
                { title: "Zero-Trust controls", icon: <Shield className="h-6 w-6" /> },
                { title: "Observability (Azure Monitor/CloudWatch + Prometheus/Grafana)", icon: <Monitor className="h-6 w-6" /> },
                { title: "Data Protection (encryption at rest/in transit, KMS)", icon: <Database className="h-6 w-6" /> },
                { title: "Compliance guardrails (ISO 27001, SOC 2)", icon: <FileCheck className="h-6 w-6" /> }
              ].map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-[#E52629] mb-4">{feature.icon}</div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-[#007AFF]/10 border-l-4 border-[#007AFF] p-6 rounded-r-lg">
              <p className="text-lg font-medium">Policy-as-code and IaC (Terraform) baked into pipelines.</p>
              <p className="text-sm text-gray-500 mt-2"><em>Evidence available on request</em></p>
            </div>
          </div>
        </section>

        {/* Managed Ops */}
        <section id="cloud-ops" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
          <CircuitPattern />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-bold text-3xl md:text-4xl mb-12 text-center">Managed Cloud Operations</h2>
            
            <div className="space-y-6 mb-12">
              {[
                "24×7 monitoring & alerting (SLOs & runbooks)",
                "Patch & backup orchestration", 
                "Cost optimization (FinOps) with monthly reports",
                "SRE incident response & SLAs (P1 ≤ 15m acknowledge)",
                "Automation & pipelines (Terraform/GitHub Actions)"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#E52629] rounded-full mt-3"></div>
                  <p className="text-lg text-white/90">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-green-600 text-white px-4 py-2">MTTR</Badge>
              <Badge className="bg-blue-600 text-white px-4 py-2">P1 SLA</Badge>
              <Badge className="bg-purple-600 text-white px-4 py-2">Change success rate</Badge>
            </div>
          </div>
        </section>

        {/* Backup & Recovery */}
        <section id="cloud-backup" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-bold text-3xl md:text-4xl mb-12 text-center">Backup & Recovery</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {[
                  { title: "Remote cloud backups", icon: <HardDrive className="h-6 w-6" /> },
                  { title: "Hybrid/tiered storage", icon: <Layers className="h-6 w-6" /> },
                  { title: "Cloud data protection", icon: <Shield className="h-6 w-6" /> },
                  { title: "Live archiving (outsourced)", icon: <Clock className="h-6 w-6" /> },
                  { title: "Disaster recovery", icon: <FileCheck className="h-6 w-6" /> }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-[#E52629] mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h3 className="font-semibold text-xl mb-6">RPO/RTO Selectors</h3>
                <div className="space-y-4">
                  {[
                    { label: "RPO 15m / RTO 2h", tier: "Premium" },
                    { label: "RPO 4h / RTO 8h", tier: "Standard" },
                    { label: "RPO 24h / RTO 24h", tier: "Basic" }
                  ].map((option, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex justify-between items-center">
                        <span className="font-medium">{option.label}</span>
                        <Badge variant={index === 0 ? "default" : "secondary"}>{option.tier}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tooling & Integrations */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-bold text-3xl mb-12 text-center">Tooling & Integrations</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["Terraform", "Azure DevOps", "GitHub Actions", "Azure Monitor", "CloudWatch", "Cloud Logging", "Sentinel", "CloudTrail", "Prometheus", "Grafana"].map((tool, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm">{tool}</Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Proof & Case Studies */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
          <CircuitPattern />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-bold text-3xl md:text-4xl mb-12">Proven Results</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {["40%", "30%", "50%"].map((metric, index) => (
                <div key={index}>
                  <div className="text-5xl font-bold text-[#E52629] mb-4">{metric}</div>
                  <div className="text-xl font-medium">Representative outcome</div>
                </div>
              ))}
            </div>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </section>

        {/* CTA Band */}
        <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-bold text-3xl md:text-4xl mb-8">Ready to modernize your cloud?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#E52629] hover:bg-[#E52629]/90" data-track="cloud-cta-final">
                <Link to="/contact?src=cloud-cta">Claim Your Free Insight <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/contact?type=quote">Get a Quotation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="cloud-faqs" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-bold text-3xl md:text-4xl mb-12 text-center">FAQs</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "How do you minimize downtime during migration?", a: "We use proven migration strategies including blue-green deployments, database replication, and phased cutover approaches." },
                { q: "What security baselines do you implement by default?", a: "We implement Zero-Trust principles including multi-factor authentication, least-privilege access, and continuous security monitoring." },
                { q: "Which clouds and SaaS suites do you support?", a: "We support Microsoft Azure, AWS, Google Cloud Platform, Microsoft 365/SharePoint, Google Workspace, and other major SaaS platforms." },
                { q: "What does your managed service include?", a: "Our managed services include 24×7 monitoring, automated patch management, backup orchestration, cost optimization reporting, and incident response." },
                { q: "How do you price projects vs. managed services?", a: "Projects are typically fixed-price based on scope. Managed services use a monthly subscription model based on infrastructure size and service levels." },
                { q: "Can you work with our existing CSP/MSP?", a: "Yes, we frequently collaborate with existing providers in a co-managed model to deliver specialized expertise where needed." }
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Cross-links */}
        <section className="py-16 bg-gray-50 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-bold text-2xl mb-8">Related Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Data Migration", path: "/services/data-migration" },
                { label: "Managed IT Services", path: "/services/managed-it" },
                { label: "Backup & Recovery", path: "/services/backup" },
                { label: "Appian", path: "/services/low-code/appian" },
                { label: "Salesforce", path: "/services/low-code/salesforce" }
              ].map((link, index) => (
                <Button key={index} asChild variant="outline" size="sm">
                  <Link to={link.path}>{link.label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}