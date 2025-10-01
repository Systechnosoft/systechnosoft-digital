import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Play, 
  Pause, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Cloud,
  Shield,
  Zap,
  Database,
  Lock,
  Server,
  Settings,
  Globe,
  Eye,
  Monitor,
  Layers,
  Workflow,
  Clock,
  Target,
  FileCheck,
  HardDrive,
  Users,
  BarChart3,
  CheckCircle,
  Award,
  TrendingDown,
  Activity,
  GitBranch,
  Boxes
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// Service cards data for hero rotating carousel
const cloudServiceCards = [
  { 
    icon: "🎯", 
    title: "Cloud Strategy & Readiness", 
    benefit: "Landing zone design, TCO analysis, and migration roadmap" 
  },
  { 
    icon: "🚀", 
    title: "Migration & Modernization", 
    benefit: "Rehost, refactor, and re-platform with minimal downtime" 
  },
  { 
    icon: "⚙️", 
    title: "Managed Cloud (SLA)", 
    benefit: "24×7 ops, patching, and SRE runbooks with defined SLAs" 
  },
  { 
    icon: "🔐", 
    title: "Security & Compliance", 
    benefit: "IAM, network policies, CIS/ISO/DPDP guardrails by default" 
  },
  { 
    icon: "💾", 
    title: "Backup & Disaster Recovery", 
    benefit: "RPO/RTO design, automated drills, and failover testing" 
  },
  { 
    icon: "💰", 
    title: "FinOps & Cost Optimization", 
    benefit: "Rightsizing, auto-schedules, and reserved instance planning" 
  },
];

// Services pillar cards
const servicePillars = [
  {
    icon: Target,
    title: "Cloud Strategy & Readiness",
    bullets: ["Landing zone design", "TCO & ROI modeling", "Roadmap & risk assessment"],
  },
  {
    icon: Workflow,
    title: "Migration & Modernization",
    bullets: ["Rehost/refactor strategies", "Database & data migration", "App re-architecture"],
  },
  {
    icon: Settings,
    title: "Managed Cloud (SLA-based)",
    bullets: ["24×7 monitoring & alerts", "Incident management", "Patch & capacity planning"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    bullets: ["IAM & SSO integration", "Network policies & segmentation", "CIS/ISO/DPDP guardrails"],
  },
  {
    icon: HardDrive,
    title: "Backup & Disaster Recovery",
    bullets: ["RPO/RTO design & testing", "Automated backup schedules", "Failover runbooks & drills"],
  },
  {
    icon: TrendingDown,
    title: "FinOps & Cost Optimization",
    bullets: ["Rightsize & auto-schedule resources", "Reserved/Savings Plans analysis", "Chargeback & showback models"],
  },
  {
    icon: GitBranch,
    title: "DevOps & Automation",
    bullets: ["CI/CD pipelines", "IaC (Terraform/Bicep)", "Observability (logs, APM, tracing)"],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics on Cloud",
    bullets: ["Cloud data warehousing", "ETL/ELT pipelines", "BI dashboards & reporting"],
  },
];

// KPIs data
const kpis = [
  { value: 8, suffix: " weeks", label: "Pilot to production" },
  { value: 30, suffix: "%", label: "Lower cloud spend" },
  { value: 99.95, suffix: "%", label: "Uptime targets" },
  { value: 2, suffix: "h", label: "Incident response (P1)" },
];

// Accelerators data
const accelerators = [
  { name: "Landing Zone Blueprint", description: "Multi-account/subscription structure with governance" },
  { name: "CIS Benchmark Kit", description: "Pre-configured security baselines for AWS/Azure/GCP" },
  { name: "Cost Auto-Scheduler", description: "Turn off non-prod resources nights & weekends" },
  { name: "DR Drill Playbook", description: "Automated failover testing & runbook templates" },
  { name: "Terraform Module Pack", description: "Reusable IaC modules for common services" },
  { name: "Monitoring Starter", description: "Pre-built dashboards & alerting rules" },
];

// FAQ data
const faqs = [
  {
    question: "What pricing models do you offer for cloud services?",
    answer: "We offer flexible models: fixed monthly SLA-based managed services, project-based migrations, or outcome-based pilots. Pricing depends on scope, platforms, and SLA tiers.",
  },
  {
    question: "What are your support windows and response times?",
    answer: "Our managed cloud service includes 24×7 monitoring with tiered SLAs: P1 (critical) ≤15 min response, P2 (high) ≤2h, P3 (medium) ≤8h business hours. Custom SLAs available.",
  },
  {
    question: "How do you handle security and compliance?",
    answer: "We follow CIS Benchmarks, ISO 27001, SOC 2, and DPDP/GDPR best practices. All environments use encryption at rest/in transit, IAM hardening, network segmentation, and audit logging.",
  },
  {
    question: "How long do cloud migrations typically take?",
    answer: "Most migrations complete in 4-8 weeks for pilot workloads, 3-6 months for mid-size estates, and 6-12 months for large enterprise migrations. We use phased cutover strategies to minimize downtime.",
  },
  {
    question: "Can you support hybrid and multi-cloud environments?",
    answer: "Yes. We design and manage hybrid setups (on-prem + cloud) and multi-cloud architectures (AWS + Azure + GCP). Our automation and observability tools unify management across platforms.",
  },
  {
    question: "What about data residency and privacy compliance?",
    answer: "We ensure data residency requirements are met by deploying resources in compliant regions. All PII handling follows GDPR and DPDP regulations with explicit consent and audit trails.",
  },
];

// Case studies data
const caseStudies = [
  {
    company: "Global Financial Services",
    metric: "35% reduction in monthly cloud spend",
    outcome: "FinOps optimization with reserved instances and auto-scheduling across AWS and Azure",
  },
  {
    company: "Healthcare Provider",
    metric: "99.97% uptime over 18 months",
    outcome: "Managed cloud operations with 24×7 SRE support and DR failover tested quarterly",
  },
  {
    company: "Manufacturing Corp",
    metric: "4-week migration of 120+ VMs",
    outcome: "Lift-and-shift to Azure with zero downtime using phased cutover strategy",
  },
];

// Particle Constellation Animation - Light Theme (same as AI Automation)
function ParticleConstellationAnimation({ isPaused }: { isPaused: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
  }>>([]);
  const prefersReducedMotion = useRef(
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (prefersReducedMotion.current) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size with DPR
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    // Initialize particles
    if (particlesRef.current.length === 0) {
      const particleCount = Math.min(50, Math.floor(width * height / 15000));
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
        });
      }
    }

    const particles = particlesRef.current;
    const connectionDistance = 120;
    let time = 0;

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, width, height);

      if (!isPaused) {
        time += 0.016; // ~60fps

        // Update particle positions
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;

          // Wrap around edges
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        });
      }

      // Draw connection lines
      ctx.strokeStyle = "rgba(229, 38, 41, 0.08)";
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.15;
            ctx.strokeStyle = `rgba(229, 38, 41, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles with subtle glow
      particles.forEach((p, idx) => {
        const colorCycle = (idx % 3);
        let color;
        if (colorCycle === 0) {
          color = `rgba(229, 38, 41, ${0.6 + Math.sin(time * 2 + idx) * 0.2})`;
        } else if (colorCycle === 1) {
          color = `rgba(0, 122, 255, ${0.5 + Math.sin(time * 2 + idx) * 0.2})`;
        } else {
          color = `rgba(120, 120, 120, ${0.4 + Math.sin(time * 2 + idx) * 0.2})`;
        }

        // Subtle glow
        ctx.shadowBlur = 4;
        ctx.shadowColor = color;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  if (prefersReducedMotion.current) {
    return (
      <div className="cloud-hero-fallback w-full h-full flex items-center justify-center">
        <img 
          src="/img/cloud-constellation-still.avif" 
          alt="Cloud constellation visualization"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="cloud-hero-canvas w-full h-full"
      aria-hidden="true"
    />
  );
}

// Rotating Service Cards
function RotatingServiceCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();
  const pauseTimeoutRef = useRef<NodeJS.Timeout>();
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cloudServiceCards.length);
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  const handleMouseLeave = () => {
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    setIsPaused(false);
  };

  const handleFocus = () => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  const handleBlur = () => {
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    setIsPaused(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setCurrentIndex((prev) => (prev - 1 + cloudServiceCards.length) % cloudServiceCards.length);
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setCurrentIndex((prev) => (prev + 1) % cloudServiceCards.length);
    }
  };

  const currentCard = cloudServiceCards[currentIndex];

  return (
    <div
      className="cloud-rotating-cards w-full max-w-[360px] lg:max-w-[360px] md:max-w-[300px] mx-auto"
      role="region"
      aria-label="Cloud service offerings"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{
        ['--card-w' as string]: '360px',
        ['--card-h' as string]: '210px',
      }}
    >
      <div 
        className="relative bg-white border border-[#E6E6E6] rounded-lg shadow-lg overflow-hidden"
        style={{ 
          width: 'var(--card-w)', 
          height: 'var(--card-h)',
          perspective: '1000px'
        }}
      >
        <motion.div
          key={currentIndex}
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0.85, rotateY: -8 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ 
            duration: prefersReducedMotion ? 0.3 : 0.35, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="absolute inset-0 p-6 flex flex-col justify-between"
          aria-live="polite"
        >
          <div>
            <div className="text-4xl mb-4">{currentCard.icon}</div>
            <h3 className="text-xl font-bold text-[#1C1C1C] mb-3 font-montserrat">
              {currentCard.title}
            </h3>
            <p className="text-sm text-[#3C3C3C] leading-relaxed">
              {currentCard.benefit}
            </p>
          </div>
          
          <div className="text-xs text-[#3C3C3C]/60 font-medium">
            {currentIndex + 1} of {cloudServiceCards.length}
          </div>
        </motion.div>

        {/* Hidden titles for screen readers */}
        <div className="sr-only">
          {cloudServiceCards.map((card, idx) => (
            <span key={idx}>{card.title}</span>
          ))}
        </div>
      </div>

      {/* Keyboard hint */}
      <p className="text-xs text-center mt-3 text-[#3C3C3C]/60">
        Use ← → arrow keys to navigate
      </p>
    </div>
  );
}

// Carousel component for case studies
function Carousel({ 
  items, 
  renderSlide, 
  autoAdvanceMs = 4000,
  label
}: { 
  items: any[]; 
  renderSlide: (item: any, index: number) => React.ReactNode;
  autoAdvanceMs?: number;
  label: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoAdvanceMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, items.length, autoAdvanceMs]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  return (
    <div
      className="cloud-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="relative min-h-[200px]" aria-live="polite">
        {renderSlide(items[currentIndex], currentIndex)}
      </div>

      <div className="flex items-center justify-between mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <span className="text-sm text-muted-foreground" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {currentIndex + 1} / {items.length}
        </span>

        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

// Counter component for KPIs
function AnimatedCounter({ 
  end, 
  suffix = "", 
  duration = 2000 
}: { 
  end: number; 
  suffix?: string; 
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          if (prefersReducedMotion) {
            setCount(end);
            return;
          }

          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
            setCount(Math.floor(eased * end * 100) / 100);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          animate();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration, hasAnimated, prefersReducedMotion]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {count}{suffix}
    </span>
  );
}

export default function CloudServices() {
  const [heroAnimationPaused, setHeroAnimationPaused] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    consent: false,
  });

  const toggleHeroAnimation = () => {
    setHeroAnimationPaused((prev) => !prev);
  };

  const handleAnimationKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggleHeroAnimation();
    }
    if (e.key === "Escape") {
      setHeroAnimationPaused(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Helmet>
        <title>Cloud Services (AWS · Azure · GCP) | Systechnosoft Technologies</title>
        <meta 
          name="description" 
          content="Cloud strategy, migration, managed services, security/compliance, DR, and FinOps across AWS, Azure, and GCP. 4–8-week migrations." 
        />
        <link rel="canonical" href="https://systechnosoft.com/services/cloud" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cloud Services (AWS · Azure · GCP) | Systechnosoft Technologies" />
        <meta property="og:description" content="Cloud strategy, migration, managed services, security/compliance, DR, and FinOps across AWS, Azure, and GCP. 4–8-week migrations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://systechnosoft.com/services/cloud" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cloud Services (AWS · Azure · GCP) | Systechnosoft Technologies" />
        <meta name="twitter:description" content="Cloud strategy, migration, managed services, security/compliance, DR, and FinOps across AWS, Azure, and GCP. 4–8-week migrations." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Cloud Computing Services",
            "provider": {
              "@type": "Organization",
              "name": "Systechnosoft Technologies",
              "url": "https://systechnosoft.com"
            },
            "areaServed": "Global",
            "description": "Cloud strategy, migration, managed services, security/compliance, disaster recovery, and FinOps across AWS, Azure, and GCP",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-white" data-page="cloud-services">
        {/* Hero Section */}
        <section 
          id="hero" 
          className="cloud-hero relative bg-white min-h-[72vh] lg:min-h-[84vh] flex items-center overflow-hidden"
        >
          {/* Background Animation */}
          <div className="absolute inset-0 z-0">
            <ParticleConstellationAnimation isPaused={heroAnimationPaused} />
          </div>

          {/* Subtle corner gradients */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-50/40 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-50/30 via-transparent to-transparent opacity-60" />
          </div>

          {/* Faint tech grid */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #E6E6E6 1px, transparent 1px),
                linear-gradient(to bottom, #E6E6E6 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Pause/Play Control */}
          <button
            onClick={toggleHeroAnimation}
            onKeyDown={handleAnimationKeyDown}
            aria-label={heroAnimationPaused ? "Play animation" : "Pause animation"}
            aria-pressed={heroAnimationPaused}
            className="absolute top-6 right-6 z-20 bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:ring-offset-2"
          >
            {heroAnimationPaused ? (
              <Play className="h-5 w-5 text-[#3C3C3C]" />
            ) : (
              <Pause className="h-5 w-5 text-[#3C3C3C]" />
            )}
          </button>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Copy */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 
                    id="cloud-hero-heading"
                    className="font-montserrat font-bold text-[#1C1C1C] leading-tight"
                    style={{ fontSize: 'clamp(28px, 5.2vw, 48px)', lineHeight: '1.15' }}
                  >
                    Cloud done right—secure, efficient, production‑ready
                  </h1>
                  
                  <p 
                    className="text-[#3C3C3C] leading-relaxed"
                    style={{ fontSize: 'clamp(16px, 2.2vw, 20px)', lineHeight: '1.5' }}
                  >
                    Plan, migrate, and run on AWS, Azure, and GCP with FinOps, security, and uptime baked in—without slowing your teams.
                  </p>
                </div>

                {/* Proof Chips */}
                <div className="flex flex-wrap gap-3">
                  {["4–8 week migrations", "24×7 managed support", "Compliance & guardrails by default"].map((chip, idx) => (
                    <motion.div
                      key={chip}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08, duration: 0.3 }}
                      className="bg-white border border-[#E6E6E6] px-4 py-2 rounded-full text-sm font-medium text-[#3C3C3C] hover:shadow-sm transition-shadow focus-within:ring-2 focus-within:ring-[#007AFF]"
                    >
                      {chip}
                    </motion.div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#E52629] hover:bg-[#D02022] text-white font-inter font-semibold tracking-wide transition-all hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-[#E52629] focus:ring-offset-2"
                    style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', letterSpacing: '0.2px' }}
                  >
                    <Link to="/contact?type=cloud-assessment">
                      Get a Cloud Assessment
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-[#007AFF] text-[#007AFF] hover:bg-[#007AFF]/5 font-inter font-semibold tracking-wide transition-all focus:ring-2 focus:ring-[#007AFF] focus:ring-offset-2"
                    style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', letterSpacing: '0.2px' }}
                  >
                    <a href="#services">See services</a>
                  </Button>
                </div>
              </div>

              {/* Right Column - Rotating Cards */}
              <div className="flex justify-center lg:justify-end">
                <RotatingServiceCards />
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-20 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C] mb-6">
                Cloud Platforms Built for Outcomes
              </h2>
              <p className="text-lg text-[#3C3C3C] leading-relaxed">
                We design, migrate, and operate secure, scalable cloud platforms on AWS, Azure, and GCP—delivering faster delivery, reduced ops toil, and predictable costs with measurable SLAs.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-center gap-8 mb-12 flex-wrap">
              <Badge variant="outline" className="px-6 py-3 text-base border-[#E6E6E6] bg-white">
                <Award className="h-5 w-5 mr-2 text-[#E52629]" />
                AWS Partner
              </Badge>
              <Badge variant="outline" className="px-6 py-3 text-base border-[#E6E6E6] bg-white">
                <Award className="h-5 w-5 mr-2 text-[#007AFF]" />
                Azure Certified
              </Badge>
              <Badge variant="outline" className="px-6 py-3 text-base border-[#E6E6E6] bg-white">
                <Award className="h-5 w-5 mr-2 text-[#3C3C3C]" />
                GCP Expert
              </Badge>
            </div>

            {/* KPI Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {kpis.map((kpi, idx) => (
                <Card key={idx} className="bg-white border-[#E6E6E6] text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-[#E52629] mb-2">
                      <AnimatedCounter end={kpi.value} suffix={kpi.suffix} />
                    </div>
                    <div className="text-sm font-medium text-[#3C3C3C]">{kpi.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Pillars Grid */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C] mb-4">
                Cloud Services Across the Lifecycle
              </h2>
              <p className="text-lg text-[#3C3C3C]">
                From strategy to scale, we cover every stage of your cloud journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicePillars.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      delay: idx * 0.1, 
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <Card 
                      className="h-full bg-white border-[#E6E6E6] hover:shadow-lg transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[#007AFF]"
                      tabIndex={0}
                    >
                      <CardHeader>
                        <Icon className="h-8 w-8 text-[#E52629] mb-4" />
                        <CardTitle className="text-lg font-montserrat text-[#1C1C1C]">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start text-sm text-[#3C3C3C]">
                              <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-[#007AFF]" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section id="platforms" className="py-20 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C] mb-4">
                Multi-Cloud & Hybrid Expertise
              </h2>
              <p className="text-lg text-[#3C3C3C] max-w-2xl mx-auto">
                We support AWS, Azure, GCP, and hybrid/on-prem environments with unified management
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white border-[#E6E6E6]">
                <CardHeader>
                  <div className="text-4xl mb-4">☁️</div>
                  <CardTitle className="text-xl font-montserrat text-[#1C1C1C]">AWS</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["EC2", "EKS", "RDS", "S3", "IAM", "CloudWatch"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#E6E6E6]">
                <CardHeader>
                  <div className="text-4xl mb-4">⚡</div>
                  <CardTitle className="text-xl font-montserrat text-[#1C1C1C]">Azure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["AKS", "App Service", "SQL DB", "Storage", "Entra ID", "Monitor"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#E6E6E6]">
                <CardHeader>
                  <div className="text-4xl mb-4">🚀</div>
                  <CardTitle className="text-xl font-montserrat text-[#1C1C1C]">GCP</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["GKE", "Cloud SQL", "BigQuery", "Cloud Storage", "IAM", "Operations"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-sm text-[#3C3C3C] mb-4">
                <strong>Also supporting:</strong> Microsoft 365 / Dynamics 365 • Hybrid/On-prem (VMware, Kubernetes)
              </p>
            </div>
          </div>
        </section>

        {/* KPI Ribbon */}
        <section id="kpis" className="py-16 bg-[#E52629] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: 8, suffix: " weeks", label: "Typical pilot to production" },
                { value: 30, suffix: "%", label: "Average cost reduction" },
                { value: 99.95, suffix: "%", label: "Uptime targets with managed ops" },
                { value: 15, suffix: " min", label: "P1 incident response (SLA)" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-5xl font-bold mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C] mb-4">
                Our Approach: Discover → Pilot → Scale
              </h2>
              <p className="text-lg text-[#3C3C3C] max-w-2xl mx-auto">
                A proven methodology that minimizes risk and maximizes outcomes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Discover",
                  outcome: "Baseline assessment & migration roadmap",
                  bullets: ["TCO analysis & business case", "Landing zone design & governance model"],
                },
                {
                  step: "2",
                  title: "Pilot (4–8 weeks)",
                  outcome: "Proven outcomes on a contained workload",
                  bullets: ["Migrate/refactor 1–2 core apps", "Establish monitoring, security, and DR"],
                },
                {
                  step: "3",
                  title: "Scale",
                  outcome: "Enterprise-wide rollout with SLA-based ops",
                  bullets: ["Phased migration of remaining workloads", "24×7 managed services & FinOps optimization"],
                },
              ].map((phase, idx) => (
                <Card key={idx} className="bg-white border-[#E6E6E6] relative">
                  <div className="absolute -top-4 -left-4 bg-[#E52629] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    {phase.step}
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-2xl font-montserrat text-[#1C1C1C]">
                      {phase.title}
                    </CardTitle>
                    <CardDescription className="text-base text-[#3C3C3C] font-medium">
                      {phase.outcome}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start text-sm text-[#3C3C3C]">
                          <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-[#007AFF]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Accelerators Section */}
        <section id="accelerators" className="py-20 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C] mb-4">
                Accelerators & Starter Kits
              </h2>
              <p className="text-lg text-[#3C3C3C] max-w-2xl mx-auto">
                Pre-built components to speed up your cloud journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accelerators.map((acc, idx) => (
                <Card 
                  key={idx} 
                  className="bg-white border-[#E6E6E6] hover:shadow-md transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-montserrat text-[#1C1C1C] flex items-center">
                      <Boxes className="h-5 w-5 mr-2 text-[#E52629]" />
                      {acc.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[#3C3C3C] mb-4">{acc.description}</p>
                    <Button 
                      asChild 
                      variant="link" 
                      className="text-[#007AFF] p-0 h-auto font-medium"
                    >
                      <Link to="/contact?type=accelerator">Learn more →</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Carousel */}
        <section id="case-studies" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C] mb-4">
                Proven Results
              </h2>
              <p className="text-lg text-[#3C3C3C]">
                Real outcomes from real cloud transformations
              </p>
            </div>

            <Carousel
              items={caseStudies}
              label="Case studies"
              autoAdvanceMs={4000}
              renderSlide={(study) => (
                <Card className="bg-[#F5F5F5] border-[#E6E6E6]">
                  <CardContent className="p-8">
                    <div className="text-sm font-semibold text-[#007AFF] mb-2">
                      {study.company}
                    </div>
                    <div className="text-3xl font-bold text-[#E52629] mb-4">
                      {study.metric}
                    </div>
                    <p className="text-lg text-[#3C3C3C] mb-6">
                      {study.outcome}
                    </p>
                    <Button 
                      asChild 
                      variant="link" 
                      className="text-[#007AFF] p-0 h-auto font-medium"
                    >
                      <Link to="/contact?type=case-study">Read full story →</Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            />

            <div className="text-center mt-8">
              <Button asChild variant="outline" size="lg" className="border-[#E6E6E6]">
                <Link to="/contact?type=all-case-studies">View all case studies</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-[#F5F5F5]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C] mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`}
                  className="bg-white border border-[#E6E6E6] rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-[#1C1C1C] hover:text-[#E52629]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#3C3C3C]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact Teaser */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C] mb-4">
                Get Started with Cloud
              </h2>
              <p className="text-lg text-[#3C3C3C]">
                Schedule a free cloud assessment or reach out with questions
              </p>
            </div>

            <Card className="bg-[#F5F5F5] border-[#E6E6E6]">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#1C1C1C] font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white border-[#E6E6E6]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#1C1C1C] font-medium">
                        Work Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white border-[#E6E6E6]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-[#1C1C1C] font-medium">
                      Company *
                    </Label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-white border-[#E6E6E6]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#1C1C1C] font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white border-[#E6E6E6]"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, consent: checked as boolean })
                      }
                      required
                    />
                    <Label 
                      htmlFor="consent" 
                      className="text-sm text-[#3C3C3C] leading-relaxed cursor-pointer"
                    >
                      By submitting, you agree to be contacted and to our{" "}
                      <Link to="/privacy" className="text-[#007AFF] underline">
                        privacy policy
                      </Link>
                      . *
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#E52629] hover:bg-[#D02022] text-white font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
