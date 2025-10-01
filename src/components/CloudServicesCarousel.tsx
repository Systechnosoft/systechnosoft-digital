import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle, LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  bullets: string[];
}

interface CloudServicesCarouselProps {
  services: ServiceCard[];
}

export const CloudServicesCarousel = ({ services }: CloudServicesCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  // Determine slides per view based on screen size
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setSlidesPerView(3);
      } else if (window.matchMedia("(min-width: 640px)").matches) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  // Intersection Observer to pause when off-screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio >= 0.2);
      },
      { threshold: [0.2] }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-advance logic
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || isPaused || !isVisible) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }

    const interval = 3000;
    const maxIndex = Math.max(0, services.length - slidesPerView);

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, interval);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isPaused, isVisible, services.length, slidesPerView]);

  // Pause with resume after 10s
  const handlePause = useCallback(() => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  }, []);

  const handleResume = useCallback(() => {
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
  }, []);

  const goToPrevious = () => {
    handlePause();
    const maxIndex = Math.max(0, services.length - slidesPerView);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    handlePause();
    const maxIndex = Math.max(0, services.length - slidesPerView);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToPrevious();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goToNext();
    } else if (e.key === "Home") {
      e.preventDefault();
      handlePause();
      setCurrentIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      handlePause();
      setCurrentIndex(Math.max(0, services.length - slidesPerView));
    }
  };

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const maxIndex = Math.max(0, services.length - slidesPerView);

  return (
    <div
      ref={sectionRef}
      className="cloud-services-carousel relative"
      data-cloud-carousel
      style={{
        "--slide-w-sm": "100%",
        "--slide-w-md": "calc(50% - 12px)",
        "--slide-w-lg": "calc(33.333% - 16px)",
      } as React.CSSProperties}
    >
      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        onClick={goToPrevious}
        disabled={currentIndex === 0}
        aria-label="Previous"
        aria-controls="carousel-track"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white border-[#E6E6E6] shadow-md hover:bg-[#F7F7F7] disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-[#E52629] -translate-x-1/2"
      >
        <ChevronLeft className="h-5 w-5 text-[#1C1C1C]" />
      </Button>

      {/* Viewport */}
      <div
        ref={viewportRef}
        className="carousel__viewport overflow-hidden"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
        onFocus={handlePause}
        onBlur={handleResume}
        onPointerDown={handlePause}
        role="region"
        aria-roledescription="carousel"
        aria-label="Cloud services we deliver"
      >
        <motion.ul
          id="carousel-track"
          className="carousel__track flex gap-6"
          animate={{
            x: `calc(-${currentIndex} * (var(--slide-w-sm) + 24px))`,
          }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: 0.36,
                  ease: [0.22, 1, 0.36, 1],
                }
          }
          style={{
            willChange: "transform",
            contain: "paint",
          }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <li
                key={idx}
                className="flex-shrink-0 w-[var(--slide-w-sm)] sm:w-[var(--slide-w-md)] lg:w-[var(--slide-w-lg)]"
              >
                <Card
                  className="h-full min-h-[200px] bg-white border-[#E6E6E6] rounded-2xl p-6 md:p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-[#E52629]"
                  tabIndex={0}
                >
                  <CardHeader className="p-0 mb-4">
                    <motion.div
                      initial={prefersReducedMotion ? {} : { rotate: 0 }}
                      animate={prefersReducedMotion ? {} : { rotate: [0, -10, 10, -10, 0] }}
                      transition={{
                        duration: 0.5,
                        delay: idx * 0.1,
                        ease: "easeInOut",
                      }}
                    >
                      <Icon className="h-8 w-8 text-[#E52629] mb-3" />
                    </motion.div>
                    <h3 className="sr-only">{service.title}</h3>
                    <CardTitle className="text-lg font-montserrat text-[#1C1C1C]">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
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
              </li>
            );
          })}
        </motion.ul>
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={goToNext}
        disabled={currentIndex >= maxIndex}
        aria-label="Next"
        aria-controls="carousel-track"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white border-[#E6E6E6] shadow-md hover:bg-[#F7F7F7] disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-[#E52629] translate-x-1/2"
      >
        <ChevronRight className="h-5 w-5 text-[#1C1C1C]" />
      </Button>

      {/* Status indicator - screen reader only */}
      <div
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
        id="cloud-svcs-status"
      >
        Slide {currentIndex + 1} of {maxIndex + 1}
      </div>
    </div>
  );
};
