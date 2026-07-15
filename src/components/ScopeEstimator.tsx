import { useState, useEffect } from "react";
import { Sliders, HelpCircle, ShieldAlert, Cpu, Sparkles } from "lucide-react";

export default function ScopeEstimator() {
  const [legacySystems, setLegacySystems] = useState<number>(3);
  const [complianceLevel, setComplianceLevel] = useState<string>("soc2");
  const [deploymentTarget, setDeploymentTarget] = useState<string>("hybrid");
  
  const [estimates, setEstimates] = useState({
    weeks: "10-14",
    complexity: "Moderate",
    complexityColor: "text-amber-600 border-amber-200 bg-amber-50",
    efficiencyGains: "32%",
    riskMitigation: "99.9%"
  });

  useEffect(() => {
    // Basic reactive business logic to compute dynamic enterprise scope values
    let minWeeks = 4 + legacySystems * 2;
    let maxWeeks = 6 + legacySystems * 3;
    
    let complexityRating = "Standard";
    let complexityCol = "text-emerald-600 border-emerald-200 bg-emerald-50";
    let efficiencyVal = 20 + legacySystems * 4;
    let riskMit = "99.9%";

    if (complianceLevel === "mas") {
      minWeeks += 4;
      maxWeeks += 6;
      complexityRating = "Critical High";
      complexityCol = "text-rose-600 border-rose-200 bg-rose-50";
      efficiencyVal += 8;
      riskMit = "99.999%";
    } else if (complianceLevel === "soc2") {
      minWeeks += 2;
      maxWeeks += 4;
      complexityRating = "High";
      complexityCol = "text-amber-600 border-amber-200 bg-amber-50";
      efficiencyVal += 4;
      riskMit = "99.99%";
    }

    if (deploymentTarget === "multi") {
      minWeeks += 3;
      maxWeeks += 4;
      if (complexityRating !== "Critical High") {
        complexityRating = "High";
        complexityCol = "text-amber-600 border-amber-200 bg-amber-50";
      }
      efficiencyVal += 12;
    } else if (deploymentTarget === "hybrid") {
      minWeeks += 1;
      maxWeeks += 2;
    }

    // Limit maximum values
    if (efficiencyVal > 75) efficiencyVal = 75;

    setEstimates({
      weeks: `${minWeeks}-${maxWeeks}`,
      complexity: complexityRating,
      complexityColor: complexityCol,
      efficiencyGains: `${efficiencyVal}%`,
      riskMitigation: riskMit
    });
  }, [legacySystems, complianceLevel, deploymentTarget]);

  return (
    <div className="bg-surface-white border border-border-gray p-6 sm:p-8 flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center gap-2 pb-4 mb-6 border-b border-border-gray">
          <div className="p-1.5 bg-electric-blue/5 text-electric-blue">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <span className="font-mono text-[9px] text-vivid-orange font-bold uppercase tracking-widest block">
              Self-Service Assessment
            </span>
            <h4 className="font-headline font-bold text-deep-charcoal text-[16px]">
              Scope &amp; Complexity Estimator
            </h4>
          </div>
        </div>

        {/* Inputs */}
        <div className="space-y-5">
          {/* Slider for systems */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-body-sm">
              <label className="font-sans font-medium text-deep-charcoal">
                Active Legacy Subsystems
              </label>
              <span className="font-mono font-bold bg-surface-container-low px-2 py-0.5 border border-border-gray text-xs">
                {legacySystems} {legacySystems === 1 ? "System" : "Systems"}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={legacySystems}
              onChange={(e) => setLegacySystems(parseInt(e.target.value))}
              className="w-full accent-vivid-orange cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-outline">
              <span>1 (Single Monolith)</span>
              <span>10+ (Deeply Siloed)</span>
            </div>
          </div>

          {/* Selector for compliance */}
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-body-sm font-medium text-deep-charcoal">
              Target Compliance Standard
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "none", label: "Baseline" },
                { id: "soc2", label: "SOC 2 Type II" },
                { id: "mas", label: "MAS TRM" }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setComplianceLevel(opt.id)}
                  className={`py-2 px-1 text-center font-mono text-[11px] font-medium border transition-colors ${
                    complianceLevel === opt.id
                      ? "bg-deep-charcoal text-surface-white border-deep-charcoal"
                      : "bg-surface-white hover:bg-surface-container-low border-border-gray text-outline"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Selector for hosting */}
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-body-sm font-medium text-deep-charcoal">
              Infrastructure Target
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "single", label: "Single Cloud" },
                { id: "hybrid", label: "Hybrid Cloud" },
                { id: "multi", label: "Multi-Cloud" }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setDeploymentTarget(opt.id)}
                  className={`py-2 px-1 text-center font-mono text-[11px] font-medium border transition-colors ${
                    deploymentTarget === opt.id
                      ? "bg-deep-charcoal text-surface-white border-deep-charcoal"
                      : "bg-surface-white hover:bg-surface-container-low border-border-gray text-outline"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Block */}
      <div className="mt-8 pt-6 border-t border-border-gray space-y-4">
        <span className="font-mono text-[9px] text-outline font-bold uppercase tracking-widest block">
          Simulated Project Telemetry
        </span>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-container-low p-3.5 border border-border-gray">
            <span className="block text-[10px] font-mono text-outline uppercase">
              Est. Timeline
            </span>
            <span className="text-xl font-bold font-headline text-deep-charcoal">
              {estimates.weeks} <span className="text-xs font-normal font-sans">wks</span>
            </span>
          </div>

          <div className="bg-surface-container-low p-3.5 border border-border-gray">
            <span className="block text-[10px] font-mono text-outline uppercase">
              Complexity Level
            </span>
            <span className={`text-[12px] font-mono uppercase tracking-wider font-bold block mt-1 py-0.5 px-2 border rounded-sm text-center ${estimates.complexityColor}`}>
              {estimates.complexity}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-container-low p-3.5 border border-border-gray">
            <span className="block text-[10px] font-mono text-outline uppercase">
              Eff. Improvement
            </span>
            <span className="text-lg font-bold font-headline text-emerald-600">
              {estimates.efficiencyGains}
            </span>
          </div>

          <div className="bg-surface-container-low p-3.5 border border-border-gray">
            <span className="block text-[10px] font-mono text-outline uppercase">
              Guaranteed Uptime
            </span>
            <span className="text-lg font-bold font-headline text-electric-blue">
              {estimates.riskMitigation}
            </span>
          </div>
        </div>

        <p className="text-[10px] text-outline flex items-start gap-1.5 leading-normal font-sans">
          <ShieldAlert className="w-3.5 h-3.5 text-vivid-orange shrink-0 mt-0.5" />
          <span>
            These estimates are based on global enterprise integration telemetry. Submit the contact form to the right for a verified architectural quote.
          </span>
        </p>
      </div>
    </div>
  );
}
