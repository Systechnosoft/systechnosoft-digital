import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const servicesData = {
  "IT Solutions": [
    { name: "Cloud Services", href: "/services/cloud" },
    { name: "Data Migration", href: "/services/data-migration" },
    { name: "Managed IT Services", href: "/services/managed-it-services" },
    { name: "Microsoft Dynamics 365", href: "/services/microsoft-dynamics-365" },
    { name: "Data Backup & Recovery Services", href: "/services/backup-recovery" },
  ],
  "Low Code": [
    { name: "Appian", href: "/services/appian#overview" },
    { name: "Salesforce", href: "/services/salesforce" },
  ],
  "AI & Automation": [
    { name: "AI Development & Integration", href: "/services/ai#ai-development" },
    { name: "Machine Learning Models", href: "/services/ai#ml-models" },
    { name: "Natural Language Processing (NLP)", href: "/services/ai#nlp" },
    { name: "Computer Vision", href: "/services/ai#computer-vision" },
    { name: "AI-Powered Automation", href: "/services/ai#ai-automation" },
    { name: "Data Analytics & Insights", href: "/services/ai#analytics" },
    { name: "AI Consultation & Strategy", href: "/services/ai#consulting" },
  ],
  "Other Services": [
    { name: "Web Development", href: "/services/other-services#web-development" },
    { name: "Mobile App Development", href: "/services/other-services#mobile-app-development" },
  ],
};

interface ServicesMegaMenuProps {
  isActive: boolean;
  onClose: () => void;
}

export default function ServicesMegaMenu({ isActive, onClose }: ServicesMegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const openTimeoutRef = useRef<NodeJS.Timeout>();
  const closeTimeoutRef = useRef<NodeJS.Timeout>();
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) onClose();
  };

  const handleLinkClick = (section: string, item: string, url: string) => {
    // Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'menu_link_click', {
        section,
        item,
        url
      });
    }
    
    setIsOpen(false);
    onClose();
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    if (!isOpen) {
      openTimeoutRef.current = setTimeout(() => {
        setIsOpen(true);
        // Analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'menu_open');
        }
      }, 140);
    }
  };

  const handleMouseLeave = () => {
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 240);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  };

  useEffect(() => {
    return () => {
      if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={handleOpenChange}>
        <SheetTrigger asChild>
          <button
            className={cn(
              "font-inter font-medium text-sm transition-colors focus-enterprise rounded px-2 py-1",
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Services
          </button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[90vh] rounded-t-xl">
          <div className="py-6 h-full overflow-y-auto">
            <h2 className="font-montserrat font-semibold text-xl mb-6 sticky top-0 bg-background">Services</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {Object.entries(servicesData).map(([category, items]) => (
                <AccordionItem key={category} value={category} className="border-none">
                  <AccordionTrigger className="font-montserrat font-medium text-left py-3 hover:no-underline">
                    {category}
                  </AccordionTrigger>
                  <AccordionContent className="pb-0">
                    <div className="space-y-1">
                      {items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded transition-colors min-h-[44px] flex items-center"
                           onClick={() => {
                            handleLinkClick(category, item.name, item.href);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            {/* Mobile Footer CTAs */}
            <div className="mt-8 space-y-3 pt-6 border-t border-border sticky bottom-0 bg-background">
              <Link
                to="/contact"
                className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
                onClick={() => handleLinkClick('Footer', 'Claim Your Free Insight', '/contact')}
              >
                Claim Your Free Insight
              </Link>
              <Link
                to="/tools/health-check"
                className="block w-full border border-border text-center py-3 rounded-md font-medium hover:bg-accent transition-colors"
                onClick={() => handleLinkClick('Footer', 'IT Network Health Check', '/tools/health-check')}
              >
                IT Network Health Check
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <>
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          ref={triggerRef}
          className={cn(
            "font-inter font-medium text-sm transition-colors focus-enterprise rounded px-2 py-1",
            isActive
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          )}
          onFocus={handleMouseEnter}
          onBlur={(e) => {
            if (!e.currentTarget.closest('[data-mega-menu-container]')?.contains(e.relatedTarget)) {
              handleMouseLeave();
            }
          }}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          Services
        </button>
      </div>

      {/* Fixed Mega Menu Panel - Portal to body for true full-width */}
      {isOpen && createPortal(
        <div
          data-mega-menu-container
          className="fixed inset-x-0 w-screen z-[70] animate-in fade-in slide-in-from-top-2 duration-[280ms]"
          style={{ 
            top: '64px',
            animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onKeyDown={handleKeyDown}
          role="menu"
        >
          {/* Full-width background layer */}
          <div 
            className="relative w-full bg-gradient-to-br from-rose-50 via-white to-rose-50 ring-1 ring-rose-100/80 shadow-xl shadow-rose-100/50 rounded-2xl backdrop-blur-sm will-change-transform motion-reduce:animate-none"
            style={{
              background: 'linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.96) 100%), radial-gradient(120% 120% at 70% -10%, rgba(255, 77, 64, 0.06), transparent 50%)'
            }}
          >
            {/* Subtle animated gradient wash */}
            <div 
              className="absolute inset-0 pointer-events-none rounded-2xl opacity-35 motion-reduce:hidden"
              style={{
                background: 'radial-gradient(80% 60% at 85% 0%, rgba(255, 77, 64, 0.05), transparent 60%)',
                animation: 'blush 18s ease-in-out infinite alternate'
              }}
            />
            
            {/* Centered content container */}
            <div className="relative max-w-[1200px] mx-auto px-8 py-8">
              {/* Main Content Grid */}
              <div className="grid grid-cols-4 gap-8">
                {Object.entries(servicesData).map(([category, items], colIndex) => (
                  <div 
                    key={category} 
                    className="space-y-4 opacity-0 translate-y-1.5 animate-in fade-in slide-in-from-top-1 duration-[220ms] fill-mode-forwards will-change-transform motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:animate-none"
                    style={{
                      animationDelay: `${80 + colIndex * 40}ms`,
                      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <h3 className="font-montserrat font-semibold text-slate-900 text-base mb-4 hover:text-rose-600 transition-colors duration-150">
                      {category}
                    </h3>
                    <div className="space-y-1">
                      {items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="group relative inline-flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[15px] text-slate-700 hover:text-rose-600 hover:bg-rose-50/80 focus-visible:text-rose-600 focus-visible:bg-rose-50/80 transition-colors duration-150 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-rose-600 after:origin-left after:scale-x-0 hover:after:scale-x-100 focus-visible:after:scale-x-100 after:transition-transform after:duration-[120ms] motion-reduce:after:hidden"
                          style={{
                            animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                          onClick={() => {
                            handleLinkClick(category, item.name, item.href);
                          }}
                        >
                          <span className="font-inter">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Strip */}
            <div 
              className="sticky bottom-0 border-t border-rose-100 px-8 py-4 bg-white/80 backdrop-blur rounded-b-2xl opacity-0 translate-y-2 animate-in fade-in slide-in-from-bottom-2 duration-[220ms] fill-mode-forwards will-change-transform motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:animate-none"
              style={{
                animationDelay: '120ms',
                animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                <div className="flex items-center gap-6 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-rose-500" />
                    <span>40% faster workflows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-rose-500" />
                    <span>30% ops efficiency</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
                    onClick={() => handleLinkClick('Footer', 'Claim Your Free Insight', '/contact')}
                  >
                    Claim Your Free Insight
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/tools/health-check"
                    className="inline-flex items-center gap-2 border border-rose-300 text-rose-600 hover:bg-rose-50 px-6 py-2.5 rounded-lg font-medium transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
                    onClick={() => handleLinkClick('Footer', 'IT Network Health Check', '/tools/health-check')}
                  >
                    <Shield className="h-4 w-4" />
                    IT Network Health Check
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
