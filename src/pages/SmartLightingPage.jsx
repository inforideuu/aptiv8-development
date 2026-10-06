import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Cpu, 
  Layers, 
  Sliders, 
  Radio, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  TrendingDown, 
  BarChart3, 
  Wind, 
  Building2, 
  Sparkles,
  Lightbulb,
  Wifi,
  Gauge
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
      
      {/* HERO SECTION */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden">
        {/* Glowing background circles & mesh pattern */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#e30613]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-8 text-center">
          <Reveal3D direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next-Gen Smart Lighting Launch</span>
            </div>
          </Reveal3D>

          <Reveal3D direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-white leading-tight">
              Smart Lighting Solution <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-[#e30613]">
                LMZ2 Sensor & Airside Demand Control
              </span>
            </h1>
          </Reveal3D>

          <Reveal3D direction="up" delay={0.15}>
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
              Autonomous human presence detection, daylight harvesting, and real-time space activity data integration for BMS/IBMS airside aircon demand control.
            </p>
          </Reveal3D>

          <Reveal3D direction="up" delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#e30613] hover:bg-[#c00510] text-white font-extrabold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-red-600/30 hover:scale-105"
              >
                <span>Request Smart Lighting Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal3D>
        </div>
      </section>

      {/* CORE TECHNOLOGY: LMZ2 SENSOR */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-bg-primary border-b border-border-color relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <Reveal3D direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider font-mono">
                <Cpu className="w-3.5 h-3.5" />
                <span>Patented Sensor Technology</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight">
                Core Technology: <span className="text-amber-500">LMZ2 Sensor</span>
              </h2>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Reveal3D direction="up" delay={0.05}>
              <div className="p-8 rounded-3xl bg-amber-50/50 dark:bg-slate-900 border border-amber-200/80 dark:border-amber-950/80 shadow-md hover:shadow-xl transition-all h-full space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md">
                  <Radio className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                  Wireless Human Presence Sensor
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Instead of basic motion sensors — uses <strong>24GHz RADAR for 5m x 5m x 5m space coverage</strong>.
                </p>
                <div className="p-3 rounded-xl bg-amber-100/80 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 text-xs font-semibold">
                  ⚠️ The sensor detects sitting still occupants to prevent false operation.
                </div>
              </div>
            </Reveal3D>

            {/* Feature 2 */}
            <Reveal3D direction="up" delay={0.1}>
              <div className="p-8 rounded-3xl bg-blue-50/50 dark:bg-slate-900 border border-blue-200/80 dark:border-blue-950/80 shadow-md hover:shadow-xl transition-all h-full space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                  <Wifi className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                  High Performance Mesh Networks
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Wireless embedded lights with medium performance LEDs (120 lm/W) reaching <strong>&lt;5W/m² @500lux</strong> at an affordable price point.
                </p>
                <div className="p-3 rounded-xl bg-blue-100/80 dark:bg-blue-950/80 text-blue-900 dark:text-blue-300 text-xs font-semibold">
                  📊 Activity Data collection for integration with BMS/IBMS/Smart Platforms for airside aircon demand control.
                </div>
              </div>
            </Reveal3D>

            {/* Feature 3 */}
            <Reveal3D direction="up" delay={0.15}>
              <div className="p-8 rounded-3xl bg-emerald-50/50 dark:bg-slate-900 border border-emerald-200/80 dark:border-emerald-950/80 shadow-md hover:shadow-xl transition-all h-full space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                  Built-in Lux Sensor for Daylight Harvesting
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Dynamic & stable period for optimizing energy savings: <strong>As short as 5 mins vs competition @ shortest 15 mins (3x times real-time dynamic energy savings)</strong>.
                </p>
                <div className="p-3 rounded-xl bg-emerald-100/80 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 text-xs font-semibold">
                  ☀️ Automatically dims LED output to maintain target ambient lux while saving maximum kWh.
                </div>
              </div>
            </Reveal3D>
          </div>
        </div>
      </section>

      {/* SYSTEM ARCHITECTURE WITH LMZ2 SOFTWARE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-bg-secondary border-b border-border-color relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <Reveal3D direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider font-mono">
                <Layers className="w-3.5 h-3.5" />
                <span>Edge Computing Architecture</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight">
                System Architecture with <span className="text-blue-600">LMZ2 Software</span>
              </h2>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold font-mono">01</div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Standalone Smart Lighting Fixture</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                LMZ2 Light with embedded SG210 Bluetooth Mesh Module & LED Driver.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold font-mono">02</div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">LMZ2 Gateway</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Connects Bluetooth Mesh network to client server via WiFi / Ethernet.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold font-mono">03</div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">LMZ2 Software for Lighting</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Full lighting management, scene control, group schedules, and automated switch modes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold font-mono">04</div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">LMZ2 Software for BMS Integration</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Extracts space activity data for granular demand control of air conditioning systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EASY AS 1-2-3 TO ENJOY ENERGY SAVING */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-bg-primary border-b border-border-color">
        <div className="max-w-7xl mx-auto space-y-12">
          <Reveal3D direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight">
                It's as Easy as <span className="text-[#e30613]">1-2-3</span> to Enjoy Energy Saving on LMZ2
              </h2>
            </div>
          </Reveal3D>

          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Step 1 */}
            <Reveal3D direction="up" delay={0.05}>
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-[#e30613] text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-md">
                  1
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    Direct replacement without re-wiring (new and retrofit)
                  </h3>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Fits any types of lights</li>
                    <li>• Enjoy immediate smart lighting control and automation</li>
                  </ul>
                </div>
              </div>
            </Reveal3D>

            {/* Step 2 */}
            <Reveal3D direction="up" delay={0.1}>
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-md">
                  2
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    Add Gateway for Site Lighting Management
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Connects wireless mesh nodes up to 128 nodes per gateway for centralized control.
                  </p>
                </div>
              </div>
            </Reveal3D>

            {/* Step 3 */}
            <Reveal3D direction="up" delay={0.15}>
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-md">
                  3
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    Install LMZ2 Software & Extract Activity Data
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Extract Activity Data via LMZ2 Software to enable a more granular approach to airside demand control of air conditioning systems by IBMS / BMS / Smart Platforms.
                  </p>
                </div>
              </div>
            </Reveal3D>
          </div>
        </div>
      </section>

      {/* LMZ2 CONTROL DEVICES HARDWARE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-bg-secondary border-b border-border-color">
        <div className="max-w-7xl mx-auto space-y-12">
          <Reveal3D direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider font-mono">
                <Sliders className="w-3.5 h-3.5" />
                <span>Hardware Lineup</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight">
                LMZ2 Control Devices
              </h2>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gateway */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold w-fit">Gateway</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">WiFi 802.11b/g/n, Zigbee, 2.4GHz Mesh</h3>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 font-mono">
                <li>• Max connections: 128 nodes</li>
                <li>• 32 Scenes | 32 Device Groups</li>
              </ul>
            </div>

            {/* Lighting Control Panel */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold w-fit">Lighting Control Panel</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Bluetooth Mesh Panel</h3>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 font-mono">
                <li>• Lithium Batteries with 100-240VAC Charging Dock</li>
                <li>• Memory: 4 Groups, 20 Scenes per Panel</li>
              </ul>
            </div>

            {/* Wall Switch */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold w-fit">Wall Switch (USA Size)</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">2.4GHz Mesh 100-240VAC</h3>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 font-mono">
                <li>• 1-3 Gang Switches per Panel</li>
              </ul>
            </div>

            {/* Wireless Human Presence Sensor */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold w-fit">Wireless Presence Sensor</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">24GHz RADAR Presence Sensor</h3>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 font-mono">
                <li>• Ceiling recessed | Detect human breath movement & lux level</li>
                <li>• 100° (Max) detection angle from 4m ceiling (Max)</li>
              </ul>
            </div>

            {/* Remote Control */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold w-fit">Remote Control</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Bluetooth Mesh Remote</h3>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 font-mono">
                <li>• 4A Battery x2 | Ideal for meeting rooms</li>
                <li>• 3 Groups (Controls 100 lights per group) | 8 Scenes</li>
              </ul>
            </div>

            {/* Smart LED Driver */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold w-fit">Smart LED Driver</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">LMZ2 Smart LED Driver Embedded</h3>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 font-mono">
                <li>• 2.4GHz Mesh 100–240VAC</li>
                <li>• SG210 Bluetooth Mesh Module for Luminaire</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LUMINAIRE TYPES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-bg-primary border-b border-border-color">
        <div className="max-w-7xl mx-auto space-y-12">
          <Reveal3D direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight">
                Many Available Types of Luminaire Types
              </h2>
              <p className="text-base text-red-500 font-bold">
                All Lights can be Dim, Circadian, or RGB. Wireless LED Drivers also available.
              </p>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { name: 'Track RGB Spot Light' },
              { name: 'Recessed Box Light' },
              { name: 'Circadian Track Light' },
              { name: 'Recessed Down Light', badge: '160lm/W' },
              { name: 'Ceiling Mount Main Light' },
              { name: 'Ceiling Mount Cylinder Light' },
              { name: '5/7W MR16' },
              { name: 'Light Strip' },
              { name: 'Panel Light', badge: '190lm/W' },
              { name: 'E27 PAR30/38' },
              { name: 'Circadian or dimmable T8', badge: '190lm/W' },
              { name: 'Square Panel Light' }
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-2 relative">
                {item.badge && (
                  <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-black text-[10px] font-mono shadow-xs">
                    {item.badge}
                  </span>
                )}
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTONOMOUS AIRSIDE DEMAND CONTROL & ENERGY SAVINGS CASE STUDY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white border-b border-border-color">
        <div className="max-w-7xl mx-auto space-y-16">
          <Reveal3D direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest">
                <Wind className="w-3.5 h-3.5" />
                <span>HVAC Aircon Integration</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
                Autonomous Airside Demand Control
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                LMZ2 continuously collects <span className="bg-amber-400 text-slate-950 px-2 py-0.5 rounded font-bold">space activity data</span> that can be integrated to any BMS/Smart Platform to deliver real-time lighting (or Airside) energy savings 24/7 without requiring manual scheduling or intervention.
              </p>
            </div>
          </Reveal3D>

          {/* Logic rules */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-800/80 border border-red-500/30 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <h3 className="font-bold text-white text-base">High Activity Zones</h3>
              </div>
              <p className="text-xs text-slate-300">Busy | Mid-Hi Fan | &lt;25°C Setpoint</p>
              <span className="text-xs font-mono text-red-400 font-bold block pt-1">Light On 100%</span>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800/80 border border-emerald-500/30 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <h3 className="font-bold text-white text-base">Low Activity Zones</h3>
              </div>
              <p className="text-xs text-slate-300">Sensor | Low Fan | 25°C Setpoint</p>
              <span className="text-xs font-mono text-emerald-400 font-bold block pt-1">Supports Go25°C</span>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800/80 border border-blue-500/30 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <h3 className="font-bold text-white text-base">No Activity Zones</h3>
              </div>
              <p className="text-xs text-slate-300">Silent | Off/Low Fan | 28°C Setpoint</p>
              <span className="text-xs font-mono text-blue-400 font-bold block pt-1">Light Off / Stealth Dim</span>
            </div>
          </div>

          {/* Factory Case Study */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 space-y-6">
            <h3 className="text-2xl font-black text-white font-display">
              Energy Savings of a 24 x 7 Factory using Activity Data
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Using these simple activity logics, the factory saves <strong>~50% in light and aircon energy</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-amber-400 font-bold block">Non-Privacy Intrusive</span>
                Uses 24GHz RADAR human presence sensors to detect occupant patterns without cameras.
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-emerald-400 font-bold block">ACMV Management</span>
                No Traffic = Setpoint 2°C higher + No fresh air exchange. Mid Traffic = Low fresh air.
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-blue-400 font-bold block">Lower Operating Cost</span>
                Cutting unnecessary wastage and powering operational savings automatically.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-bg-primary text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white">
            Ready to Deploy <span className="text-[#e30613]">LMZ2 Smart Lighting?</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Contact Aptiv8 to request hardware specifications, lighting layout design, or BMS integration details.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#e30613] hover:bg-[#c00510] text-white font-extrabold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-red-600/30 hover:scale-105"
          >
            <span>Talk to Our Smart Lighting Experts</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

    </div>
  );
}
