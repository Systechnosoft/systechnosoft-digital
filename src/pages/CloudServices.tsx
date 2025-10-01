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
        {/* Hero Section - Using Hero Theme */}
        <section 
          id="hero" 
          className="cloud-hero relative min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#FFF8F8] via-white to-[#FFF0F0]"
        >
          {/* Subtle corner gradients (Hero Theme) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-red-50/40 via-transparent to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-pink-50/30 via-transparent to-transparent rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
              {/* Left Column - Copy */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <h1 
                    id="cloud-hero-heading"
                    className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-[#1C1C1C] leading-tight"
                  >
                    Cloud services that{" "}
                    <span className="text-[#E52629]">deploy faster</span>—and{" "}
                    <span className="text-[#E52629]">scale smarter</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-[#3C3C3C] leading-relaxed max-w-2xl">
                    From strategy to scale on AWS, Azure, and GCP—with security, FinOps, and managed operations baked in.
                  </p>
                </div>

                {/* Proof Badges (Hero Theme) */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="flex flex-wrap gap-3"
                >
                  {["4–8 week migrations", "99.95% uptime targets", "24×7 managed support"].map((badge) => (
                    <Badge 
                      key={badge}
                      variant="secondary" 
                      className="text-sm px-4 py-2 bg-white/80 border-[#E6E6E6] text-[#3C3C3C] hover:shadow-sm transition-shadow"
                    >
                      {badge}
                    </Badge>
                  ))}
                </motion.div>

                {/* CTAs (Hero Theme) */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#E52629] hover:bg-[#D02022] text-white font-semibold group"
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
                    className="border-[#3C3C3C] text-[#3C3C3C] hover:bg-[#3C3C3C] hover:text-white font-semibold transition-all"
                  >
                    <a href="#services">See Services</a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Column - Cloud Swarm Animation */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center lg:justify-end"
              >
                <CloudSwarmAnimation />
              </motion.div>
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
