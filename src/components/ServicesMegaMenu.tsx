import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight, Zap, Shield } from "lucide-react";
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
    { name: "Cloud Services", href: "/services/it#cloud-services" },
    { name: "Data Migration", href: "/services/it#data-migration" },
    { name: "Managed IT Services", href: "/services/it#managed-it-services" },
    { name: "Microsoft Dynamics 365", href: "/services/it#microsoft-dynamics-365" },
    { name: "Data Backup & Recovery Services", href: "/services/it#backup-recovery" },
  ],
  "Low-code": [
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

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) onClose();
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    onClose();
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={handleOpenChange}>
        <SheetTrigger asChild>
          <Link
            to="/services"
            className={cn(
              "font-inter font-medium text-sm transition-colors focus-enterprise rounded px-2 py-1 flex items-center gap-1",
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Services
            <ChevronDown className="h-3 w-3" />
          </Link>
        </SheetTrigger>
        <SheetContent side="left" className="w-full max-w-sm">
          <div className="py-6">
            <h2 className="font-montserrat font-semibold text-xl mb-6">Services</h2>
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
                          onClick={handleLinkClick}
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
            <div className="mt-8 space-y-3 pt-6 border-t border-border">
              <Link
                to="/get-quotation"
                className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
                onClick={handleLinkClick}
              >
                Get a Quotation
              </Link>
              <Link
                to="/tools/health-check"
                className="block w-full border border-border text-center py-3 rounded-md font-medium hover:bg-accent transition-colors"
                onClick={handleLinkClick}
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
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to="/services"
        className={cn(
          "font-inter font-medium text-sm transition-colors focus-enterprise rounded px-2 py-1 flex items-center gap-1",
          isActive
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground"
        )}
        onFocus={() => setIsOpen(true)}
        onBlur={(e) => {
          // Keep menu open if focus moves to menu content
          if (!e.currentTarget.closest('[data-mega-menu]')?.contains(e.relatedTarget)) {
            setIsOpen(false);
          }
        }}
      >
        Services
        <ChevronDown className={cn("h-3 w-3 transition-transform duration-150", isOpen && "rotate-180")} />
      </Link>

      {isOpen && (
        <div
          data-mega-menu
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-[1320px] z-50 animate-fade-in"
          style={{ 
            left: '50%', 
            transform: 'translateX(-50%)',
            marginLeft: 'calc(-50vw + 50%)'
          }}
        >
          <div className="bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
            {/* Main Content Grid */}
            <div className="p-8">
              <div className="grid grid-cols-12 gap-8 max-w-6xl mx-auto">
                {Object.entries(servicesData).map(([category, items]) => (
                  <div key={category} className="col-span-3">
                    <h3 className="font-montserrat font-semibold text-foreground mb-4 text-base">
                      {category}
                    </h3>
                    <div className="space-y-1">
                      {items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="group block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded transition-all duration-150 min-h-[44px] flex items-center relative hover:bg-accent/50 focus-enterprise"
                          onClick={handleLinkClick}
                        >
                          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-6 bg-primary rounded-r transition-all duration-150 group-hover:w-1"></span>
                          <span className="font-inter group-hover:translate-x-1 transition-transform duration-150">
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
            <div className="bg-accent/30 border-t border-border px-8 py-4">
              <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Link
                    to="/get-quotation"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-medium hover:bg-primary/90 transition-colors text-sm"
                    onClick={handleLinkClick}
                  >
                    Get a Quotation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/tools/health-check"
                    className="inline-flex items-center gap-2 border border-border px-6 py-2.5 rounded-md font-medium hover:bg-accent transition-colors text-sm"
                    onClick={handleLinkClick}
                  >
                    <Shield className="h-4 w-4" />
                    IT Network Health Check
                  </Link>
                </div>
                
                <div className="hidden lg:flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Zap className="h-4 w-4 text-primary" />
                    <span>40% faster workflows</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
