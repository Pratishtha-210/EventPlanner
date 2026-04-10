"use client";

import Link from "next/link";
import { Sun } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-6 flex items-center justify-between z-50 relative bg-surface/80 backdrop-blur-sm mt-4">
      
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 text-primary">
        <Sun className="w-8 h-8 fill-primary" />
        <span className="font-bold text-2xl tracking-tighter lowercase">fieldtime</span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-10">
        {["HOME", "ABOUT", "EVENTS", "PICNIC", "COMMUNITY"].map((link, idx) => (
          <Link key={link} href="/" className={`text-[11px] font-bold tracking-widest uppercase transition-colors hover:text-primary ${idx === 0 ? "border-b border-text-dark text-text-dark pb-1" : "text-text-dark/40"}`}>
            {link}
          </Link>
        ))}
      </div>

      {/* Action Button */}
      <div className="flex items-center">
        <button className="px-6 py-2 rounded-full border border-text-dark/20 text-xs font-bold tracking-widest text-text-dark hover:bg-text-dark hover:text-surface transition-colors">
          SIGN IN
        </button>
      </div>
      
    </nav>
  );
}
