import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
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
  CheckCircle2,
  Award,
  TrendingDown,
  Activity,
  GitBranch,
  Boxes,
  DollarSign,
  ShieldCheck,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CloudServicesCarousel } from "@/components/CloudServicesCarousel";

// Service cards data for hero rotating carousel
const cloudServiceCards = [
  { 
    icon: "🎯", 
    title: "Strategy & Readiness", 
    benefit: "Landing zone, TCO, roadmap" 
  },
  { 
    icon: "🚀", 
    title: "Migration & Modernization", 
    benefit: "Tested cutovers, apps & data" 
  },
  { 
    icon: "⚙️", 
    title: "Managed Cloud (SLA)", 
    benefit: "24×7, incident response, SRE" 
  },
  { 
    icon: "🔐", 
    title: "Security & Compliance", 
    benefit: "IAM, audit trails, guardrails" 
  },
  { 
    icon: "💾", 
    title: "Backup & DR", 
    benefit: "RPO/RTO targets, recovery playbooks" 
  },
  { 
    icon: "💰", 
    title: "FinOps & Cost Optimization", 
    benefit: "Rightsizing, savings plans" 
  },
];

// Services pillar cards
const servicePillars = [
  {
    icon: Target,
    title: "Strategy & Readiness",
    bullets: ["Landing zone", "TCO/ROI", "Roadmap & risk plan"],
  },
  {
    icon: RefreshCw,
    title: "Migration & Modernization",
    bullets: ["Rehost, refactor, or re‑platform", "Tested cutovers", "Apps and data"],
  },
  {
    icon: Settings,
    title: "Managed Cloud (SLA)",
    bullets: ["24×7 monitoring", "Incident response", "Patching & SRE runbooks"],
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    bullets: ["IAM & network policy", "Encryption & audit trails", "CIS/ISO/DPDP guardrails"],
  },
  {
    icon: Database,
    title: "Backup & DR",
    bullets: ["Clear RPO/RTO targets", "Drills & recovery playbooks", "Failover testing"],
  },
  {
    icon: DollarSign,
    title: "FinOps & Cost Optimization",
    bullets: ["Rightsizing & schedules", "Reservations/savings plans", "Showback/chargeback"],
  },
  {
    icon: Zap,
    title: "DevOps & Automation",
    bullets: ["CI/CD pipelines", "IaC (Terraform/Bicep)", "Observability (logs, metrics, APM)"],
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

// Cloud Swarm Animation - Adapted from Salesforce BotSwarm
const CloudSwarmAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    // Respect reduced motion
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const swarmContainer = root.querySelector('.cloud-swarm') as HTMLElement;
    const core = root.querySelector('.cloud-core') as HTMLElement;
    if (!swarmContainer || !core) return;

    // Wave state management
    const state = {
      w: 0, h: 0, r: 0,
      center: { x: 0, y: 0 },
      last: performance.now(),
      paused: false,
      inView: false,
      currentWave: [] as any[],
      nextWaveTime: 0,
      waveActive: false,
      coreRadius: 36,
    };

    function resize() {
      const rect = root.getBoundingClientRect();
      state.w = Math.max(100, Math.floor(rect.width));
      state.h = Math.max(100, Math.floor(rect.height));
      state.r = Math.min(state.w, state.h) * 0.45;
      state.center.x = state.w / 2;
      state.center.y = state.h / 2;
      
      const coreRect = core.getBoundingClientRect();
      state.coreRadius = Math.max(coreRect.width, coreRect.height) / 2;
    }

    // Six diagonal emitters
    function getEmitterPositions() {
      const angles = [0, 60, 120, 180, 240, 300];
      return angles.map(deg => {
        const rad = deg * Math.PI / 180;
        return {
          x: state.center.x + Math.cos(rad) * (state.r - 4),
          y: state.center.y + Math.sin(rad) * (state.r - 4),
          angle: rad,
        };
      });
    }

    function rand(min: number, max: number) { 
      return min + Math.random() * (max - min); 
    }

    function createCloudNode() {
      const node = document.createElement('div');
      node.classList.add('cloud-node');
      node.setAttribute('aria-hidden', 'true');
      node.innerHTML = `
        <svg class="mini-cloud" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
        </svg>`;
      return node;
    }

    // Spawn a complete wave of 6 clouds
    function spawnWave() {
      const emitters = getEmitterPositions();
      const newWave: any[] = [];
      
      emitters.forEach((em) => {
        const duration = rand(5000, 10000);
        const size = rand(6, 9);
        const driftX = rand(-4, 4);
        const driftY = rand(-4, 4);
        
        const node = createCloudNode();
        swarmContainer.appendChild(node);
        
        newWave.push({
          id: Math.random(),
          node,
          startX: em.x,
          startY: em.y,
          targetX: state.center.x + driftX,
          targetY: state.center.y + driftY,
          duration,
          startTime: performance.now(),
          size,
          alpha: 1,
          vanished: false,
        });
      });
      
      state.currentWave = newWave;
      state.waveActive = true;
    }

    function easeInOutCubic(t: number): number {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function updateCloudPosition(cloud: any) {
      if (!cloud.node) return;
      
      cloud.node.style.left = `${cloud.x}px`;
      cloud.node.style.top = `${cloud.y}px`;
      cloud.node.style.opacity = cloud.alpha;
    }

    function updateWave(now: number) {
      if (!state.waveActive || state.currentWave.length === 0) return;

      const vanishRadius = state.coreRadius + 10;
      let allVanished = true;
      let anyVanished = false;

      state.currentWave.forEach(cloud => {
        if (cloud.vanished) return;
        allVanished = false;

        const elapsed = now - cloud.startTime;
        const progress = Math.min(elapsed / cloud.duration, 1);
        const eased = easeInOutCubic(progress);
        
        cloud.x = cloud.startX + (cloud.targetX - cloud.startX) * eased;
        cloud.y = cloud.startY + (cloud.targetY - cloud.startY) * eased;
        
        const distToCenter = Math.hypot(cloud.x - state.center.x, cloud.y - state.center.y);
        if (distToCenter <= vanishRadius) {
          cloud.vanished = true;
          anyVanished = true;
          if (cloud.node) {
            cloud.node.remove();
            cloud.node = null;
          }
        } else {
          updateCloudPosition(cloud);
        }
      });

      if (anyVanished) {
        core.classList.remove('pulse');
        core.offsetWidth;
        core.classList.add('pulse');
      }

      if (allVanished) {
        state.waveActive = false;
        state.currentWave = [];
        state.nextWaveTime = now + rand(600, 900);
      }
    }

    function tick(now: number) {
      if (!state.inView) { 
        state.last = now; 
        requestAnimationFrame(tick); 
        return; 
      }

      if (state.paused) {
        state.last = now;
        requestAnimationFrame(tick);
        return;
      }

      if (!state.waveActive && now >= state.nextWaveTime) {
        spawnWave();
      }

      updateWave(now);

      state.last = now;
      requestAnimationFrame(tick);
    }

    let pauseTimer: NodeJS.Timeout | number;

    function pauseAnimation() {
      state.paused = true;
    }

    function resumeAnimation() {
      state.paused = false;
      clearTimeout(pauseTimer);
    }

    const io = new IntersectionObserver((ents) => {
      state.inView = ents.some(e => e.isIntersecting);
    }, { threshold: 0.1 });
    io.observe(root);

    const handlePointerEnter = () => pauseAnimation();
    const handlePointerLeave = () => resumeAnimation();
    const handleFocus = () => pauseAnimation();
    const handleBlur = () => resumeAnimation();

    root.addEventListener('pointerenter', handlePointerEnter);
    root.addEventListener('pointerleave', handlePointerLeave);
    root.addEventListener('focus', handleFocus);
    root.addEventListener('blur', handleBlur);

    function start() {
      resize();
      state.inView = true;
      state.last = performance.now();
      state.nextWaveTime = performance.now() + 1000;
      if (!reduced) requestAnimationFrame(tick);
    }

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);
    
    start();

    return () => {
      io.disconnect();
      window.removeEventListener('resize', handleResize);
      root.removeEventListener('pointerenter', handlePointerEnter);
      root.removeEventListener('pointerleave', handlePointerLeave);
      root.removeEventListener('focus', handleFocus);
      root.removeEventListener('blur', handleBlur);
      clearTimeout(pauseTimer);
      state.currentWave.forEach(cloud => {
        if (cloud.node) cloud.node.remove();
      });
    };
  }, []);

  return (
    <>
      <style>{`
        [data-cloud-swarm] {
          position: relative;
        }
        [data-cloud-swarm] .cloud-swarm {
          position: absolute; 
          inset: 0; 
          width: 100%; 
          height: 100%;
          pointer-events: none; 
          z-index: 1;
        }
        [data-cloud-swarm] .cloud-core {
          position: absolute; 
          inset: 0; 
          margin: auto; 
          width: 72px; 
          height: 72px;
          display: grid; 
          place-items: center; 
          z-index: 2;
        }
        
        .cloud-swarm .cloud-node {
          position: absolute;
          width: 54px; 
          height: 54px;
          background: transparent !important;
          display: grid; 
          place-items: center;
          color: #007AFF;
          filter: drop-shadow(0 0 9px rgba(0, 122, 255, 0.25));
          pointer-events: none;
          opacity: 0.95;
          transform: translate(-50%, -50%);
        }
        .cloud-swarm .cloud-node .mini-cloud {
          width: 48px; 
          height: 48px;
          transform: translateZ(0);
        }
        
        @keyframes cloud-pulse {
          0% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(0, 122, 255, 0)); }
          40% { transform: scale(1.08); filter: drop-shadow(0 0 14px rgba(0, 122, 255, 0.4)); }
          100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(0, 122, 255, 0)); }
        }
        [data-cloud-swarm] .pulse { 
          animation: cloud-pulse 520ms cubic-bezier(.22, 1, .36, 1); 
        }
        @media (prefers-reduced-motion: reduce) {
          [data-cloud-swarm] .cloud-swarm { display: none !important; }
          [data-cloud-swarm] .cloud-core {
            animation: cloud-breathe 3s ease-in-out infinite;
          }
          .cloud-swarm .cloud-node { filter: none; }
        }
        @keyframes cloud-breathe {
          0%, 100% { filter: drop-shadow(0 0 0 rgba(0, 122, 255, 0)); }
          50% { filter: drop-shadow(0 0 8px rgba(0, 122, 255, 0.3)); }
        }
      `}</style>
      <div 
        ref={containerRef}
        className="cloud-swarm-orb"
        data-cloud-swarm
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '560px',
          maxWidth: '560px',
          aspectRatio: '1/1',
          borderRadius: '50%',
          overflow: 'hidden',
          background: 'radial-gradient(120% 120% at 60% 40%, rgba(0,122,255,.12), rgba(229,38,41,.08) 60%, transparent 100%)'
        }}
      >
        <div className="cloud-swarm" aria-hidden="true" />
        <div className="cloud-core" aria-hidden="true">
          <Cloud className="w-full h-full text-[#007AFF]" />
        </div>
      </div>
    </>
  );
};

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
          
        </motion.div>

        {/* Hidden titles for screen readers */}
        <div className="sr-only">
          {cloudServiceCards.map((card, idx) => (
            <span key={idx}>{card.title}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Carousel component for case studies
function Carousel({ 
  items, 
  renderSlide, 
  autoAdvanceMs = 3000,
  label
}: { 
  items: any[]; 
  renderSlide: (item: any, index: number) => React.ReactNode;
  autoAdvanceMs?: number;
  label: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [pausedUntil, setPausedUntil] = useState(0);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const tick = () => {
      if (Date.now() >= pausedUntil) {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }
      timerRef.current = setTimeout(tick, autoAdvanceMs);
    };

    timerRef.current = setTimeout(tick, autoAdvanceMs);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [items.length, autoAdvanceMs, pausedUntil]);

  const handleMouseEnter = () => {
    setPausedUntil(Date.now() + 10000);
  };

  const handleFocus = () => {
    setPausedUntil(Date.now() + 10000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
      setPausedUntil(Date.now() + 10000);
    }
    if (e.key === "ArrowRight") {
      setCurrentIndex((prev) => (prev + 1) % items.length);
      setPausedUntil(Date.now() + 10000);
    }
  };

  return (
    <div
      className="cloud-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={handleMouseEnter}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      data-cloud-results
    >
      <div className="relative min-h-[200px]" aria-live="polite">
        {renderSlide(items[currentIndex], currentIndex)}
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    consent: false,
  });

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
        {/* Hero Section - Hero Motion System */}
        <section 
          id="hero" 
          data-page="cloud"
          className="sf-hero cloud-hero relative min-h-[72vh] lg:min-h-[88vh] flex items-center overflow-hidden bg-white"
          aria-labelledby="cloud-hero-title"
        >
          {/* Animated background - Hero Motion System */}
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
                className="cloud-hero__left space-y-6 max-w-[44rem]"
              >
                <div className="space-y-6">
                  <h1 
                    id="cloud-hero-title"
                    className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-[#1C1C1C] leading-tight"
                  >
                    Cloud done right—
                    <span className="text-[#E52629]">secure</span>,{" "}
                    <span className="text-[#E52629]">efficient</span>,
                    production‑ready
                  </h1>
                  
                  <p className="text-lg md:text-xl text-[#3C3C3C] leading-relaxed max-w-prose">
                    Plan, migrate, and run on AWS, Azure, and GCP with security, cost control, and uptime built‑in—so your teams can focus on the work that matters.
                  </p>
                </div>

                {/* Benefit Chips */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="sf-hero__chips flex flex-wrap gap-3"
                  aria-label="Key benefits"
                >
                  {["24×7 support", "Certified engineers", "Governance & compliance"].map((badge, idx) => (
                    <motion.div
                      key={badge}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + idx * 0.08, duration: 0.35 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="text-sm px-4 py-2 bg-white/80 border-[#E6E6E6] text-[#1C1C1C] hover:shadow-sm transition-shadow"
                      >
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
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#E52629] hover:bg-[#D02022] hover:scale-[1.03] text-white font-semibold group transition-all shadow-md hover:shadow-lg"
                  >
                    <Link to="/contact?type=cloud-assessment">
                      Get a Cloud Assessment
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-[#007AFF] text-[#007AFF] hover:bg-[#007AFF]/5 hover:scale-[1.03] font-semibold transition-all"
                  >
                    <a href="#services">See what we deliver</a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Column - Hero Image */}
              <motion.figure 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="cloud-hero__art relative isolate group"
              >
                <img
                  src="/images/cloud-hero-illustration.webp"
                  width={920} 
                  height={600}
                  alt="Cloud infrastructure illustration with connected network nodes"
                  className="w-full h-auto rounded-2xl border border-[#E6E6E6] shadow-[0_10px_30px_rgba(0,0,0,0.06)] object-cover transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[-6px] group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]" 
                  loading="eager" 
                  decoding="async"
                  srcSet="/images/cloud-hero-illustration.webp 920w"
                  sizes="(min-width: 1024px) 48vw, 92vw"
                />
                {/* Subtle brand glow */}
                <span 
                  aria-hidden="true" 
                  className="pointer-events-none absolute -inset-3 rounded-[22px] blur-lg opacity-[.18] -z-10"
                  style={{
                    background: `radial-gradient(40% 40% at 20% 30%, #E52629 10%, transparent 70%), radial-gradient(35% 35% at 80% 70%, #007AFF 10%, transparent 70%)`
                  }}
                />
              </motion.figure>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="cloud-overview" className="cloud-overview mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          <h2 className="text-3xl lg:text-[40px] font-semibold text-[#1C1C1C]">Overview</h2>
          <p className="mt-6 text-lg lg:text-xl text-[#3C3C3C] leading-relaxed">
            Cloud should make life simpler, not harder. We keep your environments reliable, secure, and cost‑smart—while you keep building. With Systechnosoft, you get always‑on support from certified engineers, clear runbooks, and calm operations.
          </p>
          <ul className="mt-7 flex flex-wrap justify-center gap-3" aria-label="Key benefits">
            <li className="px-3.5 py-2 rounded-full border border-[#E6E6E6] text-[#1C1C1C] text-sm">24×7 support</li>
            <li className="px-3.5 py-2 rounded-full border border-[#E6E6E6] text-[#1C1C1C] text-sm">Certified engineers</li>
            <li className="px-3.5 py-2 rounded-full border border-[#E6E6E6] text-[#1C1C1C] text-sm">Governance & compliance</li>
          </ul>
        </section>

        {/* Cloud Certifications Section */}
        <section 
          id="cloud-certs" 
          className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden" 
          aria-labelledby="cloud-certs-title"
        >
          {/* Subtle corner glows */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E52629] opacity-[0.06] blur-[120px] pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#007AFF] opacity-[0.06] blur-[120px] pointer-events-none" aria-hidden="true" />
          
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <motion.h2 
                id="cloud-certs-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C] mb-4"
              >
                Certified Cloud Expertise
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-base md:text-lg text-[#3C3C3C] max-w-[780px] mx-auto"
              >
                Our engineers hold current certifications across AWS, Azure, and Google Cloud.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
              {[
                {
                  name: "AWS Certified Solutions Architect – Associate",
                  image: "/certifications/aws-saa.png",
                  alt: "AWS Certified Solutions Architect – Associate badge"
                },
                {
                  name: "Microsoft Certified: Azure Administrator Associate",
                  image: "/certifications/azure-admin.png",
                  alt: "Microsoft Certified: Azure Administrator Associate badge"
                },
                {
                  name: "Google Cloud Certified: Associate Cloud Engineer",
                  image: "/certifications/gcp-ace.png",
                  alt: "Google Cloud Certified: Associate Cloud Engineer badge"
                }
              ].map((cert, idx) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.32, 
                    delay: idx * 0.08, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white border border-[#E6E6E6] rounded-2xl p-6 flex flex-col items-center text-center group focus-visible:outline-2 focus-visible:outline-[#E52629] focus-visible:outline-offset-2 transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                  tabIndex={0}
                >
                  <motion.img
                    src={cert.image}
                    alt={cert.alt}
                    className="w-[120px] h-auto sm:w-[140px] lg:w-[160px] object-contain"
                    loading="lazy"
                    whileHover={{
                      rotate: 3,
                      transition: { duration: 0.2 }
                    }}
                  />
                  <p className="mt-4 text-sm md:text-base text-[#1C1C1C] font-medium">
                    {cert.name}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Services Pillars Carousel */}
        <section id="services" className="cloud-services py-20 bg-white" aria-labelledby="services-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="services-title" className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C] mb-4">
                What We Deliver
              </h2>
              <p className="text-lg text-[#3C3C3C]">
                At a glance
              </p>
            </div>

            <CloudServicesCarousel services={servicePillars} />
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C] mb-4">
                Why choose Systechnosoft
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Fewer fires, more focus",
                  description: "We run the day‑to‑day so your teams can ship features.",
                  icon: Zap
                },
                {
                  title: "Security first",
                  description: "Guardrails by default; least‑privilege access; audit‑ready.",
                  icon: ShieldCheck
                },
                {
                  title: "Predictable ops",
                  description: "Runbooks, SLOs, and clear escalation paths.",
                  icon: CheckCircle2
                },
                {
                  title: "Costs under control",
                  description: "We tune spend without slowing delivery.",
                  icon: DollarSign
                }
              ].map((item, idx) => (
                <Card key={idx} className="bg-white border-[#E6E6E6] hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <item.icon className="w-10 h-10 text-[#E52629] mb-4" />
                    <h3 className="text-xl font-bold font-montserrat text-[#1C1C1C] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#3C3C3C]">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section id="platforms" className="py-20 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C] mb-4">
                Platform Support
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[
                { name: "AWS", icon: "☁️" },
                { name: "Azure", icon: "⚡" },
                { name: "Google Cloud", icon: "🚀" }
              ].map((platform, idx) => (
                <Card key={idx} className="bg-white border-[#E6E6E6] text-center">
                  <CardHeader>
                    <div className="text-5xl mb-4">{platform.icon}</div>
                    <CardTitle className="text-2xl font-montserrat text-[#1C1C1C]">
                      {platform.name}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-[#3C3C3C]">
                Also: <span className="font-semibold">Microsoft 365</span>, <span className="font-semibold">SharePoint</span>, <span className="font-semibold">Google Workspace</span>, and <span className="font-semibold">Hybrid/On‑prem</span> (VMware/Kubernetes)
                <Link 
                  to="/services/data-migration" 
                  className="ml-3 inline-flex items-center text-[#007AFF] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF] rounded sm:ml-0 sm:mt-2 sm:block"
                >
                  Know more →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Migration Tracks Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C] mb-4">
                Migration Tracks
              </h2>
            </div>
            
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Azure migrations",
                  description: "Move apps, data, and services to Azure with landing zones, containerization where it fits, and secure IAM. We plan, test, and execute with minimal downtime."
                },
                {
                  title: "Microsoft 365 (M365) migrations",
                  description: "Tenant‑to‑tenant, Exchange→M365, or Google Workspace→M365. We handle identity, mailflow, and coexistence so users keep working."
                },
                {
                  title: "AWS migrations",
                  description: "Lift‑and‑shift or refactor to managed services. We map dependencies, rehearse cutovers, and align to your security baseline."
                },
                {
                  title: "Google Workspace migrations",
                  description: "Mail, files, and collaboration moved with governance intact. Change management included so adoption sticks."
                }
              ].map((track, idx) => (
                <Card key={idx} className="bg-white border-[#E6E6E6] hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold font-montserrat text-[#1C1C1C] mb-3">
                      {track.title}
                    </h3>
                    <p className="text-[#3C3C3C]">{track.description}</p>
                  </CardContent>
                </Card>
              ))}
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
                { value: 2, suffix: " h", label: "P1 incident response (SLA)" },
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
                How We Work
              </h2>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Discover",
                  outcome: "Right‑sized plan",
                  bullets: ["Short assessment", "Clear baseline"],
                },
                {
                  step: "2",
                  title: "Migrate/Pilot",
                  outcome: "Controlled execution",
                  bullets: ["Pilot or phased migration", "Minimal risk"],
                },
                {
                  step: "3",
                  title: "Run & Optimize",
                  outcome: "Continuous improvements",
                  bullets: ["Operate with SLAs", "Tune and harden"],
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
                          <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-[#007AFF]" />
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

        {/* What You Can Expect Section */}
        <section className="py-20 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C] mb-4">
                What You Can Expect
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Certified, experienced engineers"
                },
                {
                  icon: Clock,
                  title: "24×7 availability with clear SLAs"
                },
                {
                  icon: ShieldCheck,
                  title: "Security built‑in (IAM, encryption, least privilege)"
                }
              ].map((item, idx) => (
                <Card key={idx} className="bg-white border-[#E6E6E6] text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <item.icon className="w-12 h-12 text-[#E52629] mx-auto mb-4" />
                    <h3 className="text-lg font-bold font-montserrat text-[#1C1C1C]">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="max-w-3xl mx-auto mt-12 text-center">
              <p className="text-[#3C3C3C] text-sm">
                <strong>Privacy & compliance:</strong> We follow WCAG 2.2 AA for UX and respect India's DPDP along with GDPR/CCPA where applicable. Forms collect only what's needed, with explicit consent.
              </p>
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
                  <CardHeader className="p-6 md:p-7">
                    <CardTitle className="text-lg font-montserrat text-[#1C1C1C] flex items-center">
                      <Boxes className="h-5 w-5 mr-2 text-[#E52629]" />
                      {acc.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 md:p-7 pt-0">
                    <p className="text-sm text-[#3C3C3C]">{acc.description}</p>
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
              autoAdvanceMs={3000}
              renderSlide={(study) => (
                <Card className="bg-[#F5F5F5] border-[#E6E6E6]">
                  <CardContent className="p-8 md:py-8">
                    <div className="text-sm font-semibold text-[#007AFF] mb-2">
                      {study.company}
                    </div>
                    <div className="text-3xl md:text-4xl font-semibold text-[#E52629] mb-4">
                      {study.metric}
                    </div>
                    <p className="text-lg text-[#3C3C3C]">
                      {study.outcome}
                    </p>
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
                Ready to simplify cloud?
              </h2>
              <p className="text-lg text-[#3C3C3C]">
                Let's discuss your cloud requirements and create a tailored plan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-[#E52629] hover:bg-[#D02022] text-white font-semibold"
              >
                <Link to="/contact?type=cloud-assessment">Get a Cloud Assessment</Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-[#007AFF] text-[#007AFF] hover:bg-[#007AFF]/5 font-semibold"
              >
                <Link to="/contact">Talk to an expert</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
