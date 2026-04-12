export interface Project {
  slug: string;
  id: number;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  fullDescription: string;
  tools: string[];
  role: string;
  outcome: string;
  image: string | null;
  color: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "aakaar-karystos",
    id: 1,
    title: "AAKAAR – Mental Wellness & Urban Design",
    category: "Urban Design",
    year: "2023–2024",
    shortDescription:
      "Redevelopment of Karystos Promenade, Greece as a sustainable public space enhancing mental well-being and community engagement.",
    fullDescription:
      "Investigated the redevelopment of Karystos Promenade as a sustainable public space, applying RIBA Stages 1–3. Redesigned the promenade to enhance mental well-being and community engagement, integrating Revit BIM, Rhino Grasshopper, and AI-assisted urban simulation tools. Incorporated green infrastructure, shaded walkways, and interactive spaces to foster inclusivity and ecological resilience. Conducted site analysis using QGIS, Climate Consultant, and AI predictive pedestrian modelling to align designs with user needs. Delivered high-quality visualisations in Revit, Lumion, and Rhino, supported by DiRoots ProSheets for drawing exports.",
    tools: ["Revit BIM", "Rhino + Grasshopper", "QGIS", "Climate Consultant", "Lumion", "AI Simulation", "DiRoots"],
    role: "Lead Designer & BIM Coordinator",
    outcome: "RIBA Stage 1–3 compliant sustainable urban design with AI-integrated pedestrian flow analysis",
    image: "https://picsum.photos/seed/promenade/800/600",
    color: "#1a1a1a",
    featured: true,
  },
  {
    slug: "pmay-mcdm",
    id: 2,
    title: "PMAY-U Cost & Time Optimisation",
    category: "Research",
    year: "2019–2021",
    shortDescription:
      "Time and cost optimisation study of PMAY-Urban projects applying GRA, WASPAS, and MOORA decision-making frameworks.",
    fullDescription:
      "Examined time and cost optimisation in PMAY-U construction projects using BIM-based project monitoring workflows in Silicon City, Indore. Applied Multi-Criteria Decision-Making (MCDM) frameworks alongside AI-supported Power BI dashboards to evaluate delays and overruns. Comparative analysis of GRA (Grey Relational Analysis), WASPAS, and MOORA methods integrated into Revit-based project schedules linked to Primavera P6. Found WASPAS and MOORA effective in precise decision-making. Supported on-budget and on-schedule delivery of urban housing under the PMAY-U scheme aligned with RIBA Stage 6 post-construction evaluation.",
    tools: ["Power BI", "Primavera P6", "Revit BIM", "MCDM Analysis", "Data Analytics", "MS Excel"],
    role: "Research Lead & BIM Analyst",
    outcome: "Published MCDM framework applied to reduce project delivery delays by 18% across case study projects",
    image: "https://picsum.photos/seed/cityplan/800/600",
    color: "#141414",
    featured: true,
  },
  {
    slug: "magarkheda-green-village",
    id: 3,
    title: "Magarkheda Green Village Masterplan",
    category: "Urban Design",
    year: "2017–2018",
    shortDescription:
      "Proposed Magarkheda Village as a Green Village model with BIM-based planning and AI-supported environmental simulations.",
    fullDescription:
      "Proposed Magarkheda Village as a Green Village model incorporating BIM-based planning workflows. Advocated for sustainable practices through AI-supported environmental simulations and Revit visualisation. Enhanced infrastructure with eco-friendly solutions including rainwater harvesting and solar power. Used detailed surveys integrated into Revit CDE environments for planning and documentation. Applied advanced scheduling in Primavera P6 linked with Revit 4D models. Aligned design outputs with RIBA Stages 1–2.",
    tools: ["Revit BIM", "Primavera P6", "4D BIM", "SuDS", "Environmental Simulation", "AutoCAD"],
    role: "Design Lead & Sustainability Coordinator",
    outcome: "Comprehensive green village masterplan with sustainable infrastructure framework and 4D BIM model",
    image: "https://picsum.photos/seed/greenvillage/800/600",
    color: "#181818",
    featured: true,
  },
  {
    slug: "xfigura-ai-explorations",
    id: 4,
    title: "xFigura AI Design Explorations",
    category: "AI & Computational",
    year: "2025–Present",
    shortDescription:
      "AI-driven architectural explorations at xFigura testing next-generation design ecosystems for the global architecture community.",
    fullDescription:
      "Collaborating with global designers, strategists, and AI researchers to develop next-generation design workflows using AI Models Nano Banana, Seedream, Qwen, Hunyuan, and more. Producing AI-driven architectural and conceptual explorations, testing the capabilities of xFigura's design ecosystem through real projects and weekly challenges. Creating design narratives, visual studies, and parametric iterations that demonstrate the potential of integrating AI with BIM and digital fabrication pipelines. Exploring cross-platform workflows between AI render engines, 3D modelling tools, and BIM documentation systems.",
    tools: ["xFigura", "ComfyUI", "Midjourney", "RunwayML", "Kling AI", "LumaAI", "Rhino + Grasshopper", "Revit BIM"],
    role: "Architectural Creative Partner",
    outcome: "Ongoing — recognised as global competition winner by CEO George Guida at Futurly",
    image: null,
    color: "#121212",
    featured: false,
  },
  {
    slug: "sapphire-infrastructures",
    id: 5,
    title: "The Sapphire Infrastructures — Multi-project Delivery",
    category: "BIM & Construction",
    year: "2021–2023",
    shortDescription:
      "Led multi-disciplinary design and delivery of residential, commercial, industrial, and healthcare projects as Co-founder & Design Head.",
    fullDescription:
      "Managed correspondence and built relationships with key project stakeholders including architects, engineers, contractors, and suppliers. Proactively managed construction projects achieving all quality, schedule, budget, and safety targets, completing projects on average 20% faster than industry standards. Incorporated Revit BIM workflows (LOD 300–500), pyRevit automation scripts, and DiRoots plugins to reduce conflicts, accelerate documentation, and decrease delivery durations. Prepared comprehensive progress reports improving client satisfaction. Managed quotations, invoicing, and RIBA Plan of Work Stages 2–5.",
    tools: ["Revit BIM", "pyRevit", "DiRoots", "BIMLogiq", "AutoCAD", "RIBA Stages 2–5", "Primavera P6"],
    role: "Co-founder & Design Head",
    outcome: "Delivered 15+ projects across residential, commercial, industrial, and healthcare sectors — 20% faster than industry average",
    image: null,
    color: "#161616",
    featured: false,
  },
  {
    slug: "js-infrastructures-civil",
    id: 6,
    title: "JS Infrastructures — Civil Design",
    category: "BIM & Construction",
    year: "2021",
    shortDescription:
      "Engineering drawings and BIM-based quantity take-offs for civil infrastructure including drainage, utilities, and transportation.",
    fullDescription:
      "Prepared engineering drawings of high quality in AutoCAD and Revit, reducing revision cycles through increased initial accuracy and compliance with building regulation standards. Performed quantity take-offs for civil projects, enhancing material procurement efficiency and reducing waste by 20% using BIM-based estimation workflows and DiRoots TableGen plugin. Collaborated on multi-disciplinary projects including site development, wetland restoration, drainage, utilities, and transportation — completed 15% more efficiently than previous projects. Coordinated with supply chain to optimise procurement and delivery schedules with AI-assisted workflows.",
    tools: ["AutoCAD", "Revit BIM", "DiRoots TableGen", "BIMLogiq", "Drainage Design", "RIBA Stage 3"],
    role: "Civil Designer",
    outcome: "Reduced material waste by 20% and improved drawing accuracy through BIM-based quantity take-offs",
    image: null,
    color: "#1c1c1c",
    featured: false,
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const getAllCategories = () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
