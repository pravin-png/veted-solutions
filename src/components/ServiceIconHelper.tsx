import { Cloud, Cpu, Shield, Network, Database, Activity, HelpCircle } from "lucide-react";

export const getServiceIcon = (name: string) => {
  switch (name) {
    case "Cloud":
      return Cloud;
    case "Cpu":
      return Cpu;
    case "Shield":
      return Shield;
    case "Network":
      return Network;
    case "Database":
      return Database;
    case "Activity":
      return Activity;
    default:
      return HelpCircle;
  }
};
