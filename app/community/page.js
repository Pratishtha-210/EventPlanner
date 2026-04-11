"use client";

import Link from "next/link";
import { ArrowLeft, Users, MessageSquare, Flame } from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="w-full px-8 lg:px-16 py-20 flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in-up">
      <h1 className="font-serif italic text-5xl md:text-7xl text-foreground mb-8">
        The Community
      </h1>
      
      <p className="max-w-2xl text-lg text-foreground/70 font-medium leading-relaxed mb-16">
        Our community is what brings Eventflow to life. Over 40,000 creators, developers, designers, and enthusiasts are actively participating, streaming, and building connections.
      </p>

      {/* Community Stats/Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-20">
        <div className="flex flex-col items-center p-8 bg-surface border border-surface-border rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-2">40k+</h2>
          <p className="text-sm text-foreground/60 font-medium uppercase tracking-wider">Active Users</p>
        </div>

        <div className="flex flex-col items-center p-8 bg-surface border border-surface-border rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 text-amber-500">
            <Flame className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-2">2.5M</h2>
          <p className="text-sm text-foreground/60 font-medium uppercase tracking-wider">Minutes Streamed</p>
        </div>

        <div className="flex flex-col items-center p-8 bg-surface border border-surface-border rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-[#647B45]/10 flex items-center justify-center mb-6 text-[#647B45]">
            <MessageSquare className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-2">108k</h2>
          <p className="text-sm text-foreground/60 font-medium uppercase tracking-wider">Messages Sent</p>
        </div>
      </div>
      
      <p className="font-serif italic text-2xl text-foreground mb-8">Ready to join the conversation?</p>
      
      <button className="px-8 py-4 bg-text-dark text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-primary transition-all shadow-xl hover:scale-105">
        Join Discord
      </button>

      <Link href="/" className="mt-16 inline-flex items-center gap-2 text-sm font-bold text-foreground/40 hover:text-foreground transition-colors uppercase tracking-widest">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
    </div>
  );
}
