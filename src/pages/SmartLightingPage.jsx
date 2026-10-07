import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Layers, 
  Sliders, 
  Radio, 
  ArrowRight, 
  Wind, 
  Sparkles,
  Lightbulb,
  Wifi,
  CheckCircle,
  Building,
  Zap,
  Activity,
  Layers3
} from 'lucide-react';

// Premium 3D Perspective Reveal Wrapper
const Reveal3D = ({ children, delay = 0, direction = "up" }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction], scale: 0.98 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

export default function SmartLightingPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary overflow-hidden font-sans pt-20">
      
      {/* HERO BANNER */}
      <section 
        className="relative py-36 px-4 bg-cover bg-center overflow-hidden flex items-center justify-center min-h-[calc(100vh-80px)]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1920&q=80')" }}
      >
        {/* Soft light overlay so image is crisp and clearly visible */}
        <div className="absolute inset-0 bg-slate-950/35 z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/40 z-0 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full flex flex-col items-center">
          {/* Subtitle in Red uppercase */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[15px] font-bold font-mono tracking-[0.25em] text-[#ef4444] uppercase mb-4 block"
          >
            SMART LIGHTING & AIRSIDE DEMAND CONTROL
          </motion.span>

          {/* Main Headline in Serif with White and Neon Red */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            LMZ2 Smart <span className="text-[#ef4444]">Lighting System</span>
          </motion.h1>

          {/* Centered description text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Autonomous human presence detection, daylight harvesting, and real-time space activity data integration for BMS/IBMS airside demand control.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* Get Started Red Button */}
            <a 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#e30613] hover:bg-white text-white hover:text-[#e30613] font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer shadow-lg"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* SLIDE 1: CORE TECHNOLOGY: LMZ2 SENSOR */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-bg-primary border-b border-border-color relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
                <Cpu className="w-3.5 h-3.5" />
                <span>Patented Technology</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                Core Technology: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-[#e30613]">LMZ2 Sensor</span>
              </h2>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <Reveal3D direction="right">
                <div className="space-y-4">
                  
                  {/* Bullet 1 */}
                  <div className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/90 border border-amber-200/80 dark:border-amber-500/20 shadow-sm hover:shadow-md hover:border-amber-400/50 transition-all duration-300 space-y-2.5 group">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-3 font-display">
                      <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300/60 dark:border-amber-700/60 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Radio className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      </div>
                      <span>Wireless Human Presence Sensor instead of Motion Sensor</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans pl-12">
                      — One 24GHz RADAR for 5m x 5m x 5m space
                    </p>
                    <div className="ml-12 p-3 rounded-xl bg-amber-100/90 dark:bg-amber-950/80 border border-amber-300/80 dark:border-amber-700/60 text-amber-950 dark:text-amber-200 text-xs font-bold shadow-inner">
                      ⚠️ The sensor detects sitting still occupants to prevent false operation
                    </div>
                  </div>

                  {/* Bullet 2 */}
                  <div className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/90 border border-blue-200/80 dark:border-blue-500/20 shadow-sm hover:shadow-md hover:border-blue-400/50 transition-all duration-300 space-y-2.5 group">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-3 font-display">
                      <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/60 border border-blue-300/60 dark:border-blue-700/60 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Wifi className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span>Wireless Embedded lights with high performance mesh networks</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans pl-12">
                      — Medium performance LEDs (120 lm/W) may reach &lt;5W/m² @500lux on the working plane at an affordable price
                    </p>
                    <div className="ml-12 p-3 rounded-xl bg-amber-100/90 dark:bg-amber-950/80 border border-amber-300/80 dark:border-amber-700/60 text-amber-950 dark:text-amber-200 text-xs font-bold shadow-inner">
                      📊 Activity Data collection for integration with BMS/IBMS/Smart Platform Vendor to better perform airside aircon demand control.
                    </div>
                  </div>

                  {/* Bullet 3 */}
                  <div className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/90 border border-emerald-200/80 dark:border-emerald-500/20 shadow-sm hover:shadow-md hover:border-emerald-400/50 transition-all duration-300 space-y-2.5 group">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-3 font-display">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300/60 dark:border-emerald-700/60 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Lightbulb className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span>Built-in Lux Sensor for daylight harvesting</span>
                    </h3>
                    <p className="text-xs text-red-600 dark:text-red-400 font-bold pl-12">
                      Dynamic & Stable Period for Optimizing Energy Savings: As short as 5mins versus competition @ shortest @15mins =&gt; 3 times real-dynamic energy savings period
                    </p>
                  </div>

                </div>
              </Reveal3D>
            </div>

            {/* Right Sample Image Card */}
            <div className="lg:col-span-5">
              <Reveal3D direction="left">
                <div className="p-2 rounded-3xl bg-gradient-to-b from-amber-400/30 via-slate-200/40 to-slate-300/20 dark:from-amber-500/20 dark:to-slate-800/40 shadow-xl">
                  <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
                    <img 
                      src="./slide1.png" 
                      alt="LMZ2 Sensor Diagram" 
                      className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </Reveal3D>
            </div>
          </div>

        </div>
      </section>

      {/* SLIDE 2: SYSTEM ARCHITECTURE WITH LMZ2 SOFTWARE */}
      <section 
        className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border-color relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')" }}
      >
        {/* Semi-transparent overlay for contrast */}
        <div className="absolute inset-0 bg-slate-950/85 dark:bg-slate-950/90 backdrop-blur-xs pointer-events-none z-0" />
        <div className="absolute top-1/2 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-mono font-bold uppercase tracking-widest shadow-sm backdrop-blur-md">
                <Layers className="w-3.5 h-3.5" />
                <span>Architecture</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight">
                System Architecture with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">LMZ2 Software</span>
              </h2>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Sample Image Card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Reveal3D direction="right">
                <div className="p-2 rounded-3xl bg-gradient-to-b from-blue-400/40 via-slate-700/40 to-slate-900/60 shadow-2xl backdrop-blur-md border border-white/10">
                  <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
                    <img 
                      src="./slide2.png" 
                      alt="System Architecture Diagram" 
                      className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </Reveal3D>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
              <Reveal3D direction="left">
                <div className="space-y-4">
                  
                  <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-700/80 shadow-md hover:shadow-xl hover:border-blue-400/50 transition-all duration-300 space-y-2 backdrop-blur-md">
                    <h3 className="text-lg font-bold text-white font-display">LMZ2 Smart LED Driver & Standalone Fixture</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      Standalone Smart Lighting Fixture: LMZ2 Light with embedded SG210 Bluetooth Mesh Module & LED Driver. LASM running on SG210 (Lumani Automatic Switch Mode).
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-900/85 border border-amber-500/40 shadow-md hover:shadow-xl transition-all duration-300 space-y-2.5 backdrop-blur-md">
                    <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold font-mono shadow-inner">
                      Demand Control by Client's BMS by extracting LMZ2 Activity Data
                    </div>
                    <p className="text-xs text-slate-300 font-mono leading-relaxed">
                      Via WiFi (Routers or access provided by client) -&gt; LMZ2 Gateway -&gt; Client to provide server hardware and load LMZ2 Software into their server.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-900/85 border border-blue-500/40 shadow-md hover:shadow-xl transition-all duration-300 space-y-3 backdrop-blur-md">
                    <ul className="text-xs sm:text-sm text-slate-200 space-y-2.5 font-medium font-sans">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>LMZ2 Software for your lighting management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>LMZ2 Software for BMS to extract Activity Data to enable a more granular approach to airside demand control of air conditioning systems.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-purple-950/70 border border-purple-500/40 text-xs text-purple-200 font-mono shadow-md backdrop-blur-md">
                    Edge Computing Bluetooth Mesh Network | LMZ2 Sensor Collects Space Activity Data (Patented) | Wall switch & Remote Control / Mobile Web Interface
                  </div>

                </div>
              </Reveal3D>
            </div>
          </div>

        </div>
      </section>

      {/* SLIDE 3: SIMPLE AND AFFORDABLE TO INSTALL AND MAINTAIN */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-bg-primary border-b border-border-color relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
                <Zap className="w-3.5 h-3.5" />
                <span>Installation & Maintenance</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                Simple and Affordable to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Install and Maintain</span>
              </h2>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <Reveal3D direction="right">
                <div className="space-y-4">
                  
                  <div className="p-6 rounded-2xl bg-slate-50/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display">
                      • No APP Needed for the Operation — RWD-Based Web Interface
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2 pl-4 font-sans leading-relaxed">
                      <li>— It seamlessly works on the smart phones and no need to update as using an APP</li>
                      <li>— The version on PC provides comprehensive dashboard management</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-emerald-50/90 dark:bg-slate-900/90 border border-emerald-200/80 dark:border-emerald-950/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-2">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">• MQTT for the message forwarding</h3>
                  </div>

                  <div className="p-5 rounded-2xl bg-blue-50/90 dark:bg-slate-900/90 border border-blue-200/80 dark:border-blue-950/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-2">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">• 100% edge computing to ensure operability while the internet is not available</h3>
                  </div>

                  <div className="p-5 rounded-2xl bg-purple-50/90 dark:bg-slate-900/90 border border-purple-200/80 dark:border-purple-950/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-2">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">• Low cloud maintaining cost</h3>
                  </div>

                </div>
              </Reveal3D>
            </div>

            {/* Right Sample Image Card */}
            <div className="lg:col-span-5">
              <Reveal3D direction="left">
                <div className="p-2 rounded-3xl bg-gradient-to-b from-emerald-400/30 via-slate-200/40 to-slate-300/20 dark:from-emerald-500/20 dark:to-slate-800/40 shadow-xl">
                  <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
                      alt="LMZ2 Cloud Dashboard" 
                      className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </Reveal3D>
            </div>
          </div>

        </div>
      </section>

      {/* SLIDE 4: LMZ2 CONTROL DEVICES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/70 dark:bg-bg-secondary/60 border-b border-border-color relative overflow-hidden backdrop-blur-sm">
        {/* Subtle background glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 text-xs font-extrabold font-sans border border-purple-200/50 dark:border-purple-800/50 shadow-xs">
                <Sliders className="w-3.5 h-3.5" />
                <span>Hardware</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight">
                LMZ2 Control Devices
              </h2>
            </div>
          </Reveal3D>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Device 1: Gateway */}
            <Reveal3D direction="up" delay={0.05}>
              <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-purple-400/50 dark:hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300 space-y-3 h-full flex flex-col justify-between backdrop-blur-md">
                <div className="space-y-3">
                  <div className="w-full aspect-square bg-gradient-to-br from-slate-100 to-slate-200/60 dark:from-slate-800 dark:to-slate-900 rounded-xl overflow-hidden p-2 border border-slate-200/50 dark:border-slate-700/50 shadow-inner group">
                    <img 
                      src="./gateway.png" 
                      alt="Gateway Sample Placeholder" 
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">Gateway</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                    WiFi 802.11b/g/n, Zigbee, 2.4GHz Mesh<br />
                    Max connections: 128 nodes<br />
                    32 Scenes | 32 Device Groups
                  </p>
                </div>
              </div>
            </Reveal3D>

            {/* Device 2: Lighting Control Panel */}
            <Reveal3D direction="up" delay={0.1}>
              <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-purple-400/50 dark:hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300 space-y-3 h-full flex flex-col justify-between backdrop-blur-md">
                <div className="space-y-3">
                  <div className="w-full aspect-square bg-gradient-to-br from-slate-100 to-slate-200/60 dark:from-slate-800 dark:to-slate-900 rounded-xl overflow-hidden p-2 border border-slate-200/50 dark:border-slate-700/50 shadow-inner group">
                    <img 
                      src="./light_control.png" 
                      alt="Lighting Control Panel Sample Placeholder" 
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">Lighting Control Panel</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                    Bluetooth Mesh<br />
                    Lithium Batteries with 100-240VAC Charging Dock<br />
                    Memory: 4 Groups, 20 Scenes per Panel
                  </p>
                </div>
              </div>
            </Reveal3D>

            {/* Device 3: Wall Switch */}
            <Reveal3D direction="up" delay={0.15}>
              <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-purple-400/50 dark:hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300 space-y-3 h-full flex flex-col justify-between backdrop-blur-md">
                <div className="space-y-3">
                  <div className="w-full aspect-square bg-gradient-to-br from-slate-100 to-slate-200/60 dark:from-slate-800 dark:to-slate-900 rounded-xl overflow-hidden p-2 border border-slate-200/50 dark:border-slate-700/50 shadow-inner group">
                    <img 
                      src="wall_switch.png" 
                      alt="Wall Switch Sample Placeholder" 
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">Wall Switch (USA Size)</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                    2.4GHz Mesh<br />
                    100-240VAC<br />
                    1-3 Gang Switches per Panel
                  </p>
                </div>
              </div>
            </Reveal3D>

            {/* Device 4: Wireless Human Presence Sensor */}
            <Reveal3D direction="up" delay={0.2}>
              <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-purple-400/50 dark:hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300 space-y-3 h-full flex flex-col justify-between backdrop-blur-md">
                <div className="space-y-3">
                  <div className="w-full aspect-square bg-gradient-to-br from-slate-100 to-slate-200/60 dark:from-slate-800 dark:to-slate-900 rounded-xl overflow-hidden p-2 border border-slate-200/50 dark:border-slate-700/50 shadow-inner group">
                    <img 
                      src="./whps.png" 
                      alt="Wireless Human Presence Sensor Sample Placeholder" 
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">Wireless Human Presence Sensor</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                    24GHz RADAR | 2.4GHz Mesh | Ceiling recessed<br />
                    Detect human breath movement & lux level<br />
                    100° (Max) detection angle from 4m ceiling (Max)
                  </p>
                </div>
              </div>
            </Reveal3D>

            {/* Device 5: Lighting Remote Control */}
            <Reveal3D direction="up" delay={0.25}>
              <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-purple-400/50 dark:hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300 space-y-3 h-full flex flex-col justify-between backdrop-blur-md">
                <div className="space-y-3">
                  <div className="w-full aspect-square bg-gradient-to-br from-slate-100 to-slate-200/60 dark:from-slate-800 dark:to-slate-900 rounded-xl overflow-hidden p-2 border border-slate-200/50 dark:border-slate-700/50 shadow-inner group">
                    <img 
                      src="remote.png" 
                      alt="Lighting Remote Control Sample Placeholder" 
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">Lighting Remote Control Bluetooth Mesh</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                    4A Battery x2 | Ideal for meeting room application<br />
                    Memory: 3 Groups (Controls 100 lights per group) | 8 Scenes
                  </p>
                </div>
              </div>
            </Reveal3D>

            {/* Device 6: LMZ2 Smart LED Driver Embedded */}
            <Reveal3D direction="up" delay={0.3}>
              <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-purple-400/50 dark:hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300 space-y-3 h-full flex flex-col justify-between backdrop-blur-md">
                <div className="space-y-3">
                  <div className="w-full aspect-square bg-gradient-to-br from-slate-100 to-slate-200/60 dark:from-slate-800 dark:to-slate-900 rounded-xl overflow-hidden p-2 border border-slate-200/50 dark:border-slate-700/50 shadow-inner group">
                    <img 
                      src="./led_parser.png" 
                      alt="Smart LED Driver Sample Placeholder" 
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">LMZ2 Smart LED Driver Embedded in Luminaire</h3>
                  <span className="text-xs text-red-500 font-bold block">(Not for direct sale)</span>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                    2.4GHz Mesh | 100 – 240VAC | SG210 Bluetooth Mesh Module<br />
                    Needs matching with all types of Driving Current for Luminaire
                  </p>
                </div>
              </div>
            </Reveal3D>
          </div>

        </div>
      </section>

      {/* SLIDE 5: MANY AVAILABLE TYPES OF LUMINAIRE TYPES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-bg-primary border-b border-border-color relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-950/50 text-[#e30613] text-xs font-extrabold font-sans border border-red-200/60 dark:border-red-900/60">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Fixtures</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight">
                Many Available Types of Luminaire Types
              </h2>
              <p className="text-sm sm:text-base text-red-600 dark:text-red-400 font-bold font-sans">
                All Lights can be Dim, Circadian, or RGB. Wireless LED Drivers also available
              </p>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Track RGB Spot Light', image: './sl1.png' },
              { name: 'Recessed Box Light', image: './sl2.png' },
              { name: 'Circadian Track Light', image: './sl3.png' },
              { name: 'Recessed Down Light', badge: '160lu/W', image: './sl7.png' },
              { name: 'Ceiling Mount Main Light', image: './sl8.png' },
              { name: 'Ceiling Mount Cylinder Light', image: './sl17.png' },
              { name: '5/7W MR16', image: './sl4.png' },
              { name: 'Light Strip', image: './sl5.png' },
              { name: 'Panel Light', badge: '190lu/W', image: './sl6.png' },
              { name: 'E27 PAR30/38', image: './sl12.png' },
              { name: 'Circadian or dimmable T8', badge: '190lu/W', image: './sl14.png' },
              { name: 'Linear Light', image: './sl15.png' },
              { name: 'Square Panel Light', image: './sl16.png' },
              { name: 'E27', image: './sl9.png' },
              { name: '10W MR16', image: './sl13.png' },
              { name: 'AR111', image: './sl11.png' }
            ].map((lum, lIdx) => (
              <Reveal3D key={lIdx} delay={lIdx * 0.03}>
                <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between text-center space-y-3 group h-full backdrop-blur-md">
                  <div className="w-full aspect-square bg-slate-50 dark:bg-slate-800/60 rounded-xl overflow-hidden flex items-center justify-center p-3 border border-slate-100 dark:border-slate-700/50 shadow-inner">
                    <img 
                      src={lum.image || "./sl1.png"} 
                      alt={`${lum.name} Sample Placeholder`} 
                      className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
                    />
                  </div>
                  {lum.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-mono font-black text-[10px] shadow-xs tracking-wider uppercase">
                      {lum.badge}
                    </span>
                  )}
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 font-sans group-hover:text-[#e30613] transition-colors">{lum.name}</span>
                </div>
              </Reveal3D>
            ))}
          </div>

        </div>
      </section>

      {/* SLIDE 6: IT'S AS EASY AS 1-2-3 TO ENJOY ENERGY SAVING ON LMZ2 */}
      <section 
        className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border-color relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-slate-950/85 dark:bg-slate-950/90 backdrop-blur-xs pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-extrabold font-sans">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Simple Implementation</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
                It’s as Easy as 1-2-3 to Enjoy Energy Saving on LMZ2
              </h2>
            </div>
          </Reveal3D>

          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Step 1 */}
            <Reveal3D direction="up" delay={0.05}>
              <div className="p-8 rounded-3xl bg-slate-900/85 border border-slate-700/80 hover:border-red-500/40 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center gap-8 shadow-lg backdrop-blur-md group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#e30613] to-red-500 text-white font-black text-3xl flex items-center justify-center shrink-0 shadow-lg shadow-red-500/30 group-hover:scale-105 transition-transform duration-300">
                  1
                </div>
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <h3 className="text-xl font-bold text-white font-display">
                    Direct replacement without re-wiring (new and retrofit)
                  </h3>
                  <p className="text-sm text-slate-300 font-sans leading-relaxed">
                    — Fits any types of lights<br />
                    — Enjoy immediate smart lighting control and automation
                  </p>
                </div>
              </div>
            </Reveal3D>

            {/* Step 2 */}
            <Reveal3D direction="up" delay={0.1}>
              <div className="p-8 rounded-3xl bg-slate-900/85 border border-slate-700/80 hover:border-blue-500/40 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center gap-8 shadow-lg backdrop-blur-md group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-black text-3xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
                  2
                </div>
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <h3 className="text-xl font-bold text-white font-display">
                    Add Gateway for Site Lighting Management
                  </h3>
                </div>
              </div>
            </Reveal3D>

            {/* Step 3 */}
            <Reveal3D direction="up" delay={0.15}>
              <div className="p-8 rounded-3xl bg-slate-900/85 border border-slate-700/80 hover:border-emerald-500/40 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center gap-8 shadow-lg backdrop-blur-md group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white font-black text-3xl flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform duration-300">
                  3
                </div>
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <h3 className="text-xl font-bold text-white font-display">
                    Install LMZ2 Software & Extract Activity Data
                  </h3>
                  <p className="text-sm text-slate-300 font-sans leading-relaxed">
                    • Install LMZ2 Software to have your lighting management<br />
                    • Extract Activity Data via LMZ2 Software to enable a more granular approach to airside demand control of air conditioning systems by IBMS/BMS/Smart Platforms.
                  </p>
                </div>
              </div>
            </Reveal3D>
          </div>

        </div>
      </section>

      {/* SLIDE 7 & 8: AUTONOMOUS AIRSIDE DEMAND CONTROL & FURTHER REDUCE EUI */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-bg-primary border-b border-border-color relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-extrabold font-sans border border-emerald-200/50">
                <Wind className="w-3.5 h-3.5" />
                <span>Demand Control</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight">
                Autonomous Airside Demand Control
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-4xl">
                LMZ2 continuously collects <span className="bg-amber-300/80 dark:bg-amber-500/80 text-slate-950 px-2 py-0.5 rounded font-bold shadow-xs">space activity data</span> that can be <span className="underline font-bold text-slate-900 dark:text-white">integrated to any BMS/Smart Platform</span> to deliver real-time lighting (or Airside) energy savings—24/7—without requiring manual scheduling, analysis, or intervention.
              </p>
            </div>
          </Reveal3D>

          {/* Activity Modes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal3D direction="up" delay={0.05}>
              <div className="p-6 rounded-3xl bg-red-50/80 dark:bg-slate-900/90 border border-red-200/80 dark:border-red-900/50 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <h3 className="font-bold text-red-600 dark:text-red-400 text-base leading-snug">• Light On for the High Activity Zones (Busy | Mid-Hi Fan | &lt; 25ºC)</h3>
              </div>
            </Reveal3D>

            <Reveal3D direction="up" delay={0.1}>
              <div className="p-6 rounded-3xl bg-emerald-50/80 dark:bg-slate-900/90 border border-emerald-200/80 dark:border-emerald-900/50 shadow-md hover:shadow-xl transition-all duration-300 h-full space-y-2">
                <h3 className="font-bold text-emerald-600 dark:text-emerald-400 text-base leading-snug">• Light On/Dim for Low Activity Zones (Sensor | Low Fan | 25ºC)</h3>
                <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-200/80 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-xs">
                  Supports Go25ºC
                </span>
              </div>
            </Reveal3D>

            <Reveal3D direction="up" delay={0.15}>
              <div className="p-6 rounded-3xl bg-blue-50/80 dark:bg-slate-900/90 border border-blue-200/80 dark:border-blue-900/50 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <h3 className="font-bold text-blue-600 dark:text-blue-400 text-base leading-snug">• Light Off/Dim for No Activity Zones (Silent | Off/Low Fan | 28ºC)</h3>
              </div>
            </Reveal3D>
          </div>

          {/* Dynamic Airside Demand Control Card */}
          <Reveal3D direction="up" delay={0.2}>
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white space-y-4 shadow-2xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">Further Reduce EUI through Demand Control</h3>
              <p className="text-base text-slate-300 font-medium">Dynamic Airside Demand Control with LMZ2 Activity Data:</p>
              <p className="text-sm sm:text-base text-emerald-400 font-bold leading-relaxed">• Aircon to support Go25ºC by adjusting set point & fan speed or valve dynamically with any BMS or Smart Platforms</p>
              <span className="text-xs font-mono text-slate-400 inline-block bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700/50">[ Heatmap @ Keppel Bay Tower ]</span>
            </div>
          </Reveal3D>

        </div>
      </section>

      {/* SLIDE 9: ENERGY SAVINGS OF A 24 x 7 FACTORY */}
      <section 
        className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border-color relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-slate-950/85 dark:bg-slate-950/90 backdrop-blur-xs pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-extrabold font-sans">
                <Activity className="w-3.5 h-3.5" />
                <span>Factory Case Study</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
                Energy Savings of a 24 x 7 Factory using Activity Data for Air Side Demand Control
              </h2>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
              <Reveal3D direction="left" delay={0.05}>
                <p className="text-base sm:text-xl font-bold text-white leading-relaxed">
                  Using these simple logic, the factory saves ~ 50% in light and aircon energy
                </p>
              </Reveal3D>

              <Reveal3D direction="left" delay={0.1}>
                <div className="space-y-4 p-6 rounded-2xl bg-slate-900/85 border border-slate-700/80 border-l-4 border-l-amber-500 shadow-xl backdrop-blur-md">
                  <p className="text-sm sm:text-base font-semibold text-slate-200">• Light On for the High Activity Zones — (Busy | Mid-Hi Fan | &lt; 25ºC)</p>
                  <p className="text-sm sm:text-base font-semibold text-slate-200">• Light On/Dim for Mid Activity Zones — (Sensor | Low Fan | 25ºC)</p>
                  <p className="text-sm sm:text-base font-semibold text-slate-200">• Light Off/Dim for No Activity Zones — (Silent | Off/Low Fan | 28ºC)</p>
                </div>
              </Reveal3D>
            </div>

            <div className="lg:col-span-5 h-full flex flex-col">
              <Reveal3D direction="right" delay={0.15} className="h-full">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 h-full flex-1 flex group">
                  <img 
                    src="energy_saving.png" 
                    alt="24x7 Factory Activity Data" 
                    className="w-full h-full min-h-[280px] object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </Reveal3D>
            </div>
          </div>

        </div>
      </section>

      {/* SLIDE 10: CASE STUDY: SPACE MANAGEMENT OF A RETAIL BANK */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-bg-primary border-b border-border-color relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 text-xs font-extrabold font-sans border border-purple-200/50">
                <Building className="w-3.5 h-3.5" />
                <span>Retail Bank Case Study</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight">
                Case Study: Space Management of a Retail Bank
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold pt-2">
                <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400 inline-block shadow-xs" /> Silent Mode
                </span>
                <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500 inline-block shadow-xs" /> Sensor Mode
                </span>
                <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block shadow-xs" /> Busy Mode
                </span>
              </div>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 space-y-4">
              <Reveal3D direction="left" delay={0.05}>
                <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-lg transition-all duration-300 space-y-1.5 backdrop-blur-md">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">• Zone 1-3: Service Desk</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">— You may understand which section that the service if of higher demand.</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">— You may allocate more staff to handle these busier area</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">— Putting more zones can get more detailed behavior of the customers</p>
                </div>
              </Reveal3D>

              <Reveal3D direction="left" delay={0.1}>
                <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-lg transition-all duration-300 space-y-1.5 backdrop-blur-md">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">• Zone 4 Toilet:</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">— When the activity reach the preset number, the system can inform the staffs to clean the toilet to keep it from being smelly</p>
                </div>
              </Reveal3D>

              <Reveal3D direction="left" delay={0.15}>
                <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-lg transition-all duration-300 space-y-1.5 backdrop-blur-md">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">• Zone 5 Customers Counter</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">— You get a quick view for how busy is counter activities</p>
                </div>
              </Reveal3D>

              <Reveal3D direction="left" delay={0.2}>
                <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-lg transition-all duration-300 space-y-1.5 backdrop-blur-md">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">• Zone 7-8 Waiting Area</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">— Use data to implement Space control measure so that the branch will not be too congested where social distancing is needed.</p>
                </div>
              </Reveal3D>
            </div>

            <div className="lg:col-span-6 h-full flex flex-col">
              <Reveal3D direction="right" delay={0.2} className="h-full">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800/80 h-full flex-1 flex group">
                  <img 
                    src="./retail_bank.png" 
                    alt="Retail Bank Space Layout" 
                    className="w-full h-full min-h-[320px] object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </Reveal3D>
            </div>
          </div>

        </div>
      </section>

      {/* SLIDE 11: PRODUCTIVITY COMES FROM BETTER KNOWLEDGE OF YOUR PROPERTY */}
      <section 
        className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border-color relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-slate-950/85 dark:bg-slate-950/90 backdrop-blur-xs pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold font-sans">
                <Layers3 className="w-3.5 h-3.5" />
                <span>Property Insights</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
                Productivity Comes from Better Knowledge of Your Property
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-sans">
                Example of Commercial Buildings, Hospitals, Mixed Dev, Retail & Schools
              </p>
              <div className="p-3 rounded-2xl bg-emerald-950/90 border border-emerald-500/40 text-emerald-200 text-xs font-bold w-fit shadow-md backdrop-blur-md">
                LMZ2’s <span className="bg-emerald-400 text-slate-950 px-2 py-0.5 rounded font-black shadow-xs">Non-privacy-intrusive</span> human presence sensors for detecting the dynamic occupant patterns
              </div>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm font-sans">
            {/* Space Management */}
            <Reveal3D direction="up" delay={0.05}>
              <div className="p-6 rounded-3xl bg-slate-900/85 border border-slate-700/80 shadow-md hover:shadow-xl transition-all duration-300 space-y-3.5 backdrop-blur-md h-full">
                <h3 className="font-bold text-white text-base font-display">Space Management</h3>
                <p className="text-red-400 font-bold">• High Traffic</p>
                <p className="text-amber-400 font-bold">• Mid Traffic</p>
                <p className="text-emerald-400 font-bold">• No Traffic</p>
              </div>
            </Reveal3D>

            {/* ACMV Management */}
            <Reveal3D direction="up" delay={0.1}>
              <div className="p-6 rounded-3xl bg-slate-900/85 border border-slate-700/80 shadow-md hover:shadow-xl transition-all duration-300 space-y-3.5 backdrop-blur-md h-full">
                <h3 className="font-bold text-white text-base font-display">ACMV Management</h3>
                <p className="text-slate-300 leading-relaxed">• No Traffic— Set Point 2 degree higher | No fresh air exchange</p>
                <p className="text-slate-300 leading-relaxed">• Mid Traffic— Low fresh air exchange</p>
              </div>
            </Reveal3D>

            {/* Benefits */}
            <Reveal3D direction="up" delay={0.15}>
              <div className="p-6 rounded-3xl bg-slate-900/85 border border-slate-700/80 shadow-md hover:shadow-xl transition-all duration-300 space-y-3.5 backdrop-blur-md h-full">
                <h3 className="font-bold text-white text-base font-display">Benefits</h3>
                <ul className="space-y-1.5 text-slate-300">
                  <li>• Improve Space Utilization Efficiency</li>
                  <li>• Identify underused areas to repurpose or downside</li>
                  <li>• Design layout that matches user behavior</li>
                  <li>• Saving from ACMV by cutting unnecessary wastage</li>
                  <li>• Powering operation cost by automation</li>
                  <li>• Cutting unnecessary wastage</li>
                  <li>• Saving energy by stealthy dimming operations</li>
                  <li>• Lowering the operation cost by automation</li>
                </ul>
              </div>
            </Reveal3D>
          </div>

        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-bg-primary text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

        <Reveal3D direction="up">
          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
              Ready to Deploy <span className="text-[#e30613]">LMZ2 Smart Lighting?</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Contact Aptiv8 to request hardware specifications, lighting layout design, or BMS integration details.
            </p>
            <div>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#e30613] hover:bg-[#c00510] text-white font-extrabold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-red-600/30 hover:scale-105 active:scale-95"
              >
                <span>Talk to Our Smart Lighting Experts</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal3D>
      </section>

    </div>
  );
}

