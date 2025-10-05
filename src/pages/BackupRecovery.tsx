import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { HeroBackground, HeroMotionSystem } from "@/components/HeroMotionSystem";
import { ArrowRight, Shield, Clock, Database, Cloud, Server, Archive, FileCheck, Lock, Eye, BarChart3, MapPin, CheckCircle, AlertTriangle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const heroCards = [
  { icon: "☁️", title: "Cloud Backups", benefit: "Continuous, encrypted backup to cloud" },
  { icon: "💾", title: "Data Protection", benefit: "Immutable backups, WORM, S3 Object Lock" },
  { icon: "🔄", title: "Disaster Recovery", benefit: "Cross-region failover, automated drills" },
  { icon: "🔐", title: "Security & Compliance", benefit: "Encrypted at rest & in transit" },
  { icon: "📊", title: "Hybrid Storage", benefit: "On-prem + cloud tiers for durability" },
  { icon: "⏱️", title: "Fast Recovery", benefit: "RPO 15 min, RTO < 2hrs for tier-1" }
];

export default function BackupRecovery() {
  const [activeSection, setActiveSection] = useState("br-overview");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  const subNavItems = [
    { id: "br-overview", label: "Overview" },
    { id: "br-coverage", label: "Choose your coverage" },
    { id: "br-platforms", label: "Platforms & Tools" },
    { id: "br-cta", label: "Ready to secure your critical data?" },
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
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const targetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Data Backup & Recovery Services | Enterprise Protection | Systechnosoft</title>
        <meta 
          name="description" 
          content="Protect mission-critical data with immutable backups, hybrid storage, and disaster recovery you can test and trust. 99.9%+ restore success with 24×7 monitoring." 
        />
        <meta property="og:title" content="Data Backup & Recovery Services | Enterprise Protection | Systechnosoft" />
        <meta property="og:description" content="Protect mission-critical data with immutable backups, hybrid storage, and disaster recovery you can test and trust. 99.9%+ restore success with 24×7 monitoring." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/services/backup-recovery" />
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroBackground>
          <section id="hero" className="relative min-h-[80vh] lg:min-h-screen flex items-center py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div className="text-center lg:text-left">
                  <h1 className="font-montserrat font-bold text-5xl lg:text-6xl mb-6 text-[#1C1C1C]">
                    Data Backup & Recovery Services
                  </h1>
                  <p className="font-inter text-xl lg:text-2xl text-[#3C3C3C] mb-8 max-w-4xl">
                    Protect mission-critical data with immutable backups, hybrid storage, and disaster recovery you can test and trust.
                  </p>
                  
                  {/* Badge Pills */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12">
                    <Badge variant="secondary" className="bg-[#E52629]/10 text-[#E52629] border-[#E52629]/20 px-4 py-2">
                      99.9%+ restore success (tests)
                    </Badge>
                    <Badge variant="secondary" className="bg-[#007AFF]/10 text-[#007AFF] border-[#007AFF]/20 px-4 py-2">
                      Zero-trust aligned
                    </Badge>
                    <Badge variant="secondary" className="bg-[#E52629]/10 text-[#E52629] border-[#E52629]/20 px-4 py-2">
                      24×7 monitoring
                    </Badge>
                  </div>
                  
                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link to="/contact?topic=dr-readiness">
                      <Button 
                        size="lg" 
                        className="bg-[#E52629] hover:bg-[#D01F21] text-white font-semibold px-8 py-4 text-lg transition-all duration-300 ease-out hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Request DR review
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-[#E52629] text-[#E52629] hover:bg-[#E52629] hover:text-white focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 transition-colors duration-200 px-8 py-4 text-lg font-semibold"
                      >
                        Claim Your Free Insight
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Right Column - Static Visual */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-md">
                    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" role="img" aria-label="Data backup and recovery visualization showing cloud storage, server protection, and security">
                      {/* Background gradient */}
                      <defs>
                        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#E52629', stopOpacity: 0.1}} />
                          <stop offset="100%" style={{stopColor: '#007AFF', stopOpacity: 0.1}} />
                        </linearGradient>
                        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#007AFF', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#0051D5', stopOpacity: 1}} />
                        </linearGradient>
                      </defs>
                      
                      {/* Background circle */}
                      <circle cx="200" cy="200" r="180" fill="url(#bgGradient)" />
                      
                      {/* Cloud shape */}
                      <g transform="translate(200, 120)">
                        <ellipse cx="-30" cy="0" rx="40" ry="30" fill="url(#cloudGradient)" />
                        <ellipse cx="0" cy="-10" rx="50" ry="40" fill="url(#cloudGradient)" />
                        <ellipse cx="30" cy="0" rx="40" ry="30" fill="url(#cloudGradient)" />
                        <rect x="-60" y="0" width="120" height="30" fill="url(#cloudGradient)" />
                      </g>
                      
                      {/* Shield icon in cloud */}
                      <path d="M200,100 L185,105 L185,125 C185,135 192.5,142.5 200,145 C207.5,142.5 215,135 215,125 L215,105 Z" fill="white" opacity="0.9" />
                      <path d="M200,110 L195,112 L195,125 C195,130 197.5,132.5 200,134 C202.5,132.5 205,130 205,125 L205,112 Z" fill="#E52629" />
                      
                      {/* Server rack */}
                      <g transform="translate(120, 240)">
                        <rect x="0" y="0" width="60" height="80" rx="4" fill="#3C3C3C" stroke="#E52629" strokeWidth="2" />
                        <rect x="5" y="5" width="50" height="20" rx="2" fill="#1C1C1C" />
                        <rect x="5" y="30" width="50" height="20" rx="2" fill="#1C1C1C" />
                        <rect x="5" y="55" width="50" height="20" rx="2" fill="#1C1C1C" />
                        <circle cx="15" cy="15" r="2" fill="#00FF00" />
                        <circle cx="15" cy="40" r="2" fill="#00FF00" />
                        <circle cx="15" cy="65" r="2" fill="#00FF00" />
                      </g>
                      
                      {/* Database */}
                      <g transform="translate(260, 240)">
                        <ellipse cx="0" cy="0" rx="30" ry="10" fill="#007AFF" />
                        <rect x="-30" y="0" width="60" height="60" fill="#007AFF" />
                        <ellipse cx="0" cy="60" rx="30" ry="10" fill="#0051D5" />
                        <ellipse cx="0" cy="0" rx="30" ry="10" fill="#4A9FFF" />
                      </g>
                      
                      {/* Connecting lines with arrows */}
                      <line x1="150" y1="200" x2="180" y2="160" stroke="#E52629" strokeWidth="2" strokeDasharray="4 2" opacity="0.6" />
                      <line x1="280" y1="200" x2="220" y2="160" stroke="#007AFF" strokeWidth="2" strokeDasharray="4 2" opacity="0.6" />
                      
                      {/* Lock icon */}
                      <g transform="translate(200, 320)">
                        <rect x="-15" y="0" width="30" height="25" rx="3" fill="#E52629" />
                        <path d="M-8,-10 L-8,-5 L8,-5 L8,-10 C8,-15 4,-18 0,-18 C-4,-18 -8,-15 -8,-10 Z" fill="none" stroke="#E52629" strokeWidth="3" />
                        <circle cx="0" cy="10" r="4" fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </HeroBackground>

        {/* Sticky Navigation */}
        <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex overflow-x-auto py-4 space-x-8 scrollbar-none" role="navigation" aria-label="Page sections">
              {subNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2",
                    activeSection === item.id ? "bg-[#E52629] text-white" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  )}
                  aria-current={activeSection === item.id ? "true" : undefined}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Outcome Highlights */}
        <section id="br-overview" ref={(el) => (sectionsRef.current[0] = el)} className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat text-3xl font-bold text-center mb-12 text-gray-900">
              Outcomes you can measure
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
                <Clock className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">RPO as low as 15 min</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
                <BarChart3 className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">RTO &lt; 2 hrs (tier-1)</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
                <Lock className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Immutable backups</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
                <MapPin className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Geo-redundant copies</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
                <CheckCircle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Automated DR drills</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
                <Shield className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Encrypted in transit & at rest</div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Cover */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat text-3xl font-bold text-center mb-12 text-gray-900">
              What We Cover
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-red-600">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Cloud className="h-8 w-8 text-red-600" />
                    <CardTitle className="text-xl">Remote Cloud Backups</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Continuous, encrypted backups to cloud/object storage with lifecycle policies.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-red-600">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Server className="h-8 w-8 text-red-600" />
                    <CardTitle className="text-xl">Virtual Infra Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Backup and protection for VMs/containers; policy-based scheduling & health.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-red-600">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Database className="h-8 w-8 text-red-600" />
                    <CardTitle className="text-xl">Cloud Data Protection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Versioning, immutability (WORM/S3 Object Lock), key management/rotation.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-red-600">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <FileCheck className="h-8 w-8 text-red-600" />
                    <CardTitle className="text-xl">Hybrid Cloud Storage</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    On-prem + cloud tiers for performance + durability; smart caching.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-red-600">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Archive className="h-8 w-8 text-red-600" />
                    <CardTitle className="text-xl">Tiered Storage</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Hot/warm/cold archival with automated transitions and cost controls.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-red-600">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Eye className="h-8 w-8 text-red-600" />
                    <CardTitle className="text-xl">Live Archiving (Outsourced)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Compliance-ready retention, legal holds, and audit trails.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Disaster Recovery */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-montserrat text-3xl font-bold text-center mb-8 text-gray-900">
                Disaster Recovery you can rehearse
              </h2>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>DR runbooks with step-by-step recovery procedures</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Application dependency mapping and impact analysis</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Cross-region failover with automated orchestration</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Push-button failback with data consistency checks</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Scheduled DR drills with detailed reports and recommendations</span>
                    </li>
                  </ul>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t">
                    <div className="text-center">
                      <Clock className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">RPO</div>
                      <div className="text-sm text-gray-600">15 min - 24 hrs</div>
                    </div>
                    <div className="text-center">
                      <BarChart3 className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">RTO</div>
                      <div className="text-sm text-gray-600">2 hrs - 48 hrs</div>
                    </div>
                    <div className="text-center">
                      <Shield className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">Last DR drill</div>
                      <div className="text-sm text-gray-600">Monthly</div>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">Coverage %</div>
                      <div className="text-sm text-gray-600">99.9%+</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Reference Architecture */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat text-3xl font-bold text-center mb-12 text-gray-900">
              Reference Architecture
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-50 rounded-lg p-6 mb-4">
                    <Database className="h-12 w-12 text-blue-600 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Sources</h3>
                  <p className="text-sm text-gray-600">Servers, databases, workstations, cloud apps</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-50 rounded-lg p-6 mb-4">
                    <Server className="h-12 w-12 text-green-600 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Backup Proxy/Agent</h3>
                  <p className="text-sm text-gray-600">Deduplication, compression, encryption</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-50 rounded-lg p-6 mb-4">
                    <Lock className="h-12 w-12 text-purple-600 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Immutable Storage</h3>
                  <p className="text-sm text-gray-600">Primary & off-site repositories</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-red-50 rounded-lg p-6 mb-4">
                    <Cloud className="h-12 w-12 text-red-600 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">DR Site/Cloud</h3>
                  <p className="text-sm text-gray-600">Recovery orchestration & testing</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 max-w-3xl mx-auto">
                  End-to-end encryption, IAM boundaries, and comprehensive monitoring/alerting ensure data integrity and security throughout the backup and recovery lifecycle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Tiers */}
        <section id="br-coverage" ref={(el) => (sectionsRef.current[1] = el)} className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat text-3xl font-bold text-center mb-12 text-gray-900">
              Choose your coverage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="relative">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Essential</CardTitle>
                  <CardDescription className="text-center">Perfect for small businesses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Workstation + file server backups</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Daily snapshots</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">30-day retention</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Email alerts</span>
                    </li>
                  </ul>
                  <Link to="/contact?topic=backup-recovery" className="block">
                    <Button 
                      className="w-full border-[#E52629] text-[#E52629] hover:bg-[#E52629] hover:text-white focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 transition-colors" 
                      variant="outline"
                      size="lg"
                    >
                      Talk to an Expert
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="relative border-red-600 border-2">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-red-600 text-white">Most Popular</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Business</CardTitle>
                  <CardDescription className="text-center">Comprehensive protection</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Server/DB app-aware backups</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Immutable copies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Weekly DR test</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Role-based access</span>
                    </li>
                  </ul>
                  <Link to="/contact?topic=backup-recovery" className="block">
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Talk to an Expert
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="relative">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Enterprise</CardTitle>
                  <CardDescription className="text-center">Maximum resilience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Multi-region geo-replication</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Continuous backups</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Quarterly DR drills</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Custom RPO/RTO, dedicated TAM</span>
                    </li>
                  </ul>
                  <Link to="/contact?topic=backup-recovery" className="block">
                    <Button 
                      className="w-full border-[#E52629] text-[#E52629] hover:bg-[#E52629] hover:text-white focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 transition-colors" 
                      variant="outline"
                      size="lg"
                    >
                      Talk to an Expert
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Compliance & Security */}
        <section id="br-platforms" ref={(el) => (sectionsRef.current[2] = el)} className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-montserrat text-3xl font-bold mb-4 text-gray-900">
                Compliance & Security
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">DPDP-aware processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">ISO-aligned controls</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">Data minimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">Consent & retention</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Database className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">Encrypted transport/storage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileCheck className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">Access logging</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 max-w-3xl mx-auto">
                We design for DPDP 2023 awareness; get legal counsel for your context. Our solutions implement industry best practices for data protection and regulatory compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Case Study Teasers */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat text-3xl font-bold text-center mb-12 text-gray-900">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-red-600 mb-2">40%</div>
                  <div className="font-semibold text-gray-900 mb-2">faster recovery</div>
                  <div className="text-sm text-gray-600">Trading firm, AU</div>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-red-600 mb-2">60%</div>
                  <div className="font-semibold text-gray-900 mb-2">storage savings</div>
                  <div className="text-sm text-gray-600">Oil & Gas, US</div>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="font-semibold text-gray-900 mb-2">monitoring uptime</div>
                  <div className="text-sm text-gray-600">Financial Services, UK</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="br-cta" ref={(el) => (sectionsRef.current[3] = el)} className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary-foreground mb-6">
              Ready to secure your critical data?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get a free backup assessment and discover your recovery readiness.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="btn-secondary bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
                asChild
              >
                <Link to="/contact">
                  Claim Your Free Insight
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}