import React, { useState } from 'react';
import { ExternalLink, Globe, LayoutDashboard, ShoppingBag, BarChart3, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const CaseStudyGrid: React.FC = () => {
  const [bhavaniTab, setBhavaniTab] = useState<'storefront' | 'dashboard' | 'orders'>('storefront');

  return (
    <div className="space-y-16">

      {/* ==================================================================== */}
      {/* CHAPTER 01 — BHAVANI CASHEWS (FEATURED FULL-STACK E-COMMERCE & ERP) */}
      {/* ==================================================================== */}
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-10 rounded-3xl bg-white border border-border-medium shadow-md hover-card-effect space-y-8 overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border-subtle">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-mono text-3xl font-black text-accent-primary">01</span>
              <span className="text-xs font-mono uppercase tracking-widest text-text-tertiary px-3 py-1 rounded bg-[#f5f3ef] border border-border-subtle font-bold">
                Full-Stack E-Commerce & Operations ERP
              </span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center gap-1">
                <Globe className="w-3 h-3" /> Live Production System
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
              Bhavani Cashews — E-Commerce Storefront & Admin Operations Hub
            </h3>
            <p className="text-xs sm:text-base text-text-secondary leading-relaxed">
              End-to-end commercial web application featuring customer storefront with category/roast filters, real-time inventory tracking, payment integration, and administrative revenue analytics dashboard.
            </p>
          </div>

          <a
            href="https://bhavani-cashews.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent-primary text-white font-bold text-xs hover:bg-accent-hover transition-all shadow-md shrink-0 self-start lg:self-center"
          >
            Explore Live Application <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Viewport View Switcher Tabs */}
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-2 border-b border-border-subtle">
            <span className="text-xs font-mono font-bold text-text-primary uppercase tracking-wider">
              INTERACTIVE VIEWPORT SWITCHER
            </span>
            <div className="flex items-center gap-1 bg-[#f5f3ef] p-1 rounded-xl border border-border-subtle">
              <button
                onClick={() => setBhavaniTab('storefront')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 min-h-[44px] transition-all ${
                  bhavaniTab === 'storefront' 
                    ? 'bg-accent-primary text-white font-bold shadow-sm' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" /> Storefront Catalog
              </button>
              <button
                onClick={() => setBhavaniTab('dashboard')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 min-h-[44px] transition-all ${
                  bhavaniTab === 'dashboard' 
                    ? 'bg-accent-primary text-white font-bold shadow-sm' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <LayoutDashboard className="w-3.5 h-3.5" /> Admin Overview
              </button>
              <button
                onClick={() => setBhavaniTab('orders')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 min-h-[44px] transition-all ${
                  bhavaniTab === 'orders' 
                    ? 'bg-accent-primary text-white font-bold shadow-sm' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" /> Orders Analytics
              </button>
            </div>
          </div>

          {/* Browser Window Frame */}
          <div className="rounded-2xl bg-[#1c1917] border border-border-medium overflow-hidden shadow-2xl group">
            <div className="px-4 py-3 bg-[#292524] border-b border-white/10 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <div className="px-4 py-1 rounded-lg bg-black/40 text-stone-300 border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                https://bhavani-cashews.onrender.com/
              </div>
              <span className="text-[10px] text-stone-400 font-bold hidden sm:inline flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> Anonymized & Secured
              </span>
            </div>

            <div className="relative overflow-hidden max-h-[380px] sm:max-h-[420px]">
              {bhavaniTab === 'storefront' && (
                <img 
                  src="/images/bhavani-storefront.png" 
                  alt="Bhavani Cashews Storefront Catalog Screenshot" 
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="750"
                  className="w-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
                />
              )}
              {bhavaniTab === 'dashboard' && (
                <img 
                  src="/images/bhavani-dashboard.png" 
                  alt="Bhavani Cashews Admin Operations Dashboard Screenshot" 
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="750"
                  className="w-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
                />
              )}
              {bhavaniTab === 'orders' && (
                <img 
                  src="/images/bhavani-orders-blurred.png" 
                  alt="Bhavani Cashews Orders Management Screenshot (Customer Names Anonymized)" 
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="750"
                  className="w-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
                />
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-[#fbf9f5] border border-border-subtle space-y-1">
            <span className="text-[10px] font-mono uppercase text-accent-primary font-bold block">Capabilities Built</span>
            <span className="text-xs font-bold text-text-primary block">Storefront & Admin ERP Dashboard</span>
          </div>
          <div className="p-4 rounded-xl bg-[#fbf9f5] border border-border-subtle space-y-1">
            <span className="text-[10px] font-mono uppercase text-accent-primary font-bold block">Core Functionality</span>
            <span className="text-xs font-bold text-text-primary block">Real-Time Inventory & Order Tracking</span>
          </div>
          <div className="p-4 rounded-xl bg-[#fbf9f5] border border-border-subtle space-y-1">
            <span className="text-[10px] font-mono uppercase text-accent-primary font-bold block">Privacy Protocol</span>
            <span className="text-xs font-bold text-text-primary block">Customer Data Anonymized & Protected</span>
          </div>
        </div>
      </motion.div>

      {/* ==================================================================== */}
      {/* CHAPTER 02 — AORR */}
      {/* ==================================================================== */}
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-8 rounded-2xl bg-white border border-border-medium shadow-sm hover-card-effect space-y-6 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="font-mono text-2xl font-black text-accent-primary">02</span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-text-tertiary px-2.5 py-0.5 rounded bg-[#f5f3ef] border border-border-subtle font-bold">
                Marine & Industrial Trade
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center gap-1">
                <Globe className="w-3 h-3" /> Live Site
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary leading-tight">
              AORR — Global Export Lead Platform
            </h3>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              An export-focused digital platform helping Indian manufacturers connect with global buyers in 50+ countries with an instant RFQ inquiry engine.
            </p>

            <div className="pt-1">
              <a
                href="https://aorr.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-primary text-white font-bold text-xs hover:bg-accent-hover transition-all shadow-sm"
              >
                Explore Live Site (aorr.in) <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl bg-[#1c1917] border border-border-medium overflow-hidden shadow-lg group">
              <div className="px-3 py-2 bg-[#292524] border-b border-white/10 flex items-center justify-between text-[10px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="px-3 py-0.5 rounded bg-black/40 text-stone-300 border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  https://aorr.in/
                </div>
              </div>

              <div className="relative overflow-hidden max-h-[300px] sm:max-h-[340px]">
                <img 
                  src="/images/aorr-screenshot.png" 
                  alt="AORR Official Website Screenshot" 
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="750"
                  className="w-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ==================================================================== */}
      {/* CHAPTER 03 — HAWKSBILL TECHNIK */}
      {/* ==================================================================== */}
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-8 rounded-2xl bg-white border border-border-medium shadow-sm hover-card-effect space-y-6 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-xl bg-[#1c1917] border border-border-medium overflow-hidden shadow-lg group">
              <div className="px-3 py-2 bg-[#292524] border-b border-white/10 flex items-center justify-between text-[10px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="px-3 py-0.5 rounded bg-black/40 text-stone-300 border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  https://www.hawksbilltechnik.in/
                </div>
              </div>

              <div className="relative overflow-hidden max-h-[300px] sm:max-h-[340px]">
                <img 
                  src="/images/hawksbill-screenshot.png" 
                  alt="Hawksbill Technik Official Website Screenshot" 
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="750"
                  className="w-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="font-mono text-2xl font-black text-accent-primary">03</span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-text-tertiary px-2.5 py-0.5 rounded bg-[#f5f3ef] border border-border-subtle font-bold">
                Instrumentation & Gas
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center gap-1">
                <Globe className="w-3 h-3" /> Live Site
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary leading-tight">
              Hawksbill Technik — ISO 9001 Gas Platform
            </h3>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Turning a complex ISO 9001 technical offering into a clear digital sales experience for precision valves, nitrogen/hydrogen gas generators, and sampling systems.
            </p>

            <div className="pt-1">
              <a
                href="https://www.hawksbilltechnik.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-primary text-white font-bold text-xs hover:bg-accent-hover transition-all shadow-sm"
              >
                Explore Live Site (hawksbilltechnik.in) <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ==================================================================== */}
      {/* CHAPTER 04 — GLOBUS TRAVEL SERVICES */}
      {/* ==================================================================== */}
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-8 rounded-2xl bg-white border border-border-medium shadow-sm hover-card-effect space-y-6 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="font-mono text-2xl font-black text-accent-primary">04</span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-text-tertiary px-2.5 py-0.5 rounded bg-[#f5f3ef] border border-border-subtle font-bold">
                Travel & Immigration
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center gap-1">
                <Globe className="w-3 h-3" /> Live Site
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary leading-tight">
              Globus Travel Services — Travel & Visa Portal
            </h3>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              A digital web application designed to simplify international travel inquiries with intuitive trip builder controls and transparent visa guidance across Canada, UK, Australia, Schengen & UAE.
            </p>

            <div className="pt-1">
              <a
                href="https://www.globustravelservices.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-primary text-white font-bold text-xs hover:bg-accent-hover transition-all shadow-sm"
              >
                Explore Live Site (globustravelservices.in) <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl bg-[#1c1917] border border-border-medium overflow-hidden shadow-lg group">
              <div className="px-3 py-2 bg-[#292524] border-b border-white/10 flex items-center justify-between text-[10px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="px-3 py-0.5 rounded bg-black/40 text-stone-300 border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  https://www.globustravelservices.in/
                </div>
              </div>

              <div className="relative overflow-hidden max-h-[300px] sm:max-h-[340px]">
                <img 
                  src="/images/globus-screenshot.png" 
                  alt="Globus Travel Services Official Website Screenshot" 
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="750"
                  className="w-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ==================================================================== */}
      {/* CHAPTER 05 — PHOENIX TECHNICAL SOLUTIONS (WITH REAL SCREENSHOT) */}
      {/* ==================================================================== */}
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-8 rounded-2xl bg-white border border-border-medium shadow-sm hover-card-effect space-y-6 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-xl bg-[#1c1917] border border-border-medium overflow-hidden shadow-lg group">
              <div className="px-3 py-2 bg-[#292524] border-b border-white/10 flex items-center justify-between text-[10px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="px-3 py-0.5 rounded bg-black/40 text-stone-300 border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  https://www.phoenixtechincalsolutions.com/
                </div>
              </div>

              <div className="relative overflow-hidden max-h-[300px] sm:max-h-[340px]">
                <img 
                  src="/images/phoenix-screenshot.png" 
                  alt="Phoenix Technical Solutions Official Website Screenshot" 
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="750"
                  className="w-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="font-mono text-2xl font-black text-accent-primary">05</span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-text-tertiary px-2.5 py-0.5 rounded bg-[#f5f3ef] border border-border-subtle font-bold">
                Piping & SCADA Automation
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center gap-1">
                <Globe className="w-3 h-3" /> Live Site
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary leading-tight">
              Phoenix Technical — Process Piping & Automation
            </h3>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Technical business website for Swagelok-certified engineers delivering high-pressure reactor systems, industrial piping, and SCADA automation.
            </p>

            <div className="pt-1">
              <a
                href="https://www.phoenixtechincalsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-primary text-white font-bold text-xs hover:bg-accent-hover transition-all shadow-sm"
              >
                Explore Live Site (phoenixtechincalsolutions.com) <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ==================================================================== */}
      {/* CHAPTER 06 — ARISE MACHINE TOOLS SOLUTIONS (WITH REAL SCREENSHOT) */}
      {/* ==================================================================== */}
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-8 rounded-2xl bg-white border border-border-medium shadow-sm hover-card-effect space-y-6 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="font-mono text-2xl font-black text-accent-primary">06</span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-text-tertiary px-2.5 py-0.5 rounded bg-[#f5f3ef] border border-border-subtle font-bold">
                Machinery & CNC Tooling
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center gap-1">
                <Globe className="w-3 h-3" /> Live Site
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary leading-tight">
              Arise Machine Tools — Precision CNC Catalog
            </h3>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              SEO-optimized digital product catalog for an authorized distributor of precision CNC cutting tools, tool holding systems, and industrial machining solutions.
            </p>

            <div className="pt-1">
              <a
                href="https://arisemachinetools.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-primary text-white font-bold text-xs hover:bg-accent-hover transition-all shadow-sm"
              >
                Explore Live Site (arisemachinetools.com) <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl bg-[#1c1917] border border-border-medium overflow-hidden shadow-lg group">
              <div className="px-3 py-2 bg-[#292524] border-b border-white/10 flex items-center justify-between text-[10px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="px-3 py-0.5 rounded bg-black/40 text-stone-300 border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  https://arisemachinetools.com/
                </div>
              </div>

              <div className="relative overflow-hidden max-h-[300px] sm:max-h-[340px]">
                <img 
                  src="/images/arise-screenshot.png" 
                  alt="Arise Machine Tools Official Website Screenshot" 
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="750"
                  className="w-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
};
