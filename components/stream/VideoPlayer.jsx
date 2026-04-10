import { PlayCircle } from "lucide-react";

export function VideoPlayer({ event }) {
  return (
    <div className="w-full bg-black rounded-2xl overflow-hidden shadow-xl border border-surface-border relative flex flex-col group">
      {/* 16:9 Aspect Ratio Container for Responsive Video */}
      <div className="relative w-full pb-[56.25%] bg-black flex items-center justify-center overflow-hidden">
        
        {/* Placeholder Thumbnail mimicking an iframe/player */}
        <img 
          src={event.thumbnail} 
          alt={event.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        
        {/* Fake play UI or overlay elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

        {/* Top bar (Live indicator) */}
        <div className="absolute top-4 left-4 flex gap-2">
          <div className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-sm tracking-wider flex items-center gap-1.5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            LIVE
          </div>
          <div className="bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-sm">
            {event.viewers.toLocaleString()} view
          </div>
        </div>

        {/* Center Play Button for interaction feel */}
        <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto group/btn">
          <div className="bg-primary/90 rounded-full p-4 transform group-hover/btn:scale-110 transition-transform shadow-lg shadow-primary/20 backdrop-blur-md">
            <PlayCircle className="w-10 h-10 text-white" />
          </div>
        </button>

        {/* Bottom controls bar mock */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between">
          <div className="flex items-center gap-3">
             <button className="text-white hover:text-primary transition-colors"><PlayCircle className="w-6 h-6" /></button>
             <div className="h-1.5 w-32 bg-white/20 rounded-full cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-full bg-red-500 animate-pulse"></div>
             </div>
             <span className="text-white/80 text-xs font-medium">LIVE</span>
          </div>
        </div>

      </div>
    </div>
  );
}
