import { events } from "../../../data/events";
import { VideoPlayer } from "../../../components/stream/VideoPlayer";
import { ChatBox } from "../../../components/stream/ChatBox";
import { Calendar, Users, Share2, Heart, AlertCircle } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function EventStreamPage({ params }) {
  // Await params since Next.js 15+ expects params to be a promise in server components
  const resolvedParams = await params;
  const eventId = resolvedParams.id;
  
  const event = events.find(e => e.id === eventId);

  if (!event) {
    notFound();
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 pb-20">
      
      {/* Left Column: Video & Description (Takes 70% space on desktop) */}
      <div className="flex-[7] flex flex-col gap-6">
        
        {/* Breadcrumb / Back Navigation */}
        <Link href="/" className="inline-flex items-center text-sm font-medium text-foreground/60 hover:text-primary transition-colors mb-2">
          &larr; Back to Events
        </Link>

        {/* Video Player Component */}
        <VideoPlayer event={event} />

        {/* Event Details Section */}
        <div className="bg-surface border border-surface-border rounded-2xl p-6 shadow-sm mt-2">
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <div className="text-primary font-bold text-sm mb-2">{event.date}</div>
              <h1 className="text-3xl font-bold text-foreground mb-4">{event.title}</h1>
              
              {/* Event Meta Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-background border border-surface-border rounded-full text-sm font-medium text-foreground/80">
                  {event.category}
                </span>
                {event.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-surface-border/30 rounded-full text-sm text-foreground/60">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Interaction Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-surface-border hover:bg-surface-border/50 text-foreground transition-colors font-medium">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors font-medium shadow-md shadow-primary/20">
                <Heart className="w-5 h-5" />
                <span>React</span>
              </button>
            </div>
          </div>

          <div className="w-full h-px bg-surface-border my-6"></div>

          {/* Description & Host Info */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Host info */}
            <div className="w-full md:w-64 shrink-0 flex flex-col gap-4">
              <h3 className="text-sm font-bold text-foreground/50 uppercase tracking-widest">Hosted By</h3>
              <div className="flex items-center gap-4">
                <img 
                  src={event.host.avatar} 
                  alt={event.host.name} 
                  className="w-14 h-14 rounded-full border-2 border-primary/20 object-cover"
                />
                <div>
                  <div className="font-bold text-foreground text-lg">{event.host.name}</div>
                  <div className="text-foreground/60 text-sm">Pro Organizer</div>
                </div>
              </div>
              <button className="mt-2 w-full py-2 bg-background border border-surface-border rounded-lg text-sm font-semibold hover:border-primary/50 transition-colors">
                Follow Host
              </button>
            </div>

            {/* About */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-3">About this Event</h3>
              <p className="text-foreground/80 leading-relaxed max-w-3xl">
                {event.description}
              </p>
              
              {/* Fake report button */}
              <button className="mt-8 flex items-center gap-2 text-sm text-foreground/40 hover:text-red-500 transition-colors">
                <AlertCircle className="w-4 h-4" />
                Report stream issue
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Right Column: Chat (Takes 30% space on desktop) */}
      <div className="flex-[3] sticky top-24 min-h-[500px] h-[calc(100vh-8rem)]">
        <ChatBox />
      </div>

    </div>
  );
}

// Generate static params for all mock events
export function generateStaticParams() {
  return events.map((event) => ({
    id: event.id,
  }));
}
