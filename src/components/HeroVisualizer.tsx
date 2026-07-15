import { useState } from "react";
import { Database, ArrowRight, Server, Shield, CheckCircle2, Cpu, Eye, Image } from "lucide-react";
import { motion } from "motion/react";

export default function HeroVisualizer() {
  const [activeLayer, setActiveLayer] = useState<"scenic" | "technical">("scenic");

  return (
    <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto lg:h-[580px] bg-surface-container-low border border-border-gray overflow-hidden">
      
      {/* Tab Selectors on Top Right */}
      <div className="absolute top-4 right-4 z-20 flex gap-1 bg-surface-white/90 backdrop-blur-md p-1 border border-border-gray shadow-sm">
        <button
          onClick={() => setActiveLayer("scenic")}
          className={`px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
            activeLayer === "scenic"
              ? "bg-vivid-orange text-surface-white"
              : "text-outline hover:text-deep-charcoal hover:bg-surface-container-low"
          }`}
        >
          <Image className="w-3.5 h-3.5" />
          Scenic
        </button>
        <button
          onClick={() => setActiveLayer("technical")}
          className={`px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
            activeLayer === "technical"
              ? "bg-deep-charcoal text-surface-white"
              : "text-outline hover:text-deep-charcoal hover:bg-surface-container-low"
          }`}
        >
          <Cpu className="w-3.5 h-3.5" />
          Technical Flow
        </button>
      </div>

      {/* Layer 1: Scenic Image (matches screenshot exactly) */}
      {activeLayer === "scenic" && (
        <motion.div
          key="scenic-layer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB04mSG-2hcSIz0oUQPAiHFstnvQMjRPs1eVLT1r8sEIbqn7oH83VeO9HD5NZaguAMDmrv_scAoSJMvhKj-HlR6ZowOmhchp9Oyduv8viYTZDrokRtBekSFFNzBvxogDmWABQFRPqwUrHmPXva_XTYn9d47wKLlxOqIGYX4GUYPqjS5v4O2QcCUv_oHcGTX2PgTu6cVQycEwD7vfK5eRNMXT2hcIVNgwUXKWD3zvUpYzyjGx-UknIGsJcB5RzgfSCabaUyt9J35N_IhJ5M"
            alt="Veted Solutions - Global Delivery Excellence"
            className="w-full h-full object-cover object-center grayscale-[15%] hover:scale-[1.02] transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 z-10 text-surface-white max-w-sm">
            <span className="font-mono text-[10px] text-vivid-orange font-bold uppercase tracking-widest block mb-1">
              EMEA Delivery Command
            </span>
            <p className="font-headline font-bold text-lg leading-tight text-shadow-subtle text-white">
              Seamless coordination across global operational zones.
            </p>
          </div>
        </motion.div>
      )}

      {/* Layer 2: Interactive SVG Technical Flow */}
      {activeLayer === "technical" && (
        <motion.div
          key="technical-layer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full p-8 flex flex-col justify-between bg-deep-charcoal text-surface-white technical-grid-bg"
        >
          {/* Top Label */}
          <div>
            <span className="font-mono text-[9px] text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 animate-ping rounded-full" />
              SYSTEM INTEGRATION SIMULATOR ACTIVE
            </span>
            <h4 className="font-headline font-bold text-lg text-surface-white mt-1">
              Active Integration Bus Architecture
            </h4>
          </div>

          {/* Interactive Core Schematic */}
          <div className="flex-grow flex items-center justify-center py-6">
            <div className="relative w-full max-w-lg grid grid-cols-3 items-center gap-4 text-center">
              
              {/* Legacy Subsystem node */}
              <div className="flex flex-col items-center gap-3 bg-surface-white/5 border border-surface-white/10 p-4 relative">
                <Database className="w-8 h-8 text-vivid-orange animate-pulse" />
                <div>
                  <span className="font-mono text-[10px] text-surface-variant block font-semibold">
                    SOURCE
                  </span>
                  <p className="text-[11px] font-sans font-medium text-surface-white">
                    Legacy Core Banking
                  </p>
                </div>
                {/* Connecting arrow with moving bubble */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-surface-white/20" />
              </div>

              {/* Central VETED Hub */}
              <div className="flex flex-col items-center gap-3 bg-vivid-orange/10 border border-vivid-orange/30 p-5 relative rounded-sm shadow-[0_0_15px_rgba(255,130,0,0.15)]">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-vivid-orange text-deep-charcoal font-mono text-[8px] font-extrabold px-1.5 py-0.5 tracking-wider uppercase">
                  VETED API Hub
                </div>
                
                {/* Pulsing engine */}
                <div className="relative">
                  <div className="absolute inset-0 bg-vivid-orange/20 rounded-full scale-150 animate-ping" />
                  <Cpu className="w-10 h-10 text-vivid-orange relative z-10" />
                </div>
                
                <div>
                  <span className="font-mono text-[10px] text-vivid-orange block font-semibold">
                    ROUTING
                  </span>
                  <p className="text-[11px] font-sans font-medium text-surface-white leading-tight">
                    API Translation &amp; Map
                  </p>
                </div>
              </div>

              {/* Target Cloud services */}
              <div className="flex flex-col items-center gap-3 bg-surface-white/5 border border-surface-white/10 p-4 relative">
                <Server className="w-8 h-8 text-electric-blue animate-pulse" />
                <div>
                  <span className="font-mono text-[10px] text-surface-variant block font-semibold">
                    DESTINATION
                  </span>
                  <p className="text-[11px] font-sans font-medium text-surface-white">
                    Cloud Microservices
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Interactive telemetry logs */}
          <div className="bg-black/40 border border-surface-white/10 p-4 font-mono text-[10px] space-y-1.5 text-left select-none max-h-36 overflow-y-auto">
            <div className="flex justify-between text-surface-variant/70 border-b border-surface-white/5 pb-1">
              <span>METRIC NODE</span>
              <span>VALUE</span>
              <span>STATE</span>
            </div>
            <div className="flex justify-between text-emerald-400">
              <span>[TCP] legacy_mainframe.syn</span>
              <span>18ms lag</span>
              <span>CONNECTED</span>
            </div>
            <div className="flex justify-between text-vivid-orange">
              <span>[API] veted_translator_01</span>
              <span>99.98% payload</span>
              <span>COMPILING</span>
            </div>
            <div className="flex justify-between text-electric-blue">
              <span>[GCP] kubernetes_ingress_pool</span>
              <span>0% loss</span>
              <span>STABLE</span>
            </div>
          </div>
        </motion.div>
      )}

    </div>
  );
}
