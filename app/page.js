"use client";

import { Play, ArrowRight, Music2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock animated video array
const MOCK_VIDEOS = [
  "https://cdn.pixabay.com/video/2021/08/04/83896-584742261_tiny.mp4",
  "https://cdn.pixabay.com/video/2019/11/24/29524-376510343_tiny.mp4",
  "https://cdn.pixabay.com/video/2020/05/17/39097-422176466_tiny.mp4"
];

export default function Home() {
  const [hoverBox, setHoverBox] = useState(null);

  // Helper component for Video on Hover Cards
  const EventHoverCard = ({ title, desc, tagColor, imgSrc, vidSrc, idx }) => (
    <div 
      className="relative rounded-3xl overflow-hidden h-96 group cursor-pointer shadow-sm"
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
      
      <div className={`absolute bottom-0 right-0 max-w-[80%] rounded-tl-3xl p-6 ${tagColor} text-white`}>
        <p className="text-sm font-semibold">{desc}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION */}
      <section className="px-8 lg:px-16 pt-10 pb-20 relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
          <div className="flex gap-4 order-2 md:order-1 flex-wrap">
            <button className="px-6 py-2.5 rounded-full border border-text-dark text-xs font-bold uppercase tracking-widest hover:bg-black/5 transition-colors">
              JOIN PICNIC ☀️
            </button>
            <button className="px-6 py-2.5 rounded-full bg-text-dark text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-black/80 transition-colors shadow-xl">
              UPCOMING EVENT <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <h1 className="font-serif italic text-[4rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.9] text-text-dark text-right order-1 md:order-2 mb-8 md:mb-0 relative z-10">
            A day of Sound, Sun, <br/> and Slow Living
          </h1>
        </div>

        {/* Hero Main Image/Video */}
        <div className="relative w-full h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-xl mt-12 bg-gray-200">
           {/* Sticker */}
           <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 hidden md:block animate-bounce shadow-xl rounded-full bg-white p-2 transform rotate-12">
             <span className="text-5xl">🧺</span>
           </div>

           <img 
            src="https://images.unsplash.com/photo-1490750967868-88cb4ecb0701?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Fieldtime flowers"
           />

           {/* Glassmorphic Music Player */}
           <div className="absolute bottom-8 right-8 w-64 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 shadow-2xl p-4 text-white overflow-hidden group cursor-pointer hover:bg-white/30 transition-colors">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center animate-spin-slow">
                  <Music2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-sm">Raining</div>
                  <div className="text-xs text-white/80">Jean Jin Hee</div>
                </div>
             </div>
             <div className="w-full h-1 bg-white/30 rounded-full mb-3 overflow-hidden">
               <div className="h-full bg-white w-1/3"></div>
             </div>
             <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-white/80">
               <span>0:38</span> <span>4:02</span>
             </div>
           </div>
        </div>
      </section>


      {/* 2. OPEN AIR & QUOTE */}
      <section className="px-8 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-serif italic text-[3.5rem] leading-[1.1] text-text-dark relative">
            Where Moments Grow <br/> in the Open Air
            <span className="absolute top-1/2 -right-4 transform rotate-12 text-5xl inline-block drop-shadow-xl z-10 w-16 h-16 bg-white rounded-2xl p-2">
              📸
            </span>
          </h2>
        </div>
        <div className="flex flex-col items-start gap-6">
          <p className="font-bold text-sm text-text-dark/80 max-w-md leading-relaxed">
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
          <div className="md:col-span-2 overflow-hidden rounded-[2.5rem] aspect-video relative group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow">
            <video src={MOCK_VIDEOS[0]} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h1 className="text-white text-4xl font-bold tracking-tighter drop-shadow-xl flex items-center gap-2">
                <Sun className="w-10 h-10" /> fieldtime
              </h1>
            </div>
          </div>
          <div className="bg-secondary rounded-[2.5rem] p-10 flex flex-col justify-between shadow-lg text-white">
            <span className="text-6xl font-serif opacity-80">“</span>
            <h3 className="font-serif italic text-4xl leading-tight">
              Because the best stage is the earth itself
            </h3>
          </div>
        </div>
      </section>

      {/* 4. COMING UP LISTING */}
      <section className="px-8 lg:px-16 py-20 text-center">
        <h2 className="font-serif italic text-6xl text-text-dark flex justify-center items-center gap-2 mb-6">
          What's Coming Up <span className="animate-spin-slow text-4xl drop-shadow-xl">🌻</span>
        </h2>
        <p className="font-bold text-sm text-text-dark/70 max-w-lg mx-auto mb-16">
          New seasons bring new ways to be outside — from garden concerts to soft-spring picnics and community gatherings.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <EventHoverCard 
            title="Garden Sound Session"
            desc="An afternoon of live acoustic and sunlight."
            tagColor="bg-[#E9A530]"
            imgSrc="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=600"
            vidSrc={MOCK_VIDEOS[1]}
            idx={0}
          />
          <EventHoverCard 
            title="Field Festival"
            desc="Celebration of music, food, and local makers under the trees."
            tagColor="bg-[#647B45]"
            imgSrc="https://images.unsplash.com/photo-1533174000255-a681c19b48b6?auto=format&fit=crop&q=80&w=600"
            vidSrc={MOCK_VIDEOS[2]}
            idx={1}
          />
          <EventHoverCard 
            title="Nature Workshop"
            desc="Slow down and create floral crafts, plant care, or sound healing sessions."
            tagColor="bg-secondary"
            imgSrc="https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&q=80&w=600"
            vidSrc={MOCK_VIDEOS[0]}
            idx={2}
          />
        </div>
      </section>

      {/* 5. BIG VIDEO EXPERIENCE */}
      <section className="px-8 lg:px-16 py-10">
        <div className="relative w-full h-[600px] md:h-[800px] rounded-[2.5rem] overflow-hidden group">
          <video 
            src={MOCK_VIDEOS[0]} 
            autoPlay loop muted playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="absolute top-16 left-16">
            <h2 className="font-serif italic text-6xl text-white drop-shadow-lg leading-tight">
              Lay Back, Listen, <br/> 
              <span className="flex items-center gap-4">
                <span className="p-2 bg-white rounded-xl shadow-lg transform -rotate-6">🎧</span> 
                Feel the Grass.
              </span>
            </h2>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-24 h-24 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 hover:bg-white/50 transition-all cursor-pointer">
              <Play className="w-10 h-10 text-white ml-2" />
            </button>
          </div>

          <div className="absolute bottom-10 right-10">
            <button className="px-8 py-4 rounded-full bg-text-dark/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-black transition-colors">
              TRY THE EXPERIENCE 🎵
            </button>
          </div>
        </div>
      </section>

      {/* 6. MOMENTS & PACK YOUR MAT */}
      <section className="px-8 lg:px-16 py-20 pb-0">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-serif italic text-6xl text-text-dark leading-none">
            Moments from <br/> The Field <span className="inline-block transform -rotate-12 text-5xl">🍓</span>
          </h2>
          <button className="px-6 py-3 rounded-full bg-text-dark text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            VIEW ALL MOMENTS <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-secondary text-white rounded-[3rem] overflow-hidden relative">
          {/* Custom curvy shape overlay simulation via a pseudo element or an image */}
          <div className="p-16 relative z-10 w-full md:w-1/2">
             <h2 className="font-serif italic text-[5rem] leading-none mb-8 drop-shadow-md">
               Pack Your Mat
             </h2>
             <div className="space-y-6 text-white/90 text-sm font-medium pr-10">
               <p>Whether you're here to listen, picnic, or simply enjoy the day, there's always room for you in the field.</p>
               <p>Join us for easy gatherings under the sun — soft music, open grass, and moments made to share.</p>
               <p>Fieldtime is here for anyone who loves the outdoors.</p>
               <button className="mt-8 px-6 py-3 rounded-full bg-white text-secondary text-xs font-bold uppercase tracking-widest shadow-xl flex items-center gap-2 hover:scale-105 transition-transform">
                 JOIN FIELDTIME TODAY 📍
               </button>
             </div>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1596404179374-e35041a02b1f?auto=format&fit=crop&q=80&w=1200"
            className="absolute top-0 right-0 w-2/3 h-full object-cover object-left mask-wave"
            alt="Picnic Mat"
            style={{ WebkitMaskImage: "radial-gradient(ellipse at left, transparent 40%, black 60%)" }}
          />

          {/* Floating Polaroid Stickers */}
          <div className="absolute bottom-12 left-[40%] bg-white p-2 rounded-lg shadow-2xl transform rotate-6 z-20">
            <img src={MOCK_VIDEOS[2].replace(".mp4", "_thumbnail.jpg")} className="w-32 h-32 object-cover rounded" />
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="px-8 lg:px-16 pt-32 pb-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-text-dark/10 pb-16">
          <div className="col-span-1">
             <div className="flex items-center gap-2 text-primary mb-6">
              <Sun className="w-6 h-6 fill-primary" />
              <span className="font-bold text-xl tracking-tighter lowercase">fieldtime</span>
            </div>
            <p className="font-serif italic text-2xl text-text-dark mb-4 drop-shadow-sm flex items-center gap-2">
              Little sunshine for your day. <span className="text-3xl">🦜</span>
            </p>
            <p className="text-xs text-text-dark/60 font-medium mb-8 max-w-xs">
              Fieldtime brings warm moments and open fields to anyone who loves being outside. Subscribe for early access.
            </p>
            <div className="flex w-full max-w-sm rounded-full border border-text-dark/20 p-1">
              <input type="text" placeholder="inputyouremail@here.com" className="flex-1 bg-transparent px-4 text-xs font-medium focus:outline-none placeholder:text-text-dark/30" />
              <button className="px-5 py-2 bg-text-dark text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
                SUBSCRIBE
              </button>
            </div>
          </div>

          <div>
             <h4 className="font-serif italic text-2xl text-text-dark mb-6">In the Field</h4>
             <ul className="flex flex-col gap-4 text-xs font-bold tracking-widest uppercase text-text-dark/70">
               <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
               <li className="hover:text-primary cursor-pointer transition-colors">Events</li>
               <li className="hover:text-primary cursor-pointer transition-colors">Picnic</li>
               <li className="hover:text-primary cursor-pointer transition-colors">Gallery</li>
             </ul>
          </div>
          <div>
             <h4 className="font-serif italic text-2xl text-text-dark mb-6">For Everyone</h4>
             <ul className="flex flex-col gap-4 text-xs font-bold tracking-widest uppercase text-text-dark/70">
               <li className="hover:text-primary cursor-pointer transition-colors">Community</li>
               <li className="hover:text-primary cursor-pointer transition-colors">Weather & Safety</li>
               <li className="hover:text-primary cursor-pointer transition-colors">Volunteering</li>
             </ul>
          </div>
          <div className="relative">
             <h4 className="font-serif italic text-2xl text-text-dark mb-6">Help & Updates</h4>
             <ul className="flex flex-col gap-4 text-xs font-bold tracking-widest uppercase text-text-dark/70">
               <li className="hover:text-primary cursor-pointer transition-colors">Guides</li>
               <li className="hover:text-primary cursor-pointer transition-colors">Find Us</li>
               <li className="hover:text-primary cursor-pointer transition-colors">Contact Us</li>
             </ul>

             {/* Floating sticker graphic on footer right */}
             <div className="absolute top-1/2 right-0 md:-right-10 transform translate-x-1/2 -rotate-12 animate-bounce-slow opacity-80">
                <span className="text-6xl drop-shadow-xl p-2 bg-white rounded-full">🎻</span>
             </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-8 text-[10px] uppercase font-bold tracking-widest text-text-dark/50">
           <span>2024 © Fieldtime. All rights reserved.</span>
           <div className="flex gap-4">
             <span>IG</span> <span>YT</span> <span>TT</span>
           </div>
        </div>
      </footer>

    </div>
  );
}
