"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full px-8 lg:px-16 py-20 flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in-up">
      <h1 className="font-serif italic text-5xl md:text-7xl text-foreground mb-8">
        About Eventflow
      </h1>
      <p className="max-w-3xl text-lg md:text-xl text-foreground/70 font-medium leading-relaxed mb-12">
        We are an interactive digital platform designed to bridge the gap between physical 
        and digital experiences. We believe that incredible live experiences, networking mixers, 
        and technical panels should be globally accessible without compromising on atmosphere.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl text-left">
        <div className="bg-surface-border/20 p-6 rounded-3xl border border-surface-border">
          <h3 className="font-bold text-xl mb-3 text-foreground">Global Reach</h3>
          <p className="text-sm text-foreground/60">Stream your events locally but invite participants from around the world effortlessly.</p>
        </div>
        <div className="bg-surface-border/20 p-6 rounded-3xl border border-surface-border">
          <h3 className="font-bold text-xl mb-3 text-foreground">Ultra Low Latency</h3>
          <p className="text-sm text-foreground/60">Built on infrastructure designed for interactive Q&A and instant audience feedback.</p>
        </div>
        <div className="bg-surface-border/20 p-6 rounded-3xl border border-surface-border">
          <h3 className="font-bold text-xl mb-3 text-foreground">Creator Focused</h3>
          <p className="text-sm text-foreground/60">Tools dedicated entirely for independent organizers to boost engagement with ease.</p>
        </div>
      </div>

      <Link href="/" className="mt-16 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-foreground transition-colors uppercase tracking-widest">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
    </div>
  );
}
