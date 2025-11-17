import { useState, useEffect } from "react";
import { Mail, Phone, CheckCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { HeroBackground, HeroMotionSystem } from "@/components/HeroMotionSystem";
import { OfficeLocationsMap } from "@/components/OfficeLocationsMap";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { BookConsultationTrigger } from "@/components/consultation/BookConsultationTrigger";

const RECAPTCHA_SITE_KEY = "6LfRRwQsAAAAAKjMFCqSdimJabCnVGgPM1m7fVJJ";
const RECAPTCHA_ACTION = "contact_submit";

// Extend Window interface for grecaptcha
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const heroCards = [
  { icon: "🚀", title: "Fast Response", benefit: "Get back within 24 hours" },
  { icon: "💡", title: "Expert Team", benefit: "Decades of combined experience" },
  { icon: "🤝", title: "Partnership First", benefit: "Your success is our mission" },
  { icon: "✨", title: "Innovation Ready", benefit: "Maximize innovation, minimize code" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  const { toast } = useToast();

  // Load reCAPTCHA v3 script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      window.grecaptcha.ready(() => {
        setIsRecaptchaLoaded(true);
      });
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConsentChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, consent: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to the privacy policy to submit the form.",
        variant: "destructive",
      });
      return;
    }

    if (!isRecaptchaLoaded) {
      toast({
        title: "Security Check Loading",
        description: "Please wait for security verification to load.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Execute reCAPTCHA v3 (client-side only)
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { 
        action: RECAPTCHA_ACTION 
      });
      
      // Prepare payload for Make webhook
      const payload = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        role: formData.role,
        message: formData.message,
        url: window.location.href
      };
      
      // POST to Make webhook with timeout
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 12000); // 12s timeout
      
      const response = await fetch(
        'https://hook.eu2.make.com/c7lygllbhr4qe5u6x4llr2dfl6dgjh3y',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          signal: controller.signal,
        }
      );
      
      clearTimeout(timeout);

      if (!response.ok) {
        throw new Error('webhook_failed');
      }
      
      setIsSubmitted(true);
      
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      console.error('[Contact] Submission error:', error);
      
      toast({
        title: "Submission Failed",
        description: "We couldn't submit your request right now. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl ring-1 ring-neutral-200 bg-white p-8 md:p-10 text-center space-y-8">
            {/* Success Icon with subtle pulse animation */}
            <div className="relative inline-flex">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-[scale-in_0.3s_ease-out]">
                <CheckCircle className="h-10 w-10 text-green-600 motion-safe:animate-[pulse_2s_ease-in-out_3]" />
              </div>
            </div>

            {/* Heading & Message */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground">
                Thank You for Your Interest
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We've received your message and will get back to you within 24 hours.
              </p>
            </div>

            {/* Timeline / Progress Steps */}
            <div className="space-y-5 max-w-lg mx-auto pt-4">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Next Steps
              </p>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-primary/20">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="font-medium text-foreground">Initial consultation call</p>
                    <p className="text-sm text-muted-foreground">Within 24-48 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-primary/20">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="font-medium text-foreground">Digital readiness assessment</p>
                    <p className="text-sm text-muted-foreground">If applicable to your needs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-primary/20">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="font-medium text-foreground">Customized solution proposal</p>
                    <p className="text-sm text-muted-foreground">Tailored to your requirements</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <BookConsultationTrigger />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <HeroBackground>
        <section id="hero" className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-[#1C1C1C] mb-6">
                  Get Started Today
                </h1>
                <p className="text-xl text-[#3C3C3C] max-w-3xl">
                  Ready to maximize innovation while minimizing code? Tell us a bit and we'll get back within 24 hours.
                </p>
              </div>

              {/* Right Column - Rotating Cards */}
              <div className="flex justify-center lg:justify-end">
                <HeroMotionSystem cards={heroCards} ariaLabel="Contact Systechnosoft" />
              </div>
            </div>
          </div>
        </section>
      </HeroBackground>

      <div className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Form - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-4xl mx-auto mb-12"
          >
            <div className="mb-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-foreground mb-3">
                Send Us a Message
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Tell us about your project and we'll get back to you within 24 hours
              </p>
            </div>
            <Card className="card-enterprise">
              <CardContent className="pt-8">
                <form onSubmit={handleSubmit} className="space-y-6" aria-live="polite">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="focus-enterprise"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@company.com"
                        required
                        className="focus-enterprise"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        required
                        className="focus-enterprise"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Input
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="Your job title"
                        className="focus-enterprise"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, challenges, or questions..."
                      rows={4}
                      required
                      className="focus-enterprise"
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={handleConsentChange}
                      className="mt-1"
                    />
                    <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                      I agree to the processing of my personal data in accordance with the{" "}
                      <Button variant="link" className="p-0 h-auto text-accent">
                        Privacy Policy
                      </Button>{" "}
                      and{" "}
                      <Button variant="link" className="p-0 h-auto text-accent">
                        Terms of Service
                      </Button>
                      . *
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="btn-hero w-full"
                    disabled={isSubmitting || !isRecaptchaLoaded}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Verifying & Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>

                  <p className="text-sm text-center text-muted-foreground font-medium">
                    We'll respond within 24 hours.
                  </p>

                  <p className="text-xs text-center text-muted-foreground">
                    Protected by reCAPTCHA v3 and subject to Google's{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E52629] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] rounded"
                    >
                      Privacy Policy
                    </a>
                    {" "}and{" "}
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E52629] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] rounded"
                    >
                      Terms
                    </a>
                    .
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Talk to a Human - Positioned above Office Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="w-full max-w-5xl mx-auto mb-12"
          >
            <div className="mb-6 text-center">
              <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-foreground mb-2">
                Talk to a Human
              </h2>
              <p className="text-base text-muted-foreground">
                Prefer direct contact? Reach out to us directly
              </p>
            </div>
            <Card className="bg-white rounded-2xl shadow-sm border">
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E52629]/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#E52629]" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-1">Email</p>
                    <a 
                      href="mailto:info@systechnosoft.in" 
                      className="text-sm sm:text-base text-foreground hover:text-[#E52629] transition-colors break-all"
                    >
                      info@systechnosoft.in
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E52629]/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-[#E52629]" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-1">Phone</p>
                    <a 
                      href="tel:+13473051255" 
                      className="text-sm sm:text-base text-foreground hover:text-[#E52629] transition-colors"
                    >
                      +1 (347) 305-1255
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Office Locations - Two Horizontal Cards Below */}
          <OfficeLocationsMap />
        </div>
      </div>
    </>
  );
}