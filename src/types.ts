export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  description: string;
  iconName: string;
  bulletPoints: string[];
  techStack: string[];
  sampleProject: {
    title: string;
    description: string;
    results: string;
  };
}

export interface OutcomeStat {
  value: string;
  label: string;
  description: string;
}

export interface OutcomeDetail {
  id: string;
  label: string;
  stats: OutcomeStat[];
  quote: string;
  author: string;
}

export interface OfficeLocation {
  region: string; // "APAC" | "EMEA" | "AMER"
  city: string;
  address: string;
  support: string;
  uptimeGuarantee: string;
  compliance: string[];
}
