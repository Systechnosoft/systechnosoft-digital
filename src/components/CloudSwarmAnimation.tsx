import React, { useEffect, useRef } from "react";
import { Cloud } from "lucide-react";

// Cloud Swarm Animation - Adapted from Salesforce BotSwarm
export const CloudSwarmAnimation: React.FC = () => {
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
