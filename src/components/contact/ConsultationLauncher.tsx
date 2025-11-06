import { useState, useEffect } from "react";
import { Calendar, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

const CALENDLY_URL = "https://calendly.com/systechnosoft-info/30min";

export function ConsultationLauncher() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Preconnect to Calendly on hover/focus
  useEffect(() => {
    if (isHovered && typeof document !== "undefined") {
      const preconnect = document.createElement("link");
      preconnect.rel = "preconnect";
      preconnect.href = "https://calendly.com";
      document.head.appendChild(preconnect);

      const preconnectAssets = document.createElement("link");
      preconnectAssets.rel = "preconnect";
      preconnectAssets.href = "https://assets.calendly.com";
      document.head.appendChild(preconnectAssets);

      return () => {
        document.head.removeChild(preconnect);
        document.head.removeChild(preconnectAssets);
      };
    }
  }, [isHovered]);

  const handleOpen = () => {
    setIsOpen(true);
    setIsLoading(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsLoading(true);
  };

  return (
    <>
      <Button
        size="lg"
        className="bg-[#E52629] hover:bg-[#E52629]/90 text-white font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2"
        onClick={handleOpen}
        onMouseEnter={() => setIsHovered(true)}
        onFocus={() => setIsHovered(true)}
      >
        <Calendar className="h-5 w-5" />
        Book a consultation
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl w-full p-0 gap-0 rounded-2xl shadow-2xl">
          <DialogHeader className="p-4 pb-3 border-b">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl font-montserrat font-bold text-foreground">
                Book a 30-min consultation
              </DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="h-8 w-8 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629]"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </DialogHeader>

          <div className="relative w-full h-[80vh] md:h-[80vh] bg-background">
            {/* Loading skeleton */}
            {isLoading && (
              <div className="absolute inset-0 p-4 space-y-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-64 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            )}

            {/* Calendly iframe */}
            {isOpen && (
              <iframe
                src={CALENDLY_URL}
                className="w-full h-full border-0"
                onLoad={() => setIsLoading(false)}
                title="Schedule a consultation with Systechnosoft"
                loading="lazy"
              />
            )}
          </div>

          <div className="p-4 pt-2 border-t bg-muted/30">
            <p className="text-sm text-muted-foreground text-center">
              Having trouble?{" "}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E52629] hover:underline inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] rounded"
              >
                Open in Calendly
                <ExternalLink className="h-3 w-3" />
              </a>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
