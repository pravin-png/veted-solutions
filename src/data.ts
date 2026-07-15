import { ServiceItem, OutcomeDetail, OfficeLocation } from "./types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "cloud-infrastructure",
    code: "INFRA-01",
    title: "Cloud Infrastructure",
    description: "Scalable, secure hybrid and multi-cloud architectures engineered for high-concurrency enterprise workloads.",
    iconName: "Cloud",
    bulletPoints: [
      "Multi-region architecture design and high-availability deployment patterns.",
      "Infrastructure as Code (IaC) implementation using Terraform and OpenTofu.",
      "Zero-downtime database replication and automated failover strategies."
    ],
    techStack: ["AWS", "Google Cloud", "Microsoft Azure", "Terraform", "Kubernetes", "Docker"],
    sampleProject: {
      title: "Enterprise Multi-Cloud Transition",
      description: "Migrated a legacy on-premise system with 10M+ active users to a dynamic, multi-region hybrid cloud environment.",
      results: "Improved response times by 40% and reduced compute overhead by 25%."
    }
  },
  {
    id: "enterprise-automation",
    code: "AUTO-02",
    title: "Enterprise Automation",
    description: "End-to-end workflow optimization using RPA and custom middleware to eliminate operational bottlenecks.",
    iconName: "Cpu",
    bulletPoints: [
      "Custom middleware development to orchestrate siloed internal operations.",
      "Implementation of high-speed message queues and background processing engines.",
      "Deployment of smart document processing and robotic process automations."
    ],
    techStack: ["Node.js", "Python", "Apache Kafka", "Redis", "UiPath", "Docker"],
    sampleProject: {
      title: "Automated Supply Order Reconciliation",
      description: "Built an event-driven automation bridge linking inventory procurement with financial general ledger software.",
      results: "Cut manual reconciliation workloads by 85% and eliminated ledger entries errors."
    }
  },
  {
    id: "cyber-security",
    code: "SEC-03",
    title: "Cyber Security",
    description: "Zero-trust security frameworks, continuous monitoring, and automated threat response systems.",
    iconName: "Shield",
    bulletPoints: [
      "Zero-trust architecture planning, role-based access control, and identity partitioning.",
      "Automated continuous compliance auditing and vulnerability scanning pipelines.",
      "Securing RESTful APIs and internal gRPC communication networks."
    ],
    techStack: ["HashiCorp Vault", "WAF", "OAuth2 / OIDC", "Cloud Armor", "SonarQube", "Snyk"],
    sampleProject: {
      title: "Fintech Security Hardening",
      description: "Designed a secure environment and audited core code to align with MAS TRM (Technology Risk Management) compliance standards.",
      results: "Passed the MAS audit on first inspection and blocked 100% of external penetration tests."
    }
  },
  {
    id: "custom-integration",
    code: "INT-04",
    title: "Custom System Integration",
    description: "Bespoke API development and legacy system modernization connecting siloed business units.",
    iconName: "Network",
    bulletPoints: [
      "High-throughput API gateway implementation and enterprise-wide service bus setup.",
      "Legacy SOAP and mainframe translation layers to modern REST/gRPC architectures.",
      "Data ingestion streams with real-time transformation and format validation."
    ],
    techStack: ["gRPC", "GraphQL", "Kong Gateway", "Go", "TypeScript", "RabbitMQ"],
    sampleProject: {
      title: "Legacy Core Banking Modernization",
      description: "Replaced a monolithic, rigid core ledger with an event-driven decoupled event streaming architecture.",
      results: "Enabled real-time transaction processing and simplified third-party API onboarding."
    }
  },
  {
    id: "data-analytics",
    code: "DATA-05",
    title: "Data Analytics & AI",
    description: "Transforming raw data into actionable intelligence through machine learning and predictive models.",
    iconName: "Database",
    bulletPoints: [
      "Optimized data warehousing setups using serverless query engines.",
      "Predictive telemetry analytics pipelines for predictive failure prevention.",
      "Safe and private integration of local LLMs and enterprise retrieval models."
    ],
    techStack: ["Python", "PyTorch", "Snowflake", "d3.js", "Google BigQuery", "FastAPI"],
    sampleProject: {
      title: "Predictive Equipment Lifecycle System",
      description: "Deployed streaming ML models to evaluate operational telemetry from automated shipping terminals.",
      results: "Accurately forecasted 92% of hardware faults prior to failure, slashing unexpected downtime."
    }
  },
  {
    id: "managed-it",
    code: "MS-06",
    title: "Managed IT Services",
    description: "Proactive 24/7 technical support and infrastructure management for business continuity.",
    iconName: "Activity",
    bulletPoints: [
      "Follow-the-sun 24/7 technical response center staffed by senior system architects.",
      "Proactive uptime monitoring with self-healing automated container orchestration.",
      "Disaster recovery simulations and continuous data archiving configurations."
    ],
    techStack: ["Grafana", "Prometheus", "PagerDuty", "Kubernetes", "AWS CloudWatch", "Datadog"],
    sampleProject: {
      title: "Global Supply Chain Infrastructure Support",
      description: "Took over 24/7 support of a global routing server matrix spread across 4 geographical regions.",
      results: "Maintained a continuous 99.995% service uptime and resolved critical tickets under 15 minutes."
    }
  }
];

export const OUTCOMES_DATA: OutcomeDetail[] = [
  {
    id: "fintech",
    label: "Fintech Sector",
    stats: [
      {
        value: "50%",
        label: "Faster Deployment",
        description: "Accelerated time-to-market for digital banking services through CI/CD automation."
      },
      {
        value: "99.99%",
        label: "Availability Guarantee",
        description: "Zero-downtime migration to cloud-native microservices architecture."
      }
    ],
    quote: "VETED SOLUTIONS transformed our core banking infrastructure into a future-ready platform within months, not years.",
    author: "CTO, Major SE Asian Fintech"
  },
  {
    id: "logistics",
    label: "Logistics & Supply Chain",
    stats: [
      {
        value: "35%",
        label: "Routing Efficiency",
        description: "Optimized multi-node delivery routing pipelines using custom predictive ML middleware."
      },
      {
        value: "-22%",
        label: "Inventory Latency",
        description: "Reduced warehouse syncing lag from hours to sub-seconds, preventing duplicate bookings."
      }
    ],
    quote: "Connecting our distributed regional hubs into a single real-time data layer unlocked unparalleled dispatch coordination.",
    author: "VP of Operations, Global Logistics Group"
  },
  {
    id: "retail",
    label: "Enterprise Retail",
    stats: [
      {
        value: "4.2x",
        label: "Concurrent Users Peak",
        description: "Architected elastic cloud systems to handle extreme seasonal shopping peaks without friction."
      },
      {
        value: "60%",
        label: "Checkout Speed",
        description: "Integrated secure API proxy layers to complete multi-factor payment flows instantly."
      }
    ],
    quote: "Our Black Friday event was completely smooth with zero cart errors or system slowdowns. Their performance tuning was stellar.",
    author: "Director of Commerce, Multinational Retail Brand"
  }
];

export const LOCATIONS_DATA: OfficeLocation[] = [
  {
    region: "APAC",
    city: "Singapore (HQ)",
    address: "71 Ayer Rajah Crescent, LaunchPad @ one-north, Singapore 139951",
    support: "24/7 Follow-the-Sun Primary Desk",
    uptimeGuarantee: "99.999% Service Level Agreement",
    compliance: ["MAS TRM Guidelines", "SOC 2 Type II", "ISO 27001", "PDPA Compliant"]
  },
  {
    region: "EMEA",
    city: "London",
    address: "Level 14, The Shard, 32 London Bridge St, London SE1 9SG, United Kingdom",
    support: "Local Business Hours + Escalation Node",
    uptimeGuarantee: "99.99% Availability Commitment",
    compliance: ["GDPR", "FCA Regulatory Standards", "SOC 2 Type II"]
  },
  {
    region: "AMER",
    city: "San Francisco",
    address: "Suite 400, 101 California St, San Francisco, CA 94111, United States",
    support: "Local Business Hours + Escalation Node",
    uptimeGuarantee: "99.99% Availability Commitment",
    compliance: ["HIPAA Security Rules", "CCPA Compliant", "SOC 2 Type II"]
  }
];
