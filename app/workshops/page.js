"use client";

import Link from "next/link";
import { ArrowLeft, Video } from "lucide-react";
import EventGallery from "../../components/event/EventGallery";
import { events } from "../../data/events";

export default function WorkshopsPage() {
  // Pre-filter events to show only Workshops or similar categories for this page
  const workshopEvents = events.filter(e => e.tags.includes("Workshop") || e.tags.includes("Tech") || e.category === "Art");

  return (
    <div className="w-full flex flex-col min-h-[60vh] animate-fade-in-up">
      <div className="w-full px-8 lg:px-16 pt-20 pb-12 text-center relative overflow-hidden">
        
        {/* Subtle background flair */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <Video className="w-[400px] h-[400px]" />
        </div>

        <h1 className="font-serif italic text-5xl md:text-7xl text-foreground mb-6 relative z-10">
          Professional Workshops
        </h1>
        <p className="max-w-2xl mx-auto text-foreground/70 font-medium relative z-10">
          Supercharge your skills with interactive teardowns, live coding labs, and artistic masterclasses.
        </p>
      </div>
      
      {/* Re-using the EventGallery with pre-filtered data */}
      <div className="-mt-16">
        <EventGallery events={workshopEvents} />
      </div>

      <div className="flex justify-center pb-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-foreground transition-colors uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
