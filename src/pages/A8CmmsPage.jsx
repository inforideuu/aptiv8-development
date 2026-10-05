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
      <section className="py-24 px-4 bg-bg-secondary border-b border-border-color">
        <div className="max-w-7xl mx-auto space-y-14">
          <Reveal3D direction="up">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <span className="text-xs font-mono tracking-widest text-accent uppercase font-bold block font-display">
                SMARTER WORKFLOWS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                From Fault to Resolution — With AI
              </h2>
              <p className="text-sm text-text-secondary">
                AI understands, validates and turns every fault into an actionable work order — faster, smarter and with the right team.
              </p>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {[
              { title: 'Report Fault', sub: '(Voice / Mobile / Web / QR / Integrated Systems)' },
              { title: 'AI Understands & Interprets', sub: 'Natural language analysis' },
              { title: 'Validate Details', sub: '(Location, Asset, Type, Severity)' },
              { title: 'Create Work Order', sub: '(Unique Reference)' },
              { title: 'Assign Team', sub: '(Skillset, Availability, Workflow)' },
              { title: 'Rectify & Notify Completion', sub: '(Photos / Updates / Signoff)' }
            ].map((step, idx) => (
              <Reveal3D key={idx} delay={idx * 0.08} direction="up">
                <motion.div 
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="bg-bg-primary border border-border-color rounded-2xl p-4 text-center flex flex-col justify-between h-48 relative shadow-sm hover:border-accent transition-all group"
                >
                  <div className="w-9 h-9 rounded-full bg-accent-glow text-accent font-bold text-xs flex items-center justify-center mx-auto mb-2 group-hover:bg-accent group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-primary mb-1 font-display group-hover:text-accent transition-colors">{step.title}</h4>
                    <p className="text-[10px] text-text-secondary leading-tight">{step.sub}</p>
                  </div>
                  <div className="text-[10px] font-mono text-accent/80 pt-2 border-t border-border-color/60">
                    Step 0{idx + 1}
                  </div>
                </motion.div>
              </Reveal3D>
            ))}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'AI Fault Reporting',
                desc: 'Report faults through mobile, web, QR or integrated systems. AI understands the fault, validates asset/location/severity, creates a work order and assigns it to the appropriate maintenance team.'
              },
              {
                title: 'AI Knowledge Management',
                desc: 'Gives technicians quick access to SOPs, manuals, safety documents and maintenance records, with natural-language answers and step-by-step troubleshooting guidance.'
              },
              {
                title: 'A8 AI Maintenance CoPilot',
                desc: 'Enables natural-language interaction with CMMS data, helping users retrieve faults, work orders, assets and maintenance information without navigating multiple screens.'
              },
              {
                title: 'AI Checklist Intelligence',
                desc: 'AI generates and digitalises checklists, links them to assets/PM/work orders, and validates submissions to identify missing information and abnormal findings.'
              },
              {
                title: 'Preventive Maintenance',
                desc: 'Schedules and automates recurring PM inspections and servicing tasks, maintaining asset reliability with real-time status tracking accessible via AI Assistant.'
              },
              {
                title: 'Work Order Management',
                desc: 'AI creates work orders from validated fault reports and automatically assigns them to maintenance teams based on skillsets, priority, and availability.'
              },
              {
                title: 'Downtime Tracking',
                desc: 'Tracks equipment outages and operational downtime events to log root-cause failure codes and analyze MTBF/MTTR performance metrics.'
              },
              {
                title: 'Maintenance Checklists',
                desc: 'Provides reusable checklists for inspection, maintenance, audit and compliance, with direct links to assets, PM schedules and work orders.'
              },
              {
                title: 'Asset Management',
                desc: 'Maintains a comprehensive asset registry detailing serial specs, runtime histories, and location linkages referenced in fault reports and checklists.'
              },
              {
                title: 'IoT & Condition-Based Maintenance',
                desc: 'Features IoT threshold configurations that continuously monitor telemetry data to automatically trigger fault and work-order reporting.'
              },
              {
                title: 'Spare Parts & Inventory',
                desc: 'Enables inventory, spare parts consumption, and labour costs to be logged directly into fault and work-order maintenance records.'
              },
              {
                title: 'Workflow Automation',
                desc: 'AI automatically validates fault information, creates work orders and assigns them according to workflow, skillset, availability and fault category.'
              },
              {
                title: 'Mobile CMMS',
                desc: 'Empowers field teams to raise faults, update order statuses, execute checklists, and upload photo evidence via native mobile applications.'
              },
              {
                title: 'AI-Enhanced Dashboards',
                desc: 'Provides management insights on service performance, response time and maintenance trends, including interactive dashboard and compliance summaries.'
              },
              {
                title: 'Digital Twin & IoT Integration',
                desc: 'Connects live IoT sensor telemetry with spatial 3D Digital Twin models for real-time asset condition visualization and fault trigger alerts.'
              },
              {
                title: 'ERP & API Integration',
                desc: 'Connects CMMS data with corporate ERP suites (SAP, Oracle) and external third-party software via standardized RESTful APIs.'
              }
            ].map((cap, idx) => (
              <Reveal3D key={idx} delay={(idx % 4) * 0.08} direction="up">
                <motion.div 
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="p-5 rounded-2xl bg-bg-secondary border border-border-color hover:border-accent/60 transition-all flex flex-col justify-between shadow-xs hover:shadow-lg group h-full cursor-default"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-6 h-6 rounded-full bg-accent-glow text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-sm font-bold text-text-primary font-display leading-snug group-hover:text-accent transition-colors">
                        {cap.title}
                      </h3>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed font-sans">
                      {cap.desc}
                    </p>
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
