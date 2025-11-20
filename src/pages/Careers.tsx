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

      <section data-page="careers" className="sf-hero careers-hero relative isolate overflow-hidden bg-white">
        {/* Animated background */}
        <div className="sf-hero__bg absolute inset-0 z-0 opacity-[0.08] pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(229,38,41,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(0,122,255,0.1),transparent_50%)]" />
          <motion.div
            className="absolute inset-0"
            style={{ backgroundImage: `conic-gradient(from 0deg at 50% 50%, transparent, hsl(var(--primary)), transparent)` }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="sf-hero__inner container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center max-w-[1200px] mx-auto">
            {/* Left Column: Text Content */}
            <div className="space-y-6 max-w-[44rem]">
              <motion.h1
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-montserrat"
              >
                Your Future Starts Here @ <span className="text-[#E52629]">Systechnosoft</span>
              </motion.h1>

              <motion.p
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-prose font-inter"
              >
                Innovate globally. Grow with purpose. Join a team where bold ideas, collaboration, and continuous learning thrive.
              </motion.p>

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="flex flex-wrap gap-2.5"
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-background/70 backdrop-blur-sm border border-border/40 hover:bg-background/90 transition-colors">
                  <Wifi className="w-3.5 h-3.5 mr-1.5 text-primary" /> Work From Anywhere
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-background/70 backdrop-blur-sm border border-border/40 hover:bg-background/90 transition-colors">
                  <GraduationCap className="w-3.5 h-3.5 mr-1.5 text-primary" /> Grow Every Day
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-background/70 backdrop-blur-sm border border-border/40 hover:bg-background/90 transition-colors">
                  <Globe className="w-3.5 h-3.5 mr-1.5 text-primary" /> Build Global Impact
                </Badge>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Button size="lg" className="group" asChild>
                  <a href="#positions">
                    See Open Positions
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#why-join">Why Work With Us</a>
                </Button>
              </motion.div>
            </div>

            {/* Right Column: Hero Image with Glow */}
            <motion.figure
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative isolate group"
            >
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 aspect-[4/3] flex items-center justify-center border border-[#E6E6E6] shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[-6px] group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]">
                <div className="text-center text-gray-400 p-8">
                  <Briefcase className="w-24 h-24 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Careers Hero Image</p>
                </div>
              </div>
              {/* Subtle brand glow */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 rounded-[22px] blur-lg opacity-[.18] -z-10"
                style={{
                  background: `radial-gradient(40% 40% at 20% 30%, #E52629 10%, transparent 70%), radial-gradient(35% 35% at 80% 70%, #007AFF 10%, transparent 70%)`
                }}
              />
            </motion.figure>
          </div>
        </div>
      </section>

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
