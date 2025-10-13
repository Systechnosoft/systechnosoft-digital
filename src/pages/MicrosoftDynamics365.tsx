import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { 
  ArrowRight, 
  ChevronRight,
  Database, 
  Shield, 
  Zap, 
  Cloud, 
  Users,
  Settings,
  GitBranch,
  RefreshCw,
  HeadphonesIcon,
  Bot,
  BarChart3,
  CheckCircle,
  Lock,
  Globe,
  Workflow,
  FileCheck,
  Clock,
  Target,
  TrendingUp,
  Eye,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
        <pattern id="d365-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M20 20h60M20 80h60M80 20v60M20 50h30v30h30" stroke="rgba(229, 38, 41, 0.1)" strokeWidth="1" fill="none"/>
          <circle cx="50" cy="50" r="3" fill="rgba(229, 38, 41, 0.2)" />
          <circle cx="20" cy="20" r="2" fill="rgba(0, 122, 255, 0.2)" />
          <circle cx="80" cy="80" r="2" fill="rgba(0, 122, 255, 0.2)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#d365-circuit)" />
    </svg>
  </div>
);

// Navigation items
const subNavItems = [
  { id: "overview", label: "Overview" },
  { id: "consulting", label: "Consulting" },
  { id: "implementation", label: "Implementation" },
  { id: "customization", label: "Customization" },
  { id: "integration", label: "Integration" },
  { id: "migration", label: "Migration" },
  { id: "support", label: "Support" },
  { id: "copilot", label: "Copilot & Power Platform" }
];

// Lightweight SVG visual for hero section
const D365Visual = () => (
  <svg 
    viewBox="0 0 400 400" 
    className="w-full max-w-md h-auto"
    aria-label="Microsoft Dynamics 365 platform illustration"
  >
    <defs>
      <linearGradient id="d365-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E52629" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#007AFF" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    {/* Central hub */}
    <circle cx="200" cy="200" r="60" fill="url(#d365-gradient)" stroke="#E52629" strokeWidth="2" />
    <text x="200" y="205" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1C1C1C">D365</text>
    {/* Module nodes */}
    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x = 200 + 120 * Math.cos(rad);
      const y = 200 + 120 * Math.sin(rad);
      return (
        <g key={i}>
          <line x1="200" y1="200" x2={x} y2={y} stroke="#E52629" strokeWidth="1" opacity="0.3" />
          <circle cx={x} cy={y} r="30" fill="white" stroke="#007AFF" strokeWidth="2" />
        </g>
      );
    })}
  </svg>
);

export default function MicrosoftDynamics365() {
  const [activeSection, setActiveSection] = useState("overview");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const shouldReduceMotion = useReducedMotion();

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionsRef.current.length - 1; i >= 0; i--) {
        const section = sectionsRef.current[i];
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
      
      // Analytics tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'svc_d365_anchor_click', {
          section: sectionId
        });
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Microsoft Dynamics 365 Consulting, Implementation & Support | Systechnosoft</title>
        <meta 
          name="description" 
          content="Unify sales, service, operations and finance with Microsoft Dynamics 365. Consulting, implementation, customization, integrations, migration and managed support—secure, measurable and at scale." 
        />
        <meta property="og:title" content="Microsoft Dynamics 365 Consulting & Implementation | Systechnosoft" />
        <meta property="og:description" content="Unify CRM & ERP with Microsoft Dynamics 365. Expert consulting, implementation, and support services." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/services/microsoft-dynamics-365" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Service", "BreadcrumbList"],
            "serviceType": "Microsoft Dynamics 365 Consulting and Implementation",
            "provider": {
              "@type": "Organization",
              "name": "Systechnosoft Technologies"
            },
            "areaServed": ["IN", "GLOBAL"],
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Services",
                "item": "/services"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "IT Solutions",
                "item": "/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Microsoft Dynamics 365",
                "item": "/services/microsoft-dynamics-365"
              }
            ]
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">

        {/* Hero Section */}
        <section className="hero-animated relative min-h-[80vh] lg:min-h-screen flex items-center py-24 overflow-hidden">
          {/* Animated Background */}
          <div className="hero-animated__bg">
            <div className="hero-animated__bg-glow" />
            {!shouldReduceMotion && (
              <motion.div
                className="hero-animated__bg-rotation"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
            )}
          </div>

          {/* Content */}
          <motion.div 
            className="hero-animated__content relative z-10 w-full"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Copy & Badges */}
                <div className="text-center lg:text-left order-2 lg:order-1">
                  <h1 className="font-montserrat font-bold text-5xl lg:text-6xl mb-6 text-[#1C1C1C]">
                    Microsoft Dynamics 365
                  </h1>
                  <p className="text-xl text-[#3C3C3C] mb-8 max-w-4xl">
                    Unify CRM & ERP to accelerate sales, service, operations and finance—delivered fast, securely and at scale.
                  </p>
                  
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                    <Badge variant="secondary" className="text-sm px-4 py-2 bg-white/80 border-[#E6E6E6] text-[#1C1C1C] hover:shadow-sm transition-shadow">99.9% uptime architectures</Badge>
                    <Badge variant="secondary" className="text-sm px-4 py-2 bg-white/80 border-[#E6E6E6] text-[#1C1C1C] hover:shadow-sm transition-shadow">Zero‑trust aligned</Badge>
                    <Badge variant="secondary" className="text-sm px-4 py-2 bg-white/80 border-[#E6E6E6] text-[#1C1C1C] hover:shadow-sm transition-shadow">Azure-native integrations</Badge>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button 
                      asChild 
                      size="lg" 
                      className="bg-[#E52629] hover:bg-[#D01F21] text-white font-semibold px-8 py-4 text-lg transition-all duration-300 ease-out hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed" 
                      onClick={() => {
                        if (typeof window !== 'undefined' && (window as any).gtag) {
                          (window as any).gtag('event', 'svc_d365_hero_cta', {
                            cta: 'talk_to_expert'
                          });
                        }
                      }}
                    >
                      <Link to="/contact?src=d365-hero">
                        Talk to an Expert
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-[#E52629] text-[#E52629] hover:bg-[#E52629] hover:text-white focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 px-8 py-4 text-lg font-semibold transition-colors duration-200"
                >
                  <a href="https://calendly.com/systechnosoft-info/30min" target="_blank" rel="noopener noreferrer">
                    Book a Consultation →
                  </a>
                </Button>
                  </div>
                </div>

                {/* Right Column - Hero Image */}
                <motion.div 
                  className="flex justify-center lg:justify-end order-1 lg:order-2"
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.figure
                    className="relative w-full max-w-2xl group"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Brand glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#E52629]/20 via-[#007AFF]/20 to-[#E52629]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Image container */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src="/images/hero/d365-hero.png"
                        alt="Illustration of connected modules flowing into a Dynamics 365 hive—secure, integrated business apps."
                        width={1184}
                        height={672}
                        loading="eager"
                        fetchPriority="high"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </motion.figure>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Sticky Navigation */}
        <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex justify-center overflow-x-auto py-4 space-x-8 scrollbar-none">
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
        <section id="overview" ref={(el) => (sectionsRef.current[0] = el)} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6 text-center">
              Why Dynamics 365 with Systechnosoft
            </h2>
            
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-lg text-gray-700 mb-8">
                We design secure, scalable Dynamics 365 solutions that connect the front office with the back office. From sales and service to finance and supply chain, we architect on Microsoft best practices, align with zero‑trust, and measure outcomes post‑go‑live.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Badge variant="secondary" className="px-4 py-2">Faster time‑to‑value</Badge>
                <Badge variant="secondary" className="px-4 py-2">Streamlined workflows</Badge>
                <Badge variant="secondary" className="px-4 py-2">Single source of truth</Badge>
                <Badge variant="secondary" className="px-4 py-2">Lower run‑costs</Badge>
              </div>
            </div>

            {/* Mini Diagram */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
               <Card className="text-center bg-white border-2 border-gray-200 hover:border-[#E52629] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <Database className="h-8 w-8 text-[#E52629] mx-auto mb-3" />
                  <h3 className="font-semibold">Dataverse</h3>
                  <p className="text-sm text-gray-600">Unified data platform</p>
                </CardContent>
              </Card>
               <Card className="text-center bg-white border-2 border-gray-200 hover:border-[#E52629] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <Settings className="h-8 w-8 text-[#E52629] mx-auto mb-3" />
                  <h3 className="font-semibold">Dynamics 365 Apps</h3>
                  <p className="text-sm text-gray-600">Sales, Service, Finance, SCM</p>
                </CardContent>
              </Card>
               <Card className="text-center bg-white border-2 border-gray-200 hover:border-[#E52629] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <Cloud className="h-8 w-8 text-[#E52629] mx-auto mb-3" />
                  <h3 className="font-semibold">Azure Services</h3>
                  <p className="text-sm text-gray-600">AI, Analytics, Integration</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white border-2 border-gray-200 hover:border-[#E52629] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <Zap className="h-8 w-8 text-[#E52629] mx-auto mb-3" />
                  <h3 className="font-semibold">Power Platform</h3>
                  <p className="text-sm text-gray-600">Low-code extensions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Consulting Section */}
        <section id="consulting" ref={(el) => (sectionsRef.current[1] = el)} className="py-20 bg-white border-t border-[#E6E6E6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-[44px] leading-tight md:text-[56px] mb-12 text-center text-[#1C1C1C]">
              Advisory & Roadmapping
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 last:border-0 group">
                  <Eye className="h-6 w-6 text-[#E52629] mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-[22px] mb-2 text-[#1C1C1C]">Current‑state assessment & process mapping</h3>
                    <p className="text-[17px] text-slate-600">Comprehensive analysis of existing systems and workflows</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-[#E52629] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                </div>
                <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 last:border-0 group">
                  <Target className="h-6 w-6 text-[#E52629] mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-[22px] mb-2 text-[#1C1C1C]">Solution blueprinting</h3>
                    <p className="text-[17px] text-slate-600">Sales, Service, Finance, and Supply Chain architecture design</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-[#E52629] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                </div>
                <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 last:border-0 group">
                  <Shield className="h-6 w-6 text-[#E52629] mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-[22px] mb-2 text-[#1C1C1C]">Security & compliance planning</h3>
                    <p className="text-[17px] text-slate-600">DLP, governance, and regulatory alignment strategies</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-[#E52629] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                </div>
                <div className="flex items-start space-x-4 pb-4 last:border-0 group">
                  <Workflow className="h-6 w-6 text-[#E52629] mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-[22px] mb-2 text-[#1C1C1C]">Rollout roadmap & change management</h3>
                    <p className="text-[17px] text-slate-600">Phased implementation with user adoption strategies</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-[#E52629] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-rose-50 rounded-xl p-8 border border-indigo-200">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-[#E52629] flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-[22px] text-[#1C1C1C]">Deliverables</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-[17px] text-slate-600">Discovery report with recommendations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-[17px] text-slate-600">Solution architecture deck</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-[17px] text-slate-600">Phased rollout plan with timelines</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Section */}
        <section id="implementation" ref={(el) => (sectionsRef.current[2] = el)} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-[44px] leading-tight md:text-[56px] mb-12 text-center">
              Rapid, Secure Implementations
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="bg-white border-2 border-gray-200 hover:border-[#E52629] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="transition-transform duration-300 hover:-translate-y-1">
                    <Database className="h-8 w-8 text-[#E52629] mx-auto mb-4" />
                  </div>
                  <h3 className="font-semibold text-[22px] mb-2">Dataverse Setup</h3>
                  <p className="text-[17px] text-slate-600">Environment strategy and data modeling</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-2 border-gray-200 hover:border-[#E52629] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="transition-transform duration-300 hover:-translate-y-1">
                    <Settings className="h-8 w-8 text-[#E52629] mx-auto mb-4" />
                  </div>
                  <h3 className="font-semibold text-[22px] mb-2">Core App Configuration</h3>
                  <p className="text-[17px] text-slate-600">Sales, Service, Marketing, Finance, SCM</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-2 border-gray-200 hover:border-[#E52629] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="transition-transform duration-300 hover:-translate-y-1">
                    <Lock className="h-8 w-8 text-[#E52629] mx-auto mb-4" />
                  </div>
                  <h3 className="font-semibold text-[22px] mb-2">Role-based Access</h3>
                  <p className="text-[17px] text-slate-600">Entra ID integration & conditional access</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-2 border-gray-200 hover:border-[#E52629] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="transition-transform duration-300 hover:-translate-y-1">
                    <GitBranch className="h-8 w-8 text-[#E52629] mx-auto mb-4" />
                  </div>
                  <h3 className="font-semibold text-[22px] mb-2">CI/CD Pipelines</h3>
                  <p className="text-[17px] text-slate-600">Automated deployment and testing</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-8 rounded-xl max-w-5xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[22px] mb-2">Measurable Milestones</h3>
                  <p className="text-[17px] text-slate-700">We target measurable milestones: user readiness, data readiness, go‑live readiness—with clear success criteria at each phase.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customization Section */}
        <section id="customization" ref={(el) => (sectionsRef.current[3] = el)} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-[44px] leading-tight md:text-[56px] mb-12 text-center">
              Tailor Experiences to Your Processes
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <Card className="bg-slate-50 border border-gray-200 hover:border-[#E52629] hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Lightbulb className="h-6 w-6 text-[#E52629] mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-[22px] mb-1">Model‑driven apps, forms & views</h3>
                        <p className="text-[15px] text-slate-500">Custom business logic and user interfaces</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-50 border border-gray-200 hover:border-[#E52629] hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Workflow className="h-6 w-6 text-[#E52629] mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-[22px] mb-1">Workflows & Power Automate</h3>
                        <p className="text-[15px] text-slate-500">Email templates, approvals, and business process flows</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-50 border border-gray-200 hover:border-[#E52629] hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <GitBranch className="h-6 w-6 text-[#E52629] mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-[22px] mb-1">Plug‑ins & custom connectors</h3>
                        <p className="text-[15px] text-slate-500">When configuration isn't enough, we code</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-50 border border-gray-200 hover:border-[#E52629] hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Globe className="h-6 w-6 text-[#E52629] mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-[22px] mb-1">Localization & security</h3>
                        <p className="text-[15px] text-slate-500">Field‑level security, audit trails, and retention policies</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200 relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-10">
                  <Lock className="h-24 w-24 text-blue-900" />
                </div>
                <h3 className="font-semibold text-[22px] mb-4 relative z-10">Configuration First</h3>
                <p className="text-[17px] text-slate-700 mb-6 relative z-10">
                  We prioritize out-of-the-box configuration over custom code, ensuring easier maintenance and upgrades while still meeting your unique business requirements.
                </p>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-[17px] text-slate-700">Faster time to market</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-[17px] text-slate-700">Reduced maintenance overhead</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-[17px] text-slate-700">Seamless Microsoft updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section id="integration" ref={(el) => (sectionsRef.current[4] = el)} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-[44px] leading-tight md:text-[56px] mb-12 text-center text-[#1C1C1C]">
              Connect Dynamics with Your Stack
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="bg-white border-2 border-gray-200 hover:border-[#E52629] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="transition-transform duration-300 hover:-translate-y-1">
                    <Zap className="h-8 w-8 text-[#E52629] mx-auto mb-4" />
                  </div>
                  <h3 className="font-semibold text-[22px] mb-3 text-[#1C1C1C]">Power Platform</h3>
                  <ul className="text-[17px] space-y-1 text-slate-600">
                    <li>Power Automate</li>
                    <li>Power Apps</li>
                    <li>Power BI</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white border-2 border-gray-200 hover:border-[#E52629] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="transition-transform duration-300 hover:-translate-y-1">
                    <Users className="h-8 w-8 text-[#E52629] mx-auto mb-4" />
                  </div>
                  <h3 className="font-semibold text-[22px] mb-3 text-[#1C1C1C]">Microsoft 365</h3>
                  <ul className="text-[17px] space-y-1 text-slate-600">
                    <li>Teams</li>
                    <li>SharePoint</li>
                    <li>Outlook</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white border-2 border-gray-200 hover:border-[#E52629] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="transition-transform duration-300 hover:-translate-y-1">
                    <Cloud className="h-8 w-8 text-[#E52629] mx-auto mb-4" />
                  </div>
                  <h3 className="font-semibold text-[22px] mb-3 text-[#1C1C1C]">Azure Services</h3>
                  <ul className="text-[17px] space-y-1 text-slate-600">
                    <li>Functions</li>
                    <li>Service Bus</li>
                    <li>Logic Apps</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white border-2 border-gray-200 hover:border-[#E52629] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="transition-transform duration-300 hover:-translate-y-1">
                    <Database className="h-8 w-8 text-[#E52629] mx-auto mb-4" />
                  </div>
                  <h3 className="font-semibold text-[22px] mb-3 text-[#1C1C1C]">Legacy Systems</h3>
                  <ul className="text-[17px] space-y-1 text-slate-600">
                    <li>REST/SOAP APIs</li>
                    <li>JDBC</li>
                    <li>Flat files</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-[#E52629] p-8 rounded-xl max-w-5xl mx-auto">
              <div className="flex items-start gap-4">
                <Database className="h-6 w-6 text-[#E52629] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[22px] mb-2 text-[#1C1C1C]">Dataverse as Integration Layer</h3>
                  <p className="text-[17px] text-slate-700">We prefer Dataverse as the governed integration layer, ensuring data consistency, security, and compliance across all connected systems.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Section */}
        <section id="migration" ref={(el) => (sectionsRef.current[5] = el)} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-[44px] leading-tight md:text-[56px] mb-12 text-center text-[#1C1C1C]">
              Data Migration Without Disruption
            </h2>
            
            <div className="grid lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center bg-white border-2 border-gray-200 hover:border-[#E52629] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="transition-transform duration-300 hover:-translate-y-1">
                    <Eye className="h-8 w-8 text-[#E52629] mx-auto mb-4" />
                  </div>
                  <h3 className="font-semibold text-[22px] mb-2 text-[#1C1C1C]">Source Profiling</h3>
                  <p className="text-[17px] text-slate-600">Mapping & deduplication strategies</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white border-2 border-gray-200 hover:border-[#E52629] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="transition-transform duration-300 hover:-translate-y-1">
                    <RefreshCw className="h-8 w-8 text-[#E52629] mx-auto mb-4" />
                  </div>
                  <h3 className="font-semibold text-[22px] mb-2 text-[#1C1C1C]">ETL Orchestration</h3>
                  <p className="text-[17px] text-slate-600">Dataflows and transformation pipelines</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white border-2 border-gray-200 hover:border-[#E52629] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="transition-transform duration-300 hover:-translate-y-1">
                    <FileCheck className="h-8 w-8 text-[#E52629] mx-auto mb-4" />
                  </div>
                  <h3 className="font-semibold text-[22px] mb-2 text-[#1C1C1C]">Reconciliation</h3>
                  <p className="text-[17px] text-slate-600">Audit logs & sign‑off processes</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white border-2 border-gray-200 hover:border-[#E52629] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="transition-transform duration-300 hover:-translate-y-1">
                    <Clock className="h-8 w-8 text-[#E52629] mx-auto mb-4" />
                  </div>
                  <h3 className="font-semibold text-[22px] mb-2 text-[#1C1C1C]">Cutover Planning</h3>
                  <p className="text-[17px] text-slate-600">Rollback checkpoints & contingencies</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl p-8 md:p-12 max-w-5xl mx-auto border border-gray-200">
              <h3 className="font-montserrat font-bold text-[44px] leading-tight mb-10 text-center text-[#1C1C1C]">
                Migration Success Framework
              </h3>
              <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
                <div>
                  <div className="text-5xl font-montserrat font-bold text-[#E52629] mb-2">99.9%</div>
                  <div className="text-[17px] text-slate-700 font-medium">Data integrity validation</div>
                </div>
                <div>
                  <div className="text-5xl font-montserrat font-bold text-[#E52629] mb-2">Zero</div>
                  <div className="text-[17px] text-slate-700 font-medium">Business downtime target</div>
                </div>
                <div>
                  <div className="text-5xl font-montserrat font-bold text-[#E52629] mb-2">Full</div>
                  <div className="text-[17px] text-slate-700 font-medium">Rollback capability</div>
                </div>
              </div>
              <div className="text-center pt-6 border-t border-gray-300">
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-[#E52629] text-[#E52629] hover:bg-[#E52629] hover:text-white focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 transition-colors duration-200"
                >
                  <Link to="/services/data-migration">
                    Know More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" ref={(el) => (sectionsRef.current[6] = el)} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-[44px] leading-tight md:text-[56px] mb-12 text-center">
              Managed Support & Optimization
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <div className="space-y-4">
                <div className="flex items-start space-x-4 pb-4 border-b border-gray-200">
                  <HeadphonesIcon className="h-6 w-6 text-[#E52629] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[22px] mb-1">L1–L3 support SLAs</h3>
                    <p className="text-[17px] text-slate-600">Incident & problem management with defined response times</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 pb-4 border-b border-gray-200">
                  <RefreshCw className="h-6 w-6 text-[#E52629] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[22px] mb-1">Release management</h3>
                    <p className="text-[17px] text-slate-600">Regression testing suites and change control</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 pb-4 border-b border-gray-200">
                  <BarChart3 className="h-6 w-6 text-[#E52629] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[22px] mb-1">Health checks & performance tuning</h3>
                    <p className="text-[17px] text-slate-600">Proactive monitoring and optimization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 pb-4">
                  <Shield className="h-6 w-6 text-[#E52629] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[22px] mb-1">Admin guardrails & DLP monitoring</h3>
                    <p className="text-[17px] text-slate-600">Least‑privilege access and compliance oversight</p>
                  </div>
                </div>
              </div>
              
              <Card className="bg-white border-2 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-[22px]">Support Tiers</CardTitle>
                  <CardDescription className="text-[17px]">Choose the right level of support for your business</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between py-3 px-4 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors cursor-pointer group">
                    <span className="text-[17px] text-slate-700">Business Hours</span>
                    <Badge variant="outline" className="text-sm">Standard</Badge>
                  </div>
                  <div className="flex items-center justify-between py-3 px-4 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors cursor-pointer group">
                    <span className="text-[17px] text-slate-700">24×5 Coverage</span>
                    <Badge variant="secondary" className="text-sm">Professional</Badge>
                  </div>
                  <div className="flex items-center justify-between py-3 px-4 rounded-full border-2 border-[#E52629] bg-[#E52629]/5 hover:bg-[#E52629]/10 transition-colors cursor-pointer group">
                    <span className="text-[17px] text-slate-700 font-medium">24×7 Premium</span>
                    <Badge className="bg-[#E52629] text-white text-sm">Enterprise</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Button 
                asChild 
                variant="outline"
                size="lg" 
                className="border-[#E52629] text-[#E52629] hover:bg-[#E52629] hover:text-white focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 transition-colors px-8 py-4 text-lg font-semibold"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'svc_d365_support_cta');
                  }
                }}
              >
                <Link to="/contact?type=support-plan">
                  Request a Support Plan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Copilot & Power Platform Section */}
        <section id="copilot" ref={(el) => (sectionsRef.current[7] = el)} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-[44px] leading-tight md:text-[56px] mb-12 text-center text-[#1C1C1C]">
              Copilot, Power BI & Low‑Code Extensibility
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-2 border-gray-200 hover:border-[#E52629] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="transition-transform duration-300 hover:-translate-y-1">
                    <Bot className="h-12 w-12 text-[#E52629] mx-auto mb-4" />
                  </div>
                  <h3 className="font-semibold text-[24px] mb-2 text-[#1C1C1C]">Copilot Integration</h3>
                  <p className="text-[17px] text-slate-600 mb-4">
                    Setup for guided selling and assisted service where available
                  </p>
                  <ul className="text-[16px] leading-7 space-y-2 text-slate-600 text-left">
                    <li>• Natural language queries</li>
                    <li>• Automated insights</li>
                    <li>• Conversation summaries</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-2 border-gray-200 hover:border-[#E52629] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="transition-transform duration-300 hover:-translate-y-1">
                    <BarChart3 className="h-12 w-12 text-[#E52629] mx-auto mb-4" />
                  </div>
                  <h3 className="font-semibold text-[24px] mb-2 text-[#1C1C1C]">Power BI Dashboards</h3>
                  <p className="text-[17px] text-slate-600 mb-4">
                    Real‑time insights over Dataverse for executive visibility
                  </p>
                  <ul className="text-[16px] leading-7 space-y-2 text-slate-600 text-left">
                    <li>• Sales performance</li>
                    <li>• Customer insights</li>
                    <li>• Financial reporting</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-2 border-gray-200 hover:border-[#E52629] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="transition-transform duration-300 hover:-translate-y-1">
                    <Zap className="h-12 w-12 text-[#E52629] mx-auto mb-4" />
                  </div>
                  <h3 className="font-semibold text-[24px] mb-2 text-[#1C1C1C]">Power Apps Extensions</h3>
                  <p className="text-[17px] text-slate-600 mb-4">
                    Per‑team solutions with governed Center of Excellence
                  </p>
                  <ul className="text-[16px] leading-7 space-y-2 text-slate-600 text-left">
                    <li>• Custom apps</li>
                    <li>• Mobile solutions</li>
                    <li>• Workflow automation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's discuss how Microsoft Dynamics 365 can accelerate your sales, service, and operations.
            </p>
            <div className="flex justify-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#E52629] text-[#E52629] hover:bg-[#E52629] hover:text-white focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 transition-colors duration-200 px-8 py-4 text-lg font-semibold"
            >
              <a href="https://calendly.com/systechnosoft-info/30min" target="_blank" rel="noopener noreferrer">
                Book a Consultation →
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}