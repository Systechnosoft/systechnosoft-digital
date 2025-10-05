import { ArrowRight, Server, Code, Bot, CheckCircle, TrendingUp, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WhyFeatureSlider from "@/components/WhyFeatureSlider";
import IndustryCarousel from "@/components/IndustryCarousel";
import { HeroBackground } from "@/components/HeroMotionSystem";
import { CountUpNumber } from "@/components/CountUpNumber";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Server,
    title: "IT Infrastructure",
    description: "Modernize networks, cloud, and devices with 24×7 managed support.",
    href: "/services/managed-it-services",
    cta: "Explore"
  },
  {
    icon: Code,
    title: "Low-code Apps",
    description: "Build enterprise apps faster on Appian & Salesforce.",
    href: "/services/appian",
    cta: "Explore"
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Automate workflows with SDKs, Zapier, and Make.",
    href: "/services/ai",
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
    title: "Global Bank (AU)",
    metric: "40%",
    description: (
      <>
        Faster trading workflows<br />stronger compliance
      </>
    ),
    href: "/case-studies"
  },
  {
    title: "Oil & Gas (USA)",
    metric: "30%",
    description: "Operational efficiency via workforce automation",
    href: "/case-studies"
  },
  {
    title: "Financial Services (UK)",
    metric: "50%",
    description: "Faster intercompany processing",
    href: "/case-studies"
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
                    className="border-[#E52629] text-[#E52629] hover:bg-[#E52629] hover:text-white px-8 py-4 text-lg font-semibold hover:scale-[1.01] hover:shadow-lg active:scale-[0.99] transition-all focus-visible:outline-2 focus-visible:outline-[#E52629]"
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
            {pillars.map((pillar, index) => {
              const colors = [
                { bg: 'hover:bg-[#007AFF]/5', border: 'hover:border-[#007AFF]/30', icon: 'group-hover:text-[#007AFF]', glow: 'group-hover:shadow-[0_0_20px_rgba(0,122,255,0.2)]' },
                { bg: 'hover:bg-[#8B5CF6]/5', border: 'hover:border-[#8B5CF6]/30', icon: 'group-hover:text-[#8B5CF6]', glow: 'group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]' },
                { bg: 'hover:bg-[#E52629]/5', border: 'hover:border-[#E52629]/30', icon: 'group-hover:text-[#E52629]', glow: 'group-hover:shadow-[0_0_20px_rgba(229,38,41,0.2)]' }
              ];
              const color = colors[index];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                >
                  <Card className={`card-enterprise group cursor-pointer flex flex-col h-full transition-all duration-300 hover:-translate-y-1 ${color.border} ${color.glow}`}>
                    <CardHeader className="text-center pb-4">
                      <motion.div 
                        className={`w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${color.bg}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <pillar.icon className={`h-8 w-8 text-primary transition-all duration-300 ${color.icon}`} />
                      </motion.div>
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
                        className="w-full text-foreground hover:bg-primary/5 hover:text-primary border-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF] focus-visible:ring-offset-2 transition-all duration-300 group-hover:scale-105"
                        asChild
                      >
                        <Link 
                          to={pillar.href}
                          aria-label={`${pillar.cta} ${pillar.title} services`}
                        >
                          {pillar.cta}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
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
            <Link to="/contact" aria-label="Get a Quotation">
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              >
                <Card className="card-enterprise group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <CardHeader>
                    <div className="text-center mb-4">
                      <motion.div 
                        className="text-4xl font-montserrat font-bold text-primary mb-2"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CountUpNumber end={parseInt(study.metric)} duration={1500} suffix="%" startSeed={0} />
                      </motion.div>
                      <CardTitle className="text-lg font-montserrat font-bold">
                        {study.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base mb-6">
                      {study.description}
                    </CardDescription>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto text-accent link-animated mx-auto group-hover:underline transition-all"
                      asChild
                    >
                      <Link to={study.href}>
                        Read More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section 
        id="industries" 
        aria-labelledby="industries-title"
        className="py-8 sm:py-10 lg:py-12 bg-white"
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8 items-start">
            {/* Left Column - Content */}
            <div className="lg:max-w-[640px]">
              <div className="text-left">
                <h2 
                  id="industries-title"
                  className="text-3xl md:text-4xl font-montserrat font-bold text-[#1C1C1C] mb-3"
                >
                  Industries We Serve
                </h2>
                <p className="text-xl text-[#3C3C3C] mb-6 max-w-2xl">
                  We pair domain knowledge with secure architectures to ship measurable outcomes fast.
                </p>

                {/* KPI Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                  <div className="bg-[#FFE7E8] rounded-[32px] border border-[#E6E6E6] px-5 py-3.5 min-h-[96px] flex items-center justify-center text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-transform hover:translate-y-[-2px]">
                    <div>
                      <span className="text-2xl font-montserrat font-bold text-[#E52629]">40%</span>
                      <span className="text-[#1C1C1C] text-sm ml-2">faster trading workflows (Banking, AU)</span>
                    </div>
                  </div>
                  <div className="bg-[#EAF3FF] rounded-[32px] border border-[#E6E6E6] px-5 py-3.5 min-h-[96px] flex items-center justify-center text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-transform hover:translate-y-[-2px]">
                    <div>
                      <span className="text-2xl font-montserrat font-bold text-[#007AFF]">30%</span>
                      <span className="text-[#1C1C1C] text-sm ml-2">efficiency in workforce ops (Oil & Gas, US)</span>
                    </div>
                  </div>
                  <div className="bg-[#F0FFF4] rounded-[32px] border border-[#E6E6E6] px-5 py-3.5 min-h-[96px] flex items-center justify-center text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-transform hover:translate-y-[-2px]">
                    <div>
                      <span className="text-2xl font-montserrat font-bold text-[#10B981]">50%</span>
                      <span className="text-[#1C1C1C] text-sm ml-2">faster intercompany processing (UK FS)</span>
                    </div>
                  </div>
                  <div className="bg-[#F7F7F7] rounded-[32px] border border-[#E6E6E6] px-5 py-3.5 min-h-[96px] flex items-center justify-center text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-transform hover:translate-y-[-2px]">
                    <div>
                      <span className="text-sm font-medium text-[#1C1C1C]">Content ops:</span>
                      <span className="text-[#3C3C3C] text-sm ml-1">faster turnaround (Aviation)</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column - Industry Carousel */}
            <div className="lg:max-w-[560px] self-start">
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
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">
                <CountUpNumber end={40} duration={1200} suffix="%" startSeed={10} />
              </div>
              <p className="text-sm text-muted-foreground">
                Average reduction in process time
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">
                <CountUpNumber end={30} duration={1200} suffix="%" startSeed={10} />
              </div>
              <p className="text-sm text-muted-foreground">
                Operational efficiency gains
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">
                <CountUpNumber end={50} duration={1200} suffix="%" startSeed={10} />
              </div>
              <p className="text-sm text-muted-foreground">
                Faster application delivery
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">
                <CountUpNumber end={24} duration={1000} startSeed={10} />/7
              </div>
              <p className="text-sm text-muted-foreground">
                Managed infrastructure support
              </p>
            </div>
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