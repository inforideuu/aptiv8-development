import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, CheckCircle2, ArrowRight, Smartphone, Mic, BookOpen,
  ClipboardCheck, Bot, FileText, ChevronRight, Layers, ShieldCheck,
  Zap, TrendingUp, DollarSign, Cpu, Clock, Award, Star, CheckSquare,
  Activity, MapPin, Fingerprint, History, PlusCircle, RefreshCw, Wrench,
  Globe, Bell, BarChart3, Navigation, Workflow, Shield, Monitor, Coins, Check, FileCheck, ArrowUpRight,
  CheckCircle, Users, BarChart2, Calendar, Settings, Sparkle, ChevronDown, HelpCircle, Rocket, Leaf
} from 'lucide-react';
import Reveal3D from '../components/Reveal3D';

export default function A8CmmsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get('page'), 10) || 1;
  const [activePage, setActivePageState] = React.useState(initialPage);

  React.useEffect(() => {
    const pageVal = parseInt(searchParams.get('page'), 10) || 1;
    setActivePageState(pageVal);
  }, [searchParams]);

  const setActivePage = (page) => {
    setActivePageState(page);
    setSearchParams({ page: page.toString() });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const [activeSolutionTab, setActiveSolutionTab] = React.useState('maintenance');
  const [openFaqIndex, setOpenFaqIndex] = React.useState(0);

  const faqData = [
    {
      q: "What does CMMS software do?",
      a: "CMMS, or Computerized Maintenance Management System software, manages and tracks organizational maintenance activities. It centralizes maintenance data, schedules preventive tasks, monitors equipment health, and manages work orders. CMMS helps reduce equipment downtime, optimize inventory, and improve resource allocation. It streamlines maintenance processes, ensuring efficient and timely upkeep of assets."
    },
    {
      q: "Who uses CMMS?",
      a: "CMMS is used by maintenance teams across various industries, including manufacturing, healthcare, hospitality, education, and government. Facility managers, technicians, and maintenance supervisors utilize it to schedule tasks, track equipment health, and manage work orders. Organizations, big or small, employ CMMS to optimize their maintenance operations, enhance asset longevity, and reduce operational costs. It's a vital tool for any entity aiming for efficient asset management."
    },
    {
      q: "Is CMMS part of ERP?",
      a: "CMMS (Computerized Maintenance Management System) and ERP (Enterprise Resource Planning) are distinct systems. However, CMMS can be a module within an ERP or integrated. While ERP manages core business processes, CMMS focuses on maintenance management tasks. Integrating CMMS with ERP allows organizations to streamline operations, share data seamlessly, and optimize asset and resource management across departments."
    },
    {
      q: "Is A8 CMMS software cloud based or do I need to install it on premises?",
      a: "A8 CMMS software is cloud-based, allowing users to access it from anywhere with an internet connection. This eliminates the need for on-premises installation and provides flexibility, scalability, and real-time data access. With cloud-based solutions like A8, organizations can reduce IT overhead, ensure automatic updates, and benefit from enhanced security features."
    },
    {
      q: "How does the mobile CMMS work and what features does it offer?",
      a: "The mobile CMMS app lets users manage maintenance tasks from their devices. It offers real-time notifications, work order management, asset tracking, barcode scanning, and offline mode. Users can also attach photos, schedule tasks, and use GPS tracking. It streamlines operations, improves accuracy, and aids in swift decision-making, all on the go."
    },
    {
      q: "What kind of training and support do you provide for CMMS implementation?",
      a: "We offer comprehensive training for CMMS implementation, ensuring users are well-equipped to utilize all features. Our support includes hands-on tutorials, webinars, and user manuals. Additionally, our dedicated support team is available for real-time assistance and queries. We aim to ensure a smooth transition and maximize the software's benefits for your organization."
    },
    {
      q: "What security measures are in place to protect our data?",
      a: "Our CMMS prioritizes data security. We employ advanced encryption techniques to safeguard your data during transmission and storage. Regular security audits, firewall protections, and secure hosting environments further enhance data safety. Additionally, we adhere to global data protection regulations, ensuring your information remains confidential and secure at all times. Your data's integrity and privacy are our top concerns."
    },
    {
      q: "How does A8 CMMS software assist in preventive maintenance scheduling?",
      a: "A8 CMMS software streamlines preventive maintenance by allowing users to set routine schedules for equipment checks and services. It sends timely alerts and reminders, ensuring no task is missed. By logging equipment history and performance data, the software aids in predicting potential issues, reducing downtime, and prolonging equipment life. This systematic approach ensures optimal equipment performance and reduces costly breakdowns."
    },
    {
      q: "Can I track and manage inventory and spare parts using the CMMS?",
      a: "Yes, with A8 CMMS, you can efficiently track and manage inventory and spare parts. The software provides real-time visibility into stock levels, helping prevent shortages or overstocking. It logs usage patterns, facilitates reorder triggers, and maintains a detailed record of parts used in maintenance tasks. This centralized system ensures the timely availability of essential parts, optimizing maintenance operations."
    },
    {
      q: "How often do you release updates and how are they implemented?",
      a: "A8 regularly releases updates to enhance functionality and address user feedback. Updates are rolled out periodically, ensuring the software remains up-to-date with industry standards. Implementation is seamless, with most updates being cloud-based, requiring no manual intervention. Users are notified in advance, and comprehensive support is provided to ensure a smooth transition and minimal disruption to operations."
    },
    {
      q: "How does the CMMS software help in reducing equipment downtime?",
      a: "CMMS software reduces equipment downtime by facilitating proactive maintenance scheduling, real-time equipment monitoring, and swift response to issues. It provides insights into equipment performance, predicts potential failures, and ensures timely preventive maintenance. By centralizing data and automating workflows, CMMS enables quick decision-making, ensures timely repairs, and minimizes unplanned outages, increasing equipment availability and operational efficiency."
    }
  ];

  const solutionTabs = [
    {
      id: 'maintenance',
      title: 'Maintenance Management',
      shortTitle: 'Maintenance Management',
      icon: Wrench,
      badge: 'Proactive Maintenance',
      description: 'A8 CMMS elevates maintenance management to new heights, streamlining tasks and ensuring equipment longevity. Our platform offers predictive maintenance, real-time monitoring, and efficient scheduling. Reduce downtimes, enhance productivity, and ensure safety with our advanced tools. With A8, maintenance becomes proactive, not reactive, driving operational excellence and maximizing ROI.',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80',
      imageTag: 'Predictive & Real-Time Monitoring',
      features: [
        'Predictive maintenance & automated work orders',
        'Real-time equipment performance monitoring',
        'Efficient technician scheduling & safety compliance',
        'Maximized ROI with proactive operational workflows'
      ],
      stats: { val: '99.4%', label: 'Equipment Uptime' }
    },
    {
      id: 'asset',
      title: 'Asset Management',
      shortTitle: 'Asset Management',
      icon: Layers,
      badge: 'Lifecycle Optimization',
      description: "A8 CMMS revolutionizes asset management by offering comprehensive tracking and monitoring. Our platform ensures assets' longevity, optimizes their lifecycle, and reduces operational costs. With real-time data analytics, make informed decisions and prevent asset failures. Experience a holistic approach where assets are managed and optimized for peak performance. Trust A8 for a seamless asset management journey.",
      image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80',
      imageTag: 'Complete Asset Lifecycle Tracking',
      features: [
        'Comprehensive asset tracking & condition monitoring',
        'Lifecycle optimization & reduced operational costs',
        'Real-time data analytics for failure prevention',
        'Holistic peak performance asset strategies'
      ],
      stats: { val: '35%', label: 'Cost Reduction' }
    },
    {
      id: 'facility',
      title: 'Facility Management',
      shortTitle: 'Facility Management',
      icon: Monitor,
      badge: 'Smart Building Operations',
      description: "A8 CMMS revolutionizes facility management, offering a comprehensive suite to optimize building operations. Our platform provides real-time insights and automated workflows, from space utilization to energy conservation. Ensure safety, enhance comfort, and reduce operational costs with our state-of-the-art solutions. With A8, facilities are not just managed; they're transformed into efficient, sustainable, and technologically advanced spaces.",
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
      imageTag: 'Automated Facility Operations',
      features: [
        'Space utilization & energy conservation insights',
        'Automated workflows for facility maintenance',
        'Enhanced safety, occupant comfort & cost control',
        'Sustainable & technologically advanced space transformation'
      ],
      stats: { val: '40%', label: 'Energy Saved' }
    },
    {
      id: 'field_service',
      title: 'Field Service Management',
      shortTitle: 'Field Service Management',
      icon: Navigation,
      badge: 'On-Demand Service Excellence',
      description: 'A8 CMMS streamlines field service operations, ensuring timely and efficient service delivery. Our platform offers real-time tracking, automated scheduling, and detailed reporting. Technicians receive instant updates, reducing response times and enhancing customer satisfaction. Integrated with advanced analytics, A8 optimizes routes, manages resources, and ensures top-notch service quality. Elevate your field services with precision and reliability through A8.',
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80',
      imageTag: 'Real-Time Field Dispatch & Analytics',
      features: [
        'Real-time GPS tracking & automated technician dispatch',
        'Instant updates & faster customer response times',
        'Route optimization & resource management analytics',
        'High-precision, reliable field service quality'
      ],
      stats: { val: '45m', label: 'Avg Response Time' }
    }
  ];

  const [expandedFeatures, setExpandedFeatures] = React.useState({});

  const toggleFeatureExpand = (idx) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

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
            A8 <span className="text-[#e30613]">CMMS</span>
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

      {/* CMMS View Bar (Placed AFTER Hero Section) */}
      <section className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-4 px-4 shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">CMMS View:</span>
            <span className="px-3 py-1 rounded-full bg-red-100 border border-red-200 text-[#e30613] dark:bg-red-500/10 dark:border-red-500/20 text-xs font-bold font-mono">
              {activePage === 1 && 'Page 1 — Main Overview'}
              {activePage === 2 && 'Page 2 — Features & Capabilities'}
              {activePage === 3 && 'Page 3 — Integrated Solutions & FAQ'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActivePage(1)}
              className={`px-5 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${activePage === 1
                  ? 'bg-[#e30613] text-white shadow-lg shadow-red-500/30'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:border-transparent dark:hover:bg-slate-700 dark:hover:text-white'
                }`}
            >
              <span>Page 1</span>
              {activePage === 1 && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
            </button>
            <button
              onClick={() => setActivePage(2)}
              className={`px-5 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${activePage === 2
                  ? 'bg-[#e30613] text-white shadow-lg shadow-red-500/30'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:border-transparent dark:hover:bg-slate-700 dark:hover:text-white'
                }`}
            >
              <span>Page 2</span>
              {activePage === 2 && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
            </button>
            <button
              onClick={() => setActivePage(3)}
              className={`px-5 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${activePage === 3
                  ? 'bg-[#e30613] text-white shadow-lg shadow-red-500/30'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:border-transparent dark:hover:bg-slate-700 dark:hover:text-white'
                }`}
            >
              <span>Page 3</span>
              {activePage === 3 && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
            </button>
          </div>
        </div>
      </section>

      {activePage === 2 ? (
        /* PAGE 2 CONTENT: SPLIT INTO SEPARATE DISTINCT SECTIONS */
        <>

          {/* SECTION 1: TOUCHING THE BASICS OF CMMS SOFTWARE (MATCHING IMAGE DESIGN EXACTLY) */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f5f8ff] via-[#f9fbff] to-[#f4f7ff] dark:bg-[#070d18] text-slate-900 dark:text-white relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
            {/* Soft decorative background dots / radial glows */}
            <div className="absolute top-6 left-6 w-72 h-72 bg-red-400/10 dark:bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-6 right-6 w-80 h-80 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Right Decorative Dot Grid */}
            <div className="absolute top-12 right-12 opacity-30 pointer-events-none hidden md:block bg-[radial-gradient(#94a3b8_2px,transparent_2px)] [background-size:14px_14px] w-36 h-36" />
            <div className="absolute bottom-12 right-12 opacity-30 pointer-events-none hidden md:block bg-[radial-gradient(#94a3b8_2px,transparent_2px)] [background-size:14px_14px] w-36 h-36" />

            <div className="max-w-7xl mx-auto space-y-14 relative z-10">

              {/* Section 1 Header Banner */}
              <Reveal3D direction="up">
                <div className="text-center max-w-4xl mx-auto space-y-4">
                  {/* Top Badge: Powerful CMS with Red Lines */}
                  <div className="flex items-center justify-center gap-3">
                    <span className="w-10 sm:w-14 h-[2px] bg-[#e30613]" />
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-200 dark:border-red-900/50 bg-red-50/80 dark:bg-red-950/40 text-[#e30613] text-xs font-bold font-sans tracking-wide shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-[#e30613]" />
                      <span>Powerful CMS</span>
                    </div>
                    <span className="w-10 sm:w-14 h-[2px] bg-[#e30613]" />
                  </div>

                  {/* Main Headline with Red CMS Highlight */}
                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] dark:text-white font-sans tracking-tight leading-tight">
                    Touching the Basis of <span className="text-[#e30613]">CMMS</span> Software
                  </h2>

                  {/* Subtitle / Intro Description */}
                  <p className="text-xs sm:text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-sans max-w-3xl mx-auto font-normal">
                    A Computerized Maintenance Management System (CMMS) is a sophisticated software solution to centralize asset intelligence and streamline maintenance management tasks.
                  </p>
                </div>
              </Reveal3D>

              {/* 10 Strategic Benefits Grid (Styling Matching Attached Image) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Boost your Bottom line:",
                    desc: "With CMMS, you can significantly reduce maintenance costs and unexpected downtimes, ensuring your assets are always up and running. This means more productivity and more profits!",
                    icon: Leaf,
                    cardBorder: "border-emerald-200 dark:border-emerald-900/60 bg-gradient-to-b from-emerald-50/40 to-white dark:from-emerald-950/20 dark:to-[#0b1528]",
                    iconBg: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400",
                    arrowBg: "bg-emerald-100/70 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400"
                  },
                  {
                    title: "Illuminate your decision making:",
                    desc: "Dive deep into data-driven insights. CMMS provides detailed analytics and reports, helping you make informed decisions that can transform your maintenance operations and drive growth.",
                    icon: Calendar,
                    cardBorder: "border-blue-200 dark:border-blue-900/60 bg-gradient-to-b from-blue-50/40 to-white dark:from-blue-950/20 dark:to-[#0b1528]",
                    iconBg: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
                    arrowBg: "bg-blue-100/70 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"
                  },
                  {
                    title: "Global operations, seamless management:",
                    desc: "Whether your assets are in New York or New Delhi, manage them effortlessly from one centralized platform. CMMS offers real-time tracking and management, no matter where your assets are located.",
                    icon: Layers,
                    cardBorder: "border-purple-200 dark:border-purple-900/60 bg-gradient-to-b from-purple-50/40 to-white dark:from-purple-950/20 dark:to-[#0b1528]",
                    iconBg: "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400",
                    arrowBg: "bg-purple-100/70 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400"
                  },
                  {
                    title: "Time is money!, save both:",
                    desc: "Automate routine tasks, streamline work orders, and reduce manual paperwork. With CMMS, you get more done in less time, freeing up resources for other revenue-generating activities.",
                    icon: Clock,
                    cardBorder: "border-amber-200 dark:border-amber-900/60 bg-gradient-to-b from-amber-50/40 to-white dark:from-amber-950/20 dark:to-[#0b1528]",
                    iconBg: "bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400",
                    arrowBg: "bg-amber-100/70 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400"
                  },
                  {
                    title: "Maximize asset lifespan:",
                    desc: "Ensure your assets are always in tip-top shape. Regular maintenance schedules and timely repairs mean your equipment lasts longer and performs better.",
                    icon: ShieldCheck,
                    cardBorder: "border-cyan-200 dark:border-cyan-900/60 bg-gradient-to-b from-cyan-50/40 to-white dark:from-cyan-950/20 dark:to-[#0b1528]",
                    iconBg: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/40 dark:text-cyan-400",
                    arrowBg: "bg-cyan-100/70 text-cyan-600 dark:bg-cyan-900/40 dark:text-cyan-400"
                  },
                  {
                    title: "Stay connected always:",
                    desc: "With mobile integrations, receive real-time notifications and updates. You're always in the loop whether in the office or on the go.",
                    icon: FileText,
                    cardBorder: "border-pink-200 dark:border-pink-900/60 bg-gradient-to-b from-pink-50/40 to-white dark:from-pink-950/20 dark:to-[#0b1528]",
                    iconBg: "bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-400",
                    arrowBg: "bg-pink-100/70 text-pink-600 dark:bg-pink-900/40 dark:text-pink-400"
                  },
                  {
                    title: "Elevate customer satisfaction:",
                    desc: "Deliver consistent and efficient service to your clients. With reduced downtimes and efficient operations, ensure your clients are always satisfied, leading to repeat business and glowing reviews.",
                    icon: Users,
                    cardBorder: "border-purple-200 dark:border-purple-900/60 bg-gradient-to-b from-purple-50/40 to-white dark:from-purple-950/20 dark:to-[#0b1528]",
                    iconBg: "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400",
                    arrowBg: "bg-purple-100/70 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400"
                  },
                  {
                    title: "Safety first always:",
                    desc: "Ensure compliance with industry standards and maintain a safe working environment. CMMS helps track safety protocols and certifications and ensures all equipment is up to code.",
                    icon: Settings,
                    cardBorder: "border-emerald-200 dark:border-emerald-900/60 bg-gradient-to-b from-emerald-50/40 to-white dark:from-emerald-950/20 dark:to-[#0b1528]",
                    iconBg: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400",
                    arrowBg: "bg-emerald-100/70 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400"
                  },
                  {
                    title: "Professionalism at its best:",
                    desc: "Present detailed and professional work order quotations, maintenance reports, and more. Impress clients and stakeholders with your organized and efficient approach.",
                    icon: BarChart3,
                    cardBorder: "border-blue-200 dark:border-blue-900/60 bg-gradient-to-b from-blue-50/40 to-white dark:from-blue-950/20 dark:to-[#0b1528]",
                    iconBg: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
                    arrowBg: "bg-blue-100/70 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"
                  },
                  {
                    title: "Go green, save green:",
                    desc: "Implement sustainable maintenance practices, reduce waste, and optimize resource usage. Not only is it good for the planet, but it's also great for your brand image and savings!",
                    icon: TrendingUp,
                    cardBorder: "border-pink-200 dark:border-pink-900/60 bg-gradient-to-b from-pink-50/40 to-white dark:from-pink-950/20 dark:to-[#0b1528]",
                    iconBg: "bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-400",
                    arrowBg: "bg-pink-100/70 text-pink-600 dark:bg-pink-900/40 dark:text-pink-400"
                  }
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <Reveal3D key={idx} direction="up" delay={0.04 * idx}>
                      <div className={`h-full p-7 rounded-3xl border ${item.cardBorder} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group`}>
                        <div className="space-y-4">
                          {/* Header Row: Rounded Icon Box + Title + Right Arrow Button */}
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              {/* Soft Colored Rounded Square Icon Box */}
                              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.iconBg}`}>
                                <IconComp className="w-5 h-5 stroke-[2.2]" />
                              </div>

                              {/* Title */}
                              <h3 className="text-sm sm:text-base font-bold text-[#0f172a] dark:text-white font-sans leading-snug">
                                {item.title}
                              </h3>
                            </div>

                            {/* Small Right Arrow Circle Badge */}
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${item.arrowBg} transition-transform duration-300 group-hover:translate-x-1`}>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </div>
                          </div>

                          {/* Card Text Description */}
                          <p className="text-xs sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans pt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </Reveal3D>
                  );
                })}
              </div>
            </div>
          </section>

          {/* SECTION 2: THE ROBUST FEATURES OF A CMMS */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#060c17] text-slate-900 dark:text-white relative overflow-hidden border-b border-border-color">
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto space-y-14 relative z-10">

              {/* Section 2 Header Banner */}
              <Reveal3D direction="up">
                <div className="text-center max-w-4xl mx-auto space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <span className="w-12 sm:w-16 h-[1.5px] bg-[#e30613]" />
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#e30613] text-xs font-bold font-mono uppercase tracking-widest shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-[#e30613] animate-pulse" />
                      <span>Advanced Enterprise Suite</span>
                    </div>
                    <span className="w-12 sm:w-16 h-[1.5px] bg-[#e30613]" />
                  </div>
                  
                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                    The Robust Features of <span className="text-[#e30613]">CMMS</span>
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl mx-auto">
                    Harness the capabilities of state-of-the-art CMMS Software designed to streamline maintenance operations. With a focus on proactive management, this platform ensures optimal utilization of facilities, assets, equipment, and work orders.
                  </p>
                </div>
              </Reveal3D>

              {/* 18 Feature Modules Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Work Order Management:",
                    desc: "Every top-notch CMMS has a special tool called the Work Order Management feature. Think of it as a super-organized assistant that helps keep track of all maintenance tasks. Whether it's a regular check-up or a sudden repair, this feature ensures everything is noted and watched closely. It's like having a diary that updates itself in real-time.\n\nBut there's more to it than just keeping notes. This feature ensures everyone involved, from the technicians fixing things to the managers overseeing them, knows what's happening. It's like a group chat where everyone stays updated.\n\nNow, why is this so great for businesses? When tasks are sorted out quickly, machines and equipment don't stay broken for long. This means work can continue without long breaks, saving time and money. Plus, when everyone knows their job and has the right tools, things get done faster and better. In short, the Work Order Management feature ensures everything runs smoothly, and that's a big win for any company.",
                    icon: ClipboardCheck,
                    color: "text-red-600 bg-red-100 border-red-200 dark:text-red-400 dark:bg-red-500/10 dark:border-red-500/20",
                    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
                  },
                  {
                    title: "Preventive Maintenance:",
                    desc: "Preventive maintenance is like giving equipment regular health check-ups to avoid unexpected breakdowns. It's about being proactive, ensuring things are in top shape before any issues arise. With a CMMS, this approach becomes a breeze. The system is a multitasker: it sends timely reminders for upcoming maintenance tasks and schedules them based on equipment usage or set timeframes. Every maintenance activity is meticulously logged, making audits and compliance checks straightforward. But the real magic lies in its capabilities. The CMMS automates the entire process, ensuring no task is missed. It also provides a detailed history of each piece of equipment, helping businesses understand wear and tear patterns. In essence, when powered by a CMMS, preventive maintenance ensures equipment runs efficiently, lasts longer, and ultimately saves businesses both time and money.",
                    icon: ShieldCheck,
                    color: "text-emerald-600 bg-emerald-100 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20",
                    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80"
                  },
                  {
                    title: "Predictive Maintenance:",
                    desc: "Predictive maintenance is akin to having a futuristic crystal ball for all your machinery and equipment. It's not just about regular checks; it's an advanced system that dives deep into the heart of each machine, understanding its every pulse and rhythm. By harnessing the power of cutting-edge technologies like AI and machine learning, predictive maintenance doesn't just detect issues - it anticipates them. It continuously monitors various parameters, such as vibration patterns, temperature fluctuations, and pressure changes. Any slight deviation or anomaly? The system catches it, often long before human eyes would notice.\n\nBut what truly sets it apart is its integration with a CMMS. This combination transforms raw data into actionable insights. The system can predict when a component might fail or when a machine will likely break down, allowing teams to intervene before a minor issue morphs into a major setback. The benefits are manifold: machinery runs smoother for longer, unexpected downtimes become a rarity, and maintenance costs plummet. Moreover, the extended lifespan of equipment means significant savings in the long run. In essence, with predictive maintenance, businesses are not just reacting to the present but proactively shaping a more efficient and cost-effective future.",
                    icon: Cpu,
                    color: "text-purple-600 bg-purple-100 border-purple-200 dark:text-purple-400 dark:bg-purple-500/10 dark:border-purple-500/20",
                    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                  },
                  {
                    title: "Workflow Automation:",
                    desc: "Think of a CMMS with workflow automation as a smart helper, ensuring everything runs smoothly. It's like having a checklist that automatically ticks things off as they get done. Everything is set up to move without a hitch, from assigning jobs to sending reminders and getting the green light for tasks.\n\nThe best part? It cuts down on mistakes. Because things are automated, there's less chance of mix-ups or forgetting steps. This means jobs get done the right way every time. For the maintenance crew, it's a big help. They can spend less time on routine stuff and more on important tasks. And for the whole business, it means things are clear, organized, and efficient.",
                    icon: Workflow,
                    color: "text-blue-600 bg-blue-100 border-blue-200 dark:text-blue-400 dark:bg-blue-500/10 dark:border-blue-500/20",
                    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                  },
                  {
                    title: "Maintenance Checklist:",
                    desc: "The maintenance checklist in a CMMS is like a trusty guidebook for every maintenance task, ensuring no detail is overlooked. It's not just a list; it's a roadmap guiding technicians through each step, from inspections to final tests. This thoroughness means equipment gets top-notch care, reducing unexpected issues.\n\nFor businesses, the advantages are clear. Machines run smoother, resulting in fewer interruptions. This checklist ensures all standards are met in sectors with strict regulations, sidestepping potential penalties. In short, the maintenance checklist offers consistency and peace of mind in all maintenance endeavors.",
                    icon: CheckSquare,
                    color: "text-amber-600 bg-amber-100 border-amber-200 dark:text-amber-400 dark:bg-amber-500/10 dark:border-amber-500/20",
                    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&q=80"
                  },
                  {
                    title: "IoT Meter Reading:",
                    desc: "IoT Meter Reading integrates the power of the Internet of Things to automatically collect data from various meters, such as energy, water, or gas. This feature allows for real-time data transmission to a centralized system, eliminating the need for manual readings and ensuring up-to-the-minute accuracy.With IoT Meter Readings, organizations can achieve more accurate billing, timely detection of anomalies, and efficient resource usage. It also reduces human error and labor costs associated with manual readings.",
                    icon: Activity,
                    color: "text-cyan-600 bg-cyan-100 border-cyan-200 dark:text-cyan-400 dark:bg-cyan-500/10 dark:border-cyan-500/20",
                    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=600&q=80"
                  },
                  {
                    title: "Schedule of Rates:",
                    desc: "The Schedule of Rates feature provides a detailed list of standardized costs associated with various maintenance tasks or services. It acts as a reference point for budgeting, billing, and contract formulation, ensuring that all stakeholders clearly understand the costs involved.\n\nThis feature promotes financial transparency and consistency. It aids in avoiding billing disputes, streamlines procurement processes, and ensures that maintenance tasks are carried out within the stipulated budget.",
                    icon: Coins,
                    color: "text-pink-600 bg-pink-100 border-pink-200 dark:text-pink-400 dark:bg-pink-500/10 dark:border-pink-500/20",
                    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
                  },
                  {
                    title: "Inventory Management:",
                    desc: "Inventory Management in CMMS allows organizations to keep track of all maintenance-related inventory, from spare parts to essential tools. It monitors stock levels, sends alerts for low-stock items, and even integrates with procurement systems for automatic reordering.\n\nEfficient inventory management ensures that maintenance tasks are not delayed due to a lack of necessary parts or tools. It also aids in reducing carrying costs and prevents overstocking or stockouts.",
                    icon: Layers,
                    color: "text-indigo-600 bg-indigo-100 border-indigo-200 dark:text-indigo-400 dark:bg-indigo-500/10 dark:border-indigo-500/20",
                    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80"
                  },
                  {
                    title: "Spare Parts:",
                    desc: "The Spare Parts feature provides a detailed catalog of all replacement parts for maintenance tasks. It includes information like part specifications, quantities in stock, suppliers, and lead times.\n\nA well-organized spare parts system ensures that maintenance teams can quickly find and utilize the needed parts, reducing equipment downtime and enhancing operational efficiency.",
                    icon: Wrench,
                    color: "text-teal-600 bg-teal-100 border-teal-200 dark:text-teal-400 dark:bg-teal-500/10 dark:border-teal-500/20",
                    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80"
                  },
                  {
                    title: "Asset QR Code Scanning:",
                    desc: "This feature allows assets to be tagged with QR codes, which can be scanned to retrieve all relevant information about the asset, such as its maintenance history, specifications, and current status.\n\nQR code scanning offers a quick and efficient way to access asset information on the go, reducing the time technicians spend searching for asset details and ensuring they have all the information they need at their fingertips.",
                    icon: Fingerprint,
                    color: "text-[#e30613] bg-red-100 border-red-200 dark:text-[#e30613] dark:bg-red-500/10 dark:border-red-500/20",
                    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
                  },
                  {
                    title: "Work Request:",
                    desc: "The Work Request feature allows employees or stakeholders to submit maintenance requests directly to the CMMS. These requests can include details about the issue, urgency level, and other relevant information.\n\nThis feature streamlines the process of identifying and addressing maintenance needs. It ensures that issues are promptly reported, prioritized, and assigned to the appropriate personnel, leading to faster resolution times and improved asset uptime.",
                    icon: FileText,
                    color: "text-blue-600 bg-blue-100 border-blue-200 dark:text-blue-400 dark:bg-blue-500/10 dark:border-blue-500/20",
                    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80"
                  },
                  {
                    title: "Project and Budget:",
                    desc: "This feature provides tools to plan, monitor, and control maintenance projects and their associated budgets. Users can set budget limits, track expenses in real-time, and get alerts if costs approach or exceed the set budget.\n\nEffective project and budget management ensures that maintenance activities are carried out within financial constraints, preventing cost overruns and ensuring optimal allocation of resources.",
                    icon: BarChart3,
                    color: "text-emerald-600 bg-emerald-100 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20",
                    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=600&q=80"
                  },
                  {
                    title: "Team Communication:",
                    desc: "Team Communication tools within a CMMS facilitate real-time communication between maintenance team members, managers, and other stakeholders. This can include chat features, notification systems, and collaboration boards.\n\nEnhanced communication ensures everyone is aligned on tasks, priorities, and updates. It fosters collaboration, reduces misunderstandings, and ensures faster response times.",
                    icon: Users,
                    color: "text-purple-600 bg-purple-100 border-purple-200 dark:text-purple-400 dark:bg-purple-500/10 dark:border-purple-500/20",
                    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
                  },
                  {
                    title: "License Management:",
                    desc: "License Management tracks and manages licenses, warranties, and certifications associated with various assets and equipment. It sends reminders for renewals and keeps a record of all license-related documentation.\n\nThis feature ensures compliance with regulatory standards, avoids potential legal complications, and all equipment operates with valid licenses and certifications.",
                    icon: Shield,
                    color: "text-amber-600 bg-amber-100 border-amber-200 dark:text-amber-400 dark:bg-amber-500/10 dark:border-amber-500/20",
                    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
                  },
                  {
                    title: "Report Builder:",
                    desc: "The Report Builder allows users to create customized reports based on various maintenance metrics and data points. These reports can be used for analysis, decision-making, and presenting insights to stakeholders.\n\nCustomized reporting provides insights tailored to an organization's specific needs, aiding in informed decision-making and continuous improvement of maintenance operations.",
                    icon: BarChart2,
                    color: "text-cyan-600 bg-cyan-100 border-cyan-200 dark:text-cyan-400 dark:bg-cyan-500/10 dark:border-cyan-500/20",
                    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
                  },
                  {
                    title: "WhatsApp Integration:",
                    desc: "This feature integrates the CMMS with WhatsApp, sending notifications, alerts, and communications directly through the popular messaging platform.\n\nLeveraging a platform like WhatsApp ensures that important notifications are seen promptly, enhances team communication, and provides a convenient way for teams to stay connected.",
                    icon: Smartphone,
                    color: "text-[#e30613] bg-red-100 border-red-200 dark:text-[#e30613] dark:bg-red-500/10 dark:border-red-500/20",
                    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=600&q=80"
                  },
                  {
                    title: "Work Request Quotation:",
                    desc: "This allows users to generate and send quotations for maintenance work requests. It shows costs, materials, labor, and other expenses associated with a particular job.\n\nWork request quotations ensure transparency in billing, help in budgeting, and provide a clear understanding of costs to stakeholders.",
                    icon: FileCheck,
                    color: "text-indigo-600 bg-indigo-100 border-indigo-200 dark:text-indigo-400 dark:bg-indigo-500/10 dark:border-indigo-500/20",
                    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80"
                  },
                  {
                    title: "Document Management:",
                    desc: "Document Management in CMMS provides a centralized repository for all maintenance-related documents, including manuals, SOPs, warranties, and contracts. It offers features like version control, search functionality, and access controls.\n\nCentralized document management ensures that all relevant information is easily accessible, organized, and secure, improving efficiency and compliance.",
                    icon: History,
                    color: "text-teal-600 bg-teal-100 border-teal-200 dark:text-teal-400 dark:bg-teal-500/10 dark:border-teal-500/20",
                    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=600&q=80"
                  }
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  const isExpanded = !!expandedFeatures[idx];
                  
                  return (
                    <Reveal3D key={idx} direction="up" delay={0.03 * idx}>
                      <div className="h-full rounded-3xl bg-white/90 dark:bg-[#0b1528]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/80 transition-all duration-500 flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(227,6,19,0.15)] dark:hover:shadow-[0_20px_45px_rgba(255,59,71,0.2)] hover:border-[#e30613]/50 hover:-translate-y-1.5 overflow-hidden relative">

                        {/* Realistic Card Cover Image */}
                        <div className="relative h-48 w-full overflow-hidden shrink-0 bg-slate-900/40">
                          <img
                            src={item.image}
                            alt={item.title}
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80";
                            }}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1528]/80 via-transparent to-transparent opacity-90" />
                          <div className={`absolute top-3.5 left-3.5 w-10 h-10 rounded-2xl border flex items-center justify-center backdrop-blur-md shadow-md transition-transform duration-300 group-hover:scale-110 ${item.color}`}>
                            <IconComp className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Card Content Body */}
                        <div className="p-6 flex-1 flex flex-col justify-between space-y-4 relative z-10">
                          <div className="space-y-2.5">
                            <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-display leading-tight group-hover:text-[#e30613] transition-colors">
                              {item.title}
                            </h3>
                            <div className={`space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans whitespace-pre-line ${
                              isExpanded ? '' : 'line-clamp-3'
                            }`}>
                              {item.desc}
                            </div>
                          </div>

                          <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                            <button
                              onClick={() => toggleFeatureExpand(idx)}
                              className="inline-flex items-center gap-1.5 text-xs font-bold font-sans text-[#e30613] hover:text-red-700 dark:hover:text-red-400 transition-colors cursor-pointer group/btn"
                            >
                              <span>{isExpanded ? 'View Less' : 'View More'}</span>
                              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'group-hover/btn:translate-y-0.5'}`} />
                            </button>
                            <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                              Feature #{idx + 1}
                            </span>
                          </div>
                        </div>

                      </div>
                    </Reveal3D>
                  );
                })}
              </div>
            </div>

            {/* Pagination Controls at Bottom of Page 2 */}
            <div className="pt-12 flex justify-center items-center gap-4">
              <button
                onClick={() => setActivePage(1)}
                className="px-6 py-3 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs flex items-center gap-2 border border-slate-200 dark:border-slate-700 transition-all shadow-md cursor-pointer"
              >
                <span>← Page 1</span>
              </button>
              <button
                onClick={() => setActivePage(3)}
                className="px-6 py-3 rounded-2xl bg-[#e30613] hover:bg-[#c20510] text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-red-500/25 transition-all cursor-pointer"
              >
                <span>Page 3 — Integrated Solutions & FAQ →</span>
              </button>
            </div>
          </section>
        </>
      ) : activePage === 3 ? (
        /* PAGE 3 CONTENT: INTEGRATED SOLUTIONS & FAQ */
        <>
          {/* SECTION 3: INTEGRATED SOLUTIONS FOR MAINTENANCE, ASSETS, FACILITIES */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary/40 dark:bg-[#070d18]/80 text-slate-900 dark:text-white relative overflow-hidden border-b border-border-color">
            <div className="max-w-7xl mx-auto space-y-16 relative z-10">

              {/* Section Header */}
              <Reveal3D direction="up">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <span className="w-12 sm:w-16 h-[1.5px] bg-[#e30613]" />
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#e30613] text-xs font-bold font-mono uppercase tracking-widest shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-[#e30613] animate-pulse" />
                      <span>Integrated Platform</span>
                    </div>
                    <span className="w-12 sm:w-16 h-[1.5px] bg-[#e30613]" />
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                    Integrated Solutions for <span className="text-[#e30613]">Maintenance, Assets & Facilities</span>
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
                    Empower your organization with connected maintenance, asset intelligence, facility automation, and field service management.
                  </p>
                </div>
              </Reveal3D>

              {/* Zigzag Layout for All Solutions */}
              <div className="space-y-16 sm:space-y-24">
                {solutionTabs.map((sol, index) => {
                  const IconComp = sol.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <Reveal3D key={sol.id} direction="up" delay={0.05 * index}>
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        
                        {/* Text Content Card */}
                        <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                          <div className="p-8 sm:p-10 rounded-3xl bg-white/90 dark:bg-[#0b1528]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/80 shadow-xl relative overflow-hidden group hover:border-[#e30613]/40 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

                            <div className="space-y-6 relative z-10">
                              <div className="flex items-center justify-between flex-wrap gap-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200/60 dark:border-red-900/40 text-[#e30613] text-xs font-bold font-mono">
                                  <span className="w-2 h-2 rounded-full bg-[#e30613] animate-pulse" />
                                  {sol.badge}
                                </div>
                                <span className="text-xs font-mono font-bold text-slate-400">
                                  MODULE 0{index + 1}
                                </span>
                              </div>

                              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display leading-tight flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#e30613] flex items-center justify-center shrink-0 border border-red-200/50 dark:border-red-900/40">
                                  <IconComp className="w-5 h-5" />
                                </div>
                                <span>{sol.title}</span>
                              </h3>

                              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-justify">
                                {sol.description}
                              </p>

                              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                                  Key Capabilities & Benefits
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  {sol.features.map((feat, fIdx) => (
                                    <div key={fIdx} className="flex items-start gap-2.5">
                                      <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5 border border-emerald-200 dark:border-emerald-800/50">
                                        ✓
                                      </div>
                                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                                        {feat}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Stat badge & CTA */}
                              <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-3 p-3 px-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                                  <div className="text-xl font-black text-[#e30613] font-mono">
                                    {sol.stats.val}
                                  </div>
                                  <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 leading-tight">
                                    {sol.stats.label}
                                  </div>
                                </div>

                                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#e30613] hover:bg-[#c20510] text-white text-xs sm:text-sm font-bold shadow-lg hover:shadow-red-500/25 transition-all cursor-pointer">
                                  <span>Explore Solution</span>
                                  <ArrowRight className="w-4 h-4" />
                                </button>
                              </div>

                            </div>
                          </div>
                        </div>

                        {/* Image Column */}
                        <div className={`lg:col-span-6 relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group">
                            <img
                              src={sol.image}
                              alt={sol.title}
                              className="w-full h-[380px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                            {/* Floating badge bottom left */}
                            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/20 dark:border-slate-700/50 shadow-xl flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-[#e30613] text-white flex items-center justify-center shrink-0 shadow-md">
                                  <IconComp className="w-5 h-5" />
                                </div>
                                <div>
                                  <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                                    {sol.title}
                                  </h5>
                                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                                    {sol.imageTag}
                                  </span>
                                </div>
                              </div>
                              <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/50 text-[10px] font-bold font-mono">
                                Active Module
                              </span>
                            </div>

                          </div>
                        </div>

                      </div>
                    </Reveal3D>
                  );
                })}
              </div>

            </div>
          </section>

          {/* SECTION 4: FREQUENTLY ASKED QUESTIONS */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#060c17] text-slate-900 dark:text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-12 relative z-10">
              <Reveal3D direction="up">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <span className="w-12 sm:w-16 h-[1.5px] bg-[#e30613]" />
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#e30613] text-xs font-bold font-mono uppercase tracking-widest shadow-sm">
                      <HelpCircle className="w-4 h-4 text-[#e30613]" />
                      <span>Frequently Asked Questions</span>
                    </div>
                    <span className="w-12 sm:w-16 h-[1.5px] bg-[#e30613]" />
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                    Frequently Asked <span className="text-[#e30613]">Questions</span>
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
                    Get answers to common questions about A8 CMMS features, cloud architecture, mobile apps, integrations, and deployment.
                  </p>
                </div>
              </Reveal3D>

              <div className="space-y-4">
                {faqData.map((item, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <Reveal3D key={idx} direction="up" delay={0.03 * idx}>
                      <div className="rounded-2xl bg-white/90 dark:bg-[#0b1528]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/80 hover:border-[#e30613]/50 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md">
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer group"
                        >
                          <div className="flex items-center gap-3.5">
                            <span className="w-7 h-7 rounded-lg bg-red-100 dark:bg-red-500/10 text-[#e30613] border border-red-200 dark:border-red-500/20 flex items-center justify-center text-xs font-bold font-mono shrink-0">
                              {idx + 1}
                            </span>
                            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white group-hover:text-[#e30613] transition-colors font-display">
                              {item.q}
                            </h3>
                          </div>
                          <div className={`w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-red-100 dark:bg-red-500/20 text-[#e30613]' : 'text-slate-500 dark:text-slate-400'}`}>
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans border-t border-slate-100 dark:border-slate-800/60 pt-4 ml-10 text-justify">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </Reveal3D>
                  );
                })}
              </div>
            </div>

            {/* Pagination Controls at Bottom of Page 3 */}
            <div className="pt-12 flex justify-center items-center gap-4">
              <button
                onClick={() => setActivePage(2)}
                className="px-6 py-3 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs flex items-center gap-2 border border-slate-200 dark:border-slate-700 transition-all shadow-md cursor-pointer"
              >
                <span>← Page 2 — Features & Capabilities</span>
              </button>
              <button
                onClick={() => setActivePage(1)}
                className="px-6 py-3 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs flex items-center gap-2 border border-slate-200 dark:border-slate-700 transition-all shadow-md cursor-pointer"
              >
                <span>Page 1 — Main Overview</span>
              </button>
            </div>
          </section>
        </>
      ) : (
        /* PAGE 1 CONTENT ONLY */
        <>
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
                      ADVANCED MAINTENANCE EXCELLENCE WITH A8
                    </p>
                  </Reveal3D>

                  <Reveal3D direction="up" delay={0.2}>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans font-medium text-justify">
                      A8 CMMS is the leading all-in-one preventive maintenance management, helping organizations achieve greater asset uptime, reduce downtime, and extend equipment life. With a focus on intuitive design, real-time tracking, and powerful analytics, A8 empowers businesses in Singapore and beyond to maintain operational excellence across every facility.
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
                            A8
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





          {/* SECTION 2: HOW DOES A8 CMMS SOFTWARE SIMPLIFY YOUR MAINTENANCE OPERATIONS? */}
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
                    How Does A8 CMMS Software Simplify Your Maintenance Operations?
                  </h2>

                  <div className="w-12 h-1 bg-[#e30613] rounded-full mx-auto" />

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans ">
                    From work order management to asset tracking, <strong className="text-slate-900 dark:text-white font-bold">A8 CMMS</strong> brings <strong className="text-slate-900 dark:text-white font-bold">everything together</strong> — helping you work smarter, reduce downtime and achieve operational excellence.
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
                  </div>
                </Reveal3D>

              </div>

            </div>
          </section>

          {/* SECTION: MOBILE CMMS APP */}
          <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/70 dark:bg-bg-secondary/50 border-b border-border-color relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
              <Reveal3D direction="up">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                  {/* Left Side: Content */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100/90 dark:bg-red-950/40 border border-red-200/60 dark:border-red-900/40 text-[#e30613] text-xs font-bold font-mono">
                      <Smartphone className="w-4 h-4 text-[#e30613]" />
                      <span>Native iOS & Android App</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                      Mobile CMMS App
                    </h2>

                    <div className="w-16 h-1 bg-[#e30613] rounded-full" />

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-justify">
                      Technicians open work orders, scan QR codes, log hours, capture photos, and update task status — all from their Android or iOS device. GPS tracking shows managers where field teams are in real time. Updates sync instantly to the central system.
                    </p>

                    {/* 6 Feature Items Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                      {[
                        "Work orders, asset records, and checklists on mobile.",
                        "QR code scanning to pull up any asset instantly.",
                        "Photo and video capture directly on work orders.",
                        "GPS tracking for field technicians.",
                        "Instant push notifications on task assignment.",
                        "Real-time data sync — no end-of-day update needed."
                      ].map((item, idx) => (
                        <div key={idx} className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                            ✓
                          </div>
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-normal">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side: Realistic Image */}
                  <div className="lg:col-span-6 relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group">
                      <img
                        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80"
                        alt="Mobile CMMS App Interface"
                        className="w-full h-[420px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/20 dark:border-slate-700/50 shadow-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#e30613] text-white flex items-center justify-center shrink-0 shadow-md">
                            <Smartphone className="w-5 h-5" />
                          </div>
                          <div>
                            <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                              Mobile CMMS App
                            </h5>
                            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                              Instant Field Connectivity & Real-Time Sync
                            </span>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/50 text-[10px] font-bold font-mono">
                          iOS & Android
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </Reveal3D>
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
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-justify">
                      Experience unparalleled operational efficiency with A8 Mobile CMMS. Our platform is designed for on-the-go access and ensures real-time updates, swift task management, and better communication. Whether it's the field or the office, A8 empowers teams to manage maintenance tasks seamlessly, enhancing optimal performance anytime, anywhere. Embrace the future of maintenance with A8.
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
                  </div>
                </Reveal3D>

              </div>

            </div>
          </section>

          {/* SECTION 5: BENEFITS OF A8 MOBILE CMMS SOFTWARE */}
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
                    Benefits of A8 Mobile CMMS <span className="text-purple-600 dark:text-purple-400 block sm:inline">Software</span>
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    Discover how A8 Mobile CMMS helps you work smarter, reduce downtime and get more value from your maintenance operations.
                  </p>
                </div>
              </Reveal3D>

              {/* 5 Benefits Grid: Top Row 3 Cards, Bottom Row 2 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Card 1: Unparalleled Accessibility */}
                <Reveal3D direction="up" delay={0.05}>
                  <div className="p-6 rounded-3xl bg-red-50/60 dark:bg-slate-900 border border-red-200/80 dark:border-red-950/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full group cursor-default space-y-4">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-red-500 text-white flex items-center justify-center shrink-0 shadow-md">
                        <Smartphone className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900 dark:text-white font-display">
                        Unparalleled Accessibility
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                        Gone are the days of being tethered to a desk. With a Mobile CMMS App, you have the power of maintenance management right in your pocket. Whether on the factory floor, at a remote site, or even on vacation, you're always connected, ensuring seamless operations.
                      </p>
                    </div>
                  </div>
                </Reveal3D>

                {/* Card 2: Real Time Notifications & Updates */}
                <Reveal3D direction="up" delay={0.1}>
                  <div className="p-6 rounded-3xl bg-blue-50/60 dark:bg-slate-900 border border-blue-200/80 dark:border-blue-950/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full group cursor-default space-y-4">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-md">
                        <Bell className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900 dark:text-white font-display">
                        Real Time Notifications & Updates
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                        Stay in the loop, always. You're immediately alerted about maintenance issues, work order statuses, and other critical updates with instant notifications. This real-time connectivity ensures swift responses and proactive problem-solving.
                      </p>
                    </div>
                  </div>
                </Reveal3D>

                {/* Card 3: Data-Driven Decision Making */}
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
                        Harness the power of data. A8 Mobile CMMS App provides real-time analytics and insights, allowing you to make informed decisions. Data is your strategic ally, from understanding asset performance to predicting potential downtimes.
                      </p>
                    </div>
                  </div>
                </Reveal3D>

              </div>

              {/* Bottom Row: 2 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Card 4: Geolocation Capabilities */}
                <Reveal3D direction="up" delay={0.2}>
                  <div className="p-6 rounded-3xl bg-purple-50/60 dark:bg-slate-900 border border-purple-200/80 dark:border-purple-950/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full group cursor-default space-y-4">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-purple-500 text-white flex items-center justify-center shrink-0 shadow-md">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900 dark:text-white font-display">
                        Geolocation Capabilities
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                        Precision meets efficiency. Whether tracking movable asset locations or assigning tasks based on technician proximity, geolocation features ensure optimal resource allocation and reduced response times.
                      </p>
                    </div>
                  </div>
                </Reveal3D>

                {/* Card 5: Streamlined Workflows */}
                <Reveal3D direction="up" delay={0.25}>
                  <div className="p-6 rounded-3xl bg-amber-50/60 dark:bg-slate-900 border border-amber-200/80 dark:border-amber-950/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full group cursor-default space-y-4">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
                        <Workflow className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900 dark:text-white font-display">
                        Streamlined Workflows
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                        Simplify complex maintenance procedures. A8 Mobile CMMS streamlines work order approvals, task assignments, and checklist completion, ensuring your maintenance operations run smoothly without bottlenecks.
                      </p>
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
        </>
      )}

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
                  Experience the power of A8 CMMS with integrated AI Fault Reporting, Voice AI Dispatch, Knowledge Base, and Automated Checklists.
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
