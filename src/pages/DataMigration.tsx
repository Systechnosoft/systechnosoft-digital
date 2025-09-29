import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
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
    { id: "dm-tooling", label: "Tooling" },
    { id: "dm-proof", label: "Case Studies" },
  ];

  useEffect(() => {
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
        {/* Hero Section - Dark */}
        <section id="dm-hero" className="relative overflow-hidden bg-gradient-to-b from-[#1C1C1C] to-[#3C3C3C] text-white">
          {/* Circuit Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.3"/>
                  <circle cx="18" cy="18" r="1" fill="currentColor" opacity="0.3"/>
                  <path d="M2,2 L18,2 M18,2 L18,18 M18,18 L2,18" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)"/>
            </svg>
          </div>
          
          <div className="relative pt-32 pb-24 px-4">
            <div className="max-w-6xl mx-auto">

              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-montserrat font-bold text-6xl lg:text-7xl mb-6">
                  Data Migration
                </h1>
                <p className="font-inter text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                  Move identities, files, messages, apps, and databases—securely and with minimal downtime—across on‑prem, Azure, AWS, Google Cloud, Microsoft 365, and Google Workspace.
                </p>
                
                {/* Badges */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                    99.9% integrity checks
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                    Zero-trust aligned
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                    Cutover with rollback
                  </Badge>
                </div>
                
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact?src=data-migration-hero">
                    <Button size="lg" className="bg-[#E52629] hover:bg-[#E52629]/90 text-white px-8 py-4 text-lg font-semibold">
                      Claim Your Free Insight
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/contact?type=mra">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-4 text-lg font-semibold"
                    >
                      Request Migration Readiness Assessment
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <nav 
          id="dm-nav" 
          className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex overflow-x-auto py-4 space-x-8 scrollbar-hide">
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
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-montserrat font-bold text-4xl mb-6 text-[#1C1C1C]">
                  Migration Excellence
                </h2>
                <div className="space-y-4 text-gray-700 font-inter text-lg">
                  <p>
                    We deliver tenant‑to‑tenant, on‑prem→cloud, and cloud→cloud migrations with measurable outcomes and signed SLAs.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-[#E52629] mt-1 flex-shrink-0" />
                      <span>Identity & directory moves via <strong>Entra ID</strong> (Azure AD) with hybrid support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-[#E52629] mt-1 flex-shrink-0" />
                      <span>Email, files, SharePoint/Teams, Google Workspace migrations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Database className="h-5 w-5 text-[#E52629] mt-1 flex-shrink-0" />
                      <span>Databases, data lakes, and enterprise applications</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                {/* Placeholder for isometric illustration */}
                <div className="bg-gradient-to-br from-[#F5F5F5] to-gray-200 rounded-2xl p-8 text-center aspect-square flex items-center justify-center">
                  <div className="space-y-4">
                    <Cloud className="h-16 w-16 text-[#007AFF] mx-auto" />
                    <ArrowRightLeft className="h-12 w-12 text-[#E52629] mx-auto" />
                    <p className="text-gray-600 font-inter">Cloud Data Flow Visualization</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* KPI Pills */}
            <div className="mt-16 flex flex-wrap justify-center gap-6">
              <div className="bg-gradient-to-r from-[#E52629] to-red-600 text-white px-6 py-4 rounded-full font-montserrat font-semibold">
                40% faster workflows
              </div>
              <div className="bg-gradient-to-r from-[#007AFF] to-blue-600 text-white px-6 py-4 rounded-full font-montserrat font-semibold">
                30% ops efficiency
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-full font-montserrat font-semibold">
                50% faster intercompany processing
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4 font-inter">
              <em>Representative program outcomes; details on request</em>
            </p>
          </div>
        </section>

        {/* Workloads Section - Dark */}
        <section 
          id="dm-workloads" 
          ref={(el) => (sectionsRef.current[1] = el)}
          className="py-20 bg-gradient-to-b from-[#1C1C1C] to-[#3C3C3C] text-white relative overflow-hidden"
        >
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }} />
          </div>
          
          <div className="relative max-w-6xl mx-auto px-4">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-12 text-center">
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
                <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-[#E52629]">{workload.icon}</div>
                      <CardTitle className="text-xl font-montserrat">{workload.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {workload.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-white/90">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
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
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-12 text-center text-[#1C1C1C]">
              Migration Methods & Phases
            </h2>
            
            <Tabs defaultValue="phases" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="phases">Migration Phases</TabsTrigger>
                <TabsTrigger value="methods">Migration Methods</TabsTrigger>
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
                    <Card key={index} className="hover:shadow-lg transition-shadow">
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
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="font-montserrat font-semibold text-2xl mb-6 text-[#1C1C1C]">
                  Cutover Planning
                </h3>
                <div className="space-y-4">
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
                </div>
              </div>
              
              <div>
                <h3 className="font-montserrat font-semibold text-2xl mb-6 text-[#1C1C1C]">
                  Validation & Testing
                </h3>
                <div className="space-y-4">
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
                </div>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
              <h3 className="font-montserrat font-semibold text-2xl mb-6 text-center text-[#1C1C1C]">
                Migration Success Metrics
              </h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-montserrat font-bold text-green-600 mb-2">99.9%</div>
                  <div className="font-inter text-gray-700">Data Integrity</div>
                </div>
                <div>
                  <div className="text-3xl font-montserrat font-bold text-blue-600 mb-2">&lt;2hrs</div>
                  <div className="font-inter text-gray-700">Typical Downtime</div>
                </div>
                <div>
                  <div className="text-3xl font-montserrat font-bold text-[#E52629] mb-2">24/7</div>
                  <div className="font-inter text-gray-700">Support Window</div>
                </div>
                <div>
                  <div className="text-3xl font-montserrat font-bold text-purple-600 mb-2">100%</div>
                  <div className="font-inter text-gray-700">Rollback Ready</div>
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-[#007AFF] text-white rounded-full flex items-center justify-center mb-3">
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
            <div className="mt-12 bg-[#007AFF] text-white rounded-lg p-6 text-center">
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
              Tooling & Integrations
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <Card key={index} className="hover:shadow-lg transition-shadow">
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

        {/* Case Studies Section - Dark */}
        <section 
          id="dm-proof" 
          ref={(el) => (sectionsRef.current[6] = el)}
          className="py-20 bg-gradient-to-b from-[#1C1C1C] to-[#3C3C3C] text-white"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-12 text-center">
              Proven Results
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                <Card key={index} className="bg-white/10 border-white/20 text-white text-center">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-[#E52629] rounded-full flex items-center justify-center mb-4">
                      {study.icon}
                    </div>
                    <div className="text-4xl font-montserrat font-bold text-[#E52629] mb-2">
                      {study.metric}
                    </div>
                    <CardTitle className="font-montserrat text-xl">
                      {study.outcome}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-inter text-white/80 text-sm">
                      {study.context}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link to="/case-studies">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-3"
                >
                  View Detailed Case Studies
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
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
                  <AccordionTrigger className="px-6 py-4 text-left font-montserrat font-semibold text-[#1C1C1C] hover:no-underline">
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

        {/* CTA Band - Dark */}
        <section className="py-20 bg-gradient-to-r from-[#1C1C1C] via-[#3C3C3C] to-[#1C1C1C] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-6">
              Ready to Modernize Your Data?
            </h2>
            <p className="font-inter text-xl text-white/90 mb-10">
              Start your migration journey with a comprehensive assessment and personalized roadmap.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact?src=data-migration-cta">
                <Button size="lg" className="bg-[#E52629] hover:bg-[#E52629]/90 text-white px-8 py-4 text-lg font-semibold">
                  Claim Your Free Insight
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact?type=quote">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  Get a Quotation
                </Button>
              </Link>
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
                { name: "Managed IT Services", href: "/services/managed-it" },
                { name: "Backup & Recovery", href: "/services/backup" },
                { name: "Microsoft Dynamics 365", href: "/services/microsoft-dynamics-365" },
                { name: "Cybersecurity", href: "/services/cybersecurity" }
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