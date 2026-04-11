"use client";

import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <nav className="w-full px-8 py-6 flex items-center justify-between z-50 relative bg-surface/80 backdrop-blur-sm mt-4">
      
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 text-primary">
        <Sun className="w-8 h-8 fill-primary" />
        <span className="font-bold text-2xl tracking-tighter lowercase">eventflow</span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-10">
        {[
          { name: "HOME", path: "/" },
          { name: "ABOUT", path: "/about" },
          { name: "EVENTS", path: "/events" },
          { name: "WORKSHOPS", path: "/workshops" },
          { name: "COMMUNITY", path: "/community" }
        ].map((link, idx) => (
          <Link 
            key={link.name} 
            href={link.path} 
            className={`text-[11px] font-bold tracking-widest uppercase transition-colors hover:text-primary text-text-dark/40 hover:scale-105 transform inline-block`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Action Button & Theme Toggle */}
      <div className="flex items-center gap-4">
        {mounted && (
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full border border-surface-border text-foreground hover:bg-surface-border transition-colors flex items-center justify-center"
            title="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        )}
        <button className="px-6 py-2 rounded-full border border-text-dark/20 text-xs font-bold tracking-widest text-text-dark hover:bg-text-dark hover:text-surface transition-colors">
          SIGN IN
        </button>
      </div>
      
    </nav>
  );
}
