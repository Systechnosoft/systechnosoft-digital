import { useState, useEffect } from "react";
import { MapPin, Mail, Phone, CheckCircle, Loader2 } from "lucide-react";
import { HeroBackground, HeroMotionSystem } from "@/components/HeroMotionSystem";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { BookConsultationTrigger } from "@/components/consultation/BookConsultationTrigger";
import { BackendHealthCheck } from "@/components/BackendHealthCheck";

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
  { icon: "📞", title: "24/7 Support", benefit: "Always here when you need us" },
  { icon: "🚀", title: "Fast Response", benefit: "Get back to you within 24 hours" },
  { icon: "💡", title: "Expert Guidance", benefit: "Tailored solutions for your needs" },
  { icon: "🤝", title: "Partnership Approach", benefit: "Long-term success together" },
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
      
      // Get backend URL from environment variable
      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
      const endpoint = `${BACKEND_URL}/api/contact`;
      
      console.log('[Contact] Submitting to:', endpoint);
      console.log('[Contact] Payload:', {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        role: formData.role,
        path: window.location.pathname
      });
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          message: formData.message,
          path: window.location.pathname
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      const result = await response.json();
      
      if (!result.ok) {
        throw new Error(result.error || 'Failed to send message');
      }
      
      setIsSubmitted(true);
      
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      console.error('[Contact] Submission error:', error);
      
      let errorTitle = "Submission Failed";
      let errorDescription = "There was an error sending your message. Please try again.";
      
      if (error instanceof Error) {
        if (error.message === 'Failed to fetch') {
          errorTitle = "Cannot Reach Email Server";
          errorDescription = `Backend is not reachable. Please ensure the backend is deployed and VITE_BACKEND_URL is configured correctly.`;
          console.error('[Contact] Backend URL:', import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000');
        } else if (error.message.includes('CORS')) {
          errorTitle = "Security Policy Error";
          errorDescription = "The server blocked the request. Please contact support.";
        } else {
          errorDescription = error.message;
        }
      }
      
      toast({
        title: errorTitle,
        description: errorDescription,
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
                  Ready to maximize innovation while minimizing code? Let's discuss how we can 
                  accelerate your digital transformation journey.
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
          {/* Backend Health Check (Dev Mode Only) */}
          <BackendHealthCheck url={import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-enterprise">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat font-bold">
                Send Us a Message
              </CardTitle>
              <CardDescription>
                Tell us about your project and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
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

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-enterprise">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat font-bold">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-medium text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      E-8, Railway Colony, Jagatpura<br />
                      Jaipur, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-medium text-foreground mb-1">Email</h3>
                    <a 
                      href="mailto:contact@systechnosoft.com" 
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      contact@systechnosoft.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-medium text-foreground mb-1">Phone</h3>
                    <a 
                      href="tel:+911234567890" 
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-enterprise">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat font-bold">
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">9:00 AM - 2:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-accent/10 rounded text-sm">
                  <p className="text-accent font-medium">24/7 Support Available</p>
                  <p className="text-muted-foreground text-xs mt-1">
                    For managed infrastructure clients
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}