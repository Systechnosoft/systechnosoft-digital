import { useState } from "react";
import { MapPin, Mail, Phone, CheckCircle } from "lucide-react";
import { HeroBackground, HeroMotionSystem } from "@/components/HeroMotionSystem";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();

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

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-montserrat font-bold text-foreground mb-4">
            Thank You for Your Interest
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We've received your message and will get back to you within 24 hours.
          </p>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              <strong>Next Steps:</strong>
            </p>
            <ul className="text-left max-w-md mx-auto space-y-2">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Initial consultation call within 24-48 hours</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Digital readiness assessment if applicable</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Customized solution proposal</span>
              </li>
            </ul>
          </div>
          <div className="mt-8 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              Want to schedule immediately? 
              <br />
              <Button variant="link" className="p-0 h-auto text-accent">
                Book a calendar slot here (placeholder)
              </Button>
            </p>
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
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
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