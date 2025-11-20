import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Target,
  Rocket,
  Lightbulb,
  Shield,
  Heart,
  User,
  Search,
  FileText,
  Hammer,
  Lock,
  BarChart3,
  Server,
  Cpu,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ContactFormSection from "@/components/ContactFormSection";
import { CountUpNumber } from "@/components/CountUpNumber";
import { cn } from "@/lib/utils";
import { scrollToId } from "@/lib/scrollUtils";

export default function About() {
  const [activeSection, setActiveSection] = useState("vision-mission");

  const navItems = [
    { id: "vision-mission", label: "Vision & Mission" },
    { id: "what-we-do", label: "What We Do" },
    { id: "how-we-deliver", label: "How We Deliver" },
    { id: "proof-trust", label: "Proof & Trust" },
    { id: "values", label: "Values" },
    { id: "faqs", label: "FAQs" },
  ];

  const heroCards = [
    { icon: "🎯", title: "Enterprise-ready", benefit: "Proven at scale" },
    { icon: "⚡", title: "Fast delivery", benefit: "Weeks, not quarters" },
    { icon: "🔐", title: "Security first", benefit: "Built-in compliance" },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Customer-First Innovation",
      description: "We don't chase trends. We solve business problems with proven patterns and fresh thinking.",
    },
    {
      icon: Shield,
      title: "Security by Design",
      description: "Zero-trust defaults, encryption everywhere, and continuous compliance for every deployment.",
    },
    {
      icon: Heart,
      title: "Empathy & Inclusion",
      description: "Diverse perspectives unlock breakthrough solutions. We welcome all backgrounds and ideas.",
    },
    {
      icon: User,
      title: "Excellence Without Ego",
      description: "Great work speaks for itself. We focus on outcomes, not accolades.",
    },
  ];

  const engagementSteps = [
    { icon: Search, label: "Discover", description: "Clarify goals, constraints, and success metrics." },
    { icon: FileText, label: "Design", description: "Solution architecture and roadmapping." },
    { icon: Hammer, label: "Build", description: "Iterative delivery with low-code and AI." },
    { icon: Lock, label: "Govern", description: "Security, compliance, and support." },
    { icon: BarChart3, label: "Scale", description: "Extend to new regions or lines of business." },
  ];

  const coreVerticals = [
    {
      icon: Server,
      title: "IT Infrastructure",
      description: "Cloud, data centers, migration, backup & recovery. We modernize your infrastructure to support rapid growth and innovation.",
      links: [
        { label: "Cloud & Data Center", href: "/services/cloud" },
        { label: "Managed IT", href: "/services/managed-it" },
        { label: "Backup & Recovery", href: "/services/backup-recovery" },
      ],
    },
    {
      icon: Cpu,
      title: "Low-code",
      description: "Appian and Salesforce workflows that accelerate time-to-market. Build enterprise apps without the enterprise overhead.",
      links: [
        { label: "Appian", href: "/services/appian" },
        { label: "Salesforce", href: "/services/salesforce" },
      ],
    },
    {
      icon: Database,
      title: "AI & Automation",
      description: "NLP, analytics, and intelligent automation for smarter operations. Transform data into decisions, decisions into action.",
      links: [
        { label: "AI Development", href: "/services/ai-development" },
        { label: "NLP", href: "/services/nlp" },
        { label: "Analytics & Insights", href: "/services/analytics" },
      ],
    },
  ];

  const proofMetrics = [
    { value: 40, suffix: "%", label: "Faster trading workflows", description: "Real-time data processing for financial services" },
    { value: 30, suffix: "%", label: "More efficient operations", description: "Automation-driven productivity gains" },
    { value: 50, suffix: "%", label: "Fewer processing exceptions", description: "Intelligent validation and error handling" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const sectionIds = navItems.map((item) => item.id);
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUpVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const staggeredFadeUp = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const heroTimerRef = useRef<NodeJS.Timeout>();
  const heroPauseTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isHeroPaused || prefersReducedMotion) return;
    heroTimerRef.current = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroCards.length);
    }, 3000);
    return () => { if (heroTimerRef.current) clearInterval(heroTimerRef.current); };
  }, [isHeroPaused]);

  const handleHeroMouseEnter = () => {
    setIsHeroPaused(true);
    if (heroPauseTimeoutRef.current) clearTimeout(heroPauseTimeoutRef.current);
    heroPauseTimeoutRef.current = setTimeout(() => setIsHeroPaused(false), 10000);
  };

  const handleHeroKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setCurrentHeroIndex((prev) => e.key === "ArrowLeft" ? (prev - 1 + heroCards.length) % heroCards.length : (prev + 1) % heroCards.length);
      setIsHeroPaused(true);
      if (heroPauseTimeoutRef.current) clearTimeout(heroPauseTimeoutRef.current);
      heroPauseTimeoutRef.current = setTimeout(() => setIsHeroPaused(false), 10000);
    }
  };

  return (
    <>
      <Helmet>
        <title>About Systechnosoft | Enterprise Cloud, Low-Code & AI Solutions</title>
        <meta name="description" content="Systechnosoft blends IT infrastructure, low-code platforms, and AI to deliver secure, scalable solutions for BFSI, aviation, oil & gas, and healthcare." />
      </Helmet>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section 
          id="hero" 
          className="sf-hero about-hero relative min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden bg-white py-24"
          aria-labelledby="about-hero-title"
        >
          {/* Animated background */}
          <div className="sf-hero__bg absolute inset-0 opacity-10" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(229,38,41,0.1),transparent)]" />
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `conic-gradient(from 0deg at 50% 50%, transparent, hsl(var(--primary)), transparent)`,
                backgroundSize: "400px 400px"
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Content */}
          <div className="sf-hero__inner relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center max-w-[1200px] mx-auto">
              {/* Left Column - Copy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="about-hero__left space-y-6 max-w-[44rem]">
                <div className="space-y-6">
                  <h1 
                    id="about-hero-title"
                    className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-[#1C1C1C] leading-tight">
                    We blend IT Infrastructure, Low-code, and AI into <span className="text-[#E52629]">one execution partner.</span>
                  </h1>
                  <p className="text-lg md:text-xl text-[#3C3C3C] leading-relaxed max-w-prose">
                    Serving BFSI, aviation, oil & gas, and healthcare with cloud, data, and intelligent automation. Maximize innovation. Minimize code.
                  </p>
                </div>

                {/* Benefit Chips */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="sf-hero__chips flex flex-wrap gap-3"
                  aria-label="Key benefits">
                  {["Integrated IT, Low-code & AI", "BFSI, Aviation & Oil & Gas focus", "Maximize innovation. Minimize code."].map((badge, idx) => (
                    <motion.div
                      key={badge}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + idx * 0.08, duration: 0.35 }}>
                      <Badge 
                        variant="secondary" 
                        className="text-sm px-4 py-2 bg-white/80 border-[#E6E6E6] text-[#1C1C1C] hover:shadow-sm transition-shadow">
                        {badge}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTAs */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-[#E52629] hover:bg-[#D01F21] text-white font-semibold px-8 py-4 text-lg transition-all duration-300 ease-out hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 active:scale-[0.99]" 
                    onClick={() => scrollToId("what-we-do", 96)}>
                    See what we deliver →
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg" 
                    className="border-[#E52629] text-[#E52629] hover:bg-[#E52629] hover:text-white focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 transition-colors duration-200 px-8 py-4 text-lg font-semibold">
                    <Link to="/contact?type=mra">Claim your free insight</Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Column - Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="about-hero__art relative isolate group" 
                onMouseEnter={handleHeroMouseEnter} 
                onMouseLeave={() => { if (heroPauseTimeoutRef.current) clearTimeout(heroPauseTimeoutRef.current); setIsHeroPaused(false); }} 
                onFocus={() => setIsHeroPaused(true)} 
                onKeyDown={handleHeroKeyDown} 
                tabIndex={0} 
                role="region" 
                aria-label="Service highlights">
                <div className="relative min-h-[400px] flex items-center justify-center">
                  {heroCards.map((card, index) => (
                    <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: currentHeroIndex === index ? 1 : 0, scale: currentHeroIndex === index ? 1 : 0.95 }} transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5 }} className={cn("absolute inset-0 flex items-center justify-center", currentHeroIndex !== index && "pointer-events-none")}>
                      <Card className="w-full max-w-md bg-white border-2 border-[#E6E6E6] shadow-[0_10px_30px_rgba(0,0,0,0.06)] rounded-2xl transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-y-[-6px] hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]">
                        <CardContent className="p-12 text-center">
                          <div className="text-6xl mb-6">{card.icon}</div>
                          <h3 className="text-2xl font-bold font-montserrat text-[#1C1C1C] mb-3">{card.title}</h3>
                          <p className="text-[#3C3C3C] text-lg">{card.benefit}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                {/* Subtle brand glow */}
                <span 
                  aria-hidden="true" 
                  className="pointer-events-none absolute -inset-3 rounded-[22px] blur-lg opacity-[.18] -z-10"
                  style={{
                    background: `radial-gradient(40% 40% at 20% 30%, #E52629 10%, transparent 70%), radial-gradient(35% 35% at 80% 70%, #007AFF 10%, transparent 70%)`
                  }}
                />
                {!prefersReducedMotion && (
                  <div className="flex justify-center gap-2 mt-6">
                    {heroCards.map((_, index) => (
                      <button key={index} onClick={() => { setCurrentHeroIndex(index); setIsHeroPaused(true); if (heroPauseTimeoutRef.current) clearTimeout(heroPauseTimeoutRef.current); heroPauseTimeoutRef.current = setTimeout(() => setIsHeroPaused(false), 10000); }} className={cn("w-3 h-3 rounded-full transition-all", currentHeroIndex === index ? "bg-[#E52629] w-8" : "bg-gray-300")} aria-label={`Go to slide ${index + 1}`} />
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <nav className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-center overflow-x-auto py-4 space-x-8 scrollbar-hide">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => scrollToId(item.id, 96)} className={cn("flex-shrink-0 font-inter font-medium text-sm px-4 py-2 rounded-full transition-all duration-200", activeSection === item.id ? "bg-[#E52629] text-white shadow-md" : "text-gray-600 hover:text-[#E52629] hover:bg-gray-100")}>{item.label}</button>
              ))}
            </div>
          </div>
        </nav>

        {/* Vision & Mission */}
        <section id="vision-mission" className="py-20 bg-white">
          <div id="about-vision-mission" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariants} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C]">Vision & Mission</h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggeredFadeUp} className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeUpVariants}>
                <Card className="h-full bg-white border-2 border-gray-200 loc-card-hover-primary">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center gap-3"><Target className="h-8 w-8 text-[#E52629]" /><CardTitle className="font-montserrat text-2xl">Vision</CardTitle></div>
                  </CardHeader>
                  <CardContent><p className="text-[#3C3C3C] leading-relaxed">To be the trusted execution partner for businesses navigating digital transformation—delivering cloud, low-code, and AI solutions that are secure, scalable, and built to last.</p></CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeUpVariants}>
                <Card className="h-full bg-white border-2 border-gray-200 loc-card-hover-primary">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center gap-3"><Rocket className="h-8 w-8 text-[#E52629]" /><CardTitle className="font-montserrat text-2xl">Mission</CardTitle></div>
                  </CardHeader>
                  <CardContent><p className="text-[#3C3C3C] leading-relaxed">We combine IT infrastructure excellence, low-code agility, and applied AI to help enterprises modernize faster, operate smarter, and scale with confidence.</p></CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What We Do */}
        <section id="what-we-do" className="py-20 bg-[#F5F5F5]">
          <div id="about-what-we-do" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariants} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C] mb-4">What We Do</h2>
              <p className="text-lg text-[#3C3C3C] max-w-2xl mx-auto">Three core verticals. One integrated approach. Real outcomes.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggeredFadeUp} className="grid md:grid-cols-3 gap-8">
              {coreVerticals.map((vertical, index) => (
                <motion.div key={index} variants={fadeUpVariants}>
                  <Card className="h-full bg-white border-2 border-gray-200 loc-card-hover-primary">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4"><vertical.icon className="h-10 w-10 text-[#E52629]" /></div>
                      <CardTitle className="font-montserrat text-xl text-[#1C1C1C]">{vertical.title}</CardTitle>
                      <CardDescription className="text-[#3C3C3C] leading-relaxed">{vertical.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {vertical.links.map((link, idx) => (<Link key={idx} to={link.href} className="block text-sm text-[#E52629] hover:underline font-medium">{link.label}</Link>))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How We Deliver */}
        <section id="how-we-deliver" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariants} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C] mb-4">How We Deliver</h2>
              <p className="text-lg text-[#3C3C3C] max-w-2xl mx-auto">A proven, repeatable approach from discovery to scale.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto items-start">
              {engagementSteps.map((step, index) => (
                <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex flex-col items-center text-center group cursor-default" tabIndex={0}>
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-full border-2 border-[#E52629] flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg group-focus-visible:scale-110 group-focus-visible:shadow-lg">
                      <step.icon className="h-8 w-8 text-[#E52629] transition-transform duration-200 group-hover:scale-110" />
                    </div>
                  </div>
                  <h3 className="font-montserrat font-bold text-lg text-[#1C1C1C] mb-2 transition-all duration-200 group-hover:-translate-y-1">{step.label}</h3>
                  <p className="text-sm text-[#3C3C3C]">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof & Trust */}
        <section id="proof-trust" className="py-20 bg-[#F5F5F5]">
          <div id="about-proof-trust" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariants} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C] mb-4">Proof & Trust</h2>
              <p className="text-lg text-[#3C3C3C] max-w-2xl mx-auto">Real outcomes from real engagements across BFSI, aviation, and oil & gas.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggeredFadeUp} className="grid md:grid-cols-3 gap-8">
              {proofMetrics.map((metric, index) => (
                <motion.div key={index} variants={fadeUpVariants}>
                  <Card className="bg-white border-2 border-gray-200 loc-card-hover-primary text-center h-full flex flex-col justify-center">
                    <CardContent className="p-8">
                      <div className="text-5xl font-bold text-[#E52629] mb-4"><CountUpNumber end={metric.value} suffix={metric.suffix} /></div>
                      <h3 className="text-xl font-bold font-montserrat text-[#1C1C1C] mb-3">{metric.label}</h3>
                      <p className="text-sm text-[#3C3C3C]">{metric.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Values */}
        <section id="values" className="py-20 bg-white">
          <div id="about-values" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariants} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C] mb-4">Our Values</h2>
              <p className="text-lg text-[#3C3C3C] max-w-2xl mx-auto">The principles that guide every decision, every project, every partnership.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggeredFadeUp} className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div key={index} variants={fadeUpVariants}>
                  <Card className="h-full bg-white border-2 border-gray-200 loc-card-hover-primary">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#FEE2E2]"><value.icon className="h-6 w-6 text-[#E52629]" /></div>
                        <div>
                          <CardTitle className="font-montserrat text-xl text-[#1C1C1C] mb-2">{value.title}</CardTitle>
                          <CardDescription className="text-[#3C3C3C] leading-relaxed">{value.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="py-20 bg-[#F5F5F5]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariants} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C]">Frequently Asked Questions</h2>
            </motion.div>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { question: "What industries do you serve?", answer: "We primarily serve BFSI (banking, financial services, insurance), aviation, oil & gas, and healthcare. Our expertise in these sectors allows us to deliver industry-specific solutions that address unique regulatory and operational challenges." },
                { question: "Do you offer staff augmentation or project-based delivery?", answer: "We offer both. For long-term needs, we provide dedicated teams. For specific projects, we deliver end-to-end using our proven methodology. We tailor our engagement model to your requirements." },
                { question: "How do you handle compliance and security?", answer: "Security is built into every solution from day one. We follow zero-trust principles, implement encryption at rest and in transit, maintain audit trails, and ensure compliance with CIS, ISO 27001, SOC 2, DPDP, and GDPR standards." },
                { question: "What's your typical engagement timeline?", answer: "Most pilots and MVPs take 4-8 weeks. Full implementations range from 3-6 months depending on scope. We use phased delivery to show value early and adjust based on feedback." },
                { question: "How do you measure success?", answer: "We define clear success metrics upfront—whether it's reduced processing time, lower costs, improved uptime, or faster time-to-market. We track these KPIs throughout delivery and report regularly." },
              ].map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border border-[#E6E6E6] rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-[#1C1C1C] hover:text-[#E52629] hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-[#3C3C3C]">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <ContactFormSection />
      </main>
    </>
  );
}
