"use client";

import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("@/components/ModelViewer"), {
  ssr: false,
  loading: () => (
    <div
      className="section-padding"
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="w-full flex items-center justify-center"
          style={{
            height: "60vh",
            minHeight: "400px",
            border: "1px solid var(--border)",
          }}
        >
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--text-secondary)" }}
          >
            Loading 3D Viewer...
          </p>
        </div>
      </div>
    </div>
  ),
});

export default function ModelViewerWrapper() {
  return <ModelViewer />;
}
