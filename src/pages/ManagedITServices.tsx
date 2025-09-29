import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, 
  Shield, 
  Headphones, 
  Wrench, 
  Network, 
  Monitor, 
  Users, 
  FileText, 
  Wifi, 
  ShieldCheck 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ManagedITServices() {
  const [activeSection, setActiveSection] = useState("helpdesk");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  const navItems = [
    { id: "helpdesk", label: "Helpdesk" },
    { id: "onsite-support", label: "Onsite Support" },
    { id: "network-management", label: "Network Management" },
    { id: "rmm", label: "Remote Monitoring & Management" },
    { id: "active-directory-monitoring", label: "Active Directory Monitoring" },
    { id: "event-log-monitoring", label: "Event Log Monitoring" },
    { id: "access-point-solutions", label: "Access Point Solutions" },
    { id: "firewall-management", label: "Firewall Management" },
  ];

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
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Account for header + sticky nav
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const targetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      id: "helpdesk",
      icon: Headphones,
      title: "Helpdesk",
      description: "Multi‑channel L1–L2 support, SLAs, ITSM workflows, knowledge base.",
      bullets: [
        "Ticketing automation",
        "Response SLOs",
        "Root‑cause tracking",
        "Self‑service portal"
      ],
      outcome: "Faster incident resolution (↓MTTR)"
    },
    {
      id: "onsite-support",
      icon: Wrench,
      title: "Onsite Support",
      description: "Scheduled visits, smart‑hands, incident response.",
      bullets: [
        "Planned field visits",
        "Emergency dispatch",
        "Asset handover support",
        "Break/fix"
      ],
      outcome: "Hands‑on coverage when remote isn't enough"
    },
    {
      id: "network-management",
      icon: Network,
      title: "Network Management",
      description: "Switching/routing, WAN, NAC, policy management.",
      bullets: [
        "Config baselines",
        "Change control",
        "QoS",
        "Network segmentation",
        "NCM backups"
      ],
      outcome: "Stable, policy‑driven networks"
    },
    {
      id: "rmm",
      icon: Monitor,
      title: "Remote Monitoring & Management (RMM)",
      description: "Endpoint/server monitoring, patch management, config drift.",
      bullets: [
        "Health checks",
        "Patch windows",
        "Automations",
        "Alert routing"
      ],
      outcome: "Proactive maintenance, fewer outages"
    },
    {
      id: "active-directory-monitoring",
      icon: Users,
      title: "Active Directory Monitoring",
      description: "Entra ID/AD health, sync status, risky sign‑ins, conditional access drifts.",
      bullets: [
        "Replication lag alerts",
        "Lockout trends",
        "CA policy drift",
        "Sync errors"
      ],
      outcome: "Identity posture that stays compliant"
    },
    {
      id: "event-log-monitoring",
      icon: FileText,
      title: "Event Log Monitoring",
      description: "Central log ingestion, correlation, alerting.",
      bullets: [
        "Windows/Linux logs",
        "Syslog",
        "Audit trails",
        "Threshold/behavior rules"
      ],
      outcome: "Faster detection, audited response"
    },
    {
      id: "access-point-solutions",
      icon: Wifi,
      title: "Access Point Solutions",
      description: "Wi‑Fi survey, deployment, optimization, captive portal.",
      bullets: [
        "RF planning",
        "Roaming optimization",
        "Heatmaps",
        "Guest VLANs"
      ],
      outcome: "Reliable, secure wireless at scale"
    },
    {
      id: "firewall-management",
      icon: ShieldCheck,
      title: "Firewall Management",
      description: "Rule reviews, IPS/IDS, VPNs, HA, change management.",
      bullets: [
        "Rule optimization",
        "Threat intelligence",
        "VPN tunnels",
        "HA failover testing"
      ],
      outcome: "Secure perimeter with minimal attack surface"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Managed IT Services - 24/7 Monitoring & Support | Systechnosoft</title>
        <meta name="description" content="Comprehensive managed IT services with 24×7 monitoring, SLA-backed support, and automation. Helpdesk, network management, RMM, and security services." />
        <meta name="keywords" content="managed IT services, 24/7 monitoring, helpdesk, network management, RMM, IT support, Systechnosoft" />
        <link rel="canonical" href={`${window.location.origin}/services/managed-it-services`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Managed IT Services - 24/7 Monitoring & Support | Systechnosoft" />
        <meta property="og:description" content="Comprehensive managed IT services with 24×7 monitoring, SLA-backed support, and automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${window.location.origin}/services/managed-it-services`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Managed IT Services - 24/7 Monitoring & Support | Systechnosoft" />
        <meta name="twitter:description" content="Comprehensive managed IT services with 24×7 monitoring, SLA-backed support, and automation." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Managed IT Services",
            "provider": {
              "@type": "Organization",
              "name": "Systechnosoft"
            },
            "description": "Comprehensive managed IT services with 24×7 monitoring, SLA-backed support, and automation across your entire IT footprint.",
            "url": `${window.location.origin}/services/managed-it-services`,
            "serviceType": "Managed IT Services"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section - Dark */}
        <section className="relative bg-gradient-to-b from-[#1C1C1C] to-[#3C3C3C] text-white overflow-hidden">
          {/* Tech Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
              <path d="M100 100L200 100L200 200M200 100L300 200L400 100M500 150L600 50L700 150M300 300L400 200L500 300M600 350L700 250L800 350" 
                    stroke="currentColor" strokeWidth="2" />
              <circle cx="150" cy="150" r="5" fill="currentColor" />
              <circle cx="350" cy="150" r="5" fill="currentColor" />
              <circle cx="550" cy="100" r="5" fill="currentColor" />
              <circle cx="750" cy="200" r="5" fill="currentColor" />
            </svg>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 py-24">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm text-white/70">
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="mx-2">›</span>
              <Link to="/services" className="hover:text-white transition-colors">IT Solutions</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Managed IT Services</span>
            </nav>

            <div className="text-center">
              <h1 className="font-montserrat font-bold text-5xl lg:text-6xl mb-6">
                Managed IT Services
              </h1>
              <p className="font-inter text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
                Operate securely with 24×7 visibility, SLA-backed support, and automation across your entire IT footprint.
              </p>
              
              {/* Hero Chips */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium">
                  24×7 monitoring
                </span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium">
                  SLA-backed
                </span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium">
                  Zero‑trust aligned
                </span>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-[#E52629] hover:bg-[#E52629]/90 text-white px-8 py-4 text-lg"
                    onClick={() => {
                      // GA event tracking
                      if (typeof window !== 'undefined' && (window as any).gtag) {
                        (window as any).gtag('event', 'cta_it_health_check', {
                          page_location: window.location.href,
                          page_title: document.title
                        });
                      }
                    }}
                  >
                    <Shield className="mr-2 h-5 w-5" />
                    IT Network Health Check
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-4 text-lg"
                    onClick={() => {
                      // GA event tracking  
                      if (typeof window !== 'undefined' && (window as any).gtag) {
                        (window as any).gtag('event', 'cta_free_insight', {
                          page_location: window.location.href,
                          page_title: document.title
                        });
                      }
                    }}
                  >
                    Claim Your Free Insight
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <div className="sticky top-16 z-40 bg-white border-b shadow-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide py-3">
              {/* External links */}
              <Link 
                to="/services/cloud"
                className="whitespace-nowrap px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Cloud Services
              </Link>
              
              <span className="text-muted-foreground mx-2">|</span>
              <span className="px-4 py-2 text-sm font-medium text-[#E52629] border-b-2 border-[#E52629]">
                Managed IT Services
              </span>
              
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-[#E52629] border-b-2 border-[#E52629]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <span className="text-muted-foreground mx-2">|</span>
              <Link 
                to="/services/microsoft-dynamics-365"
                className="whitespace-nowrap px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Microsoft Dynamics 365
              </Link>
              <Link 
                to="/services/backup-recovery"
                className="whitespace-nowrap px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Backup & Recovery
              </Link>
            </div>
          </div>
        </div>

        {/* Service Tiles - Light Background */}
        <section className="py-20 bg-[#F5F5F5]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={service.id}
                    id={service.id}
                    ref={(el) => (sectionsRef.current[index] = el)}
                    className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
                    style={{ scrollMarginTop: '120px' }}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#E52629]/10 rounded-lg">
                          <Icon className="h-6 w-6 text-[#E52629]" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="font-montserrat text-xl mb-2">
                            {service.title}
                          </CardTitle>
                          <p className="font-inter text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-2 mb-4">
                        {service.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-center text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-[#E52629] rounded-full mr-3 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 p-3 bg-[#007AFF]/5 rounded-lg">
                        <p className="text-sm font-medium text-[#007AFF]">
                          {service.outcome}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA - Dark */}
        <section className="py-20 bg-gradient-to-b from-[#1C1C1C] to-[#3C3C3C] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6">
              Ready to Transform Your IT Operations?
            </h2>
            <p className="font-inter text-xl text-white/90 mb-8">
              Let's discuss how our managed IT services can improve your uptime, security, and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-[#E52629] hover:bg-[#E52629]/90 text-white px-8 py-4 text-lg"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-4 text-lg"
                >
                  Explore All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}