"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { useEffect, useRef } from "react";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>(".proj-card").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section-padding"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-screen-2xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "var(--accent)" }} />
              <p className="text-xs tracking-[0.5em] uppercase" style={{ color: "var(--accent)" }}>
                Portfolio
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight leading-tight">
              Featured{" "}
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px var(--accent)",
                }}
              >
                Projects
              </span>
            </h2>
          </div>

          <Link
            href="/projects"
            className="group flex items-center gap-2 text-xs tracking-[0.3em] uppercase transition-colors duration-300"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            View All Projects
            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {featured.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="proj-card project-card group block"
              style={{
                background: "var(--bg-card)",
                opacity: 0,
                transform: "translateY(40px)",
                transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/3", background: "var(--bg-secondary)" }}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="card-img object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="card-img w-full h-full flex items-center justify-center relative overflow-hidden">
                    {/* Grid placeholder */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(200,169,110,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.06) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                      }}
                    />
                    {/* Ghost number */}
                    <span
                      className="ghost-num"
                      style={{ position: "absolute", right: "8%", bottom: "-8%", opacity: 0.4 }}
                    >
                      0{i + 1}
                    </span>
                    <div
                      className="w-12 h-12 border transition-all duration-700 group-hover:rotate-90"
                      style={{ borderColor: "var(--accent)", transform: "rotate(45deg)", opacity: 0.5 }}
                    />
                  </div>
                )}

                {/* Hover overlay */}
                <div className="card-overlay" />

                {/* Arrow icon */}
                <div
                  className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center transition-all duration-500"
                  style={{
                    background: "var(--accent)",
                    opacity: 0,
                    transform: "scale(0.7)",
                    transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  ref={(el) => {
                    if (!el) return;
                    const parent = el.closest(".project-card") as HTMLElement;
                    if (!parent) return;
                    const show = () => { el.style.opacity = "1"; el.style.transform = "scale(1)"; };
                    const hide = () => { el.style.opacity = "0"; el.style.transform = "scale(0.7)"; };
                    parent.addEventListener("mouseenter", show);
                    parent.addEventListener("mouseleave", hide);
                  }}
                >
                  <ArrowUpRight size={15} style={{ color: "var(--bg-primary)" }} />
                </div>

                {/* Category chip */}
                <div
                  className="absolute top-4 left-4 px-2.5 py-1 text-xs tracking-[0.2em] uppercase"
                  style={{
                    background: "rgba(8,8,8,0.8)",
                    backdropFilter: "blur(8px)",
                    color: "var(--accent)",
                    border: "1px solid var(--border-accent)",
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-7">
                <div className="flex justify-between items-center mb-3">
                  <span
                    className="text-xs font-mono tracking-[0.3em] uppercase"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {project.year}
                  </span>
                  <span
                    className="text-xs font-mono"
                    style={{ color: "var(--text-muted)" }}
                  >
                    0{i + 1} / 0{featured.length}
                  </span>
                </div>

                <h3
                  className="text-base font-light mb-3 leading-snug transition-colors duration-300 group-hover:text-[var(--accent)]"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)", lineHeight: "1.75" }}
                >
                  {project.shortDescription}
                </p>

                {/* Bottom arrow line */}
                <div
                  className="flex items-center gap-2 mt-5 text-xs tracking-[0.2em] uppercase"
                  style={{ color: "var(--accent)", opacity: 0 }}
                  ref={(el) => {
                    if (!el) return;
                    const parent = el.closest(".project-card") as HTMLElement;
                    if (!parent) return;
                    const show = () => { el.style.opacity = "1"; el.style.transform = "translateX(0)"; };
                    const hide = () => { el.style.opacity = "0"; el.style.transform = "translateX(-8px)"; };
                    el.style.transform = "translateX(-8px)";
                    el.style.transition = "opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s";
                    parent.addEventListener("mouseenter", show);
                    parent.addEventListener("mouseleave", hide);
                  }}
                >
                  View Project
                  <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
