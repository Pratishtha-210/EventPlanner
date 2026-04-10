"use client";

import { useState } from "react";
import EventCard from "./EventCard";

export default function EventGrid({ events }) {
  const [likedEvents, setLikedEvents] = useState(new Set());

  const handleLikeToggle = (id) => {
    setLikedEvents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {events.map(event => (
        <EventCard 
          key={event.id} 
          event={event} 
          isLiked={likedEvents.has(event.id)}
          onLikeToggle={handleLikeToggle}
        />
      ))}
    </div>
  );
}
