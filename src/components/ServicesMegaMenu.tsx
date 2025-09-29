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
    { name: "Cloud Services", href: "/services/cloud-services" },
    { name: "Data Migration", href: "/services/data-migration" },
    { name: "Managed IT Services", href: "/services/managed-it-services" },
    { name: "Microsoft Dynamics 365", href: "/services/microsoft-dynamics-365" },
    { name: "Data Backup & Recovery Services", href: "/services/backup-recovery" },
  ],
  "Low Code": [
    { name: "Appian", href: "/services/appian#overview" },
    { name: "Salesforce", href: "/services/salesforce#overview" },
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
          className="fixed inset-x-0 w-screen z-[70]"
          style={{ top: '64px' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onKeyDown={handleKeyDown}
          role="menu"
        >
          {/* Full-width background layer */}
          <div 
            className="w-full"
            style={{
              background: 'linear-gradient(135deg, rgba(28, 28, 28, 0.95) 0%, rgba(28, 28, 28, 0.90) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
            }}
          >
            {/* Subtle vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />
            
            {/* Centered content container */}
            <div className="relative max-w-[1200px] mx-auto px-8 py-8">
              {/* Main Content Grid */}
              <div className="grid grid-cols-4 gap-8">
                {Object.entries(servicesData).map(([category, items]) => (
                  <div key={category} className="space-y-4">
                    <h3 className="font-montserrat font-semibold text-white text-base mb-4">
                      {category}
                    </h3>
                    <div className="space-y-1">
                      {items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="group relative flex items-center px-0 py-2 text-[15px] text-white/90 hover:text-white transition-all duration-200 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500 before:absolute before:left-[-10px] before:top-1/2 before:h-4 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-[#E52629] before:opacity-0 before:transition-all before:duration-150 hover:before:opacity-100 focus:before:opacity-100"
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
              className="border-t px-8 py-4"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.1)',
                background: 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                <div className="flex items-center gap-6 text-sm text-[#C9C9C9]">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-[#E52629]" />
                    <span>40% faster workflows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-[#007AFF]" />
                    <span>30% ops efficiency</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#E52629] hover:bg-[#E52629]/90 text-white px-6 py-2.5 rounded-lg font-medium transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => handleLinkClick('Footer', 'Claim Your Free Insight', '/contact')}
                  >
                    Claim Your Free Insight
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/tools/health-check"
                    className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/10 text-white px-6 py-2.5 rounded-lg font-medium transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
