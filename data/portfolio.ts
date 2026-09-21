import type { Portfolio } from "@/types/portfolio";

/**
 * Single source of truth for all portfolio content.
 *
 * Sources: Tejas_Resume.pdf, Linked_Profile.pdf, the six images in
 * "Architecture Diagrams of projects", and the public repo Tejas953/HealthCheck_Bot.
 * Every number below is taken from the resume/LinkedIn unless noted.
 */
export const portfolio: Portfolio = {
  /* ------------------------------------------------------------------ */
  /*  Profile                                                           */
  /* ------------------------------------------------------------------ */
  profile: {
    name: "Tejas Pingale",
    headline: "Full-Stack · Forward Deployed · Applied AI Engineer",
    roles: [
      "Full-Stack Engineer",
      "Forward Deployed Engineer",
      "AI Engineer",
    ],
    location: "Pune, Maharashtra, India",
    email: "tejaspingale4@gmail.com",
    phone: "+91 9356800589",
    summary:
      "Associate Software Engineer at Contentstack, driving a .NET Framework → .NET 10 modernization and 14+ enterprise integrations. I ship React/Next.js and Spring Boot systems on headless CMS architecture, and build applied AI — including a fine-tuned CMS support chatbot that cut troubleshooting time by 40%.",
    availability: {
      badge: "Immediate Joiner",
      detail: "Open to Full-Stack, AI Engineering and Forward Deployed Engineer roles",
    },
    social: {
      linkedin: "https://www.linkedin.com/in/tejas-pingale",
      github: "https://github.com/Tejas953",
    },
    resume: {
      href: "/Tejas_Resume.pdf",
      fileName: "Tejas_Pingale_Resume.pdf",
    },
    heroStack: [
      "React / Next.js",
      "Java / Spring Boot",
      "Contentstack",
      "Azure AD B2C · OAuth/OIDC",
      "Salesforce API",
      "Prompt Engineering & Fine-Tuning",
      "Computer Vision",
    ],
    pillars: [
      {
        id: "fullstack",
        title: "Full-Stack Developer",
        icon: "Layout",
        points: [
          "React / Next.js",
          "Java / Spring Boot",
          "REST APIs",
          "Node.js",
          "MongoDB",
        ],
      },
      {
        id: "fde",
        title: "Forward Deployed Engineer",
        icon: "Network",
        points: [
          "Enterprise integrations",
          "API orchestration",
          "System modernization",
          "Azure AD B2C",
          "Salesforce API",
        ],
      },
      {
        id: "ai",
        title: "AI Engineer",
        icon: "Brain",
        points: [
          "Applied AI: LLM fine-tuning",
          "Prompt engineering",
          "Computer vision",
          "NLP",
        ],
      },
    ],
    education: {
      school: "MIT Academy of Engineering, Pune",
      degree: "B.Tech. Computer Engineering",
      period: "2021 – 2025",
      cgpa: "9.11 / 10",
    },
  },

  /* ------------------------------------------------------------------ */
  /*  Metrics & impact bar                                              */
  /* ------------------------------------------------------------------ */
  metrics: [
    {
      id: "sih",
      value: 1,
      prefix: "#",
      label: "All-India Rank",
      context: "Smart India Hackathon 2023 · 200+ teams",
      icon: "Trophy",
    },
    {
      id: "integrations",
      value: 14,
      suffix: "+",
      label: "Enterprise integrations owned",
      context: "Azure AD B2C, OAuth/OIDC, Google Maps & more",
      icon: "Network",
    },
    {
      id: "troubleshooting",
      value: 40,
      suffix: "%",
      label: "Faster troubleshooting",
      context: "Fine-tuned AI CMS support chatbot",
      icon: "Timer",
    },
    {
      id: "defects",
      value: 30,
      suffix: "%",
      label: "Fewer recurring defects",
      context: "Integration ownership across 14+ systems",
      icon: "ShieldCheck",
    },
    {
      id: "chatbot-accuracy",
      value: 85,
      suffix: "%",
      label: "Chatbot troubleshooting accuracy",
      context: "Evaluated on 50+ real-world CMS scenarios",
      icon: "Bot",
    },
    {
      id: "latency",
      value: 2,
      prefix: "<",
      suffix: "s",
      label: "Real-time prediction latency",
      context: "Flask + React food classifier · 88% accuracy",
      icon: "Gauge",
    },
    {
      id: "detection",
      value: 90,
      suffix: "%",
      label: "Knife-detection accuracy",
      context: "Real-time CCTV analysis across 10+ camera feeds",
      icon: "Eye",
    },
    {
      id: "components",
      value: 25,
      suffix: "+",
      label: "Reusable UI components",
      context: "Winn-Dixie CMS migration to Contentstack",
      icon: "Blocks",
    },
  ],

  /* ------------------------------------------------------------------ */
  /*  Skills matrix                                                     */
  /* ------------------------------------------------------------------ */
  skillGroups: [
    {
      id: "languages",
      title: "Languages",
      icon: "Code",
      blurb: "Typed, production-grade languages across the stack.",
      skills: [
        { name: "Java", core: true },
        { name: "JavaScript (ES6+)", core: true },
        { name: "TypeScript" },
        { name: "Python" },
        { name: "SQL" },
        { name: "HTML5", core: true },
        { name: "CSS3", core: true },
      ],
    },
    {
      id: "frontend",
      title: "Frontend",
      icon: "Layout",
      blurb: "Reusable component systems and progressive web apps.",
      skills: [
        { name: "React.js", core: true },
        { name: "Next.js", core: true },
        { name: "Angular" },
        { name: "Tailwind CSS" },
        { name: "Progressive Web Apps" },
      ],
    },
    {
      id: "backend",
      title: "Backend & Data",
      icon: "Server",
      blurb: "APIs, middleware and data stores that hold up in production.",
      skills: [
        { name: "Spring Boot", core: true },
        { name: "Node.js", core: true },
        { name: "Flask" },
        { name: "REST APIs", core: true },
        { name: "Microservices", core: true },
        { name: "Middleware", core: true },
        { name: "MongoDB", core: true },
        { name: "MySQL", core: true },
      ],
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      icon: "Cloud",
      blurb: "Identity, monitoring and delivery for enterprise systems.",
      skills: [
        { name: "AWS (EC2, S3)" },
        { name: "Google Cloud" },
        { name: "Azure AD B2C", core: true },
        { name: "OAuth / OIDC", core: true },
        { name: "Azure Monitor" },
        { name: "Azure API Manager" },
        { name: "Google Tag Manager", core: true },
        { name: "CI/CD" },
        { name: "Git" },
        { name: "Postman" },
        { name: "Agile / DevOps" },
        { name: "Legacy Modernization (.NET 4.8 → .NET 10)", core: true },
      ],
    },
    {
      id: "ai",
      title: "AI/ML & Computer Vision",
      icon: "Brain",
      blurb: "Applied AI shipped inside real products.",
      skills: [
        { name: "Prompt Engineering", core: true },
        { name: "Model Fine-Tuning", core: true },
        { name: "Conversational AI", core: true },
        { name: "NLP", core: true },
        { name: "Computer Vision", core: true },
        { name: "OpenCV" },
        { name: "Deep Learning / CNNs" },
        { name: "TensorFlow / Keras" },
        { name: "AI-assisted Development (Claude, ChatGPT, Cursor)" },
      ],
    },
    {
      id: "cms",
      title: "Headless CMS & Integrations",
      icon: "Puzzle",
      blurb: "Wiring content, commerce and third-party systems together.",
      skills: [
        { name: "Contentstack", core: true },
        { name: "Delivery / Management SDKs" },
        { name: "Headless CMS", core: true },
        { name: "Salesforce API", core: true },
        { name: "API Orchestration", core: true },
        { name: "Data Mapping", core: true },
        { name: "Google Maps" },
        { name: "Store Locator" },
        { name: "Digital Coupons" },
        { name: "Eagle Eye · Marcatus · Zembula" },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /*  Projects                                                          */
  /* ------------------------------------------------------------------ */
  projects: [
    {
      id: "winn-dixie",
      title: "Winn-Dixie — Enterprise Modernization",
      subtitle: ".NET Framework 4.8 → .NET 10 on headless Contentstack",
      period: "Jul 2026 – Aug 2026",
      context: "Contentstack · Enterprise client engagement",
      categories: ["enterprise"],
      icon: "Building2",
      summary:
        "Modernized an enterprise application from .NET Framework 4.8 to .NET 10 and re-platformed its content onto a headless Contentstack CMS across 20+ page templates.",
      highlights: [
        "Mapped structured JSON from Contentstack SDKs/APIs into frontend models and 25+ reusable UI components.",
        "Integrated and supported 14+ services: Azure AD B2C, Google Maps, Store Locator, Eagle Eye, Marcatus, Zembula, Digital Coupons, Azure API Manager and Azure Monitor.",
        "Led root-cause analysis across CMS, APIs, authentication, middleware, third parties, environments and rendering.",
      ],
      metrics: [
        { value: "14+", label: "integrations" },
        { value: "25+", label: "UI components" },
        { value: "−25%", label: "escaped defects" },
      ],
      stack: [
        ".NET 4.8",
        ".NET 10",
        "Contentstack",
        "Azure AD B2C",
        "OAuth/OIDC",
        "Google Maps",
        "Azure Monitor",
      ],
      links: {},
    },
    {
      id: "bayfc",
      title: "BayFC — Full-Stack Web App",
      subtitle: "Next.js frontend orchestrating CMS, ticketing and social data",
      period: "Apr 2026 – Jun 2026",
      context: "Contentstack · Client engagement",
      categories: ["enterprise"],
      icon: "Layers",
      summary:
        "Built reusable, responsive React/Next.js components powering 12+ dynamic content modules, with Next.js middleware orchestrating data between Contentstack and third-party APIs.",
      highlights: [
        "Integrated Contentstack Delivery and Management SDKs/APIs to fetch, transform and map CMS data into components.",
        "Connected ticketing, match schedules, Instagram and Google Tag Manager.",
        "Reduced component duplication across 15+ pages while resolving cross-layer data-flow and rendering issues.",
      ],
      metrics: [
        { value: "12+", label: "content modules" },
        { value: "15+", label: "pages de-duplicated" },
      ],
      stack: [
        "React",
        "Next.js",
        "Next.js Middleware",
        "Contentstack SDKs",
        "Google Tag Manager",
      ],
      links: {},
    },
    {
      id: "cms-healthcheck-chatbot",
      title: "AI-Powered CMS Healthcheck Chatbot",
      subtitle: "Intelligent technical support for Contentstack",
      period: "Jan 2026 – Mar 2026",
      context: "Contentstack · Applied AI",
      categories: ["ai", "enterprise"],
      icon: "Bot",
      summary:
        "An AI assistant that analyses Contentstack CMS queries and health-check scenarios like a solutions architect — customised with domain knowledge and prompt engineering to give structured guidance instead of generic answers.",
      highlights: [
        "Customised and fine-tuned pre-trained models with CMS domain knowledge, improving response relevance by 35%.",
        "Applied contextual prompting to force structured problem analysis.",
        "Evaluated against 50+ real-world CMS scenarios, lifting troubleshooting accuracy to 85%.",
      ],
      metrics: [
        { value: "−40%", label: "troubleshooting time" },
        { value: "85%", label: "accuracy" },
        { value: "+35%", label: "relevance" },
      ],
      stack: [
        "Prompt Engineering",
        "Model Fine-Tuning",
        "NLP",
        "Contentstack",
        "Next.js",
        "TypeScript",
      ],
      links: {
        repo: "https://github.com/Tejas953/HealthCheck_Bot",
      },
      architecture: {
        overview:
          "A chatbot that reasons about Contentstack-specific problems the way a solutions architect would: it understands the query, grounds itself in CMS domain knowledge, and returns structured troubleshooting guidance rather than generic answers.",
        stages: [
          {
            label: "Input",
            nodes: [
              {
                id: "query",
                label: "User Query",
                kind: "client",
                summary:
                  "A Contentstack-related technical question, troubleshooting scenario, or health-check report to analyse.",
                details: [
                  "Complex CMS queries are the core challenge the bot is designed for.",
                  "The public implementation also accepts uploaded PDF, DOC, DOCX and TXT reports.",
                ],
              },
            ],
          },
          {
            label: "Understanding",
            nodes: [
              {
                id: "nlu",
                label: "Natural Language Understanding",
                kind: "ai",
                summary:
                  "NLP interprets the intent and technical context of the query before any reasoning happens.",
                tech: ["NLP"],
              },
              {
                id: "kb",
                label: "Contentstack Knowledge Base",
                kind: "data",
                summary:
                  "Domain-specific CMS knowledge prepared for the model, so answers reflect how Contentstack actually behaves.",
                details: ["Domain knowledge preparation was an explicit part of the build."],
              },
            ],
          },
          {
            label: "Reasoning",
            nodes: [
              {
                id: "inference",
                label: "Model Inference Layer",
                kind: "ai",
                summary:
                  "A pre-trained model, customised and fine-tuned with CMS knowledge, generates the analysis.",
                tech: ["Pre-trained models", "Fine-tuning"],
              },
              {
                id: "analysis",
                label: "AI-Assisted Technical Analysis",
                kind: "ai",
                summary:
                  "Analytical support loop that feeds back into inference to produce architect-style reasoning.",
              },
            ],
          },
          {
            label: "Guidance",
            nodes: [
              {
                id: "prompting",
                label: "Prompt Engineering",
                kind: "ai",
                summary:
                  "Contextual prompting pushes the model toward structured problem analysis instead of generic responses.",
                details: [
                  "Prompts were iterated against 50+ real-world CMS scenarios.",
                ],
                tech: ["Prompt Engineering"],
              },
            ],
          },
          {
            label: "Generation",
            nodes: [
              {
                id: "response",
                label: "Response & Troubleshooting Guide",
                kind: "ai",
                summary:
                  "Produces a structured troubleshooting guide rather than a free-form answer.",
                details: [
                  "Public implementation returns an overview, section-by-section analysis, key findings, risk areas and recommendations.",
                  "Answers are grounded strictly in the provided context; if something isn't covered, the bot says so.",
                ],
              },
            ],
          },
          {
            label: "Delivery",
            nodes: [
              {
                id: "output",
                label: "Client Output",
                kind: "output",
                summary:
                  "Chat interface that returns the guidance to the support engineer or client.",
              },
            ],
          },
        ],
        decisions: [
          {
            title: "Adapt pre-trained models instead of training from scratch",
            rationale:
              "Customising and fine-tuning existing models with Contentstack domain knowledge delivered a 35% improvement in response relevance without building a model from zero.",
          },
          {
            title: "Prompt engineering as the control surface",
            rationale:
              "Contextual prompting steers the model toward structured problem analysis, which is what separates an architect-style answer from a generic chatbot reply.",
          },
          {
            title: "Grounded answers with guardrails",
            rationale:
              "The public implementation instructs the model to answer strictly from the supplied report and to state when information is missing, protecting against hallucinated troubleshooting advice.",
          },
          {
            title: "Evaluate on real scenarios, then iterate",
            rationale:
              "Responses were scored against 50+ real-world CMS scenarios; prompts, training inputs and contextual knowledge were refined until accuracy reached 85%.",
          },
        ],
        outcomes: [
          "Average troubleshooting time cut by 40%",
          "Response relevance improved by 35%",
          "Troubleshooting accuracy raised to 85% across 50+ scenarios",
          "Repetitive technical-support work automated",
        ],
        diagram: {
          src: "/architecture/cms-healthcheck-chatbot.png",
          alt: "Infographic of the CMS Healthcheck Chatbot: objectives, responsibilities, architectural data flow and technical impact.",
          width: 1408,
          height: 768,
          caption:
            "Original project infographic — challenges, responsibilities, data flow and results.",
        },
      },
    },
    {
      id: "pwa-kit",
      title: "PWA Kit — Headless Commerce Platform",
      subtitle: "Contentstack content × Salesforce commerce data",
      period: "May 2025 – Aug 2025",
      context: "Contentstack · Headless commerce",
      categories: ["enterprise"],
      icon: "Store",
      summary:
        "A responsive React Progressive Web App that merges Contentstack content with Salesforce product data, using a CMS-driven override and fallback mechanism for business-driven personalisation.",
      highlights: [
        "Mapped structured CMS JSON into frontend models and UI for 10+ content types via Delivery/Management SDKs and REST APIs.",
        "Connected Salesforce APIs for product and product-detail data.",
        "Built the override/fallback layer: Contentstack can supplement or replace Salesforce data, and pages stay resilient when external data is incomplete.",
      ],
      metrics: [
        { value: "20+", label: "merchandising rules" },
        { value: "10+", label: "content types" },
      ],
      stack: [
        "React",
        "Contentstack",
        "Salesforce API",
        "REST APIs",
        "JSON",
        "PWA",
      ],
      links: {},
      architecture: {
        overview:
          "A headless-commerce PWA that composes editorial content from Contentstack with product data from Salesforce. A mapping layer normalises both sources into frontend models, and a CMS-driven override/fallback strategy lets business rules personalise — or safely backfill — what shoppers see.",
        stages: [
          {
            label: "Sources",
            nodes: [
              {
                id: "contentstack",
                label: "Contentstack CMS",
                kind: "external",
                summary:
                  "Headless content source. Structured JSON is fetched through the Delivery and Management SDKs and REST APIs.",
                details: ["10+ content types mapped to frontend models."],
                tech: ["Contentstack SDKs", "REST APIs"],
              },
              {
                id: "salesforce",
                label: "Salesforce API",
                kind: "external",
                summary:
                  "Commerce source for product and product-detail data.",
                tech: ["Salesforce API"],
              },
            ],
          },
          {
            label: "Orchestration",
            nodes: [
              {
                id: "mapping",
                label: "Data Mapping & Orchestration Layer",
                kind: "service",
                summary:
                  "Middleware that transforms structured JSON from both systems into frontend-specific models and coordinates data flow between them.",
                details: [
                  "Data flow was analysed and optimised across frontend, CMS and Salesforce.",
                  "Complex data-mapping issues were resolved here, in one layer.",
                ],
                tech: ["Middleware", "JSON"],
              },
            ],
          },
          {
            label: "Business rules",
            nodes: [
              {
                id: "override",
                label: "CMS-Driven Override & Fallback",
                kind: "service",
                summary:
                  "Contentstack data can override or supplement Salesforce product data according to business rules — enabling personalisation and resilient rendering.",
                details: [
                  "Supports 20+ merchandising rules.",
                  "Handles incomplete external data gracefully.",
                ],
              },
            ],
          },
          {
            label: "Experience",
            nodes: [
              {
                id: "frontend",
                label: "PWA Frontend",
                kind: "client",
                summary:
                  "React (JavaScript) Progressive Web App built from reusable, scalable components for dynamic commerce experiences.",
                tech: ["React", "JavaScript", "PWA"],
              },
            ],
          },
        ],
        decisions: [
          {
            title: "Split content and commerce concerns",
            rationale:
              "Salesforce supplies product and commerce data while Contentstack supplies editorial content. Each system does what it is best at, and neither is forced into the other's data model.",
          },
          {
            title: "Map once, in a dedicated layer",
            rationale:
              "SDK and REST payloads are transformed into frontend-specific models in a single orchestration layer, so UI components never depend on raw upstream schemas and integration bugs stay localised.",
          },
          {
            title: "Let the CMS override commerce data",
            rationale:
              "Business teams drive personalisation through content: Contentstack entries can supplement or replace Salesforce data, enabling business-driven merchandising rules.",
          },
          {
            title: "Design for incomplete data",
            rationale:
              "The fallback path fills gaps when external data is missing or partial, so pages still render — resilient integrations instead of brittle ones.",
          },
        ],
        outcomes: [
          "Designed a flexible override strategy across Contentstack and Salesforce",
          "Resolved complex data-mapping issues",
          "Implemented resilient integrations",
          "Personalisation driven by 20+ merchandising rules",
        ],
        diagram: {
          src: "/architecture/pwa-kit.png",
          alt: "Project overview infographic for PWA Kit showing the PWA frontend, Contentstack and Salesforce APIs, the data mapping and orchestration layer, and the override and fallback mechanism.",
          width: 1408,
          height: 768,
          caption:
            "Original project overview — architectural data flow and technical impact.",
        },
      },
    },
    {
      id: "opencv-food-classification",
      title: "OpenCV Food Classification",
      subtitle: "AI-powered food recognition with a real-time web UI",
      period: "Feb 2024 – Apr 2024",
      context: "Eumentis · Machine Learning Internship",
      categories: ["ai"],
      icon: "Utensils",
      summary:
        "An end-to-end food image classifier: OpenCV preprocessing and a deep-learning model behind a Flask REST API, consumed by a React.js frontend for real-time predictions.",
      highlights: [
        "Identifies 15+ food categories at 88% accuracy.",
        "Sub-2-second predictions from upload to result.",
        "Owned the full ML-to-full-stack lifecycle: model integration, database connectivity, API development and testing.",
      ],
      metrics: [
        { value: "88%", label: "accuracy" },
        { value: "<2s", label: "latency" },
        { value: "15+", label: "categories" },
      ],
      stack: [
        "OpenCV",
        "Python",
        "TensorFlow / Keras",
        "Flask",
        "React.js",
        "MongoDB",
      ],
      cover: {
        src: "/architecture/opencv-food-classification.png",
        alt: "OpenCV food classification pipeline and UI mockup",
      },
      links: {},
      architecture: {
        overview:
          "A classical-vision-plus-deep-learning pipeline exposed as a REST service. Images flow from a React upload UI to Flask, through OpenCV preprocessing and a CNN, and back as ranked predictions with confidence scores.",
        stages: [
          {
            label: "Client",
            nodes: [
              {
                id: "ui",
                label: "React.js Upload UI",
                kind: "client",
                summary:
                  "Upload a JPG, PNG or JPEG, hit Predict, and see the predicted class, confidence and top alternatives.",
                tech: ["React.js"],
              },
            ],
          },
          {
            label: "API",
            nodes: [
              {
                id: "api",
                label: "Flask REST API",
                kind: "service",
                summary:
                  "Connects the ML model to the frontend for real-time predictions, returning results in under two seconds.",
                tech: ["Flask", "Python"],
              },
            ],
          },
          {
            label: "Preprocessing",
            nodes: [
              {
                id: "preprocess",
                label: "Image Preprocessing",
                kind: "ai",
                summary:
                  "OpenCV prepares each input image so the classifier receives consistent, model-ready data.",
                tech: ["OpenCV"],
              },
            ],
          },
          {
            label: "Features",
            nodes: [
              {
                id: "features",
                label: "Feature Extraction",
                kind: "ai",
                summary:
                  "Visual features are extracted from the preprocessed image and passed to the network.",
              },
            ],
          },
          {
            label: "Model",
            nodes: [
              {
                id: "cnn",
                label: "CNN Classifier",
                kind: "ai",
                summary:
                  "Deep-learning convolutional network trained to recognise 15+ food categories.",
                details: ["88% classification accuracy."],
                tech: ["TensorFlow / Keras", "Deep Learning"],
              },
            ],
          },
          {
            label: "Classification",
            nodes: [
              {
                id: "classes",
                label: "Ranked Class Probabilities",
                kind: "ai",
                summary:
                  "Candidate classes are ranked with confidence scores, not reduced to a single opaque label.",
              },
            ],
          },
          {
            label: "Output",
            nodes: [
              {
                id: "result",
                label: "Prediction Result",
                kind: "output",
                summary:
                  "The UI shows the predicted class, confidence and the top alternatives.",
              },
              {
                id: "db",
                label: "Database",
                kind: "data",
                summary:
                  "Application data is persisted behind the API (MongoDB in the project architecture).",
                tech: ["MongoDB"],
              },
            ],
          },
        ],
        decisions: [
          {
            title: "Classical preprocessing before deep learning",
            rationale:
              "OpenCV normalises input images first, so the CNN sees consistent data regardless of how the photo was taken.",
          },
          {
            title: "ML behind a REST boundary",
            rationale:
              "Exposing the model through Flask lets the React UI and the model evolve independently, and keeps predictions real-time at under two seconds.",
          },
          {
            title: "Show confidence, not just a label",
            rationale:
              "Returning ranked predictions with percentages makes the model's certainty visible and gives users alternatives when the top guess is wrong.",
          },
        ],
        outcomes: [
          "88% accuracy across 15+ food categories",
          "Real-time predictions in under 2 seconds",
          "Full lifecycle ownership: model integration, database connectivity, API development, testing",
        ],
        diagram: {
          src: "/architecture/opencv-food-classification.png",
          alt: "Pipeline diagram from input image through OpenCV preprocessing, feature extraction, a CNN and classification to output, plus a mock-up of the Food Classifier UI.",
          width: 1536,
          height: 1024,
          caption:
            "Original diagram — pipeline from input image to prediction, plus UI mock-up.",
        },
      },
    },
    {
      id: "criminal-detection",
      title: "Real-Time Threat & Knife-Attack Detection",
      subtitle: "Deep learning and computer vision for public-space safety",
      period: "Feb 2024 – Mar 2024",
      context: "Smiths Detection Hackathon · 6-member team",
      categories: ["ai", "hackathon"],
      icon: "Camera",
      summary:
        "A real-time CCTV surveillance system that detects knives and flags suspicious or violent activity in public spaces, built end to end from model to monitoring UI.",
      highlights: [
        "90% detection accuracy on real-time object detection and activity monitoring.",
        "Automated analysis across 10+ camera feeds.",
        "Won 1st Prize out of 50+ teams at the Smiths Detection Hackathon.",
      ],
      metrics: [
        { value: "90%", label: "accuracy" },
        { value: "10+", label: "camera feeds" },
        { value: "1st", label: "of 50+ teams" },
      ],
      stack: [
        "Deep Learning",
        "Computer Vision",
        "Flask",
        "React.js",
        "MongoDB Atlas",
      ],
      award: "1st Prize · Smiths Detection Hackathon",
      cover: {
        src: "/architecture/criminal-detection.png",
        alt: "Real-time threat detection concept art with detection bounding boxes",
      },
      links: {},
      architecture: {
        overview:
          "An end-to-end pipeline that turns raw CCTV footage into actionable flags: detect people and knives, track activity across frames, raise an anomaly flag, then persist and display it through a Flask API, MongoDB Atlas and a React frontend.",
        stages: [
          {
            label: "Ingest",
            nodes: [
              {
                id: "cctv",
                label: "CCTV Camera Feeds",
                kind: "external",
                summary:
                  "Live video from 10+ cameras is analysed automatically for safety and security use cases.",
              },
            ],
          },
          {
            label: "Detection",
            nodes: [
              {
                id: "detect",
                label: "Object Detection",
                kind: "ai",
                summary:
                  "Deep-learning computer vision detects people and knives in each frame in real time.",
                details: ["90% detection accuracy."],
                tech: ["Deep Learning", "Computer Vision"],
              },
            ],
          },
          {
            label: "Analysis",
            nodes: [
              {
                id: "tracking",
                label: "Tracking & Activity Monitoring",
                kind: "ai",
                summary:
                  "Detected subjects are tracked across frames so activity — not just single frames — can be assessed.",
              },
            ],
          },
          {
            label: "Alerting",
            nodes: [
              {
                id: "anomaly",
                label: "Anomaly Flag",
                kind: "ai",
                summary:
                  "Knives and potentially violent or suspicious activity are flagged for operators.",
              },
            ],
          },
          {
            label: "Backend & storage",
            nodes: [
              {
                id: "flask",
                label: "Flask Backend",
                kind: "service",
                summary:
                  "Serves detection results from the model pipeline to the frontend.",
                tech: ["Flask", "Python"],
              },
              {
                id: "mongo",
                label: "MongoDB Atlas",
                kind: "data",
                summary: "Cloud database persisting detection events.",
                tech: ["MongoDB Atlas"],
              },
            ],
          },
          {
            label: "Presentation",
            nodes: [
              {
                id: "frontend",
                label: "React.js Frontend",
                kind: "client",
                summary:
                  "Monitoring interface that surfaces detections and flags to security operators.",
                tech: ["React.js"],
              },
            ],
          },
        ],
        decisions: [
          {
            title: "Detect, track, then flag",
            rationale:
              "Separating detection from tracking and anomaly flagging means the system reasons about behaviour over time rather than reacting to a single frame.",
          },
          {
            title: "Real-time first",
            rationale:
              "The pipeline is built for live analysis of many camera feeds at once, which is what makes it usable for public-space safety rather than after-the-fact review.",
          },
          {
            title: "Clear separation of ML, API and UI",
            rationale:
              "Flask, MongoDB Atlas and React.js keep the model, persistence and monitoring interface independently deployable — and let a 6-member team work in parallel.",
          },
        ],
        outcomes: [
          "90% detection accuracy",
          "Automated analysis across 10+ camera feeds",
          "1st Prize out of 50+ teams at the Smiths Detection Hackathon",
        ],
        diagram: {
          src: "/architecture/criminal-detection.png",
          alt: "Concept visual of a CCTV monitoring screen with person, tracking and anomaly detections and the project's technology stack.",
          width: 1200,
          height: 627,
          caption: "Original project visual — detection overlay and stack summary.",
        },
      },
    },
    {
      id: "arriva",
      title: "Arriva — AI-Powered Railway Travel Platform",
      subtitle: "Ministry of Railways problem statement · Smart India Hackathon 2023",
      period: "Aug 2023 – Dec 2023",
      context: "Smart India Hackathon · 6-member team",
      categories: ["ai", "hackathon"],
      icon: "TrainFront",
      summary:
        "An AI-powered travel companion for railway passengers — real-time updates, multilingual assistance and intelligent operations support, on a secure microservices architecture.",
      highlights: [
        "Multilingual translation engine, AI chatbot and real-time passenger notifications.",
        "Combined geospatial services with a secure, scalable microservices architecture and DevOps practices.",
        "Achieved All-India Rank 1, outperforming 200+ teams nationwide.",
      ],
      metrics: [
        { value: "#1", label: "All-India Rank" },
        { value: "200+", label: "teams outperformed" },
      ],
      stack: ["React.js", "NLP", "Microservices", "Geospatial", "DevOps"],
      award: "All-India Rank 1 · SIH 2023",
      cover: {
        src: "/architecture/arriva-railway.jpg",
        alt: "Arriva railway travel platform capabilities: AI chatbot, translation engine, mobile app and live updates",
      },
      links: {},
      architecture: {
        overview:
          "A passenger-facing React.js app backed by independent microservices: an AI chatbot for assistance, a translation engine for multilingual support, and a geospatial live-updates service — all on a secure, scalable, DevOps-driven platform.",
        stages: [
          {
            label: "Passenger surface",
            nodes: [
              {
                id: "app",
                label: "Cross-Platform App",
                kind: "client",
                summary:
                  "React.js application that gives passengers a single place for assistance, translation and live journey updates.",
                tech: ["React.js"],
              },
            ],
          },
          {
            label: "Passenger services",
            nodes: [
              {
                id: "chatbot",
                label: "AI Chatbot",
                kind: "ai",
                summary:
                  "Passenger assistance powered by NLP — answers questions and guides intelligent operations support.",
                tech: ["NLP"],
              },
              {
                id: "translation",
                label: "Translation Engine",
                kind: "ai",
                summary:
                  "Multilingual support so passengers can use the platform in their own language.",
              },
              {
                id: "live",
                label: "Live Updates",
                kind: "service",
                summary:
                  "Real-time passenger notifications, powered by geospatial services.",
                tech: ["Geospatial services"],
              },
            ],
          },
          {
            label: "Platform",
            nodes: [
              {
                id: "platform",
                label: "Microservices & DevOps",
                kind: "service",
                summary:
                  "Secure, scalable microservices architecture with DevOps practices supporting intelligent passenger assistance.",
                tech: ["Microservices", "DevOps"],
              },
            ],
          },
        ],
        decisions: [
          {
            title: "One capability, one service",
            rationale:
              "Chatbot, translation and live updates are separate microservices, so each can scale, fail and ship independently of the others.",
          },
          {
            title: "Multilingual from the start",
            rationale:
              "Translation is a first-class engine rather than an afterthought, which matters for a passenger base spanning many languages.",
          },
          {
            title: "Location-aware notifications",
            rationale:
              "Geospatial services feed the live-updates capability so passenger notifications can be tied to where things are happening.",
          },
        ],
        outcomes: [
          "All-India Rank 1 at Smart India Hackathon 2023",
          "Outperformed 200+ competing teams nationwide",
          "Delivered by a 6-member multidisciplinary team",
        ],
        diagram: {
          src: "/architecture/arriva-railway.jpg",
          alt: "Arriva capabilities overview: AI Chatbot, Translation Engine, Mobile App and Live Updates.",
          width: 1200,
          height: 627,
          caption:
            "Original project visual — the four capabilities of the Arriva platform.",
        },
      },
    },
  ],

  /* ------------------------------------------------------------------ */
  /*  Experience timeline                                               */
  /* ------------------------------------------------------------------ */
  experience: [
    {
      id: "contentstack",
      role: "Associate Software Engineer",
      company: "Contentstack",
      location: "Pune, India",
      period: "Jan 2025 – Present",
      type: "Full-time",
      icon: "Rocket",
      bullets: [
        "Drive an enterprise-scale legacy modernization (Winn-Dixie): migrating application logic from .NET Framework 4.8 to .NET 10 and re-platforming content onto Contentstack across 20+ page templates.",
        "Own integration and troubleshooting for 14+ third-party systems — Azure AD B2C, OAuth/OIDC, Google Maps, Store Locator, Google Tag Manager, digital coupons, Azure Monitoring — cutting recurring integration defects by 30%.",
        "Engineered reusable React/Next.js components for BayFC (Contentstack, ticketing, match schedules, Instagram, GTM), reducing component duplication across 15+ pages.",
        "Delivered a PWA on Contentstack using Delivery/Management SDKs, mapping CMS data to frontend models for 10+ content types.",
        "Connected Salesforce APIs for product data and built a Contentstack override/fallback mechanism enabling 20+ merchandising rules.",
        "Designed and fine-tuned an AI CMS support chatbot, cutting average troubleshooting time by 40%.",
        "Resolve 15+ business-critical integration issues per quarter through end-to-end root-cause analysis across frontend, backend, CMS and third-party APIs.",
      ],
      stack: [
        "React",
        "Next.js",
        "Contentstack",
        ".NET 10",
        "Azure AD B2C",
        "Salesforce API",
        "Prompt Engineering",
      ],
      milestones: [
        {
          period: "Jan 2025",
          title: "Joined as Associate Software Engineer",
          detail:
            "Hands-on training across headless CMS, React/Next.js and REST APIs.",
        },
        {
          period: "May – Aug 2025",
          title: "PWA Kit",
          detail:
            "Shipped a headless commerce PWA with Salesforce integration and CMS-driven fallback.",
        },
        {
          period: "Jan – Mar 2026",
          title: "AI CMS Healthcheck Chatbot",
          detail:
            "Designed and fine-tuned an AI support assistant; −40% troubleshooting time.",
        },
        {
          period: "Apr – Jun 2026",
          title: "BayFC",
          detail:
            "Built reusable Next.js components and middleware for a ticketing and content site.",
        },
        {
          period: "Jul – Aug 2026",
          title: "Winn-Dixie modernization",
          detail:
            "Enterprise .NET 4.8 → .NET 10 migration with 14+ integrations.",
        },
      ],
    },
    {
      id: "eumentis",
      role: "Machine Learning Intern",
      company: "Eumentis",
      location: "Pune, India",
      period: "Feb 2024 – Apr 2024",
      type: "Internship",
      icon: "Cpu",
      bullets: [
        "Built a food image classification system using OpenCV and deep learning, identifying 15+ food categories with 88% accuracy.",
        "Created Flask REST APIs connected to a React.js frontend for real-time predictions with sub-2-second latency.",
        "Worked across the ML and full-stack lifecycle: model integration, MySQL connectivity, API development and application testing.",
      ],
      stack: ["OpenCV", "Deep Learning", "Flask", "React.js", "MySQL"],
    },
    {
      id: "smiths",
      role: "Full-Stack Developer",
      company: "Smiths Detection",
      location: "Pune, India",
      period: "Feb 2024 – Mar 2024",
      type: "Hackathon",
      icon: "Camera",
      bullets: [
        "Built a real-time CCTV surveillance system using AI/ML and computer vision to detect knives and flag potential violent activity in public spaces — 90% detection accuracy.",
        "Implemented real-time object detection and activity monitoring, automating analysis across 10+ camera feeds.",
        "Won 1st Prize out of 50+ teams at the Smiths Detection Hackathon.",
      ],
      stack: ["Computer Vision", "Deep Learning", "Flask", "React.js", "MongoDB Atlas"],
    },
    {
      id: "sih",
      role: "Full-Stack Developer",
      company: "Smart India Hackathon",
      location: "Dindigul, India",
      period: "Aug 2023 – Dec 2023",
      type: "Hackathon",
      icon: "Trophy",
      bullets: [
        "Built a solution for a Ministry of Railways problem statement in a 6-member multidisciplinary team: multilingual translation, chatbot support and real-time passenger notifications.",
        "Achieved All-India Rank 1 at Smart India Hackathon 2023, outperforming 200+ competing teams nationwide.",
      ],
      stack: ["React.js", "NLP", "Microservices"],
    },
  ],

  /* ------------------------------------------------------------------ */
  /*  Achievements & certifications                                     */
  /* ------------------------------------------------------------------ */
  achievements: [
    {
      id: "sih-2023",
      title: "Winner — All-India Rank 1",
      event: "Smart India Hackathon 2023",
      result: "AIR 1",
      detail:
        "Ministry of Railways problem statement. Outperformed 200+ competing teams nationwide with a 6-member multidisciplinary team.",
      year: "2023",
      icon: "Trophy",
      featured: true,
    },
    {
      id: "smiths-hackathon",
      title: "Winner — 1st Prize",
      event: "Smiths Detection Hackathon",
      result: "1st of 50+",
      detail:
        "Real-time AI/ML CCTV surveillance system detecting knives and flagging violent activity in public spaces.",
      year: "2024",
      icon: "Medal",
    },
    {
      id: "vois",
      title: "Top 30 Finalist",
      event: "Vois International Hackathon",
      result: "Top 30",
      detail: "Selected among the top 30 finalists in an international hackathon.",
      icon: "Award",
    },
  ],
  certifications: [
    {
      id: "aws",
      title: "AWS Cloud Foundation",
      issuer: "Amazon Web Services",
      icon: "Cloud",
    },
    {
      id: "gcp",
      title: "Google Cloud Career Path Profile Certification",
      issuer: "Google Cloud",
      icon: "Cloud",
    },
  ],
};
