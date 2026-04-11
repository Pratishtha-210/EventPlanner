"use client";

import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import EventGallery from "../../components/event/EventGallery";
import { events } from "../../data/events";

export default function EventsPage() {
  return (
    <div className="w-full flex flex-col min-h-[60vh] animate-fade-in-up">
      <div className="w-full px-8 lg:px-16 pt-20 pb-10 text-center">
        <h1 className="font-serif italic text-5xl md:text-7xl text-foreground mb-6">
          All Events
        </h1>
        <p className="max-w-2xl mx-auto text-foreground/70 font-medium">
          Discover a complete catalog of ongoing and upcoming digital streams across our platform.
        </p>
      </div>
      
      {/* Re-using the robust EventGallery component for responsiveness */}
      <div className="-mt-16">
        <EventGallery events={events} />
      </div>

      <div className="flex justify-center pb-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-foreground transition-colors uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
