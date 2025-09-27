import React, { useState, useCallback, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Building2, Zap, Plane } from "lucide-react";
import { Link } from "react-router-dom";

interface IndustryCard {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  problems: string;
  solutions: string;
  outcomes: string;
  cta?: {
    text: string;
    href: string;
  };
}

const industryCards: IndustryCard[] = [
  {
    title: "BFSI",
    icon: Building2,
    problems: "Legacy F2B workflows; fragmented risk/compliance; manual approvals.",
    solutions: "Appian workflows & records; exception/audit; IAM/SSO; HA/DR infra.",
    outcomes: "40% faster trading lifecycle; stronger compliance tracking; portfolio visibility.",
    cta: {
      text: "Explore BFSI Use-Cases",
      href: "/case-studies?industry=bfsi"
    }
  },
  {
    title: "Oil & Gas",
    icon: Zap,
    problems: "Field compliance; manual scheduling; siloed data.",
    solutions: "Workforce compliance tracking; transport workflows with checklists; real-time dashboards.",
    outcomes: "30% ops efficiency; enhanced safety & compliance; real-time insights.",
    cta: {
      text: "Explore O&G Use-Cases",
      href: "/case-studies?industry=oil-gas"
    }
  },
  {
    title: "Aviation",
    icon: Plane,
    problems: "Multi-airport content changes; manual updates; regulatory complexity; multilingual needs.",
    solutions: "Role-based CMS for airport news/content; audit/versioning; localization; SLA-based workflows.",
    outcomes: "Faster content turnaround; consistent compliance; multi-airport governance.",
    cta: {
      text: "Explore Aviation Use-Cases",
      href: "/case-studies?industry=aviation"
    }
  }
];

export default function IndustryCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % industryCards.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + industryCards.length) % industryCards.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      nextSlide();
    }
  }, [nextSlide, prevSlide]);

  const currentCard = industryCards[currentSlide];
  const IconComponent = currentCard.icon;

  return (
    <div 
      className="relative w-full h-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="Systechnosoft industries"
      aria-live="polite"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Card className="card-enterprise h-full min-h-[320px] lg:min-h-[360px] shadow-sm border border-border/10">
        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <IconComponent 
              className="h-8 w-8 text-primary" 
              aria-hidden="true"
            />
          </div>
          <CardTitle className="text-xl font-montserrat font-bold text-foreground">
            {currentCard.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-primary mb-1">Problems</h4>
            <p className="text-sm text-muted-foreground">{currentCard.problems}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-primary mb-1">Solutions</h4>
            <p className="text-sm text-muted-foreground">{currentCard.solutions}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-primary mb-1">Outcomes</h4>
            <p className="text-sm text-muted-foreground">{currentCard.outcomes}</p>
          </div>

          {currentCard.cta && (
            <div className="pt-2">
              <Button
                variant="ghost"
                size="sm"
                className="p-0 h-auto text-accent link-animated"
                asChild
              >
                <Link to={currentCard.cta.href}>
                  {currentCard.cta.text}
                </Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation Controls */}
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border-border/20 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF] focus-visible:ring-offset-2 transition-all"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Previous industry"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:block">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border-border/20 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF] focus-visible:ring-offset-2 transition-all"
          onClick={nextSlide}
          disabled={currentSlide === industryCards.length - 1}
          aria-label="Next industry"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {industryCards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF] focus-visible:ring-offset-2 ${
              index === currentSlide
                ? 'bg-primary scale-110'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to industry ${index + 1}: ${industryCards[index].title}`}
          />
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="flex justify-center space-x-4 mt-6 lg:hidden">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF] focus-visible:ring-offset-2"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          disabled={currentSlide === industryCards.length - 1}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF] focus-visible:ring-offset-2"
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}