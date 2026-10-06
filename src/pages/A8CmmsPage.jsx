import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Mic, BookOpen, Bot, ClipboardCheck, ShieldCheck, 
  Wrench, Layers, AlertCircle, RefreshCw, Smartphone, Cpu, 
  Database, Network, Zap, CheckCircle2, ChevronRight, Activity,
  Sliders, Lock, BarChart3, Radio
} from 'lucide-react';
import Reveal3D from '../components/Reveal3D';

export default function A8CmmsPage() {
  return (
    <div className="relative pt-20 bg-bg-primary text-text-primary min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative py-36 px-4 bg-cover bg-center overflow-hidden flex items-center justify-center min-h-[calc(100vh-80px)] w-full"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="absolute inset-0 bg-slate-950/75 z-0 pointer-events-none backdrop-blur-[2px]" />

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full flex flex-col items-center justify-center my-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold font-mono tracking-[0.25em] text-[#c5a880] uppercase mb-4 block"
          >
            OPERATIONS & MAINTENANCE
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            A8 AI-Powered CMMS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Intelligent Maintenance. Connected Assets. Smarter Operations. An AI-powered Computerized Maintenance Management System that connects workflows, asset telemetry, and operational insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#c5a880] hover:bg-[#b0936b] text-slate-950 font-bold text-sm tracking-wide transition-all shadow-xl hover:shadow-amber-500/25 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
            >
              <span className="relative z-10">Request a Demo</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUSTED REGIONALLY & ENTERPRISE SECURITY */}
      <section className="py-20 px-4 bg-bg-secondary border-b border-border-color relative">
        <div className="max-w-7xl mx-auto">
          <Reveal3D direction="up" delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-bg-primary border border-border-color rounded-3xl p-8 md:p-10 shadow-lg hover:border-accent/30 transition-all duration-300">
              
              {/* Left Counter */}
              <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-border-color pb-8 lg:pb-0 lg:pr-8">
                <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold block mb-2 font-display">
                  TRUSTED. DEPLOYED. PROVEN.
                </span>
                <div className="flex items-baseline gap-3">
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="text-5xl sm:text-6xl font-extrabold text-[#c5a880]" 
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    200+
                  </motion.span>
                  <span className="text-lg font-bold text-text-primary leading-tight font-display">
                    Systems Deployed <br />Regionally
                  </span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed mt-3">
                  A8 CMMS has been deployed across regional operations, supporting organizations in managing maintenance, assets, and facilities through connected digital workflows.
                </p>
              </div>

              {/* Right Institutions & Security */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-3 font-display">
                    Trusted across Singapore's Institutes of Higher Learning & Public Sector
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {['NTU', 'NUS', 'SUTD', 'SIT', 'Supreme Court', 'MHA', 'LTA'].map((inst, idx) => (
                      <motion.span 
                        key={idx}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="px-4 py-2 rounded-xl bg-bg-secondary border border-border-color hover:border-accent text-xs font-bold text-text-primary shadow-xs transition-all cursor-default"
                      >
                        {inst}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border-color flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-accent-glow text-accent shrink-0 shadow-sm">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider font-display">Enterprise-Grade Security</h4>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                      CSA-STAR certified | Secure cloud | Role-based access control | Audit trails | Data protection | Secure integrations
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </Reveal3D>
        </div>
      </section>

      {/* 3. THE POWER OF AI IN MAINTENANCE (4 CARDS WITH STAGGER ANIMATIONS) */}
      <section className="py-24 px-4 bg-bg-primary border-b border-border-color">
        <div className="max-w-7xl mx-auto space-y-14">
          <Reveal3D direction="up">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-mono tracking-widest text-accent uppercase font-bold block mb-2 font-display">
                AI-ENHANCED OPERATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                The Power of AI in Maintenance
              </h2>
              <p className="text-sm text-text-secondary mt-2">
                Our AI capabilities go beyond automation — they help you understand, predict, and act, keeping your facilities running at their best.
              </p>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'AI Fault Reporting',
                desc: 'Report faults through mobile, web, QR codes or voice. AI interprets and validates the information, and converts it into a work order.',
                icon: Mic
              },
              {
                title: 'AI Knowledge Management',
                desc: 'Get instant access to SOPs, manuals and troubleshooting guides through natural language AI.',
                icon: BookOpen
              },
              {
                title: 'All AI Maintenance CoPilot',
                desc: 'Ask questions, get updates and receive insights on faults, work orders, assets, PM tasks and more.',
                icon: Bot
              },
              {
                title: 'AI Checklist Intelligence',
                desc: 'Automatically analyse checklists, identify abnormalities and highlight compliance gaps.',
                icon: ClipboardCheck
              }
            ].map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <Reveal3D key={idx} delay={idx * 0.1} direction="up">
                  <motion.div 
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-bg-secondary border border-border-color hover:border-accent rounded-2xl p-6 flex flex-col justify-between group transition-all shadow-sm hover:shadow-xl h-full relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full pointer-events-none group-hover:bg-accent/10 transition-colors" />

                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-accent-glow text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-all shadow-xs">
                        <CardIcon className="w-6 h-6" />
                      </div>
                      <h3 className="text-base font-bold text-text-primary mb-2 font-display group-hover:text-accent transition-colors">{card.title}</h3>
                      <p className="text-xs text-text-secondary leading-relaxed mb-6">{card.desc}</p>
                    </div>
                    <a href="/contact" className="text-xs font-bold text-accent hover:underline flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                      <span>Learn more</span>
                      <span>→</span>
                    </a>
                  </motion.div>
                </Reveal3D>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FROM FAULT TO RESOLUTION — WITH AI (WORKFLOW STEPPER) */}
      <section className="py-24 px-3 sm:px-6 bg-gradient-to-b from-bg-secondary via-bg-primary to-bg-secondary border-b border-border-color relative overflow-hidden">
        {/* Background glow accents */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/5 dark:bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto space-y-12 relative z-10">
          <Reveal3D direction="up">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-[0.2em] text-accent uppercase font-bold px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                <Zap className="w-3 h-3 animate-pulse" />
                INTELLIGENT END-TO-END WORKFLOW
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight font-display">
                From Fault to Resolution — <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-500 to-accent">With AI</span>
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                AI understands, validates, and transforms raw fault reports into structured work orders — instantly dispatched.
              </p>
            </div>
          </Reveal3D>

          {/* Stepper Grid Container: Single Row with 6 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-3.5 relative">
            {[
              {
                step: '01',
                title: 'Report Fault',
                desc: 'Multi-channel input: Voice, App, Web, QR, or IoT sensor triggers.',
                icon: Mic,
                badge: 'Multi-Channel'
              },
              {
                step: '02',
                title: 'AI Interpret',
                desc: 'NLP extracts context, intent & defect details from unstructured text/voice.',
                icon: Bot,
                badge: 'NLP Engine'
              },
              {
                step: '03',
                title: 'Validate Details',
                desc: 'Cross-checks asset location, history, defect patterns & urgency.',
                icon: ShieldCheck,
                badge: 'Smart Check'
              },
              {
                step: '04',
                title: 'Create Order',
                desc: 'Auto-generates Work Order with reference IDs, SLAs & SOP manuals.',
                icon: ClipboardCheck,
                badge: 'Auto Ticket'
              },
              {
                step: '05',
                title: 'Assign Team',
                desc: 'Matches engineer skillsets, live location & shift availability.',
                icon: Wrench,
                badge: 'Smart Dispatch'
              },
              {
                step: '06',
                title: 'Rectify & Notify',
                desc: 'Field sign-off, photo evidence, inventory update & alerts.',
                icon: CheckCircle2,
                badge: 'Closure'
              }
            ].map((item, idx) => {
              const IconComp = item.icon;
              
              // Calculate stack offset for scroll-trigger unstack animation
              const stackOffsets = [
                { x: 125, r: 12 },
                { x: 75, r: 7 },
                { x: 25, r: 3 },
                { x: -25, r: -3 },
                { x: -75, r: -7 },
                { x: -125, r: -12 }
              ];
              const offset = stackOffsets[idx] || { x: 0, r: 0 };

              return (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    y: 60,
                    x: offset.x,
                    rotate: offset.r,
                    scale: 0.88
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    x: 0,
                    rotate: 0,
                    scale: 1
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.1,
                    ease: [0.21, 1.11, 0.81, 0.99]
                  }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="
                    group relative h-full p-4 rounded-2xl
                    bg-bg-secondary/90 dark:bg-[#0c182c]/90 backdrop-blur-xl
                    border border-border-color hover:border-accent/60 dark:hover:border-[#D4AF37]/70
                    shadow-sm hover:shadow-xl hover:shadow-accent/10 dark:hover:shadow-[#D4AF37]/10
                    transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default
                  "
                >
                  {/* Step glow background element */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/25 transition-all duration-500 pointer-events-none" />

                  <div>
                    {/* Top Header Row */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-accent/10 dark:bg-accent/20 text-accent group-hover:bg-accent group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs">
                        <IconComp className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span className="text-xl font-black font-mono text-text-secondary/25 group-hover:text-accent/50 transition-colors duration-300">
                        {item.step}
                      </span>
                    </div>

                    {/* Badge */}
                    <span className="inline-block text-[9px] font-mono font-bold uppercase tracking-wider text-accent dark:text-[#D4AF37] px-2 py-0.5 rounded bg-accent/10 dark:bg-[#D4AF37]/10 border border-accent/20 mb-2">
                      {item.badge}
                    </span>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-text-primary font-display leading-tight mb-1.5 group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[11px] text-text-secondary dark:text-slate-300 leading-snug font-sans">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom indicator */}
                  <div className="pt-3 mt-3 border-t border-border-color/60 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-text-secondary font-medium">
                      Step {item.step}/06
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-text-secondary group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. COMPLETE CMMS CAPABILITIES (GRID OF ALL 16 CARDS WITH REVEAL) */}
      <section className="py-24 px-4 bg-bg-primary border-b border-border-color">
        <div className="max-w-7xl mx-auto space-y-14">
          <Reveal3D direction="up">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <span className="text-xs font-mono tracking-widest text-accent uppercase font-bold block font-display">
                BUILT FOR EVERY FACILITY
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                Complete CMMS Capabilities
              </h2>
              <p className="text-sm text-text-secondary">
                Powerful features. Seamless operations. All in one platform.
              </p>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'AI Fault Reporting',
                desc: 'Report faults through mobile, web, QR or integrated systems. AI understands the fault, validates asset/location/severity, creates a work order and assigns it to the appropriate maintenance team.',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80' // Technician inspecting & scanning faulty machinery alert
              },
              {
                title: 'AI Knowledge Management',
                desc: 'Gives technicians quick access to SOPs, manuals, safety documents and maintenance records, with natural-language answers and step-by-step troubleshooting guidance.',
                image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80' // Digital manuals, documentation & technical guides
              },
              {
                title: 'A8 AI Maintenance CoPilot',
                desc: 'Enables natural-language interaction with CMMS data, helping users retrieve faults, work orders, assets and maintenance information without navigating multiple screens.',
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80' // AI Assistant software interface workspace
              },
              {
                title: 'AI Checklist Intelligence',
                desc: 'AI generates and digitalises checklists, links them to assets/PM/work orders, and validates submissions to identify missing information and abnormal findings.',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80' // Digital audit inspection checklist validation
              },
              {
                title: 'Preventive Maintenance',
                desc: 'Schedules and automates recurring PM inspections and servicing tasks, maintaining asset reliability with real-time status tracking accessible via AI Assistant.',
                image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80' // Preventive maintenance servicing of electrical/HVAC systems
              },
              {
                title: 'Work Order Management',
                desc: 'AI creates work orders from validated fault reports and automatically assigns them to maintenance teams based on skillsets, priority, and availability.',
                image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' // Engineer executing work order assignment on-site
              },
              {
                title: 'Downtime Tracking',
                desc: 'Tracks equipment outages and operational downtime events to log root-cause failure codes and analyze MTBF/MTTR performance metrics.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80' // Real-time outage & downtime analytics dashboard
              },
              {
                title: 'Maintenance Checklists',
                desc: 'Provides reusable checklists for inspection, maintenance, audit and compliance, with direct links to assets, PM schedules and work orders.',
                image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80' // Clipboard & digital checklist inspection auditing
              },
              {
                title: 'Asset Management',
                desc: 'Maintains a comprehensive asset registry detailing serial specs, runtime histories, and location linkages referenced in fault reports and checklists.',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' // Industrial facility heavy equipment & asset switchgear
              },
              {
                title: 'IoT & Condition-Based Maintenance',
                desc: 'Features IoT threshold configurations that continuously monitor telemetry data to automatically trigger fault and work-order reporting.',
                image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80' // Live hardware IoT telemetry sensor circuit board
              },
              {
                title: 'Spare Parts & Inventory',
                desc: 'Enables inventory, spare parts consumption, and labour costs to be logged directly into fault and work-order maintenance records.',
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80' // Industrial warehouse spare parts shelves
              },
              {
                title: 'Workflow Automation',
                desc: 'AI automatically validates fault information, creates work orders and assigns them according to workflow, skillset, availability and fault category.',
                image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80' // Workflow diagram process automation screen
              },
              {
                title: 'Mobile CMMS',
                desc: 'Empowers field teams to raise faults, update order statuses, execute checklists, and upload photo evidence via native mobile applications.',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80' // Mobile CMMS field app in technician hands
              },
              {
                title: 'AI-Enhanced Dashboards',
                desc: 'Provides management insights on service performance, response time and maintenance trends, including interactive dashboard and compliance summaries.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' // Modern data analytics executive management dashboard
              },
              {
                title: 'Digital Twin & IoT Integration',
                desc: 'Connects live IoT sensor telemetry with spatial 3D Digital Twin models for real-time asset condition visualization and fault trigger alerts.',
                image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80' // Spatial 3D architectural digital twin building model
              },
              {
                title: 'ERP & API Integration',
                desc: 'Connects CMMS data with corporate ERP suites (SAP, Oracle) and external third-party software via standardized RESTful APIs.',
                image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80' // Corporate software ERP integration dashboard & API data flow
              }
            ].map((cap, idx) => (
              <Reveal3D key={idx} delay={(idx % 4) * 0.06} direction="up">
                <motion.div 
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="rounded-2xl bg-bg-secondary border border-border-color hover:border-accent/60 dark:hover:border-[#D4AF37]/60 transition-all flex flex-col justify-between shadow-xs hover:shadow-xl group h-full cursor-default overflow-hidden"
                >
                  <div>
                    {/* Realistic Clean Image Thumbnail */}
                    <div className="relative h-44 w-full overflow-hidden bg-bg-primary">
                      <img 
                        src={cap.image} 
                        alt={cap.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-white border border-white/20 text-xs font-mono font-bold shadow-md">
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="w-6 h-6 rounded-full bg-accent-glow text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <h3 className="text-base font-bold text-text-primary font-display leading-snug group-hover:text-accent transition-colors">
                          {cap.title}
                        </h3>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed font-sans">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Reveal3D>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONNECTED INTELLIGENCE FOR SMARTER FACILITIES (DIAGRAM WITH REVEAL) */}
      <section className="py-24 px-4 bg-bg-secondary border-b border-border-color">
        <div className="max-w-7xl mx-auto">
          <Reveal3D direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono tracking-widest text-accent uppercase font-bold block font-display">
                  INTEGRATED ECOSYSTEM
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-text-primary" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  Connected Intelligence for Smarter Facilities
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed">
                  A8 CMMS works seamlessly with IoT, Digital Twin and your existing systems to give you a unified view of your facilities and assets.
                </p>
                <div>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-bg-primary border border-border-color hover:border-accent text-accent font-bold text-xs uppercase tracking-wider transition-all shadow-xs hover:shadow-md hover:scale-105"
                  >
                    <span>Explore Ecosystem</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="bg-bg-primary border border-border-color rounded-3xl p-3 sm:p-4 shadow-xl overflow-hidden hover:border-accent/50 transition-all duration-300"
                >
                  <img 
                    src="/connected_intelligence_ecosystem.jpg" 
                    alt="A8 CMMS Connected Intelligence Ecosystem Diagram" 
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </Reveal3D>
        </div>
      </section>

      {/* 7. PART OF THE A8 BUILT ENVIRONMENT PLATFORM & CTA */}
      <section className="py-20 px-4 bg-bg-primary text-center">
        <Reveal3D>
          <div className="max-w-4xl mx-auto space-y-6 bg-bg-secondary border border-border-color rounded-3xl p-10 sm:p-14 shadow-md">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              Ready to Make Maintenance More Intelligent?
            </h2>
            <p className="text-sm text-text-secondary max-w-lg mx-auto">
              See how A8 AI-Powered CMMS can connect your teams, assets and data for better performance and lower operational costs.
            </p>
            <div>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent hover:bg-accent-hover text-white font-bold text-sm tracking-wide transition-all shadow-lg"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal3D>
      </section>

    </div>
  );
}
