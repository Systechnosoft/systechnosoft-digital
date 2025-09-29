import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Cloud, 
  Shield, 
  Zap, 
  TrendingUp, 
  Database, 
  Lock,
  ArrowRight,
  CheckCircle,
  Server,
  Settings,
  Globe,
  BarChart3,
  ChevronRight
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

// Background Components
const CircuitPattern = () => (
  <div className="absolute inset-0 overflow-hidden opacity-30">
    <svg 
      width="100%" 
      height="100%" 
      className="absolute inset-0"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path 
            d="M20 20h60M20 80h60M80 20v60M20 50h30v30h30" 
            stroke="rgba(255,255,255,0.1)" 
            strokeWidth="1" 
            fill="none"
          />
          <circle cx="50" cy="50" r="3" fill="rgba(229, 38, 41, 0.3)" />
          <circle cx="20" cy="20" r="2" fill="rgba(0, 122, 255, 0.3)" />
          <circle cx="80" cy="80" r="2" fill="rgba(0, 122, 255, 0.3)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  </div>
);

// Sub-navigation data
const subNavItems = [
  { id: "migrations", label: "Cloud Migrations" },
  { id: "modernization", label: "Modernization & Re-platforming" },
  { id: "security", label: "Security & IAM" },
  { id: "devops", label: "DevOps / SRE" },
  { id: "finops", label: "Cost Optimization (FinOps)" },
  { id: "backup-dr", label: "Backup & DR" },
  { id: "managed-ops", label: "Managed Cloud Ops" },
  { id: "case-studies", label: "Case Studies" },
  { id: "faq", label: "FAQ" }
];

// Data structures
const migrationServices = [
  { 
    icon: <Cloud className="h-6 w-6" />, 
    title: "Azure to Azure / VMware to Azure",
    description: "Seamless migration paths with minimal downtime"
  },
  { 
    icon: <Server className="h-6 w-6" />, 
    title: "AWS lift-and-shift & refactor",
    description: "Optimized EC2, RDS, and EKS migrations"
  },
  { 
    icon: <Globe className="h-6 w-6" />, 
    title: "GCP workloads",
    description: "Complete Google Cloud Platform transitions"
  },
  { 
    icon: <Database className="h-6 w-6" />, 
    title: "Microsoft 365 & SharePoint",
    description: "Modern workplace transformations"
  },
  { 
    icon: <Settings className="h-6 w-6" />, 
    title: "Google Workspace",
    description: "Collaborative cloud productivity suites"
  },
  { 
    icon: <ArrowRight className="h-6 w-6" />, 
    title: "Tenant-to-tenant",
    description: "Complex organizational mergers and splits"
  }
];

const modernizationCards = [
  {
    title: "Containerization (AKS/EKS/GKE)",
    description: "Transform monoliths into scalable microservices with Kubernetes orchestration",
    icon: <Server className="h-8 w-8" />
  },
  {
    title: "Serverless (Functions/Lambda/Cloud Run)",
    description: "Event-driven architectures that scale automatically and reduce operational overhead",
    icon: <Zap className="h-8 w-8" />
  },
  {
    title: "Data platforms (PaaS DB, managed Kafka)",
    description: "Modernize data infrastructure with fully managed database and streaming platforms",
    icon: <Database className="h-8 w-8" />
  }
];

const securityFeatures = [
  {
    title: "Entra ID / SSO",
    description: "Unified identity management across all cloud resources",
    icon: <Lock className="h-6 w-6" />
  },
  {
    title: "Privileged Access",
    description: "Just-in-time access and zero-standing privileges",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "CIS Benchmarks",
    description: "Industry-standard security configurations",
    icon: <CheckCircle className="h-6 w-6" />
  },
  {
    title: "Posture mgmt (Defender, Security Hub)",
    description: "Continuous security monitoring and compliance",
    icon: <Settings className="h-6 w-6" />
  }
];

const finopsCards = [
  {
    title: "Rightsizing",
    description: "Optimize resource allocation for cost efficiency",
    metric: "↓ 30-50% costs"
  },
  {
    title: "Reservations/Savings Plans",
    description: "Strategic capacity planning and commitment discounts",
    metric: "↓ 20-40% costs"
  },
  {
    title: "Storage tiering",
    description: "Automated lifecycle policies for optimal storage costs",
    metric: "↓ 60% storage costs"
  },
  {
    title: "Idle kill-switches",
    description: "Automated shutdown of unused resources",
    metric: "↓ 15-25% costs"
  }
];

const managedOpsFeatures = [
  {
    title: "24×7 NOC",
    description: "Round-the-clock network operations center monitoring",
    icon: <Globe className="h-6 w-6" />
  },
  {
    title: "Patch mgmt",
    description: "Automated security updates and maintenance windows",
    icon: <Settings className="h-6 w-6" />
  },
  {
    title: "Config drift",
    description: "Infrastructure as Code compliance monitoring",
    icon: <CheckCircle className="h-6 w-6" />
  },
  {
    title: "Compliance (SOC2/ISO)",
    description: "Continuous audit readiness and regulatory compliance",
    icon: <Shield className="h-6 w-6" />
  }
];

const caseStudies = [
  {
    title: "40% faster workflows",
    industry: "Banking, AU",
    description: "Streamlined cloud operations and automated deployments"
  },
  {
    title: "30% ops efficiency",
    industry: "Oil & Gas, US",
    description: "Modernized infrastructure monitoring and incident response"
  },
  {
    title: "50% faster intercompany",
    industry: "UK FS",
    description: "Optimized multi-tenant architecture and data flows"
  }
];

const faqItems = [
  {
    question: "What are typical migration timelines?",
    answer: "Migration timelines vary based on complexity. Simple lift-and-shift migrations typically take 2-4 months, while comprehensive modernization projects may span 6-12 months. We provide detailed project timelines during our discovery phase."
  },
  {
    question: "How do you minimize downtime during migrations?",
    answer: "We use proven migration strategies including blue-green deployments, database replication, and phased cutover approaches. Most migrations achieve less than 4 hours of planned downtime with comprehensive rollback procedures."
  },
  {
    question: "What is the shared responsibility model?",
    answer: "Cloud providers secure the infrastructure while you secure your data and applications. We help you understand and implement your responsibilities including identity management, network security, and data encryption."
  },
  {
    question: "How do you ensure security during migration?",
    answer: "We implement zero-trust security principles from day one, including encrypted data transfer, identity verification, network segmentation, and continuous security monitoring throughout the migration process."
  },
  {
    question: "Do you support multi-cloud strategies?",
    answer: "Yes, we design multi-cloud and hybrid cloud architectures based on your specific requirements. This includes workload distribution, data sovereignty considerations, and vendor risk management strategies."
  },
  {
    question: "What ongoing support do you provide?",
    answer: "We offer 24×7 managed services including monitoring, incident response, security patching, cost optimization, and regular architecture reviews to ensure your cloud infrastructure remains optimized and secure."
  }
];

export default function CloudServices() {
  const [activeSection, setActiveSection] = useState("migrations");

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
      const headerOffset = 160; // Account for sticky header and subnav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Cloud Services | Systechnosoft Technologies</title>
        <meta 
          name="description" 
          content="Secure, scalable cloud services—Azure, AWS, Google Cloud, M365/Workspace migrations, Zero-Trust IAM, DevOps/SRE, FinOps, Backup & DR, Managed Ops." 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Cloud Services",
            "provider": {
              "@type": "Organization",
              "name": "Systechnosoft Technologies",
              "url": "https://systechnosoft.com"
            },
            "areaServed": ["IN", "Global"],
            "sameAs": "https://systechnosoft.com"
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">
        {/* Breadcrumbs */}
        <nav className="bg-muted/30 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <ChevronRight className="h-4 w-4" />
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <ChevronRight className="h-4 w-4" />
              <li><span className="text-muted-foreground">IT Solutions</span></li>
              <ChevronRight className="h-4 w-4" />
              <li><span className="text-foreground font-medium">Cloud Services</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero Section (Dark) */}
        <section className="relative bg-gradient-to-br from-[hsl(var(--sys-black))] to-[hsl(var(--sys-charcoal))] text-white py-24">
          <CircuitPattern />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                Cloud Services
              </h1>
              <p className="font-inter text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Design, migrate, secure, and operate on Azure, AWS, and Google Cloud—with measurable outcomes.
              </p>
              
              {/* Stat chips */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                  99.9% uptime designs
                </Badge>
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                  Zero-trust aligned
                </Badge>
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                  24×7 monitoring
                </Badge>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/contact?topic=cloud-services">
                    Claim Your Free Insight
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Link to="/contact?topic=network-health">
                    IT Network Health Check
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Sub-navigation */}
        <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex overflow-x-auto py-4 space-x-8 scrollbar-none">
              {subNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors rounded-full",
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Cloud Migrations Section (Light) */}
        <section id="migrations" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6 text-foreground">
                  Cloud Migrations
                </h2>
                <div className="space-y-6">
                  {migrationServices.map((service, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-montserrat font-semibold text-lg mb-2">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-montserrat font-semibold text-xl mb-6">Outcomes</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-green-100 text-green-800 px-4 py-2">
                    Lower downtime
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                    Governed change
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-800 px-4 py-2">
                    Faster cutover
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modernization Section (Dark) */}
        <section id="modernization" className="py-20 bg-gradient-to-br from-[hsl(var(--sys-black))] to-[hsl(var(--sys-charcoal))] text-white relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-12 text-center">
              Modernization & Re-platforming
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {modernizationCards.map((card, index) => (
                <Card key={index} className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4">
                      {card.icon}
                    </div>
                    <h3 className="font-montserrat font-semibold text-xl mb-3">
                      {card.title}
                    </h3>
                    <p className="text-white/80">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-white/80 text-sm">
                Blueprints + IaC (Bicep/Terraform) for reproducible releases.
              </p>
            </div>
          </div>
        </section>

        {/* Security & IAM Section (Light) */}
        <section id="security" className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-12 text-center">
              Security & IAM
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="font-montserrat font-semibold text-lg mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-accent text-accent-foreground p-6 rounded-lg text-center">
              <p className="font-medium">
                Zero-Trust reference design included.
              </p>
            </div>
          </div>
        </section>

        {/* DevOps / SRE Section (White) */}
        <section id="devops" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-12 text-center">
              DevOps / SRE
            </h2>
            
            <div className="text-center mb-12">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge className="px-4 py-2 text-lg">CI/CD</Badge>
                <Badge className="px-4 py-2 text-lg">GitOps</Badge>
                <Badge className="px-4 py-2 text-lg">Observability (Grafana/Prometheus/App Insights/CloudWatch)</Badge>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <p className="font-semibold text-green-800">Mean Time to Recover ↓</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <p className="font-semibold text-blue-800">Change Failure Rate ↓</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FinOps Section (Light) */}
        <section id="finops" className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-12 text-center">
              Cost Optimization (FinOps)
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {finopsCards.map((card, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-montserrat font-semibold text-lg mb-3">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {card.description}
                    </p>
                    <Badge variant="secondary" className="text-green-700 bg-green-100">
                      {card.metric}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Backup & DR Section (Dark) */}
        <section id="backup-dr" className="py-20 bg-gradient-to-br from-[hsl(var(--sys-black))] to-[hsl(var(--sys-charcoal))] text-white relative">
          <div className="absolute inset-0 opacity-30">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 55%),
                                 linear-gradient(-45deg, transparent 45%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 55%)`,
                backgroundSize: '40px 40px'
              }}
            />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-12 text-center">
              Backup & Disaster Recovery
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {["Remote backups", "Cloud data protection", "Hybrid/tiered storage", "Live archiving (outsourced)", "DR playbooks"].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Badge className="bg-primary text-primary-foreground px-6 py-3 text-lg">
                  RPO/RTO defined
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Managed Ops Section (White) */}
        <section id="managed-ops" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-12 text-center">
              Managed Cloud Operations
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {managedOpsFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-primary mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="font-montserrat font-semibold text-lg mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section (Light) */}
        <section id="case-studies" className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-12 text-center">
              Case Studies
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-montserrat font-semibold text-xl mb-2 text-primary">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {study.industry}
                    </p>
                    <p className="text-muted-foreground">
                      {study.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section (White) */}
        <section id="faq" className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-montserrat font-semibold text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section (Dark) */}
        <section className="py-20 bg-gradient-to-r from-[hsl(var(--sys-black))] to-[hsl(var(--sys-charcoal))] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
              Ready to Modernize on the Cloud?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Start your cloud transformation journey with our expert team and proven methodologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/contact?topic=cloud-services">
                  Claim Your Free Insight
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/contact?topic=solutions-architect">
                  Talk to an Architect
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}