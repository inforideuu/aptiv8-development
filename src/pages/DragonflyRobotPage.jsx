import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  AlertTriangle, 
  Building2, 
  Activity, 
  DollarSign, 
  BarChart3, 
  ChevronRight, 
  Calendar,
  X,
  ArrowUpRight,
  Maximize2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal3D from '../components/Reveal3D';

export default function DragonflyRobotPage() {
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryImages = [
    { src: '/fieldunit.png', title: 'Field Deployment Unit', tag: 'Site Operation' },
    { src: '/fieldunit1.png', title: 'Field Unit Monitoring Setup', tag: 'Live Patrol' },
    { src: '/school.png', title: 'Campus & Institutional Deployment', tag: 'Public Space' },
    { src: '/robotics1.png', title: 'Autonomous Robotics Core', tag: 'Sensors & AI' },
    { src: '/robotics2.png', title: 'Smart Trap & UV Attraction Module', tag: 'Eco Trap' },
    { src: '/robotics3.png', title: 'Continuous Patrol Chassis', tag: '24/7 System' },
  ];

  const featuresList = [
    {
      icon: Activity,
      title: 'AI-Powered Monitoring & Reporting',
      desc: 'Real-time mosquito activity tracking and automated data reporting sent straight to central facility management dashboards.',
      color: 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20',
      gradient: 'from-blue-500/5 to-transparent'
    },
    {
      icon: Bot,
      title: 'Fully Autonomous Patrol',
      desc: 'Operates independently along designated path routes without requiring manual intervention or dedicated ground staff.',
      color: 'text-[#e30613] bg-red-100 dark:text-[#e30613] dark:bg-red-500/10 border-red-200 dark:border-red-500/20',
      gradient: 'from-red-500/5 to-transparent'
    },
    {
      icon: ShieldCheck,
      title: 'Chemical-Free & Eco-Safe',
      desc: 'Utilizes physical UV light spectrums and smart eco-lures. 100% non-toxic and safe for occupied indoor and outdoor environments.',
      color: 'text-emerald-600 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20',
      gradient: 'from-emerald-500/5 to-transparent'
    },
    {
      icon: Clock,
      title: '24/7 Day & Night Operation',
      desc: 'Provides non-stop continuous vector control around the clock, catching mosquito activity during peak twilight and daytime hours.',
      color: 'text-amber-600 bg-amber-100 dark:text-amber-400 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20',
      gradient: 'from-amber-500/5 to-transparent'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Vector Tracking',
      desc: 'Logs catch density geospatial heatmaps to help safety officers identify potential breeding hotspots before infestations spread.',
      color: 'text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20',
      gradient: 'from-purple-500/5 to-transparent'
    },
    {
      icon: Building2,
      title: 'Multi-Sector Versatility',
      desc: 'Engineered for construction sites, worker dormitories, commercial malls, industrial warehouses, schools, and expansive outdoor grounds.',
      color: 'text-teal-600 bg-teal-100 dark:text-teal-400 dark:bg-teal-500/10 border-teal-200 dark:border-teal-500/20',
      gradient: 'from-teal-500/5 to-transparent'
    },
    {
      icon: DollarSign,
      title: 'Flexible Monthly Rental Model',
      desc: 'Available on affordable monthly leasing terms—eliminating heavy upfront capital expenditures (CAPEX) with full maintenance included.',
      color: 'text-indigo-600 bg-indigo-100 dark:text-indigo-400 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/20',
      gradient: 'from-indigo-500/5 to-transparent'
    }
  ];

  const deploymentSectors = [
    { title: 'Construction Sites & Building Projects', tag: 'High Vector Risk' },
    { title: 'Worker Dormitories & Residential Compounds', tag: 'High Occupancy' },
    { title: 'Shopping Malls & Retail Complexes', tag: 'Public Space' },
    { title: 'Industrial Warehouses & Logistics Hubs', tag: 'Large Perimeter' },
    { title: 'Schools, Universities & Campuses', tag: 'Educational Grounds' },
    { title: 'Large Facilities & Outdoor Parks', tag: 'Open Grounds' }
  ];

  return (
    <div className="relative pt-20 overflow-hidden min-h-screen bg-bg-primary text-text-primary transition-colors duration-300">

      {/* 1. HERO SECTION (Styled like ServicesPage hero with /robotics1.png background) */}
      <section 
        className="relative py-36 px-4 bg-cover bg-center overflow-hidden flex items-center justify-center min-h-[calc(100vh-80px)]"
        style={{ backgroundImage: "url('/robotics1.png')" }}
      >
        {/* Soft overlay for text contrast */}
        <div className="absolute inset-0 bg-slate-950/40 dark:bg-slate-950/65 z-0 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full flex flex-col items-center">
          
          {/* Subtitle in Red uppercase */}
          <Reveal3D direction="up">
            <span className="text-[14px] sm:text-[15px] font-bold font-mono tracking-[0.25em] text-[#ef4444] uppercase mb-4 block drop-shadow-md">
              AUTONOMOUS VECTOR CONTROL ROBOTICS.
            </span>
          </Reveal3D>

          {/* Main Headline in Times New Roman with White and Red accent */}
          <Reveal3D direction="up" delay={0.1}>
            <h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              Leasing of <span className="text-[#ef4444]">Aptiv8 Dragonfly</span> for Mosquito Control
            </h1>
          </Reveal3D>

          {/* Centered description text */}
          <Reveal3D direction="up" delay={0.15}>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-10 text-center font-sans drop-shadow">
              Aptiv8 Dragonfly is an autonomous robot designed to tackle Aedes mosquitoes. It patrols spaces independently, attracts mosquitoes using UV light and smart lures, and traps them without chemicals or fogging.
            </p>
          </Reveal3D>

          {/* Quick Badges & Call to Actions */}
          <Reveal3D direction="up" delay={0.25}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-2xl bg-[#e30613] hover:bg-[#c20510] text-white text-xs sm:text-sm font-bold font-display shadow-xl shadow-red-500/30 hover:scale-[1.03] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Monthly Rental Quote</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <a
                href="#why-dragonfly"
                className="px-8 py-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 text-xs sm:text-sm font-bold font-display hover:scale-[1.03] transition-all cursor-pointer shadow-lg"
              >
                <span>Why Choose Dragonfly?</span>
              </a>
            </div>
          </Reveal3D>

        </div>
      </section>

      {/* 2. KEY FEATURES & BENEFITS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/60 dark:bg-[#060c17]/60 border-b border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          
          <Reveal3D direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="flex items-center justify-center gap-3">
                <span className="w-12 sm:w-16 h-[1.5px] bg-[#e30613]" />
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#e30613] text-xs font-bold font-mono uppercase tracking-widest shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#e30613] animate-pulse" />
                  <span>Enterprise Suite Capabilities</span>
                </div>
                <span className="w-12 sm:w-16 h-[1.5px] bg-[#e30613]" />
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                Advanced Features for <span className="text-[#e30613]">Zero-Manpower</span> Mosquito Control
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
                Designed to deliver continuous, non-chemical vector reduction while keeping your facilities compliant with statutory health requirements.
              </p>
            </div>
          </Reveal3D>

          {/* Premium Glassmorphic Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {featuresList.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <Reveal3D key={idx} direction="up" delay={idx * 0.08}>
                  <div 
                    className="h-full rounded-3xl bg-white/90 dark:bg-[#0b1528]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/80 transition-all duration-500 flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(227,6,19,0.15)] dark:hover:shadow-[0_20px_45px_rgba(255,59,71,0.2)] hover:border-[#e30613]/50 hover:-translate-y-1.5 overflow-hidden relative p-8"
                  >
                    {/* Subtle top edge glow bar on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e30613] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Background soft color tint */}
                    <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${feat.gradient} rounded-bl-full pointer-events-none transition-opacity opacity-70 group-hover:opacity-100`} />

                    <div className="space-y-5 relative z-10">
                      <div className="flex items-center justify-between">
                        {/* Premium Soft Icon Badge */}
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border shadow-md transition-transform duration-300 group-hover:scale-110 ${feat.color}`}>
                          <IconComp className="w-6 h-6 stroke-[2.2]" />
                        </div>

                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-red-50 dark:group-hover:bg-red-950/50 group-hover:text-[#e30613] transition-colors">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-[10px] font-mono font-extrabold text-[#e30613] uppercase tracking-widest">
                          MODULE 0{idx + 1}
                        </div>
                        <h3 className="text-lg font-extrabold text-slate-900 dark:text-white font-display leading-tight group-hover:text-[#e30613] transition-colors">
                          {feat.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-justify pt-1">
                        {feat.desc}
                      </p>
                    </div>

                    <div className="pt-5 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                      <span>Autonomous Spec</span>
                      <span className="text-[#e30613]">Verified •</span>
                    </div>
                  </div>
                </Reveal3D>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. WHY DRAGONFLY INSTEAD OF TRADITIONAL FOGGING? (SECTION WITH THEME-AWARE OVERLAY FOR /robotics2.png) */}
      <section 
        id="why-dragonfly" 
        className="py-28 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300"
        style={{ backgroundImage: "url('/robotics2.png')" }}
      >
        {/* Soft Theme-Aware Glass Overlay (Light in Light mode, Dark in Dark mode) */}
        <div className="absolute inset-0 bg-white/85 dark:bg-slate-950/85 backdrop-blur-sm pointer-events-none transition-colors duration-300" />

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          
          <Reveal3D direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="flex items-center justify-center gap-3">
                <span className="w-12 sm:w-16 h-[1.5px] bg-[#e30613]" />
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#e30613] text-xs font-bold font-mono uppercase tracking-widest shadow-sm backdrop-blur-md">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#e30613]" />
                  <span>Technology Comparison</span>
                </div>
                <span className="w-12 sm:w-16 h-[1.5px] bg-[#e30613]" />
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                Why Dragonfly Instead of <span className="text-[#e30613]">Traditional Fogging?</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
                Compare traditional chemical fogging against Aptiv8 Dragonfly continuous autonomous trapping.
              </p>
            </div>
          </Reveal3D>

          {/* Premium Comparison Grid (Theme Responsive) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Traditional Fogging Card */}
            <Reveal3D direction="right">
              <div className="p-8 sm:p-10 rounded-3xl bg-red-50/70 dark:bg-red-950/30 border border-red-200 dark:border-red-900/60 backdrop-blur-xl space-y-7 relative overflow-hidden flex flex-col justify-between shadow-xl h-full">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-900/60 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs font-bold font-mono">
                      <span>⚠️ Traditional Chemical Fogging</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 uppercase">Legacy Method</span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 dark:text-white font-display">
                    Temporary & Reactive Solution
                  </h3>

                  <ul className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans">
                    <li className="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-red-200/60 dark:border-red-950 flex items-start gap-3.5 shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✕</div>
                      <span><strong>Temporary Dispersal:</strong> Fogging only chases mosquitoes away temporarily; pests quickly return once chemical smoke dissipates.</span>
                    </li>
                    <li className="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-red-200/60 dark:border-red-950 flex items-start gap-3.5 shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✕</div>
                      <span><strong>Breeding Sources Remain:</strong> Larvae and breeding hotspots in hidden corners remain untouched and continue multiplying.</span>
                    </li>
                    <li className="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-red-200/60 dark:border-red-950 flex items-start gap-3.5 shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✕</div>
                      <span><strong>Chemical Residue & Labor Costs:</strong> Requires chemical handling, specialized operators, and unpleasant odor in public spaces.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal3D>

            {/* Aptiv8 Dragonfly Card */}
            <Reveal3D direction="left">
              <div className="p-8 sm:p-10 rounded-3xl bg-white/95 dark:bg-[#0b1528]/95 backdrop-blur-xl border-2 border-[#e30613] shadow-[0_20px_50px_rgba(227,6,19,0.18)] dark:shadow-[0_20px_50px_rgba(255,59,71,0.25)] space-y-7 relative overflow-hidden flex flex-col justify-between h-full">
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-bl-full pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-400 text-xs font-bold font-mono">
                      <span>✨ Aptiv8 Dragonfly Robot</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Recommended</span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 dark:text-white font-display">
                    Continuous & Targeted Trapping at Source
                  </h3>

                  <ul className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans">
                    <li className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50 flex items-start gap-3.5 shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</div>
                      <span><strong>Attracts & Kills at Source:</strong> Attracts mosquitoes continuously using specialized UV light spectrums and smart lures, permanently reducing local populations.</span>
                    </li>
                    <li className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50 flex items-start gap-3.5 shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</div>
                      <span><strong>Continuous Population Control:</strong> Runs 24/7 day and night without downtime, keeping mosquito density consistently near zero.</span>
                    </li>
                    <li className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50 flex items-start gap-3.5 shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</div>
                      <span><strong>NEA Compliance Protection:</strong> Helps facility managers stay strictly compliant with statutory NEA vector guidelines and avoid costly regulatory penalties.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal3D>

          </div>

          {/* NEA Regulatory Fine Warning Banner */}
          <Reveal3D direction="up">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-red-600 via-[#e30613] to-red-700 text-white shadow-2xl space-y-4 relative overflow-hidden border border-red-500">
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-300/40 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6 text-amber-300" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-display tracking-tight text-white">
                  NEA Regulatory Compliance Shield
                </h3>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed font-sans text-red-50 text-justify max-w-4xl">
                Breeding Aedes mosquitoes carries severe financial penalties under Singapore NEA guidelines. First offences can incur fines up to <strong>S$5,000</strong>, while subsequent offences escalate from <strong>S$10,000 to S$50,000</strong> (depending on severity and site type) along with potential Stop Work Orders (SWO). Leasing Aptiv8 Dragonfly ensures continuous vector suppression to protect your site.
              </p>
            </div>
          </Reveal3D>

        </div>
      </section>

      {/* 4. FIELD & ROBOTICS IMAGE GALLERY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/60 dark:bg-[#060c17]/60 border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-14">
          
          <Reveal3D direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="flex items-center justify-center gap-3">
                <span className="w-12 sm:w-16 h-[1.5px] bg-[#e30613]" />
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#e30613] text-xs font-bold font-mono uppercase tracking-widest shadow-sm">
                  <Bot className="w-3.5 h-3.5 text-[#e30613]" />
                  <span>Visual Hardware Showcase</span>
                </div>
                <span className="w-12 sm:w-16 h-[1.5px] bg-[#e30613]" />
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                Robotics & Field <span className="text-[#e30613]">Deployments</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
                Explore Dragonfly robotics hardware, field monitoring units, and site deployment setups across institutional and commercial facilities.
              </p>
            </div>
          </Reveal3D>

          {/* Ultra-Premium Image Showcase Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {galleryImages.map((imgItem, index) => (
              <Reveal3D key={index} direction="up" delay={index * 0.07}>
                <div 
                  onClick={() => setSelectedImg(imgItem.src)}
                  className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-[#e30613]/60 transition-all duration-500 cursor-pointer h-80 flex flex-col justify-between"
                >
                  <img 
                    src={imgItem.src} 
                    alt={imgItem.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-9 h-9 rounded-full bg-white/20 dark:bg-slate-900/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 space-y-2 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#e30613] text-white text-[10px] font-mono font-bold uppercase tracking-wider inline-block shadow-md">
                      {imgItem.tag}
                    </span>
                    <h4 className="text-base font-extrabold text-white font-display group-hover:text-red-300 transition-colors leading-tight">
                      {imgItem.title}
                    </h4>
                  </div>
                </div>
              </Reveal3D>
            ))}
          </div>

        </div>
      </section>

      {/* 5. IDEAL DEPLOYMENT SECTORS (SECTION WITH THEME-AWARE OVERLAY FOR /fieldunit.png) */}
      <section 
        className="py-28 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300"
        style={{ backgroundImage: "url('/fieldunit.png')" }}
      >
        {/* Soft Theme-Aware Glass Overlay */}
        <div className="absolute inset-0 bg-white/85 dark:bg-slate-950/85 backdrop-blur-sm pointer-events-none transition-colors duration-300" />

        <div className="max-w-7xl mx-auto space-y-14 relative z-10">
          <Reveal3D direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="flex items-center justify-center gap-3">
                <span className="w-12 sm:w-16 h-[1.5px] bg-[#e30613]" />
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#e30613] text-xs font-bold font-mono uppercase tracking-widest shadow-sm backdrop-blur-md">
                  <Building2 className="w-3.5 h-3.5 text-[#e30613]" />
                  <span>Target Environments</span>
                </div>
                <span className="w-12 sm:w-16 h-[1.5px] bg-[#e30613]" />
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                Ideal Deployment <span className="text-[#e30613]">Environments</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
                Aptiv8 Dragonfly is engineered for high-density, vector-vulnerable commercial, industrial, and institutional premises.
              </p>
            </div>
          </Reveal3D>

          {/* Floating Glass Sector Cards (Theme Responsive) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deploymentSectors.map((sector, idx) => (
              <Reveal3D key={idx} direction="up" delay={idx * 0.06}>
                <div 
                  className="p-6 rounded-3xl bg-white/90 dark:bg-[#0b1528]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-[#e30613]/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/60 text-[#e30613] flex items-center justify-center shrink-0 font-bold font-mono text-base border border-red-100 dark:border-red-900/40 group-hover:scale-110 transition-transform">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white font-display leading-tight group-hover:text-[#e30613] transition-colors">
                        {sector.title}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-1 block">
                        {sector.tag}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#e30613] group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              </Reveal3D>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RENTAL CTA BANNER */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <Reveal3D direction="up">
          <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-white to-red-50/40 dark:from-[#0b1528] dark:to-[#120810] border-2 border-[#e30613] shadow-[0_25px_60px_rgba(227,6,19,0.2)] text-center space-y-7 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-500/10 text-[#e30613] border border-red-200 dark:border-red-500/20 flex items-center justify-center mx-auto shadow-md relative z-10">
              <Calendar className="w-8 h-8 animate-bounce text-[#e30613]" />
            </div>

            <div className="space-y-3 max-w-2xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#e30613] text-xs font-mono font-bold uppercase tracking-widest">
                <span>Zero Upfront CAPEX</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display">
                Available for <span className="text-[#e30613]">Monthly Rental</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                Deploy Aptiv8 Dragonfly at your facility on flexible monthly leasing terms. Zero heavy upfront investment, hassle-free maintenance, and full technical support included.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 relative z-10">
              <Link
                to="/contact"
                className="px-9 py-4.5 rounded-2xl bg-[#e30613] hover:bg-[#c20510] text-white text-xs sm:text-sm font-bold font-display shadow-xl shadow-red-500/35 hover:scale-[1.03] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book a Site Assessment & Rental Consultation</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal3D>
      </section>

      {/* IMAGE LIGHTBOX POPUP MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] p-2">
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={selectedImg} 
                alt="Enlarged Showcase" 
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/20"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
