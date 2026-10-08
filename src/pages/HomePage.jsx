import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Sparkles, Building, ChevronLeft, ChevronRight,
  MessageSquare, User, HelpCircle, Layers, CheckCircle2, CheckCircle, Cpu, ShieldCheck, Leaf, Award, Tv
} from 'lucide-react';

import ThreeWireframe from '../components/ThreeWireframe';
import Card from '../components/Card';
import Reveal3D from '../components/Reveal3D';
import {
  featuredSolutions,
  bentoProducts,
  lifecycleStages,
  industries,
  caseStudies,
  chatbotAnswers
} from '../data/websiteData';
import { API_BASE_URL } from '../config';

export default function HomePage({ theme }) {
  const navigate = useNavigate();
  const [dbPartners, setDbPartners] = useState([]);
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/cms/`);
        if (response.ok) {
          const data = await response.json();
          if (data.partners) {
            setDbPartners(data.partners);
          }
        }
      } catch (err) {
        console.error('Error fetching partners in homepage:', err);
      }
    };
    fetchPartners();
  }, []);

  const defaultPartners = ['Autodesk partner', 'Bentley dev', 'BCA SG registered', 'Notion for Enterprise', 'OpenAI partner', 'Sands Expo 2026', 'GovTech SG'];
  const marqueeLogos = dbPartners.length > 0
    ? dbPartners.flatMap(p => p.partners ? p.partners.split(',').map(s => s.trim()) : [])
    : defaultPartners;

  const homeProducts = [
    // {
    //   id: 'fire-safety',
    //   title: 'Gen AI Advisor for Fire Safety & Protection',
    //   category: 'Planning & Design',
    //   description: 'Guiding project teams through SCDF fire-safety regulatory requirements, reflecting real enforcement practice. Anchored by former SCDF Director.',
    //   image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80'
    // },
    // {
    //   id: 'greensip',
    //   title: 'GreenSIP — BCA Green Mark V7 Co-Pilot',
    //   category: 'Planning & Design',
    //   description: "Extends Aptiv8's Sustainable Design Smart Advisor (SDSA) into a full BCA Green Mark V7 co-pilot, mapping energy, ETTV, and thermal comfort metrics.",
    //   image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
    // },
    {
      id: 'bid-tender-prep',
      title: 'AI Assistant for Bid & Tender Evaluation',
      category: 'Pre-Construction',
      description: 'Helps contractors assemble compliant, competitive bids and helps clients/consultants evaluate submissions fairly against tendering criteria.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'aptiv8-cortex-cmms',
      title: 'A8 — Agentic AI-Powered CMMS Platform',
      category: 'Operations & Maintenance',
      description: "Adds an intelligent orchestrator directing nine specialist AI agents within A8's Singapore-based, CSA-STAR-certified AWS environment.",
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'spec-manager',
      title: 'AI Assistant for Managing Specifications',
      category: 'Pre-Construction',
      description: 'Helps draft, cross-check and maintain construction and FM specifications, automatically flagging inconsistencies.',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
    },
    // {
    //   id: 'strata-assistant',
    //   title: 'Strata Title & Maintenance Management',
    //   category: 'Real Estate',
    //   description: 'Supports Managing Agents with drafting correspondence, tracking maintenance schedules, and ensuring compliance with bylaws.',
    //   image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
    // }
  ];

  // Section 2: AI Solution Finder State
  const [role, setRole] = useState('');
  const [problem, setProblem] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  // Section 3: Horizontal Timeline State
  const [activeStage, setActiveStage] = useState(lifecycleStages[0].id);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  const handleTiltMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    // Max 8 degrees tilt for natural 3D look
    setTiltX(-y / (box.height / 16));
    setTiltY(x / (box.width / 16));
  };

  const handleTiltMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
  };

  // Section 7: Case Studies Carousel State
  const [currentCase, setCurrentCase] = useState(0);

  // Section 10: AI Chatbot State
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Welcome to the A8 AI Assistant. Ask me anything about our solutions, Green Mark compliance, or CMMS.' }
  ]);
  const [chatInput, setChatInput] = useState('');

  // AI Solution Finder Handler
  const handleFindSolution = () => {
    if (!role || !problem) return;

    // Filter solutions based on role & problem matching description keywords
    const filtered = featuredSolutions.filter(sol => {
      const desc = sol.description.toLowerCase() + ' ' + sol.category.toLowerCase() + ' ' + sol.title.toLowerCase();

      const probMap = {
        'Compliance': ['compliance', 'safety', 'regulatory', 'code', 'fire'],
        'Sustainability': ['sustainability', 'green mark', 'carbon', 'energy'],
        'BIM': ['bim', 'revit', 'ifc', 'metadata'],
        'Tender Preparation': ['bid', 'tender', 'cost', 'spec'],
        'Maintenance': ['cmms', 'maintenance', 'cortex', 'sensor'],
        'Lease Management': ['lease', 'strata', 'real estate', 'property']
      };

      const keywords = probMap[problem] || [];
      return keywords.some(kw => desc.includes(kw));
    });

    setRecommendations(filtered.length > 0 ? filtered : featuredSolutions.slice(0, 2));
  };

  // Chatbot Handler
  const handleChatSend = (customText = '') => {
    const text = customText || chatInput;
    if (!text.trim()) return;

    const newMessages = [...chatMessages, { sender: 'user', text }];
    setChatMessages(newMessages);
    setChatInput('');

    // Process answer
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      const match = chatbotAnswers.find(ans =>
        ans.keywords.some(kw => lowerText.includes(kw))
      );

      const response = match
        ? match.answer
        : "Thank you for your question. I recommend speaking directly with our BIM and AI advisors. You can schedule a session using the 'Book a Demo' button above.";

      setChatMessages(prev => [...prev, { sender: 'bot', text: response }]);
    }, 6000); // 600ms simulation delay
  };

  return (
    <div className="relative pt-20">

      {/* SECTION 1: HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden border-b border-border-color">
        {/* Background video overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none"
        >
          <source src="/hero_video.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for Text Legibility */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-black/45 via-black/20 to-red-950/10" />        <ThreeWireframe theme={theme} />

        <div className="max-w-4xl mx-auto text-center relative z-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-glow border border-accent/30 text-accent text-xs font-semibold uppercase tracking-wider mb-6 font-display"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Introducing Enterprise-Grade AI
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl md:text-7xl font-extrabold font-display tracking-tight text-white mb-6 leading-[1.1]"
          >
            AI-Powered Solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
              for the Built Environment
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Transforming architecture, engineering, construction, facilities management, infrastructure, and real estate through custom-trained artificial intelligence models.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="/products" className="group relative w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-full font-semibold transition-all duration-500 ease-out text-center flex items-center justify-center gap-3 overflow-hidden shadow-[0_8px_30px_rgba(239,68,68,0.18)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_16px_45px_rgba(239,68,68,0.32)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full before:skew-x-[-20deg] before:transition-transform before:duration-700 hover:before:translate-x-full">
              <span className="relative z-10">Explore Solutions</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:-rotate-6" />
            </a>
          </motion.div>
        </div>
      </section>
      {/* COMPANY PROFILE SECTION */}
      <section className="py-24 px-4 bg-bg-primary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-stretch">
              {/* Left Column - All Card Content */}
              <div className="lg:col-span-7 flex flex-col">
                <div
                  className="
      h-full
      p-8 md:p-10 lg:p-12
      rounded-3xl

      bg-bg-secondary dark:bg-[#0b1528]

      border border-accent/30
      dark:border-[#D4AF37]/40

      shadow-[0_4px_0_rgba(239,68,68,0.22),0_8px_20px_rgba(0,0,0,0.08)]
      dark:shadow-[0_4px_0_rgba(212,175,55,0.30),0_8px_20px_rgba(0,0,0,0.25)]

      hover:-translate-y-2
      hover:border-accent
      dark:hover:border-[#D4AF37]/90

      hover:shadow-[0_8px_0_rgba(239,68,68,0.18),0_20px_40px_rgba(239,68,68,0.14)]
      dark:hover:shadow-[0_8px_0_rgba(212,175,55,0.28),0_20px_40px_rgba(212,175,55,0.14)]

      transition-all
      duration-500
      ease-out

      flex
      flex-col


      relative
      overflow-hidden
      group
    "
                >
                  {/* Premium border highlight */}
                  <div
                    className="
        absolute inset-0
        rounded-3xl
        pointer-events-none
        border border-transparent
        group-hover:border-accent/40
        dark:group-hover:border-[#D4AF37]/50
        transition-all duration-500
      "
                  />

                  {/* Company Profile */}
                  <div className="relative z-10">

                    <div className="mb-5">
                      <span
                        className="
            inline-block
            text-accent
            text-xs
            font-semibold
            uppercase
            tracking-[0.18em]
            font-display
          "
                      >
                        Company Profile
                      </span>
                    </div>

                    <h2
                      className="
          text-3xl
          md:text-4xl
          lg:text-5xl
          font-bold
          font-display
          text-text-primary
          leading-[1.1]
          tracking-tight
          mb-6
        "
                    >
                      Pioneering AI in the Built Environment
                    </h2>

                    <div className="text-text-secondary dark:text-slate-300 leading-[1.8] text-sm sm:text-base space-y-6 font-sans">
                      <p style={{ textAlign: 'justify' }} className="text-text-secondary dark:text-slate-300">
                        A8 was founded in 2018 and established by domain experts in the
                        built environment with decades of combined experience across design,
                        construction, and operations & maintenance, serving both public and
                        private sectors.
                      </p>
                      <p style={{ textAlign: 'justify' }} className="text-text-secondary dark:text-slate-300">
                        Its mission is to drive AI transformation and innovation in the built environment. Its vision is to become the trusted AI partner for developers, asset owners, AEC (architecture, engineering, construction) firms, and FM (facilities management) companies throughout Singapore and Southeast Asia.
                      </p>

                      <div className="pt-2 border-t border-border-color/60 dark:border-slate-800">
                        <p style={{ textAlign: 'justify' }} className="text-text-secondary dark:text-slate-300 font-medium">
                          We have deployed over <strong>200 CMMS systems regionally</strong>. In Singapore, A8 is the CMMS of choice among institutes of higher learning and public sector agencies:
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {['NTU', 'NUS', 'SUTD', 'SIT', 'Supreme Court', 'MHA', 'LTA'].map((org, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-md bg-accent/10 text-accent dark:bg-accent/20 dark:text-red-400 font-semibold text-xs border border-accent/20"
                            >
                              {org}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Premium Built Environment Image */}
              <div className="lg:col-span-5 w-full flex items-center justify-center">
                <motion.div
                  whileHover={{ rotateY: -6, rotateX: 3, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  className="rounded-[32px] overflow-hidden border border-slate-200 dark:border-slate-800 relative shadow-xl w-full h-full min-h-[420px] lg:min-h-full flex flex-col items-center justify-start bg-white dark:bg-white cursor-default group pt-10 pb-4 px-4"
                  style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                >
                  <img
                    src="/profile.png"
                    alt="Aptiv8 Singapore Built Environment AI"
                    className="w-full object-contain max-h-[500px] transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  <div className="mt-auto w-full p-5 bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-500">
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider font-bold block mb-1">A8 Platform</span>
                    <p className="text-xs text-white font-medium leading-relaxed">
                      A8 is an AI solutions provider transforming the Built Environment through intelligent, custom-trained technology.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal3D>
      </section>

      



      {/* SECTION 2: AI SOLUTION FINDER */}
      {/* <section id="solution-finder" className="py-24 px-4 bg-bg-tertiary/50 border-b border-border-color">
        <Reveal3D>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
                AI Solution Finder
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto">
                Select your role and key operational challenges below. Our matcher will select the relevant Aptiv8 solutions.
              </p>
            </div>

            <div className="bg-bg-secondary border border-border-color rounded-[32px] p-8 md:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start hover:shadow-[0_20px_45px_rgba(227,6,19,0.35),0_8px_20px_rgba(227,6,19,0.12)]
dark:hover:shadow-[0_20px_45px_rgba(255,59,71,0.30),0_8px_20px_rgba(255,59,71,0.10)]
hover:border-accent/60
transition-all duration-500"> */}
              {/* Steps & Selection */}
              {/* <div className="flex flex-col gap-8"> */}
                {/* Question 1 */}
                {/* <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="p-2 rounded-xl bg-accent-glow text-accent font-bold text-sm shrink-0">01</span>
                    <label className="font-display font-bold text-lg text-text-primary">Who are you?</label>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {['Architect', 'Engineer', 'Contractor', 'Facility Manager', 'Building Owner', 'Real Estate Developer'].map(item => (
                      <button
                        key={item}
                        onClick={() => setRole(item)}
                        className={`px-4 py-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${role === item
                            ? 'border-accent bg-accent text-white shadow-md'
                            : 'border-border-color text-text-secondary bg-bg-primary hover:border-accent/40'
                          }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div> */}

                {/* Question 2 */}
                {/* <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="p-2 rounded-xl bg-accent-glow text-accent font-bold text-sm shrink-0">02</span>
                    <label className="font-display font-bold text-lg text-text-primary">What problem are you trying to solve?</label>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {['Compliance', 'Sustainability', 'BIM', 'Tender Preparation', 'Maintenance', 'Lease Management'].map(item => (
                      <button
                        key={item}
                        onClick={() => setProblem(item)}
                        className={`px-4 py-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${problem === item
                            ? 'border-accent bg-accent text-white shadow-md'
                            : 'border-border-color text-text-secondary bg-bg-primary hover:border-accent/40'
                          }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div> */}

                {/* Match CTA */}
                {/* <button
                  onClick={handleFindSolution}
                  disabled={!role || !problem}
                  className="w-full py-4 rounded-xl bg-accent text-white font-semibold hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
                >
                  Match AI Solution <Sparkles className="h-4 w-4" />
                </button>
              </div> */}

              {/* Results */}
              {/* <div className="border border-border-color bg-bg-primary/50 rounded-2xl p-6 min-h-[350px] flex flex-col justify-between">
                <h3 className="font-display font-bold text-lg text-text-primary mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent animate-pulse" />
                  Recommended Aptiv8 Solutions
                </h3>

                <div className="flex-grow">
                  {recommendations.length > 0 ? (
                    <div className="flex flex-col gap-4">
                      {recommendations.map(sol => (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          key={sol.id}
                          className="p-4 rounded-xl bg-bg-secondary border border-border-color flex items-start gap-4 hover:border-accent transition-colors"
                        >
                          <img src={sol.image} alt={sol.title} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                          <div>
                            <span className="text-[9px] uppercase tracking-wider text-accent font-semibold">{sol.category}</span>
                            <h4 className="font-bold text-sm text-text-primary mb-1">{sol.title}</h4>
                            <p className="text-xs text-text-secondary line-clamp-2">{sol.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center text-text-secondary py-12">
                      <HelpCircle className="h-10 w-10 text-text-secondary/50 mb-3" />
                      <p className="text-sm max-w-xs">Select your profile and operations challenges on the left to review recommended solutions.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal3D>
      </section> */}

      {/* DEDICATED SDSA FEATURED LAUNCH SECTION */}
      <section id="sdsa-launch" className="py-24 px-4 bg-bg-tertiary/30 border-b border-border-color scroll-mt-24">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
            {/* Centered Section Header */}
            <div className="text-center mb-16">
              <div className="flex flex-wrap justify-center gap-2.5 items-center mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-glow text-accent text-xs font-semibold uppercase tracking-wider font-mono">
                  Co-Developed with BSD
                </span>
                
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary leading-tight">
                Sustainability Design Smart Advisor (SDSA)
              </h2>
            </div>

            {/* Content & Video Player Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column - Detailed SDSA Copy Card */}
              <div className="lg:col-span-5 flex flex-col">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="p-8 md:p-10 bg-bg-secondary dark:bg-[#0b1528] border border-border-color dark:border-[#c5a880]/30 rounded-3xl flex flex-col gap-6 shadow-md hover:shadow-[0_20px_40px_rgba(239,68,68,0.1)] dark:hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] hover:border-accent dark:hover:border-[#D4AF37]/90 transition-all duration-500 group relative overflow-hidden h-full justify-between"
                >
                  {/* Corner glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/10 dark:group-hover:bg-[#D4AF37]/15 transition-all duration-700" />
                                 {/* Card Heading INSIDE Card */}
                  <div className="relative z-10">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent dark:text-[#D4AF37] block mb-2">Platform Overview</span>
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary dark:text-white font-display mb-4">Gen AI Sustainability Design Smart Advisor</h3>
                    
                    <div className="text-[#e30613] dark:text-slate-300 space-y-4 leading-[1.8] text-sm md:text-base font-sans" style={{ textAlign: 'justify' }}>
                      <p>
                        A8 is co-developing the Sustainability Design Smart Advisor (SDSA) with Building Systems and Diagnostics (BSD). It is a Gen AI platform grounded on Green Mark version 7 framework and its supporting references.
                      </p>
                      <p>
                        Instead of searching through manuals and technical documents, architects and engineers can ask natural language questions, receive context-aware guidance, check Green Mark compliance options and generate supporting evidence. The submission to BCA’s Green Mark Certification Department is also automated.
                      </p>
                      <p>
                        The SDSA platform will be a design-stage sustainability co-pilot for architects and developers, besides being a compliance checker for engineers. Our vision is to give every design team an AI Sustainability Expert that improves productivity while delivering better-performing buildings.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Premium 60s Video Player */}
              <div className="lg:col-span-7 w-full flex flex-col justify-center gap-10">
                <div className="relative rounded-3xl overflow-hidden border border-border-color shadow-2xl bg-bg-secondary group w-full aspect-video flex items-center justify-center">
                  <video 
                    src="/SDSA.mp4" 
                    controls 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]" 
                  />
                  
                  {/* Floating visual overlay badge */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white font-mono text-[9px] uppercase tracking-wider font-bold">
                    90-Second SDSA Preview
                  </div>
                </div>

                {/* Launch / Demonstration Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="flex items-start gap-3 p-4 bg-bg-secondary dark:bg-[#0b1528]/40 border border-border-color/60 rounded-2xl hover:border-accent dark:hover:border-[#D4AF37] transition-all duration-300"
                  >
                    <div className="p-2.5 rounded-xl bg-accent-glow text-accent shrink-0">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs text-text-primary mb-1">Beta Version Ready</h4>
                      <p className="text-[10px] text-text-secondary leading-relaxed">
                        Beta version is ready for users’ feedback. Contact us to test drive the platform.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="flex items-start gap-3 p-4 bg-bg-secondary dark:bg-[#0b1528]/40 border border-border-color/60 rounded-2xl hover:border-accent dark:hover:border-[#D4AF37] transition-all duration-300"
                  >
                    <div className="p-2.5 rounded-xl bg-accent-glow text-accent shrink-0">
                      <Tv className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs text-text-primary mb-1">Desktop Demo Available</h4>
                      <p className="text-[10px] text-text-secondary leading-relaxed">
                        Desktop demo can be arranged upon request for your design and compliance team.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* NEW PRODUCT LAUNCHES SECTION (MATCHING IMAGE STYLING EXACTLY) */}
            <div className="mt-20 pt-16 border-t border-border-color/40">
              {/* Header block with red lines and dual-color title */}
              <Reveal3D direction="up" delay={0.1}>
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="w-10 h-[1.5px] bg-[#e30613]"></span>
                    <span className="text-[#e30613] text-[11px] font-bold uppercase tracking-[0.2em] font-sans">
                      UPCOMING LAUNCHES
                    </span>
                    <span className="w-10 h-[1.5px] bg-[#e30613]"></span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold font-sans text-[#101828] dark:text-white tracking-tight mb-3">
                    New Product <span className="text-[#e30613]">Launches</span>
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-sans max-w-xl mx-auto">
                    Innovative AI solutions to transform the built environment and beyond.
                  </p>
                </div>
              </Reveal3D>

              {/* 4-Card Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: 'SDSA',
                    subtitle: 'Sustainability Design Smart Advisor',
                    description: 'AI-powered sustainability intelligence for better building design and greener outcomes.',
                    href: '#sdsa-launch',
                    isAnchor: true,
                    icon: (
                      <svg className="w-6 h-6 text-[#e30613] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V9a2 2 0 012-2h2a2 2 0 012 2v12" />
                      </svg>
                    )
                  },
                  {
                    title: 'A8 ACMV',
                    subtitle: 'Intelligence Platform',
                    description: 'AI-powered ACMV operational intelligence for smarter, more efficient building systems.',
                    href: 'https://aptiveight.com/solutions',
                    isExternal: true,
                    icon: (
                      <svg className="w-6 h-6 text-[#e30613] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )
                  },
                  {
                    title: 'Smart Lighting',
                    subtitle: '',
                    description: 'Intelligent lighting control for energy efficiency, comfort and sustainable buildings.',
                    href: '/smart-lighting',
                    isExternal: false,
                    icon: (
                      <svg className="w-6 h-6 text-[#e30613] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )
                  },
                  {
                    title: 'Dragonfly Robot',
                    subtitle: '',
                    description: 'Autonomous mosquito control for healthier and safer environments.',
                    href: '/dragonfly-robot',
                    isExternal: false,
                    icon: (
                      <svg className="w-6 h-6 text-[#e30613] transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  }
                ].map((item, idx) => (
                  <Reveal3D key={idx} delay={idx * 0.12} direction="up" amount={0.1}>
                    <motion.a
                      href={item.href}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      onClick={(e) => {
                        if (item.isAnchor) {
                          e.preventDefault();
                          const elem = document.getElementById('sdsa-launch');
                          if (elem) {
                            elem.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="relative bg-white dark:bg-[#0b1528] rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-[0_20px_45px_rgba(227,6,19,0.18)] dark:hover:shadow-[0_20px_45px_rgba(255,59,71,0.22)] hover:border-[#e30613]/50 transition-all duration-500 flex flex-col justify-between overflow-hidden group min-h-[300px] h-full block cursor-pointer"
                    >
                      {/* Top edge glowing gradient bar on hover */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e30613] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Soft background radial spotlight glow on hover */}
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#e30613]/5 dark:bg-[#ff3b47]/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

                      <div className="p-6 relative z-10">
                        {/* Top Row: Icon + Red Pill Badge */}
                        <div className="flex items-center justify-between mb-5">
                          {/* Soft Red Rounded Square Icon Box with hover scale */}
                          <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-950/30 group-hover:bg-red-100 dark:group-hover:bg-red-900/50 flex items-center justify-center shrink-0 transition-colors duration-300 shadow-inner">
                            {item.icon}
                          </div>

                          {/* Top-right "• NEW LAUNCH" Pill with hover pulse */}
                          <div className="px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/40 group-hover:border-[#e30613]/40 group-hover:bg-red-100/80 transition-all duration-300 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#e30613] animate-ping"></span>
                            <span className="text-[9px] font-bold font-sans tracking-wider uppercase text-[#e30613]">
                              NEW LAUNCH
                            </span>
                          </div>
                        </div>

                        {/* Title & Subtitle */}
                        <div className="mb-3">
                          <h4 className="text-lg font-bold font-sans text-[#e30613] group-hover:text-[#ff2b37] transition-colors duration-300 leading-snug">
                            {item.title}
                          </h4>
                          {item.subtitle && (
                            <h5 className="text-sm font-bold font-sans text-[#101828] dark:text-white leading-snug">
                              {item.subtitle}
                            </h5>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>

                      {/* Bottom Action Footer */}
                      <div className="px-6 pb-6 pt-2 flex items-center justify-between relative z-10">
                        {/* Left: New Launch Tag */}
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/40 group-hover:bg-[#e30613] group-hover:text-white transition-all duration-500 shadow-sm">
                          <span className="w-2 h-2 rounded-full bg-[#e30613] group-hover:bg-white animate-pulse transition-colors"></span>
                          <span className="text-[10px] font-bold font-sans tracking-wider uppercase text-[#e30613] group-hover:text-white transition-colors">
                            NEW LAUNCH
                          </span>
                        </div>

                        {/* Right: Curved Red Corner with White Arrow Icon */}
                        <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
                          <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#e30613] to-[#ff3b47] rounded-tl-[36px] flex items-end justify-end p-3 shadow-md group-hover:scale-110 group-hover:from-[#c40510] group-hover:to-[#e30613] transition-all duration-300">
                            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#e30613] shadow-sm font-bold text-xs group-hover:translate-x-0.5 transition-transform duration-300">
                              →
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  </Reveal3D>
                ))}
              </div>
            </div>

          </div>
        </Reveal3D>
      </section>

      {/* SECTION 3: BUILT ENVIRONMENT LIFECYCLE (Timeline) */}
      <section id="lifecycle" className="py-24 px-4 bg-bg-secondary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
                Built Environment Lifecycle
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto">
                Explore how A8 solutions integrate into every single phase of your building asset timeline.
              </p>
            </div>

            {/* Interactive Horizontal Timeline */}
            <div className="flex flex-col gap-12">
              {/* Timeline Header bar */}
              <div className="relative border-b border-border-color pb-4 flex overflow-x-auto gap-8 justify-between scrollbar-thin">
                <div className="relative flex items-stretch overflow-x-auto pt-3 pb-5 scrollbar-hide">
                  {lifecycleStages.map((stage, idx) => (
                    <div key={stage.id} className="flex items-center shrink-0">

                      {/* Phase Button */}
                      <button
                        onClick={() => setActiveStage(stage.id)}
                        className={`group relative min-w-[190px] px-6 py-5 rounded-2xl text-left overflow-hidden transition-all duration-500 ease-out ${activeStage === stage.id
                            ? 'bg-bg-primary border border-accent/50 shadow-[0_12px_35px_rgba(239,68,68,0.16)] -translate-y-1'
                            : 'bg-bg-secondary/60 border border-border-color hover:border-accent/30 hover:bg-bg-primary hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(239,68,68,0.08)]'
                          }`}
                      >
                        {/* Active / hover glow */}
                        <div
                          className={`absolute -top-16 -right-16 w-32 h-32 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 ${activeStage === stage.id
                              ? 'opacity-100'
                              : 'opacity-0 group-hover:opacity-100'
                            }`}
                        />

                        {/* Phase number */}
                        <div className="relative z-10 flex items-center justify-between mb-4">
                          <span className={`text-[9px] font-mono font-bold tracking-[0.2em] transition-colors duration-300 ${activeStage === stage.id
                              ? 'text-accent'
                              : 'text-text-secondary/50 group-hover:text-accent'
                            }`}
                          >
                            PHASE 0{idx + 1}
                          </span>

                          <span
                            className={`w-2 h-2 rounded-full transition-all duration-500 ${activeStage === stage.id
                                ? 'bg-accent shadow-[0_0_12px_rgba(239,68,68,0.7)] scale-110'
                                : 'bg-border-color group-hover:bg-accent/60'
                              }`}
                          />
                        </div>

                        {/* Phase name */}
                        <span
                          className={`relative z-10 block font-display font-bold text-sm transition-all duration-300 ${activeStage === stage.id
                              ? 'text-text-primary'
                              : 'text-text-secondary/80 group-hover:text-text-primary'
                            }`}>
                          {stage.name}
                        </span>

                        {/* Bottom active indicator */}
                        <motion.div
                          layoutId="activeTimelineBorder"
                          className={`absolute bottom-0 left-5 right-5 h-[2px] rounded-full ${activeStage === stage.id
                              ? 'bg-accent shadow-[0_0_12px_rgba(239,68,68,0.45)]'
                              : 'bg-transparent'
                            }`}
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 30
                          }}
                        />

                        {/* Hover sweep */}
                        <div className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] transition-all duration-700 group-hover:left-[130%] "
                        />
                      </button>

                      {/* Arrow between phases */}
                      {idx < lifecycleStages.length - 1 && (
                        <div className="relative w-14 shrink-0 flex items-center justify-center">
                          <div className="absolute left-0 right-0 h-px bg-border-color" />

                          <div
                            className={`
              relative z-10
              w-8 h-8
              rounded-full
              flex items-center justify-center
              bg-bg-secondary
              border
              transition-all
              duration-500
              ${activeStage === stage.id
                                ? 'border-accent/50 text-accent shadow-[0_0_18px_rgba(239,68,68,0.15)]'
                                : 'border-border-color text-text-secondary/50'
                              }
            `}
                          >
                            <ArrowRight className="h-3.5 w-3.5" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Stage Details */}
              <AnimatePresence mode="wait">
                {lifecycleStages.filter(stage => stage.id === activeStage).map(stage => (
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  >
                    {/* Left content description styled in premium card with interactive 3D tilt effect */}
                    <div
                      onMouseMove={handleTiltMouseMove}
                      onMouseLeave={handleTiltMouseLeave}
                      style={{
                        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
                        transformStyle: 'preserve-3d',
                        transition: 'transform 0.1s ease-out, background-color 0.4s, border-color 0.4s, box-shadow 0.3s'
                      }}
                      className="bg-bg-primary/40 dark:bg-bg-secondary/30 backdrop-blur-md border border-border-color/80 p-6 sm:p-8 md:p-10 rounded-[28px] shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] relative overflow-hidden group hover:shadow-[0_16px_48px_0_rgba(227,6,19,0.06)] hover:border-accent/40 transition-all duration-500"
                    >
                      {/* Premium Ambient Light Glow */}
                      <div className="absolute -top-16 -right-16 w-48 h-48 bg-accent/4 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/8 transition-colors duration-500" />

                      <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-display font-extrabold text-text-primary mb-4 leading-tight group-hover:text-accent transition-colors duration-300">
                          {stage.name} Solutions
                        </h3>
                        

                        <div className="pt-6 border-t border-border-color/50">
                          <h4 className="font-semibold text-xs md:text-sm uppercase tracking-wider text-text-primary mb-4 flex items-center gap-2">
                            <Layers className="h-4.5 w-4.5 text-accent animate-pulse" /> Installed Products & Engine Integrations
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {stage.products.map((prod, i) => {
                              const isFireSafety = prod.name.includes('Fire Safety');
                              const isSesa = prod.name.includes('Structural Engineering') || prod.name.includes('SESA');
                              const isInteractive = isFireSafety || isSesa;
                              const isSelected = selectedProduct === prod.name;

                              return (
                                <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-text-secondary transition-colors">
                                  <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${isSelected ? 'text-red-500' : 'text-accent'}`} />
                                  <div className="flex flex-wrap items-center gap-1.5">
                                    {isInteractive ? (
                                      <button
                                        onClick={() => setSelectedProduct(isSelected ? null : prod.name)}
                                        className={`font-semibold text-left transition-all px-2 py-1 rounded-lg border group/btn flex items-center gap-1.5 cursor-pointer ${
                                          isSelected
                                            ? 'bg-red-500/15 text-red-500 border-red-500/40 shadow-sm'
                                            : 'bg-accent/5 hover:bg-accent/15 text-text-primary border-accent/20 hover:border-accent'
                                        }`}
                                      >
                                        <span>{prod.name}</span>
                                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-500 text-white font-mono font-bold uppercase tracking-wider animate-pulse">
                                          {isFireSafety ? 'Click to View FSSA' : 'Click to View SESA'}
                                        </span>
                                      </button>
                                    ) : (
                                      <span className="font-medium text-text-primary">{prod.name}</span>
                                    )}
                                    {prod.media && !isInteractive && (
                                      <span className="text-[9px] px-2 py-0.5 rounded-full font-mono font-bold uppercase tracking-wider shrink-0 bg-accent/10 text-accent border border-accent/20">
                                        {prod.media === 'video' ? '• Video' : '• Slide(s)'}
                                      </span>
                                    )}
                                    {prod.note && !isInteractive && (
                                      <span className="text-[9px] px-2 py-0.5 rounded-full font-mono font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                        {prod.note}
                                      </span>
                                    )}
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Right side panel: Switches between Default Stage Image and Interactive Cards (FSSA / SESA) */}
                    <div className="rounded-[28px] overflow-hidden border border-border-color min-h-[420px] relative shadow-2xl bg-bg-secondary flex flex-col justify-between p-6 sm:p-8">
                      {selectedProduct && stage.id === 'planning-design' ? (
                        <motion.div
                          key={selectedProduct}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="h-full flex flex-col justify-between space-y-6"
                        >
                          {selectedProduct.includes('Structural Engineering') || selectedProduct.includes('SESA') ? (
                            /* SESA — Structural Engineering Smart Advisor Content */
                            <>
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-500 text-[10px] font-mono font-bold uppercase tracking-wider">
                                    GEN AI PROJECT 03 • CORENET X
                                  </span>
                                  <button 
                                    onClick={() => setSelectedProduct(null)}
                                    className="text-xs text-text-secondary hover:text-accent font-mono"
                                  >
                                    ✕ Close Details
                                  </button>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary font-display tracking-tight">
                                  SESA — <span className="text-red-500">Structural Engineering Smart Advisor</span>
                                </h3>
                                <p className="text-xs sm:text-sm text-text-secondary dark:text-slate-400 mt-1 font-sans">
                                  A QP/AC mentor that closes CORENET X submission gaps before they cause rework
                                </p>
                              </div>

                              {/* 2 Column Comparison Grid */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto">
                                {/* Left Box: The bottleneck today */}
                                <div className="p-5 rounded-2xl bg-bg-primary/80 dark:bg-slate-900/90 border border-red-500/20 shadow-inner flex flex-col justify-between space-y-4">
                                  <span className="text-xs font-bold text-red-500 uppercase font-mono tracking-wider block border-b border-red-500/20 pb-2">
                                    The bottleneck today
                                  </span>
                                  <ul className="space-y-3 text-xs text-text-secondary dark:text-slate-300 leading-relaxed font-sans">
                                    <li className="flex items-start gap-2">
                                      <span className="text-red-500 font-bold shrink-0">•</span>
                                      <span>Submissions bounce for any of 5 separate reasons — IFC-SG attributes, wrong gateway, incomplete package, piling data, AC checklist alignment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-red-500 font-bold shrink-0">•</span>
                                      <span>Catching all 5 depends on senior QP judgment that doesn't scale across a growing project pipeline</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-red-500 font-bold shrink-0">•</span>
                                      <span>Trade-offs like DfMA vs. embodied carbon go unflagged — PPVC can top the DfMA score while carrying the highest carbon per m² GFA</span>
                                    </li>
                                  </ul>
                                </div>

                                {/* Right Box: What SESA can do */}
                                <div className="p-5 rounded-2xl bg-bg-primary/80 dark:bg-slate-900/90 border border-emerald-500/20 dark:border-red-500/30 shadow-inner flex flex-col justify-between space-y-4">
                                  <span className="text-xs font-bold text-red-500 uppercase font-mono tracking-wider block border-b border-red-500/20 pb-2">
                                    What SESA can do
                                  </span>
                                  <ul className="space-y-3 text-xs text-text-secondary dark:text-slate-300 leading-relaxed font-sans">
                                    <li className="flex items-start gap-2">
                                      <span className="text-emerald-500 dark:text-red-400 font-bold shrink-0">•</span>
                                      <span>Maps compliance gaps across all five failure layers before submission, not after rejection</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-emerald-500 dark:text-red-400 font-bold shrink-0">•</span>
                                      <span>Starts with the most deployable module: a GM:2021 → CORENET X sequencing coordinator</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-emerald-500 dark:text-red-400 font-bold shrink-0">•</span>
                                      <span>Surfaces carbon/DfMA trade-offs at the design decision point, not after it's locked in</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              {/* Footer Tagline */}
                              <div className="pt-3 border-t border-border-color/60 flex items-center justify-between text-[11px] font-mono text-text-secondary">
                                <span>QP / AC Submission Guidance</span>
                                <span className="text-red-500 font-bold">• Active CORENET X Engine</span>
                              </div>
                            </>
                          ) : (
                            /* FSSA — Fire Safety Smart Advisor Content */
                            <>
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-500 text-[10px] font-mono font-bold uppercase tracking-wider">
                                    SCDF Compliance AI
                                  </span>
                                  <button 
                                    onClick={() => setSelectedProduct(null)}
                                    className="text-xs text-text-secondary hover:text-accent font-mono"
                                  >
                                    ✕ Close Details
                                  </button>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary font-display tracking-tight">
                                  FSSA — <span className="text-red-500">Fire Safety Smart Advisor</span>
                                </h3>
                                <p className="text-xs sm:text-sm text-text-secondary dark:text-slate-400 mt-1 font-sans">
                                  Pairing SCDF-level domain judgment with automated IFC rule-checking
                                </p>
                              </div>

                              {/* 2 Column Comparison Grid */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto">
                                {/* Left Box: The bottleneck today */}
                                <div className="p-5 rounded-2xl bg-bg-primary/80 dark:bg-slate-900/90 border border-red-500/20 shadow-inner flex flex-col justify-between space-y-4">
                                  <span className="text-xs font-bold text-red-500 uppercase font-mono tracking-wider block border-b border-red-500/20 pb-2">
                                    The bottleneck today
                                  </span>
                                  <ul className="space-y-3 text-xs text-text-secondary dark:text-slate-300 leading-relaxed font-sans">
                                    <li className="flex items-start gap-2">
                                      <span className="text-red-500 font-bold shrink-0">•</span>
                                      <span>Fire safety review depends on a handful of senior specialists — a scarce, non-scalable resource</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-red-500 font-bold shrink-0">•</span>
                                      <span>Geometric/spatial checks — egress width, travel distance, compartmentation — are done manually, project by project</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-red-500 font-bold shrink-0">•</span>
                                      <span>Feedback lands late in the design cycle, after issues are costly to fix</span>
                                    </li>
                                  </ul>
                                </div>

                                {/* Right Box: What FSSA does */}
                                <div className="p-5 rounded-2xl bg-bg-primary/80 dark:bg-slate-900/90 border border-emerald-500/20 dark:border-red-500/30 shadow-inner flex flex-col justify-between space-y-4">
                                  <span className="text-xs font-bold text-red-500 uppercase font-mono tracking-wider block border-b border-red-500/20 pb-2">
                                    What FSSA does
                                  </span>
                                  <ul className="space-y-3 text-xs text-text-secondary dark:text-slate-300 leading-relaxed font-sans">
                                    <li className="flex items-start gap-2">
                                      <span className="text-emerald-500 dark:text-red-400 font-bold shrink-0">•</span>
                                      <span>A Domain Expert on Fire Safety anchors the domain governance and rule authoring</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-emerald-500 dark:text-red-400 font-bold shrink-0">•</span>
                                      <span>Solibri's rule-checking engine automates the IFC geometric/spatial compliance checks</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-emerald-500 dark:text-red-400 font-bold shrink-0">•</span>
                                      <span>A Gen AI layer explains the "why" behind every flag, reasoning the way a fire safety engineer would</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              {/* Footer Tagline */}
                              <div className="pt-3 border-t border-border-color/60 flex items-center justify-between text-[11px] font-mono text-text-secondary">
                                <span>SCDF Code Compliance Automation</span>
                                <span className="text-red-500 font-bold">• Active AI Rule Engine</span>
                              </div>
                            </>
                          )}
                        </motion.div>
                      ) : (
                        <div className="w-full h-full relative inset-0 rounded-[20px] overflow-hidden">
                          <img src={stage.image} alt={stage.name} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/30 to-transparent" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </Reveal3D>
      </section>

      


      {/* SECTION 4: FEATURED AI SOLUTIONS */}
      <section id="solutions" className="py-24 px-4 bg-bg-primary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
                Featured AI Solutions
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto">
                Highly specialized artificial intelligence components engineered to optimize operations across standard industry pipelines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredSolutions
                .filter(sol => sol.id !== 'cortex')
                .map((sol, idx) => (
                  <Card
                    key={sol.id}
                    image={sol.image}
                    category={sol.category}
                    title={sol.title}
                    description={sol.description}
                    isCoreProduct={sol.id === 'sdsa'}
                    delay={idx * 0.1}
                    href={sol.id === 'akira-datacenter' ? "/products#other-sectors" : "/products"}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(sol.id === 'akira-datacenter' ? "/products#other-sectors" : "/products");
                    }}
                  />
                ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="/products#other-sectors"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/products#other-sectors');
                }}
                className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-accent font-display hover:text-accent-hover hover:underline transition-colors group"
              >
                <span>Explore AI Solutions for other Sectors</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal3D>
      </section>

      {/* SECTION 5: PRODUCTS BENTO GRID */}
      {/* <section id="products-bento" className="py-24 px-4 bg-bg-tertiary/50 border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
                AI Products Ecosystem
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto">
                Our core modular software offerings rendered in an asymmetrical grid highlighting efficiency metrics.
              </p>
            </div> */}

            {/* 3-Column Grid layout (2 rows and 3 columns on desktop) */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {homeProducts.map((prod, idx) => (
                <div
                  key={prod.id}
                  onClick={() => navigate('/products')}
                  style={{ animationDelay: `${idx * 0.4}s` }}
                  className="group relative bg-gradient-to-br from-bg-secondary via-bg-secondary to-bg-tertiary/40 border border-accent/30 hover:border-accent rounded-[28px] overflow-hidden flex flex-col transition-all duration-700 ease-out hover:-translate-y-1.5 hover:scale-[1.01] shadow-[0_8px_30px_rgba(227,6,19,0.05)] hover:shadow-[0_20px_50px_rgba(227,6,19,0.22)] ring-4 ring-accent/5 hover:ring-accent/20 cursor-pointer h-auto animate-slow-bounce"
                > */}
                  {/* Hover Background Image Layer */}
                  {/* <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-full object-cover transition-all duration-700 ease-out scale-105 group-hover:scale-100 opacity-0 group-hover:opacity-100"
                    /> */}
                    {/* Dark overlay for readability on hover background image */}
                    {/* <div className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div> */}

                  {/* Floating hover arrow indicator */}
                  {/* <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm border border-white flex items-center justify-center text-slate-900 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20">
                    <ArrowUpRight className="h-4 w-4" />
                  </div> */}

                  {/* Content Layer (z-10 to stay on top of background image) */}
                  {/* <div className="relative z-10 p-7 flex flex-col h-full">
                    <div> */}
                      {/* Category Capsule Tag */}
                      {/* <div className="flex items-center mb-4">
                        <span className="text-[9px] uppercase tracking-[0.16em] text-accent group-hover:text-white group-hover:bg-accent/20 group-hover:border-white/20 transition-all duration-500 font-bold font-mono px-3 py-1 rounded-full bg-accent-glow border border-accent/15 shadow-sm">
                          {prod.category}
                        </span>
                      </div> */}

                      {/* Premium Accent Line Indicator */}
                      {/* <div className="w-8 h-[2px] bg-accent/40 group-hover:w-16 group-hover:bg-accent transition-all duration-500 rounded-full mb-3.5" /> */}

                      {/* Title */}
                      {/* <h3 className="font-display font-bold text-base text-text-primary mb-2 transition-all duration-400 group-hover:translate-x-1 group-hover:text-white line-clamp-2 leading-snug">
                        {prod.title}
                      </h3> */}

                      {/* Description */}
                      {/* <p className="text-xs text-text-secondary group-hover:text-slate-200 leading-relaxed line-clamp-3 transition-colors duration-500">
                        {prod.description}
                      </p>
                    </div>

                    {/* Footer */}
                    {/* <div className="flex justify-between items-center mt-5 pt-3.5 border-t border-border-color/70 group-hover:border-white/10 transition-colors duration-500">
                      <span
                        className="text-[10px] uppercase tracking-[0.16em] font-bold text-text-secondary transition-colors duration-300 group-hover:text-white"
                      >
                        Explore Product
                      </span>

                      <div className="w-7 h-7 rounded-full border border-border-color flex items-center justify-center transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-accent">
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal3D>
      </section> */}

      {/* SECTION 6: INDUSTRIES WE SERVE */}
      <section id="industries" className="py-24 px-4 bg-bg-secondary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
                Industries We Serve
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto">
                Our AI solutions are purpose-built to navigate specifications across the entire vertical.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((ind, idx) => (
                <Reveal3D key={ind.name} delay={idx * 0.08} amount={0.1}>
                  <a
                    href={ind.isOtherSector ? "/products#other-sectors" : "/industries"}
                    onClick={(e) => {
                      if (ind.isOtherSector) {
                        e.preventDefault();
                        navigate('/products#other-sectors');
                      }
                    }}
                    className="bg-bg-primary border border-border-color hover:border-accent hover:shadow-lg rounded-2xl overflow-hidden group flex flex-col transition-all cursor-pointer block h-full"
                  >
                    <div className="h-44 overflow-hidden relative">
                      <img src={ind.image} alt={ind.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      {ind.isOtherSector && (
                        <span className="absolute top-3 left-3 bg-accent text-white text-[9px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-full shadow-md z-10">
                          Other Sector
                        </span>
                      )}
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <span className="font-display font-bold text-sm text-text-primary group-hover:text-accent transition-colors">
                        {ind.name}
                      </span>
                      <ArrowRight className="h-4 w-4 text-text-secondary group-hover:text-accent transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </Reveal3D>
              ))}
            </div>
          </div>
        </Reveal3D>
      </section>

      {/* SECTION 7: CASE STUDIES CAROUSEL */}
      {/* <section id="case-studies" className="py-24 px-4 bg-bg-primary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-6xl mx-auto ">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
                Proven Results
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto">
                Read how leading firms deployed Aptiv8 AI models to save costs and reduce review timelines.
              </p>
            </div>

            <div className="bg-bg-secondary dark:bg-bg-primary border border-border-color/80 p-6 sm:p-8 md:p-10 rounded-[28px] shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] relative overflow-hidden group hover:shadow-[0_16px_48px_0_rgba(227,6,19,0.06)] hover:border-accent/40 transition-all duration-500"
            >
              <AnimatePresence mode="wait">
                {caseStudies.map((cs, idx) => {
                  if (idx !== currentCase) return null;
                  return (
                    <motion.div
                      key={cs.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                    > */}
                      {/* Problem / Solution details - Standard Card */}
                      {/* <div className="border border-border-color bg-bg-primary/40 dark:bg-bg-secondary/30 rounded-2xl p-6 flex flex-col justify-center gap-2 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white dark:hover:bg-bg-secondary hover:shadow-[0_15px_30px_rgba(239,68,68,0.5)] hover:border-red-500/30 cursor-pointer">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-accent font-bold font-display mb-1 block">
                            Case Study 0{idx + 1}
                          </span>
                          <h3 className="text-2xl font-bold font-display text-text-primary mb-4">
                            Optimizing Built Operations
                          </h3>
                        </div>

                        <div className="group relative p-5 rounded-2xl bg-bg-secondary/60 border border-border-color/70 overflow-hidden transition-all duration-500 hover:border-accent/40 hover:bg-bg-secondary hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(239,68,68,0.10)]">
                          <h4 className="text-xs uppercase tracking-wider font-bold text-text-primary mb-1">The Challenge</h4>
                          <p className="text-sm text-text-secondary">{cs.problem}</p>
                        </div>

                        <div className="group relative p-5 rounded-2xl bg-bg-secondary/60 border border-border-color/70 overflow-hidden transition-all duration-500 hover:border-accent/40 hover:bg-bg-secondary hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(239,68,68,0.10)]">
                          <h4 className="text-xs uppercase tracking-wider font-bold text-text-primary mb-1">Aptiv8 AI Solution</h4>
                          <p className="text-sm text-text-secondary">{cs.solution}</p>
                        </div>

                        <div className="group relative p-5 rounded-2xl bg-bg-secondary/60 border border-border-color/70 overflow-hidden transition-all duration-500 hover:border-accent/40 hover:bg-bg-secondary hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(239,68,68,0.10)]">
                          <h4 className="text-xs uppercase tracking-wider font-bold text-text-primary mb-1">Implementation</h4>
                          <p className="text-sm text-text-secondary">{cs.implementation}</p>
                        </div>
                      </div> */}

                      {/* Results / Business Impact - Standard Card */}
                      {/* <div className="border border-border-color bg-bg-primary/40 dark:bg-bg-secondary/30 rounded-2xl p-6 flex flex-col justify-center gap-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white dark:hover:bg-bg-secondary hover:shadow-[0_15px_30px_rgba(239,68,68,0.5)] hover:border-red-500/30 cursor-pointer">
                        <div className="group relative p-5 rounded-2xl bg-bg-secondary/60 border border-border-color/70 overflow-hidden transition-all duration-500 hover:border-accent/40 hover:bg-bg-secondary hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(239,68,68,0.10)]">
                          <span className="text-xs uppercase tracking-wider text-accent font-bold font-display">Results & Verification</span>
                          <p className="text-xl font-bold font-display text-text-primary mt-2">{cs.results}</p>
                        </div>
                        <div className="group relative p-5 rounded-2xl bg-bg-secondary/60 border border-border-color/70 overflow-hidden transition-all duration-500 hover:border-accent/40 hover:bg-bg-secondary hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(239,68,68,0.10)]">
                          <span className="text-xs uppercase tracking-wider text-accent font-bold font-display">Total Business Impact</span>
                          <p className="text-xl font-bold font-display text-text-primary mt-2">{cs.impact}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence> */}

              {/* Navigation buttons */}
              {/* <div className="flex justify-end gap-3 mt-3">
                <button
                  onClick={() => setCurrentCase(prev => (prev === 0 ? caseStudies.length - 1 : prev - 1))}
                  className="p-3 rounded-full border border-blue-800/40 bg-white/5 hover:bg-white/15 text-black transition-colors cursor-pointer"
                  aria-label="Previous Case Study"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setCurrentCase(prev => (prev === caseStudies.length - 1 ? 0 : prev + 1))}
                  className="p-3 rounded-full border border-blue-800/40 bg-white/5 hover:bg-white/15 text-black transition-colors cursor-pointer"
                  aria-label="Next Case Study"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal3D>
      </section> */}

      {/* SECTION 8: ENTERPRISE AI STRATEGY */}
      {/* <section id="enterprise-ai" className="py-24 px-4 bg-bg-secondary border-b border-border-color relative overflow-hidden">
        <Reveal3D> */}
          {/* Architectural backdrop line */}
          {/* <div className="absolute top-0 right-0 w-96 h-96 border border-accent/10 rounded-full -mr-20 -mt-20 pointer-events-none" />

          <div className="max-w-5xl mx-auto bg-gradient-to-r from-accent to-accent-hover dark:from-bg-tertiary dark:to-bg-secondary dark:border dark:border-accent/30 rounded-[32px] p-8 md:p-12 text-white relative shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-4 relative z-10 max-w-2xl">
              <div className="flex flex-wrap gap-2.5 items-center">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider w-max">
                  Strategic Partnership
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-[#D4AF37] font-mono text-xs font-bold uppercase tracking-wider w-max">
                  CSA-STAR Certified
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-display leading-tight">
                Scale Your Enterprise with Custom AI Models
              </h2>
              <p className="text-white/85 text-sm md:text-base leading-relaxed">
                Work directly with our ML engineers to build, fine-tune, and deploy custom neural architectures integrated with Singapore's regulatory regimes and BCA Green Mark standards.
              </p>
              
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs uppercase tracking-widest font-bold text-white/70 mb-3 font-mono">Our Core Enterprise Services:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs md:text-sm text-white/90 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0" />
                    <span>Custom Agentic Workflow Orchestration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0" />
                    <span>Singapore Government API & CORENET X Integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0" />
                    <span>On-Premise or Private Cloud Deployments</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="shrink-0 relative z-10 w-full lg:w-auto flex flex-col gap-3 items-center lg:items-end">
              <span className="text-white font-display text-sm tracking-widest uppercase bg-white/10 px-4 py-2 rounded-xl text-center w-full lg:w-auto">
                Singapore & SEA Region
              </span>
              <a
                href="/contact"
                className="w-full lg:w-auto px-8 py-4 bg-white text-accent hover:bg-white/90 dark:bg-accent dark:text-white dark:hover:bg-accent-hover rounded-full font-bold transition-all text-center shadow-lg hover:shadow-xl"
              >
                Book a Strategy Session
              </a>
            </div>
          </div>
        </Reveal3D>
      </section> */}

      {/* SECTION 9: PARTNERS SLIDER */}
      {/* <section className="py-12 bg-bg-primary border-b border-border-color overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-6">
          <p className="text-xs uppercase tracking-widest font-semibold text-text-secondary text-center">
            Trusted by modern leaders in construction & engineering
          </p>
        </div>

        {/* Infinite sliding marquee */}
        {/* <div className="relative w-full flex items-center overflow-hidden">
          <div className="animate-marquee flex gap-12 py-4"> */}
            {/* Set 1 */}
            {/* {marqueeLogos.map((partner, idx) => (
              <div key={idx} className="flex items-center gap-2 font-display text-base font-bold text-text-secondary/50 shrink-0 transition-all duration-300 hover:text-accent hover:scale-[1.08] cursor-pointer">
                <Building className="h-5 w-5" />
                <span>{partner}</span>
              </div>
            ))} */}
            {/* Set 2 */}
            {/* {marqueeLogos.map((partner, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-2 font-display text-base font-bold text-text-secondary/50 shrink-0 transition-all duration-300 hover:text-accent hover:scale-[1.08] cursor-pointer">
                <Building className="h-5 w-5" />
                <span>{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* SECTION 10: AI KNOWLEDGE ASSISTANT (Chatbot) */}
      {/* <section id="chatbot-section" className="py-24 px-4 bg-bg-tertiary/50 border-b border-border-color">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
              AI Knowledge Assistant
            </h2>
            <p className="text-text-secondary max-w-md mx-auto">
              Ask our virtual advisor detailed questions about compliance automation, energy designs, and facilities.
            </p>
          </div>

          <div className="bg-bg-secondary border border-border-color rounded-[24px] shadow-xl overflow-hidden flex flex-col h-[500px] hover:shadow-[0_20px_45px_rgba(227,6,19,0.35),0_8px_20px_rgba(227,6,19,0.12)]
dark:hover:shadow-[0_20px_45px_rgba(255,59,71,0.30),0_8px_20px_rgba(255,59,71,0.10)]
hover:border-accent/60
transition-all duration-500"> */}
            {/* Header */}
            {/* <div className="bg-bg-primary border-b border-border-color p-4.5 flex items-center justify-between relative overflow-hidden"> */}
              {/* Tech scanline background effect */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.02] to-transparent pointer-events-none" />

              <div className="flex items-center gap-3.5 relative z-10">
                <div className="relative p-2.5 rounded-xl bg-gradient-to-tr from-accent to-[#ff6a75] text-white shadow-[0_0_20px_rgba(227,6,19,0.3)] dark:shadow-[0_0_20px_rgba(255,59,71,0.35)] flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 animate-pulse" />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-bg-primary rounded-full" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-sm tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-accent via-[#ff6a75] to-amber-500 uppercase">
                    Aptiv8 AI Engine
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[9px] text-emerald-500 dark:text-emerald-400 font-extrabold uppercase tracking-widest">
                      Cognitive Core Active
                    </span>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Chat list */}
            {/* <div className="flex-grow p-6 overflow-y-auto flex flex-col gap-4">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-3 max-w-[80%] ${msg.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'
                    }`}
                >
                  <div
                    className={`p-2 rounded-lg shrink-0 ${msg.sender === 'user' ? 'bg-accent text-white' : 'bg-bg-primary text-text-secondary'
                      }`}
                  >
                    {msg.sender === 'user' ? <User className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
                  </div>
                  <div
                    className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                        ? 'bg-accent text-white rounded-tr-none'
                        : 'bg-bg-primary text-text-primary border border-border-color rounded-tl-none'
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div> */}

            {/* Sample questions suggestions */}
            {/* <div className="p-4 bg-bg-primary/50 border-t border-border-color flex flex-wrap gap-2">
              {[
                'How can I improve Green Mark compliance?',
                'How can AI improve facility management?',
                'How can I automate bid preparation?',
              ].map(q => (
                <button
                  key={q}
                  onClick={() => handleChatSend(q)}
                  className="text-xs bg-bg-secondary hover:border-accent border border-border-color text-text-secondary hover:text-accent px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div> */}

            {/* Chat Input */}
            {/* <form
              onSubmit={(e) => {
                e.preventDefault();
                handleChatSend();
              }}
              className="p-4 bg-bg-primary border-t border-border-color flex gap-3"
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about compliance code, BIM, Strata management..."
                className="flex-grow bg-bg-secondary text-text-primary border border-border-color rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section> */}

    </div>
  );
}
