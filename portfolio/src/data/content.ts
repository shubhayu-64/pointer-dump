export type LinkItem = {
  label: string;
  href: string;
};

export type Resource = {
  title: string;
  description: string;
  href: string;
  meta?: string;
  tags?: string[];
};

export type Article = Resource & {
  published: string;
  readingTime: string;
};

export const profile = {
  name: "Your Name",
  title: "Backend & ML Engineer",
  location: "Remote · UTC±0",
  tagline: "Building reliable backends and ML-driven products with a healthy respect for production.",
  description:
    "Backend and ML engineer focused on shipping measurable outcomes. I partner with product teams to design resilient services, productionize research, and deliver developer tooling that scales.",
  availability: "Open to senior roles, advisory engagements, and tough platform work.",
  links: [
    { label: "Email", href: "mailto:you@example.com" },
    { label: "GitHub", href: "https://github.com/yourhandle" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yourhandle" },
    { label: "Blog", href: "https://yourblog.com" },
  ] satisfies LinkItem[],
  focus: [
    "LLM product strategy",
    "Backend architecture",
    "MLOps & platforms",
    "Developer experience",
  ],
  toolkit: [
    "TypeScript",
    "Python",
    "Next.js",
    "FastAPI",
    "PostgreSQL",
    "LangChain",
    "Temporal",
    "AWS",
    "Terraform",
  ],
};

export const projects: Resource[] = [
  {
    title: "Realtime Inference Platform",
    description:
      "GPU-aware orchestration for streaming inference across multi-cloud clusters with autoscaling, tracing, and golden path SDKs.",
    href: "https://github.com/yourhandle/realtime-inference-platform",
    meta: "2024 · Lead Engineer",
    tags: ["Next.js", "FastAPI", "Kubernetes", "Temporal"],
  },
  {
    title: "Feature Store SDK",
    description:
      "Developer-first SDK that turns raw event streams into versioned ML features with validation, drift monitoring, and CI pipelines.",
    href: "https://github.com/yourhandle/feature-store-sdk",
    meta: "2023 · OSS",
    tags: ["Python", "Polars", "Great Expectations", "GitHub Actions"],
  },
  {
    title: "Edge Observability Kit",
    description:
      "Composable toolkit for edge gateways that unifies metrics, traces, and model telemetry with automated SLO dashboards.",
    href: "https://github.com/yourhandle/edge-observability-kit",
    meta: "2022 · Platform",
    tags: ["Rust", "WASM", "Prometheus", "Grafana"],
  },
];

export const talks: Resource[] = [
  {
    title: "Shipping ML APIs Without Heroics",
    description:
      "Patterns for building resilient inference surfaces, rate-limited safeguards, and on-call-friendly rollbacks.",
    href: "https://speakerdeck.com/yourhandle/shipping-ml-apis-without-heroics",
    meta: "QCon SF · 2024",
    tags: ["Platform strategy", "ML Ops"],
  },
  {
    title: "Tracing LLM Production Systems",
    description:
      "A tour of tracing strategies for prompt routers, guardrails, and evaluation loops across distributed systems.",
    href: "https://yourtalks.com/tracing-llm-production-systems",
    meta: "Strange Loop · 2023",
    tags: ["Observability", "LLM Safety"],
  },
  {
    title: "Developer Platforms that Don't Backfire",
    description:
      "What happens after v1: metrics, product thinking, and avoiding accidental complexity in platform teams.",
    href: "https://yourtalks.com/platforms-that-dont-backfire",
    meta: "LeadDev London · 2022",
    tags: ["Platform Engineering", "DX"],
  },
];

export const articles: Article[] = [
  {
    title: "Operational Guardrails for LLM Products",
    description:
      "Designing evaluation loops, feedback signals, and automatic fail-safes before scaling customer-facing LLM features.",
    href: "https://yourblog.com/operational-guardrails-llm-products",
    meta: "Featured",
    published: "July 2024",
    readingTime: "8 min read",
    tags: ["LLM Ops", "Product"],
  },
  {
    title: "Design Docs for Machine Learning Systems",
    description:
      "A living framework for writing design docs that capture research intent, production risk, and product trade-offs.",
    href: "https://yourblog.com/design-docs-ml-systems",
    meta: "Top Pick",
    published: "March 2024",
    readingTime: "6 min read",
    tags: ["Architecture", "Process"],
  },
  {
    title: "Rethinking the Backend for Real-Time Analytics",
    description:
      "How we re-architected ingestion paths and query services to support sub-second insights at serious scale.",
    href: "https://yourblog.com/backend-real-time-analytics",
    meta: "Community",
    published: "November 2023",
    readingTime: "7 min read",
    tags: ["Distributed Systems", "Streaming"],
  },
];
