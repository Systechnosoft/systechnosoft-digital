import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { HeroBackground } from "@/components/HeroMotionSystem";
import { Button } from "@/components/ui/button";

interface LegalHeroProps {
  title: string;
  description: string;
  lastUpdated: string;
}

export function LegalHero({ title, description, lastUpdated }: LegalHeroProps) {
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <HeroBackground className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Play/Pause control - only show if animations are enabled */}
          {!prefersReducedMotion && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-0 right-0 w-10 h-10 rounded-full hover:bg-[#E52629]/10 focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:outline-none"
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? "Resume animations" : "Pause animations"}
              aria-pressed={isPaused}
            >
              {isPaused ? (
                <Play className="h-5 w-5 text-[#E52629]" />
              ) : (
                <Pause className="h-5 w-5 text-[#E52629]" />
              )}
            </Button>
          )}

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1C1C] font-montserrat">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-[#3C3C3C] font-inter max-w-2xl mx-auto">
              {description}
            </p>
            <p className="text-sm text-[#666666] font-inter">
              Last updated: <time dateTime={lastUpdated}>{lastUpdated}</time>
            </p>
          </div>
        </div>
      </div>
    </HeroBackground>
  );
}
