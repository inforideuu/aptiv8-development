import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, ArrowRight, Layers, LayoutGrid, CheckCircle,
  Calendar, TrendingUp, ClipboardList, AlertTriangle, Users,
  Boxes, MessageSquare, Maximize2, Clock, Archive, Cpu,
  Briefcase, DollarSign, ShieldCheck, FileText, BarChart3,
  Award, Truck, Leaf, Activity, Upload, GitBranch, CheckSquare,
  QrCode, Wrench, AlertOctagon, FileSpreadsheet, History, WifiOff,
  MailCheck, Link2, Database, Key, MessageCircle, PieChart, Gauge, Radio, MapPin, Tv, Play, Eye,
  Search, Settings, Target
} from 'lucide-react';
import Card from '../components/Card';
import { featuredSolutions, svgs } from '../data/websiteData';
import Reveal3D from '../components/Reveal3D';

export default function SolutionsPage() {
  const [selectedStage, setSelectedStage] = useState('planning-design');
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  React.useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
    }
  }, []);

  const lifecycleStages = [
    {
      id: 'planning-design',
      title: 'Planning & Design',
      description: 'Optimize building geometry, validate codes, and simulate compliance before breaking ground.',
      image: svgs.planning,
      solutions: ['sdsa', 'compliance', 'fire-safety', 'bim-data'] // Open BIM AI mapped to bim-data
    },
    {
      id: 'pre-construction',
      title: 'Pre-Construction',
      description: 'Streamline bid parsing, estimate costs, and format specifications automatically.',
      image: svgs.preCon,
      solutions: ['bid-prep', 'spec-manager']
    },
    {
      id: 'construction',
      title: 'Construction Coordination',
      description: 'Cleanse Revit datasets, monitor concrete properties, and manage materials on site.',
      image: svgs.construction,
      solutions: ['bim-data', 'cortex']
    },
    {
      id: 'operations-maintenance',
      title: 'Operations & Maintenance',
      description: 'Orchestrate preventive tickets and track facility sensors in active digital twins.',
      image: svgs.operations,
      solutions: ['cmms', 'cortex']
    },
    {
      id: 'real-estate',
      title: 'Real Estate & Strata',
      description: 'Extract lease financials, verify tenancy clauses, and manage strata bylaws.',
      image: svgs.realEstate,
      solutions: ['strata', 'lease']
    }
  ];

  return (
    <div className="relative pt-20">

      {/* HERO SECTION */}
      <section
        className="relative py-36 px-4 bg-cover bg-center overflow-hidden flex items-center justify-center min-h-[calc(100vh-80px)] w-full"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80')" }}
      >
        {/* Dark blue/black overlay for text contrast */}
        <div className="absolute inset-0 bg-slate-950/75 z-0 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full flex flex-col items-center justify-center my-auto">
          {/* Subtitle in Gold/Amber uppercase */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold font-mono tracking-[0.25em] text-[#c5a880] uppercase mb-4 block"
          >
            INTELLIGENT DECISIONS. SMARTER BUILT ENVIRONMENT.
          </motion.span>

          {/* Main Headline in Times New Roman */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Operations and Maintenance
          </motion.h1>

          {/* Centered description text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Empower smarter facility operations with AI-driven CMMS, integrating maintenance intelligence, IoT connectivity, and Digital Twin technologies.
          </motion.p>
        </div>
      </section>

      {/* LIFECYCLE HORIZONTAL JOURNEY NAVIGATOR */}
      {/* <section className="py-24 px-4 bg-bg-primary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto"> */}

      {/* Stage Progress Tracker */}
      {/* <div className="relative flex items-center justify-between gap-4 mb-16 overflow-x-auto pb-6 scrollbar-thin">
            {lifecycleStages.map((stage, index) => {
              const isActive = selectedStage === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(stage.id)}
                  className={`flex items-center gap-4 text-left p-4 rounded-2xl border transition-all cursor-pointer min-w-[280px] shrink-0 ${
                    isActive 
                      ? 'bg-bg-secondary border-accent shadow-md' 
                      : 'bg-bg-secondary/40 border-border-color hover:border-accent/40'
                  }`}
                >
                  <span className={`p-3 rounded-xl font-bold text-sm shrink-0 ${
                    isActive ? 'bg-accent text-white' : 'bg-bg-tertiary text-text-secondary'
                  }`}>
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className={`font-display font-bold text-sm ${isActive ? 'text-text-primary' : 'text-text-secondary/70'}`}>
                      {stage.title}
                    </h3>
                    <span className="text-[10px] text-text-secondary tracking-tight block line-clamp-1">
                      {stage.description}
                    </span>
                  </div>
                </button>
              );
            })}
          </div> */}

      {/* Active Stage Detail & Solutions Scroll */}
      {/* <AnimatePresence mode="wait">
            {lifecycleStages.filter(s => s.id === selectedStage).map(stage => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
              > */}

      {/* 1. Stage Info Card */}
      {/* <div className="lg:col-span-1 bg-bg-secondary border border-border-color rounded-3xl overflow-hidden shadow-sm sticky top-28">
                  <div className="h-48 overflow-hidden relative">
                    <img src={stage.image} alt={stage.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] uppercase tracking-widest text-accent font-bold font-display mb-1 block">
                      Active Lifecycle Stage
                    </span>
                    <h2 className="text-2xl font-bold font-display text-text-primary mb-3">
                      {stage.title}
                    </h2>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6">
                      {stage.description}
                    </p>
                    <div className="pt-4 border-t border-border-color flex items-center justify-between text-xs text-text-secondary">
                      <span>Mapped Products</span>
                      <span className="font-bold text-text-primary">{stage.solutions.length} Solutions</span>
                    </div>
                  </div>
                </div> */}

      {/* 2 & 3. Mapped Solutions - AWS-Inspired Cards */}
      {/* <div className="lg:col-span-2">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-6 flex items-center gap-2">
                    <Layers className="h-4 w-4 text-accent" /> Available AI Modules for {stage.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featuredSolutions
                      .filter(sol => stage.solutions.includes(sol.id))
                      .map(sol => (
                        <Card
                          key={sol.id}
                          image={sol.image}
                          category={sol.category}
                          title={sol.title}
                          description={sol.description}
                          href="/contact"
                          onClick={() => {}}
                        />
                      ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        </Reveal3D>
      </section> */}



      {/* HORIZONTAL TIMELINE ROADMAP OF DATA INGESTION */}
      {/* <section className="py-24 px-4 bg-bg-secondary overflow-hidden border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-text-primary mb-4">
              Integrated Data Pipeline
            </h2>
            <p className="text-text-secondary max-w-md mx-auto">
              How model outputs carry forward across the entire lifecycle journey.
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row gap-8 items-stretch justify-between">
            {[
              { title: 'Revit BIM Upload', desc: 'Auto-checks specifications and local building code standard compliance.' },
              { title: 'Contract Est. Match', desc: 'Analyzes quantity takeoffs and flags subcontractor bidding anomalies.' },
              { title: 'Sensor Twin Link', desc: 'Links site temperature/acoustic data directly to operational twin.' },
              { title: 'Predictive CMMS', desc: 'Drives facility uptime and scans legal lease reviewing logs.' }
            ].map((step, idx) => (
              <motion.div
  key={idx}
  style={{
    transformStyle: 'preserve-3d',
    perspective: 1600,
    willChange: 'transform',
  }}
  initial={{
    opacity: 0,
    y: 30,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.3,
  }}
  whileHover={{
    y: -10,
    scale: 1.025,
    boxShadow:
      '0 30px 60px rgba(15, 23, 42, 0.12), 0 10px 25px rgba(239, 68, 68, 0.08)',
  }}
  transition={{
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    flex-1
    bg-white dark:bg-bg-primary
    border border-border-color
    rounded-2xl
    p-6
    relative
    flex flex-col
    justify-between
    group
    cursor-pointer
    overflow-hidden
    transition-colors
    duration-500
    hover:border-accent/60
  "
> */}
      {/* 3D accent edge */}
      {/* <div
    className="
      absolute inset-0
      rounded-2xl
      pointer-events-none
      border-t-2
      border-l-2
      border-accent/0
      group-hover:border-accent/70
      transition-all
      duration-500
    "
  /> */}

      {/* Cursor/hover spotlight */}
      {/* <div
    className="
      absolute
      -inset-24
      pointer-events-none
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-700
      bg-[radial-gradient(circle,rgba(239,68,68,0.08),transparent_65%)]
    "
  /> */}

      {/* Card content */}
      {/* <motion.div
    style={{
      transformStyle: 'preserve-3d',
    }}
    className="relative z-10"
  > */}
      {/* Number */}
      {/* <motion.span
      className="
        text-3xl
        font-extrabold
        text-accent/20
        group-hover:text-accent/50
        font-display
        block
        mb-4
        transition-colors
        duration-500
      "
      whileHover={{
        translateZ: 25,
        y: -3,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      0{idx + 1}
    </motion.span> */}

      {/* Title */}
      {/* <motion.h4
      className="
        font-display
        font-bold
        text-sm
        text-text-primary
        mb-2
      "
      whileHover={{
        translateZ: 18,
      }}
    >
      {step.title}
    </motion.h4> */}

      {/* Description */}
      {/* <p className="text-xs text-text-secondary leading-relaxed">
      {step.desc}
    </p>
  </motion.div> */}

      {/* Bottom accent line */}
      {/* <div
    className="
      absolute
      bottom-0
      left-6
      right-6
      h-[2px]
      bg-accent
      scale-x-0
      origin-left
      group-hover:scale-x-100
      transition-transform
      duration-500
    "
  /> */}

      {/* Arrow */}
      {/* {idx < 3 && (
    <motion.div
      className="
        hidden
        md:block
        absolute
        top-1/2
        right-[-24px]
        z-20
        text-accent
      "
      animate={{
        x: [0, 4, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <ChevronRight className="h-6 w-6" />
    </motion.div>
  )}
</motion.div>
            ))}
          </div>
        </div>
        </Reveal3D>
      </section> */}

      {/* CMMS TRACK RECORD & ADOPTION SECTION */}
      <section id="cmms-track-record" className="py-16 px-4 bg-bg-secondary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
            <div className="bg-bg-primary border border-border-color rounded-3xl p-8 md:p-12 shadow-xl hover:border-accent/40 transition-all duration-300">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-2 block font-display">
                    Proven Regional Deployment
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-text-primary mb-4">
                    The CMMS of Choice in Singapore & Beyond
                  </h2>
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-4">
                    We have deployed over <strong className="text-text-primary font-semibold">200 CMMS systems regionally</strong>. In Singapore, A8 is the trusted CMMS of choice among institutes of higher learning and public sector agencies.
                  </p>
                </div>

                <div className="lg:col-span-6">
                  <div className="bg-bg-secondary/70 p-6 rounded-2xl border border-border-color/80">
                    <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-4 font-display text-center lg:text-left">
                      Trusted Institutions & Agencies
                    </p>
                    <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
                      {[
                        { name: 'NTU', type: 'Institute of Higher Learning' },
                        { name: 'NUS', type: 'Institute of Higher Learning' },
                        { name: 'SUTD', type: 'Institute of Higher Learning' },
                        { name: 'SIT', type: 'Institute of Higher Learning' },
                        { name: 'Supreme Court', type: 'Public Sector Agency' },
                        { name: 'MHA', type: 'Public Sector Agency' },
                        { name: 'LTA', type: 'Public Sector Agency' }
                      ].map((org, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-2 rounded-xl bg-bg-primary border border-accent/20 hover:border-accent text-text-primary text-xs sm:text-sm font-semibold shadow-sm transition-all duration-300 flex items-center gap-2"
                        >
                          <span className="w-2 h-2 rounded-full bg-accent"></span>
                          {org.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal3D>
      </section>

      {/* A8 AI-Powered CMMS  MODULES SECTION */}
      <section id="cmms-modules" className="py-24 px-4 bg-bg-primary border-b border-border-color scroll-mt-24">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-3 block font-display">
                Enterprise Operations
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
                A8 AI-Powered CMMS  Modules
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto text-sm leading-relaxed">
                A comprehensive suite of modules designed to automate facility operations, predictive maintenance, and asset lifecycle management.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { title: 'Scheduled Maintenance (PM and CM)', icon: Calendar, description: 'Automate preventive and corrective maintenance task scheduling and dispatch.' },
                { title: 'Predictive Maintenance (condition based)', icon: TrendingUp, description: 'Utilize continuous IoT sensor telemetry to predict asset faults ahead of schedule.' },
                { title: 'Work Request Management', icon: ClipboardList, description: 'Streamline request creation, priority assignment, and technician queue management.' },
                { title: 'Fault Reporting Management', icon: AlertTriangle, description: 'Report, track, and classify structural and operational anomalies in real-time.' },
                { title: 'Tenant Management', icon: Users, description: 'Coordinate lease agreements, tenancy feedback, and communication logs dynamically.' },
                { title: 'Asset Management', icon: Boxes, description: 'Keep a complete database of equipment specifications, runtime histories, and depreciations.' },
                { title: 'Public/Customer Feedback Management', icon: MessageSquare, description: 'Structure multi-channel feedback workflows to resolve client queries automatically.' },
                { title: 'Space management', icon: Maximize2, description: 'Map unit allocations, department occupancy bounds, and layout usage efficiency.' },
              ].map((module, idx) => {
                const Icon = module.icon;
                return (
                  <motion.div key={idx} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      y: {
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                        delay: idx * 0.1
                      },
                      opacity: { duration: 0.6, delay: idx * 0.08 }
                    }}
                    whileHover={{ y: -12, scale: 1.025, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
                    className="relative p-6 bg-bg-secondary border border-border-color rounded-2xl flex flex-col gap-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-accent/50 hover:shadow-[0_20px_50px_rgba(239,68,68,0.16)] transition-all duration-500 group cursor-default overflow-hidden">
                    {/* Premium animated light sweep */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                      <div className="absolute -inset-y-full -left-1/2 w-[35%] rotate-[20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[450%] transition-all duration-1000 ease-out" />
                    </div>

                    {/* Top accent line */}
                    <motion.div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                    {/* Icon */}
                    <motion.div whileHover={{ scale: 1.12, rotate: -4, y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="relative p-3 rounded-xl bg-accent-glow text-accent w-max group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_8px_25px_rgba(239,68,68,0.28)] transition-all duration-500">
                      <Icon className="h-6 w-6" />

                      {/* Icon glow */}
                      <span className="absolute inset-0 rounded-xl bg-accent opacity-0 blur-md group-hover:opacity-20 transition-opacity duration-500" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="font-display font-bold text-sm text-text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                        {module.title}
                      </h3>

                      <p className="text-xs text-text-secondary leading-relaxed group-hover:text-text-primary/80 transition-colors duration-500">
                        {module.description}
                      </p>
                    </div>

                    {/* Bottom decorative accent */}
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-700 ease-out" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Reveal3D>
      </section>

      {/* DYNAMIC WORKFLOW CONFIGURATION DIAGRAM SECTION */}
      <section id="cmms-workflow" className="py-24 px-4 bg-bg-primary border-b border-border-color scroll-mt-24">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-3 block font-display">
                Operational Lifecycle
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
                Dynamic Workflow Configuration
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto text-sm leading-relaxed">
                Visualizing the step-by-step breakdown and verification pipelines within the A8 CMMS operational matrix.
              </p>
            </div>

            {/* Interactive 3D Stepper Layout */}
            <div className="bg-[#0b1528] border border-[#c5a880]/30 rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)] transition-all duration-500">
              {/* Background ambient light */}
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                {/* Left side: Interactive flowchart map */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                  <h3 className="text-lg font-bold font-display text-[#D4AF37] mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Activity className="h-5 w-5 animate-pulse" /> Live Workflow Map
                  </h3>

                  {/* Grid showing steps mapping the image layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative">
                    {[
                      { id: '1', title: 'Received by Helpdesk', desc: 'Helpdesk will review request & validate', action: 'Validate' },
                      { id: '2', title: 'Breakdown Form', desc: 'Case submitted to tech for restoration', action: 'Fault Restored' },
                      { id: '2a', title: 'Pending with Reason', desc: 'Tech submits pending if parts are needed', action: 'Awaiting Supply' },
                      { id: '3', title: 'Rectification Form', desc: 'Case assigned to tech for rectification', action: 'Fault Rectified' },
                      { id: '4', title: 'Pending TO/Engineer', desc: 'Case pending TO/Engineer approval', action: 'Review' },
                      { id: '5', title: 'Pending Manager', desc: 'Case pending Manager approval', action: 'Approve Cost' },
                      { id: '6', title: 'Pending Client Approval', desc: 'Case pending final Client approval', action: 'Client Signoff' },
                      { id: '7', title: 'Closed', desc: 'Case closed by Client', action: 'Complete' }
                    ].map((step, idx) => (
                      <motion.div
                        key={step.id}
                        whileHover={{ y: -4, scale: 1.02 }}
                        className="bg-slate-900/60 border border-slate-800 hover:border-[#D4AF37]/50 rounded-xl p-4 transition-all flex flex-col justify-between h-36 cursor-default relative overflow-hidden group/item"
                      >
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] font-mono text-[#D4AF37]/60 font-bold">0{idx + 1}</span>
                          <span className="text-[9px] uppercase tracking-wider font-bold bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-0.5 rounded-md">{step.action}</span>
                        </div>
                        <div className="mt-2">
                          <h4 className="font-display font-bold text-xs text-white mb-1 group-hover/item:text-[#D4AF37] transition-colors">{step.title}</h4>
                          <p className="text-[10px] text-slate-400 leading-normal line-clamp-2">{step.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Horizontal flow line logic indicator on desktop */}
                  <div className="hidden md:flex items-center justify-between px-6 pt-4 text-[10px] text-[#D4AF37]/40 font-mono border-t border-slate-800">
                    <span>[Helpdesk Review]</span>
                    <span>→</span>
                    <span>[Restoration SLA]</span>
                    <span>→</span>
                    <span>[Rectification SLA]</span>
                    <span>→</span>
                    <span>[Compliance Checks]</span>
                    <span>→</span>
                    <span>[Closed & Archived]</span>
                  </div>
                </div>

                {/* Right side: 3D interactive preview showcase */}
                <div className="lg:col-span-4 flex flex-col justify-center h-full">
                  <motion.div
                    whileHover={{ rotateY: -12, rotateX: 6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="bg-[#0b1528] border-2 border-[#c5a880]/50 rounded-3xl p-6 shadow-2xl relative overflow-hidden text-center flex flex-col justify-center items-center gap-6 min-h-[300px]"
                    style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                  >
                    {/* Golden accent ambient light inside preview */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.08),transparent_50%)] pointer-events-none" />

                    <div className="p-4 rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
                      <GitBranch className="h-10 w-10 animate-spin-slow" />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-lg text-white mb-2">Automated SLA Routing</h3>
                      <p className="text-xs text-blue-100/60 leading-relaxed max-w-xs mx-auto">
                        Our workflow automatically redirects tickets to the next approval layer in real-time, calculating response metrics and capturing timestamps at every stage.
                      </p>
                    </div>
                    <div className="w-full pt-4 border-t border-slate-800/80 flex items-center justify-around text-[10px] font-mono text-[#D4AF37]">
                      <span>● Real-time Clocking</span>
                      <span>● Loop Prevention</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Reveal3D>
      </section>

      {/* A8 AI-Powered CMMS  PREMIUM KEY FEATURES SECTION */}
      <section id="cmms-features" className="py-24 px-4 bg-bg-secondary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-3 block font-display">
                Advanced Capabilities
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
                A8 AI-Powered CMMS  Key Features
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto text-sm leading-relaxed">
                Explore the premium operational modules and integrations powering advanced, real-time maintenance efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { title: 'Bulk import – assets, users, inventories etc.', icon: Upload, description: 'Effortlessly ingest assets, user profiles, and catalog inventories in bulk from spreadsheet formats.' },
                { title: 'Dynamic Workflow Configuration', icon: GitBranch, description: 'Create and route maintenance workflows based on custom business logic and priority.' },
                { title: 'Asset Downtime Tracking with Failure Analysis', icon: Activity, description: 'Analyze asset operational outages with root-cause failure coding and impact logs.' },
                { title: 'Customizable Checklist', icon: CheckSquare, description: 'Build detailed validation procedures and compliance check sheets for technicians.' },
                { title: 'Customizable QR code format', icon: QrCode, description: 'Generate and format asset QR codes directly linked to instant work order actions.' },
                { title: 'Parts Replaced List', icon: Wrench, description: 'Audit and track spare parts consumption histories per asset maintenance ticket.' },
                { title: 'Breakdown Maintenance', icon: AlertOctagon, description: 'Trigger and log rapid reactive maintenance runs to resolve unexpected shutdowns.' },
                { title: 'Report Builder', icon: FileSpreadsheet, description: 'Structure custom data fields and layout designs to generate tailored performance briefs.' },
                { title: 'Maintenance History', icon: History, description: 'Access full service and audit logs to track the complete lifecycle of each asset.' },
                { title: 'Mobile Offline Support', icon: WifiOff, description: 'Perform updates, view checklists, and log data without active network coverage.' },
                { title: 'Schedule Reports', icon: Calendar, description: 'Configure automated reports to generate and send to key stakeholders on custom schedules.' },
                { title: 'API Integration', icon: Link2, description: 'Connect seamlessly with third-party software and systems using standardized APIs.' },
                { title: 'Integration with ERP', icon: Database, description: 'Sync inventories, procurement, and asset costs directly with corporate ERP suites.' },
                { title: 'SSO Login', icon: Key, description: 'Secure access utilizing single sign-on integrations with active enterprise directories.' },
                { title: 'WhatsApp & Other Social Media Integration', icon: MessageCircle, description: 'Receive instant alerts, submit requests, and update order statuses via messaging apps.' },
                { title: 'AI Integration', icon: Cpu, description: 'Leverage predictive analytics and smart agent suggestions to automate dispatch actions.' },
                // { title: 'Dynamic Reports', icon: PieChart, description: 'Build interactive reports with real-time filters and custom fields for instant insight.' },
                // { title: 'Customizable Analytical Dashboard', icon: Gauge, description: 'Personalize widgets, metrics, and chart views to track department KPIs in real-time.' },
                // { title: 'NFC and Beacon Support', icon: Radio, description: 'Deploy near-field communication or BLE beacons to verify physical technician presence.' },
                // { title: 'User Location Tracking', icon: MapPin, description: 'Track work location footprints and route dispatches using geofenced tracking.' },
              ].slice(0, showAllFeatures ? 20 : 8).map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      y: {
                        repeat: Infinity,
                        duration: 4.5,
                        ease: "easeInOut",
                        delay: idx * 0.15
                      }
                    }}
                    whileHover={{ y: -12, rotateY: 12, rotateX: 6, scale: 1.03, z: 20 }}
                    className="p-6 bg-bg-secondary dark:bg-[#0b1528] border border-border-color dark:border-[#c5a880]/30 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-[0_15px_30px_rgba(239,68,68,0.12)] dark:hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] hover:border-accent dark:hover:border-[#D4AF37]/85 transition-all duration-300 group cursor-default relative overflow-hidden"
                    style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                  >
                    {/* Background accent glow */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/3 dark:bg-[#D4AF37]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-accent/8 dark:group-hover:bg-[#D4AF37]/15 transition-all duration-500" />

                    <div className="p-3 rounded-xl bg-accent-glow dark:bg-[#D4AF37]/10 text-accent dark:text-[#D4AF37] w-max group-hover:bg-accent dark:group-hover:bg-[#D4AF37] group-hover:text-white dark:group-hover:text-[#0b1528] transition-all duration-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-text-primary dark:text-[#D4AF37] mb-1 group-hover:text-accent dark:group-hover:text-white transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-text-secondary dark:text-blue-100/60 leading-relaxed group-hover:text-text-primary dark:group-hover:text-blue-100/90 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex justify-end mt-10">
              <button
                onClick={() => setShowAllFeatures(!showAllFeatures)}
                className="group relative px-6 py-3 bg-bg-secondary dark:bg-[#0b1528] text-text-primary dark:text-[#D4AF37] border border-border-color dark:border-[#c5a880]/30 hover:border-accent dark:hover:border-[#D4AF37] hover:text-accent dark:hover:text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer text-sm shadow-sm hover:shadow-[0_8px_25px_rgba(239,68,68,0.1)] dark:hover:shadow-[0_8px_25px_rgba(212,175,55,0.1)]"
              >
                <span>{showAllFeatures ? 'Show Less' : 'More'}</span>
                <ChevronRight className={`h-4.5 w-4.5 transition-transform duration-300 ${showAllFeatures ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
              </button>
            </div>
          </div>
        </Reveal3D>
      </section>

      {/* SECTION: A8 ACMV OPERATIONAL INTELLIGENCE PLATFORM (MATCHING DESIGN IMAGE EXACTLY) */}
      <section id="aptiv8-acmv" className="py-24 px-4 bg-slate-50/70 dark:bg-[#070b19] border-t border-border-color dark:border-[#c5a880]/30 overflow-hidden relative">
        <Reveal3D>
          <div className="max-w-7xl mx-auto space-y-16 relative z-10">

            {/* Top Red Label & Main Title Header */}
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-3">
                <span className="w-10 h-[1.5px] bg-[#e30613]" />
                <span className="text-[#e30613] text-[11px] font-bold uppercase tracking-[0.2em] font-sans">
                  INTEGRATED BUILDING DECARBONISATION
                </span>
                <span className="w-10 h-[1.5px] bg-[#e30613]" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-[#101828] dark:text-white tracking-tight leading-tight">
                A8 ACMV Operational <span className="text-[#e30613]">Intelligence Platform</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-sans max-w-xl mx-auto">
                AI-powered insights. Smarter operations. Better outcomes.
              </p>
            </div>

            {/* 4 Feature Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Lower Energy Use',
                  desc: 'Real-time monitoring and optimisation for higher efficiency.',
                  icon: (
                    <svg className="w-5 h-5 text-[#e30613]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                },
                {
                  title: 'Improve Asset Performance',
                  desc: 'Reduce lifecycle cost through early detection and predictive insights.',
                  icon: (
                    <svg className="w-5 h-5 text-[#e30613]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  title: 'Boost Engineering Productivity',
                  desc: 'Automate workflows and simplify operations.',
                  icon: (
                    <svg className="w-5 h-5 text-[#e30613]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: 'Sustainability Outcomes',
                  desc: 'Meet energy, carbon and compliance goals with confidence.',
                  icon: (
                    <svg className="w-5 h-5 text-[#e30613]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )
                }
              ].map((card, idx) => (
                <Reveal3D key={idx} delay={idx * 0.1} direction="up">
                  <div className="bg-white dark:bg-[#0b1528] border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group h-full">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center mb-4 shrink-0">
                        {card.icon}
                      </div>
                      <h3 className="font-serif font-bold text-base text-[#101828] dark:text-white mb-2 leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                        {card.desc}
                      </p>
                    </div>
                    <div className="w-8 h-[2px] bg-[#e30613] mt-5 group-hover:w-full transition-all duration-500 rounded-full" />
                  </div>
                </Reveal3D>
              ))}
            </div>

            {/* TECHNICAL SOLUTION OVERVIEW */}
            <div className="pt-8">
              <Reveal3D direction="up">
                <div className="text-center mb-10">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="w-8 h-[1.5px] bg-[#e30613]" />
                    <span className="text-[#e30613] text-[10px] font-bold uppercase tracking-[0.2em] font-sans">
                      HOW IT WORKS
                    </span>
                    <span className="w-8 h-[1.5px] bg-[#e30613]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-extrabold text-[#101828] dark:text-white">
                    Technical Solution Overview
                  </h3>
                </div>
              </Reveal3D>

              {/* 5 Step Process Pipeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
                {[
                  {
                    step: '01',
                    title: 'Data Collection',
                    items: ['BMS / EMS / IoT Data', 'Historical Records', 'Site & Equipment Data', '3rd Party Platforms'],
                    icon: (
                      <svg className="w-4 h-4 text-[#e30613]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )
                  },
                  {
                    step: '02',
                    title: 'Data Processing',
                    items: ['Data Cleaning', 'Data Transformation', 'Feature Engineering', 'Data Integration'],
                    icon: (
                      <svg className="w-4 h-4 text-[#e30613]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    )
                  },
                  {
                    step: '03',
                    title: 'AI Analysis & Prediction',
                    items: ['Energy Load Analysis', 'Fault Detection', 'Performance Forecasting', 'Scenario Simulation'],
                    icon: (
                      <svg className="w-4 h-4 text-[#e30613]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    )
                  },
                  {
                    step: '04',
                    title: 'Actionable Insights',
                    items: ['Issue Prioritisation', 'Efficiency Recommendations', 'Maintenance Suggestions', 'Visual Reports & Alerts'],
                    icon: (
                      <svg className="w-4 h-4 text-[#e30613]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )
                  },
                  {
                    step: '05',
                    title: 'Continuous Improvement',
                    items: ['Performance Monitoring', 'Model Learning', 'Strategy Updates', 'Better ROI & Savings'],
                    icon: (
                      <svg className="w-4 h-4 text-[#e30613]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    )
                  }
                ].map((phase, pidx) => (
                  <Reveal3D key={pidx} delay={pidx * 0.08} direction="zoom">
                    <div className="bg-white dark:bg-[#0b1528] border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between relative group hover:border-[#e30613]/50 transition-all duration-300 min-h-[220px] h-full">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-bold font-sans px-2.5 py-0.5 rounded-full bg-red-50 dark:bg-red-950/40 text-[#e30613] border border-red-100 dark:border-red-900/40">
                            {phase.step}
                          </span>
                          <div className="w-8 h-8 rounded-xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center shrink-0">
                            {phase.icon}
                          </div>
                        </div>

                        <h4 className="text-sm font-sans font-bold text-[#101828] dark:text-white mb-3">
                          {phase.title}
                        </h4>

                        <ul className="space-y-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                          {phase.items.map((it, iidx) => (
                            <li key={iidx} className="flex items-start gap-1.5 leading-snug">
                              <span className="text-[#e30613] font-bold text-[10px] shrink-0">✓</span>
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Arrow indicator on desktop between cards */}
                      {pidx < 4 && (
                        <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-300 dark:text-slate-700">
                          <ChevronRight className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                  </Reveal3D>
                ))}
              </div>
            </div>

            {/* TWO COLUMN CAPABILITIES & VALUE OUTCOMES */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-6">
              
              {/* Left Column: Key Capabilities */}
              <div className="lg:col-span-6 space-y-6">
                <Reveal3D direction="left">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-6 h-[1.5px] bg-[#e30613]" />
                      <span className="text-[#e30613] text-[10px] font-bold uppercase tracking-[0.2em] font-sans">
                        KEY CAPABILITIES
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-extrabold text-[#101828] dark:text-white">
                      End-to-End Intelligence for HVAC Systems
                    </h3>
                  </div>
                </Reveal3D>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Real-time Monitoring & Visualisation', desc: 'Live data, alarms and system status.', icon: Activity },
                    { title: 'AI-powered Anomaly Detection', desc: 'Identify deviations and minimise downtime.', icon: Cpu },
                    { title: 'Predictive & Fault Analytics', desc: 'Detect issues before they happen.', icon: Search },
                    { title: 'Work Order Management', desc: 'Automate and streamline maintenance.', icon: Settings },
                    { title: 'Energy & Carbon Intelligence', desc: 'Optimise usage and reduce emissions.', icon: Leaf },
                    { title: 'Equipment Health Assessment', desc: 'Track performance and extend asset life.', icon: Activity },
                    { title: 'Custom Reporting & Compliance', desc: 'Meet standards and regulatory requirements.', icon: FileText },
                    { title: 'Scalable & Secure Platform', desc: 'Built for enterprise and multi-site operations.', icon: ShieldCheck }
                  ].map((cap, idx) => {
                    const CapIcon = cap.icon;
                    return (
                      <Reveal3D key={idx} delay={idx * 0.05} direction="up">
                        <div className="flex gap-3 items-start p-3 bg-white dark:bg-[#0b1528] rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-[#e30613]/40 transition-all h-full">
                          <div className="w-8 h-8 rounded-xl bg-red-50 dark:bg-red-950/30 text-[#e30613] flex items-center justify-center shrink-0 mt-0.5">
                            <CapIcon className="h-4 w-4" />
                          </div>
                          <div className="space-y-0.5">
                            <h4 className="text-xs font-bold font-sans text-[#101828] dark:text-white leading-snug">{cap.title}</h4>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans leading-relaxed">{cap.desc}</p>
                          </div>
                        </div>
                      </Reveal3D>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Measurable Impact Metric Cards */}
              <div className="lg:col-span-6 space-y-6">
                <Reveal3D direction="right">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-6 h-[1.5px] bg-[#e30613]" />
                      <span className="text-[#e30613] text-[10px] font-bold uppercase tracking-[0.2em] font-sans">
                        VALUE & OUTCOMES
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-extrabold text-[#101828] dark:text-white">
                      Measurable Impact
                    </h3>
                  </div>
                </Reveal3D>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Energy Savings',
                      val: '20–40%',
                      desc: 'reduction in energy consumption',
                      icon: Leaf,
                      color: 'bg-blue-50/70 border-blue-200/80 text-blue-700 dark:bg-blue-950/20 dark:border-blue-900/40 dark:text-blue-400'
                    },
                    {
                      title: 'Carbon Reduction',
                      val: '10–30%',
                      desc: 'lower carbon emissions',
                      icon: CheckCircle,
                      color: 'bg-emerald-50/70 border-emerald-200/80 text-emerald-700 dark:bg-emerald-950/20 dark:border-emerald-900/40 dark:text-emerald-400'
                    },
                    {
                      title: 'Higher Uptime',
                      val: '+15–25%',
                      desc: 'improvement in system availability',
                      icon: Clock,
                      color: 'bg-purple-50/70 border-purple-200/80 text-purple-700 dark:bg-purple-950/20 dark:border-purple-900/40 dark:text-purple-400'
                    },
                    {
                      title: 'Cost Efficiency',
                      val: '15–30%',
                      desc: 'reduction in maintenance cost',
                      icon: Database,
                      color: 'bg-amber-50/70 border-amber-200/80 text-amber-700 dark:bg-amber-950/20 dark:border-amber-900/40 dark:text-amber-400'
                    },
                    {
                      title: 'Better Asset Life',
                      val: '+5–10 Years',
                      desc: 'extended asset lifespan',
                      icon: ShieldCheck,
                      color: 'bg-cyan-50/70 border-cyan-200/80 text-cyan-700 dark:bg-cyan-950/20 dark:border-cyan-900/40 dark:text-cyan-400'
                    },
                    {
                      title: 'Regulatory Compliance',
                      val: '100%',
                      desc: 'audit-ready and traceable records',
                      icon: Award,
                      color: 'bg-rose-50/70 border-rose-200/80 text-rose-700 dark:bg-rose-950/20 dark:border-rose-900/40 dark:text-rose-400'
                    }
                  ].map((metric, idx) => {
                    const MetIcon = metric.icon;
                    return (
                      <Reveal3D key={idx} delay={idx * 0.06} direction="zoom">
                        <div className={`p-4 border rounded-2xl flex flex-col justify-between ${metric.color} transition-all shadow-sm h-full`}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] uppercase font-bold tracking-wider font-sans opacity-80">{metric.title}</span>
                            <MetIcon className="h-4 w-4 opacity-80" />
                          </div>
                          <div>
                            <strong className="text-2xl md:text-3xl font-extrabold font-sans block leading-tight mb-1">{metric.val}</strong>
                            <span className="text-[10px] opacity-75 font-sans block">{metric.desc}</span>
                          </div>
                        </div>
                      </Reveal3D>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* RAPID ASSESSMENT BANNER CARD */}
            <Reveal3D direction="up" delay={0.1}>
              <div className="bg-[#0b1528] border border-slate-800 rounded-[28px] p-8 md:p-10 shadow-2xl relative overflow-hidden text-white mt-12">
                {/* Corner red geometric overlay accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#e30613] via-[#e30613]/80 to-transparent pointer-events-none opacity-80" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  {/* Left Text */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-[1.5px] bg-[#e30613]" />
                      <span className="text-[#e30613] text-[10px] font-bold uppercase tracking-[0.2em] font-sans">
                        RAPID ASSESSMENT
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-extrabold text-white">
                      Quick Insights. Real Impact.
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      A 3–5 week engagement to assess your ACMV systems, identify opportunities and deliver a clear roadmap for improvement.
                    </p>
                  </div>

                  {/* Right 6-Glass Cards Grid */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { title: 'Data Collection', desc: 'Gather system & operational data', icon: Archive },
                      { title: 'AI Analysis', desc: 'Identify inefficiencies & risks', icon: Cpu },
                      { title: 'Recommendation Report', desc: 'Clear actions & ROI estimates', icon: FileText },
                      { title: 'Key Findings', desc: 'Quick wins & long-term improvements', icon: Clock },
                      { title: 'Report & Presentation', desc: 'Executive-ready summary', icon: Briefcase },
                      { title: 'On-Site / Virtual Review', desc: 'Flexible delivery options', icon: Users }
                    ].map((item, idx) => {
                      const GlassIcon = item.icon;
                      return (
                        <Reveal3D key={idx} delay={idx * 0.05} direction="zoom">
                          <div className="p-3.5 bg-white/10 dark:bg-white/5 border border-white/15 rounded-xl backdrop-blur-md hover:bg-white/15 transition-all h-full">
                            <GlassIcon className="h-4 w-4 text-[#e30613] mb-2" />
                            <h4 className="font-sans font-bold text-xs text-white mb-0.5 leading-snug">{item.title}</h4>
                            <p className="text-[10px] text-slate-300 font-sans leading-tight">{item.desc}</p>
                          </div>
                        </Reveal3D>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal3D>

          </div>
        </Reveal3D>
      </section>

      {/* NEW SECTION: A8 ACMV CO-PILOT */}
      <section id="a8-acmv-copilot" className="py-24 px-4 bg-slate-50/50 dark:bg-[#070d18] border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
        {/* Subtle background red/blue ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

        {/* Top & Bottom corner geometric accents matching image */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#e30613] via-[#e30613]/70 to-transparent pointer-events-none opacity-90 clip-corner" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-[#0b1528] via-[#e30613]/80 to-transparent pointer-events-none opacity-90 clip-corner" />

        <Reveal3D>
          <div className="max-w-7xl mx-auto space-y-10 relative z-10">
            
            {/* 1. TOP HEADER & CHAT DEMO BLOCK */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Title & 4 Value Icons */}
              <div className="lg:col-span-7 space-y-5">
                <span className="px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200/80 dark:border-red-900/40 text-[#e30613] text-[10px] font-sans font-bold uppercase tracking-wider inline-block">
                  INTEGRATED AI ASSISTANT
                </span>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101828] dark:text-white leading-[1.15]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  Your <span className="text-[#e30613]">AI Co-Pilot</span> for ACMV Excellence
                </h2>
                
                <p className="text-xs font-bold text-[#e30613] uppercase tracking-wider font-sans">
                  SMARTER OPERATIONS. CONFIDENT DECISIONS.
                </p>
                
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-sans">
                  A8 Co-Pilot is your always-on ACMV AI assistant that turns complex building data into clear answers and actionable recommendations.
                </p>

                {/* 4 Feature Pill Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    { title: 'Ask. Get answers.', desc: 'Natural language answers in seconds.', icon: BarChart3 },
                    { title: 'See. Understand.', desc: 'Visual insights & actionable intelligence.', icon: Eye },
                    { title: 'Act. Improve.', desc: 'Personalised recommendations.', icon: Target },
                    { title: 'Stay in Control.', desc: 'Safe, secure and built for your operations.', icon: ShieldCheck }
                  ].map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-[#0b1528] border border-slate-200/80 dark:border-slate-800 shadow-sm">
                        <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/40 text-[#e30613] flex items-center justify-center shrink-0">
                          <ItemIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-[#101828] dark:text-white font-sans leading-tight">{item.title}</h4>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-sans leading-tight mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Glass Floating Chat Card */}
              <div className="lg:col-span-5 relative">
                <div className="bg-white/80 dark:bg-[#0b1528]/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-2xl backdrop-blur-xl relative overflow-hidden border-t-white/40">
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold text-slate-800 dark:text-white font-sans">A8 Co-Pilot Chat</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">v1.3.0</span>
                  </div>

                  {/* Chat Content */}
                  <div className="space-y-4">
                    {/* User Prompt */}
                    <div className="flex justify-end">
                      <div className="bg-[#e30613] text-white px-4 py-2.5 rounded-2xl rounded-tr-none text-xs font-sans font-medium shadow-md">
                        Show me your ACMV system performing today?
                      </div>
                    </div>

                    {/* AI Response Card */}
                    <div className="bg-slate-50 dark:bg-[#121c2e] border border-slate-200/80 dark:border-slate-800 rounded-2xl p-3.5 space-y-3 shadow-sm">
                      <p className="text-xs font-bold text-slate-800 dark:text-white font-sans">
                        Today, your ACMV system is performing well.
                      </p>

                      {/* 3 Status Columns */}
                      <div className="grid grid-cols-3 gap-2 py-2 border-t border-b border-slate-200/60 dark:border-slate-800/80 text-center">
                        <div>
                          <span className="text-[9px] text-slate-400 font-sans block">Energy Use</span>
                          <strong className="text-emerald-600 font-bold text-xs font-sans">↓ 12%</strong>
                        </div>
                        <div className="border-l border-r border-slate-200/60 dark:border-slate-800/80 px-1">
                          <span className="text-[9px] text-slate-400 font-sans block">Comfort Level</span>
                          <strong className="text-slate-700 dark:text-slate-200 font-bold text-xs font-sans">72% - Optimal</strong>
                        </div>
                        <div>
                          <span className="text-[9px] text-slate-400 font-sans block">System Health</span>
                          <strong className="text-emerald-600 font-bold text-xs font-sans">Normal</strong>
                        </div>
                      </div>

                      {/* Recommendation Alert */}
                      <div className="flex items-start gap-2 bg-red-50/60 dark:bg-red-950/30 p-2 rounded-xl border border-red-100 dark:border-red-900/30">
                        <span className="text-[#e30613] text-xs font-bold shrink-0">💡</span>
                        <p className="text-[10px] text-[#e30613] font-bold font-sans leading-tight">
                          Top Recommendation: <span className="font-normal text-slate-700 dark:text-slate-300">Optimise AHU-3 supply air temperature setpoint to improve efficiency.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* 2. MIDDLE 4 HIGHLIGHT CARDS BAR */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {[
                { title: 'Reports & Datasets', desc: 'Instant access, export, and analyse.', icon: FileText },
                { title: 'No-Site Visits', desc: '100% remote, secure & efficient.', icon: Eye },
                { title: 'No Retrofitting', desc: 'Works with your existing BMS.', icon: Wrench },
                { title: 'No Disruption', desc: 'Fits into your operations.', icon: Clock }
              ].map((card, idx) => {
                const CardIcon = card.icon;
                return (
                  <Reveal3D key={idx} delay={idx * 0.08} direction="up">
                    <div className="bg-white dark:bg-[#0b1528] border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 flex items-center gap-3.5 shadow-sm hover:border-[#e30613]/40 transition-all h-full">
                      <div className="w-10 h-10 rounded-2xl bg-red-50 dark:bg-red-950/40 text-[#e30613] flex items-center justify-center shrink-0">
                        <CardIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#101828] dark:text-white font-sans">{card.title}</h4>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-sans leading-tight mt-0.5">{card.desc}</p>
                      </div>
                    </div>
                  </Reveal3D>
                );
              })}
            </div>

            {/* 3. LOWER SECTION: ONE PRODUCT COMPLETE CONTROL & BUILT FOR ACVM TEAMS */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
              
              {/* Left Dark Navy Container (One Product. Complete Control.) */}
              <div className="lg:col-span-8 bg-[#0b1528] border border-slate-800 rounded-[28px] p-6 sm:p-8 shadow-2xl relative overflow-hidden text-white min-h-[380px] flex flex-col justify-between">
                
                {/* Background Architectural Illustration */}
                <div 
                  className="absolute right-0 bottom-0 w-2/3 h-full bg-cover bg-right-bottom pointer-events-none opacity-20"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80')" }}
                />

                <h3 className="text-2xl font-serif font-extrabold text-white mb-6 relative z-10">
                  One Product. Complete Control.
                </h3>

                <div className="space-y-3 relative z-10 max-w-xl">
                  {[
                    { title: 'Natural Language Q&A', desc: 'Ask anything about your ACMV system in plain English. Get instant, accurate answers.', icon: MessageSquare },
                    { title: 'Instant Insights & Trends', desc: 'Understand what\'s happening with your systems through automated summaries and visual trends.', icon: TrendingUp },
                    { title: 'Alerts & Anomaly Detection', desc: 'Proactively learn for issues, risks, and unusual patterns before they impact operations.', icon: AlertTriangle },
                    { title: 'Action Recommendations', desc: 'AI-powered recommendations to improve efficiency, comfort and reliability.', icon: Leaf },
                    { title: 'Knowledge On-Demand', desc: 'Access SOPs, technical docs and system knowledge whenever you need it.', icon: Archive }
                  ].map((row, idx) => {
                    const RowIcon = row.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-white/10 dark:bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/15 transition-all">
                        <div className="w-8 h-8 rounded-xl bg-[#e30613]/20 text-[#e30613] flex items-center justify-center shrink-0">
                          <RowIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold font-sans text-white leading-tight">{row.title}</h4>
                          <p className="text-[10px] text-slate-300 font-sans leading-tight mt-0.5">{row.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Right Column: Built for A8 Towers & Works With What You Have */}
              <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
                
                {/* Built for A8 Towers Card */}
                <div className="bg-red-50/70 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-[28px] p-6 shadow-sm relative overflow-hidden">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-8 rounded-xl bg-red-100 dark:bg-red-900/40 text-[#e30613] flex items-center justify-center">
                      <Boxes className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold font-sans text-slate-900 dark:text-white">Built for A8™ Towers</h4>
                  </div>

                  <ul className="space-y-2 text-xs font-sans text-slate-700 dark:text-slate-300">
                    {[
                      'Singaporean Management',
                      'Facility Engineers',
                      'Building Technicians',
                      'Energy Managers',
                      'Maintenance Teams'
                    ].map((target, tidx) => (
                      <li key={tidx} className="flex items-center gap-2">
                        <span className="text-[#e30613] font-bold text-xs">✓</span>
                        <span>{target}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Works With What You Have Card */}
                <div className="bg-blue-50/70 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 rounded-[28px] p-6 shadow-sm relative overflow-hidden">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold font-sans text-slate-900 dark:text-white">Works With What You Have</h4>
                  </div>

                  <ul className="space-y-2 text-xs font-sans text-slate-700 dark:text-slate-300">
                    {[
                      'Tridentg BMS (BACnet / Modbus)',
                      'Secure Cloud or On-Premise'
                    ].map((item, iidx) => (
                      <li key={iidx} className="flex items-center gap-2">
                        <span className="text-blue-600 font-bold text-xs">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

          </div>
        </Reveal3D>
      </section>

      {/* FINAL PAGE ACTION CTA */}
      {/* <section className="py-20 px-4 bg-bg-secondary text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.08),transparent_60%)] pointer-events-none" />
        <Reveal3D>
          <motion.div
            whileHover={{ rotateX: 6, rotateY: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            className="group bg-[#0b1528] border border-[#c5a880]/50 rounded-[32px] p-10 md:p-16 max-w-4xl mx-auto shadow-2xl relative overflow-hidden hover:bg-white/80 dark:hover:bg-slate-900/60 hover:shadow-[0_30px_60px_rgba(239,68,68,0.15)] hover:border-red-500/50 transition-all duration-500 cursor-default"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-[#D4AF37] group-hover:text-text-primary mb-6 transition-colors duration-500">
              Need a custom integration check?
            </h2>
            <p className="text-blue-100/70 group-hover:text-text-secondary max-w-md mx-auto mb-8 leading-relaxed text-sm transition-colors duration-500">
              We train neural models on specialized local datasets, allowing builders to run private instances complying with Singapore regulations.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0b1528] group-hover:bg-accent group-hover:text-white rounded-full font-semibold transition-all duration-500 shadow-lg group-hover:shadow-accent-glow"
            >
              Request API Documentations <ChevronRight className="h-5 w-5" />
            </a>
          </motion.div>
        </Reveal3D>
      </section> */}

    </div>
  );
}
