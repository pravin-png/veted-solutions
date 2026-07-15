import { X, Check, Server, Target, Code } from "lucide-react";
import { ServiceItem } from "../types";
import { getServiceIcon } from "./ServiceIconHelper";
import { motion } from "motion/react";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export default function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  if (!service) return null;
  const IconComponent = getServiceIcon(service.iconName);

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-deep-charcoal/60 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-surface-white w-full max-w-2xl border border-border-gray shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10"
      >
        {/* Header decoration */}
        <div className="h-1.5 w-full bg-vivid-orange" />

        {/* Top Close bar */}
        <div className="flex justify-between items-center p-6 border-b border-border-gray">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-vivid-orange/5 flex items-center justify-center text-vivid-orange border border-vivid-orange/15">
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-outline font-semibold tracking-wider block">
                {service.code}
              </span>
              <h3 className="font-headline text-lg font-bold text-deep-charcoal">
                {service.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-surface-container-low text-outline hover:text-deep-charcoal transition-colors rounded-sm"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="p-8 overflow-y-auto space-y-8">
          
          {/* Main Description */}
          <div>
            <h4 className="font-mono text-[11px] text-vivid-orange font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5" /> Capability Overview
            </h4>
            <p className="text-body-md text-outline leading-relaxed font-sans">
              {service.description}
            </p>
          </div>

          {/* Technical Scope bullet points */}
          <div>
            <h4 className="font-mono text-[11px] text-vivid-orange font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5" /> Core Deliverables
            </h4>
            <ul className="space-y-3">
              {service.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-body-sm text-outline">
                  <div className="mt-1 bg-electric-blue/10 p-0.5 text-electric-blue shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack Tags */}
          <div>
            <h4 className="font-mono text-[11px] text-vivid-orange font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5" /> Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] bg-surface-container-low text-deep-charcoal px-3 py-1.5 border border-border-gray font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Card */}
          <div className="bg-surface-container-low border border-border-gray p-6">
            <span className="font-mono text-[9px] bg-electric-blue text-surface-white px-2 py-0.5 uppercase tracking-widest font-bold">
              Representative Success Story
            </span>
            <h5 className="font-headline font-bold text-deep-charcoal text-[15px] mt-3 mb-1">
              {service.sampleProject.title}
            </h5>
            <p className="text-body-sm text-outline leading-relaxed mb-4">
              {service.sampleProject.description}
            </p>
            <div className="pt-4 border-t border-border-gray/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-[11px] font-mono uppercase text-outline font-semibold tracking-wider">
                Impact outcome:
              </span>
              <span className="text-body-sm font-bold text-electric-blue bg-electric-blue/5 px-2.5 py-1 border border-electric-blue/10">
                {service.sampleProject.results}
              </span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-surface-container-low p-6 border-t border-border-gray flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 font-sans text-[12px] font-bold uppercase tracking-wider text-outline hover:text-deep-charcoal hover:bg-surface-white border border-border-gray transition-all active:scale-[0.98]"
          >
            Close Window
          </button>
          <a
            href="#contact"
            onClick={() => {
              onClose();
              // Smooth scroll helper
              setTimeout(() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="px-5 py-2.5 bg-vivid-orange text-surface-white font-sans text-[12px] font-bold uppercase tracking-wider hover:brightness-105 active:scale-[0.98] transition-all flex items-center gap-1.5"
          >
            Inquire About Service
          </a>
        </div>
      </motion.div>
    </div>
  );
}
