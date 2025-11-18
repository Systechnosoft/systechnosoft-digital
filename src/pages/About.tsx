import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Zap,
  Users,
  Heart,
  Award,
  Globe,
  TrendingUp,
  Rocket,
  Shield,
  Code,
  Lightbulb,
  MapPin,
  Server,
  Cpu,
  Database,
  Cloud,
  Search,
  FileText,
  Hammer,
  Lock,
  BarChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeroMotionSystem } from "@/components/HeroMotionSystem";
import { CountUpNumber } from "@/components/CountUpNumber";
import { scrollToId } from "@/lib/scrollUtils";
import { cn } from "@/lib/utils";
import { useConsultationStore } from "@/lib/consultation-store";
import ContactFormSection from "@/components/ContactFormSection";

const About = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("vision-mission");
  const { openCalendly } = useConsultationStore();

  // Navigation items
  const navItems = [
    { id: "vision-mission", label: "Vision & Mission" },
    { id: "what-we-do", label: "What We Do" },
    { id: "how-we-deliver", label: "How We Deliver" },
    { id: "proof-trust", label: "Proof & Trust" },
    { id: "values", label: "Values" },
    { id: "global-presence", label: "Global Presence" },
    { id: "faqs", label: "FAQs" },
    { id: "contact", label: "Contact" }
  ];

  // Hero cards for motion system
  const heroCards = [
    {
      icon: "🏗️",
      title: "IT Infrastructure",
      benefit: "Cloud, data centers, migration, backup & recovery for enterprise scale."
    },
    {
      icon: "⚡",
      title: "Low‑code Platforms",
      benefit: "Appian and Salesforce workflows that reduce development time by 60%."
    },
    {
      icon: "🤖",
      title: "AI & Automation",
      benefit: "NLP, analytics, and intelligent automation for smarter operations."
    }
  ];

  // Scroll spy effect
  useEffect(() => {
    const observers = navItems.map(item => {
      const element = document.getElementById(item.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.id);
          }
        },
        { rootMargin: "-20% 0px -60% 0px" }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  // Culture pillars
  const culturePillars = [
    {
      icon: TrendingUp,
      title: "Grow fast",
      description: "Certifications, guilds, mentorship, learning wallet."
    },
    {
      icon: Rocket,
      title: "Build boldly",
      description: "Hackathons, R&D spikes, proof-of-value sprints."
    },
    {
      icon: Zap,
      title: "Move fast",
      description: "Agile cadence, transparent rituals, zero‑friction deployments."
    },
    {
      icon: Users,
      title: "Collaborate openly",
      description: "Cross‑practice guilds, demo days, knowledge hubs."
    }
  ];

  // Values
  const values = [
    {
      icon: Lightbulb,
      title: "Customer-First Innovation",
      description: "We don't chase trends. We solve business problems with proven patterns and fresh thinking."
    },
    {
      icon: Shield,
      title: "Security by Design",
      description: "Zero-trust defaults, encryption everywhere, and continuous compliance for every deployment."
    },
    {
      icon: Heart,
      title: "Empathy & Inclusion",
      description: "Diverse perspectives unlock breakthrough solutions. We welcome all backgrounds and ideas."
    },
    {
      icon: Award,
      title: "Excellence Without Ego",
      description: "Great work speaks for itself. We focus on outcomes, not accolades."
    }
  ];

  // Engagement model steps
  const engagementSteps = [
    {
      icon: Search,
      title: "Discover",
      description: "Clarify goals, constraints, and success metrics."
    },
    {
      icon: FileText,
      title: "Design",
      description: "Solution architecture and roadmapping."
    },
    {
      icon: Hammer,
      title: "Build",
      description: "Iterative delivery with low‑code and AI."
    },
    {
      icon: Lock,
      title: "Govern",
      description: "Security, compliance, and support."
    },
    {
      icon: BarChart,
      title: "Scale",
      description: "Extend to new regions or lines of business."
    }
  ];

  // What We Do verticals
  const coreVerticals = [
    {
      icon: Server,
      title: "IT Infrastructure",
      description: "Cloud, data centers, migration, backup & recovery. We modernize your infrastructure to support rapid growth and innovation.",
      links: [
        { label: "Cloud & Data Center", href: "/services/cloud-services" },
        { label: "Managed IT", href: "/services/managed-it-services" },
        { label: "Backup & Recovery", href: "/services/backup-recovery" }
      ]
    },
    {
      icon: Cpu,
      title: "Low‑code",
      description: "Appian and Salesforce workflows that accelerate time-to-market. Build enterprise apps without the enterprise overhead.",
      links: [
        { label: "Appian", href: "/services/appian" },
        { label: "Salesforce", href: "/services/salesforce" }
      ]
    },
    {
      icon: Database,
      title: "AI & Automation",
      description: "NLP, analytics, and intelligent automation for smarter operations. Transform data into decisions, decisions into action.",
      links: [
        { label: "AI Development", href: "/services/ai-development-integration" },
        { label: "NLP", href: "/services/ai-natural-language-processing" },
        { label: "Analytics & Insights", href: "/services/ai-data-analytics-insights" }
      ]
    }
  ];

  // Proof metrics
  const proofMetrics = [
    {
      value: 40,
      suffix: "%",
      label: "Faster trading workflows",
      description: "Real-time data processing for financial services"
    },
    {
      value: 30,
      suffix: "%",
      label: "More efficient operations",
      description: "Automation-driven productivity gains"
    },
    {
      value: 50,
      suffix: "%",
      label: "Fewer processing exceptions",
      description: "Intelligent validation and error handling"
    }
  ];

  // Animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  const staggeredFadeUp = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>About Us - Systechnosoft Technologies</title>
        <meta 
          name="description" 
          content="Systechnosoft blends IT Infrastructure, Low-code platforms, and AI into one execution partner. Serving BFSI, aviation, oil & gas with cloud, data, and intelligent automation." 
        />
        <meta name="keywords" content="IT services, low-code development, AI automation, enterprise solutions, cloud infrastructure" />
        <link rel="canonical" href="https://systechnosoft.in/about" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Systechnosoft Technologies",
            "description": "Systechnosoft blends IT Infrastructure, Low-code platforms, and AI into one execution partner.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Systechnosoft Technologies",
              "url": "https://systechnosoft.in",
              "logo": "https://systechnosoft.in/logo.png",
              "foundingDate": "2020",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "49 5th Ave #1187",
                  "addressLocality": "Brooklyn",
                  "addressRegion": "NY",
                  "postalCode": "11217",
                  "addressCountry": "US"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "E-8, Railway Colony, Jagatpura",
                  "addressLocality": "Jaipur",
                  "addressRegion": "Rajasthan",
                  "addressCountry": "IN"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-[#E52629]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.6, ease: "easeOut" }}
              className="text-left space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-foreground leading-tight">
                We blend IT Infrastructure, Low‑code, and AI into one execution partner.
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                Serving BFSI, aviation, oil & gas, and healthcare with cloud, data, and intelligent automation. 
                Maximize innovation. Minimize code.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={() => scrollToId("what-we-do")}
                  className="bg-[#E52629] hover:bg-[#E52629]/90 text-white group"
                >
                  See what we deliver
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={openCalendly}
                  className="border-border hover:bg-accent hover:text-accent-foreground"
                >
                  Claim your free insight
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.6, ease: "easeOut", delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <HeroMotionSystem 
                cards={heroCards}
                ariaLabel="Core service verticals"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky Sub-Navigation */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-6 scrollbar-hide">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className={cn(
                  "whitespace-nowrap text-sm font-medium transition-colors px-3 py-2 rounded-md",
                  activeSection === item.id
                    ? "text-[#E52629] bg-[#E52629]/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Vision & Mission */}
      <section id="vision-mission" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
            className="max-w-4xl mx-auto space-y-12"
          >
            <motion.div variants={fadeUpVariants} className="text-center space-y-4">
              <Badge variant="outline" className="text-[#E52629] border-[#E52629]/30 mb-4">
                Our Purpose
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-foreground">
                Vision & Mission
              </h2>
            </motion.div>

            <motion.div variants={fadeUpVariants} className="grid md:grid-cols-2 gap-8">
              <Card className="border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="h-6 w-6 text-[#E52629]" />
                    <CardTitle className="text-2xl font-montserrat">Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the trusted execution partner for businesses navigating digital transformation—delivering 
                    cloud, low‑code, and AI solutions that are secure, scalable, and built to last.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Rocket className="h-6 w-6 text-[#E52629]" />
                    <CardTitle className="text-2xl font-montserrat">Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We combine IT infrastructure excellence, low‑code agility, and applied AI to help enterprises 
                    modernize faster, operate smarter, and scale with confidence.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
            className="space-y-12"
          >
            <motion.div variants={fadeUpVariants} className="text-center space-y-4 max-w-3xl mx-auto">
              <Badge variant="outline" className="text-[#E52629] border-[#E52629]/30 mb-4">
                Core Verticals
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-foreground">
                What We Do
              </h2>
              <p className="text-lg text-muted-foreground">
                Three core verticals. One integrated approach. Real outcomes.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {coreVerticals.map((vertical, index) => (
                <motion.div key={index} variants={fadeUpVariants}>
                  <Card className="h-full border-border shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-background">
                    <CardHeader>
                      <div className="mb-4">
                        <vertical.icon className="h-12 w-12 text-[#E52629]" />
                      </div>
                      <CardTitle className="text-2xl font-montserrat">
                        {vertical.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {vertical.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {vertical.links.map((link, linkIndex) => (
                          <Link
                            key={linkIndex}
                            to={link.href}
                            className="text-sm text-[#E52629] hover:underline font-medium"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Deliver */}
      <section id="how-we-deliver" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
            className="space-y-12"
          >
            <motion.div variants={fadeUpVariants} className="text-center space-y-4 max-w-3xl mx-auto">
              <Badge variant="outline" className="text-[#E52629] border-[#E52629]/30 mb-4">
                Engagement Model
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-foreground">
                How We Deliver
              </h2>
              <p className="text-lg text-muted-foreground">
                A proven, repeatable approach from discovery to scale.
              </p>
            </motion.div>

            {/* Desktop: Horizontal Stepper */}
            <div className="hidden md:flex justify-between items-start gap-4 max-w-6xl mx-auto">
              {engagementSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  className="flex flex-col items-center text-center flex-1 relative"
                >
                  {index < engagementSteps.length - 1 && (
                    <div className="absolute top-10 left-1/2 w-full h-0.5 bg-border z-0" />
                  )}
                  
                  <div className="relative z-10 w-20 h-20 rounded-full bg-background border-2 border-[#E52629] flex items-center justify-center mb-4 shadow-lg">
                    <step.icon className="h-8 w-8 text-[#E52629]" />
                  </div>
                  
                  <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Mobile: Vertical Stepper */}
            <div className="md:hidden space-y-6 max-w-md mx-auto">
              {engagementSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  className="flex gap-4 relative"
                >
                  {index < engagementSteps.length - 1 && (
                    <div className="absolute top-16 left-10 w-0.5 h-full bg-border z-0" />
                  )}
                  
                  <div className="relative z-10 w-20 h-20 flex-shrink-0 rounded-full bg-background border-2 border-[#E52629] flex items-center justify-center shadow-lg">
                    <step.icon className="h-8 w-8 text-[#E52629]" />
                  </div>
                  
                  <div className="flex-1 pt-4">
                    <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proof & Trust */}
      <section id="proof-trust" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
            className="space-y-12"
          >
            <motion.div variants={fadeUpVariants} className="text-center space-y-4 max-w-3xl mx-auto">
              <Badge variant="outline" className="text-[#E52629] border-[#E52629]/30 mb-4">
                Proof Points
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-foreground">
                Proof & Trust
              </h2>
              <p className="text-lg text-muted-foreground">
                Real outcomes from real engagements across BFSI, aviation, and oil & gas.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {proofMetrics.map((metric, index) => (
                <motion.div key={index} variants={fadeUpVariants}>
                  <Card className="border-border shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background text-center">
                    <CardContent className="pt-8 pb-6 space-y-4">
                      <div className="text-5xl font-montserrat font-bold text-[#E52629]">
                        <CountUpNumber 
                          end={metric.value} 
                          suffix={metric.suffix}
                          duration={1500}
                          startSeed={0}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {metric.label}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {metric.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUpVariants} className="text-center pt-4">
              <p className="text-muted-foreground">
                Multi-region delivery: <span className="font-semibold text-foreground">United States</span> & <span className="font-semibold text-foreground">India</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
            className="space-y-12"
          >
            <motion.div variants={fadeUpVariants} className="text-center space-y-4 max-w-3xl mx-auto">
              <Badge variant="outline" className="text-[#E52629] border-[#E52629]/30 mb-4">
                Principles
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-foreground">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide every decision, every project, every partnership.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <motion.div key={index} variants={fadeUpVariants}>
                  <Card className="h-full border-border shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-[#E52629]/10 flex items-center justify-center flex-shrink-0">
                          <value.icon className="h-6 w-6 text-[#E52629]" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-montserrat mb-2">
                            {value.title}
                          </CardTitle>
                          <p className="text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Presence */}
      <section id="global-presence" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
            className="space-y-12"
          >
            <motion.div variants={fadeUpVariants} className="text-center space-y-4 max-w-3xl mx-auto">
              <Badge variant="outline" className="text-[#E52629] border-[#E52629]/30 mb-4">
                Locations
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-foreground">
                Global Presence
              </h2>
              <p className="text-lg text-muted-foreground">
                Client engagement and delivery hubs across two continents.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div variants={fadeUpVariants}>
                <Card className="h-full border-border shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-8 w-8 text-[#E52629] flex-shrink-0 mt-1" />
                      <div>
                        <CardTitle className="text-2xl font-montserrat mb-2">
                          United States
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mb-3">
                          Client engagement & delivery hub
                        </p>
                        <address className="not-italic text-muted-foreground leading-relaxed">
                          49 5th Ave #1187<br />
                          Brooklyn, NY 11217<br />
                          United States
                        </address>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={fadeUpVariants}>
                <Card className="h-full border-border shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-8 w-8 text-[#E52629] flex-shrink-0 mt-1" />
                      <div>
                        <CardTitle className="text-2xl font-montserrat mb-2">
                          India
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mb-3">
                          Development & innovation center
                        </p>
                        <address className="not-italic text-muted-foreground leading-relaxed">
                          E-8, Railway Colony, Jagatpura<br />
                          Jaipur, Rajasthan<br />
                          India
                        </address>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
            className="max-w-3xl mx-auto space-y-12"
          >
            <motion.div variants={fadeUpVariants} className="text-center space-y-4">
              <Badge variant="outline" className="text-[#E52629] border-[#E52629]/30 mb-4">
                Questions
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-foreground">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-background shadow-sm">
                  <AccordionTrigger className="text-left font-semibold hover:text-[#E52629] transition-colors">
                    What industries do you serve?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    We primarily serve BFSI (banking, financial services, insurance), aviation, oil & gas, and healthcare. 
                    Our solutions are designed for regulated, mission-critical environments.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-background shadow-sm">
                  <AccordionTrigger className="text-left font-semibold hover:text-[#E52629] transition-colors">
                    Do you offer staff augmentation or project-based delivery?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    We support both. Staff augmentation for short-term skill gaps, and full project delivery (design, build, deploy) 
                    for strategic initiatives. Most clients start with a pilot and expand.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-background shadow-sm">
                  <AccordionTrigger className="text-left font-semibold hover:text-[#E52629] transition-colors">
                    How do you handle compliance and security?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Security is built in from day one—zero-trust architecture, encryption at rest and in transit, 
                    automated compliance checks, and audit-ready documentation. We follow SOC 2, GDPR, and industry-specific regulations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-background shadow-sm">
                  <AccordionTrigger className="text-left font-semibold hover:text-[#E52629] transition-colors">
                    What's your typical engagement timeline?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Discovery and design typically take 2-4 weeks. Build phases vary by scope (4-12 weeks for MVPs, 
                    3-6 months for full-scale platforms). We work in 2-week sprints with continuous delivery.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-background shadow-sm">
                  <AccordionTrigger className="text-left font-semibold hover:text-[#E52629] transition-colors">
                    How do you measure success?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    We define success metrics upfront—time savings, error reduction, revenue impact, or user adoption. 
                    Every project includes KPIs tied to your business goals, not just technical milestones.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <ContactFormSection
            title="Let's Build Something Great Together"
            subtitle="New projects, modernization, AI pilots, or Appian/Salesforce rollouts—tell us what you're working on."
            buttonText="Start the Conversation →"
          />
        </div>
      </section>
    </>
  );
};

export default About;
