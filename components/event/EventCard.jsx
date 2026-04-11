import Link from "next/link";
import { Heart, Play, Share2 } from "lucide-react";

const categoryEmojis = {
  Networking: "🤝",
  Music: "🎵",
  Tech: "💻",
  Art: "🎨",
  Photography: "📸",
  Fashion: "👗",
  Wellness: "🧘‍♀️",
  Food: "🥐",
  Business: "💼",
  Writing: "✍️",
  Lifestyle: "🪴"
};

export default function EventCard({ event, isLiked, onLikeToggle }) {
  return (
    <div 
      className="group flex flex-col border border-surface-border rounded-[2rem] overflow-visible shadow-md hover:shadow-2xl transition-all duration-700 ease-in-out hover:translate-y-2 hover:border-primary/30 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${event.thumbnail})` }}
    >
      {/* Heavy Frost Overlay to make the back image look like a soft ghosted tint of the card */}
      <div className="absolute inset-0 bg-surface/95 dark:bg-surface/90 backdrop-blur-2xl rounded-[2rem] z-0 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col flex-1">
        {/* Thumbnail */}
        <Link href={`/event/${event.id}`} className="relative aspect-video overflow-hidden rounded-t-[2rem]">
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
        <div className="flex items-center justify-between px-5 pb-5 pt-4">
          <div className="flex gap-2">
            <span className="text-xs font-medium bg-background px-2.5 py-1 rounded-full text-foreground/70 border border-surface-border group-hover:border-primary/40 transition-colors flex items-center gap-1.5">
              <span>{categoryEmojis[event.category] || "📅"}</span>
              {event.category}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link href={`/event/${event.id}`}>
              <button className="text-[10px] font-bold uppercase tracking-wider bg-foreground text-background px-3 py-1.5 rounded-full hover:bg-primary transition-colors">
                View
              </button>
            </Link>
            <button className="text-foreground/40 hover:text-foreground transition-colors" aria-label="Share">
              <Share2 className="w-5 h-5" />
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); onLikeToggle(event.id); }} 
              className={`transition-all duration-300 transform active:scale-75 cursor-pointer z-20 relative ${isLiked ? 'text-[#ff3040] scale-125 drop-shadow-md' : 'text-foreground/40 hover:text-[#ff3040] hover:scale-110'}`}
              aria-label="Like"
            >
              <Heart className={`w-5 h-5 transition-all duration-300 ${isLiked ? 'animate-fade-in-up' : ''}`} fill={isLiked ? "#ff3040" : "none"} color={isLiked ? "#ff3040" : "currentColor"} strokeWidth={isLiked ? 0 : 2} />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
