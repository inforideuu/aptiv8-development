import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, CheckCircle2, ArrowRight, Smartphone, Mic, BookOpen, 
  ClipboardCheck, Bot, FileText, ChevronRight, Layers, ShieldCheck, 
  Zap, TrendingUp, DollarSign, Cpu, Clock, Award, Star, CheckSquare,
  Activity, MapPin, Fingerprint, History, PlusCircle, RefreshCw, Wrench,
  Globe, Bell, BarChart3, Navigation, Workflow, Shield, Monitor, Coins, Check, FileCheck, ArrowUpRight,
  CheckCircle, Users, BarChart2, Calendar, Settings, Sparkle
} from 'lucide-react';
import Reveal3D from '../components/Reveal3D';

export default function A8CmmsPage() {
  return (
    <div className="relative pt-20 bg-bg-primary text-text-primary min-h-screen font-sans selection:bg-[#e30613] selection:text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative py-36 px-4 bg-cover bg-center overflow-hidden flex items-center justify-center min-h-[calc(100vh-80px)] w-full"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80')" }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-slate-950/60 z-0 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full flex flex-col items-center">
          {/* Subtitle in White uppercase */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[13px] sm:text-[15px] font-bold font-mono tracking-[0.2em] text-white uppercase mb-4 block"
          >
            BIM Consultancy | BIM Manpower | BIM Training | BIM Shared Object Library | IDD | IFM
          </motion.span>

          {/* Main Headline in Times New Roman with White and Red */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Aptiv8 <span className="text-[#e30613]">CMMS</span>
          </motion.h1>

          {/* Centered description text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Enterprise Computerized Maintenance Management System delivering AI Fault Reporting, Voice Dispatch, AI Knowledge Management, Smart Checklists, and AI Assistants.
          </motion.p>
        </div>
      </section>

      {/* SECTION 1: TOP RATED CMMS SOFTWARE IN SINGAPORE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/50 dark:from-bg-secondary dark:via-bg-primary dark:to-bg-secondary border-b border-border-color relative overflow-hidden">
        <div className="absolute top-8 right-12 w-32 h-32 opacity-20 pointer-events-none hidden sm:block bg-[radial-gradient(#e30613_1px,transparent_1px)] [background-size:12px_12px]" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal3D direction="up">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/90 dark:bg-red-950/40 text-[#e30613] text-xs font-bold font-sans">
                  <span>★</span>
                  <span>Trusted by Businesses in Singapore</span>
                </div>
              </Reveal3D>

              <Reveal3D direction="up" delay={0.1}>
                <div className="space-y-3">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                    Top Rated CMMS Software in <span className="text-[#e30613]">Singapore</span>
                  </h2>
                  <div className="w-14 h-1 bg-[#e30613] rounded-full" />
                </div>
              </Reveal3D>

              <Reveal3D direction="up" delay={0.15}>
                <p className="text-xs font-mono font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                  ADVANCED MAINTENANCE EXCELLENCE WITH CRYOTOS
                </p>
              </Reveal3D>

              <Reveal3D direction="up" delay={0.2}>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans font-medium">
                  Cryotos CMMS is the leading all-in-one preventive maintenance management, helping organizations achieve greater asset uptime, reduce downtime, and extend equipment life. With a focus on intuitive design, real-time tracking, and powerful analytics, Cryotos empowers businesses in Singapore and beyond to maintain operational excellence across every facility.
                </p>
              </Reveal3D>

              <Reveal3D direction="up" delay={0.25}>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#e30613] hover:bg-[#c00510] text-white font-bold text-sm tracking-wide shadow-lg shadow-red-500/25 hover:scale-105 transition-all cursor-pointer"
                  >
                    <span>Request for Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <ShieldCheck className="w-4 h-4 text-slate-400" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </Reveal3D>

              {/* 4 Feature Cards */}
              <Reveal3D direction="up" delay={0.3}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-red-50/60 dark:bg-slate-900/60 border border-red-100 dark:border-slate-800 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-red-100 text-[#e30613] flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-base font-extrabold text-slate-900 dark:text-white block font-display">500+ Assets</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">of Preventive Services</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-purple-50/60 dark:bg-slate-900/60 border border-purple-100 dark:border-slate-800 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-base font-extrabold text-slate-900 dark:text-white block font-display">2000+ Active</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Users</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-slate-900/60 border border-emerald-100 dark:border-slate-800 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-base font-extrabold text-slate-900 dark:text-white block font-display">270% Increase</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">in ROI</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-slate-900/60 border border-amber-100 dark:border-slate-800 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-base font-extrabold text-slate-900 dark:text-white block font-display">100% Digital</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Transformation</span>
                    </div>
                  </div>
                </div>
              </Reveal3D>

              {/* Bottom Quote Banner */}
              <Reveal3D direction="up" delay={0.35}>
                <div className="p-4 rounded-2xl bg-purple-50/80 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-purple-600 dark:text-purple-400 text-xl font-serif font-black">“</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      No.1 Top 10 Global EAM Products by G2 Users
                    </span>
                  </div>
                  <div className="flex text-amber-500 text-xs tracking-tight shrink-0">
                    ★★★★★
                  </div>
                </div>
              </Reveal3D>
            </div>

            {/* Right Column: Clean White Dashboard Mockup */}
            <div className="lg:col-span-5">
              <Reveal3D direction="left">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-2xl space-y-5 text-slate-900 dark:text-white">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3.5">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#e30613] text-white text-xs font-bold font-mono flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        Cryotos
                      </span>
                      <span className="px-3 py-1 rounded-full bg-red-100 text-[#e30613] text-[11px] font-bold">
                        Work Orders
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-medium">
                        Preventive
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold font-mono">
                      ● System Online
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="p-3 rounded-2xl bg-red-50/70 dark:bg-slate-800/60 border border-red-100 dark:border-slate-800 text-center">
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase block">Open Orders</span>
                      <span className="text-lg font-black text-red-600 dark:text-red-400 font-mono">12</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-blue-50/70 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-800 text-center">
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase block">In Progress</span>
                      <span className="text-lg font-black text-blue-600 dark:text-blue-400 font-mono">8</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-emerald-50/70 dark:bg-slate-800/60 border border-emerald-100 dark:border-slate-800 text-center">
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase block">Completed Today</span>
                      <span className="text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono">15</span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-700 dark:text-slate-300">
                      <span>Recent Work Orders</span>
                      <span className="text-[11px] text-blue-600 dark:text-blue-400 flex items-center gap-0.5 cursor-pointer">View All →</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      {[
                        { title: 'AC Unit Maintenance', loc: 'Building A -- Floor 3', status: 'In Progress', color: 'bg-blue-100 text-blue-700', dot: 'bg-blue-500', time: '2h ago' },
                        { title: 'Generator Inspection', loc: 'Power House', status: 'Pending', color: 'bg-amber-100 text-amber-700', dot: 'bg-amber-500', time: '4h ago' },
                        { title: 'Fire Alarm Check', loc: 'Building B -- Ground Floor', status: 'Completed', color: 'bg-emerald-100 text-emerald-700', dot: 'bg-emerald-500', time: '6h ago' },
                        { title: 'Water Pump Service', loc: 'Utility Room', status: 'In Progress', color: 'bg-blue-100 text-blue-700', dot: 'bg-blue-500', time: '8h ago' }
                      ].map((item, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <span className={`w-2 h-2 rounded-full ${item.dot}`} />
                            <div>
                              <span className="font-bold text-slate-900 dark:text-white block text-xs">{item.title}</span>
                              <span className="text-[10px] text-slate-400 block">{item.loc}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${item.color}`}>
                              {item.status}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">{item.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white block">Keep Your Assets Running</span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Prevent downtime. Improve efficiency. Maximize value.</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
              </Reveal3D>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: HOW DOES CRYOTOS CMMS SOFTWARE SIMPLIFY YOUR MAINTENANCE OPERATIONS? */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-bg-primary border-b border-border-color relative">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Top Pill & Headline */}
          <Reveal3D direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100/80 dark:bg-red-950/40 text-[#e30613] text-xs font-bold font-sans">
                <span className="text-sm">⚙️</span>
                <span>Maintenance Operations Made Simple</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                How Does Cryotos CMMS Software Simplify Your Maintenance Operations?
              </h2>

              <div className="w-12 h-1 bg-[#e30613] rounded-full mx-auto" />

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                From work order management to asset tracking, <strong className="text-slate-900 dark:text-white font-bold">Cryotos CMMS</strong> brings <strong className="text-slate-900 dark:text-white font-bold">everything together</strong> — helping you work smarter, reduce downtime and achieve operational excellence.
              </p>
            </div>
          </Reveal3D>

          {/* 6 Pastel Floating Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <Reveal3D direction="up" delay={0.05}>
              <div className="p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all flex items-center justify-between gap-5 group cursor-default">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-100 text-[#e30613] flex items-center justify-center shrink-0 shadow-xs">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-display">
                      Increased Equipment Reliability
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      Minimize unexpected breakdowns and keep your assets running at peak performance with planned and preventive maintenance.
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-red-100 text-[#e30613] flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Reveal3D>

            {/* Card 2 */}
            <Reveal3D direction="up" delay={0.1}>
              <div className="p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all flex items-center justify-between gap-5 group cursor-default">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 shadow-xs">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-display">
                      Increased Equipment Uptime
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      Reduce downtime with real-time tracking, quick issue resolution and efficient work order management.
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Reveal3D>

            {/* Card 3 */}
            <Reveal3D direction="up" delay={0.15}>
              <div className="p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all flex items-center justify-between gap-5 group cursor-default">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-display">
                      Improved Safety Compliance
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      Stay compliant with industry regulations and safety standards through scheduled inspections and complete audit trails.
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Reveal3D>

            {/* Card 4 */}
            <Reveal3D direction="up" delay={0.2}>
              <div className="p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all flex items-center justify-between gap-5 group cursor-default">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 shadow-xs">
                    <Coins className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-display">
                      Enhanced Maintenance Cost
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      Optimize resources, prevent costly repairs and extend asset life with data-driven maintenance planning.
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Reveal3D>

            {/* Card 5 */}
            <Reveal3D direction="up" delay={0.25}>
              <div className="p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all flex items-center justify-between gap-5 group cursor-default">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-xs">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-display">
                      Inventory Control
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      Track spare parts and inventory in real-time to ensure availability and avoid disruptions to your operations.
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Reveal3D>

            {/* Card 6 */}
            <Reveal3D direction="up" delay={0.3}>
              <div className="p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all flex items-center justify-between gap-5 group cursor-default">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 shadow-xs">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-display">
                      Complete Digital Transformation
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      Move from reactive to proactive maintenance with a fully digital, integrated CMMS solution for greater visibility and control.
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Reveal3D>

          </div>

        </div>
      </section>

      {/* SECTION 3: SEAMLESS MAINTENANCE OPERATIONS ANYTIME, ANYWHERE WITH MOBILE CMMS (EXACT MATCH IMAGE DESIGN) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-blue-50/40 dark:from-bg-secondary dark:via-bg-primary dark:to-bg-secondary border-b border-border-color relative overflow-hidden">
        {/* Background Image Overlay: Mobile Field Engineer & Smart Maintenance */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-[0.09] dark:opacity-25 pointer-events-none transition-opacity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=80')` }}
        />
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-[0.14] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Multi-Device Dashboard & Smartphone Overlay Mockup */}
            <div className="lg:col-span-6 relative">
              <Reveal3D direction="right">
                <div className="relative py-10 px-2 min-h-[420px] flex items-center justify-center">
                  
                  {/* Floating Pill Badges (Styled to match design) */}
                  <div className="absolute top-2 left-0 z-30 px-4 py-2 rounded-full bg-emerald-50 dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 text-xs font-bold shadow-md border border-emerald-200/80 dark:border-emerald-900/50 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">✓</div>
                    <span>Real-time Asset Status</span>
                  </div>

                  <div className="absolute top-2 left-48 sm:left-56 z-30 px-4 py-2 rounded-full bg-purple-50 dark:bg-slate-900 text-purple-700 dark:text-purple-400 text-xs font-bold shadow-md border border-purple-200/80 dark:border-purple-900/50 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-purple-500 text-white flex items-center justify-center text-[10px]">📱</div>
                    <span>Access Anytime, Anywhere</span>
                  </div>

                  <div className="absolute -bottom-2 right-2 z-30 px-4 py-2 rounded-full bg-blue-50 dark:bg-slate-900 text-blue-800 dark:text-blue-300 text-xs font-bold shadow-md border border-blue-200/80 dark:border-blue-900/50 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">☁️</div>
                    <span>Improved Efficiency & Reduced Downtime</span>
                  </div>

                  {/* Tablet/Desktop Main Dashboard Card (Background) */}
                  <div className="ml-12 sm:ml-16 w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-2xl space-y-4 text-slate-900 dark:text-white relative z-0">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#e30613] text-white flex items-center justify-center text-[10px] font-bold font-mono">C</div>
                        <span className="font-bold text-xs font-mono">CMMS Dashboard</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400">
                        <span>🔍 Search...</span>
                      </div>
                    </div>

                    {/* KPI Counters */}
                    <div className="grid grid-cols-4 gap-2 text-center text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                        <span className="text-[9px] text-slate-400 block font-bold">Open Orders</span>
                        <span className="text-base font-black text-slate-900 dark:text-white font-mono">12</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900 text-emerald-700 dark:text-emerald-400">
                        <span className="text-[9px] block font-bold">Completed</span>
                        <span className="text-base font-black font-mono">28 ✓</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900 text-purple-700 dark:text-purple-400">
                        <span className="text-[9px] block font-bold">In Progress</span>
                        <span className="text-base font-black font-mono">7</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900 text-amber-700 dark:text-amber-400">
                        <span className="text-[9px] block font-bold">Overdue</span>
                        <span className="text-base font-black font-mono">3 ⚠️</span>
                      </div>
                    </div>

                    {/* Recent Work Orders Table */}
                    <div className="space-y-2 pt-1">
                      <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block">Recent Work Orders</span>
                      <div className="space-y-1.5 text-[10px]">
                        {[
                          { id: 'WO-1001', asset: 'HVAC Unit', prio: 'High', status: 'In Progress', pColor: 'text-red-500', sColor: 'bg-blue-100 text-blue-700' },
                          { id: 'WO-1002', asset: 'Pump', prio: 'Medium', status: 'Open', pColor: 'text-amber-500', sColor: 'bg-amber-100 text-amber-700' },
                          { id: 'WO-1003', asset: 'Generator', prio: 'Critical', status: 'Completed', pColor: 'text-red-600', sColor: 'bg-emerald-100 text-emerald-700' },
                          { id: 'WO-1004', asset: 'Lift', prio: 'Medium', status: 'Open', pColor: 'text-amber-500', sColor: 'bg-amber-100 text-amber-700' }
                        ].map((row, rIdx) => (
                          <div key={rIdx} className="flex justify-between items-center p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40 font-mono">
                            <span className="font-bold text-slate-800 dark:text-slate-200">{row.id}</span>
                            <span className="text-slate-600 dark:text-slate-400">{row.asset}</span>
                            <span className={`font-bold ${row.pColor}`}>{row.prio}</span>
                            <span className={`px-2 py-0.5 rounded-full font-bold ${row.sColor}`}>{row.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Smartphone Overlay Mockup (Foreground Left) */}
                  <div className="absolute top-12 left-0 w-44 sm:w-48 bg-slate-950 text-white rounded-3xl p-3 border-4 border-slate-800 shadow-2xl z-20 space-y-3 font-sans">
                    <div className="flex justify-between items-center text-[9px] font-mono text-slate-400">
                      <span>11:31</span>
                      <span>📶 🔋</span>
                    </div>
                    <div className="flex items-center gap-1.5 border-b border-slate-800 pb-2">
                      <div className="w-4 h-4 rounded-full bg-[#e30613] flex items-center justify-center text-[8px] font-bold">C</div>
                      <span className="text-xs font-bold font-mono">CMMS</span>
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold block">Work Orders</span>
                      <div className="space-y-1.5 text-[9px]">
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                          <div className="flex justify-between"><span className="font-bold">WO-1001 HVAC</span><span className="text-red-400 font-bold">High</span></div>
                          <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono inline-block">In Progress</span>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                          <div className="flex justify-between"><span className="font-bold">WO-1002 Pump</span><span className="text-amber-400 font-bold">Medium</span></div>
                          <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono inline-block">Open</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </Reveal3D>
            </div>

            {/* Right Column Content */}
            <div className="lg:col-span-6 space-y-6">
              {/* Badge */}
              <Reveal3D direction="up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-extrabold font-sans">
                  <span>⚙️</span>
                  <span>Advanced Maintenance Excellence</span>
                </div>
              </Reveal3D>

              {/* Title */}
              <Reveal3D direction="up" delay={0.1}>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                  Seamless Maintenance Operations Anytime, Anywhere with <span className="text-[#2563eb] dark:text-blue-400">Mobile CMMS</span>
                </h2>
              </Reveal3D>

              {/* Paragraph */}
              <Reveal3D direction="up" delay={0.15}>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  Experience unparalleled operational efficiency with Cryotos Mobile CMMS. Our platform is designed for on-the-go access and ensures real-time updates, swift task management, and better communication. Whether it's the field or the office, Cryotos empowers teams to manage maintenance tasks seamlessly, enhancing optimal performance anytime, anywhere. Embrace the future of maintenance with Cryotos.
                </p>
              </Reveal3D>

              {/* 2 Highlight Feature Cards (Red & Blue pastel rounded boxes matching design) */}
              <Reveal3D direction="up" delay={0.2}>
                <div className="space-y-4 pt-2">
                  <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-red-200/80 dark:border-red-950 flex items-center gap-4 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md">
                      <Check className="w-5 h-5 stroke-[3]" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white font-display">
                        Real-time Access to Critical Data
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
                        Instant updates and full visibility, wherever you are.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200/80 dark:border-blue-950 flex items-center gap-4 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                      <Check className="w-5 h-5 stroke-[3]" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white font-display">
                        Streamline Your Maintenance Operations
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
                        From work orders to asset tracking — all in your hand.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal3D>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: KEY FEATURES OF MOBILE CMMS SOFTWARE (EXACT MATCH IMAGE DESIGN) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-bg-primary border-b border-border-color relative">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Top Badge & Headline */}
          <Reveal3D direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100/80 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-extrabold font-sans uppercase tracking-wide">
                <span>MOBILE CAPABILITIES</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                Key Features of Mobile CMMS Software
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Powerful features, designed for flexibility and efficiency — all from your mobile device.
              </p>
            </div>
          </Reveal3D>

          {/* 8 Floating Feature Cards Grid (4 cols x 2 rows with distinct light borders & colored icons) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Create Work Orders */}
            <Reveal3D direction="up" delay={0.05}>
              <div className="p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-red-200/80 dark:border-red-950/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full group cursor-default space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center shrink-0 shadow-xs">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-display">
                    Create Work Orders on the Go
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    Raise and manage work orders instantly from your mobile device. Keep your operations moving without delay.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Reveal3D>

            {/* Card 2: Monitor Asset Lifecycle */}
            <Reveal3D direction="up" delay={0.1}>
              <div className="p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-emerald-200/80 dark:border-emerald-950/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full group cursor-default space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-display">
                    Monitor Complete Asset Lifecycle
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    Track asset performance, history, and maintenance needs — all in real time, from anywhere.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Reveal3D>

            {/* Card 3: Quickly Check Work Progress */}
            <Reveal3D direction="up" delay={0.15}>
              <div className="p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-purple-200/80 dark:border-purple-950/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full group cursor-default space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 shadow-xs">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-display">
                    Quickly Check Work Progress
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    Get real-time updates on work status, assign tasks, and ensure faster resolution.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Reveal3D>

            {/* Card 4: Real-Time Work Order Tracking */}
            <Reveal3D direction="up" delay={0.2}>
              <div className="p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-blue-200/80 dark:border-blue-950/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full group cursor-default space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-xs">
                    <BarChart2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-display">
                    Real-Time Work Order Tracking
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    Stay informed with live updates on work orders, technicians, and asset status.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Reveal3D>

            {/* Card 5: Asset Preventive Maintenance Tracking */}
            <Reveal3D direction="up" delay={0.25}>
              <div className="p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-amber-200/80 dark:border-amber-950/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full group cursor-default space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 shadow-xs">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-display">
                    Asset Preventive Maintenance Tracking
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    Schedule and track preventive maintenance to reduce downtime and extend asset life.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Reveal3D>

            {/* Card 6: Inventory Management */}
            <Reveal3D direction="up" delay={0.3}>
              <div className="p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-teal-200/80 dark:border-teal-950/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full group cursor-default space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center shrink-0 shadow-xs">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-display">
                    Inventory Management
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    Monitor stock levels, manage parts, and avoid delays with real-time inventory visibility.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Reveal3D>

            {/* Card 7: Generate Reports & Analytics */}
            <Reveal3D direction="up" delay={0.35}>
              <div className="p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-indigo-200/80 dark:border-indigo-950/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full group cursor-default space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 shadow-xs">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-display">
                    Generate Reports & Analytics
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    Access detailed reports and insights to make smarter, faster decisions.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Reveal3D>

            {/* Card 8: Field Technician Support */}
            <Reveal3D direction="up" delay={0.4}>
              <div className="p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-pink-200/80 dark:border-pink-950/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full group cursor-default space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0 shadow-xs">
                    <Settings className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-display">
                    Field Technician Support
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    Enable your field team with mobile access, faster communication, and better coordination.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Reveal3D>

          </div>

        </div>
      </section>

      {/* SECTION 5: BENEFITS OF CRYOTOS MOBILE CMMS SOFTWARE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50/80 via-purple-50/20 to-slate-50/80 dark:from-bg-secondary dark:via-bg-primary dark:to-bg-secondary border-b border-border-color relative overflow-hidden">
        {/* Background Image Overlay with Gradient Mask */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-[0.07] dark:opacity-20 pointer-events-none transition-opacity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')` }}
        />
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ec4899_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-[0.10] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          {/* Top Pill Badge & Header */}
          <Reveal3D direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/80 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 text-xs font-extrabold font-sans">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Strategic Advantage</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                Benefits of Cryotos Mobile CMMS <span className="text-purple-600 dark:text-purple-400 block sm:inline">Software</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Discover how Cryotos Mobile CMMS helps you work smarter, reduce downtime and get more value from your maintenance operations.
              </p>
            </div>
          </Reveal3D>

          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Red Card */}
            <Reveal3D direction="up" delay={0.05}>
              <div className="p-6 rounded-3xl bg-red-50/60 dark:bg-slate-900 border border-red-200/80 dark:border-red-950/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full group cursor-default space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-500 text-white flex items-center justify-center shrink-0 shadow-md">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white font-display">
                    Improved Asset Reliability
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    Ensure the long life of your assets with proactive maintenance, reduced breakdowns, and optimized performance.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Reveal3D>

            {/* Blue Card */}
            <Reveal3D direction="up" delay={0.1}>
              <div className="p-6 rounded-3xl bg-blue-50/60 dark:bg-slate-900 border border-blue-200/80 dark:border-blue-950/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full group cursor-default space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white font-display">
                    Real-Time Visibility & Updates
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    Get real-time insights into asset health, work orders and team activities, anytime, anywhere.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Reveal3D>

            {/* Green Card */}
            <Reveal3D direction="up" delay={0.15}>
              <div className="p-6 rounded-3xl bg-emerald-50/60 dark:bg-slate-900 border border-emerald-200/80 dark:border-emerald-950/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full group cursor-default space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white font-display">
                    Data-Driven Decision Making
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    Leverage accurate data and analytics to plan better, reduce costs and improve operational efficiency.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Reveal3D>

          </div>

          {/* Bottom Row: 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Purple Card */}
            <Reveal3D direction="up" delay={0.2}>
              <div className="p-6 rounded-3xl bg-purple-50/60 dark:bg-slate-900 border border-purple-200/80 dark:border-purple-950/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full group cursor-default space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Settings className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white font-display">
                    Operational Compliance
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    Stay compliant with industry standards and regulatory requirements with complete tracking and reporting.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Reveal3D>

            {/* Amber Card */}
            <Reveal3D direction="up" delay={0.25}>
              <div className="p-6 rounded-3xl bg-amber-50/60 dark:bg-slate-900 border border-amber-200/80 dark:border-amber-950/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full group cursor-default space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white font-display">
                    Streamlined Workflows
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    Digitize and automate maintenance processes to boost productivity, collaboration and response times.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Reveal3D>

          </div>

        </div>
      </section>

      {/* ZIG-ZAG MODULE 1: AI FAULT REPORTING */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-blue-50/20 dark:bg-bg-primary border-b border-border-color relative overflow-hidden">
        {/* Background Image Overlay with Gradient Mask */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-[0.08] dark:opacity-20 pointer-events-none transition-opacity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=2000&q=80')` }}
        />
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-[0.12] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          {/* Header & Tag */}
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/80 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 text-xs font-extrabold font-sans">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Smarter Maintenance with AI</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                AI <span className="text-blue-600 dark:text-blue-400">Fault Reporting</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-2xl">
                Report, track and resolve issues faster with AI-powered fault reporting. Capture problems, get smart suggestions and keep your operations running smoothly.
              </p>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: 5 Stacked Feature Benefit Cards */}
            <div className="lg:col-span-6 space-y-3.5">
              
              {/* Card 1 */}
              <Reveal3D direction="right" delay={0.05}>
                <div className="p-4 sm:p-5 rounded-2xl bg-red-50/80 dark:bg-slate-900 border border-red-200/80 dark:border-red-950 flex items-center justify-between gap-4 shadow-sm group cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950/80 text-red-600 flex items-center justify-center shrink-0 shadow-xs">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white font-display">
                        Easy & Accurate Reporting
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
                        Log issues with photos, voice or text, with AI-powered categorization and details.
                      </p>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Reveal3D>

              {/* Card 2 */}
              <Reveal3D direction="right" delay={0.1}>
                <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/80 dark:bg-slate-900 border border-blue-200/80 dark:border-blue-950 flex items-center justify-between gap-4 shadow-sm group cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 flex items-center justify-center shrink-0 shadow-xs">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white font-display">
                        Auto Prioritization
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
                        AI analyzes the issue and suggests priority, category and required action.
                      </p>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Reveal3D>

              {/* Card 3 */}
              <Reveal3D direction="right" delay={0.15}>
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 dark:bg-slate-900 border border-emerald-200/80 dark:border-emerald-950 flex items-center justify-between gap-4 shadow-sm group cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white font-display">
                        Faster Resolution
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
                        Get the right team, tools and resources for quick resolution and minimal downtime.
                      </p>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Reveal3D>

              {/* Card 4 */}
              <Reveal3D direction="right" delay={0.2}>
                <div className="p-4 sm:p-5 rounded-2xl bg-purple-50/80 dark:bg-slate-900 border border-purple-200/80 dark:border-purple-950 flex items-center justify-between gap-4 shadow-sm group cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 flex items-center justify-center shrink-0 shadow-xs">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white font-display">
                        Complete Audit Trail
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
                        Track every step from submission to closure for better accountability and compliance.
                      </p>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Reveal3D>

              {/* Card 5 */}
              <Reveal3D direction="right" delay={0.25}>
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 dark:bg-slate-900 border border-amber-200/80 dark:border-amber-950 flex items-center justify-between gap-4 shadow-sm group cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 flex items-center justify-center shrink-0 shadow-xs">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white font-display">
                        Continuous Improvement
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
                        Analyze trends and insights to prevent recurring issues and improve asset performance.
                      </p>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Reveal3D>

            </div>

            {/* Right Column: Slide Image */}
            <div className="lg:col-span-6 flex flex-col">
              <Reveal3D direction="left">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="rounded-3xl p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden hover:border-[#e30613]/50 transition-all duration-300"
                >
                  <img 
                    src="/ai_fault.png" 
                    alt="AI Fault Reporting Slide Screenshot" 
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </motion.div>
              </Reveal3D>
            </div>

          </div>

          {/* Bottom 3 Feature Pills */}
          <Reveal3D direction="up" delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <div className="px-5 py-2 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                <Zap className="w-4 h-4 text-blue-500" />
                <span>AI-Powered Suggestions</span>
              </div>
              <div className="px-5 py-2 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Improved Response Time</span>
              </div>
              <div className="px-5 py-2 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                <TrendingUp className="w-4 h-4 text-purple-500" />
                <span>Higher Asset Uptime</span>
              </div>
            </div>
          </Reveal3D>

        </div>
      </section>

      {/* ZIG-ZAG MODULE 2: AI FAULT REPORTING (VOICE DISPATCH) */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-purple-50/40 dark:bg-bg-secondary border-b border-border-color relative overflow-hidden">
        {/* Background Image Overlay with Gradient Mask */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-15 dark:opacity-25 pointer-events-none transition-opacity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')` }}
        />
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-[0.15] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          {/* Header & Tag */}
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/80 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 text-xs font-extrabold font-sans">
                <Mic className="w-3.5 h-3.5" />
                <span>Voice AI Dispatch</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                AI Fault Reporting <span className="text-purple-600 dark:text-purple-400">(Voice-Based & Dispatch)</span>
              </h2>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Slide Image */}
            <div className="lg:col-span-5 flex flex-col order-2 lg:order-1">
              <Reveal3D direction="right">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="rounded-3xl p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
                >
                  <img 
                    src="/ai_fault2.png" 
                    alt="AI Fault Reporting Voice Based Dispatch Slide Screenshot" 
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </motion.div>
              </Reveal3D>
            </div>

            {/* Right Column: Text Cards */}
            <div className="lg:col-span-7 space-y-3.5 order-1 lg:order-2">
              <Reveal3D direction="left">
                <div className="space-y-3.5">
                  {[
                    'Users can raise faults via mobile app, web portal, QR code, or integrated systems.',
                    'Supports voice-based fault reporting in native languages for faster and easier fault submission.',
                    'AI converts voice input into text and interprets the fault description.',
                    'AI validates key details such as location, asset, fault type, severity, and issue description.',
                    'Once validated, AI converts the fault into a work order / job sheet with a unique reference number.',
                    'Work orders are automatically assigned to the respective maintenance team based on workflow, skillset, availability, and fault category.'
                  ].map((bullet, idx) => {
                    const colors = [
                      'bg-white border-purple-200 text-purple-600',
                      'bg-white border-blue-200 text-blue-600',
                      'bg-white border-emerald-200 text-emerald-600',
                      'bg-white border-amber-200 text-amber-600',
                      'bg-white border-red-200 text-red-600',
                      'bg-white border-indigo-200 text-indigo-600'
                    ];
                    return (
                      <div key={idx} className={`p-4 rounded-2xl ${colors[idx % colors.length]} dark:bg-slate-900 dark:border-slate-800 border flex items-center justify-between gap-4 shadow-sm cursor-default`}>
                        <div className="flex items-center gap-3.5">
                          <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-slate-800 font-bold font-mono text-xs flex items-center justify-center shrink-0 shadow-xs">
                            0{idx + 1}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium font-sans leading-relaxed">
                            {bullet}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal3D>
            </div>

          </div>
        </div>
      </section>

      {/* ZIG-ZAG MODULE 3: AI KNOWLEDGE MANAGEMENT SYSTEM */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-blue-50/30 dark:bg-bg-primary border-b border-border-color relative overflow-hidden">
        {/* Background Image Overlay with Gradient Mask */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-[0.08] dark:opacity-20 pointer-events-none transition-opacity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')` }}
        />
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-[0.12] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          {/* Header & Tag */}
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-extrabold font-sans">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Knowledge Base AI</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                AI-Based <span className="text-blue-600 dark:text-blue-400">Knowledge Management System</span>
              </h2>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text Cards */}
            <div className="lg:col-span-7 space-y-3.5">
              <Reveal3D direction="right">
                <div className="space-y-3.5">
                  {[
                    'Quick access to SOPs, manuals, guides, and maintenance documents.',
                    'Users can ask questions in simple language and get relevant answers.',
                    'Provides step-by-step troubleshooting guidance for technicians.',
                    'Searches uploaded documents such as manuals, procedures, and safety guidelines.',
                    'Recommends actions based on approved documents and past maintenance records.',
                    'Supports faster onboarding and reduces dependency on senior staff.'
                  ].map((bullet, idx) => {
                    const colors = [
                      'bg-blue-50/80 border-blue-200/80 text-blue-600',
                      'bg-teal-50/80 border-teal-200/80 text-teal-600',
                      'bg-emerald-50/80 border-emerald-200/80 text-emerald-600',
                      'bg-purple-50/80 border-purple-200/80 text-purple-600',
                      'bg-indigo-50/80 border-indigo-200/80 text-indigo-600',
                      'bg-amber-50/80 border-amber-200/80 text-amber-600'
                    ];
                    return (
                      <div key={idx} className={`p-4 rounded-2xl ${colors[idx % colors.length]} dark:bg-slate-900 dark:border-slate-800 border flex items-center justify-between gap-4 shadow-sm cursor-default`}>
                        <div className="flex items-center gap-3.5">
                          <div className="w-8 h-8 rounded-xl bg-white dark:bg-slate-800 font-bold font-mono text-xs flex items-center justify-center shrink-0 shadow-xs">
                            0{idx + 1}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium font-sans leading-relaxed">
                            {bullet}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal3D>
            </div>

            {/* Right Column: Slide Image */}
            <div className="lg:col-span-5 flex flex-col">
              <Reveal3D direction="left">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="rounded-3xl p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                >
                  <img 
                    src="/ai_knowledge.png" 
                    alt="AI Knowledge Management System Slide Screenshot" 
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </motion.div>
              </Reveal3D>
            </div>

          </div>
        </div>
      </section>

      {/* ZIG-ZAG MODULE 4: AI CHECKLIST LIBRARY */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-emerald-50/40 dark:bg-bg-secondary border-b border-border-color relative overflow-hidden">
        {/* Background Image Overlay with Gradient Mask */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-[0.10] dark:opacity-20 pointer-events-none transition-opacity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=80')` }}
        />
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-[0.14] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          {/* Header & Tag */}
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-extrabold font-sans">
                <ClipboardCheck className="w-3.5 h-3.5" />
                <span>Checklist Digitalization</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                AI Checklist Library & <span className="text-emerald-600 dark:text-emerald-400">Digitalization</span>
              </h2>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Slide Image */}
            <div className="lg:col-span-5 flex flex-col order-2 lg:order-1">
              <Reveal3D direction="right">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="rounded-3xl p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
                >
                  <img 
                    src="/ai_checklist.png" 
                    alt="AI Checklist Library & Digitalization Slide Screenshot" 
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </motion.div>
              </Reveal3D>
            </div>

            {/* Right Column: Text Cards */}
            <div className="lg:col-span-7 space-y-3.5 order-1 lg:order-2">
              <Reveal3D direction="left">
                <div className="space-y-3.5">
                  {[
                    'Provides a reusable checklist template library for inspection, maintenance, audit, and compliance.',
                    'Users can select templates based on asset, location, service type, or frequency.',
                    'AI can generate new checklists from simple text prompts.',
                    'AI can import and digitalise existing PDFs, scanned forms, or paper checklists.',
                    'Digital checklists can be linked to assets, PM schedules, work orders, and service teams.',
                    'Helps reduce paperwork, improve consistency, and strengthen operational control.'
                  ].map((bullet, idx) => {
                    const colors = [
                      'bg-white border-emerald-200 text-emerald-600',
                      'bg-white border-teal-200 text-teal-600',
                      'bg-white border-blue-200 text-blue-600',
                      'bg-white border-purple-200 text-purple-600',
                      'bg-white border-amber-200 text-amber-600',
                      'bg-white border-red-200 text-red-600'
                    ];
                    return (
                      <div key={idx} className={`p-4 rounded-2xl ${colors[idx % colors.length]} dark:bg-slate-900 dark:border-slate-800 border flex items-center justify-between gap-4 shadow-sm cursor-default`}>
                        <div className="flex items-center gap-3.5">
                          <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-slate-800 font-bold font-mono text-xs flex items-center justify-center shrink-0 shadow-xs">
                            0{idx + 1}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium font-sans leading-relaxed">
                            {bullet}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal3D>
            </div>

          </div>
        </div>
      </section>

      {/* ZIG-ZAG MODULE 5: AI ASSISTANT */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-pink-50/30 dark:bg-bg-primary border-b border-border-color relative overflow-hidden">
        {/* Background Image Overlay with Gradient Mask */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-[0.08] dark:opacity-20 pointer-events-none transition-opacity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2000&q=80')` }}
        />
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ec4899_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-[0.12] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          {/* Header & Tag */}
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/80 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 text-xs font-extrabold font-sans">
                <Bot className="w-3.5 h-3.5" />
                <span>Intelligent AI Bot</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                AI <span className="text-pink-600 dark:text-pink-400">Assistant</span>
              </h2>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text Cards */}
            <div className="lg:col-span-7 space-y-3.5">
              <Reveal3D direction="right">
                <div className="space-y-3.5">
                  {[
                    'Enables users to interact with the CMMS using simple natural language.',
                    'Users can ask about faults, work orders, assets, checklists, PM tasks, and compliance.',
                    'Quickly retrieves information without searching multiple screens.',
                    'Provides updates on pending jobs, overdue tasks, repeated faults, and job status.',
                    'Gives management insights on service performance, response time, and maintenance trends.',
                    'Supports chart and compliance analysis for SLA, checklist compliance, and fault trends.'
                  ].map((bullet, idx) => {
                    const colors = [
                      'bg-pink-50/80 border-pink-200/80 text-pink-600',
                      'bg-purple-50/80 border-purple-200/80 text-purple-600',
                      'bg-blue-50/80 border-blue-200/80 text-blue-600',
                      'bg-indigo-50/80 border-indigo-200/80 text-indigo-600',
                      'bg-teal-50/80 border-teal-200/80 text-teal-600',
                      'bg-red-50/80 border-red-200/80 text-red-600'
                    ];
                    return (
                      <div key={idx} className={`p-4 rounded-2xl ${colors[idx % colors.length]} dark:bg-slate-900 dark:border-slate-800 border flex items-center justify-between gap-4 shadow-sm cursor-default`}>
                        <div className="flex items-center gap-3.5">
                          <div className="w-8 h-8 rounded-xl bg-white dark:bg-slate-800 font-bold font-mono text-xs flex items-center justify-center shrink-0 shadow-xs">
                            0{idx + 1}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium font-sans leading-relaxed">
                            {bullet}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal3D>
            </div>

            {/* Right Column: Slide Image */}
            <div className="lg:col-span-5 flex flex-col">
              <Reveal3D direction="left">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="rounded-3xl p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden hover:border-pink-500/50 transition-all duration-300"
                >
                  <img 
                    src="/ai_assisstant.png" 
                    alt="AI Assistant Slide Screenshot" 
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </motion.div>
              </Reveal3D>
            </div>

          </div>
        </div>
      </section>

      {/* ZIG-ZAG MODULE 6: AI CHECKLIST SUMMARY & INSIGHTS */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-amber-50/40 dark:bg-bg-secondary border-b border-border-color relative overflow-hidden">
        {/* Background Decorative Pattern (Clean Pattern Only) */}
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-[0.14] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          {/* Header & Tag */}
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 text-xs font-extrabold font-sans">
                <FileText className="w-3.5 h-3.5" />
                <span>Automated Insights</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                AI Checklist <span className="text-amber-600 dark:text-amber-400">Summary & Insights</span>
              </h2>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Slide Image */}
            <div className="lg:col-span-5 flex flex-col order-2 lg:order-1">
              <Reveal3D direction="right">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="rounded-3xl p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300"
                >
                  <img 
                    src="/ai_checklist_summary.png" 
                    alt="AI Checklist Summary & Insights Slide Screenshot" 
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </motion.div>
              </Reveal3D>
            </div>

            {/* Right Column: Text Cards */}
            <div className="lg:col-span-7 space-y-3.5 order-1 lg:order-2">
              <Reveal3D direction="left">
                <div className="space-y-3.5">
                  {[
                    'Automatically summarises completed checklist submissions.',
                    'Identifies key observations from responses, remarks, readings, and photos.',
                    'Highlights abnormal findings, failed items, missed checks, and incomplete responses.',
                    'Summarises technician remarks into a clear and professional format.',
                    'Identifies checklist items requiring follow-up action or supervisor review.',
                    'Reduces manual review time and improves checklist review efficiency.'
                  ].map((bullet, idx) => {
                    const colors = [
                      'bg-white border-amber-200 text-amber-600',
                      'bg-white border-orange-200 text-orange-600',
                      'bg-white border-red-200 text-red-600',
                      'bg-white border-purple-200 text-purple-600',
                      'bg-white border-blue-200 text-blue-600',
                      'bg-white border-emerald-200 text-emerald-600'
                    ];
                    return (
                      <div key={idx} className={`p-4 rounded-2xl ${colors[idx % colors.length]} dark:bg-slate-900 dark:border-slate-800 border flex items-center justify-between gap-4 shadow-sm cursor-default`}>
                        <div className="flex items-center gap-3.5">
                          <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-slate-800 font-bold font-mono text-xs flex items-center justify-center shrink-0 shadow-xs">
                            0{idx + 1}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium font-sans leading-relaxed">
                            {bullet}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal3D>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER CTA (PREMIUM FLOATING CARD WITH HOVER EFFECT) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/60 dark:bg-bg-primary relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <Reveal3D direction="up">
            <motion.div 
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-2xl border border-slate-800/80 overflow-hidden group cursor-default"
            >
              {/* Decorative Background Image Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20 pointer-events-none"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=2000&q=80')` }}
              />

              {/* Decorative Background Glow Shapes */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#e30613]/20 rounded-full blur-3xl group-hover:bg-[#e30613]/30 transition-all duration-700 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl group-hover:bg-blue-600/25 transition-all duration-700 pointer-events-none" />
              
              {/* Subtle Grid Pattern Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

              <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#e30613] text-xs font-mono font-bold uppercase tracking-widest shadow-inner">
                  <span>🚀 Enterprise Solution</span>
                </div>

                {/* Headline */}
                <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight leading-tight text-white group-hover:text-slate-100 transition-colors">
                  Ready to Upgrade Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e30613] via-red-400 to-amber-400">Facility Management?</span>
                </h2>

                {/* Paragraph */}
                <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
                  Experience the power of Aptiv8 CMMS with integrated AI Fault Reporting, Voice AI Dispatch, Knowledge Base, and Automated Checklists.
                </p>

                {/* Interactive CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <a
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#e30613] hover:bg-[#c00510] text-white font-extrabold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 active:scale-95 group/btn"
                  >
                    <span>Request Enterprise Demo</span>
                    <ArrowRight className="w-4.5 h-4.5 group-hover/btn:translate-x-1.5 transition-transform" />
                  </a>

                  
                </div>

              </div>
            </motion.div>
          </Reveal3D>
        </div>
      </section>

    </div>
  );
}

// Helper Cloud icon definition
function CloudIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 001-9.9 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  );
}
