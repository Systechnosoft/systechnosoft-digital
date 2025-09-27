import { ArrowRight, Server, Code, Bot, CheckCircle, TrendingUp, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";
import WhyFeatureSlider from "@/components/WhyFeatureSlider";

const pillars = [
  {
    icon: Server,
    title: "IT Infrastructure",
    description: "Modernize networks, cloud, and devices with 24×7 managed support.",
    href: "/services/it-infrastructure",
    cta: "Explore"
  },
  {
    icon: Code,
    title: "Low-code Apps",
    description: "Build enterprise apps faster on Appian & Salesforce.",
    href: "/services/low-code",
    cta: "Explore"
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Automate workflows with SDKs, Zapier, and Make.",
    href: "/services/ai-automation",
    cta: "Explore"
  }
];

const whyPoints = [
  {
    icon: TrendingUp,
    text: "Outcome-first: measurable gains in speed, cost, and compliance"
  },
  {
    icon: Users,
    text: "India-first delivery, global standards"
  },
  {
    icon: Shield,
    text: "Security & governance by design"
  },
  {
    icon: CheckCircle,
    text: "Scalable engagement models"
  }
];

const caseStudies = [
  {
    title: "Low-code (Global Bank, AU)",
    metric: "40%",
    description: "faster trading workflows; stronger compliance",
    industry: "Financial Services",
    href: "/case-studies/global-bank-trading"
  },
  {
    title: "Oil & Gas (USA)",
    metric: "30%",
    description: "operational efficiency via workforce automation",
    industry: "Oil & Gas",
    href: "/case-studies/usa-oil-gas"
  },
  {
    title: "Financial Services (UK)",
    metric: "50%",
    description: "faster intercompany processing",
    industry: "Financial Services",
    href: "/case-studies/uk-financial"
  }
];

const industries = [
  { name: "BFSI", icon: "🏦" },
  { name: "Oil & Gas", icon: "⚡" },
  { name: "Aviation", icon: "✈️" }
];

const outcomes = [
  { metric: "40%", description: "Average reduction in process time" },
  { metric: "30%", description: "Operational efficiency gains" },
  { metric: "50%", description: "Faster application delivery" },
  { metric: "24/7", description: "Managed infrastructure support" }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 leading-tight">
            Maximize Innovation.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Minimize Code.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Enterprise IT solutions across Infrastructure, Low-code (Appian & Salesforce), 
            and AI/Automation — delivered fast, securely, and at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-hero text-lg px-8 py-4"
              asChild
            >
              <Link to="/readiness-check">
                Run Digital Readiness Check
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <a href="https://calendly.com/systechnosoft-info/30min" target="_blank" rel="noopener noreferrer">Talk to an Expert</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Three Pillars of Digital Transformation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your enterprise modernization journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="card-enterprise group cursor-pointer flex flex-col h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <pillar.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-montserrat font-bold">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex flex-col flex-grow">
                  <CardDescription className="text-base mb-6 flex-grow">
                    {pillar.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="w-full text-foreground hover:bg-primary/5 hover:text-primary border-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF] focus-visible:ring-offset-2 transition-all"
                    asChild
                  >
                    <Link 
                      to={pillar.href}
                      aria-label={`${pillar.cta} ${pillar.title} services`}
                    >
                      {pillar.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Systechnosoft */}
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{ 
          backgroundImage: `linear-gradient(90deg, rgba(28,28,28,0.60) 0%, rgba(28,28,28,0.35) 40%, rgba(28,28,28,0.15) 100%), url(/images/why-bg.jpg)`
        }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-6 items-start">
          {/* Left Column - Content */}
          <div className="lg:col-span-7">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
                Why Systechnosoft
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                We deliver measurable outcomes with proven methods, secure architectures, and deep domain expertise across Infrastructure, Low-code, and AI.
              </p>

              {/* KPI Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-center">
                  <span className="text-2xl font-montserrat font-bold text-primary">40%</span>
                  <span className="text-white/90 text-sm ml-2">faster F2B trading workflows (Banking, AU)</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-center">
                  <span className="text-2xl font-montserrat font-bold text-primary">30%</span>
                  <span className="text-white/90 text-sm ml-2">efficiency gain in workforce ops (Oil & Gas, US)</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-center">
                  <span className="text-2xl font-montserrat font-bold text-primary">20%</span>
                  <span className="text-white/90 text-sm ml-2">HR cost reduction (UK)</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-center">
                  <span className="text-2xl font-montserrat font-bold text-primary">50%</span>
                  <span className="text-white/90 text-sm ml-2">faster intercompany processing (UK FS)</span>
                </div>
              </div>

              {/* Mini Timeline */}
              <div className="mb-8">
                <div className="hidden lg:flex items-center justify-between mb-4">
                  <div className="flex-1 text-center">
                    <div className="w-8 h-8 bg-primary rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div className="text-white font-medium text-sm">Discover</div>
                  </div>
                  <div className="flex-1 h-0.5 bg-white/30 mx-2"></div>
                  <div className="flex-1 text-center">
                    <div className="w-8 h-8 bg-primary rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div className="text-white font-medium text-sm">Pilot</div>
                  </div>
                  <div className="flex-1 h-0.5 bg-white/30 mx-2"></div>
                  <div className="flex-1 text-center">
                    <div className="w-8 h-8 bg-primary rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div className="text-white font-medium text-sm">Scale</div>
                  </div>
                  <div className="flex-1 h-0.5 bg-white/30 mx-2"></div>
                  <div className="flex-1 text-center">
                    <div className="w-8 h-8 bg-primary rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div className="text-white font-medium text-sm">CoE Advisory</div>
                  </div>
                </div>
                
                {/* Mobile Timeline */}
                <div className="lg:hidden space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Discover</div>
                      <div className="text-white/70 text-sm">Problem framing, architecture options, roadmap</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Pilot</div>
                      <div className="text-white/70 text-sm">Prototype + success criteria + security gates</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Scale</div>
                      <div className="text-white/70 text-sm">Harden, integrate, measure outcomes</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">CoE Advisory</div>
                      <div className="text-white/70 text-sm">Center of Excellence, reuse & standards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Carousel */}
          <div className="lg:col-span-5 self-stretch h-full">
            <WhyFeatureSlider />
          </div>
        </div>

        {/* CTA Row - Full Width Below Both Columns */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button
            size="lg"
            className="btn-hero text-lg px-8 py-4"
            asChild
          >
            <Link to="/case-studies">
              View Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
            asChild
          >
            <Link to="/tools/readiness-check">Run Digital Readiness Check</Link>
          </Button>
        </div>
      </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real outcomes delivered for global enterprises across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="card-enterprise group cursor-pointer">
                <CardHeader>
                  <div className="text-center mb-4">
                    <div className="text-4xl font-montserrat font-bold text-primary mb-2">
                      {study.metric}
                    </div>
                    <CardTitle className="text-lg font-montserrat font-bold">
                      {study.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {study.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {study.industry}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto text-accent link-animated"
                      asChild
                    >
                      <Link to={study.href}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Strip */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-montserrat font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
          </div>
          <div className="flex justify-center items-center space-x-12">
            {industries.map((industry, index) => (
              <Link
                key={index}
                to="/industries"
                className="flex flex-col items-center space-y-2 group focus-enterprise rounded p-4"
              >
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <span className="text-sm font-inter font-medium text-foreground group-hover:text-primary transition-colors">
                  {industry.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What Clients Achieve */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              What Clients Achieve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Measurable outcomes that drive business transformation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">
                  {outcome.metric}
                </div>
                <p className="text-sm text-muted-foreground">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary-foreground mb-6">
            Ready to accelerate your transformation?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's discuss how we can help maximize your innovation while minimizing complexity
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="btn-secondary bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
            asChild
          >
            <a href="https://calendly.com/systechnosoft-info/30min" target="_blank" rel="noopener noreferrer">
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}