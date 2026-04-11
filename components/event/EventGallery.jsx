"use client";

import { useState } from "react";
import EventCard from "./EventCard";
import { Search } from "lucide-react";

export default function EventGallery({ events }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [likedEvents, setLikedEvents] = useState(new Set());

  const toggleLike = (id) => {
    setLikedEvents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  // Extract unique categories
  const categories = ["All", ...new Set(events.map(e => e.category))];

  // Filtering Logic
  const filteredEvents = events.filter(event => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = event.title.toLowerCase().includes(q) || 
                          event.category.toLowerCase().includes(q) ||
                          event.tags.some(t => t.toLowerCase().includes(q));
    
    const matchesCategory = activeCategory === "All" || event.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="w-full py-16 px-8 lg:px-16" id="discover">
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 relative">
        <div>
          <h2 className="font-serif italic text-5xl text-text-dark leading-[1.1] mb-2 drop-shadow-sm">
            Discover Events ✨
          </h2>
          <p className="text-sm font-semibold text-text-dark/60">Find what moves you across 15+ interactive live sessions.</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-full max-w-md shadow-xl rounded-full bg-surface border border-surface-border">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-text-dark/40" />
          </div>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-3 bg-transparent text-sm focus:outline-none placeholder:text-text-dark/40 text-foreground"
            placeholder="Search events, topics, channels..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Filter Pills */}
      <div className="flex overflow-x-auto gap-3 pb-6 hide-scrollbar mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 transform hover:scale-105 shadow-sm ${
              activeCategory === category 
                ? "bg-primary text-white scale-105 shadow-primary/30 shadow-md" 
                : "bg-surface border border-surface-border text-foreground hover:border-primary/50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid Layout (Min 12-15 items per constraint) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <EventCard 
              key={event.id} 
              event={event} 
              isLiked={likedEvents.has(event.id)} 
              onLikeToggle={() => toggleLike(event.id)} 
            />
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-text-dark/50 font-medium">
            No events found matching your criteria. Try adjusting your filters! 🎀
          </div>
        )}
      </div>

    </section>
  );
}
