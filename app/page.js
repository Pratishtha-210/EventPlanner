"use client";

import { Play, ArrowRight, Music2, Sun } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// Reliable mockup videos from coverr (Working URLs)
const MOCK_VIDEOS = [
  "https://cdn.coverr.co/videos/coverr-sunlight-in-the-forest-5244/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-a-person-playing-acoustic-guitar-outside-7153/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-beautiful-meadow-in-the-mountains-9310/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-walking-in-the-woods-5255/1080p.mp4"
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

    const scrollInterval = setInterval(() => {
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0; // Reset smoothly
      } else {
        el.scrollLeft += 1;
      }
    }, 20); // ms per pixel

    return () => clearInterval(scrollInterval);
  }, []);

  // Helper component for Video on Hover Cards
  const EventHoverCard = ({ title, desc, tagColor, imgSrc, vidSrc, idx }) => (
    <div 
      className="relative rounded-[2rem] overflow-hidden h-96 group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 flex-shrink-0 w-full md:w-[320px]"
      onMouseEnter={() => setHoverBox(idx)}
      onMouseLeave={() => setHoverBox(null)}
    >
      <img src={imgSrc} alt={title} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
      <video 
        src={vidSrc} 
        autoPlay loop muted playsInline 
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoverBox === idx ? "opacity-100" : "opacity-0"}`} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      
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
      
      {/* 1. HERO SECTION */}
      <section className="px-8 lg:px-16 pt-10 pb-20 relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 relative z-10">
          <div className="flex gap-4 order-2 md:order-1 flex-wrap">
            <button className="px-6 py-2.5 rounded-full border border-text-dark text-xs font-bold uppercase tracking-widest hover:bg-black/5 transition-colors bg-surface">
              JOIN PICNIC ☀️
            </button>
            <button className="px-6 py-2.5 rounded-full bg-text-dark text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-black/80 transition-colors shadow-xl">
              UPCOMING EVENT <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <h1 className="font-serif italic text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[0.95] text-text-dark text-right order-1 md:order-2 mb-8 md:mb-0 relative">
            A day of Sound, Sun, <br/> and Slow Living
          </h1>
        </div>

        {/* Hero Main Video Cover */}
        <div className="relative w-full h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl mt-12 bg-gray-200 group">
           
           {/* Sticker Overlapping Top */}
           <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
             <Sticker emoji="🧺" className="transform rotate-12 animate-bounce-slow" />
           </div>

           <img 
            src="https://picsum.photos/seed/fieldlove/1600/900" 
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0" 
            alt="Fieldtime flowers"
           />
           <video src={MOCK_VIDEOS[2]} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

           {/* Glassmorphic Music Player overlay */}
           <div className="absolute bottom-8 right-8 w-72 rounded-[2rem] bg-white/20 backdrop-blur-xl border border-white/50 shadow-2xl p-5 text-text-dark overflow-hidden transition-transform hover:-translate-y-2 cursor-pointer z-10">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/40 flex items-center justify-center animate-spin-slow overflow-hidden border border-white/50">
                  <img src="https://picsum.photos/seed/artist/100/100" className="w-full h-full object-cover opacity-80" />
                </div>
                <div>
                  <div className="font-bold text-sm text-white drop-shadow-md">Raining</div>
                  <div className="text-xs text-white/90 drop-shadow-md">Jean Jin Hee</div>
                </div>
             </div>
             <div className="w-full h-1.5 bg-white/40 rounded-full mb-3 overflow-hidden shadow-inner">
               <div className="h-full bg-white w-1/3 rounded-full"></div>
             </div>
             <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-white">
               <span>0:38</span> <span>4:02</span>
             </div>
           </div>
        </div>
      </section>


      {/* 2. OPEN AIR & QUOTE */}
      <section className="px-8 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative">
        <Sticker emoji="📸" className="absolute top-1/2 left-[45%] transform -translate-y-1/2 -rotate-12 hidden lg:flex" />

        <div>
          <h2 className="font-serif italic text-[3.5rem] leading-[1.1] text-text-dark relative">
            Where Moments Grow <br/> in the Open Air
          </h2>
        </div>
        <div className="flex flex-col items-start gap-6 relative z-10">
          <p className="font-bold text-sm text-text-dark/80 max-w-md leading-relaxed bg-surface/50 backdrop-blur p-4 rounded-xl">
            Fieldtime is a space to slow down and enjoy the simple things — music in the background, sunlight on your skin, and people gathering on warm spring grass.
          </p>
          <button className="px-6 py-3 rounded-full bg-text-dark text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-black/80 transition-colors">
            SEE WHATS BEHIND THE SCENE <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 3. PICNIC & QUOTE GRID */}
      <section className="px-8 lg:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 overflow-hidden rounded-[2.5rem] aspect-video relative group cursor-pointer shadow-xl hover:shadow-2xl transition-all">
            <img src="https://picsum.photos/seed/picnicparty/1200/800" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h1 className="text-white text-4xl font-bold tracking-tighter drop-shadow-xl flex items-center gap-2 border-2 border-white/20 p-4 rounded-full backdrop-blur-md bg-black/20">
                <Sun className="w-8 h-8" /> fieldtime
              </h1>
            </div>
          </div>
          <div className="bg-secondary rounded-[2.5rem] p-10 flex flex-col justify-center gap-8 shadow-xl text-white relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10">
              <Sun className="w-64 h-64" />
            </div>
            <span className="text-7xl font-serif leading-none drop-shadow-md">“</span>
            <h3 className="font-serif italic text-[2.5rem] leading-tight drop-shadow-md relative z-10">
              Because the best stage is the earth itself
            </h3>
          </div>
        </div>
      </section>

      {/* 4. COMING UP LISTING */}
      <section className="px-8 lg:px-16 py-20 bg-text-dark/5 rounded-[3rem] mx-4 mb-20 relative">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
           <Sticker emoji="🌻" className="rotate-6" />
        </div>
        
        <div className="text-center mb-16">
          <h2 className="font-serif italic text-6xl text-text-dark mb-6 text-center">
            What's Coming Up
          </h2>
          <p className="font-bold text-sm text-text-dark/70 max-w-lg mx-auto leading-relaxed">
            New seasons bring new ways to be outside — from garden concerts to soft-spring picnics and community gatherings. Join the events!
          </p>
        </div>

        {/* Scrollable Horizontal wrapper for responsive cards */}
        <div 
           ref={scrollRef} 
           className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar justify-start items-center group/scroll"
           style={{ scrollBehavior: "auto" }}
           onMouseEnter={(e) => { e.currentTarget.style.scrollBehavior = "auto"; }}
        >
          <EventHoverCard 
            title="Garden Session"
            desc="An afternoon of live acoustic and sunlight."
            tagColor="bg-[#E9A530]"
            imgSrc="https://picsum.photos/seed/garden/600/800"
            vidSrc={MOCK_VIDEOS[0]}
            idx={0}
          />
          <EventHoverCard 
            title="Field Festival"
            desc="Celebration of music, food, and local makers under trees."
            tagColor="bg-[#647B45]"
            imgSrc="https://picsum.photos/seed/festival/600/800"
            vidSrc={MOCK_VIDEOS[1]}
            idx={1}
          />
          <EventHoverCard 
            title="Nature Workshop"
            desc="Slow down and create floral crafts or plant care sessions."
            tagColor="bg-secondary"
            imgSrc="https://picsum.photos/seed/workshop/600/800"
            vidSrc={MOCK_VIDEOS[2]}
            idx={2}
          />
           <EventHoverCard 
            title="Sunset Yoga"
            desc="Stretch out under the setting sun with community friends."
            tagColor="bg-[#E9A530]"
            imgSrc="https://picsum.photos/seed/yoga/600/800"
            vidSrc={MOCK_VIDEOS[3]}
            idx={3}
          />
        </div>
      </section>

      {/* 5. BIG VIDEO EXPERIENCE */}
      <section className="px-8 lg:px-16 pb-20">
        <div className="relative w-full h-[600px] md:h-[800px] rounded-[3rem] overflow-hidden group shadow-2xl">
          <img src="https://picsum.photos/seed/cinema/1600/900" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:opacity-0" />
          <video 
            src={MOCK_VIDEOS[1]} 
            autoPlay loop muted playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          
          <div className="absolute top-16 left-8 md:left-16 z-10 flex items-start gap-4">
            <h2 className="font-serif italic text-5xl md:text-7xl text-white drop-shadow-md leading-[1.1]">
              Lay Back, Listen, <br/> Feel the Grass.
            </h2>
            <Sticker emoji="🎧" className="-m-4 rotate-12 hidden md:flex scale-75" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-24 h-24 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center hover:scale-110 hover:bg-white/40 transition-all cursor-pointer shadow-2xl">
              <Play className="w-10 h-10 text-white ml-2 drop-shadow-md" />
            </button>
          </div>

          <div className="absolute bottom-10 right-10">
            <button className="px-8 py-4 rounded-full bg-text-dark shadow-2xl text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-black transition-colors transform hover:-translate-y-1">
              TRY THE EXPERIENCE <Music2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. MOMENTS FROM THE FIELD - ADDED MASONRY CARDS */}
      <section className="px-8 lg:px-16 pt-10 pb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 relative">
          <h2 className="font-serif italic text-[4rem] text-text-dark leading-[1.1]">
            Moments from <br/> The Field 
          </h2>
          <Sticker emoji="🍓" className="absolute top-0 right-1/2 transform rotate-12 scale-90" />
          
          <button className="px-6 py-3 rounded-full bg-text-dark text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-transform hover:-translate-y-1 shadow-lg">
            VIEW ALL MOMENTS <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Moments Collage / Memory cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
           
           {/* Card 1 */}
           <div className="rounded-[2.5rem] overflow-hidden relative shadow-xl group sm:col-span-2 lg:col-span-1 border-4 border-surface">
             <img src="https://picsum.photos/seed/moment1/800/800" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-tertiary to-transparent rounded-b-[2rem]">
                <h3 className="font-serif italic text-white text-3xl mb-1">Spring Fest</h3>
                <p className="text-white/80 text-sm font-semibold">Garden concert filled with laughter.</p>
             </div>
           </div>

           {/* Card 2 */}
           <div className="rounded-[2.5rem] bg-[#E9A530] text-white p-8 flex flex-col justify-end shadow-xl relative overflow-hidden group">
             <img src="https://picsum.photos/seed/moment2/600/600" className="absolute top-0 left-0 w-full h-[60%] object-cover object-bottom" style={{ borderRadius: "0 0 50% 50% / 0 0 20% 20%" }}/>
             <div className="mt-48 relative z-10">
               <h3 className="font-serif italic text-[2.5rem] leading-none mb-2 drop-shadow-md">Sunday Picnic</h3>
               <p className="text-white/90 text-sm font-semibold">A warm memory kept close.</p>
             </div>
           </div>

           {/* Card 3 */}
           <div className="rounded-[2.5rem] bg-secondary text-white p-8 flex flex-col shadow-xl overflow-hidden shadow-secondary/30">
              <h3 className="font-serif italic text-[2.5rem] mt-2 mb-2">Bloom & Weave</h3>
              <p className="text-white/90 text-sm font-medium leading-relaxed mb-6">Pick your favorite petals, weave them together, and craft a crown that smells like spring. A happy moment to celebrate.</p>
              <img src="https://picsum.photos/seed/flowers/600/400" className="w-full h-40 object-cover rounded-2xl shadow-inner"/>
              <button className="mt-6 py-3 w-full bg-surface text-secondary font-bold text-xs rounded-full uppercase tracking-widest shadow-md">
                View Moments &rarr;
              </button>
           </div>
        </div>

        {/* 7. PACK YOUR MAT */}
        <div className="bg-secondary text-white rounded-[3rem] overflow-hidden relative shadow-2xl flex flex-col md:flex-row shadow-secondary/20">
          
          <div className="p-12 md:p-20 relative z-10 w-full md:w-[55%] flex flex-col justify-center bg-secondary">
             <h2 className="font-serif italic text-[4rem] md:text-[5rem] leading-none mb-8 drop-shadow-sm">
               Pack Your Mat
             </h2>
             <div className="space-y-6 text-white text-sm font-semibold pr-10 leading-relaxed">
               <p>Whether you're here to listen, picnic, or simply enjoy the day, there's always room for you in the field.</p>
               <p>Join us for easy gatherings under the sun — soft music, open grass, and moments made to share.</p>
               <p>Fieldtime is here for anyone who loves the outdoors.</p>
               <button className="mt-8 px-8 py-4 rounded-full bg-white text-secondary text-xs font-bold uppercase tracking-widest shadow-xl flex items-center gap-2 hover:scale-105 transition-transform w-max">
                 JOIN FIELDTIME TODAY 📍
               </button>
             </div>
          </div>
          
          {/* Masked Right Side Background image overlaying layout beautifully */}
          <div className="w-full md:w-[45%] h-64 md:h-auto relative">
            <img 
              src="https://picsum.photos/seed/mat/800/1000"
              className="absolute inset-0 w-full h-full object-cover rounded-br-[3rem]"
              alt="Picnic Mat"
            />
          </div>

          <Sticker emoji="🥐" className="absolute top-10 right-10 z-20 scale-110" />
          
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="px-8 lg:px-16 pt-32 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-text-dark/10 pb-16">
          <div className="col-span-1">
             <div className="flex items-center gap-2 text-primary mb-6">
              <Sun className="w-8 h-8 fill-primary" />
              <span className="font-bold text-2xl tracking-tighter lowercase">fieldtime</span>
            </div>
            <p className="font-serif italic text-2xl text-text-dark mb-4 drop-shadow-sm flex justify-between">
              <span>Little sunshine for<br/>your day.</span>
              <Sticker emoji="🦜" className="-mt-8 scale-75" />
            </p>
            <p className="text-[11px] text-text-dark/70 font-semibold mb-8 max-w-xs leading-relaxed">
              Fieldtime brings warm moments and open fields to anyone who loves being outside. Subscribe for early access to our upcoming events.
            </p>
            <div className="flex w-full max-w-sm rounded-[1rem] border border-text-dark/20 p-1.5 focus-within:border-primary transition-colors">
              <input type="text" placeholder="inputyouremail@here.com" className="flex-1 bg-transparent px-4 text-xs font-medium focus:outline-none placeholder:text-text-dark/40" />
              <button className="px-5 py-2.5 bg-text-dark text-white text-[10px] font-bold rounded-[0.8rem] uppercase tracking-widest hover:bg-primary transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>

          <div className="pt-2">
             <h4 className="font-serif italic text-[1.3rem] text-text-dark mb-8 font-bold">In the Field</h4>
             <ul className="flex flex-col gap-5 text-[10px] font-bold tracking-[0.2em] uppercase text-text-dark/60">
               <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
               <li className="hover:text-primary cursor-pointer transition-colors">Events</li>
               <li className="hover:text-primary cursor-pointer transition-colors">Picnic</li>
               <li className="hover:text-primary cursor-pointer transition-colors">Gallery</li>
             </ul>
          </div>
          <div className="pt-2">
             <h4 className="font-serif italic text-[1.3rem] text-text-dark mb-8 font-bold">For Everyone</h4>
             <ul className="flex flex-col gap-5 text-[10px] font-bold tracking-[0.2em] uppercase text-text-dark/60">
               <li className="hover:text-primary cursor-pointer transition-colors">Community</li>
               <li className="hover:text-primary cursor-pointer transition-colors">Weather & Safety</li>
               <li className="hover:text-primary cursor-pointer transition-colors">Volunteering</li>
             </ul>
          </div>
          <div className="relative pt-2">
             <h4 className="font-serif italic text-[1.3rem] text-text-dark mb-8 font-bold">Help & Updates</h4>
             <ul className="flex flex-col gap-5 text-[10px] font-bold tracking-[0.2em] uppercase text-text-dark/60">
               <li className="hover:text-primary cursor-pointer transition-colors">Guides</li>
               <li className="hover:text-primary cursor-pointer transition-colors">Find Us</li>
               <li className="hover:text-primary cursor-pointer transition-colors">Contact Us</li>
             </ul>

             {/* Floating sticker graphic on footer right */}
             <div className="absolute top-1/3 right-0 -mr-8 hidden xl:flex">
                <Sticker emoji="🎻" className="rotate-12 scale-125 shadow-2xl animate-bounce-slow" />
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[10px] uppercase font-bold tracking-widest text-text-dark/50 gap-4">
           <span>2024 © Fieldtime. All rights reserved.</span>
           <div className="flex gap-6">
             <span className="hover:text-primary cursor-pointer transition-colors">IG</span> 
             <span className="hover:text-primary cursor-pointer transition-colors">YT</span> 
             <span className="hover:text-primary cursor-pointer transition-colors">TT</span>
           </div>
        </div>
      </footer>

    </div>
  );
}
