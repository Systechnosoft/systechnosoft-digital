import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Zap, 
  Shield, 
  Search, 
  Smartphone,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Globe,
  Layers,
  Lock,
  Gauge
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeroMotionSystem } from "@/components/HeroMotionSystem";

const heroCards = [
  {
    icon: "🌐",
    title: "Modern Web Apps",
    benefit: "React, Next.js, TypeScript for blazing-fast, scalable applications"
  },
  {
    icon: "⚡",
    title: "Performance First",
    benefit: "Optimized code, CDN delivery, <50ms load times for superior UX"
  },
  {
    icon: "🔒",
    title: "Secure & Reliable",
    benefit: "Enterprise security, 99.9% uptime, automated backups"
  }
];

const WebDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>Web Development Services | Custom Web Applications | SysTechnoSoft</title>
        <meta 
          name="description" 
          content="Professional web development services including custom web applications, responsive design, and modern web solutions. Build scalable, secure, and high-performance websites." 
        />
        <meta name="keywords" content="web development, custom web applications, responsive design, web solutions, frontend development, backend development" />
        <link rel="canonical" href="https://systechnosoft.com/services/web-development" />
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)] opacity-30" />
          
          <div className="container mx-auto px-4 py-16 md:py-24 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                  Custom Web Development Solutions
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Build powerful, scalable web applications that drive business growth. From responsive websites to complex web platforms, we deliver solutions that perform.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/services">View All Services</Link>
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-8">
                  <div>
                    <div className="text-3xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">50ms</div>
                    <div className="text-sm text-muted-foreground">Load Time</div>
                  </div>
                </div>
              </motion.div>

              <HeroMotionSystem 
                cards={heroCards}
                ariaLabel="Web Development Service Highlights"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
                Why Choose Our Web Development Services
              </h2>
              <p className="text-lg text-muted-foreground">
                We combine cutting-edge technology with proven methodologies to deliver exceptional web solutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Code2 className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Modern Technology Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Built with React, Next.js, TypeScript, and other cutting-edge frameworks for maximum performance and scalability.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Smartphone className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Fully Responsive Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every website we build works flawlessly across all devices and screen sizes, ensuring optimal user experience.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Search className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>SEO Optimized</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Built-in SEO best practices ensure your website ranks well in search engines and reaches your target audience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Capabilities Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
                Our Web Development Capabilities
              </h2>
              <p className="text-lg text-muted-foreground">
                End-to-end web development services to bring your vision to life
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Globe,
                  title: "Custom Web Applications",
                  description: "Tailored web solutions built to your exact specifications and business requirements"
                },
                {
                  icon: Palette,
                  title: "UI/UX Design",
                  description: "Beautiful, intuitive interfaces that engage users and drive conversions"
                },
                {
                  icon: Layers,
                  title: "Frontend Development",
                  description: "Modern, responsive frontends using React, Vue, Angular, and other frameworks"
                },
                {
                  icon: Code2,
                  title: "Backend Development",
                  description: "Robust server-side solutions with Node.js, Python, .NET, and more"
                },
                {
                  icon: Zap,
                  title: "Performance Optimization",
                  description: "Lightning-fast load times and smooth interactions for better user experience"
                },
                {
                  icon: Shield,
                  title: "Security Implementation",
                  description: "Enterprise-grade security measures to protect your data and users"
                }
              ].map((capability, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <capability.icon className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="text-xl">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{capability.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
                Our Development Process
              </h2>
              <p className="text-lg text-muted-foreground">
                A structured approach that ensures quality, timely delivery, and exceptional results
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="discovery" className="border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                      <span className="font-semibold text-lg">Discovery & Planning</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6 pl-14 text-muted-foreground">
                    We start by understanding your business goals, target audience, and technical requirements. This phase includes stakeholder interviews, competitive analysis, and detailed project planning.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="design" className="border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                      <span className="font-semibold text-lg">Design & Prototyping</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6 pl-14 text-muted-foreground">
                    Our design team creates wireframes, mockups, and interactive prototypes. We iterate based on your feedback to ensure the design aligns with your vision and brand identity.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="development" className="border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                      <span className="font-semibold text-lg">Development & Testing</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6 pl-14 text-muted-foreground">
                    Using agile methodologies, we build your web application with regular sprints and demos. Continuous testing ensures quality at every stage of development.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="launch" className="border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">4</div>
                      <span className="font-semibold text-lg">Launch & Support</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6 pl-14 text-muted-foreground">
                    We handle deployment, monitoring, and provide ongoing support and maintenance. Your success is our priority, even after launch.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Performance & Security Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <Gauge className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-montserrat font-bold text-2xl md:text-3xl mb-4">
                  Performance Optimization
                </h3>
                <p className="text-muted-foreground mb-6">
                  We optimize every aspect of your web application for speed and efficiency:
                </p>
                <ul className="space-y-3">
                  {[
                    "Code splitting and lazy loading",
                    "Image optimization and compression",
                    "CDN integration for global delivery",
                    "Database query optimization",
                    "Caching strategies"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Lock className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-montserrat font-bold text-2xl md:text-3xl mb-4">
                  Security Best Practices
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your data and users are protected with enterprise-grade security:
                </p>
                <ul className="space-y-3">
                  {[
                    "HTTPS/SSL encryption",
                    "SQL injection prevention",
                    "Cross-site scripting (XSS) protection",
                    "CSRF token implementation",
                    "Regular security audits"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="timeline" className="border rounded-lg px-6 bg-background">
                  <AccordionTrigger>How long does it take to build a website?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Project timelines vary based on complexity. A simple website typically takes 4-6 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during the planning phase.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cost" className="border rounded-lg px-6 bg-background">
                  <AccordionTrigger>What is the cost of web development?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Costs depend on project scope, features, and complexity. We offer flexible pricing models and provide detailed quotes after understanding your requirements. Contact us for a free consultation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="maintenance" className="border rounded-lg px-6 bg-background">
                  <AccordionTrigger>Do you provide ongoing maintenance?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we offer comprehensive maintenance and support packages including updates, security patches, performance monitoring, and feature enhancements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="technologies" className="border rounded-lg px-6 bg-background">
                  <AccordionTrigger>What technologies do you use?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We use modern, proven technologies including React, Next.js, Node.js, TypeScript, Python, .NET, and various databases. We select the best tech stack based on your specific requirements.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
                Ready to Build Your Web Application?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your project and create a web solution that drives results
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WebDevelopment;
