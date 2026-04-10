import Link from "next/link";
import { Heart, Play, Share2 } from "lucide-react";

export default function EventCard({ event, isLiked, onLikeToggle }) {
  return (
    <div className="group flex flex-col bg-surface border border-surface-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Thumbnail */}
      <Link href={`/event/${event.id}`} className="relative aspect-video overflow-hidden">
        <img 
          src={event.thumbnail} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center text-white pl-1 shadow-lg">
            <Play className="w-5 h-5" />
          </div>
        </div>
        <div className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded-md tracking-wider">
          LIVE
        </div>
        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          {event.viewers.toLocaleString()} viewers
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="text-xs font-bold text-primary mb-2 tracking-wide uppercase">
          {event.date}
        </div>
        
        <Link href={`/event/${event.id}`}>
          <h3 className="text-lg font-semibold text-foreground line-clamp-2 leading-snug mb-3 group-hover:text-primary transition-colors">
            {event.title}
          </h3>
        </Link>
        
        <div className="flex items-center gap-3 mt-auto mb-5">
          <img 
            src={event.host.avatar} 
            alt={event.host.name} 
            className="w-8 h-8 rounded-full border-2 border-surface-border object-cover"
          />
          <span className="text-sm font-medium text-foreground/80">{event.host.name}</span>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between pt-4 border-t border-surface-border/50">
          <div className="flex gap-2">
            <span className="text-xs font-medium bg-background px-2.5 py-1 rounded-full text-foreground/70 border border-surface-border">
              {event.category}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-foreground/40 hover:text-foreground transition-colors" aria-label="Share">
              <Share2 className="w-5 h-5" />
            </button>
            <button 
              onClick={() => onLikeToggle(event.id)} 
              className={`transition-colors ${isLiked ? 'text-red-500' : 'text-foreground/40 hover:text-red-500'}`}
              aria-label="Like"
            >
              <Heart className="w-5 h-5" fill={isLiked ? "currentColor" : "none"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
