import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { HeroBackground } from "@/components/HeroMotionSystem";
import { CountUpNumber } from "@/components/CountUpNumber";
import heroImage from "@/assets/hero-data-migration.png";
import { 
  ArrowRight, 
  Database, 
  Shield, 
  Cloud, 
  ArrowRightLeft, 
  CheckCircle, 
  Lock, 
  Server, 
  Users, 
  Mail, 
  FolderOpen, 
  Zap,
  Eye,
  Settings,
  Clock,
  Target,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";


export default function DataMigration() {
  const [activeSection, setActiveSection] = useState("dm-overview");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  const navItems = [
    { id: "dm-overview", label: "Overview" },
    { id: "dm-workloads", label: "Workloads" },
    { id: "dm-methods", label: "Methods & Phases" },
    { id: "dm-cutover", label: "Cutover & Validation" },
    { id: "dm-security", label: "Security & Compliance" },
    { id: "dm-tooling", label: "Tools" },
    { id: "dm-proof", label: "Insights" },
  ];

  useEffect(() => {
    // Disable scroll restoration to prevent unwanted jumps
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Handle hash navigation on mount - instant jump, no animation
    if (window.location.hash) {
      const html = document.documentElement;
      const prevScrollBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';
      
      const id = decodeURIComponent(window.location.hash.slice(1));
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
      
      setTimeout(() => { html.style.scrollBehavior = prevScrollBehavior || ''; }, 0);
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Account for sticky header
      
      for (let i = sectionsRef.current.length - 1; i >= 0; i--) {
        const section = sectionsRef.current[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Data Migration | Systechnosoft Technologies</title>
        <meta 
          name="description" 
          content="Move identities, files, messages, apps, and databases securely with minimal downtime across on-prem, Azure, AWS, Google Cloud, Microsoft 365, and Google Workspace." 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Data Migration",
            "provider": {
              "@type": "Organization",
              "name": "Systechnosoft Technologies"
            },
            "areaServed": ["IN", "GLOBAL"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroBackground>
          <section id="dm-hero" className="relative min-h-[80vh] lg:min-h-screen flex items-center py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div className="text-center lg:text-left">
                  <h1 className="font-montserrat font-bold text-5xl lg:text-6xl mb-6 text-[#1C1C1C]">
                    Data Migration
                  </h1>
                  <p className="font-inter text-xl lg:text-2xl text-[#3C3C3C] mb-8 leading-relaxed max-w-3xl">
                    Move identities, files, messages, apps, and databases—securely and with minimal downtime—across on‑prem, Azure, AWS, Google Cloud, Microsoft 365, and Google Workspace.
                  </p>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                    <Badge variant="secondary" className="bg-[#E52629]/10 text-[#E52629] border-[#E52629]/20 px-4 py-2">
                      99.9% integrity checks
                    </Badge>
                    <Badge variant="secondary" className="bg-[#007AFF]/10 text-[#007AFF] border-[#007AFF]/20 px-4 py-2">
                      Zero-trust aligned
                    </Badge>
                    <Badge variant="secondary" className="bg-[#E52629]/10 text-[#E52629] border-[#E52629]/20 px-4 py-2">
                      Cutover with rollback
                    </Badge>
                  </div>
                  
                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link to="/contact?src=data-migration-hero">
                      <Button 
                        size="lg" 
                        className="bg-[#E52629] hover:bg-[#D01F21] text-white font-semibold px-8 py-4 text-lg transition-all duration-300 ease-out hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Request Assessment
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link to="/contact?type=mra">
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="bg-white border-2 border-[#E52629] text-[#E52629] hover:bg-[#E52629] hover:border-[#E52629] hover:text-white px-8 py-4 text-lg font-semibold transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2"
                      >
                        Claim Your Free Insight
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Right Column - Hero Image */}
                <div className="flex justify-center lg:justify-end">
                  <svg viewBox="0 0 1600 900" width="100%" height="auto" role="img"
                       aria-label="Secure data migration from on-prem database to cloud"
                       xmlns="http://www.w3.org/2000/svg"
                       className="w-full max-w-[640px] rounded-2xl shadow-[8px_20px_60px_rgba(0,0,0,0.08)] border border-black/[0.06]">
                    <defs>
                      {/* Soft brandy background + faint grid */}
                      <radialGradient id="dm_bg" cx="60%" cy="45%" r="75%">
                        <stop offset="0%"  stopColor="#0d5eff" stopOpacity="0.14"/>
                        <stop offset="70%" stopColor="#0a1530" stopOpacity="0.92"/>
                        <stop offset="100%" stopColor="#091226" stopOpacity="1"/>
                      </radialGradient>
                      <pattern id="dm_grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M40 0H0M0 40V0" stroke="#7bb6ff" strokeOpacity=".10" strokeWidth="1"/>
                      </pattern>

                      {/* Strokes & accents */}
                      <linearGradient id="dm_line" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%"  stopColor="#00d4ff"/>
                        <stop offset="100%" stopColor="#8df3ff"/>
                      </linearGradient>
                      <linearGradient id="dm_accent" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%"  stopColor="#FF3B30"/>
                        <stop offset="100%" stopColor="#E31E24"/>
                      </linearGradient>

                      {/* Arrow head */}
                      <marker id="dm_arrow" markerWidth="16" markerHeight="16" refX="10" refY="5" orient="auto">
                        <path d="M0,0 L10,5 L0,10 Z" fill="url(#dm_accent)"/>
                      </marker>
                    </defs>

                    {/* Backdrop */}
                    <rect width="1600" height="900" fill="url(#dm_bg)"/>
                    <rect width="1600" height="900" fill="url(#dm_grid)"/>

                    {/* Left: on-prem database (cylinder) */}
                    <g transform="translate(230,310)">
                      {/* Barrel */}
                      <rect x="0" y="60" width="280" height="260" rx="28" fill="#0f2a48" stroke="url(#dm_line)" strokeWidth="4"/>
                      {/* Top ellipse */}
                      <ellipse cx="140" cy="60" rx="140" ry="40" fill="#113157" stroke="url(#dm_line)" strokeWidth="4"/>
                      {/* Subtle bands */}
                      <ellipse cx="140" cy="180" rx="120" ry="8" fill="#1a3f66" opacity=".55"/>
                      <ellipse cx="140" cy="250" rx="120" ry="8" fill="#1a3f66" opacity=".38"/>
                      {/* Lock accent */}
                      <circle cx="260" cy="70" r="14" fill="url(#dm_accent)" opacity=".9"/>
                    </g>

                    {/* Right: destination cloud (unique outline) */}
                    <g transform="translate(860,260)">
                      <path d="M560,340
                               c0-78-63-141-141-141
                               c-16,0-31,3-45,8
                               c-20-62-80-107-150-107
                               c-87,0-158,66-162,150
                               c-17-7-35-11-54-11
                               c-73,0-132,52-143,121
                               c-57,14-102,66-102,129
                               c0,72,59,131,131,131h566
                               c79,0,143-64,143-143
                               c0-63-41-116-103-137z"
                            fill="none" stroke="url(#dm_line)" strokeWidth="12" />
                      {/* Tiny "data bits" in cloud */}
                      <g fill="#8df3ff" opacity=".8">
                        <rect x="220" y="280" width="14" height="14" rx="3"/>
                        <rect x="370" y="240" width="12" height="12" rx="3"/>
                        <rect x="450" y="320" width="12" height="12" rx="3"/>
                        <rect x="300" y="360" width="10" height="10" rx="2"/>
                      </g>
                    </g>

                    {/* Migration path with squares moving from DB to Cloud (lightweight, subtle) */}
                    <path id="dm_path"
                          d="M510,470 C720,470 840,420 980,420"
                          fill="none" stroke="url(#dm_accent)" strokeWidth="4" strokeLinecap="round"
                          markerEnd="url(#dm_arrow)"/>

                    {/* Minimal "data packets" along the path (no heavy filters/animations) */}
                    <g fill="#ffb3b0">
                      <rect x="620" y="462" width="10" height="10" rx="2"/>
                      <rect x="720" y="455" width="10" height="10" rx="2"/>
                      <rect x="820" y="440" width="10" height="10" rx="2"/>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </HeroBackground>

        {/* Sticky Navigation */}
        <nav 
          id="dm-nav" 
          className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-center overflow-x-auto py-4 space-x-8 scrollbar-hide">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "flex-shrink-0 font-inter font-medium text-sm px-4 py-2 rounded-full transition-all duration-200",
                    activeSection === item.id
                      ? "bg-[#E52629] text-white shadow-md"
                      : "text-gray-600 hover:text-[#E52629] hover:bg-gray-100"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Overview Section - Light */}
        <section 
          id="dm-overview" 
          ref={(el) => (sectionsRef.current[0] = el)}
          className="py-20 bg-white"
        >
          <div className="max-w-[1040px] mx-auto px-4">
            <h2 className="font-montserrat font-bold text-4xl mb-6 text-center text-[#1C1C1C]">
              Migration Excellence
            </h2>
            <p className="text-center text-gray-700 font-inter text-lg mb-12 max-w-3xl mx-auto">
              We deliver tenant‑to‑tenant, on‑prem→cloud, and cloud→cloud migrations with measurable outcomes and signed SLAs.
            </p>
            
            {/* Three Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
               <Card className="bg-white border-2 border-gray-200 hover:border-[#E52629] transition-colors duration-300 shadow-md hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#E52629]/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-[#E52629]" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-lg text-[#1C1C1C] mb-2">
                        Identity & Directory
                      </h3>
                      <p className="font-inter text-gray-700 text-sm">
                        Entra ID (Azure AD) moves with hybrid support
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

               <Card className="bg-white border-2 border-gray-200 hover:border-[#E52629] transition-colors duration-300 shadow-md hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#E52629]/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-[#E52629]" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-lg text-[#1C1C1C] mb-2">
                        Collaboration & Files
                      </h3>
                      <p className="font-inter text-gray-700 text-sm">
                        Email, files, SharePoint/Teams, Google Workspace migrations
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-gray-200 hover:border-[#E52629] transition-colors duration-300 shadow-md hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#E52629]/10 rounded-full flex items-center justify-center">
                      <Database className="h-6 w-6 text-[#E52629]" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-lg text-[#1C1C1C] mb-2">
                        Data & Apps
                      </h3>
                      <p className="font-inter text-gray-700 text-sm">
                        Databases, data lakes, and enterprise applications
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Outcome Pills - matching Home page style */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-[#FDE8E8] text-[#E52629] px-6 py-3.5 rounded-full font-montserrat font-semibold border border-[#E52629]/20 text-center hover:shadow-md transition-shadow">
                40% faster workflows
              </div>
              <div className="bg-[#E8F4FF] text-[#007AFF] px-6 py-3.5 rounded-full font-montserrat font-semibold border border-[#007AFF]/20 text-center hover:shadow-md transition-shadow">
                30% ops efficiency
              </div>
              <div className="bg-[#F0FFF4] text-[#10B981] px-6 py-3.5 rounded-full font-montserrat font-semibold border border-[#10B981]/20 text-center hover:shadow-md transition-shadow">
                50% faster intercompany processing
              </div>
            </div>
          </div>
        </section>

        {/* Workloads Section */}
        <section 
          id="dm-workloads" 
          ref={(el) => (sectionsRef.current[1] = el)}
          className="py-20 bg-[#F5F5F5]"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-12 text-center text-[#1C1C1C]">
              Workloads We Migrate
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Identity & Directory",
                  items: ["Active Directory", "Entra ID (Azure AD)", "Google Directory", "LDAP systems"]
                },
                {
                  icon: <Mail className="h-8 w-8" />,
                  title: "Email & Collaboration",
                  items: ["Exchange Server", "Microsoft 365", "Google Workspace", "SharePoint/Teams"]
                },
                {
                  icon: <Database className="h-8 w-8" />,
                  title: "Databases",
                  items: ["SQL Server", "Oracle", "MySQL/PostgreSQL", "NoSQL platforms"]
                },
                {
                  icon: <FolderOpen className="h-8 w-8" />,
                  title: "File Systems",
                  items: ["Network shares", "OneDrive/Drive", "File servers", "DFS namespaces"]
                },
                {
                  icon: <Server className="h-8 w-8" />,
                  title: "Applications",
                  items: ["Legacy systems", "Web applications", "Custom software", "SaaS platforms"]
                },
                {
                  icon: <Cloud className="h-8 w-8" />,
                  title: "Infrastructure",
                  items: ["Virtual machines", "Containers", "Networking", "Storage systems"]
                }
              ].map((workload, index) => (
                <Card key={index} className="bg-white border-2 border-gray-200 hover:border-[#E52629] transition-colors duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-[#E52629]">{workload.icon}</div>
                      <CardTitle className="text-xl font-montserrat text-[#1C1C1C]">{workload.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {workload.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[#3C3C3C]">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="font-inter text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Methods & Phases Section - Light */}
        <section 
          id="dm-methods" 
          ref={(el) => (sectionsRef.current[2] = el)}
          className="py-20 bg-[#F5F5F5]"
        >
          <div className="max-w-6xl mx-auto px-4" id="services-data-migration">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-12 text-center text-[#1C1C1C]">
              Migration Methods & Phases
            </h2>
            
            <Tabs defaultValue="phases" className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-4 mb-8 bg-transparent h-auto p-0 border-0">
                <TabsTrigger 
                  value="phases" 
                  className="px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 cursor-pointer
                    data-[state=active]:bg-[#E52629] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#E52629]/25 data-[state=active]:border-0
                    data-[state=inactive]:bg-white data-[state=inactive]:text-[#E52629] data-[state=inactive]:border-2 data-[state=inactive]:border-[#E52629]
                    hover:data-[state=inactive]:bg-[#FDE8E8] hover:data-[state=inactive]:border-[#E52629]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2"
                >
                  Migration Phases
                </TabsTrigger>
                <TabsTrigger 
                  value="methods"
                  className="px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 cursor-pointer
                    data-[state=active]:bg-[#E52629] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#E52629]/25 data-[state=active]:border-0
                    data-[state=inactive]:bg-white data-[state=inactive]:text-[#E52629] data-[state=inactive]:border-2 data-[state=inactive]:border-[#E52629]
                    hover:data-[state=inactive]:bg-[#FDE8E8] hover:data-[state=inactive]:border-[#E52629]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2"
                >
                  Migration Methods
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="phases" className="space-y-8">
                <div className="grid md:grid-cols-5 gap-6">
                  {[
                    { phase: "1", title: "Assess", desc: "Discovery & readiness", icon: <Eye className="h-6 w-6" /> },
                    { phase: "2", title: "Plan", desc: "Strategy & timeline", icon: <Target className="h-6 w-6" /> },
                    { phase: "3", title: "Prepare", desc: "Landing zones & tools", icon: <Settings className="h-6 w-6" /> },
                    { phase: "4", title: "Migrate", desc: "Data & workload moves", icon: <ArrowRightLeft className="h-6 w-6" /> },
                    { phase: "5", title: "Validate", desc: "Testing & optimization", icon: <CheckCircle className="h-6 w-6" /> }
                  ].map((step, index) => (
                    <Card key={index} className="text-center border-2 hover:border-[#E52629] transition-colors">
                      <CardHeader>
                        <div className="mx-auto w-12 h-12 bg-[#E52629] text-white rounded-full flex items-center justify-center mb-3">
                          {step.icon}
                        </div>
                        <CardTitle className="font-montserrat text-lg">
                          Phase {step.phase}: {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 font-inter">{step.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="methods" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Lift & Shift",
                      description: "Direct migration with minimal changes",
                      benefits: ["Fastest approach", "Lower risk", "Immediate cloud benefits"]
                    },
                    {
                      title: "Re-platform",
                      description: "Optimize for cloud-native services",
                      benefits: ["Better performance", "Cost optimization", "Enhanced scalability"]
                    },
                    {
                      title: "Hybrid Coexistence",
                      description: "Gradual migration with interim connectivity",
                      benefits: ["Minimal disruption", "Risk mitigation", "Business continuity"]
                    }
                  ].map((method, index) => (
                    <Card key={index} className="border-2 border-gray-200 loc-card-hover-primary">
                      <CardHeader>
                        <CardTitle className="font-montserrat text-xl text-[#1C1C1C]">
                          {method.title}
                        </CardTitle>
                        <CardDescription className="font-inter">
                          {method.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {method.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="font-inter text-sm text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Cutover & Validation Section - White */}
        <section 
          id="dm-cutover" 
          ref={(el) => (sectionsRef.current[3] = el)}
          className="py-20 bg-white"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-12 text-center text-[#1C1C1C]">
              Cutover & Validation
            </h2>
            
            <div id="dm-cutover-cards" className="grid lg:grid-cols-2 gap-12">
              <Card className="bg-white border-2 border-gray-200 loc-card-hover-primary">
                <CardHeader className="border-t-4 border-[hsl(var(--primary)/0.4)] pt-6">
                  <CardTitle className="font-montserrat text-2xl text-[#1C1C1C] flex items-center gap-3">
                    <Clock className="h-6 w-6 text-[#E52629]" />
                    Cutover Planning
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Pre-cutover validation and rollback procedures",
                    "Detailed runbooks with time estimates",
                    "Communication plans and stakeholder updates",
                    "24/7 war room support during critical windows",
                    "Automated rollback triggers and procedures"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-[#E52629] mt-1 flex-shrink-0" />
                      <span className="font-inter text-gray-700">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card className="bg-white border-2 border-gray-200 loc-card-hover-primary">
                <CardHeader className="border-t-4 border-[#10B981]/40 pt-6">
                  <CardTitle className="font-montserrat text-2xl text-[#1C1C1C] flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    Validation & Testing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Data integrity verification (99.9% accuracy)",
                    "Application functionality testing",
                    "Performance baseline comparisons",
                    "Security posture validation",
                    "User acceptance testing coordination"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="font-inter text-gray-700">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Success Metrics */}
            <div className="mt-16 py-12">
              <h3 className="font-montserrat font-bold text-4xl mb-10 text-center text-[#1C1C1C]">
                Migration Success Metrics
              </h3>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-montserrat font-bold text-[#E52629] mb-2">
                    <CountUpNumber end={99.9} duration={1400} suffix="%" className="text-4xl font-montserrat font-bold text-[#E52629]" startSeed={95} />
                  </div>
                  <div className="font-inter text-gray-700 font-medium">Data Integrity</div>
                </div>
                <div>
                  <div className="text-4xl font-montserrat font-bold text-[#E52629] mb-2">&lt;2hrs</div>
                  <div className="font-inter text-gray-700 font-medium">Typical Downtime</div>
                </div>
                <div>
                  <div className="text-4xl font-montserrat font-bold text-[#E52629] mb-2">24/7</div>
                  <div className="font-inter text-gray-700 font-medium">Support Window</div>
                </div>
                <div>
                  <div className="text-4xl font-montserrat font-bold text-[#E52629] mb-2">
                    <CountUpNumber end={100} duration={1400} suffix="%" className="text-4xl font-montserrat font-bold text-[#E52629]" startSeed={85} />
                  </div>
                  <div className="font-inter text-gray-700 font-medium">Rollback Ready</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance Section - Light Gray */}
        <section 
          id="dm-security" 
          ref={(el) => (sectionsRef.current[4] = el)}
          className="py-20 bg-[#F5F5F5]"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-12 text-center text-[#1C1C1C]">
              Security & Compliance
            </h2>
            
            <div id="dm-security-cards" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Lock className="h-8 w-8" />,
                  title: "Encryption",
                  items: ["Data at rest", "Data in transit", "End-to-end", "Key management"]
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Zero Trust",
                  items: ["Identity verification", "Least privilege", "Continuous monitoring", "Policy enforcement"]
                },
                {
                  icon: <CheckCircle className="h-8 w-8" />,
                  title: "Compliance",
                  items: ["ISO 27001", "SOC 2", "GDPR ready", "Industry standards"]
                },
                {
                  icon: <Eye className="h-8 w-8" />,
                  title: "Monitoring",
                  items: ["Real-time logs", "Anomaly detection", "Audit trails", "Incident response"]
                }
              ].map((feature, index) => (
                <Card key={index} className="text-center bg-white border-2 border-gray-200 loc-card-hover-primary">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-[#E52629]/10 text-[#E52629] rounded-full flex items-center justify-center mb-3">
                      {feature.icon}
                    </div>
                    <CardTitle className="font-montserrat text-xl text-[#1C1C1C]">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      {feature.items.map((item, idx) => (
                        <li key={idx} className="font-inter text-gray-600">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Compliance Note */}
            <div className="mt-12 bg-[#E52629] text-white rounded-lg p-6 text-center">
              <h3 className="font-montserrat font-semibold text-xl mb-2">
                Zero-Trust Reference Design Included
              </h3>
              <p className="font-inter">
                Every migration includes security best practices and compliance-ready configurations tailored to your industry requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Tooling Section - White */}
        <section 
          id="dm-tooling" 
          ref={(el) => (sectionsRef.current[5] = el)}
          className="py-20 bg-white"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-12 text-center text-[#1C1C1C]">
              Tools & Integrations
            </h2>
            
            <div id="dm-tooling-cards" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Cloud Platforms",
                  tools: ["Azure Migrate", "AWS Migration Hub", "Google Cloud Migrate", "VMware Cloud"]
                },
                {
                  category: "Data & Database",
                  tools: ["Azure Data Factory", "AWS DMS", "ShareGate", "Quest Migration"]
                },
                {
                  category: "Identity & Directory",
                  tools: ["Azure AD Connect", "ADMT", "Google Directory Sync", "Okta"]
                },
                {
                  category: "Monitoring & Validation",
                  tools: ["Azure Monitor", "CloudWatch", "Grafana", "Custom dashboards"]
                },
                {
                  category: "Automation & IaC",
                  tools: ["Terraform", "Azure ARM", "PowerShell DSC", "Ansible"]
                },
                {
                  category: "Security & Compliance",
                  tools: ["Azure Sentinel", "CloudTrail", "Security Center", "Compliance Manager"]
                }
              ].map((category, index) => (
                <Card key={index} className="border-2 border-gray-200 loc-card-hover-primary">
                  <CardHeader>
                    <CardTitle className="font-montserrat text-xl text-[#1C1C1C]">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-700">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="font-inter text-gray-600 italic">
                We leverage industry-leading tools and maintain vendor neutrality to recommend the best solution for your specific requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Section - Light */}
        <section 
          id="dm-proof" 
          ref={(el) => (sectionsRef.current[6] = el)}
          className="py-20 bg-white"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-12 text-center text-[#1C1C1C]">
              Insights
            </h2>
            
            <div id="dm-insights-cards" className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  metric: "40%",
                  outcome: "faster workflows",
                  context: "Banking sector, Australia",
                  icon: <TrendingUp className="h-8 w-8" />
                },
                {
                  metric: "30%",
                  outcome: "ops efficiency improvement",
                  context: "Oil & Gas, United States",
                  icon: <Zap className="h-8 w-8" />
                },
                {
                  metric: "50%",
                  outcome: "faster intercompany processing",
                  context: "Financial Services, UK",
                  icon: <Target className="h-8 w-8" />
                }
              ].map((study, index) => (
                <Card key={index} className="bg-white border-2 border-gray-200 text-center loc-card-hover-primary">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-[#FDE8E8] text-[#E52629] rounded-full flex items-center justify-center mb-4">
                      {study.icon}
                    </div>
                    <div className="text-4xl font-montserrat font-bold text-[#E52629] mb-2">
                      {study.metric}
                    </div>
                    <CardTitle className="font-montserrat text-xl text-[#1C1C1C]">
                      {study.outcome}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-inter text-gray-600 text-sm">
                      {study.context}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-[#E52629] text-[#E52629] hover:bg-[#E52629] hover:text-white focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 transition-colors duration-200"
              >
                <Link to="/case-studies">
                  View detailed case studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQs Section - Light */}
        <section 
          id="dm-faqs" 
          className="py-20 bg-[#F5F5F5]"
        >
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-12 text-center text-[#1C1C1C]">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How do you minimize downtime during migration?",
                  answer: "We use phased migration approaches, pre-staging data, and automated cutover procedures. Most migrations achieve less than 2 hours of downtime with comprehensive rollback procedures in place."
                },
                {
                  question: "What security baselines do you implement by default?",
                  answer: "All migrations include Zero-Trust principles, end-to-end encryption, identity verification, and compliance with industry standards like ISO 27001 and SOC 2. We provide security architecture documentation as part of every project."
                },
                {
                  question: "Which clouds and SaaS suites do you support?",
                  answer: "We support Azure, AWS, Google Cloud, Microsoft 365, Google Workspace, and hybrid environments. Our team maintains certifications across all major platforms and can handle complex multi-cloud scenarios."
                },
                {
                  question: "What does your managed service include?",
                  answer: "Our managed migration service includes 24/7 monitoring, automated rollback capabilities, real-time progress reporting, and dedicated technical support throughout the migration timeline with clear SLA commitments."
                },
                {
                  question: "How do you price projects vs. managed services?",
                  answer: "Project pricing is based on scope, complexity, and timeline. Managed services are priced on a monthly basis with transparent SLAs. We provide detailed cost breakdowns and offer flexible engagement models to fit your budget."
                },
                {
                  question: "Can you work with our existing CSP/MSP?",
                  answer: "Absolutely. We frequently collaborate with existing cloud service providers and managed service partners. Our approach is designed to complement your current relationships while ensuring seamless migration execution."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border">
                  <AccordionTrigger className="px-6 py-4 text-left font-montserrat font-semibold text-[#1C1C1C] hover:text-[#E52629] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 font-inter text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Band - Red */}
        <section className="py-20 bg-[#E52629] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-6">
              Ready to Modernize Your Data?
            </h2>
            <p className="font-inter text-xl text-white/95 mb-10">
              Start your migration journey with a comprehensive assessment and personalized roadmap.
            </p>
            
            <div className="flex justify-center">
              <a 
                href="https://calendly.com/systechnosoft-info/30min" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-white text-[#E52629] hover:bg-gray-50 px-10 py-4 text-lg font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E52629]"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Cross-links Section - Compact */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="font-montserrat font-semibold text-xl mb-6 text-center text-[#1C1C1C]">
              Related Services
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Cloud Services", href: "/services/cloud" },
                { name: "Managed IT Services", href: "/services/managed-it-services" },
                { name: "Backup & Recovery", href: "/services/backup-recovery" },
                { name: "Microsoft Dynamics 365", href: "/services/microsoft-dynamics-365" }
              ].map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="px-6 py-3 bg-gray-100 hover:bg-[#E52629] hover:text-white text-gray-700 rounded-full font-inter font-medium transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}