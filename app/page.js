"use client";

import { useState } from "react";
import EventGrid from "../components/event/EventGrid";
import { FilterTabs } from "../components/filters/FilterTabs";
import { events } from "../data/events";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All Events");

  // Filter events based on active category
  const filteredEvents = activeFilter === "All Events" 
    ? events 
    : events.filter(event => event.category === activeFilter || event.tags.includes(activeFilter));

  return (
    <div className="py-4">
      {/* Page Header (Hero section) */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
          Discover the <span className="text-primary italic">Wild</span>
        </h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Join expert-led live interactive sessions from the most remote locations in the world. 
          Experience nature in real-time.
        </p>
      </div>

      <FilterTabs 
        activeFilter={activeFilter} 
        onFilterChange={setActiveFilter} 
      />

      {filteredEvents.length > 0 ? (
        <EventGrid events={filteredEvents} />
      ) : (
        <div className="py-20 text-center flex flex-col items-center justify-center border-2 border-dashed border-surface-border rounded-3xl bg-surface/50">
          <h3 className="text-xl font-bold text-foreground mb-2">No active streams</h3>
          <p className="text-foreground/50">Try selecting a different category or search term.</p>
        </div>
      )}
    </div>
  );
}
