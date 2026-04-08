"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, ExternalLink, Link2, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Connect to Formspree, EmailJS, or your own API here
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs tracking-[0.5em] uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            Let&apos;s Connect
          </p>
          <h2 className="text-4xl md:text-5xl font-extralight">
            Get In{" "}
            <span style={{ color: "var(--accent)" }}>Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div className="flex flex-col gap-12">
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)", lineHeight: "1.9", maxWidth: "420px" }}
            >
              Available for freelance projects, BIM consultancy, architectural collaborations,
              and full-time opportunities in the UK and internationally. Let&apos;s discuss
              how we can create something remarkable together.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "pc.urbanmatrix12@gmail.com" },
                { icon: Phone, label: "Phone", value: "+44 7776 361383" },
                { icon: MapPin, label: "Location", value: "Nottingham, United Kingdom" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{
                      border: "1px solid var(--border)",
                      background: "var(--bg-card)",
                    }}
                  >
                    <Icon size={15} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs tracking-widest uppercase mb-0.5"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {label}
                    </p>
                    <p className="text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p
                className="text-xs tracking-[0.4em] uppercase mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                Connect Online
              </p>
              <div className="flex gap-3">
                {[
                  {
                    icon: Link2,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/prasanna-chaurasia",
                  },
                  {
                    icon: ExternalLink,
                    label: "xFigura",
                    href: "#",
                  },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center gap-2 px-4 h-10 text-xs tracking-widest uppercase transition-all duration-200"
                    style={{
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "var(--accent)";
                      el.style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "var(--border)";
                      el.style.color = "var(--text-secondary)";
                    }}
                  >
                    <Icon size={13} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  className="block text-xs tracking-widest uppercase mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-transparent outline-none transition-colors duration-200"
                  style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  className="block text-xs tracking-widest uppercase mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-transparent outline-none transition-colors duration-200"
                  style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                className="block text-xs tracking-widest uppercase mb-2"
                style={{ color: "var(--text-secondary)" }}
              >
                Subject
              </label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3 text-sm bg-transparent outline-none transition-colors duration-200"
                style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                placeholder="BIM consultancy, project collaboration..."
              />
            </div>

            <div>
              <label
                className="block text-xs tracking-widest uppercase mb-2"
                style={{ color: "var(--text-secondary)" }}
              >
                Message
              </label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 text-sm bg-transparent outline-none resize-none transition-colors duration-200"
                style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 self-start"
              style={{
                background: status === "sent" ? "var(--bg-card)" : "var(--accent)",
                color: status === "sent" ? "var(--accent)" : "var(--bg-primary)",
                border: "1px solid",
                borderColor: "var(--accent)",
                opacity: status === "sending" ? 0.7 : 1,
              }}
            >
              <Send size={14} />
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message Sent!"}
            </button>

            {status === "sent" && (
              <p className="text-sm" style={{ color: "var(--accent)" }}>
                Thank you! I will get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
