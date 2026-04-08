export interface Service {
  id: number;
  title: string;
  description: string;
  tools: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "BIM Coordination",
    description:
      "ISO 19650-compliant BIM management using Revit with pyRevit, DiRoots, and BIMLogiq. Federated model management across all RIBA stages.",
    tools: ["Revit BIM", "Navisworks", "pyRevit", "DiRoots", "ISO 19650"],
    icon: "◈",
  },
  {
    id: 2,
    title: "Parametric Design",
    description:
      "Computational and node-based design workflows using Rhino + Grasshopper for complex geometries, façade systems, and generative forms.",
    tools: ["Rhino", "Grasshopper", "Computational Design", "3ds Max"],
    icon: "◇",
  },
  {
    id: 3,
    title: "AI-Assisted Design",
    description:
      "Integrating cutting-edge AI tools into architectural workflows — from concept generation to rendering and urban simulation.",
    tools: ["xFigura", "ComfyUI", "Midjourney", "RunwayML", "Forma"],
    icon: "◉",
  },
  {
    id: 4,
    title: "Sustainable Architecture",
    description:
      "Net-zero design strategies, SuDS implementation, climate analysis, and green infrastructure aligned with UK building regulations.",
    tools: ["Climate Consultant", "QGIS", "Revit", "GIS", "ZHA Methods"],
    icon: "◎",
  },
  {
    id: 5,
    title: "Construction Management",
    description:
      "Project scheduling, cost optimisation, and resource management using Primavera P6, Power BI, and AI-enabled dashboards.",
    tools: ["Primavera P6", "Power BI", "MS Project", "RIBA Stages"],
    icon: "◰",
  },
  {
    id: 6,
    title: "Visualisation & Rendering",
    description:
      "Photorealistic architectural renders, walkthroughs, and VR/AR experiences using Lumion, D5 Render, V-Ray, and AI tools.",
    tools: ["Lumion", "D5 Render", "SketchUp", "V-Ray", "3D Vista VR"],
    icon: "◭",
  },
];
