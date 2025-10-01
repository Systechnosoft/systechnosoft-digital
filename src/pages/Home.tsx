import { ArrowRight, Server, Code, Bot, CheckCircle, TrendingUp, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WhyFeatureSlider from "@/components/WhyFeatureSlider";
import IndustryCarousel from "@/components/IndustryCarousel";
import { HeroBackground } from "@/components/HeroMotionSystem";

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
      <HeroBackground>
        <section 
          id="hero"
          className="relative min-h-[80vh] lg:min-h-screen flex items-center py-24"
        >
          <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/70 backdrop-blur-[2px] border border-[#E6E6E6] rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="text-center flex flex-col gap-y-5 sm:gap-y-6 md:gap-y-8">
                <h1 
                  className="font-montserrat font-bold text-[#1C1C1C] leading-tight"
                  style={{ fontSize: 'clamp(32px, 6vw, 72px)' }}
                >
                  Maximize Innovation.{" "}
                  <span className="text-[#E52629]">
                    Minimize Code.
                  </span>
                </h1>
                
                <p 
                  className="text-[#3C3C3C] leading-relaxed max-w-3xl mx-auto"
                  style={{ fontSize: 'clamp(16px, 2.4vw, 20px)' }}
                >
                  Enterprise IT solutions across Infrastructure, Low-code (Appian & Salesforce), 
                  and AI/Automation — delivered fast, securely, and at scale.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-3 mt-2">
                  <Button
                    size="lg"
                    className="bg-[#E52629] hover:bg-[#E52629]/90 text-white px-8 py-4 text-lg font-semibold hover:scale-[1.03] active:scale-[0.99] transition-transform focus-visible:outline-2 focus-visible:outline-[#E52629]"
                    asChild
                  >
                    <Link to="/readiness-check" aria-label="IT Network Health Check">
                      IT Network Health Check
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#E52629] text-[#E52629] hover:bg-[#E52629]/5 px-8 py-4 text-lg font-semibold hover:scale-[1.03] active:scale-[0.99] transition-transform focus-visible:outline-2 focus-visible:outline-[#E52629]"
                    asChild
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </HeroBackground>

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
        id="why"
        aria-labelledby="why-title"
        className="py-14 sm:py-16 lg:py-20 bg-white"
      >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          id="why-title"
          className="text-3xl md:text-4xl font-montserrat font-bold text-[#1C1C1C] mb-4"
        >
          Why Systechnosoft
        </h2>
        <p className="text-xl text-[#3C3C3C] mb-8 max-w-[840px] mx-auto">
          We deliver measurable outcomes with proven methods, secure architectures, and deep domain expertise across Infrastructure, Low-code, and AI.
        </p>

        {/* KPI Pills */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 place-items-stretch">
          <div className="bg-[#FFE7E8] rounded-[28px] border border-[#E6E6E6] px-6 py-4 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-transform hover:translate-y-[-2px]">
            <span className="text-2xl font-montserrat font-bold text-[#E52629]">40%</span>
            <span className="text-[#1C1C1C] text-sm ml-2">faster F2B trading workflows (Banking, AU)</span>
          </div>
          <div className="bg-[#EAF3FF] rounded-[28px] border border-[#E6E6E6] px-6 py-4 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-transform hover:translate-y-[-2px]">
            <span className="text-2xl font-montserrat font-bold text-[#007AFF]">30%</span>
            <span className="text-[#1C1C1C] text-sm ml-2">efficiency gain in workforce ops (Oil & Gas, US)</span>
          </div>
          <div className="bg-[#FFE7E8] rounded-[28px] border border-[#E6E6E6] px-6 py-4 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-transform hover:translate-y-[-2px]">
            <span className="text-2xl font-montserrat font-bold text-[#E52629]">20%</span>
            <span className="text-[#1C1C1C] text-sm ml-2">HR cost reduction (UK)</span>
          </div>
          <div className="bg-[#EAF3FF] rounded-[28px] border border-[#E6E6E6] px-6 py-4 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-transform hover:translate-y-[-2px]">
            <span className="text-2xl font-montserrat font-bold text-[#007AFF]">50%</span>
            <span className="text-[#1C1C1C] text-sm ml-2">faster intercompany processing (UK FS)</span>
          </div>
        </div>

        {/* Process Stepper */}
        <div className="mt-10 grid grid-cols-4 gap-6 items-start justify-items-center">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 grid place-items-center rounded-full bg-[#E52629] text-white text-xs font-semibold">1</div>
            <div className="mt-2 text-sm font-medium text-[#1C1C1C]">Discover</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 grid place-items-center rounded-full bg-[#E52629] text-white text-xs font-semibold">2</div>
            <div className="mt-2 text-sm font-medium text-[#1C1C1C]">Pilot</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 grid place-items-center rounded-full bg-[#E52629] text-white text-xs font-semibold">3</div>
            <div className="mt-2 text-sm font-medium text-[#1C1C1C]">Scale</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 grid place-items-center rounded-full bg-[#E52629] text-white text-xs font-semibold">4</div>
            <div className="mt-2 text-sm font-medium text-[#1C1C1C]">CoE Advisory</div>
          </div>
        </div>
        <div className="mt-3 h-px bg-[#E6E6E6]"></div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            className="bg-[#E52629] text-white hover:bg-[#E52629]/90 text-lg px-8 py-4 focus-visible:outline-2 focus-visible:outline-[#E52629]"
            asChild
          >
            <Link to="/get-quotation" aria-label="Get a Quotation">
              Get a Quotation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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

      {/* Industries We Serve */}
      <section 
        id="industries" 
        aria-labelledby="industries-title"
        className="py-14 sm:py-16 lg:py-20 bg-white"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column - Content */}
            <div className="lg:col-span-7">
              <div className="text-left">
                <h2 
                  id="industries-title"
                  className="text-3xl md:text-4xl font-montserrat font-bold text-[#1C1C1C] mb-4"
                >
                  Industries We Serve
                </h2>
                <p className="text-xl text-[#3C3C3C] mb-8 max-w-2xl">
                  We pair domain knowledge with secure architectures to ship measurable outcomes fast.
                </p>

                {/* KPI Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-8">
                  <div className="bg-[#FFE7E8] rounded-[32px] border border-[#E6E6E6] px-6 py-4 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-transform hover:translate-y-[-2px]">
                    <span className="text-2xl font-montserrat font-bold text-[#E52629]">40%</span>
                    <span className="text-[#1C1C1C] text-sm ml-2">faster trading workflows (Banking, AU)</span>
                  </div>
                  <div className="bg-[#EAF3FF] rounded-[32px] border border-[#E6E6E6] px-6 py-4 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-transform hover:translate-y-[-2px]">
                    <span className="text-2xl font-montserrat font-bold text-[#007AFF]">30%</span>
                    <span className="text-[#1C1C1C] text-sm ml-2">efficiency in workforce ops (Oil & Gas, US)</span>
                  </div>
                  <div className="bg-[#F7F7F7] rounded-[32px] border border-[#E6E6E6] px-6 py-4 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-transform hover:translate-y-[-2px]">
                    <span className="text-sm font-medium text-[#1C1C1C]">Content ops:</span>
                    <span className="text-[#3C3C3C] text-sm ml-1">faster turnaround (Aviation)</span>
                  </div>
                  <div className="bg-[#F7F7F7] rounded-[32px] border border-[#E6E6E6] px-6 py-4 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-transform hover:translate-y-[-2px]">
                    <span className="text-sm font-medium text-[#1C1C1C]">Governance:</span>
                    <span className="text-[#3C3C3C] text-sm ml-1">improved audit & versioning (Aviation)</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center lg:justify-start mt-8">
                  <Button
                    size="lg"
                    className="bg-[#E52629] text-white hover:bg-[#E52629]/90 text-lg px-8 py-4 focus-visible:outline-2 focus-visible:outline-[#E52629]"
                    asChild
                  >
                    <Link to="/case-studies">
                      View Case Studies
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Industry Carousel */}
            <div className="lg:col-span-5 self-stretch h-full">
              <IndustryCarousel />
            </div>
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