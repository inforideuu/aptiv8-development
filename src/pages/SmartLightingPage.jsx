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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#e30613]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-6 text-center">
          <Reveal3D direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Smart Lighting & Airside Demand Control</span>
            </div>
          </Reveal3D>

          <Reveal3D direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-tight">
              LMZ2 Smart Lighting System <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-[#e30613]">
                Core Technology & Control Solutions
              </span>
            </h1>
          </Reveal3D>

          <Reveal3D direction="up" delay={0.15}>
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
              Autonomous human presence detection, daylight harvesting, and real-time space activity data integration for BMS/IBMS airside demand control.
            </p>
          </Reveal3D>
        </div>
      </section>

      {/* SLIDE 1: CORE TECHNOLOGY: LMZ2 SENSOR */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-bg-primary border-b border-border-color relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 text-xs font-extrabold font-sans">
                <Cpu className="w-3.5 h-3.5" />
                <span>Patented Technology</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight">
                Core Technology: <span className="text-amber-500">LMZ2 Sensor</span>
              </h2>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal3D direction="right">
                <div className="space-y-4">
                  
                  {/* Bullet 1 */}
                  <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-slate-900 border border-amber-200/80 dark:border-amber-950/80 space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Radio className="w-5 h-5 text-amber-500 shrink-0" />
                      <span>Wireless Human Presence Sensor instead of Motion Sensor</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans pl-7">
                      — One 24GHz RADAR for 5m x 5m x 5m space
                    </p>
                    <div className="ml-7 p-2.5 rounded-xl bg-amber-200/60 dark:bg-amber-950/90 text-amber-950 dark:text-amber-300 text-xs font-bold">
                      ⚠️ The sensor detects sitting still occupants to prevent false operation
                    </div>
                  </div>

                  {/* Bullet 2 */}
                  <div className="p-5 rounded-2xl bg-blue-50/70 dark:bg-slate-900 border border-blue-200/80 dark:border-blue-950/80 space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Wifi className="w-5 h-5 text-blue-500 shrink-0" />
                      <span>Wireless Embedded lights with high performance mesh networks</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans pl-7">
                      — Medium performance LEDs (120 lm/W) may reach &lt;5W/m² @500lux on the working plane at an affordable price
                    </p>
                    <div className="ml-7 p-2.5 rounded-xl bg-amber-200/60 dark:bg-amber-950/90 text-amber-950 dark:text-amber-300 text-xs font-bold">
                      📊 Activity Data collection for integration with BMS/IBMS/Smart Platform Vendor to better perform airside aircon demand control.
                    </div>
                  </div>

                  {/* Bullet 3 */}
                  <div className="p-5 rounded-2xl bg-emerald-50/70 dark:bg-slate-900 border border-emerald-200/80 dark:border-emerald-950/80 space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span>Built-in Lux Sensor for daylight harvesting</span>
                    </h3>
                    <p className="text-xs text-red-600 dark:text-red-400 font-bold pl-7">
                      Dynamic & Stable Period for Optimizing Energy Savings: As short as 5mins versus competition @ shortest @15mins =&gt; 3 times real-dynamic energy savings period
                    </p>
                  </div>

                </div>
              </Reveal3D>
            </div>

            {/* Right Sample Image Card */}
            <div className="lg:col-span-5">
              <Reveal3D direction="left">
                <div className="rounded-3xl p-3 bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden space-y-2">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80" 
                    alt="LMZ2 Sensor Diagram Sample Placeholder" 
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <span className="text-[10px] font-mono text-slate-400 block text-center py-1">
                    [ Sample Image Placeholder: LMZ2 Sensor Diagram ]
                  </span>
                </div>
              </Reveal3D>
            </div>
          </div>

        </div>
      </section>

      {/* SLIDE 2: SYSTEM ARCHITECTURE WITH LMZ2 SOFTWARE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-bg-secondary border-b border-border-color relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-extrabold font-sans">
                <Layers className="w-3.5 h-3.5" />
                <span>Architecture</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight">
                System Architecture with <span className="text-blue-600">LMZ2 Software</span>
              </h2>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Sample Image Card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Reveal3D direction="right">
                <div className="rounded-3xl p-3 bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden space-y-2">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" 
                    alt="System Architecture Diagram Sample Placeholder" 
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <span className="text-[10px] font-mono text-slate-400 block text-center py-1">
                    [ Sample Image Placeholder: System Architecture Architecture Diagram ]
                  </span>
                </div>
              </Reveal3D>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <Reveal3D direction="left">
                <div className="space-y-4">
                  
                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">LMZ2 Smart LED Driver & Standalone Fixture</h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      Standalone Smart Lighting Fixture: LMZ2 Light with embedded SG210 Bluetooth Mesh Module & LED Driver. LASM running on SG210 (Lumani Automatic Switch Mode).
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-amber-50/80 dark:bg-slate-900 border border-amber-200/80 dark:border-amber-950/80 space-y-2">
                    <div className="p-2.5 rounded-xl bg-amber-200/80 dark:bg-amber-950 text-amber-950 dark:text-amber-300 text-xs font-bold">
                      Demand Control by Client's BMS by extracting LMZ2 Activity Data
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                      Via WiFi (Routers or access provided by client) -&gt; LMZ2 Gateway -&gt; Client to provide server hardware and load LMZ2 Software into their server.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-blue-50/80 dark:bg-slate-900 border border-blue-200/80 dark:border-blue-950/80 space-y-2">
                    <ul className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 font-medium">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>LMZ2 Software for your lighting management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>LMZ2 Software for BMS to extract Activity Data to enable a more granular approach to airside demand control of air conditioning systems.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-purple-50 dark:bg-slate-900 border border-purple-200 text-xs text-purple-900 dark:text-purple-300 font-mono">
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
        <div className="max-w-7xl mx-auto space-y-12">
          
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-extrabold font-sans">
                <Zap className="w-3.5 h-3.5" />
                <span>Installation & Maintenance</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight">
                Simple and Affordable to <span className="text-emerald-500">Install and Maintain</span>
              </h2>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal3D direction="right">
                <div className="space-y-4">
                  
                  <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      • No APP Needed for the Operation — RWD-Based Web Interface
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2 pl-4">
                      <li>— It seamlessly works on the smart phones and no need to update as using an APP</li>
                      <li>— The version on PC provides comprehensive dashboard management</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-emerald-50/80 dark:bg-slate-900 border border-emerald-200/80 dark:border-emerald-950/80 space-y-2">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">• MQTT for the message forwarding</h3>
                  </div>

                  <div className="p-5 rounded-2xl bg-blue-50/80 dark:bg-slate-900 border border-blue-200/80 dark:border-blue-950/80 space-y-2">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">• 100% edge computing to ensure operability while the internet is not available</h3>
                  </div>

                  <div className="p-5 rounded-2xl bg-purple-50/80 dark:bg-slate-900 border border-purple-200/80 dark:border-purple-950/80 space-y-2">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">• Low cloud maintaining cost</h3>
                  </div>

                </div>
              </Reveal3D>
            </div>

            {/* Right Sample Image Card */}
            <div className="lg:col-span-5">
              <Reveal3D direction="left">
                <div className="rounded-3xl p-3 bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden space-y-2">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
                    alt="LMZ2 Cloud Dashboard Sample Placeholder" 
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <span className="text-[10px] font-mono text-slate-400 block text-center py-1">
                    [ Sample Image Placeholder: LMZ2 Cloud Web Interface ]
                  </span>
                </div>
              </Reveal3D>
            </div>
          </div>

        </div>
      </section>

      {/* SLIDE 4: LMZ2 CONTROL DEVICES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-bg-secondary border-b border-border-color relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 text-xs font-extrabold font-sans">
                <Sliders className="w-3.5 h-3.5" />
                <span>Hardware</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight">
                LMZ2 Control Devices
              </h2>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Device 1: Gateway */}
            <Reveal3D direction="up" delay={0.05}>
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-full h-36 bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" 
                      alt="Gateway Sample Placeholder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Gateway</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed">
                    WiFi 802.11b/g/n, Zigbee, 2.4GHz Mesh<br />
                    Max connections: 128 nodes<br />
                    32 Scenes | 32 Device Groups
                  </p>
                </div>
              </div>
            </Reveal3D>

            {/* Device 2: Lighting Control Panel */}
            <Reveal3D direction="up" delay={0.1}>
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-full h-36 bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80" 
                      alt="Lighting Control Panel Sample Placeholder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Lighting Control Panel</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed">
                    Bluetooth Mesh<br />
                    Lithium Batteries with 100-240VAC Charging Dock<br />
                    Memory: 4 Groups, 20 Scenes per Panel
                  </p>
                </div>
              </div>
            </Reveal3D>

            {/* Device 3: Wall Switch */}
            <Reveal3D direction="up" delay={0.15}>
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-full h-36 bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" 
                      alt="Wall Switch Sample Placeholder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Wall Switch (USA Size)</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed">
                    2.4GHz Mesh<br />
                    100-240VAC<br />
                    1-3 Gang Switches per Panel
                  </p>
                </div>
              </div>
            </Reveal3D>

            {/* Device 4: Wireless Human Presence Sensor */}
            <Reveal3D direction="up" delay={0.2}>
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-full h-36 bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80" 
                      alt="Wireless Human Presence Sensor Sample Placeholder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Wireless Human Presence Sensor</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed">
                    24GHz RADAR | 2.4GHz Mesh | Ceiling recessed<br />
                    Detect human breath movement & lux level<br />
                    100° (Max) detection angle from 4m ceiling (Max)
                  </p>
                </div>
              </div>
            </Reveal3D>

            {/* Device 5: Lighting Remote Control */}
            <Reveal3D direction="up" delay={0.25}>
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-full h-36 bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=600&q=80" 
                      alt="Lighting Remote Control Sample Placeholder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Lighting Remote Control Bluetooth Mesh</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed">
                    4A Battery x2 | Ideal for meeting room application<br />
                    Memory: 3 Groups (Controls 100 lights per group) | 8 Scenes
                  </p>
                </div>
              </div>
            </Reveal3D>

            {/* Device 6: LMZ2 Smart LED Driver Embedded */}
            <Reveal3D direction="up" delay={0.3}>
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-full h-36 bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" 
                      alt="Smart LED Driver Sample Placeholder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">LMZ2 Smart LED Driver Embedded in Luminaire</h3>
                  <span className="text-xs text-red-500 font-bold block">(Not for direct sale)</span>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed">
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
        <div className="max-w-7xl mx-auto space-y-12">
          
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-950/50 text-[#e30613] text-xs font-extrabold font-sans">
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
              { name: 'Track RGB Spot Light' },
              { name: 'Recessed Box Light' },
              { name: 'Circadian Track Light' },
              { name: 'Recessed Down Light', badge: '160lu/W' },
              { name: 'Ceiling Mount Main Light' },
              { name: 'Ceiling Mount Cylinder Light' },
              { name: '5/7W MR16' },
              { name: 'Light Strip' },
              { name: 'Panel Light', badge: '190lu/W' },
              { name: 'E27 PAR30/38' },
              { name: 'Circadian or dimmable T8', badge: '190lu/W' },
              { name: 'Linear Light' },
              { name: 'Square Panel Light' },
              { name: 'E27' },
              { name: '10W MR16' },
              { name: 'AR111' }
            ].map((lum, lIdx) => (
              <Reveal3D key={lIdx} delay={lIdx * 0.03}>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-between text-center h-48 space-y-2 group">
                  <div className="w-full h-24 bg-white dark:bg-slate-800 rounded-xl overflow-hidden flex items-center justify-center p-2">
                    <img 
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80" 
                      alt={`${lum.name} Sample Placeholder`} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  {lum.badge && (
                    <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-mono font-black text-[10px]">
                      {lum.badge}
                    </span>
                  )}
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 font-sans">{lum.name}</span>
                </div>
              </Reveal3D>
            ))}
          </div>

        </div>
      </section>

      {/* SLIDE 6: IT'S AS EASY AS 1-2-3 TO ENJOY ENERGY SAVING ON LMZ2 */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-bg-secondary border-b border-border-color relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-extrabold font-sans">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Simple Implementation</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight">
                It’s as Easy as 1-2-3 to Enjoy Energy Saving on LMZ2
              </h2>
            </div>
          </Reveal3D>

          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Step 1 */}
            <Reveal3D direction="up" delay={0.05}>
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-8 shadow-sm">
                <div className="w-20 h-20 rounded-2xl bg-[#e30613] text-white font-black text-3xl flex items-center justify-center shrink-0 shadow-lg">
                  1
                </div>
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    Direct replacement without re-wiring (new and retrofit)
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
                    — Fits any types of lights<br />
                    — Enjoy immediate smart lighting control and automation
                  </p>
                </div>
              </div>
            </Reveal3D>

            {/* Step 2 */}
            <Reveal3D direction="up" delay={0.1}>
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-8 shadow-sm">
                <div className="w-20 h-20 rounded-2xl bg-blue-600 text-white font-black text-3xl flex items-center justify-center shrink-0 shadow-lg">
                  2
                </div>
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    Add Gateway for Site Lighting Management
                  </h3>
                </div>
              </div>
            </Reveal3D>

            {/* Step 3 */}
            <Reveal3D direction="up" delay={0.15}>
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-8 shadow-sm">
                <div className="w-20 h-20 rounded-2xl bg-emerald-600 text-white font-black text-3xl flex items-center justify-center shrink-0 shadow-lg">
                  3
                </div>
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    Install LMZ2 Software & Extract Activity Data
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-sans">
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
        <div className="max-w-7xl mx-auto space-y-12">
          
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-extrabold font-sans">
                <Wind className="w-3.5 h-3.5" />
                <span>Demand Control</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight">
                Autonomous Airside Demand Control
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-4xl">
                LMZ2 continuously collects <span className="bg-amber-300 dark:bg-amber-500 text-slate-950 px-2 py-0.5 rounded font-bold">space activity data</span> that can be <span className="underline font-bold">integrated to any BMS/Smart Platform</span> to deliver real-time lighting (or Airside) energy savings—24/7—without requiring manual scheduling, analysis, or intervention.
              </p>
            </div>
          </Reveal3D>

          {/* Activity Modes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-red-50/70 dark:bg-slate-900 border border-red-200/80 space-y-2">
              <h3 className="font-bold text-red-600 text-base">• Light On for the High Activity Zones (Busy | Mid-Hi Fan | &lt; 25ºC)</h3>
            </div>
            <div className="p-6 rounded-3xl bg-emerald-50/70 dark:bg-slate-900 border border-emerald-200/80 space-y-2">
              <h3 className="font-bold text-emerald-600 text-base">• Light On/Dim for Low Activity Zones (Sensor | Low Fan | 25ºC)</h3>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 block pt-1">Supports Go25ºC</span>
            </div>
            <div className="p-6 rounded-3xl bg-blue-50/70 dark:bg-slate-900 border border-blue-200/80 space-y-2">
              <h3 className="font-bold text-blue-600 text-base">• Light Off/Dim for No Activity Zones (Silent | Off/Low Fan | 28ºC)</h3>
            </div>
          </div>

          {/* Dynamic Airside Demand Control Card */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4">
            <h3 className="text-2xl font-black font-display text-white">Further Reduce EUI through Demand Control</h3>
            <p className="text-base text-slate-300">Dynamic Airside Demand Control with LMZ2 Activity Data:</p>
            <p className="text-sm text-emerald-400 font-bold">• Aircon to support Go25ºC by adjusting set point & fan speed or valve dynamically with any BMS or Smart Platforms</p>
            <span className="text-xs font-mono text-slate-400 block">[ Heatmap @ Keppel Bay Tower ]</span>
          </div>

        </div>
      </section>

      {/* SLIDE 9: ENERGY SAVINGS OF A 24 x 7 FACTORY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-bg-secondary border-b border-border-color relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 text-xs font-extrabold font-sans">
                <Activity className="w-3.5 h-3.5" />
                <span>Factory Case Study</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight">
                Energy Savings of a 24 x 7 Factory using Activity Data for Air Side Demand Control
              </h2>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200">
                Using these simple logic, the factory saves ~ 50% in light and aircon energy
              </p>
              <div className="space-y-3 pl-4 border-l-4 border-amber-500">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">• Light On for the High Activity Zones — (Busy | Mid-Hi Fan | &lt; 25ºC)</p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">• Light On/Dim for Mid Activity Zones — (Sensor | Low Fan | 25ºC)</p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">• Light Off/Dim for No Activity Zones — (Silent | Off/Low Fan | 28ºC)</p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl p-3 bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden space-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
                  alt="24x7 Factory Activity Data Sample Placeholder" 
                  className="w-full h-60 object-cover rounded-2xl"
                />
                <span className="text-[10px] font-mono text-slate-400 block text-center py-1">
                  [ Sample Image Placeholder: 24x7 Factory Zone Floor Plan ]
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SLIDE 10: CASE STUDY: SPACE MANAGEMENT OF A RETAIL BANK */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-bg-primary border-b border-border-color relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 text-xs font-extrabold font-sans">
                <Building className="w-3.5 h-3.5" />
                <span>Retail Bank Case Study</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight">
                Case Study: Space Management of a Retail Bank
              </h2>
              <div className="flex items-center gap-4 text-xs font-bold pt-2">
                <span className="flex items-center gap-1 text-slate-500"><span className="w-3 h-3 rounded-full bg-slate-400 inline-block"></span> Silent Mode</span>
                <span className="flex items-center gap-1 text-teal-600"><span className="w-3 h-3 rounded-full bg-teal-500 inline-block"></span> Sensor Mode</span>
                <span className="flex items-center gap-1 text-purple-600"><span className="w-3 h-3 rounded-full bg-purple-500 inline-block"></span> Busy Mode</span>
              </div>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">• Zone 1-3: Service Desk</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">— You may understand which section that the service if of higher demand.</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">— You may allocate more staff to handle these busier area</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">— Putting more zones can get more detailed behavior of the customers</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">• Zone 4 Toilet:</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">— When the activity reach the preset number, the system can inform the staffs to clean the toilet to keep it from being smelly</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">• Zone 5 Customers Counter</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">— You get a quick view for how busy is counter activities</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">• Zone 7-8 Waiting Area</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">— Use data to implement Space control measure so that the branch will not be too congested where social distancing is needed.</p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl p-3 bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden space-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=1200&q=80" 
                  alt="Retail Bank Space Layout Sample Placeholder" 
                  className="w-full h-72 object-cover rounded-2xl"
                />
                <span className="text-[10px] font-mono text-slate-400 block text-center py-1">
                  [ Sample Image Placeholder: Retail Bank Zone Layout ]
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SLIDE 11: PRODUCTIVITY COMES FROM BETTER KNOWLEDGE OF YOUR PROPERTY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-bg-secondary border-b border-border-color relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <Reveal3D direction="up">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-extrabold font-sans">
                <Layers3 className="w-3.5 h-3.5" />
                <span>Property Insights</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight">
                Productivity Comes from Better Knowledge of Your Property
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans">
                Example of Commercial Buildings, Hospitals, Mixed Dev, Retail & Schools
              </p>
              <div className="p-2.5 rounded-xl bg-emerald-200/80 dark:bg-emerald-950 text-emerald-950 dark:text-emerald-300 text-xs font-bold w-fit">
                LMZ2’s <span className="bg-emerald-400 text-slate-950 px-1.5 py-0.5 rounded">Non-privacy-intrusive</span> human presence sensors for detecting the dynamic occupant patterns
              </div>
            </div>
          </Reveal3D>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm font-sans">
            {/* Space Management */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">Space Management</h3>
              <p className="text-red-500 font-bold">• High Traffic</p>
              <p className="text-amber-500 font-bold">• Mid Traffic</p>
              <p className="text-emerald-500 font-bold">• No Traffic</p>
            </div>

            {/* ACMV Management */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">ACMV Management</h3>
              <p className="text-slate-600 dark:text-slate-300">• No Traffic— Set Point 2 degree higher | No fresh air exchange</p>
              <p className="text-slate-600 dark:text-slate-300">• Mid Traffic— Low fresh air exchange</p>
            </div>

            {/* Benefits */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">Benefits</h3>
              <ul className="space-y-1 text-slate-600 dark:text-slate-400">
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

