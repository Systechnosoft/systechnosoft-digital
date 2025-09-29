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

// Bot Swarm Animation Component  
interface BotNode {
  id: string;
  angle: number;
  startTime: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
}

const BotSwarmAnimation: React.FC = () => {
  const [botNodes, setBotNodes] = useState<BotNode[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const spawnIntervalRef = useRef<NodeJS.Timeout>();
  const pauseTimeoutRef = useRef<NodeJS.Timeout>();
  const nodeIdCounter = useRef(0);

  // Check for reduced motion preference
  const prefersReducedMotion = useReducedMotion();

  // Six diagonal angles (0°, 60°, 120°, 180°, 240°, 300°)
  const diagonalAngles = [0, 60, 120, 180, 240, 300];

  // Handle visibility changes and intersection
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Initial spawn of 4 intro bots
  const spawnIntroBots = () => {
    const newBots: BotNode[] = [];
    const introAngles = [45, 135, 225, 315]; // NE, NW, SE, SW
    
    introAngles.forEach((angle, index) => {
      const radian = (angle * Math.PI) / 180;
      const radius = 280; // Start from edge
      const centerX = 280; // Half of 560px container
      const centerY = 280;
      const startX = centerX + Math.cos(radian) * radius;
      const startY = centerY + Math.sin(radian) * radius;
      
      newBots.push({
        id: `intro-${nodeIdCounter.current++}`,
        angle,
        startTime: Date.now() + (index * 200), // Stagger slightly
        x: startX,
        y: startY,
        targetX: centerX,
        targetY: centerY
      });
    });
    
    setBotNodes(newBots);
  };

  // Spawn a new bot from random diagonal
  const spawnBot = () => {
    if (isPaused || !isVisible || prefersReducedMotion) return;
    
    const angle = diagonalAngles[Math.floor(Math.random() * diagonalAngles.length)];
    const radian = (angle * Math.PI) / 180;
    const radius = 280;
    const centerX = 280;
    const centerY = 280;
    const startX = centerX + Math.cos(radian) * radius;
    const startY = centerY + Math.sin(radian) * radius;
    
    // Add small random drift
    const driftX = (Math.random() - 0.5) * 10;
    const driftY = (Math.random() - 0.5) * 10;
    
    const newBot: BotNode = {
      id: `bot-${nodeIdCounter.current++}`,
      angle,
      startTime: Date.now(),
      x: startX + driftX,
      y: startY + driftY,
      targetX: centerX + driftX * 0.2,
      targetY: centerY + driftY * 0.2
    };

    setBotNodes(prev => {
      // Limit to 36 concurrent bots (18 on mobile)
      const maxBots = window.innerWidth < 768 ? 18 : 36;
      const updated = [...prev, newBot];
      return updated.length > maxBots ? updated.slice(-maxBots) : updated;
    });
  };

  // Animation loop
  const animate = () => {
    const now = Date.now();
    
    setBotNodes(prev => prev.filter(bot => {
      const elapsed = now - bot.startTime;
      const duration = 2600 + Math.random() * 600; // 2.6-3.2s
      
      if (elapsed < 0) return true; // Not started yet
      if (elapsed > duration) {
        // Bot reached center, trigger core pulse
        const core = document.querySelector('.sf-core') as HTMLElement;
        if (core) {
          core.style.transform = 'translate(-50%, -50%) scale(1.03)';
          setTimeout(() => {
            core.style.transform = 'translate(-50%, -50%) scale(1)';
          }, 180);
        }
        return false; // Remove bot
      }
      
      return true;
    }));
    
    if (!isPaused && isVisible) {
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  // Start intro sequence
  useEffect(() => {
    if (prefersReducedMotion || !isVisible) return;
    
    setTimeout(() => {
      spawnIntroBots();
      setHasStarted(true);
    }, 500);
  }, [prefersReducedMotion, isVisible]);

  // Main animation loop
  useEffect(() => {
    if (prefersReducedMotion || !isVisible || isPaused || !hasStarted) return;

    // Start continuous spawning after intro (2.5s)
    const startSpawning = setTimeout(() => {
      spawnIntervalRef.current = setInterval(() => {
        spawnBot();
      }, 450 + Math.random() * 150); // 450-600ms
    }, 2500);

    // Start animation loop
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      clearTimeout(startSpawning);
      if (spawnIntervalRef.current) clearInterval(spawnIntervalRef.current);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [prefersReducedMotion, isVisible, isPaused, hasStarted]);

  // Handle hover/focus pause
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (spawnIntervalRef.current) clearInterval(spawnIntervalRef.current);
    // Resume after 10 seconds
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 10000);
  };

  const handleMouseLeave = () => {
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    setIsPaused(false);
  };

  // Calculate bot position based on progress
  const getBotStyle = (bot: BotNode): React.CSSProperties => {
    const elapsed = Date.now() - bot.startTime;
    const duration = 2600 + Math.random() * 600;
    
    if (elapsed < 0) return { opacity: 0 };
    
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
    
    const currentX = bot.x + (bot.targetX - bot.x) * easeProgress;
    const currentY = bot.y + (bot.targetY - bot.y) * easeProgress;
    
    // Fade out as approaching center
    const distanceToCenter = Math.sqrt(
      Math.pow(currentX - bot.targetX, 2) + Math.pow(currentY - bot.targetY, 2)
    );
    const opacity = distanceToCenter < 30 ? distanceToCenter / 30 : 1;
    const scale = distanceToCenter < 30 ? (distanceToCenter / 30) : 1;
    
    return {
      position: 'absolute',
      left: `${currentX}px`,
      top: `${currentY}px`,
      transform: `translate(-50%, -50%) scale(${scale}) rotate(${progress * 12}deg)`,
      opacity,
      willChange: 'transform, opacity'
    };
  };

  return (
    <>
      <style>{`
        #sf-ai-governance {
          position: relative;
          aspect-ratio: 1/1;
          min-height: 560px;
          border-radius: 50%;
          overflow: hidden;
          background: radial-gradient(120% 120% at 60% 40%, rgba(255,59,48,.12), rgba(86,90,255,.10) 60%, transparent 100%);
        }
        
        @media (max-width: 768px) {
          #sf-ai-governance { min-height: 360px; }
        }
        
        .sf-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
          transition: transform 0.18s cubic-bezier(0.22, 1, 0.36, 1);
          animation: sf-core-pulse 2s ease-in-out infinite;
        }
        
        @keyframes sf-core-pulse {
          0%, 100% { filter: drop-shadow(0 0 12px rgba(255,59,48,.3)); }
          50% { filter: drop-shadow(0 0 20px rgba(255,59,48,.5)); }
        }
        
        .bot {
          width: 28px;
          height: 28px;
          filter: drop-shadow(0 0 8px rgba(255,59,48,.35));
        }
        
        @media (prefers-reduced-motion: reduce) {
          .bot { display: none !important; }
          .sf-core { 
            animation: sf-core-breathe 3s ease-in-out infinite !important;
          }
        }
        
        @keyframes sf-core-breathe {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(255,59,48,.2)); }
          50% { filter: drop-shadow(0 0 16px rgba(255,59,48,.4)); }
        }
      `}</style>
      <div 
        ref={containerRef}
        id="sf-ai-governance"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        tabIndex={0}
      >
        {/* Bot swarm nodes */}
        {botNodes.map(bot => (
          <div
            key={bot.id}
            className="bot"
            style={getBotStyle(bot)}
            aria-hidden="true"
          >
            <Bot className="w-full h-full text-primary" />
          </div>
        ))}
        
        {/* Central core bot */}
        <div className="sf-core">
          <Bot className="w-full h-full text-primary" role="img" aria-label="AI core" />
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