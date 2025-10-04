import { motion, useReducedMotion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Smartphone, Target, Zap, Shield, Layers, Code2, Database, Brain, 
  Settings, TestTube, Eye, Lock, Users, TrendingUp, ArrowRight, CheckCircle2
} from "lucide-react";
import { HeroMotionSystem, HeroBackground } from "@/components/HeroMotionSystem";
import heroMobileApp from "@/assets/hero-mobile-app-development.png";

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggeredFadeUp = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3 }
  }
};

const heroCards = [
  {
    icon: "📱",
    title: "Native iOS & Android",
    benefit: "Swift, SwiftUI, Kotlin, Jetpack Compose for platform-first performance"
  },
  {
    icon: "🚀",
    title: "Cross-Platform Excellence",
    benefit: "Flutter, React Native, KMP—shared logic with native polish"
  },
  {
    icon: "⚙️",
    title: "DevOps + Observability",
    benefit: "CI/CD pipelines, automated testing, real-time monitoring"
  }
];

const whyChooseUs = [
  {
    icon: Target,
    title: "Outcome‑first",
    description: "Roadmaps tied to KPIs—crash‑free users, startup time, retention, conversion."
  },
  {
    icon: Zap,
    title: "Velocity with guardrails",
    description: "Parallel design/dev, automated testing, gated releases."
  },
  {
    icon: Shield,
    title: "Secure by default",
    description: "OWASP MAS, device/app hardening, secret management, least‑privilege APIs."
  }
];

const capabilities = [
  {
    icon: Users,
    title: "Product & UX",
    items: [
      "Discovery workshops & user journeys",
      "Wireframes & prototypes",
      "SwiftUI/Compose design systems",
      "Accessibility-first patterns"
    ]
  },
  {
    icon: Code2,
    title: "Native development",
    items: [
      "Swift/SwiftUI, Kotlin/Jetpack Compose",
      "Background tasks & widgets",
      "Wearables & extensions",
      "Platform-specific optimizations"
    ]
  },
  {
    icon: Layers,
    title: "Cross‑platform",
    items: [
      "Flutter, React Native frameworks",
      "Kotlin Multiplatform shared logic",
      "Platform‑first polish",
      "Native module bridges"
    ]
  },
  {
    icon: Database,
    title: "Back‑end & APIs",
    items: [
      "Node/Java/Go/.NET services",
      "REST/GraphQL APIs",
      "Auth (Auth0/Entra)",
      "Payments, push notifications"
    ]
  },
  {
    icon: Database,
    title: "Data & offline",
    items: [
      "SQLite/Room/CoreData",
      "Firestore/Realm sync",
      "Conflict resolution",
      "Background sync strategies"
    ]
  },
  {
    icon: Brain,
    title: "AI features",
    items: [
      "On‑device ML models",
      "Vector search & RAG",
      "Bedrock/OpenAI/Azure AI",
      "Safety filters & moderation"
    ]
  }
];

const engineeringStandards = [
  {
    title: "Architecture",
    content: "MVVM / Clean Architecture, modularization, feature flags, A/B experimentation frameworks."
  },
  {
    title: "CI/CD",
    content: "GitHub Actions/Bitrise/Fastlane, TestFlight/Play Internal Track, staged rollouts with monitoring."
  },
  {
    title: "Quality",
    content: "Unit/UI testing (XCTest, Espresso, Appium), contract tests, performance & network profiling."
  },
  {
    title: "Observability",
    content: "Crashlytics/Sentry integration, OpenTelemetry traces, real‑user metrics & dashboards."
  },
  {
    title: "Security & privacy",
    content: "OWASP MAS checks, keychain/keystore, root/jailbreak detection, GDPR/CCPA compliance, SOC 2 alignment."
  },
  {
    title: "Accessibility",
    content: "WCAG 2.2 AA patterns, Dynamic Type, VoiceOver/TalkBack support, color contrast validation."
  }
];

const integrations = [
  "Apple Services", "Google Play", "Firebase", "AWS Amplify", "Azure Mobile Apps",
  "Stripe", "Shopify", "Segment", "Braze", "AppsFlyer", "Mapbox", "Twilio"
];

const deliveryPhases = [
  { phase: "Discover", description: "Requirements, user research, technical feasibility" },
  { phase: "Design", description: "Wireframes, prototypes, design system" },
  { phase: "Build", description: "2-week sprints, demo each iteration" },
  { phase: "Harden", description: "Security audit, performance optimization" },
  { phase: "Launch", description: "Staged rollout, monitoring setup" },
  { phase: "Scale", description: "Feature expansion, ongoing optimization" }
];

const performanceMetrics = [
  { label: "P95 cold start (native)", value: "≤ 2s" },
  { label: "P95 cold start (cross-platform)", value: "≤ 3s" },
  { label: "Crash‑free users", value: "≥ 99.9%" },
  { label: "App size optimization", value: "On‑demand modules" }
];

const faqs = [
  {
    question: "Native vs cross‑platform: which should we choose?",
    answer: "Native (Swift/Kotlin) offers maximum performance and platform integration—ideal for graphics-intensive apps or deep OS features. Cross‑platform (Flutter/React Native/KMP) accelerates time-to-market with shared code while maintaining quality. We'll assess your requirements, timeline, and team to recommend the best fit."
  },
  {
    question: "Do you handle back‑end infrastructure too?",
    answer: "Yes. We build and integrate scalable back‑end services (Node.js, Java, .NET, Go) with databases, auth, APIs, and third‑party services. Whether you need a new back end or integration with existing systems, we deliver end‑to‑end solutions."
  },
  {
    question: "How do you handle analytics and user privacy?",
    answer: "We implement privacy-first analytics (Firebase, Segment, custom solutions) with full GDPR/CCPA compliance. All tracking includes proper consent flows, data minimization, and transparent privacy policies."
  },
  {
    question: "What's your release and maintenance strategy?",
    answer: "We use staged rollouts (internal → beta → production) with feature flags and kill switches. Post-launch, we provide ongoing maintenance, security patches, OS updates, and performance monitoring with defined SLAs."
  },
  {
    question: "How long does it take to build an MVP?",
    answer: "Typical MVP timelines range from 4–8 weeks depending on complexity. We work in 2-week sprints with demos at the end of each cycle, so you see progress continuously and can adjust priorities as needed."
  }
];

export default function MobileAppDevelopment() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Mobile App Development Services | iOS • Android • Flutter • React Native | Systechnosoft</title>
        <meta 
          name="description" 
          content="Design, build, and run secure, high‑performing mobile apps with native and cross‑platform stacks, CI/CD, automated testing, and observability." 
        />
        <meta name="keywords" content="mobile app development services, iOS, Android, Flutter, React Native, Kotlin Multiplatform, CI/CD, App Store, Play Store, QA automation" />
        <link rel="canonical" href="https://systechnosoft.com/services/mobile-app-development" />
      </Helmet>

      {/* Hero Section */}
      <HeroBackground>
        <section className="relative py-16 sm:py-20 lg:py-24 min-h-[72vh] lg:min-h-[80vh] flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Text Content */}
              <motion.div
                variants={staggeredFadeUp}
                initial="hidden"
                animate="visible"
                className="space-y-6 lg:space-y-8"
              >
                <motion.h1 
                  variants={fadeUpVariants}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                >
                  Mobile apps, engineered for scale—secure, delightful, production‑ready
                </motion.h1>

                <motion.p 
                  variants={fadeUpVariants}
                  className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
                >
                  Design, build, and run iOS, Android, and cross‑platform apps with modern architectures, CI/CD, and observability—so you can ship faster with confidence.
                </motion.p>

                <motion.div 
                  variants={fadeUpVariants}
                  className="flex flex-wrap gap-3"
                >
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    <Smartphone className="h-4 w-4 mr-2" />
                    Native iOS & Android
                  </Badge>
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    <Layers className="h-4 w-4 mr-2" />
                    Flutter / React Native / KMP
                  </Badge>
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    <Settings className="h-4 w-4 mr-2" />
                    DevOps + observability
                  </Badge>
                </motion.div>

                <motion.div 
                  variants={fadeUpVariants}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <Button 
                    size="lg" 
                    asChild
                    className="text-base"
                  >
                    <a href="https://calendly.com/systechnosoft-info/30min" target="_blank" rel="noopener noreferrer">
                      Book a Mobile App Discovery
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-base"
                  >
                    See what we deliver
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Column - Hero Motion System */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center lg:justify-end"
              >
                <HeroMotionSystem 
                  cards={heroCards}
                  ariaLabel="Mobile app development highlights"
                />
              </motion.div>

            </div>
          </div>
        </section>
      </HeroBackground>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why choose us</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-16 sm:py-20 lg:py-24 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End‑to‑end mobile engineering expertise
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {capabilities.map((capability, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <capability.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {capability.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Engineering Standards */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Engineering standards</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quality, security, and performance built in
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full">
              {engineeringStandards.map((standard, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold">
                    {standard.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {standard.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Integrations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seamless connections to the tools you already use
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {integrations.map((integration, index) => (
              <Badge key={index} variant="outline" className="text-sm px-4 py-2">
                {integration}
              </Badge>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Delivery Playbook */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Delivery playbook</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Typical 4–8 week MVP, 2‑week sprints, demo each sprint
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
            className="max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {deliveryPhases.map((item, index) => (
                <motion.div key={index} variants={fadeUpVariants}>
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="mx-auto h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <CardTitle className="text-base">{item.phase}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance & Reliability */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Performance & reliability guardrails</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {performanceMetrics.map((metric, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-primary">{metric.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Security & compliance</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MASVS checks, secure storage (keychain/keystore), code obfuscation where appropriate, 
              certificate pinning options, GDPR/CCPA compliance, and SOC 2 alignment for enterprise clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
          >
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">Case study</CardTitle>
                    <CardDescription className="text-lg">
                      "35% improvement in session length after redesign and Compose migration."
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <a href="/contact">
                    View more case studies
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently asked questions</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              Ready to ship a better mobile app?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="text-base">
                <a href="https://calendly.com/systechnosoft-info/30min" target="_blank" rel="noopener noreferrer">
                  Book a Mobile App Discovery
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <a href="/contact">
                  Talk to an expert
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}