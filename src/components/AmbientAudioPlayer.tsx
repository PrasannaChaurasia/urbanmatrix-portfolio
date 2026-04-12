"use client";

import { useState, useRef, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AmbientAudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const oscsRef = useRef<OscillatorNode[]>([]);

  const start = useCallback(() => {
    const ctx = new AudioContext();
    ctxRef.current = ctx;

    const master = ctx.createGain();
    master.gain.setValueAtTime(0, ctx.currentTime);
    master.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 3);
    master.connect(ctx.destination);
    masterRef.current = master;

    const oscs: OscillatorNode[] = [];

    // Deep drone layers
    ([55, 82.5, 110, 137.5] as number[]).forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = i % 2 === 0 ? "sine" : "triangle";
      osc.frequency.value = freq;
      osc.frequency.linearRampToValueAtTime(freq * 1.001, ctx.currentTime + 14);
      osc.frequency.linearRampToValueAtTime(freq, ctx.currentTime + 28);

      gainNode.gain.value = 0.28 - i * 0.05;
      filter.type = "lowpass";
      filter.frequency.value = 300 + i * 80;
      filter.Q.value = 1.5;

      osc.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(master);
      osc.start();
      oscs.push(osc);
    });

    // High-frequency shimmer
    const shimmer = ctx.createOscillator();
    const shimmerGain = ctx.createGain();
    shimmer.type = "sine";
    shimmer.frequency.value = 880;
    shimmerGain.gain.value = 0.01;
    shimmer.connect(shimmerGain);
    shimmerGain.connect(master);
    shimmer.start();
    oscs.push(shimmer);

    oscsRef.current = oscs;
    setPlaying(true);
  }, []);

  const stop = useCallback(() => {
    const ctx = ctxRef.current;
    const master = masterRef.current;
    if (!ctx || !master) return;

    master.gain.linearRampToValueAtTime(0, ctx.currentTime + 2);
    setTimeout(() => {
      oscsRef.current.forEach((o) => { try { o.stop(); } catch { /* already stopped */ } });
      ctx.close();
      ctxRef.current = null;
      masterRef.current = null;
      oscsRef.current = [];
    }, 2100);
    setPlaying(false);
  }, []);

  return (
    <button
      onClick={() => (playing ? stop() : start())}
      title={playing ? "Stop ambient audio" : "Play ambient audio"}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3 py-2 text-xs tracking-[0.25em] uppercase transition-all duration-300"
      style={{
        background: playing ? "var(--accent)" : "rgba(8,8,8,0.85)",
        color: playing ? "var(--bg-primary)" : "var(--text-secondary)",
        border: "1px solid",
        borderColor: playing ? "var(--accent)" : "var(--border)",
        backdropFilter: "blur(8px)",
      }}
    >
      {playing ? <Volume2 size={13} /> : <VolumeX size={13} />}
      <span>Ambient</span>
      {playing && (
        <span className="flex gap-0.5 items-end" style={{ height: "12px" }}>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-0.5 rounded-sm"
              style={{
                background: "var(--bg-primary)",
                height: `${40 + i * 20}%`,
                animation: `audioBar 0.7s ease-in-out ${i * 0.18}s infinite alternate`,
              }}
            />
          ))}
        </span>
      )}
    </button>
  );
}
