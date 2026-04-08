import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-20 px-6 grid-bg overflow-hidden"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 40% 60% at 10% 50%, rgba(200,169,110,0.05) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-10 transition-colors duration-200 group"
            style={{ color: "var(--text-secondary)" }}
          >
            <ArrowLeft size={13} className="transition-transform duration-200 group-hover:-translate-x-1" />
            All Projects
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            <span
              className="text-xs px-3 py-1.5 tracking-widest uppercase"
              style={{ background: "rgba(200,169,110,0.1)", color: "var(--accent)", border: "1px solid rgba(200,169,110,0.2)" }}
            >
              {project.category}
            </span>
            <span
              className="text-xs px-3 py-1.5 tracking-widest"
              style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
            >
              {project.year}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extralight leading-tight mb-6 max-w-3xl">
            {project.title}
          </h1>
          <p className="text-base max-w-2xl" style={{ color: "var(--text-secondary)", lineHeight: "1.9" }}>
            {project.shortDescription}
          </p>
        </div>
      </section>

      {/* Image placeholder */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div
          className="w-full flex items-center justify-center relative overflow-hidden"
          style={{ height: "50vh", background: "var(--bg-card)" }}
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="text-center relative z-10">
            <div
              className="w-16 h-16 border rotate-45 mx-auto mb-4"
              style={{ borderColor: "var(--accent)", opacity: 0.4 }}
            />
            <p className="text-xs tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>
              Project Images — Drop your files into /public/projects/
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main description */}
          <div className="lg:col-span-2">
            <p className="text-xs tracking-[0.5em] uppercase mb-6" style={{ color: "var(--accent)" }}>
              Project Overview
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)", lineHeight: "2" }}>
              {project.fullDescription}
            </p>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Role */}
            <div className="p-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "var(--accent)" }}>
                My Role
              </p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{project.role}</p>
            </div>

            {/* Outcome */}
            <div className="p-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "var(--accent)" }}>
                Outcome
              </p>
              <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>{project.outcome}</p>
            </div>

            {/* Tools */}
            <div className="p-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--accent)" }}>
                Tools Used
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2 py-1"
                    style={{
                      background: "rgba(200,169,110,0.07)",
                      color: "var(--accent)",
                      border: "1px solid rgba(200,169,110,0.15)",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation between projects */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm tracking-widest uppercase transition-colors duration-200 group"
            style={{ color: "var(--text-secondary)" }}
          >
            <ArrowLeft size={13} className="transition-transform duration-200 group-hover:-translate-x-1" />
            All Projects
          </Link>
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-secondary)", opacity: 0.4 }}>
            {project.category} · {project.year}
          </span>
        </div>
      </section>
    </>
  );
}
