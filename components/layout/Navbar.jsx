"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Search, Menu, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-surface-border bg-surface/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left Side: Logo & Main Nav */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
              F
            </div>
            <span>Fieldtime</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Discover</Link>
            <Link href="/" className="text-foreground/60 hover:text-primary transition-colors">Following</Link>
            <Link href="/" className="text-foreground/60 hover:text-primary transition-colors">Categories</Link>
          </div>
        </div>

        {/* Center: Search (Hidden on Mobile) */}
        <div className="hidden flex-1 md:flex justify-center max-w-md px-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
            <input 
              type="text" 
              placeholder="Search events..." 
              className="w-full h-10 pl-10 pr-4 rounded-full bg-background border border-surface-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
          </div>
        </div>

        {/* Right Side: Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-background transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-indigo-500" />}
            </button>
          )}

          {/* User Profile */}
          <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-background border border-surface-border hover:bg-surface-border/50 transition">
            <User className="w-5 h-5" />
          </button>

          {/* Mobile Menu */}
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
