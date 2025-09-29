import { Link } from "react-router-dom";
import {
  Cloud,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Globe,
  Database,
  Network,
  Lock,
  BarChart3,
  Settings,
  Users,
  CloudRain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Simple animated particles component with CSS animations
const AnimatedParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated nodes */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-[#E52629]/40 rounded-full animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-[#007AFF]/40 rounded-full animate-pulse" 
           style={{ animationDuration: '5s', animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/3 w-2.5 h-2.5 bg-white/20 rounded-full animate-pulse" 
           style={{ animationDuration: '6s', animationDelay: '2s' }} />
    </div>
  );
};

// Circuit pattern SVG
const CircuitPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1200 800">
    <defs>
      <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
        <rect width="120" height="120" fill="transparent"/>
        <path d="M20,20 L100,20 L100,40 M40,40 L40,80 L80,80 M80,60 L100,60 L100,100 L20,100 L20,80" 
              stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <circle cx="20" cy="20" r="1.5" fill="currentColor"/>
        <circle cx="100" cy="40" r="1.5" fill="currentColor"/>
        <circle cx="40" cy="80" r="1.5" fill="currentColor"/>
        <circle cx="100" cy="100" r="1.5" fill="currentColor"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circuit)" className="text-white"/>
  </svg>
);

const deliverables = [
  {
    icon: Globe,
    title: "Landing Zones & Governance",
    description: "Well-architected foundations on Azure/AWS with identity, policy, networking, logging, cost guardrails.",
  },
  {
    icon: Shield,
    title: "Resilient Architecture",
    description: "HA/DR patterns, backups, replication, and tested runbooks that hit your RTO/RPO.",
  },
  {
    icon: BarChart3,
    title: "Observability & FinOps",
    description: "Unified monitoring, SLOs, cost visibility, and continuous optimization.",
  },
];

const services = [
  {
    icon: Cloud,
    title: "Azure Migrations",
    description: "Lift-and-shift, replatforming, AKS, Landing Zones, Entra ID, hybrid connectivity.",
    features: ["Azure Landing Zones", "AKS Containers", "Entra ID Integration", "Hybrid Networking"]
  },
  {
    icon: Database,
    title: "AWS Migrations",
    description: "EC2/RDS/EKS, VPC/IAM, Control Tower, Organizations, hybrid and DR.",
    features: ["AWS Control Tower", "EKS Kubernetes", "IAM & Organizations", "Disaster Recovery"]
  },
  {
    icon: Users,
    title: "Google Workspace Migrations",
    description: "Tenant moves, identity, email/calendar/docs, coexistence and cutover.",
    features: ["Tenant Migration", "Identity Sync", "Email & Calendar", "Document Migration"]
  },
  {
    icon: Network,
    title: "SharePoint Migration",
    description: "From on-prem or file shares to SharePoint Online—with governance and retention.",
    features: ["On-Prem Migration", "File Share Import", "Governance Policies", "Retention Rules"]
  },
  {
    icon: Settings,
    title: "SaaS Enablement & SSO",
    description: "SaaS discovery, selection, SSO/MFA, provisioning, license hygiene, cost control.",
    features: ["SaaS Discovery", "SSO/MFA Setup", "User Provisioning", "License Management"]
  },
  {
    icon: CloudRain,
    title: "Cloud Operations",
    description: "Monitoring, alerting, backup/restore, incident/changes, patching, platform upgrades.",
    features: ["24x7 Monitoring", "Backup & Restore", "Incident Response", "Patch Management"]
  },
];

const migrationSteps = [
  {
    step: "01",
    title: "Discover",
    description: "Inventory, readiness, baselines, business drivers.",
    icon: Database,
  },
  {
    step: "02", 
    title: "Plan",
    description: "Landing zone, IAM, network, security, migration wave plan.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Migrate", 
    description: "Tools (Azure Migrate, DMS, AWS MGN), validation, cutover.",
    icon: ArrowRight,
  },
  {
    step: "04",
    title: "Stabilize & Optimize",
    description: "Hardening, SLOs, backups/DR, FinOps, handover.",
    icon: TrendingUp,
  },
];

const securityFeatures = [
  "Identity & Access (Entra ID/AWS IAM, least privilege, conditional access, SSO/MFA)",
  "Data Protection (encryption at rest/in transit, KMS, rotation, retention)",
  "Network Security (private endpoints, WAF, NSGs/security groups, micro-seg)",
  "Backup & DR (policy-backups, geo-redundancy, recovery tests)",
  "Compliance (logs, audit trails, immutable archives, alerts)",
];

const platforms = ["Azure", "AWS", "Google Workspace", "Terraform", "GitHub"];

export default function CloudServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f14] to-[#12161d] text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <CircuitPattern />
        
        {/* Radial glows */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#E52629]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-[#007AFF]/20 rounded-full blur-3xl" />
        
        {/* Animated particles */}
        <AnimatedParticles />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <Badge variant="outline" className="border-[#E52629]/30 text-[#E52629] bg-[#E52629]/10 px-4 py-2">
                <Cloud className="w-4 h-4 mr-2" />
                Cloud Transformation
              </Badge>
            </div>
            
            <h1 className="font-montserrat font-bold text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Cloud Services
            </h1>
            
            <p className="font-inter text-xl text-white/90 mb-8 leading-relaxed">
              Modernize, migrate, and operate securely across Azure, AWS, and Google Workspace—with measurable outcomes and zero-trust by design.
            </p>

            {/* KPI Chips */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
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
              <Link to="/contact?subject=Cloud%20Services">
                <Button size="lg" className="bg-[#E52629] hover:bg-[#E52629]/90 text-white px-8 py-4 text-lg">
                  Claim Your Free Insight
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact?subject=Cloud%20Architecture">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-4 text-lg"
                >
                  Talk to an Architect
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl mb-4">What We Deliver</h2>
            <p className="font-inter text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive cloud solutions designed for enterprise scale and security
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deliverables.map((item, index) => (
              <div key={index} className="animate-fade-in hover-scale">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
                  <CardContent className="p-8">
                    <item.icon className="h-12 w-12 text-[#E52629] mb-6" />
                    <h3 className="font-montserrat font-semibold text-xl text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="font-inter text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl mb-4">Services We Offer</h2>
            <p className="font-inter text-xl text-white/80 max-w-3xl mx-auto">
              End-to-end cloud migration and management services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in hover-scale">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-colors">
                  <CardContent className="p-6">
                    <service.icon className="h-10 w-10 text-[#007AFF] mb-4" />
                    <h3 className="font-montserrat font-semibold text-lg text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="font-inter text-white/80 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-white/70">
                          <CheckCircle className="h-4 w-4 text-[#E52629] mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Migrate Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl mb-4">How We Migrate</h2>
            <p className="font-inter text-xl text-white/80 max-w-3xl mx-auto">
              Our proven 4-step migration methodology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {migrationSteps.map((step, index) => (
              <div key={index} className="animate-fade-in hover-scale">
                <Card className="bg-gradient-to-b from-white/10 to-white/5 border-white/10 backdrop-blur-sm h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-montserrat font-bold text-[#E52629] mb-4">
                      {step.step}
                    </div>
                    <step.icon className="h-10 w-10 text-white mx-auto mb-4" />
                    <h3 className="font-montserrat font-semibold text-lg text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="font-inter text-white/80 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security by Design Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl mb-4">Security by Design</h2>
            <p className="font-inter text-xl text-white/80 max-w-3xl mx-auto">
              Zero-trust architecture principles built into every migration
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {securityFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-start animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CheckCircle className="h-5 w-5 text-[#E52629] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-inter text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Toolchain & Platforms Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl mb-4">Toolchain & Platforms</h2>
            <p className="font-inter text-xl text-white/80">
              Industry-leading technologies we leverage
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className="bg-white/10 text-white border-white/20 px-6 py-3 text-base animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {platform}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-[#E52629]/10 to-[#007AFF]/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl mb-6">
              Ready to Modernize Your Cloud Infrastructure?
            </h2>
            <p className="font-inter text-xl text-white/90 mb-8">
              Get a free cloud readiness assessment and migration roadmap tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact?subject=Cloud%20Services">
                <Button size="lg" className="bg-[#E52629] hover:bg-[#E52629]/90 text-white px-8 py-4 text-lg">
                  Claim Your Free Insight
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/tools/health-check">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-4 text-lg"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  IT Network Health Check
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}