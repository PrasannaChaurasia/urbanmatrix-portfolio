import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
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

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-28 md:pt-36 pb-20 px-6 grid-bg overflow-hidden"
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
            onMouseEnter={undefined}
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

      {/* Hero image */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div
          className="w-full relative overflow-hidden"
          style={{ height: "60vh", background: "var(--bg-card)" }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "center 30%" }}
              priority
            />
          ) : (
            <>
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="w-16 h-16 border rotate-45 mx-auto mb-4"
                    style={{ borderColor: "var(--accent)", opacity: 0.4 }}
                  />
                  <p className="text-xs tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>
                    {project.title}
                  </p>
                </div>
              </div>
            </>
          )}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, var(--bg-primary))" }}
          />
        </div>
      </section>

      {/* Content + sticky right rail */}
      <section className="section-padding" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto flex gap-12">

          {/* Main content — 60% */}
          <div className="flex-1 min-w-0">
            <p className="text-xs tracking-[0.5em] uppercase mb-6" style={{ color: "var(--accent)" }}>
              Project Overview
            </p>
            <p className="text-base leading-relaxed mb-12" style={{ color: "var(--text-secondary)", lineHeight: "2" }}>
              {project.fullDescription}
            </p>

            {/* Metadata cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "var(--accent)" }}>My Role</p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{project.role}</p>
              </div>
              <div className="p-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "var(--accent)" }}>Outcome</p>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>{project.outcome}</p>
              </div>
              <div className="p-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--accent)" }}>Tools</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2 py-1"
                      style={{ background: "rgba(200,169,110,0.07)", color: "var(--accent)", border: "1px solid rgba(200,169,110,0.15)" }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Prev / Next navigation */}
            <div className="flex gap-4 mt-12 pt-10" style={{ borderTop: "1px solid var(--border)" }}>
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="group flex-1 flex items-center gap-4 p-5 transition-colors duration-300"
                  style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}
                >
                  <ArrowLeft size={16} style={{ color: "var(--accent)", flexShrink: 0 }} className="transition-transform duration-300 group-hover:-translate-x-1" />
                  <div className="min-w-0">
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--text-secondary)" }}>Previous</p>
                    <p className="text-sm font-medium truncate" style={{ color: "var(--text-primary)" }}>{prevProject.title}</p>
                  </div>
                </Link>
              ) : <div className="flex-1" />}

              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group flex-1 flex items-center justify-end gap-4 p-5 transition-colors duration-300"
                  style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}
                >
                  <div className="min-w-0 text-right">
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--text-secondary)" }}>Next</p>
                    <p className="text-sm font-medium truncate" style={{ color: "var(--text-primary)" }}>{nextProject.title}</p>
                  </div>
                  <ArrowRight size={16} style={{ color: "var(--accent)", flexShrink: 0 }} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              ) : <div className="flex-1" />}
            </div>
          </div>

          {/* Sticky right rail — project index */}
          <aside
            className="hidden xl:block w-72 flex-shrink-0"
            style={{ alignSelf: "flex-start", position: "sticky", top: "90px" }}
          >
            <div style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}>
              <div className="px-5 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
                <p className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--accent)" }}>
                  All Projects
                </p>
              </div>
              <ul>
                {projects.map((p, i) => {
                  const isActive = p.slug === slug;
                  return (
                    <li key={p.slug} style={{ borderBottom: i < projects.length - 1 ? "1px solid var(--border)" : "none" }}>
                      <Link
                        href={`/projects/${p.slug}`}
                        className="flex items-center gap-3 px-5 py-3.5 transition-colors duration-200 group"
                        style={{
                          background: isActive ? "rgba(200,169,110,0.06)" : "transparent",
                          borderLeft: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                        }}
                      >
                        <span
                          className="text-xs font-mono flex-shrink-0"
                          style={{ color: isActive ? "var(--accent)" : "var(--text-secondary)", opacity: 0.5 }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="text-xs leading-snug line-clamp-2"
                          style={{ color: isActive ? "var(--text-primary)" : "var(--text-secondary)" }}
                        >
                          {p.title}
                        </span>
                        <ChevronRight
                          size={12}
                          className="ml-auto flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                          style={{ color: isActive ? "var(--accent)" : "transparent" }}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
