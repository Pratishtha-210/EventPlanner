"use client";

import { Play, ArrowRight, Music2, Sun, Heart } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import EventGallery from "../components/event/EventGallery";
import { events } from "../data/events";

// Reliable mockup videos (Working URLs)
const MOCK_VIDEOS = [
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
];

// Component to make emojis look like cute glossy die-cut stickers
const Sticker = ({ emoji, className }) => (
  <span className={`inline-flex items-center justify-center p-3 bg-[#FBF9F6] rounded-[1.5rem] shadow-xl border border-black/5 text-4xl transition-transform hover:scale-110 ${className}`}>
    {emoji}
  </span>
);

export default function Home() {
  const [hoverBox, setHoverBox] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Not using JS interval. CSS animate-marquee handles infinite scroll perfectly.
    return () => {}
  }, []);

  // Helper component for Video on Hover Cards
  const EventHoverCard = ({ title, desc, tagColor, imgSrc, vidSrc, idx }) => (
    <div 
      className="relative rounded-[2rem] overflow-hidden h-96 group cursor-pointer shadow-md hover:shadow-2xl hover:translate-y-2 transition-all duration-700 ease-in-out flex-shrink-0 w-full md:w-[320px]"
      onMouseEnter={() => setHoverBox(idx)}
      onMouseLeave={() => setHoverBox(null)}
    >
      <img src={imgSrc} alt={title} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:opacity-0" />
      <video 
        src={vidSrc} 
        autoPlay muted loop playsInline 
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${hoverBox === idx ? "opacity-100" : "opacity-0"}`} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 transition-all duration-700 hover:bg-black/40" />
      
      <div className="absolute top-6 left-6 right-6">
        <h3 className="font-serif italic text-white text-3xl mb-1 drop-shadow-md">{title}</h3>
      </div>
      
      <div className={`absolute bottom-0 right-0 w-[85%] rounded-tl-[2rem] p-6 ${tagColor} text-white`}>
        <p className="text-sm font-semibold">{desc}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION - FINAL LAYOUT MATCH */}
      <section className="w-full bg-black min-h-[90vh] pt-28 pb-20 flex flex-col items-center relative overflow-hidden">
        
        {/* Full Section Video Background (Outer Area highlights) */}
        <video
           className="absolute inset-0 w-full h-full object-cover opacity-80"
           src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
           autoPlay
           muted
           loop
           playsInline
           style={{ position: 'absolute', zIndex: 0 }}
        ></video>
        {/* Dark overlay to ensure text is perfectly readable over the video */}
        <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }}></div>

        {/* Floating Emojis / Stickers formatted as blobs */}
        <div className="absolute top-20 left-[15%] hidden lg:flex items-center justify-center bg-white w-24 h-24 blob-shape-1 shadow-2xl transform -rotate-12 hover:scale-110 transition-transform" style={{ zIndex: 10 }}>
          <span className="text-4xl">🥂</span>
        </div>
        <div className="absolute top-1/4 right-[15%] hidden lg:flex items-center justify-center bg-white w-28 h-28 blob-shape-2 shadow-2xl transform rotate-12 hover:scale-110 transition-transform" style={{ zIndex: 10 }}>
          <span className="text-5xl">✨</span>
        </div>
        <div className="absolute top-[40%] right-[30%] hidden lg:flex items-center justify-center bg-white w-20 h-20 rounded-[2rem] shadow-2xl transform -rotate-6 hover:scale-110 transition-transform" style={{ zIndex: 20 }}>
          <span className="text-3xl text-pink-500">🎟️</span>
        </div>

        {/* Top Text Content */}
        <div className="relative flex flex-col items-center text-center px-6 max-w-4xl w-full" style={{ zIndex: 10 }}>
          <h1 className="font-serif italic text-6xl md:text-[6rem] lg:text-[7rem] leading-[0.95] text-white font-bold drop-shadow-lg mb-8">
            Plan, Discover & <br/> Experience Live
          </h1>
          
          {/* Subtext block matching the screenshot */}
          <div className="border-l-4 border-[#FFB6C1] pl-6 text-left max-w-2xl mb-10 mx-auto">
            <p className="text-white/90 font-medium text-lg md:text-xl drop-shadow-md">
              Your ultimate platform for creating unforgettable moments. Find local networking lounges, creative workshops, or host your own digital event in seconds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="#discover">
              <button className="px-8 py-3.5 rounded-full bg-[#FFB6C1] text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-2xl transform hover:scale-105">
                DISCOVER EVENTS ✨
              </button>
            </Link>
            <button className="px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/30 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-white/20 transition-colors shadow-xl transform hover:scale-105">
              START PLANNING <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Inner Block Image Display (Inner Section) without the circular mirror */}
        <div className="relative w-full max-w-5xl aspect-video md:h-[500px] mt-20 mx-6 rounded-[2.5rem] overflow-hidden shadow-2xl ring-4 ring-white/10 group" style={{ zIndex: 10 }}>
          
          {/* New Video added to the outer card as requested */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>

          {/* Static Image as requested - fades out on hover to reveal video */}
          <img
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:opacity-0"
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600"
            alt="Main Event Experience"
          />
          <div className="absolute inset-0 bg-black/10 pointer-events-none transition-colors duration-700 group-hover:bg-black/30"></div>

          {/* Floating Player Widget over Image */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-60 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/50 shadow-2xl p-4 text-white hover:scale-105 transition-transform z-20">
             <div className="flex items-center gap-3">
                <img src="https://picsum.photos/seed/host_avatar/100/100" alt="Host" className="w-12 h-12 rounded-full border-2 border-white/50 object-cover shadow-inner" />
                <div className="flex flex-col">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Now Playing</span>
                   <span className="text-sm font-serif italic text-white drop-shadow-md">Sunset DJ Set</span>
                </div>
             </div>
             <div className="w-full h-1 bg-white/30 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-white w-1/3 rounded-full animate-pulse"></div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. OPEN AIR & QUOTE -> REDEFINED FOR EVENTS */}
      <section className="px-8 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative">
        <Sticker emoji="🥂" className="absolute top-1/2 left-[45%] transform -translate-y-1/2 -rotate-12 hidden lg:flex" />

        <div>
          <h2 className="font-serif italic text-[3.5rem] leading-[1.1] text-foreground relative">
            Where Communities <br/> Come Together Live
          </h2>
        </div>
        <div className="flex flex-col items-start gap-6 relative z-10">
          <p className="font-bold text-sm text-foreground/80 max-w-md leading-relaxed bg-surface/50 backdrop-blur p-4 rounded-xl">
            Whether it's a cozy creative workshop, an energetic tech mixer, or a virtual music session, we bring the best events right to your screen. Network, chat, and engage in real-time.
          </p>
          <Link href="#discover">
            <button className="px-6 py-3 rounded-full bg-foreground text-background text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-black/80 transition-colors">
              SEE ALL EXPERIENCES <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>


      {/* 3. ASSIGNMENT REQUIREMENT: EVENT GALLERY */}
      <EventGallery events={events} />


      {/* 4. CURATED COLLECTIONS */}
      <section className="px-8 lg:px-16 py-20 bg-foreground/5 rounded-[3rem] mx-4 mb-20 relative overflow-hidden">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
           <Sticker emoji="✨" className="rotate-6" />
        </div>
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="font-serif italic text-6xl text-foreground mb-6 text-center">
            Editor's Picks
          </h2>
          <p className="font-bold text-sm text-foreground/70 max-w-lg mx-auto leading-relaxed">
            A curated selection of the most anticipated networking lounges, live streams, and creative workshops happening this week.
          </p>
        </div>

        {/* Scrollable Horizontal wrapper for responsive cards */}
        <div className="relative w-full overflow-hidden mask-edges pb-8">
          <div 
             className="flex gap-6 justify-start items-center group/scroll w-[200%] animate-marquee hover:[animation-play-state:paused]"
          >
            {/* Double the cards for a seamless auto-rotate marquee loop */}
            {[1, 2].map((setIndex) => (
              <div key={setIndex} className="flex gap-6 flex-shrink-0 w-1/2">
                <EventHoverCard 
                  title="Design Lab"
                  desc="Interactive UI/UX live teardown sessions."
                  tagColor="bg-primary"
                  imgSrc="https://picsum.photos/seed/edit1/800/600"
                  vidSrc={MOCK_VIDEOS[0]}
                  idx={`${setIndex}-0`}
                />
                <EventHoverCard 
                  title="Indie Showcase"
                  desc="Discover breaking artists in our digital lounge."
                  tagColor="bg-[#647B45]"
                  imgSrc="https://picsum.photos/seed/edit2/800/600"
                  vidSrc={MOCK_VIDEOS[1]}
                  idx={`${setIndex}-1`}
                />
                <EventHoverCard 
                  title="Startup Mixer"
                  desc="Pitch your ideas to a live audience and investors."
                  tagColor="bg-secondary"
                  imgSrc="https://picsum.photos/seed/edit3/800/600"
                  vidSrc={MOCK_VIDEOS[2]}
                  idx={`${setIndex}-2`}
                />
                <EventHoverCard 
                  title="Wellness Flow"
                  desc="Virtual yoga and mindfulness retreats."
                  tagColor="bg-primary"
                  imgSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
                  vidSrc={MOCK_VIDEOS[3]}
                  idx={`${setIndex}-3`}
                />
                <EventHoverCard 
                  title="Creator Guild"
                  desc="Collaborate with content creators worldwide."
                  tagColor="bg-[#F38D9A]"
                  imgSrc="https://picsum.photos/seed/edit5/800/600"
                  vidSrc={MOCK_VIDEOS[0]}
                  idx={`${setIndex}-4`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BIG VIDEO EXPERIENCE */}
      <section className="px-8 lg:px-16 pb-20">
        <div className="relative w-full h-[600px] md:h-[800px] rounded-[3rem] overflow-hidden group shadow-2xl">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:opacity-0" />
          <video 
            src={MOCK_VIDEOS[1]} 
            autoPlay muted loop playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
          
          <div className="absolute top-16 left-8 md:left-16 z-10 flex items-start gap-4">
            <h2 className="font-serif italic text-5xl md:text-7xl text-white drop-shadow-md leading-[1.1]">
              Immerse Yourself <br/> in Live Events.
            </h2>
            <Sticker emoji="🎟️" className="-m-4 rotate-12 hidden md:flex scale-75" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-24 h-24 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center hover:scale-110 hover:bg-white/40 transition-all duration-700 cursor-pointer shadow-2xl">
              <Play className="w-10 h-10 text-background ml-2 drop-shadow-md" />
            </button>
          </div>

          <div className="absolute bottom-10 right-10">
            <Link href={`/event/${events[0].id}`}>
              <button className="px-8 py-4 rounded-full bg-foreground shadow-2xl text-background text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-foreground/80 transition-all duration-700 transform hover:translate-y-2">
                JOIN THE LIVE STREAM <Music2 className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="px-8 lg:px-16 pt-32 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-foreground/10 pb-16">
          <div className="col-span-1">
             <div className="flex items-center gap-2 text-primary mb-6">
              <Sun className="w-8 h-8 fill-primary" />
              <span className="font-bold text-2xl tracking-tighter lowercase">eventflow</span>
            </div>
            <p className="font-serif italic text-2xl text-foreground mb-4 drop-shadow-sm flex justify-between">
              <span>Bringing amazing<br/>events to you.</span>
              <Sticker emoji="🏹" className="-mt-8 scale-75" />
            </p>
            <p className="text-[11px] text-foreground/70 font-semibold mb-8 max-w-xs leading-relaxed">
              Eventflow bridges the gap between digital and physical events. Join us today.
            </p>
            <div className="flex w-full max-w-sm rounded-[1rem] border border-foreground/20 p-1.5 focus-within:border-primary transition-colors">
              <input type="text" placeholder="inputyouremail@here.com" className="flex-1 bg-transparent px-4 text-xs font-medium focus:outline-none placeholder:text-foreground/40" />
              <button className="px-5 py-2.5 bg-foreground text-background text-[10px] font-bold rounded-[0.8rem] uppercase tracking-widest hover:bg-primary transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>

          <div className="pt-2">
             <h4 className="font-serif italic text-[1.3rem] text-foreground mb-4 md:mb-8 font-bold">Discover</h4>
             <ul className="flex flex-row flex-wrap md:flex-col gap-4 md:gap-5 text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/60">
               <li className="hover:text-primary cursor-pointer transition-colors block">Digital Events</li>
               <li className="hover:text-primary cursor-pointer transition-colors block">Workshops</li>
               <li className="hover:text-primary cursor-pointer transition-colors block">Networking</li>
               <li className="hover:text-primary cursor-pointer transition-colors block">Tech Panels</li>
             </ul>
          </div>
          <div className="pt-2">
             <h4 className="font-serif italic text-[1.3rem] text-foreground mb-4 md:mb-8 font-bold">For Creators</h4>
             <ul className="flex flex-row flex-wrap md:flex-col gap-4 md:gap-5 text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/60">
               <li className="hover:text-primary cursor-pointer transition-colors block">Host an Event</li>
               <li className="hover:text-primary cursor-pointer transition-colors block">Ticketing Fees</li>
               <li className="hover:text-primary cursor-pointer transition-colors block">Sponsorships</li>
             </ul>
          </div>
          <div className="relative pt-2">
             <h4 className="font-serif italic text-[1.3rem] text-foreground mb-4 md:mb-8 font-bold">Support</h4>
             <ul className="flex flex-row flex-wrap md:flex-col gap-4 md:gap-5 text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/60 border-b md:border-none pb-6 md:pb-0 border-foreground/10">
               <li className="hover:text-primary cursor-pointer transition-colors block">Help Center</li>
               <li className="hover:text-primary cursor-pointer transition-colors block">Guidelines</li>
               <li className="hover:text-primary cursor-pointer transition-colors block">Contact Us</li>
             </ul>

             {/* Floating sticker graphic on footer right */}
             <div className="absolute top-1/3 right-0 -mr-8 hidden xl:flex">
                <Sticker emoji="🎧" className="rotate-12 scale-125 shadow-2xl animate-bounce-slow" />
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[10px] uppercase font-bold tracking-widest text-foreground/50 gap-4">
           <span>2026 © Eventflow. All rights reserved.</span>
           <div className="flex gap-6">
             <span className="hover:text-primary cursor-pointer transition-colors">IG</span> 
             <span className="hover:text-primary cursor-pointer transition-colors">TW</span> 
             <span className="hover:text-primary cursor-pointer transition-colors">LN</span>
           </div>
        </div>
      </footer>

    </div>
  );
}
