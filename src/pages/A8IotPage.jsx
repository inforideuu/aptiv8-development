import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, Activity, Zap, Cpu, Layers, ShieldCheck, Database, Radio, 
  BarChart3, Clock, AlertTriangle, CheckCircle2, ArrowRight, Eye, Wrench
} from 'lucide-react';
import Reveal3D from '../components/Reveal3D';

export default function A8IotPage() {
  return (
    <div className="relative pt-20 bg-bg-primary text-text-primary min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative py-36 px-4 bg-cover bg-center overflow-hidden flex items-center justify-center min-h-[calc(100vh-80px)] w-full"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="absolute inset-0 bg-slate-950/75 z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-[1.5px] bg-[#e30613]" />
            <span className="text-[#e30613] text-xs font-bold uppercase tracking-[0.2em] font-sans">
              INTEGRATED BUILDING DECARBONISATION & CBM
            </span>
            <span className="w-10 h-[1.5px] bg-[#e30613]" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            A8 IOT & Condition-Based <br />
            <span className="text-[#e30613]">Monitoring Platform</span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Real-time IoT telemetry, AI condition monitoring, predictive energy optimisation, and BMS connectivity built for smart facilities.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <a
              href="/contact"
              className="px-7 py-3.5 rounded-full bg-[#e30613] hover:bg-[#c00510] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-red-600/20 flex items-center gap-2"
            >
              <span>Connect Devices</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. 4 CORE PILLARS */}
      <section className="py-20 px-4 bg-bg-secondary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Lower Energy Use',
                desc: 'Real-time monitoring and AI optimization for highest energy efficiency.',
                icon: Zap
              },
              {
                title: 'Improve Asset Performance',
                desc: 'Reduce lifecycle costs through early anomaly detection and CBM.',
                icon: Activity
              },
              {
                title: 'Boost Engineering Productivity',
                desc: 'Automate telemetry alerts and eliminate manual meter readings.',
                icon: Cpu
              },
              {
                title: 'Sustainability Outcomes',
                desc: 'Achieve carbon reduction goals and Green Mark compliance with ease.',
                icon: ShieldCheck
              }
            ].map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-bg-primary border border-border-color hover:border-[#e30613]/50 transition-all flex flex-col justify-between shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 text-[#e30613] flex items-center justify-center mb-4">
                    <PillarIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-primary mb-1.5 font-display">{pillar.title}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal3D>
      </section>

      {/* 3. TECHNICAL CAPABILITIES */}
      <section className="py-24 px-4 bg-bg-primary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono tracking-widest text-[#e30613] uppercase font-bold block font-display">
                IOT INFRASTRUCTURE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                Comprehensive IoT & Sensor Features
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Tridentg BMS Integration', desc: 'Native support for BACnet, Modbus, MQTT, and OPC UA protocols.' },
                { title: 'No Retrofitting Required', desc: 'Connect directly to your existing building management systems seamlessly.' },
                { title: 'Real-Time Anomaly Detection', desc: 'AI models analyze sensor streams 24/7 to flag out-of-bound readings instantly.' }
              ].map((feat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-bg-secondary border border-border-color hover:border-[#e30613]/40 transition-all shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-[#e30613] mb-3" />
                  <h3 className="text-base font-bold text-text-primary mb-2 font-display">{feat.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal3D>
      </section>

      {/* 4. CTA */}
      <section className="py-20 px-4 bg-bg-secondary text-center">
        <Reveal3D>
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              Transform Facilities with A8 IoT
            </h2>
            <p className="text-sm text-text-secondary max-w-lg mx-auto">
              Schedule a technical walkthrough of A8 IoT with our Singapore engineering specialists.
            </p>
            <div>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#e30613] hover:bg-[#c00510] text-white font-bold text-sm tracking-wide transition-all shadow-xl"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal3D>
      </section>

    </div>
  );
}
