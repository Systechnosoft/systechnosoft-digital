import { HeroBackground } from "@/components/HeroMotionSystem";

interface LegalHeroProps {
  title: string;
  description: string;
  lastUpdated: string;
}

export function LegalHero({ title, description, lastUpdated }: LegalHeroProps) {
  return (
    <HeroBackground className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
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
