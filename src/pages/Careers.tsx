import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
import { 
  Users, 
  Globe, 
  Lightbulb, 
  TrendingUp,
  Heart,
  Rocket,
  Target,
  Zap,
  Award,
  BookOpen,
  Coffee,
  Briefcase,
  ArrowRight,
  PlayCircle,
  PauseCircle,
  Wifi,
  GraduationCap,
  MapPin,
  Clock,
  DollarSign,
  Shield,
  Laptop,
  Cloud
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Shared Hero Background Animation Component
const HeroBackground = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className={cn("relative isolate overflow-visible bg-white", className)}
      style={{ contain: 'paint' }}
    >
      {/* Play/Pause Control */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label={isPaused ? "Play animation" : "Pause animation"}
      >
        {isPaused ? (
          <PlayCircle className="w-5 h-5 text-primary" />
        ) : (
          <PauseCircle className="w-5 h-5 text-primary" />
        )}
      </button>

      {/* Animated background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(229,38,41,0.1),transparent)]" />
        {!prefersReducedMotion && !isPaused && (
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `conic-gradient(from 0deg at 50% 50%, transparent, hsl(var(--primary)), transparent)`,
              backgroundSize: "400px 400px"
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        )}
      </div>
      
      {/* Bottom edge guard */}
      <div 
        className="absolute inset-x-0 bottom-0 h-12 z-[1] bg-gradient-to-b from-white/0 to-white pointer-events-none"
        aria-hidden="true"
      />
      
      <div className="relative z-[2]">
        {children}
      </div>
    </div>
  );
};

export default function Careers() {
  const shouldReduceMotion = useReducedMotion();

  // Open roles data
  const openRoles = [
    {
      title: "Senior Cloud Architect",
      department: "Infrastructure",
      location: "Remote (India)",
      type: "Full-time",
      icon: Cloud
    },
    {
      title: "Salesforce Developer",
      department: "Low-code Platforms",
      location: "Hybrid (Mumbai)",
      type: "Full-time",
      icon: Zap
    },
    {
      title: "AI/ML Engineer",
      department: "AI & Automation",
      location: "Remote (Global)",
      type: "Full-time",
      icon: Lightbulb
    },
    {
      title: "Full-Stack Developer",
      department: "Development",
      location: "Remote (India)",
      type: "Full-time",
      icon: Laptop
    }
  ];

  // Values data
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We encourage bold ideas and creative problem-solving to drive client success."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Cross-functional teams work together to deliver exceptional results."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuous learning and career development are core to our culture."
    },
    {
      icon: Globe,
      title: "Flexibility",
      description: "Remote-first environment with work-life balance built in."
    }
  ];

  // Perks data
  const perks = [
    {
      icon: Shield,
      title: "Comprehensive Health Coverage",
      description: "Medical, dental, and vision for you and your family"
    },
    {
      icon: Clock,
      title: "Flexible Time Off",
      description: "Generous PTO plus paid holidays"
    },
    {
      icon: BookOpen,
      title: "Learning Budget",
      description: "Annual stipend for courses, certifications, and conferences"
    },
    {
      icon: Laptop,
      title: "Remote-First",
      description: "Work from anywhere with the right setup"
    },
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Market-leading compensation and performance bonuses"
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Clear advancement paths and mentorship programs"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Senior DevOps Engineer",
      quote: "The learning opportunities here are unmatched. I've worked on cutting-edge cloud projects and earned multiple certifications with full company support.",
      avatar: "PS"
    },
    {
      name: "Rahul Mehta",
      role: "Salesforce Architect",
      quote: "What sets Systechnosoft apart is the team culture. We collaborate globally, tackle complex challenges, and celebrate wins together.",
      avatar: "RM"
    },
    {
      name: "Anjali Desai",
      role: "AI Solutions Lead",
      quote: "I've grown from a junior developer to leading AI initiatives in just three years. The mentorship and trust here are incredible.",
      avatar: "AD"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers at Systechnosoft | Join Our Global Team</title>
        <meta 
          name="description" 
          content="Build your career with Systechnosoft. Remote-first culture, continuous learning, and global project exposure. Explore open roles in Cloud, AI, and Low-code." 
        />
        <meta name="keywords" content="careers, jobs, IT jobs India, cloud jobs, AI jobs, remote work, Systechnosoft careers" />
      </Helmet>

      {/* Hero Section */}
      <HeroBackground>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Careers at Systechnosoft
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Innovate globally. Grow with purpose. Join a team where bold ideas, collaboration, and continuous learning thrive.
              </p>

              {/* Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full bg-muted/50 text-foreground border border-border">
                  <Wifi className="w-4 h-4 mr-2" />
                  Remote-first culture
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full bg-muted/50 text-foreground border border-border">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Learning-driven growth
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full bg-muted/50 text-foreground border border-border">
                  <Globe className="w-4 h-4 mr-2" />
                  Global project exposure
                </Badge>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a href="#open-roles">
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all duration-200 hover:scale-105"
                  >
                    See Open Positions
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <a href="#why-join">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10 transition-all duration-200"
                  >
                    Why Work With Us
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Right: Image Placeholder */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 aspect-square flex items-center justify-center border border-border shadow-lg">
                <div className="text-center p-8">
                  <Users className="w-24 h-24 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm">Hero Image Placeholder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </HeroBackground>

      {/* Why Join Systechnosoft */}
      <section id="why-join" className="py-16 lg:py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Join Systechnosoft
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Systechnosoft, we're not just building technology—we're shaping the future of enterprise IT. 
              Our mission is to empower organizations globally with innovative, scalable solutions. 
              As part of our team, you'll work on cutting-edge projects, collaborate with top talent, 
              and make a real impact from day one.
            </p>
            <div className="bg-muted/30 border-l-4 border-primary p-6 rounded-lg text-left">
              <p className="text-lg text-foreground italic mb-2">
                "Our people are our greatest asset. We invest in their growth, celebrate their achievements, 
                and create an environment where innovation flourishes."
              </p>
              <p className="text-sm text-muted-foreground font-semibold">
                — Leadership Team, Systechnosoft
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="py-16 lg:py-24 bg-muted/20 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our current openings and find the perfect role to advance your career.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {openRoles.map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-200 border-border rounded-2xl">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {role.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground mb-2">
                        {role.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {role.department}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {role.location}
                        </div>
                      </div>
                      <a href="/contact">
                        <Button 
                          variant="outline" 
                          className="w-full border-primary text-primary hover:bg-primary/10"
                        >
                          Apply Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values & Culture */}
      <section id="values" className="py-16 lg:py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values & Culture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These pillars guide everything we do and shape the way we work together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Employee Voices */}
      <section id="testimonials" className="py-16 lg:py-24 bg-muted/20 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Employee Voices
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our team members about their experiences and growth at Systechnosoft.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-border rounded-2xl hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section id="perks" className="py-16 lg:py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perks & Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We invest in our people with competitive compensation and comprehensive benefits.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {perks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-border rounded-2xl hover:shadow-lg transition-shadow duration-200">
                    <CardHeader>
                      <div className="p-3 bg-primary/10 rounded-lg w-fit mb-3">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-bold text-foreground">
                        {perk.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {perk.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Talent Community CTA */}
      <section id="talent-pool" className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Rocket className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Don't See a Perfect Match?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're always looking for talented individuals to join our team. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a href="/contact">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-all duration-200 hover:scale-105"
              >
                Send Us Your Resume
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
