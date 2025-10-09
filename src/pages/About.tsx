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
  BookOpen,
  Rocket,
  Shield,
  Code,
  Lightbulb,
  UserCheck,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeroBackground } from "@/components/HeroMotionSystem";
import { CountUpNumber } from "@/components/CountUpNumber";
import { scrollToId } from "@/lib/scrollUtils";
import { cn } from "@/lib/utils";

const About = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("vision-mission");

  // Navigation items
  const navItems = [
    { id: "vision-mission", label: "Vision & Mission" },
    { id: "story", label: "Our Story" },
    { id: "leadership", label: "Leadership" },
    { id: "life", label: "Life @ Systechnosoft" },
    { id: "values", label: "Values" },
    { id: "impact", label: "Global Impact" },
    { id: "faqs", label: "FAQs" },
    { id: "contact", label: "Contact" }
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

  // Timeline data
  const timeline = [
    {
      year: "2020",
      title: "Founded in Jaipur, IN",
      description: "First enterprise low-code wins; set the vision for AI-assisted delivery."
    },
    {
      year: "2021",
      title: "Delivery scale-up",
      description: "10+ engineers; cross-industry pilots; formalized QA and SRE playbooks."
    },
    {
      year: "2022",
      title: "Multi-region projects",
      description: "BFSI, Oil & Gas, Healthcare programs; DR drills and zero-trust baselines."
    },
    {
      year: "2023",
      title: "Global reach",
      description: "Partner ecosystem; data/AI accelerators; design system v2."
    },
    {
      year: "2024–25",
      title: "Platform excellence",
      description: "Repeatable landing zones, evaluation harnesses, observability kits."
    }
  ];

  // Leadership data
  const leadership = [
    {
      name: "Sandeep",
      title: "Founder",
      bio: "Automation strategy, delivery excellence, long-horizon roadmaps.",
      icon: Target
    },
    {
      name: "Keshav",
      title: "Head of Growth",
      bio: "Low-code solutioning, value engineering, executive advisory.",
      icon: TrendingUp
    },
    {
      name: "Sachin",
      title: "Practice Head",
      bio: "Platform governance, CI/CD, security by design.",
      icon: Shield
    }
  ];

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
      title: "Work smart",
      description: "Hybrid/remote, flexible squads, asynchronous rituals."
    },
    {
      icon: Heart,
      title: "Care deeply",
      description: "Inclusive policies, recognition, wellbeing benefits."
    }
  ];

  // Values data
  const values = [
    {
      icon: Award,
      title: "Uncompromising Quality",
      description: "We ship excellence — every time."
    },
    {
      icon: Lightbulb,
      title: "Bold Innovation",
      description: "We go beyond conventions to create real advantage."
    },
    {
      icon: Zap,
      title: "Agility in Action",
      description: "We adapt quickly and deliver at pace."
    },
    {
      icon: UserCheck,
      title: "Client-Centric Partnership",
      description: "Your goals drive every decision we make."
    }
  ];

  // Animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggeredFadeUp = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>About Systechnosoft – Maximize Innovation. Minimize Code.</title>
        <meta 
          name="description" 
          content="Professional, innovation-first partner for low-code and AI transformation. Learn our story, values, leadership, culture, and global impact." 
        />
        <link rel="canonical" href="/about" />
        <meta property="og:title" content="About Systechnosoft – Maximize Innovation. Minimize Code." />
        <meta 
          property="og:description" 
          content="Professional, innovation-first partner for low-code and AI transformation. Learn our story, values, leadership, culture, and global impact." 
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Systechnosoft Technologies",
              "foundingDate": "2020",
              "foundingLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Jaipur",
                  "addressCountry": "IN"
                }
              },
              "description": "We turn bold ideas into scalable impact with low-code precision and AI-powered intelligence."
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <HeroBackground fullHeight className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left: Copy + Badges */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggeredFadeUp}
              className="text-center lg:text-left"
            >
              <motion.h1 
                variants={fadeUpVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-montserrat"
              >
                About Systechnosoft Technologies
              </motion.h1>
              
              <motion.p 
                variants={fadeUpVariants}
                className="text-xl md:text-2xl text-muted-foreground mb-4 font-inter"
              >
                We turn bold ideas into scalable impact with low-code precision and AI-powered intelligence.
              </motion.p>

              <motion.div 
                variants={fadeUpVariants}
                className="text-2xl md:text-3xl font-bold text-primary mb-8 font-montserrat"
              >
                Maximize Innovation. Minimize Code.
              </motion.div>

              <motion.div 
                variants={fadeUpVariants}
                className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
              >
                <Badge variant="secondary" className="text-sm">ISO 27001</Badge>
                <Badge variant="secondary" className="text-sm">SOC 2</Badge>
                <Badge variant="secondary" className="text-sm">GDPR/DPDP aware</Badge>
              </motion.div>

              <motion.div 
                variants={fadeUpVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Talk to an Expert <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/careers">
                    Explore Careers <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Lightweight illustration */}
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center">
                <Rocket className="w-32 h-32 text-primary" />
              </div>
            </motion.div>
          </div>
        </div>
      </HeroBackground>

      {/* Sticky Sub-section Navigation */}
      <nav 
        className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b"
        aria-label="About page navigation"
      >
        <div className="container mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide py-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className={cn(
                  "px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all",
                  "hover:bg-accent hover:text-accent-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground"
                )}
                aria-current={activeSection === item.id ? "true" : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Vision & Mission */}
      <section id="vision-mission" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
          >
            <motion.h2 
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat"
            >
              Vision & Mission
            </motion.h2>

            <motion.div 
              variants={fadeUpVariants}
              className="bg-background rounded-2xl p-8 md:p-12 shadow-sm mb-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary font-montserrat">Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-inter">
                To be the global catalyst for intelligent enterprise transformation, merging low-code innovation with AI-driven strategy to redefine how organizations innovate, operate, and engage their customers.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeUpVariants}
              className="bg-background rounded-2xl p-8 md:p-12 shadow-sm mb-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary font-montserrat">Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-inter">
                Empower enterprises worldwide to innovate and thrive by uniting low-code automation with AI-driven insights—delivering tailored solutions with uncompromising quality, agility, and trusted client partnerships.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeUpVariants}
              className="flex flex-wrap gap-2 justify-center"
            >
              <Badge variant="outline">BFSI</Badge>
              <Badge variant="outline">Healthcare</Badge>
              <Badge variant="outline">Aviation</Badge>
              <Badge variant="outline">Oil & Gas</Badge>
              <Badge variant="outline">Financial Services</Badge>
            </motion.div>

            <motion.div 
              variants={fadeUpVariants}
              className="text-center mt-8"
            >
              <Button variant="outline" asChild>
                <Link to="/industries">
                  See our industries <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section id="story" className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
          >
            <motion.h2 
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-bold text-center mb-4 font-montserrat"
            >
              Our Story
            </motion.h2>
            
            <motion.p 
              variants={fadeUpVariants}
              className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto font-inter"
            >
              From our founding to platform excellence—building innovation at every stage
            </motion.p>

            <div className="space-y-8 md:space-y-12">
              {timeline.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  className="relative pl-8 md:pl-16 border-l-2 border-primary/30 pb-8 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-[9px]" />
                  <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-sm font-semibold text-primary mb-2 font-montserrat">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2 font-montserrat">{milestone.title}</h3>
                    <p className="text-muted-foreground font-inter">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={fadeUpVariants}
              className="mt-12 bg-muted/50 rounded-xl p-6 text-center"
            >
              <p className="text-sm text-muted-foreground font-inter">
                <strong>Vendor-neutral by design</strong> — we recommend stacks that fit RPO/RTO, budget, and compliance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
          >
            <motion.h2 
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-bold text-center mb-16 font-montserrat"
            >
              Leadership
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                        <leader.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-center font-montserrat">{leader.name}</CardTitle>
                      <p className="text-center text-sm text-primary font-semibold font-inter">{leader.title}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-muted-foreground font-inter">{leader.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={fadeUpVariants}
              className="text-center mt-12"
            >
              <Button variant="outline" asChild>
                <Link to="/contact">
                  Connect with our team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Life @ Systechnosoft */}
      <section id="life" className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
          >
            <motion.h2 
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-bold text-center mb-4 font-montserrat"
            >
              Life @ Systechnosoft
            </motion.h2>
            
            <motion.p 
              variants={fadeUpVariants}
              className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto font-inter"
            >
              Happy teams drive client success—our culture is built on growth, innovation, and care
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {culturePillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                >
                  <Card className="h-full hover:shadow-md transition-all duration-200">
                    <CardHeader>
                      <pillar.icon className="w-10 h-10 text-primary mb-3" />
                      <CardTitle className="text-lg font-montserrat">{pillar.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground font-inter">{pillar.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={fadeUpVariants}
              className="text-center"
            >
              <Button size="lg" asChild>
                <Link to="/careers">
                  Explore Careers <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section id="values" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
          >
            <motion.h2 
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-bold text-center mb-16 font-montserrat"
            >
              Our Values
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                >
                  <Card className="h-full border-2 border-transparent hover:border-primary/50 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <value.icon className="w-7 h-7 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-montserrat">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground font-inter">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Impact KPIs */}
      <section id="impact" className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
          >
            <motion.h2 
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-bold text-center mb-16 font-montserrat"
            >
              Global Impact
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div variants={fadeUpVariants}>
                <Card className="text-center p-8">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-montserrat">
                    <CountUpNumber end={20} suffix="+" duration={2000} />
                  </div>
                  <p className="text-muted-foreground font-inter">Enterprise clients</p>
                </Card>
              </motion.div>

              <motion.div variants={fadeUpVariants}>
                <Card className="text-center p-8">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-montserrat">
                    <CountUpNumber end={5} duration={2000} />
                  </div>
                  <p className="text-muted-foreground font-inter">Core industries</p>
                </Card>
              </motion.div>

              <motion.div variants={fadeUpVariants}>
                <Card className="text-center p-8">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-montserrat">
                    <CountUpNumber end={99.99} suffix="%" duration={2000} />
                  </div>
                  <p className="text-muted-foreground font-inter">Uptime</p>
                </Card>
              </motion.div>

              <motion.div variants={fadeUpVariants}>
                <Card className="text-center p-8">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-montserrat">
                    24×7
                  </div>
                  <p className="text-muted-foreground font-inter">Global support</p>
                </Card>
              </motion.div>
            </div>

            <motion.p 
              variants={fadeUpVariants}
              className="text-center text-sm text-muted-foreground mt-8 font-inter"
            >
              KPIs are representative; exact figures maintained by analytics.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
          >
            <motion.h2 
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat"
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.div variants={fadeUpVariants}>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="security" className="bg-background rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline font-montserrat">
                    How do you handle security & compliance?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-inter">
                    Zero-trust architecture, encryption at rest and in transit, role-based access control (RBAC), and comprehensive audit trails. We follow industry best practices and compliance standards.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="time-to-value" className="bg-background rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline font-montserrat">
                    What's your typical time-to-value?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-inter">
                    4–8 week accelerators including landing zone setup, CIS baselines, and monitoring starter kits. We focus on rapid value delivery with proven frameworks.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="hybrid" className="bg-background rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline font-montserrat">
                    Do you support hybrid/on-prem?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-inter">
                    Yes — we support hybrid architectures with secure connectors, VPN/ExpressRoute, and edge patterns. Our solutions work seamlessly across cloud and on-premises environments.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
            className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 text-center"
          >
            <motion.h2 
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-bold mb-6 font-montserrat"
            >
              Let's Build Something Great Together
            </motion.h2>
            
            <motion.p 
              variants={fadeUpVariants}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-inter"
            >
              Ready to transform your enterprise with low-code and AI? Let's talk.
            </motion.p>

            <motion.div 
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link to="/contact">
                  Talk to an Expert <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact?type=partner">
                  Partnerships <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
