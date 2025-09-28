import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Cloud, 
  Database, 
  Settings, 
  Shield, 
  Server, 
  Users, 
  Building, 
  ArrowRight, 
  ChevronRight,
  CheckCircle,
  Clock,
  Globe,
  Lock,
  Monitor,
  Wifi,
  HardDrive,
  Search,
  Zap,
  BarChart3,
  FileText,
  UserCheck,
  RefreshCw,
  Headphones,
  MapPin,
  Network,
  Activity,
  Eye,
  Flame,
  Radio,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const navigationSections = [
  { id: "cloud-services", label: "Cloud Services" },
  { id: "data-migration", label: "Data Migration" },
  { id: "managed-it-services", label: "Managed IT Services" },
  { id: "microsoft-dynamics-365", label: "Microsoft Dynamics 365" },
  { id: "backup-recovery", label: "Backup & Recovery" },
  { id: "faqs", label: "FAQs" }
];

const cloudServices = [
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Azure Migrations",
    description: "Landing zone, network & identity, cost governance, IaC, BCDR.",
    features: ["Landing zone design", "Identity integration", "Cost optimization", "Infrastructure as Code", "Business continuity"]
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "SharePoint",
    description: "Intranet & content services, permissions/governance, migration from on-prem.",
    features: ["Content management", "Governance frameworks", "Permission structures", "Migration services", "Modern intranet"]
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "AWS Migrations",
    description: "Well-Architected workload moves, VPC/IAM, observability, DR.",
    features: ["Well-Architected framework", "VPC setup", "IAM policies", "Monitoring", "Disaster recovery"]
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Google Workspace Migrations",
    description: "Tenant setup, identity, mail/calendar/files migration, change management.",
    features: ["Tenant configuration", "Identity mapping", "Data migration", "Change management", "Training programs"]
  },
  {
    icon: <Building className="h-6 w-6" />,
    title: "Software as a Service",
    description: "Selection, integration, SSO, security baselines, data residency.",
    features: ["Vendor selection", "Integration planning", "Single sign-on", "Security compliance", "Data governance"]
  }
];

const dataMigrationServices = [
  {
    icon: <UserCheck className="h-6 w-6" />,
    title: "Entra",
    description: "Microsoft Entra ID-aware directory/data moves with identity mapping, roles, and audit trails.",
    process: ["Identity discovery", "Role mapping", "Migration execution", "Audit validation"]
  },
  {
    icon: <ArrowRight className="h-6 w-6" />,
    title: "On-Prem → Cloud",
    description: "Schema mapping, cutover windows, validation harness, backout plan for seamless transitions.",
    process: ["Schema analysis", "Migration planning", "Pilot testing", "Production cutover"]
  },
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: "Cloud → Cloud",
    description: "Cross-tenant strategy, throttling, immutability, chain of custody for secure transfers.",
    process: ["Strategy design", "Transfer optimization", "Security validation", "Documentation"]
  }
];

const managedServices = [
  {
    icon: <Headphones className="h-6 w-6" />,
    title: "Helpdesk",
    description: "Multi-channel L1-L2 support, SLAs, knowledge base."
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Onsite Support",
    description: "Scheduled visits, smart-hands, incident response."
  },
  {
    icon: <Network className="h-6 w-6" />,
    title: "Network Management",
    description: "Switching/routing, WAN, NAC, policy management."
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: "Remote Monitoring & Management (RMM)",
    description: "Endpoint/server monitoring, patch management, config drift."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Active Directory Monitoring",
    description: "Security baselines, stale objects, delegated admin oversight."
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Event Log Monitoring",
    description: "SIEM integration, anomaly alerts, retention policy."
  },
  {
    icon: <Wifi className="h-6 w-6" />,
    title: "Access Point Solutions",
    description: "Wi-Fi surveys, controller setup, zero-touch provisioning."
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Firewall Management Services",
    description: "Ruleset hygiene, IPS/IDS, HA/DR testing."
  }
];

const backupServices = [
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Remote backups through Cloud",
    description: "Immutable copies, geo-redundant storage with enterprise-grade security."
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Virtual management of IT infrastructure",
    description: "Snapshot orchestration, policy enforcement, automated scheduling."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Cloud data protection",
    description: "Encryption, key management, compliance-ready retention policies."
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Hybrid cloud storage",
    description: "On-premises + cloud tiers, intelligent gateways, cost optimization."
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Tiered storage",
    description: "Hot/warm/cold strategy, automated lifecycle policies, cost control."
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "Live archiving (Outsource)",
    description: "Journaling, eDiscovery readiness, legal hold management."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Disaster recovery",
    description: "RPO/RTO targets, DR drills, detailed runbooks, tested failover."
  }
];

const faqs = [
  {
    question: "How do you approach security in multi-cloud environments?",
    answer: "We implement zero-trust architecture principles across all cloud platforms, with consistent identity management, encryption standards, and monitoring. Our approach includes network segmentation, least-privilege access, and continuous compliance validation."
  },
  {
    question: "What migration validation do you perform?",
    answer: "We conduct comprehensive data integrity checks, performance validation, and functional testing at every migration phase. This includes checksum verification, application testing, and rollback procedures to ensure zero data loss."
  },
  {
    question: "What's included in Remote Monitoring & Management (RMM)?",
    answer: "Our RMM services include 24/7 endpoint monitoring, automated patch management, performance optimization, security event correlation, and proactive issue resolution with detailed reporting and SLA compliance."
  },
  {
    question: "How do you size backup targets and set RPO/RTO?",
    answer: "We analyze your data growth patterns, business criticality, and compliance requirements to design optimal backup strategies. RPO/RTO targets are established based on business impact analysis and validated through regular DR testing."
  },
  {
    question: "What does a typical Microsoft Dynamics 365 implementation timeline look like?",
    answer: "Implementation timelines vary by scope, but typically range from 3-12 months. We use agile methodologies with 2-week sprints, including discovery, design, development, testing, and deployment phases with continuous stakeholder involvement."
  }
];

export default function ITSolutions() {
  const [activeSection, setActiveSection] = useState("top");
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationSections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(section => section.element);

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Handle URL hash for Dynamics 365 tabs
    const hash = window.location.hash;
    const tabMatch = hash.match(/microsoft-dynamics-365\?tab=(.+)/);
    if (tabMatch) {
      setActiveTab(tabMatch[1]);
    }
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    window.history.replaceState(null, '', `#microsoft-dynamics-365?tab=${value}`);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <head>
        <title>IT Solutions | Cloud, Migrations, Managed IT, Microsoft Dynamics 365, Backup | Systechnosoft</title>
        <meta name="description" content="Enterprise IT solutions across Cloud, Data Migration, Managed IT, Microsoft Dynamics 365, and Backup & Recovery—secure architectures, measurable outcomes, and scalable delivery." />
      </head>

      {/* Hero Section */}
      <section id="top" className="relative bg-[#1C1C1C] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E52629' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3Ccircle cx='33' cy='5' r='1'/%3E%3Ccircle cx='3' cy='23' r='1'/%3E%3Ccircle cx='25' cy='25' r='1'/%3E%3Ccircle cx='43' cy='43' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-8">
              IT Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              We design secure, scalable architectures and operate them with measurable outcomes—across Cloud, Migrations, Managed IT, Microsoft Dynamics 365, and Backup & Recovery.
            </p>
            
            {/* KPI Chips */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="outline" className="bg-white/10 border-white/20 text-white px-4 py-2">
                <CheckCircle className="h-4 w-4 mr-2" />
                99.9% uptime designs
              </Badge>
              <Badge variant="outline" className="bg-white/10 border-white/20 text-white px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Zero-trust aligned
              </Badge>
              <Badge variant="outline" className="bg-white/10 border-white/20 text-white px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                24×7 monitoring
              </Badge>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-[#E52629] hover:bg-[#E52629]/90 text-white px-8 py-4 text-lg">
                  Claim Your Free Insight
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/tools/health-check">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                  IT Network Health Check
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-4">
            <div className="flex space-x-8 overflow-x-auto">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`whitespace-nowrap text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                    activeSection === section.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Cloud Services Section */}
      <section id="cloud-services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat mb-6">Cloud Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modernize or build greenfield on secure cloud foundations with our comprehensive cloud migration and management services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {cloudServices.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold font-montserrat mb-6">Deliverables & Outcomes</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-primary">Key Deliverables</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-2" />Landing-zone design</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-2" />IaC templates</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-2" />Security baselines (CIS/Well-Architected)</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-2" />Operational runbooks</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-primary">Business Outcomes</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />Faster provisioning</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />Improved resilience</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />Predictable spend</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />Centralized identity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Migration Section */}
      <section id="data-migration" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat mb-6">Data Migration</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Move data with verified integrity, performance, and auditability across any platform or environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {dataMigrationServices.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-medium mr-3">
                          {idx + 1}
                        </div>
                        {step}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-background rounded-xl p-8 border">
            <h3 className="text-2xl font-bold font-montserrat mb-6">Migration Process</h3>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
              {['Discover', 'Map', 'Pilot', 'Migrate', 'Validate', 'Optimize'].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold mb-2">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Managed IT Services Section */}
      <section id="managed-it-services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat mb-6">Managed IT Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Operate securely with 24×7 visibility, SLAs, and automation across your entire IT infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {managedServices.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="bg-muted/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold font-montserrat mb-6">Service Model</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Onboarding</h4>
                <p className="text-muted-foreground">Comprehensive assessment and setup</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Run</h4>
                <p className="text-muted-foreground">24/7 monitoring and management</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Improve</h4>
                <p className="text-muted-foreground">Continuous optimization and reporting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Microsoft Dynamics 365 Section */}
      <section id="microsoft-dynamics-365" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat mb-6">Microsoft Dynamics 365</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Implement, integrate, and scale Dynamics 365 for line-of-business outcomes across Sales, Service, Finance, and Supply Chain.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-7 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="consulting">Consulting</TabsTrigger>
              <TabsTrigger value="implementation">Implementation</TabsTrigger>
              <TabsTrigger value="customization">Customization</TabsTrigger>
              <TabsTrigger value="integration">Integration</TabsTrigger>
              <TabsTrigger value="migration">Migration</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">What We Do</CardTitle>
                  <CardDescription>
                    Comprehensive Dynamics 365 services across all business functions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Business Applications</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Sales & Marketing</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Customer Service</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Finance & Operations</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Supply Chain Management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Key Benefits</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center"><Zap className="h-4 w-4 text-primary mr-2" />Faster process cycles</li>
                        <li className="flex items-center"><Database className="h-4 w-4 text-primary mr-2" />Data consistency</li>
                        <li className="flex items-center"><Users className="h-4 w-4 text-primary mr-2" />Role-based UX</li>
                        <li className="flex items-center"><Globe className="h-4 w-4 text-primary mr-2" />Scalable platform</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="consulting" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Strategic Consulting</CardTitle>
                  <CardDescription>
                    Business-first approach to Dynamics 365 strategy and planning
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Search className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Fit-Gap Analysis</h4>
                          <p className="text-sm text-muted-foreground">Detailed assessment of current processes vs. D365 capabilities</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <FileText className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Roadmap Development</h4>
                          <p className="text-sm text-muted-foreground">Phased implementation strategy with clear milestones</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Settings className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Process Design</h4>
                          <p className="text-sm text-muted-foreground">Optimized business processes leveraging D365 best practices</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Shield className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Licensing Alignment</h4>
                          <p className="text-sm text-muted-foreground">Right-sized licensing strategy for optimal ROI</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="implementation" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Agile Implementation</CardTitle>
                  <CardDescription>
                    Iterative delivery with continuous stakeholder engagement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-4 gap-4">
                      {['Configure', 'Develop', 'Test', 'Deploy'].map((phase, index) => (
                        <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                          <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                            {index + 1}
                          </div>
                          <h4 className="font-semibold">{phase}</h4>
                        </div>
                      ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Delivery Approach</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />2-week sprint cycles</li>
                          <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Environment provisioning</li>
                          <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />User training programs</li>
                          <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Go-live readiness</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Quality Assurance</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Automated testing</li>
                          <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Performance validation</li>
                          <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Security compliance</li>
                          <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Change management</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="customization" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Power Platform Extensions</CardTitle>
                  <CardDescription>
                    Custom solutions built on Microsoft's low-code platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-muted/50 rounded-lg">
                      <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Power Apps</h4>
                      <p className="text-sm text-muted-foreground">Custom applications and forms</p>
                    </div>
                    <div className="text-center p-6 bg-muted/50 rounded-lg">
                      <RefreshCw className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Power Automate</h4>
                      <p className="text-sm text-muted-foreground">Workflow automation</p>
                    </div>
                    <div className="text-center p-6 bg-muted/50 rounded-lg">
                      <BarChart3 className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Power BI</h4>
                      <p className="text-sm text-muted-foreground">Advanced analytics</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="integration" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">System Integration</CardTitle>
                  <CardDescription>
                    Connect Dynamics 365 with your existing technology ecosystem
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Integration Options</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Database className="h-5 w-5 text-primary" />
                          <span className="text-sm">Dataverse connectors</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Globe className="h-5 w-5 text-primary" />
                          <span className="text-sm">REST API integrations</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Network className="h-5 w-5 text-primary" />
                          <span className="text-sm">Enterprise service bus</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Key Capabilities</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <UserCheck className="h-5 w-5 text-primary" />
                          <span className="text-sm">Single sign-on (Entra)</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-primary" />
                          <span className="text-sm">Master data management</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Activity className="h-5 w-5 text-primary" />
                          <span className="text-sm">Real-time event processing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="migration" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Legacy Migration</CardTitle>
                  <CardDescription>
                    Seamless transition from legacy systems to Dynamics 365
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-4 gap-4">
                      {['Assess', 'Cleanse', 'Migrate', 'Validate'].map((phase, index) => (
                        <div key={index} className="text-center p-4 border rounded-lg">
                          <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                            {index + 1}
                          </div>
                          <h4 className="font-semibold text-sm">{phase}</h4>
                        </div>
                      ))}
                    </div>
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">Migration Approach</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Our proven methodology ensures data integrity and minimal business disruption during the migration process.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 text-sm">
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Data quality assessment</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Automated migration tools</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Incremental data loads</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Rollback procedures</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="support" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Ongoing Support</CardTitle>
                  <CardDescription>
                    Continuous optimization and technical support for your D365 environment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Support Services</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <Clock className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">Hypercare Support</span>
                            <p className="text-sm text-muted-foreground">Intensive post-go-live support</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Headphones className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">L2/L3 Technical Support</span>
                            <p className="text-sm text-muted-foreground">Expert-level issue resolution</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Optimization</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <RefreshCw className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">Release Management</span>
                            <p className="text-sm text-muted-foreground">Planned updates and enhancements</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <BarChart3 className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">Performance Tuning</span>
                            <p className="text-sm text-muted-foreground">Continuous optimization</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="bg-[#E52629] hover:bg-[#E52629]/90 text-white">
                Claim Your Free Insight
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact?topic=d365-demo">
              <Button variant="outline" size="lg">
                Request a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Backup & Recovery Section */}
      <section id="backup-recovery" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat mb-6">Data Backup & Recovery Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Protect data with policy-driven backups and tested recovery procedures to ensure business continuity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {backupServices.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="bg-muted/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold font-montserrat mb-6 text-center">Key Outcomes</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Compliance-Ready Retention</h4>
                <p className="text-muted-foreground">Meet regulatory requirements with automated retention policies</p>
              </div>
              <div>
                <RefreshCw className="h-12 w-12 text-primary mx-auto mb-4" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Rapid Restore Confidence</h4>
                  <p className="text-muted-foreground">Tested recovery procedures with predictable RTOs</p>
                </div>
              </div>
              <div>
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Cost-Optimized Storage</h4>
                  <p className="text-muted-foreground">Intelligent tiering reduces storage costs by up to 60%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof & Trust Band */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            <Badge variant="outline" className="px-4 py-2">
              <Activity className="h-4 w-4 mr-2" />
              24×7 monitoring
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Shield className="h-4 w-4 mr-2" />
              Zero-trust aligned
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              Measurable SLAs
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Lock className="h-4 w-4 mr-2" />
              Enterprise security
            </Badge>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our IT solutions and services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="py-20 bg-[#1C1C1C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-montserrat mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get expert insights tailored to your business needs and start your journey to modern, secure IT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-[#E52629] hover:bg-[#E52629]/90 text-white px-8 py-4">
                Claim Your Free Insight
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/tools/health-check">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4">
                IT Network Health Check
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}