import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion, useInView, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { 
  Cloud, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Globe, 
  Database,
  Bot,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  TrendingUp,
  Target,
  Rocket,
  Star,
  ChevronRight
} from "lucide-react";
import { scrollToId } from "@/lib/scrollUtils";

// Einstein AI Bot Swarm Animation - Canvas-based with Six Diagonal Emitters
const BotSwarmAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    // Respect reduced motion
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = root.querySelector('.sf-bot-canvas') as HTMLCanvasElement;
    const core = root.querySelector('.sf-bot-core') as HTMLElement;
    if (!canvas || !core) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // State management
    const state = {
      dpr: Math.min(window.devicePixelRatio || 1, 2),
      w: 0, h: 0, r: 0,
      center: { x: 0, y: 0 },
      last: performance.now(),
      paused: false,
      inView: false,
      bots: [] as any[],
      fpsAvg: 60,
    };

    const CFG = {
      EMITTERS: 6,
      EMIT_INTERVAL_MS: [1250, 1750],
      MAX_BOTS: 18,
      SPEED: [0.09, 0.14],
      CURVE_NOISE: 0.18,
      MERGE_RADIUS: 52,
      HOVER_HOLD_MS: 10000,
      GLOW_COLOR: 'rgba(255, 45, 45, 0.55)',
      BOT_SIZE: [6, 10],
    };

    function resize() {
      const rect = root.getBoundingClientRect();
      state.w = Math.max(100, Math.floor(rect.width));
      state.h = Math.max(100, Math.floor(rect.height));
      state.r = Math.min(state.w, state.h) * 0.5;
      canvas.width = Math.floor(state.w * state.dpr);
      canvas.height = Math.floor(state.h * state.dpr);
      canvas.style.width = state.w + 'px';
      canvas.style.height = state.h + 'px';
      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
      state.center.x = state.w / 2;
      state.center.y = state.h / 2;
    }

    // Emitter positions: 6 points on circumference at 60° steps
    function emitters() {
      const list = [];
      const angles = [30, 90, 150, 210, 270, 330]; // visually pleasing diagonals
      for (const deg of angles) {
        const rad = deg * Math.PI / 180;
        list.push({
          x: state.center.x + Math.cos(rad) * (state.r - 4),
          y: state.center.y + Math.sin(rad) * (state.r - 4),
          angle: rad,
        });
      }
      return list;
    }

    const emittersCache: any[] = [];

    function resetEmitters() {
      emittersCache.length = 0;
      emitters().forEach(e => emittersCache.push({ ...e, t: 0 }));
    }

    function rand(min: number, max: number) { 
      return min + Math.random() * (max - min); 
    }

    function emitFrom(em: any) {
      if (state.bots.length >= CFG.MAX_BOTS) return;
      const size = rand(CFG.BOT_SIZE[0], CFG.BOT_SIZE[1]);
      const speed = rand(CFG.SPEED[0], CFG.SPEED[1]) * Math.min(state.w, state.h);

      // Slight curve toward center by bending the velocity vector
      const toCx = state.center.x - em.x;
      const toCy = state.center.y - em.y;
      const dist = Math.hypot(toCx, toCy) || 1;
      let vx = (toCx / dist) * speed;
      let vy = (toCy / dist) * speed;

      // Curve perturbation orthogonal to direction
      const nx = -toCy / dist, ny = toCx / dist; // normal vector
      const bend = (Math.random() * 2 - 1) * CFG.CURVE_NOISE * speed;
      vx += nx * bend; 
      vy += ny * bend;

      state.bots.push({
        x: em.x, y: em.y, vx, vy,
        size, alpha: 1,
        merging: false,
      });
    }

    function scheduleEmission(now: number) {
      const [minI, maxI] = CFG.EMIT_INTERVAL_MS;
      for (const em of emittersCache) {
        if (em.t === 0) em.t = now + rand(minI, maxI);
        if (now >= em.t) {
          emitFrom(em);
          em.t = now + rand(minI, maxI);
        }
      }
    }

    function drawBot(b: any) {
      ctx.save();
      ctx.globalAlpha = b.alpha;
      ctx.fillStyle = CFG.GLOW_COLOR;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.size * 1.8, 0, Math.PI * 2);
      ctx.fill();

      // inner dot
      ctx.fillStyle = '#ff2b2b';
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function tick(now: number) {
      if (!state.inView || state.paused) { 
        state.last = now; 
        requestAnimationFrame(tick); 
        return; 
      }

      const dt = Math.min(50, now - state.last); // clamp
      state.last = now;

      // FPS estimate
      state.fpsAvg = state.fpsAvg * 0.92 + (1000 / Math.max(16.7, dt)) * 0.08;

      ctx.clearRect(0, 0, state.w, state.h);

      // emit
      scheduleEmission(now);

      const mr = CFG.MERGE_RADIUS;
      const erased = [];
      for (let i = 0; i < state.bots.length; i++) {
        const b = state.bots[i];
        // integrate
        b.x += b.vx * dt / 16.7;
        b.y += b.vy * dt / 16.7;

        // check merge
        const dx = b.x - state.center.x;
        const dy = b.y - state.center.y;
        if (!b.merging && (dx*dx + dy*dy) <= mr * mr) {
          b.merging = true;
        }
        if (b.merging) {
          b.alpha -= 0.08;
          b.size *= 0.92;
          if (b.alpha <= 0.02) { erased.push(i); continue; }
        }

        drawBot(b);
      }

      // remove merged
      if (erased.length) {
        for (let j = erased.length - 1; j >= 0; j--) state.bots.splice(erased[j], 1);
        // pulse the core subtly on merge
        core.classList.remove('sf-core-pulse');
        // force reflow to restart animation
        core.offsetWidth;
        core.classList.add('sf-core-pulse');
      }

      // Adaptive throttle: if FPS dips, slow emissions temporarily
      if (state.fpsAvg < 50 && CFG.EMIT_INTERVAL_MS[0] < 1600) {
        CFG.EMIT_INTERVAL_MS[0] += 50; CFG.EMIT_INTERVAL_MS[1] += 50;
      } else if (state.fpsAvg > 58 && CFG.EMIT_INTERVAL_MS[0] > 1200) {
        CFG.EMIT_INTERVAL_MS[0] -= 25; CFG.EMIT_INTERVAL_MS[1] -= 25;
      }

      requestAnimationFrame(tick);
    }

    function pauseFor(ms: number) {
      state.paused = true;
      clearTimeout(pauseTimer);
      pauseTimer = setTimeout(() => { state.paused = false; }, ms);
    }

    let pauseTimer: NodeJS.Timeout | number;

    // Visibility & interactions
    const io = new IntersectionObserver((ents) => {
      state.inView = ents.some(e => e.isIntersecting);
    }, { threshold: 0.1 });
    io.observe(root);

    const handlePointerEnter = () => pauseFor(CFG.HOVER_HOLD_MS);
    const handlePointerLeave = () => { state.paused = false; };
    const handleClick = () => {
      // mobile tap toggles pause/resume
      state.paused = !state.paused;
      if (!state.paused) pauseFor(0);
    };

    root.addEventListener('pointerenter', handlePointerEnter);
    root.addEventListener('pointerleave', handlePointerLeave);
    root.addEventListener('click', handleClick);

    // Init
    function start() {
      resize(); 
      resetEmitters();
      state.inView = true;
      state.last = performance.now();
      if (!reduced) requestAnimationFrame(tick);
      else ctx.clearRect(0, 0, state.w, state.h); // static for reduced motion
    }

    const handleResize = () => { resize(); resetEmitters(); };
    window.addEventListener('resize', handleResize);
    
    start();

    // Cleanup
    return () => {
      io.disconnect();
      window.removeEventListener('resize', handleResize);
      root.removeEventListener('pointerenter', handlePointerEnter);
      root.removeEventListener('pointerleave', handlePointerLeave);
      root.removeEventListener('click', handleClick);
      clearTimeout(pauseTimer);
    };
  }, []);

  return (
    <>
      <style>{`
        [data-sf-einstein] {
          position: relative;
        }
        [data-sf-einstein] .sf-bot-canvas {
          position: absolute; 
          inset: 0; 
          width: 100%; 
          height: 100%;
          pointer-events: none; 
          z-index: 1;
        }
        [data-sf-einstein] .sf-bot-core {
          position: absolute; 
          inset: 0; 
          margin: auto; 
          width: 72px; 
          height: 72px;
          display: grid; 
          place-items: center; 
          z-index: 2;
        }
        @keyframes sf-core-pulse {
          0% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(255, 43, 43, 0.0)); }
          35% { transform: scale(1.08); filter: drop-shadow(0 0 12px rgba(255, 43, 43, 0.35)); }
          100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(255, 43, 43, 0.0)); }
        }
        [data-sf-einstein] .sf-core-pulse { 
          animation: sf-core-pulse 650ms cubic-bezier(.2,.8,.2,1); 
        }
        @media (prefers-reduced-motion: reduce) {
          [data-sf-einstein] .sf-bot-canvas { display: none !important; }
        }
      `}</style>
      <div 
        ref={containerRef}
        className="sf-einstein-governance"
        data-sf-einstein
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '560px',
          aspectRatio: '1/1',
          borderRadius: '50%',
          overflow: 'hidden',
          background: 'radial-gradient(120% 120% at 60% 40%, rgba(255,59,48,.12), rgba(86,90,255,.10) 60%, transparent 100%)'
        }}
      >
        <canvas className="sf-bot-canvas" aria-hidden="true" />
        <div className="sf-bot-core" aria-hidden="true">
          <Bot className="w-full h-full text-primary" />
        </div>
      </div>
    </>
  );
};

const Salesforce = () => {
  const shouldReduceMotion = useReducedMotion();
  const [roiValues, setRoiValues] = useState({ licenses: [100], automation: [30] });
  const [activeSection, setActiveSection] = useState("overview");
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef);

  // Navigation items (removed ROI, FAQ, Contact)
  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "clouds", label: "Clouds" },
    { id: "ai-data", label: "AI & Data" },
    { id: "approach", label: "Approach" },
    { id: "accelerators", label: "Accelerators" },
    { id: "case-studies", label: "Case Studies" }
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

  // Carousel auto-rotation effect
  useEffect(() => {
    if (shouldReduceMotion || isCarouselPaused) return;

    const interval = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % 6);
    }, 3000);

    return () => clearInterval(interval);
  }, [shouldReduceMotion, isCarouselPaused]);

  // Handle carousel pause
  const handleCarouselPause = () => {
    setIsCarouselPaused(true);
    setTimeout(() => setIsCarouselPaused(false), 10000);
  };

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

  const scaleIn = {
    hidden: { scale: shouldReduceMotion ? 1 : 0.96, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  // ROI Calculation
  const calculateROI = () => {
    const licenseCount = roiValues.licenses[0];
    const automationUplift = roiValues.automation[0];
    return Math.round((licenseCount * 1200 * (automationUplift / 100) * 12) / 1000);
  };


  // Cloud cards data
  const cloudCards = [
    {
      id: "sales",
      title: "Sales Cloud",
      icon: TrendingUp,
      description: "Lead routing, pipeline AI scoring, forecast dashboards, CPQ hooks",
      features: ["Lead Routing & Scoring", "AI-Powered Pipeline Analysis", "Revenue Forecasting", "Configure, Price, Quote (CPQ)"]
    },
    {
      id: "service",
      title: "Service Cloud",
      icon: Users,
      description: "Omnichannel support, case deflection, knowledge AI, field service",
      features: ["Omnichannel Support", "AI Case Deflection", "Knowledge Management", "Field Service Lightning"]
    },
    {
      id: "experience",
      title: "Experience Cloud",
      icon: Globe,
      description: "Customer portals, partner networks, community engagement, self-service",
      features: ["Customer Self-Service", "Partner Portals", "Community Building", "Branded Experiences"]
    },
    {
      id: "marketing",
      title: "Marketing Cloud",
      icon: Target,
      description: "Journey orchestration, email automation, social listening, personalization",
      features: ["Customer Journey Mapping", "Email Automation", "Social Media Integration", "AI Personalization"]
    },
    {
      id: "commerce",
      title: "Commerce Cloud",
      icon: ShoppingCart,
      description: "B2B/B2C commerce, order management, inventory sync, mobile-first",
      features: ["Unified Commerce Platform", "Order Management", "Inventory Optimization", "Mobile Commerce"]
    },
    {
      id: "data",
      title: "Data Cloud",
      icon: Database,
      description: "Real-time customer profiles, data harmonization, AI-ready datasets",
      features: ["Customer 360 Profiles", "Real-time Data Sync", "AI-Ready Analytics", "Cross-Cloud Integration"]
    }
  ];

  // Case studies data
  const caseStudies = [
    {
      title: "Financial Services Transformation",
      outcome: "40% faster loan processing",
      description: "Automated compliance workflows and integrated third-party risk systems"
    },
    {
      title: "Manufacturing Supply Chain",
      outcome: "30% operations efficiency",
      description: "Connected Sales Cloud with SAP for real-time inventory visibility"
    },
    {
      title: "Healthcare Patient Experience",
      outcome: "50% faster patient onboarding",
      description: "Integrated Experience Cloud with Epic EHR for seamless care coordination"
    }
  ];

  // FAQ data
  const faqData = [
    {
      question: "How long does a typical Salesforce implementation take?",
      answer: "Implementation timelines vary by complexity. A basic Sales Cloud setup typically takes 6-8 weeks, while enterprise multi-cloud implementations can range from 3-6 months. We start with a 2-week discovery phase to provide accurate timelines."
    },
    {
      question: "What's included in your Salesforce implementation approach?",
      answer: "Our approach includes discovery workshops, data migration, custom development, integrations, user training, and 30 days of post-go-live support. We also provide governance frameworks and CoE advisory for long-term success."
    },
    {
      question: "How do you ensure data security during migration?",
      answer: "We implement zero-trust principles with end-to-end encryption, role-based access controls, and audit trails. All data transfers use secure protocols, and we maintain SOC 2 compliance throughout the process."
    },
    {
      question: "Can you integrate Salesforce with our existing systems?",
      answer: "Yes, we have 200+ pre-built connectors and can create custom integrations with systems like SAP, Microsoft Dynamics, NetSuite, and legacy databases. Our integration patterns ensure real-time data sync and maintain system performance."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "We offer 24/7 monitoring, regular health checks, user adoption programs, and Center of Excellence advisory. Our support includes technical assistance, best practice guidance, and strategic planning for scaling your Salesforce investment."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Salesforce Services | Consulting, Implementation & Managed CRM | Systechnosoft</title>
        <meta name="description" content="End-to-end Salesforce services: Sales/Service/Experience/Marketing Cloud, Data Cloud, Einstein AI, integrations, and managed CRM." />
        <meta name="keywords" content="Salesforce, CRM, Sales Cloud, Service Cloud, Marketing Cloud, Data Cloud, Einstein AI, Salesforce consulting, Salesforce implementation" />
        <link rel="canonical" href="https://systechnosoft.com/services/salesforce" />
      </Helmet>

      <div className="min-h-screen bg-background"
        style={{
          scrollMarginTop: '80px' // Account for local nav height
        }}
      >
        {/* Hero Section */}
        <section 
          ref={heroRef}
          id="overview"
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20"
        >
          {/* Animated background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(229,38,41,0.1),transparent)]" />
            {!shouldReduceMotion && (
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: `conic-gradient(from 0deg at 50% 50%, transparent, hsl(var(--primary)), transparent)`,
                  backgroundSize: "400px 400px"
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            )}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              {/* Left Content */}
              <div className="space-y-8">
                <motion.div
                  variants={staggeredFadeUp}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  <motion.h1 
                    variants={fadeUpVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight"
                  >
                    Salesforce solutions that{" "}
                    <span className="text-primary">move faster</span>—and{" "}
                    <span className="text-primary">scale safer</span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={fadeUpVariants}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl"
                  >
                    From Sales/Service to Experience, Marketing, Commerce, and Data Cloud—with AI you can govern.
                  </motion.p>

                  <motion.div 
                    variants={fadeUpVariants}
                    className="flex flex-wrap gap-3"
                  >
                    <Badge variant="secondary" className="text-sm px-4 py-2">
                      99.9% uptime patterns
                    </Badge>
                    <Badge variant="secondary" className="text-sm px-4 py-2">
                      Zero-trust aligned
                    </Badge>
                    <Badge variant="secondary" className="text-sm px-4 py-2">
                      24×7 support
                    </Badge>
                  </motion.div>

                  <motion.div 
                    variants={fadeUpVariants}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Button 
                      size="lg" 
                      className="group"
                      onClick={() => scrollToId("contact")}
                    >
                      Book a Discovery
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={() => scrollToId("clouds")}
                    >
                      <PlayCircle className="mr-2 h-4 w-4" />
                      See Clouds
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Content - 6-Item Flip Carousel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sf-hero-carousel relative h-80 flex items-center justify-center"
                onMouseEnter={handleCarouselPause}
                onFocus={handleCarouselPause}
                role="region"
                aria-label="Salesforce Cloud Services Carousel"
                aria-live="polite"
              >
                <div 
                  className="relative w-80 h-64"
                  style={{ perspective: '1000px' }}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowLeft') {
                      e.preventDefault();
                      setCurrentCardIndex((prev) => (prev - 1 + 6) % 6);
                      handleCarouselPause();
                    } else if (e.key === 'ArrowRight') {
                      e.preventDefault();
                      setCurrentCardIndex((prev) => (prev + 1) % 6);
                      handleCarouselPause();
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${cloudCards[currentCardIndex].title} card ${currentCardIndex + 1} of 6. Use arrow keys to navigate.`}
                >
                  {cloudCards.map((card, index) => {
                    const isActive = index === currentCardIndex;
                    
                    return (
                      <motion.div
                        key={card.id}
                        initial={{ rotateY: 180, opacity: 0 }}
                        animate={{ 
                          rotateY: isActive ? 0 : 180,
                          opacity: isActive ? 1 : 0,
                          scale: isActive ? 1 : 0.8,
                        }}
                        transition={{ 
                          duration: shouldReduceMotion ? 0.2 : 0.5,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0"
                        style={{
                          transformStyle: 'preserve-3d',
                          perspective: '1000px',
                          backfaceVisibility: 'hidden'
                        }}
                      >
                        <Card className="w-full h-full bg-card/90 backdrop-blur border-primary/20 hover:border-primary/40 transition-colors shadow-lg">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-lg">
                              <card.icon className="h-6 w-6 text-primary flex-shrink-0" />
                              <span>{card.title}</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                              {card.description}
                            </p>
                            <div className="space-y-1">
                              {card.features.slice(0, 2).map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Local Section Navigation - Below Hero */}
        <nav 
          id="sf-localnav"
          className="sf-localnav py-6 bg-background border-b border-muted/20"
          role="navigation"
          aria-label="Salesforce page sections"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center">
              <div 
                className="flex items-center space-x-8 overflow-x-auto md:overflow-visible"
                style={{
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none'
                }}
              >
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToId(item.id)}
                    className={`text-sm font-medium whitespace-nowrap transition-colors relative py-2 px-4 rounded-full ${
                      activeSection === item.id
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                    aria-current={activeSection === item.id ? "true" : "false"}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full"
                        layoutId="activeNavUnderline"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Why Salesforce × Systechnosoft */}
        <section id="outcomes" className="py-20 bg-muted/30" style={{ marginTop: 0 }}>
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggeredFadeUp}
              className="text-center space-y-12"
            >
              <motion.h2 variants={fadeUpVariants} className="text-3xl font-bold font-montserrat">
                Outcomes you can measure
              </motion.h2>
              
              <motion.div 
                variants={staggeredFadeUp}
                className="grid md:grid-cols-4 gap-6"
              >
                {[
                  { value: "40%", label: "faster workflows" },
                  { value: "30%", label: "Ops efficiency" },
                  { value: "50%", label: "faster intercompany" },
                  { value: "99.9%", label: "uptime SLA" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="text-center p-6 rounded-lg bg-card border"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Clouds Grid */}
        <section id="clouds" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggeredFadeUp}
              className="space-y-12"
            >
              <motion.h2 variants={fadeUpVariants} className="text-3xl font-bold font-montserrat text-center">
                Salesforce Clouds We Implement
              </motion.h2>
              
              <motion.div 
                variants={staggeredFadeUp}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {cloudCards.map((cloud) => (
                  <motion.div
                    key={cloud.id}
                    variants={scaleIn}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group cursor-pointer"
                  >
                    <Card className="h-full border-2 border-transparent group-hover:border-primary/20 transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <cloud.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                          {cloud.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{cloud.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {cloud.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground">
                          Learn More <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* AI & Data Section */}
        <section id="ai-data" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariants}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold font-montserrat">
                  Einstein 1 & AI that you can govern
                </h2>
                <p className="text-lg text-muted-foreground">
                  Deploy Salesforce AI with enterprise-grade governance, data protection, and audit trails.
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Shield, label: "PII Guardrails" },
                    { icon: Users, label: "RBAC Controls" },
                    { icon: BarChart3, label: "Audit Trails" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ rotateY: shouldReduceMotion ? 0 : 12 }}
                      className="text-center p-4 rounded-lg bg-card border"
                    >
                      <item.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium">{item.label}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-card rounded-lg p-6 border-l-4 border-primary">
                  <h4 className="font-semibold mb-2">Prompt → Policy → Action</h4>
                  <pre className="text-sm text-muted-foreground font-mono">
{`{
  "prompt": "Show me top leads for Q4",
  "policy": "filter_by_territory_access",
  "action": "query_with_rbac_filter"
}`}
                  </pre>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <BotSwarmAnimation />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Implementation Approach */}
        <section id="approach" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggeredFadeUp}
              className="space-y-12"
            >
              <motion.h2 variants={fadeUpVariants} className="text-3xl font-bold font-montserrat text-center">
                Our Implementation Approach
              </motion.h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Discover",
                    description: "Requirements gathering, system audit, roadmap creation",
                    deliverables: ["Business Process Analysis", "Technical Architecture Review", "Implementation Roadmap", "Risk Assessment"]
                  },
                  {
                    step: "02", 
                    title: "Pilot",
                    description: "MVP deployment, user testing, feedback integration",
                    deliverables: ["MVP Configuration", "User Training Program", "Data Migration Plan", "Integration Testing"]
                  },
                  {
                    step: "03",
                    title: "Scale",
                    description: "Full rollout, performance optimization, user adoption",
                    deliverables: ["Production Deployment", "Performance Monitoring", "User Adoption Metrics", "Support Documentation"]
                  },
                  {
                    step: "04",
                    title: "CoE Advisory",
                    description: "Governance frameworks, best practices, continuous improvement",
                    deliverables: ["Governance Framework", "Best Practices Guide", "Continuous Monitoring", "Strategic Planning"]
                  }
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto">
                      {phase.step}
                    </div>
                    <h3 className="text-xl font-semibold">{phase.title}</h3>
                    <p className="text-muted-foreground">{phase.description}</p>
                    <ul className="text-sm space-y-1">
                      {phase.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
              
              <motion.div variants={fadeUpVariants} className="text-center">
                <Button size="lg" onClick={() => scrollToId("contact")}>
                  See a 6-week pilot plan
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Accelerators */}
        <section id="accelerators" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className="space-y-12"
            >
              <h2 className="text-3xl font-bold font-montserrat text-center">
                Accelerators & Integrations
              </h2>
              
              <div className="relative overflow-hidden">
                <motion.div 
                  className="flex gap-4"
                  animate={{ x: shouldReduceMotion ? 0 : [0, -1000] }}
                  transition={shouldReduceMotion ? {} : {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {[...Array(2)].map((_, setIndex) => (
                    <div key={setIndex} className="flex gap-4">
                      {[
                        "AppExchange Packages", "CI/CD Templates", "200+ Connectors", "SAP Integration", 
                        "Microsoft 365", "Slack Integration", "DocuSign", "Tableau", "MuleSoft", "Heroku",
                        "Einstein Analytics", "Pardot", "CPQ", "Field Service", "Community Cloud"
                      ].map((item, index) => (
                        <Badge key={`${setIndex}-${index}`} variant="outline" className="whitespace-nowrap px-4 py-2">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggeredFadeUp}
              className="space-y-12"
            >
              <motion.h2 variants={fadeUpVariants} className="text-3xl font-bold font-montserrat text-center">
                Success Stories
              </motion.h2>
              
              <motion.div 
                variants={staggeredFadeUp}
                className="grid md:grid-cols-3 gap-8"
              >
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="group"
                  >
                    <Card className="h-full group-hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="h-5 w-5 text-primary" />
                          <span className="text-sm font-medium text-primary">{study.outcome}</span>
                        </div>
                        <CardTitle className="text-lg">{study.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{study.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section id="roi" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggeredFadeUp}
              className="max-w-4xl mx-auto space-y-8"
            >
              <motion.h2 variants={fadeUpVariants} className="text-3xl font-bold font-montserrat text-center">
                ROI Calculator
              </motion.h2>
              
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Number of Salesforce Licenses: {roiValues.licenses[0]}
                      </label>
                      <Slider
                        value={roiValues.licenses}
                        onValueChange={(value) => setRoiValues(prev => ({ ...prev, licenses: value }))}
                        max={1000}
                        min={10}
                        step={10}
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Automation Uplift: {roiValues.automation[0]}%
                      </label>
                      <Slider
                        value={roiValues.automation}
                        onValueChange={(value) => setRoiValues(prev => ({ ...prev, automation: value }))}
                        max={80}
                        min={10}
                        step={5}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <motion.div 
                    key={calculateROI()}
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="text-center p-6 bg-primary/5 rounded-lg border-2 border-primary/20"
                  >
                    <div className="text-4xl font-bold text-primary mb-2">
                      ${calculateROI()}K
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Estimated Annual ROI
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggeredFadeUp}
              className="max-w-4xl mx-auto space-y-8"
            >
              <motion.h2 variants={fadeUpVariants} className="text-3xl font-bold font-montserrat text-center">
                Frequently Asked Questions
              </motion.h2>
              
              <motion.div variants={fadeUpVariants}>
                <Accordion type="single" collapsible>
                  {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
          {!shouldReduceMotion && (
            <motion.div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, hsl(var(--primary)) 2px, hsl(var(--primary)) 4px)`
              }}
              animate={{ x: [0, 20] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          )}
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggeredFadeUp}
              className="text-center space-y-8"
            >
              <motion.h2 variants={fadeUpVariants} className="text-4xl font-bold font-montserrat">
                Ready to accelerate your Salesforce journey?
              </motion.h2>
              
              <motion.p variants={fadeUpVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get a free consultation and see how we can help you implement Salesforce faster and safer.
              </motion.p>
              
              <motion.div 
                variants={fadeUpVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button size="lg" className="group" onClick={() => window.location.href = '/contact'}>
                  Start Your Project
                  <Rocket className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Schedule a Demo
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Salesforce;