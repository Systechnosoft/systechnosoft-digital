import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useScrollDirection } from '@/hooks/useScrollDirection';

interface ScrollDepthSectionProps {
  children: ReactNode;
  className?: string;
  intensity?: 'low' | 'medium';
}

export function ScrollDepthSection({ 
  children, 
  className = '',
  intensity = 'low'
}: ScrollDepthSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const scrollDirection = useScrollDirection();

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Define transform values based on intensity
  const intensityConfig = {
    low: {
      rotateRange: [-2, 2],
      scaleRange: [0.98, 1.01],
      yRange: [-6, 6]
    },
    medium: {
      rotateRange: [-4, 4],
      scaleRange: [0.97, 1.02],
      yRange: [-12, 12]
    }
  };

  const config = intensityConfig[intensity];

  // Transform values based on scroll progress
  const baseRotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [config.rotateRange[0], 0, config.rotateRange[1]]
  );

  const baseScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [config.scaleRange[0], 1, config.scaleRange[1]]
  );

  const baseY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [config.yRange[0], 0, config.yRange[1]]
  );

  // Enhanced effect when scrolling up
  const rotateX = useTransform(
    baseRotateX,
    (value) => scrollDirection === 'up' ? value * 1.5 : value
  );

  const scale = useTransform(
    baseScale,
    (value) => scrollDirection === 'up' ? value : value * 0.5
  );

  const y = useTransform(
    baseY,
    (value) => scrollDirection === 'up' ? value * 1.3 : value * 0.7
  );

  // If reduced motion is preferred, disable all transforms
  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ 
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      <motion.div
        style={{
          rotateX,
          scale,
          y,
          transformStyle: 'preserve-3d'
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 30,
          mass: 0.5
        }}
        viewport={{ once: false, margin: "-100px" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
