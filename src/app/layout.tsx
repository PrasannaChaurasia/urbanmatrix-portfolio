import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CinematicFooter from "@/components/CinematicFooter";
import LoadingScreen from "@/components/LoadingScreen";
import AmbientAudioPlayer from "@/components/AmbientAudioPlayer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prasanna Chaurasia | BIM Architect & AI Enthusiast",
  description:
    "Portfolio of Prasanna Chaurasia — Multidisciplinary BIM Architect, Civil Engineer, AI Enthusiast, and global competition winner. Specialising in parametric design, BIM coordination, and AI-driven architectural workflows.",
  keywords: [
    "Prasanna Chaurasia",
    "BIM Architect",
    "AI Architecture",
    "Parametric Design",
    "Revit",
    "ISO 19650",
    "Manchester",
    "Urbanmatrix",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LoadingScreen />
        <Navbar />
        <main className="flex-1">{children}</main>
        <CinematicFooter />
        <AmbientAudioPlayer />
      </body>
    </html>
  );
}
