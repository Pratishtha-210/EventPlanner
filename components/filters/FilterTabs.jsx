"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

const categories = ["All Events", "Outdoor", "Survival", "Hiking", "Camping", "Climbing", "Photography"];

export function FilterTabs({ activeFilter, onFilterChange }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div className="flex items-center flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilterChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === category
                ? "bg-primary text-white shadow-md shadow-primary/20"
                : "bg-surface border border-surface-border text-foreground/70 hover:text-foreground hover:border-foreground/30 hover:bg-surface/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl border border-surface-border bg-surface text-sm font-medium text-foreground/80 hover:bg-surface-border/50 transition">
        <SlidersHorizontal className="w-4 h-4" />
        Filters
      </button>
    </div>
  );
}
