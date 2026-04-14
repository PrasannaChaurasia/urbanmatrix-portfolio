"use client";

import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

const experience = [
  {
    role: "Architectural Creative Partner",
    company: "xFigura | Boston, Massachusetts",
    period: "09/2025 – Present",
    points: [
      "Collaborating with global designers, AI researchers to develop next-generation design workflows using AI Models (Nano Banana, Seedream, Qwen, Hunyuan)",
      "Producing AI-driven architectural explorations, parametric iterations integrating AI with BIM and digital fabrication pipelines",
      "Designing content for community engagement — conceptual showcases, case studies, and educational posts",
      "Experimenting with AI-assisted massing, façade systems, urban form generation, and material simulation",
    ],
  },
  {
    role: "Front Desk Administrator (NHS) | Business Support",
    company: "NHS The Om Surgery | United Kingdom",
    period: "07/2025 – Present",
    points: [
      "Managed patient-facing front desk operations, appointment scheduling, and administrative workflows",
      "Coordinated communications between clinical staff, patients, and external stakeholders",
      "Maintained accurate records and ensured compliance with NHS data handling and privacy protocols",
      "Provided business support across scheduling, documentation, and operational reporting",
    ],
  },
  {
    role: "Co-founder & Design Head",
    company: "The Sapphire Infrastructures India",
    period: "10/2021 – 08/2023",
    points: [
      "Led design and delivery across residential, commercial, industrial, and healthcare unit projects",
      "Delivered Revit BIM (LOD 300–500), pyRevit automation, and DiRoots workflows for federated model management",
      "Completed projects on average 20% faster than industry standards",
      "Managed quotations, invoicing, RIBA Plan of Work (Stages 2–5), and stakeholder coordination",
    ],
  },
  {
    role: "Civil Designer",
    company: "JS Infrastructures | India",
    period: "01/2021 – 10/2021",
    points: [
      "Prepared high-quality engineering drawings in AutoCAD and Revit, reducing revision cycles",
      "Performed BIM-based quantity take-offs reducing material waste by 20% using DiRoots TableGen plugin",
      "Collaborated on site development, wetland restoration, drainage, utilities, and transportation projects",
    ],
  },
  {
    role: "Site Engineer",
    company: "Metastruct Infratech INDIA Pvt. Ltd.",
    period: "08/2019 – 09/2020",
    points: [
      "Implemented AI-enabled dashboards and BIM scheduling via Revit and Primavera P6",
      "Developed engineering definition package in Revit with pyRevit automation for steel detailing",
      "Reduced project timelines by 18% through rigorous planning and Blocks plugin integration",
    ],
  },
  {
    role: "Project Engineer",
    company: "Shivansh Infra and Construction | India",
    period: "07/2018 – 08/2019",
    points: [
      "Coordinated mixed-use development projects with AutoCAD and Revit BIM (RIBA Stage 3–4)",
      "Applied BIM simulations and AI-based compliance checks for zoning and regulatory alignment",
      "Secured 40% more funding through BIM-based reports and DiRoots QuickViews visualisations",
    ],
  },
];

const education = [
  {
    degree: "Diploma in BIM | BIM Architecture Professional",
    school: "Novatr",
    period: "Feb 2025 – Sep 2025",
    note: "BIM Architecture Professional",
  },
  {
    degree: "Masters in Arts | Architecture and Urbanism",
    school: "Manchester School of Architecture, Manchester Metropolitan University",
    period: "Sep 2023 – Oct 2024",
    note: "Architecture & Urbanism",
  },
  {
    degree: "Masters in Technology | Construction Planning & Management",
    school: "IPS Academy, Institute of Engineering and Science",
    period: "Aug 2018 – Dec 2022",
    note: "Construction Planning and Management",
  },
  {
    degree: "Bachelors of Engineering | Civil Engineering",
    school: "IPS Academy, Institute of Engineering and Science",
    period: "Aug 2014 – Jun 2018",
    note: "Civil Engineering",
  },
];

const certifications = [
  "BIM Revit Architecture Professional Certification – 2025",
  "AI Masterminds (tools, automation, agents) – 2025",
  "Futurly 3D + AI (MC Studio x Futurly) – 2025",
  "Tips and Techniques for Creating Images (Midjourney) – 2025",
  "Site Analysis & Climate Study for Sustainable Design – 2024",
  "Radical Net-Zero Buildings (ZHA) Certification – 2024",
  "Advanced Design Tools (Rhino & Grasshopper) – 2024",
  "Introduction to Prompt Engineering for Generative AI – 2024",
  "Sketchup and V-Ray for Exterior and Interior Design – 2021",
  "Business Intelligence Using Power BI – 2022",
  "Geometry and V-Ray in 3Ds Max – 2021",
  "Delivery and E-Plan for External and Interior Design – 2021",
  "Complete Estimation and Costing Course – 2021",
  "Lumion 8 – Photo Realistic Rendering – 2021",
  "Earthquake Engineering Workshop – 2019",
  "Building Design and Drawing Workshop – 2019",
  "AutoCAD 2D/3D Certification – 2015",
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="section-padding"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p
              className="text-xs tracking-[0.5em] uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              Curriculum Vitae
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight">
              Experience &amp;{" "}
              <span style={{ color: "var(--accent)" }}>Education</span>
            </h2>
          </div>
          <a
            href="/Prasanna Chaurasia_CV.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 text-sm tracking-widest uppercase transition-all duration-300"
            style={{
              border: "1px solid var(--accent)",
              color: "var(--accent)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--accent)";
              el.style.color = "var(--bg-primary)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.color = "var(--accent)";
            }}
          >
            <Download size={15} />
            Download CV
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <Briefcase size={16} style={{ color: "var(--accent)" }} />
              <h3
                className="text-xs tracking-[0.4em] uppercase"
                style={{ color: "var(--text-secondary)" }}
              >
                Work Experience
              </h3>
            </div>

            <div className="relative">
              <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{ background: "var(--border)" }}
              />

              <div className="space-y-10 pl-8">
                {experience.map((exp, i) => (
                  <div key={i} className="relative">
                    <div
                      className="absolute -left-8 top-1 w-3 h-3 border-2 rotate-45"
                      style={{
                        borderColor: "var(--accent)",
                        background: "var(--bg-primary)",
                        transform: "translateX(calc(-50% + 0.5px)) rotate(45deg)",
                      }}
                    />
                    <div className="flex justify-between items-start mb-1 gap-4">
                      <h4 className="text-sm font-medium leading-snug">{exp.role}</h4>
                      <span
                        className="text-xs whitespace-nowrap"
                        style={{ color: "var(--accent)" }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <p
                      className="text-xs mb-3 italic"
                      style={{ color: "var(--accent)", opacity: 0.8 }}
                    >
                      {exp.company}
                    </p>
                    <ul className="space-y-2">
                      {exp.points.map((pt, j) => (
                        <li
                          key={j}
                          className="text-sm flex gap-2"
                          style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}
                        >
                          <span style={{ color: "var(--accent)", flexShrink: 0 }}>—</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education + Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap size={16} style={{ color: "var(--accent)" }} />
              <h3
                className="text-xs tracking-[0.4em] uppercase"
                style={{ color: "var(--text-secondary)" }}
              >
                Education
              </h3>
            </div>

            <div className="space-y-5 mb-14">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="p-5"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="flex justify-between items-start gap-4 mb-1">
                    <h4 className="text-sm font-light leading-snug">{edu.degree}</h4>
                    <span
                      className="text-xs whitespace-nowrap"
                      style={{ color: "var(--accent)" }}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {edu.school}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-3 mb-6">
              <Award size={16} style={{ color: "var(--accent)" }} />
              <h3
                className="text-xs tracking-[0.4em] uppercase"
                style={{ color: "var(--text-secondary)" }}
              >
                Certifications
              </h3>
            </div>

            <div
              className="p-6"
              style={{
                background: "rgba(200,169,110,0.04)",
                border: "1px solid rgba(200,169,110,0.15)",
              }}
            >
              <ul className="space-y-3">
                {certifications.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm flex gap-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
