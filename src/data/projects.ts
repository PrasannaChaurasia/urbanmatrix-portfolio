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
    slug: "resilient-nexus",
    id: 1,
    title: "The Resilient Nexus — Carbon-Zero Kinetic City",
    category: "AI & Computational",
    year: "2025",
    shortDescription:
      "A carbon-zero kinetic city concept merging parametric architecture, AI-powered workflows, and adaptive urban systems — recognised at City Futures Workshop by xFigura & Futurly.",
    fullDescription:
      "The Resilient Nexus envisions a carbon-zero city designed to adapt, respond, and thrive in a climate-uncertain future. It merges parametric architecture, kinetic design strategies, and AI-powered workflows to create an urban ecosystem that is resilient, sustainable, and inspiring. Every tower is conceived as a living organism — façades dynamically adapt to solar orientation, prevailing winds, and seasonal changes, regulating comfort naturally. Parametric design ensures performance optimisation: porous high-rises channel breezes, green terraces filter air and harvest rainwater, while vertical farms and energy towers close the loop where waste becomes energy. Mobility flows through multi-layered networks: autonomous electric transit at ground, pedestrian-prioritised skywalks above, and kinetic bridges flexing in response to shifting crowds. At the civic scale, landscaped boulevards, biodiversity corridors, and cultural plazas weave social life into ecological resilience. Produced through xFigura AI-driven pipelines — concept generation, architectural style iterations, final image outputs, and video stylisation — then developed through RIBA Stages 2–4 with annotated tower elevations, floor plan studies, and BIM-informed coordinated documentation.",
    tools: ["xFigura", "Rhino", "Revit BIM", "D5 Render", "Enscape", "Flux Kontext", "Runway Gen 4.0", "Kling AI", "Google Veo", "Rodin 3D"],
    role: "Architectural Creative Partner — AI Design Lead",
    outcome: "Global competition winner — recognised by George Guida, CEO xFigura / Futurly, at City Futures AI Workshop 2025",
    image: "/images/projects/resilient-nexus-hero.png",
    color: "#0d1a0d",
    featured: true,
  },
  {
    slug: "aeon-flux",
    id: 2,
    title: "Aeon Flux Pavilion — Organic Parametric Architecture",
    category: "AI & Computational",
    year: "2025",
    shortDescription:
      "A biomorphic leisure pavilion emerging from a dialogue between AI-driven ideation and human spatial logic — fluid contours, organic geometry, and cinematic interior experience.",
    fullDescription:
      "Aeon Flux Pavilion is a digitally conceived architectural prototype that embodies the essence of continuous flow, organic shaping, and futuristic living. Emerging from a dialogue between AI-driven ideation and human spatial logic, the design champions fluidity in form and flexibility in function. Inspired by Mäkinen-generated morphologies and sculptural AI forms, the undulating surfaces, tilted edges, and curving sculptural column give rise to dynamic light play and layered arches. The space evokes serenity, blending modern interiors with nature framing the fjord beyond. The concept developed through Midjourney concept generation, followed by 3D modelling in Autodesk Maya, then refined through Rhino and BIM workflows. Key aspects: natural elements, form & flow, elegance & serenity, harmony & proportion. Materiality: glass, smooth white surfaces. The result is a tropical leisure environment — blending architecture, nature, and technology into one harmonious shell.",
    tools: ["Midjourney", "Autodesk Maya", "Rhino", "xFigura", "Futurly", "BIM Workflows", "D5 Render"],
    role: "Architectural Designer — AI & Parametric Lead",
    outcome: "Featured project at MC Studio London x Futurly 2025 — Miscellaneous Category, Project 08",
    image: "/images/projects/aeon-flux-hero.png",
    color: "#0a0f1a",
    featured: true,
  },
  {
    slug: "veridian-elan",
    id: 3,
    title: "Veridian Elan — Verdant Sophistication in the Sky",
    category: "BIM & Sustainable",
    year: "2025",
    shortDescription:
      "A visionary high-rise residential enclave where organic modernism intersects with urban sophistication — data-driven form, LEED & IFC Edge certified sustainable strategy.",
    fullDescription:
      "Veridian Elan is a visionary high-rise residential enclave where organic modernism intersects with urban sophistication. Designed as a sanctuary in the sky, the project embodies an elevated lifestyle both literally and architecturally — defined by clean volumetric geometries, thoughtful interior curation, and biophilic elegance. The buildings are strategically placed to form a U-shaped urban courtyard that merges landscape, community, and skyline views — transforming architecture into a liveable sculpture. Form development was guided by EvoMass algorithmic processes — performance-based building massing exploration using subtraction for courtyards, distortion, and extrusion for balconies. Sustainable design strategy: vegetation for microclimate benefits, passive heating & cooling through orientation, natural materials and modular shading systems, evaporative cooling, and facade optimisation following LEED and IFC Edge criteria. Spatial planning employs centralised lifts and staircases as core vertical movement with colour-coded zone differentiation. Orthographic elevations document Tower A and Tower B from all four aspects. Interior concept: Airey Sustainable Interior — 'Sunlit Harmony' theme integrating biophilic materials, warm tones, and natural light maximisation.",
    tools: ["Revit BIM", "AutoCAD", "EvoMass", "Lumion", "Photoshop", "Enscape", "D5 Render", "LogoSheils"],
    role: "BIM Architect — Design, Sustainability & Documentation Lead",
    outcome: "BIM Professional Certification project — eligible for LEED and IFC Edge sustainable certification",
    image: "/images/projects/veridian-elan-hero.png",
    color: "#0f1a0f",
    featured: true,
  },
  {
    slug: "flexing-folds",
    id: 4,
    title: "Flexing Folds — Neimeyer's Avenue Public Space",
    category: "Concept Design",
    year: "2025",
    shortDescription:
      "A Neimeyer-inspired museum and public space challenging contemporary architecture — dynamic curved forms, free-flowing spaces, and minimum ornamentation fused with human-body curves.",
    fullDescription:
      "Flexing Folds challenges monolithic style contemporary architecture. Conceived as a threshold not as a receptacle but as a reconfiguration for the flow of life which they are to serve, the concept is flexible enough to create a space fit to absorb the dynamic features of the modern life. The principal subject is the story of architect Oscar Niemeyer — depicting his design aspects and approach towards architecture. Form inspiration: abstract human curves. Philosophy: beauty prevailing over the limitations of constructive logic. The built form uses a concave shape depicting a welcoming feeling, with ramped levels, minimum ornamentation, and free-flowing spaces. Nature is integrated into the building through the architectural envelope. Galleries and their significance: outdoor and indoor exhibitions, architecture of space, a living of the curves, hallway in motion, gallery of documentaries. The museum project features geometric consistency in its architecture, integrating built forms, murals, textures, and landscaping — creating a cohesive design experience.",
    tools: ["Rhino", "AutoCAD", "D5 Render", "Photoshop", "SketchUp", "BIM Workflows"],
    role: "Lead Architectural Designer",
    outcome: "Architectural portfolio project — RIBA Stage 2 concept design with full plan, section, elevation documentation",
    image: "/images/projects/flexing-folds-hero.png",
    color: "#1a1200",
    featured: false,
  },
  {
    slug: "tod-mixed-use",
    id: 5,
    title: "Mixed-Use TOD Development — Transit Gateway",
    category: "Concept Design",
    year: "2025",
    shortDescription:
      "A transit-oriented mixed-use development creating an active public realm with a central pedestrian spine connecting urban edges, balancing landscape and natural enclosure.",
    fullDescription:
      "The ideology of this project was to create an active public realm with a central pedestrian spine connecting the edges of the site with the metro station. The main goal was to design a building with balance between urban landscape and the natural environment. To do so, an open urban corridor to run in the site acting as a courtyard and an open space for recreational and had space for the shoppers and the residential and commercial spaces are divided for a free movement of both functions. The site is located in sector II, Dwarka, New Delhi — falls within Part Zone II forming an area. Well connected on a network of public transport with maximum density of surrounding built fabric. Site inferences: site lacks vegetation; opportunity to respond to the existing network of greens surrounding the site; opportunity for a character considering the various constraints on site. Building height and strategy: G to 18M — design 5 floors as proposed. Retaining existing vegetation of the site reduces the energy required to cool residences.",
    tools: ["Revit BIM", "Rhino", "AutoCAD", "D5 Render", "QGIS", "Climate Consultant", "Lumion"],
    role: "Lead Architectural Designer & Urban Planner",
    outcome: "Architectural portfolio project — site analysis, concept design, and full-resolution render documentation",
    image: "/images/projects/tod-hero.png",
    color: "#0f1018",
    featured: false,
  },
  {
    slug: "luminara",
    id: 6,
    title: "Luminara — Paradigm Urban Living",
    category: "Concept Design",
    year: "2025",
    shortDescription:
      "A parametric urban living concept exploring the evolution from modernism to parametricism — modular facade systems, butterfly effect massing, and non-linear structural thinking.",
    fullDescription:
      "Luminara explores the duality of architecture: the intangible journey from modernism in 1950 to the era of parametricism in 2008, with chaos theory as a critical bridge. The parametric approach expects most people today to use products that transition from CAD to BIM, from simple computer-aided design to complex architectural programs — digital architecture is close ahead if this pace continues. The tangible: modular design and standardisation represent the tangible legacies of modernism, where efficiency and uniformity governed construction of forms. On the other side, the intangible realm explores human interactions with architecture through complex systems — supply chains translated into actionable insights, fostering solutions that respond dynamically to evolving needs. The balance between structured systems and responsive problem-solving forms the core of modern architectural ideation. Facade system: geometric tower evolution from box to part of the box, duplication, tower — simple frameworks for glass panels, positioning of multiple frameworks, merging 3D lonely facade and work frame panels as final outcome.",
    tools: ["Rhino", "Revit BIM", "AutoCAD", "Photoshop", "D5 Render", "Parametric Modelling"],
    role: "Lead Parametric Designer",
    outcome: "Architectural portfolio project — parametric facade and massing exploration with MVRDV conceptual framework",
    image: "/images/projects/luminara-hero.png",
    color: "#1a0a1a",
    featured: false,
  },
  {
    slug: "chogala-resort",
    id: 7,
    title: "Chogala Restaurant cum Resort",
    category: "Built Work",
    year: "2021",
    shortDescription:
      "Individual end-to-end delivery of a 15,000 sq.ft. commercial resort — from concept design through to site completion, managing all contractor disciplines.",
    fullDescription:
      "Individual project encompassing complete architectural design, cost estimation, labour management, material selection, procurement, 3D modelling and visualisation for a 15,000 sq.ft. commercial resort. Managed the full contractor ecosystem — civil, electrical, plumbing, carpentry, fabrication, ACP/HCP/fluted panel installation — keeping all disciplines on a unified programme. Client reported a 125% boost in consumer reach attributed directly to the design outcome and spatial atmosphere. The project fundamentally developed skills in multi-trade coordination, procurement strategy, and construction management from scratch through to completion.",
    tools: ["AutoCAD", "Revit BIM", "3D Visualisation", "Cost Estimation", "Site Supervision", "Primavera P6"],
    role: "Individual Project Lead — Design, Procurement & Construction Management",
    outcome: "Completed — client reported 125% increase in consumer reach post-opening",
    image: "/images/projects/chogala-hero.png",
    color: "#1a0f00",
    featured: false,
  },
  {
    slug: "couchpuffy-showroom",
    id: 8,
    title: "Couchpuffy Furniture Experience Showroom",
    category: "Built Work",
    year: "2022",
    shortDescription:
      "25,000 sq.ft. premium furniture showroom delivered with 20+ bespoke partition designs, 50+ labourers, and continuous 24/7 site operations under tight time constraints.",
    fullDescription:
      "Complete architectural and interior design delivery of a 25,000 sq.ft. furniture experience showroom. Responsible for drafting architectural floor plans, interior working drawings, exterior landscaping, electrical layouts, and fabrication drawings. Executed complete site supervision including selection and procurement of all interior and exterior materials. Managed a workforce of 50+ labourers across rotating shifts, maintaining continuous 24/7 operations to meet the project deadline without a single day off. Dealt with 20+ different partition design types — each with distinct material selection, budget requirements, and fabrication constraints — all resolved under time and cost pressure.",
    tools: ["AutoCAD", "Revit BIM", "3D Visualisation", "Cost Estimation", "Material Procurement", "Site Supervision"],
    role: "Design Lead & Site Supervisor — Architectural, Interior & Execution",
    outcome: "Completed on schedule — full 25,000 sq.ft. delivered with 50+ labour team across 24/7 operations",
    image: "/images/projects/couchpuffy-hero.png",
    color: "#0f0f1a",
    featured: false,
  },
  {
    slug: "aakaar-karystos",
    id: 9,
    title: "AAKAAR – Mental Wellness & Urban Design",
    category: "Urban Design",
    year: "2023–2024",
    shortDescription:
      "Redevelopment of Karystos Promenade, Greece as a sustainable public space enhancing mental well-being and community engagement.",
    fullDescription:
      "Investigated the redevelopment of Karystos Promenade as a sustainable public space, applying RIBA Stages 1–3. Redesigned the promenade to enhance mental well-being and community engagement, integrating Revit BIM, Rhino parametric design tools, and AI-assisted urban simulation. Incorporated green infrastructure, shaded walkways, and interactive spaces to foster inclusivity and ecological resilience. Conducted site analysis using QGIS, Climate Consultant, and AI predictive pedestrian modelling to align designs with user needs. Delivered high-quality visualisations in Revit, Lumion, and Rhino, supported by DiRoots ProSheets for drawing exports.",
    tools: ["Revit BIM", "Rhino", "QGIS", "Climate Consultant", "Lumion", "AI Simulation", "DiRoots"],
    role: "Lead Designer & BIM Coordinator",
    outcome: "RIBA Stage 1–3 compliant sustainable urban design with AI-integrated pedestrian flow analysis",
    image: null,
    color: "#1a1a1a",
    featured: false,
  },
  {
    slug: "pmay-mcdm",
    id: 10,
    title: "PMAY-U Cost & Time Optimisation",
    category: "Research",
    year: "2019–2021",
    shortDescription:
      "Time and cost optimisation study of PMAY-Urban projects applying GRA, WASPAS, and MOORA decision-making frameworks.",
    fullDescription:
      "Examined time and cost optimisation in PMAY-U construction projects using BIM-based project monitoring workflows. Applied Multi-Criteria Decision-Making (MCDM) frameworks alongside AI-supported Power BI dashboards to evaluate delays and overruns. Comparative analysis of GRA (Grey Relational Analysis), WASPAS, and MOORA methods integrated into Revit-based project schedules linked to Primavera P6. Found WASPAS and MOORA effective in precise decision-making.",
    tools: ["Power BI", "Primavera P6", "Revit BIM", "MCDM Analysis", "Data Analytics", "MS Excel"],
    role: "Research Lead & BIM Analyst",
    outcome: "Published MCDM framework applied to reduce project delivery delays by 18% across case study projects",
    image: null,
    color: "#141414",
    featured: false,
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const getAllCategories = () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
