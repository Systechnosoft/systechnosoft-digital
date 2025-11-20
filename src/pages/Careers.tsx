import { Helmet } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
import { 
  Users, Globe, TrendingUp, Heart, Target, Award, BookOpen, Coffee, Briefcase,
  ArrowRight, Wifi, GraduationCap, MapPin, Clock,
  Code, Mail, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const HeroBackground = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className={cn("relative isolate overflow-visible bg-white", className)} style={{ contain: 'paint' }}>
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(229,38,41,0.1),transparent)]" />
        {!prefersReducedMotion && (
          <div className="absolute inset-0 hero-conic-rotate" style={{ backgroundImage: `conic-gradient(from 0deg at 50% 50%, transparent, hsl(var(--primary)), transparent)`, backgroundSize: "400px 400px" }} />
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-12 z-[1] bg-gradient-to-b from-white/0 to-white pointer-events-none" aria-hidden="true" />
      <div className="relative z-[2]">{children}</div>
    </div>
  );
};

export default function Careers() {
  const shouldReduceMotion = useReducedMotion();

  const values = [
    { icon: Sparkles, title: "Innovation", description: "We encourage bold ideas and creative problem-solving to drive client success." },
    { icon: Users, title: "Collaboration", description: "Cross-functional teams work together to deliver exceptional results." },
    { icon: TrendingUp, title: "Growth", description: "Continuous learning and career development are core to our culture." },
    { icon: Heart, title: "Flexibility", description: "Remote-first environment with work-life balance built in." }
  ];

  const perks = [
    { icon: Globe, title: "Client Exposure", description: "Collaborate with top-tier global clients across multiple industries." },
    { icon: Code, title: "Technology Stack", description: "Gain hands-on experience with the latest low-code, AI, and cloud platforms." },
    { icon: Coffee, title: "Work-Life Balance", description: "Flexible hours and a people-first culture that respects your time." },
    { icon: BookOpen, title: "Learning & Development", description: "Annual learning budget and access to premium courses and certifications." },
    { icon: Award, title: "Career Growth", description: "Clear career paths with mentorship and promotion opportunities." },
    { icon: Target, title: "Impact-Driven Work", description: "Work on meaningful projects that make a real difference for clients." }
  ];

  return (
    <>
      <Helmet>
        <title>Careers at Systechnosoft | Join Our Global Team</title>
        <meta name="description" content="Build your career with Systechnosoft. Remote-first culture, continuous learning, and global project exposure. Explore open roles in Cloud, AI, and Low-code." />
      </Helmet>

      <HeroBackground>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight font-montserrat">Careers at Systechnosoft</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-inter">Innovate globally. Grow with purpose. Join a team where bold ideas, collaboration, and continuous learning thrive.</p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full bg-muted/50 text-foreground border border-border"><Wifi className="w-4 h-4 mr-2" />Remote-first culture</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full bg-muted/50 text-foreground border border-border"><GraduationCap className="w-4 h-4 mr-2" />Learning-driven growth</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full bg-muted/50 text-foreground border border-border"><Globe className="w-4 h-4 mr-2" />Global project exposure</Badge>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="bg-[#E52629] hover:bg-[#C41E1E] text-white px-8 py-6 text-lg font-semibold"><a href="#open-positions">See Open Positions<ArrowRight className="ml-2 h-5 w-5" /></a></Button>
                <Button size="lg" variant="outline" asChild className="border-2 border-[#E52629] text-[#E52629] hover:bg-[#E52629] hover:text-white px-8 py-6 text-lg font-semibold"><a href="#why-join">Why Work With Us</a></Button>
              </div>
            </motion.div>
            <motion.div initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-gray-400 p-8"><Briefcase className="w-24 h-24 mx-auto mb-4" /><p className="text-lg font-semibold">Hero Image Placeholder</p></div>
            </motion.div>
          </div>
        </div>
      </HeroBackground>

      <section id="why-join" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-6 text-[#1C1C1C]">Why Join Systechnosoft?</h2>
            <p className="text-lg text-[#3C3C3C] mb-6 leading-relaxed font-inter">At Systechnosoft, we're on a mission to transform businesses through cutting-edge technology. We believe in empowering our people with the tools, autonomy, and support they need to thrive—both professionally and personally.</p>
            <blockquote className="text-xl italic text-[#E52629] border-l-4 border-[#E52629] pl-6 mt-8">"We don't just build solutions—we build careers, relationships, and a culture where innovation meets impact."</blockquote>
            <p className="text-sm text-[#3C3C3C] mt-2">— Leadership Team, Systechnosoft</p>
          </motion.div>
        </div>
      </section>

      <section id="open-positions" className="py-20 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-4" id="careers-open-roles">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4 text-[#1C1C1C]">Open Positions</h2>
            <p className="text-lg text-[#3C3C3C] max-w-2xl mx-auto font-inter">Find your perfect role and apply today</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Kickstart Your Career\n(Freshers)", desc: "Looking for your first break in tech? We're hiring passionate minds eager to learn and grow.", url: "https://forms.gle/yJoMh9n1B7qLmcrU9" },
              { title: "Grow With Us\n(Experienced Professionals)", desc: "Already on your journey? Join our expert teams and work on exciting digital transformation projects.", url: "https://forms.gle/npBn4NWVtQ995KUA7" }
            ].map((job, i) => (
              <Card key={i} className="bg-white border-2 border-gray-200 loc-card-hover-primary h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl font-montserrat text-[#1C1C1C] whitespace-pre-line">{job.title}</CardTitle>
                  <CardDescription className="text-base text-[#3C3C3C] mt-2 min-h-[3rem] flex items-center">{job.desc}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-end">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-[#3C3C3C]">
                      <MapPin className="h-4 w-4 text-[#E52629]" />
                      <span>Hybrid (India)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#3C3C3C]">
                      <Clock className="h-4 w-4 text-[#E52629]" />
                      <span>Full-Time</span>
                    </div>
                  </div>
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg"
                    className="w-full border-[#E52629] text-[#E52629] hover:bg-[#E52629] hover:text-white focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 transition-colors"
                  >
                    <a href={job.url} target="_blank" rel="noopener noreferrer">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white"><div className="max-w-6xl mx-auto px-4" id="careers-values"><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12"><h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4 text-[#1C1C1C]">Our Values & Culture</h2><p className="text-lg text-[#3C3C3C] max-w-2xl mx-auto font-inter">The pillars that guide everything we do</p></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{values.map((v, i) => <Card key={i} className="bg-white border-2 border-gray-200 loc-card-hover-primary text-center"><CardContent className="p-8"><v.icon className="w-12 h-12 text-[#E52629] mx-auto mb-4" /><h3 className="text-xl font-bold font-montserrat text-[#1C1C1C] mb-3">{v.title}</h3><p className="text-sm text-[#3C3C3C] leading-relaxed font-inter">{v.description}</p></CardContent></Card>)}</div></div></section>

      <section className="py-20 bg-[#F5F5F5]"><div className="max-w-6xl mx-auto px-4" id="careers-perks"><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12"><h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4 text-[#1C1C1C]">Perks & Benefits</h2><p className="text-lg text-[#3C3C3C] max-w-2xl mx-auto font-inter">We invest in your growth and well-being</p></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{perks.map((p, i) => <Card key={i} className="bg-white border-2 border-gray-200 loc-card-hover-primary"><CardContent className="p-8 text-center"><p.icon className="w-12 h-12 text-[#E52629] mx-auto mb-4" /><h3 className="text-xl font-bold font-montserrat text-[#1C1C1C] mb-3">{p.title}</h3><p className="text-sm text-[#3C3C3C] leading-relaxed font-inter">{p.description}</p></CardContent></Card>)}</div></div></section>

      <section className="py-20 bg-[#E52629] text-white"><div className="max-w-4xl mx-auto px-4 text-center"><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}><Mail className="w-16 h-16 text-white mx-auto mb-6" /><h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-6 text-white">Don't See a Perfect Match?</h2><p className="font-inter text-xl text-white/95 mb-10">We're always looking for talented individuals who share our vision. Join our talent community and we'll reach out when the right opportunity arises.</p><a href="mailto:hr@systechnosoft.in" className="inline-flex items-center gap-2 text-2xl font-semibold text-white relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E52629] rounded"><Mail className="h-6 w-6" />hr@systechnosoft.in</a></motion.div></div></section>
    </>
  );
}
