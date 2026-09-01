import React, { useState, useRef } from 'react';
import { Smartphone, CheckCircle2, TrendingUp, Cpu, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export const SeeItInActionMobileShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFrame, setActiveFrame] = useState<number>(2); // 2 is center default

  // Scroll Progress Scrubbing
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Scroll-linked transforms
  const headerOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0.3, 1]);
  const headerY = useTransform(scrollYProgress, [0.1, 0.3], [30, 0]);

  const frame1Y = useTransform(scrollYProgress, [0.2, 0.5], [45, 0]);
  const frame1Opacity = useTransform(scrollYProgress, [0.2, 0.45], [0.4, 1]);

  const frame2Y = useTransform(scrollYProgress, [0.25, 0.55], [70, 0]);
  const frame2Scale = useTransform(scrollYProgress, [0.25, 0.55], [0.95, 1.02]);
  const frame2Opacity = useTransform(scrollYProgress, [0.25, 0.5], [0.5, 1]);

  const frame3Y = useTransform(scrollYProgress, [0.3, 0.6], [45, 0]);
  const frame3Opacity = useTransform(scrollYProgress, [0.3, 0.55], [0.4, 1]);

  const chartHeight = useTransform(scrollYProgress, [0.4, 0.75], ['10%', '100%']);

  // Dynamic active focus switching based on scroll position
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.4) {
      setActiveFrame(1);
    } else if (latest >= 0.4 && latest < 0.65) {
      setActiveFrame(2);
    } else {
      setActiveFrame(3);
    }
  });

  return (
    <section 
      ref={sectionRef} 
      className="py-28 bg-[#f5f3ef] border-t border-border-subtle relative overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header with Scroll Fade Reveal */}
        <motion.div 
          style={{ opacity: headerOpacity, y: headerY }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border-subtle"
        >
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Real-World Product Showcase
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary">
              See It In Action
            </h2>
            <p className="text-base sm:text-xl text-text-secondary leading-relaxed">
              Custom mobile and web applications designed around how your team and customers actually operate — with intuitive UI woven quietly into every screen.
            </p>
          </div>

          {/* Top Right Platform Availability Badges */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-text-tertiary block font-bold text-left md:text-right">
              Available For iOS, Android & Web
            </span>
            <div className="flex items-center gap-2">
              <div className="px-3.5 py-2 rounded-xl bg-white border border-border-medium flex items-center gap-2 text-xs font-mono text-text-primary shadow-sm font-semibold">
                <Smartphone className="w-4 h-4 text-accent-primary" />
                iOS & Android
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-white border border-border-medium flex items-center gap-2 text-xs font-mono text-text-primary shadow-sm font-semibold">
                <Cpu className="w-4 h-4 text-accent-primary" />
                Web Portals
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 Smartphone Mockup Devices with Scroll-Driven Progressive Assembly */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          
          {/* FRAME 01: CAPTURE */}
          <motion.div
            style={{ y: frame1Y, opacity: frame1Opacity }}
            whileHover={{ y: -10, scale: 1.02 }}
            onClick={() => setActiveFrame(1)}
            className={`cursor-pointer transition-all duration-300 ${
              activeFrame === 1 ? 'ring-2 ring-accent-primary rounded-[42px] shadow-[0_25px_50px_rgba(79,70,229,0.2)]' : 'opacity-95 hover:opacity-100'
            }`}
          >
            <div className="w-full max-w-[280px] mx-auto h-[540px] rounded-[40px] bg-[#ffffff] border-[7px] border-[#292524] shadow-xl p-4 flex flex-col justify-between relative overflow-hidden">
              {/* Dynamic Island Notch */}
              <div className="w-24 h-4 bg-[#292524] rounded-full mx-auto mb-3 shrink-0" />
              
              {/* Screen Content: Capture */}
              <div className="flex-1 space-y-4 pt-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-accent-primary font-bold">AISYNC MOBILE</span>
                  <span className="text-[9px] font-mono text-text-tertiary">9:41 AM</span>
                </div>

                <div className="space-y-1">
                  <span className="text-sm font-bold text-[#1c1917] block">New Client Inquiry</span>
                  <p className="text-[10px] text-[#57534e]">Capture lead inquiries instantly on mobile.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#fbf9f5] border border-[#e7e5e4] space-y-2">
                  <span className="text-[9px] font-mono text-[#78716c] block font-semibold">CLIENT INFORMATION</span>
                  <div className="p-2 rounded bg-white text-[10px] font-mono text-[#1c1917] border border-[#e7e5e4]">
                    Name: [Sample Partner]
                  </div>
                  <div className="p-2 rounded bg-white text-[10px] font-mono text-[#1c1917] border border-[#e7e5e4]">
                    Service: App Development
                  </div>
                  <div className="p-2 rounded bg-accent-primary text-[10px] font-mono text-white text-center font-semibold shadow-sm">
                    Submit Inquiry →
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-[10px] text-emerald-800 font-mono font-medium">Syncs automatically to cloud</span>
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div className="h-1 bg-[#292524]/30 rounded-full w-20 mx-auto mt-2 shrink-0" />
            </div>

            {/* Label Below */}
            <div className="text-center pt-6 space-y-1">
              <span className="text-xs font-mono font-bold text-accent-primary">01</span>
              <h3 className="text-lg font-bold text-text-primary">Capture</h3>
              <p className="text-xs text-text-secondary">Seamless mobile data entry & client forms.</p>
            </div>
          </motion.div>

          {/* FRAME 02: MANAGE (CENTER HIGHLIGHT - SCROLL LIFTED) */}
          <motion.div
            style={{ y: frame2Y, scale: frame2Scale, opacity: frame2Opacity }}
            whileHover={{ y: -10, scale: 1.04 }}
            onClick={() => setActiveFrame(2)}
            className={`cursor-pointer transition-all duration-300 ${
              activeFrame === 2 ? 'ring-4 ring-accent-primary rounded-[42px] shadow-[0_30px_60px_rgba(79,70,229,0.3)]' : 'opacity-95 hover:opacity-100'
            }`}
          >
            <div className="w-full max-w-[280px] mx-auto h-[560px] rounded-[40px] bg-[#ffffff] border-[7px] border-accent-primary shadow-2xl p-4 flex flex-col justify-between relative overflow-hidden">
              {/* Dynamic Island Notch */}
              <div className="w-24 h-4 bg-[#292524] rounded-full mx-auto mb-3 shrink-0 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              </div>
              
              {/* Screen Content: Manage */}
              <div className="flex-1 space-y-4 pt-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-accent-primary font-bold">OPERATIONS CORE</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">Live</span>
                </div>

                <div className="space-y-1">
                  <span className="text-sm font-bold text-[#1c1917] block">Active Workflow Tracker</span>
                  <p className="text-[10px] text-[#57534e]">Real-time status updates across teams.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#fbf9f5] border border-[#e7e5e4] space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[#1c1917] font-semibold">Workflow #104</span>
                    <span className="text-emerald-700 font-bold">In Progress</span>
                  </div>
                  <div className="w-full bg-[#e7e5e4] rounded-full h-1.5 overflow-hidden">
                    <div className="bg-accent-primary h-full w-3/4 rounded-full" />
                  </div>
                  <span className="text-[9px] font-mono text-[#78716c] block">Automated Dispatch Complete</span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-[#78716c] block font-semibold">Automated Triggers</span>
                  <div className="p-2 rounded-lg bg-white border border-[#e7e5e4] flex items-center justify-between text-[10px] text-[#57534e]">
                    <span>SMS Notification Sent</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary" />
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-[#e7e5e4] flex items-center justify-between text-[10px] text-[#57534e]">
                    <span>CRM Record Updated</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary" />
                  </div>
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div className="h-1 bg-[#292524]/30 rounded-full w-20 mx-auto mt-2 shrink-0" />
            </div>

            {/* Label Below */}
            <div className="text-center pt-6 space-y-1">
              <span className="text-xs font-mono font-bold text-accent-primary">02</span>
              <h3 className="text-lg font-bold text-text-primary">Manage</h3>
              <p className="text-xs text-text-secondary">Automated workflow tracking & status alerts.</p>
            </div>
          </motion.div>

          {/* FRAME 03: INSIGHTS (SCROLL PROGRESSIVE BAR CHART) */}
          <motion.div
            style={{ y: frame3Y, opacity: frame3Opacity }}
            whileHover={{ y: -10, scale: 1.02 }}
            onClick={() => setActiveFrame(3)}
            className={`cursor-pointer transition-all duration-300 ${
              activeFrame === 3 ? 'ring-2 ring-accent-primary rounded-[42px] shadow-[0_25px_50px_rgba(79,70,229,0.2)]' : 'opacity-95 hover:opacity-100'
            }`}
          >
            <div className="w-full max-w-[280px] mx-auto h-[540px] rounded-[40px] bg-[#ffffff] border-[7px] border-[#292524] shadow-xl p-4 flex flex-col justify-between relative overflow-hidden">
              {/* Dynamic Island Notch */}
              <div className="w-24 h-4 bg-[#292524] rounded-full mx-auto mb-3 shrink-0" />
              
              {/* Screen Content: Insights */}
              <div className="flex-1 space-y-4 pt-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-accent-primary font-bold">ANALYTICS HUB</span>
                  <span className="text-[9px] font-mono text-text-tertiary">Weekly</span>
                </div>

                <div className="space-y-1">
                  <span className="text-sm font-bold text-[#1c1917] block">Performance Metrics</span>
                  <p className="text-[10px] text-[#57534e]">Clear operational visibility on the go.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#fbf9f5] border border-[#e7e5e4] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#78716c]">Efficiency Gain</span>
                    <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +28%
                    </span>
                  </div>
                  {/* Scroll-Driven Bar Chart Growth */}
                  <div className="h-16 flex items-end justify-between gap-1.5 pt-2">
                    <motion.div style={{ height: chartHeight }} className="w-full bg-accent-primary/30 rounded-t" />
                    <motion.div style={{ height: chartHeight }} className="w-full bg-accent-primary/50 rounded-t" />
                    <motion.div style={{ height: chartHeight }} className="w-full bg-accent-primary rounded-t" />
                    <motion.div style={{ height: chartHeight }} className="w-full bg-accent-primary/80 rounded-t" />
                    <motion.div style={{ height: chartHeight }} className="w-full bg-accent-primary rounded-t" />
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-[#e7e5e4] space-y-1 shadow-sm">
                  <span className="text-[9px] font-mono text-[#78716c] block">SYSTEM AUDIT</span>
                  <span className="text-[10px] font-mono text-[#1c1917] block font-semibold">Zero Downtime Verified</span>
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div className="h-1 bg-[#292524]/30 rounded-full w-20 mx-auto mt-2 shrink-0" />
            </div>

            {/* Label Below */}
            <div className="text-center pt-6 space-y-1">
              <span className="text-xs font-mono font-bold text-accent-primary">03</span>
              <h3 className="text-lg font-bold text-text-primary">Insights</h3>
              <p className="text-xs text-text-secondary">Real-time business performance & analytics.</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
