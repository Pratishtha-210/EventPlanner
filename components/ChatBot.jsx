"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! 👋 Welcome to fieldtime. Looking for a picnic spot?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isBot: false }]);
    setInput("");

    // Mock bot reply
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "That sounds lovely! I can help you find a community gathering just for that. 🌻", isBot: true }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 bg-surface border-2 border-primary/20 rounded-2xl shadow-xl shadow-primary/10 overflow-hidden mb-4 flex flex-col transform transition-all">
          <div className="bg-primary text-white p-4 flex items-center justify-between font-serif">
            <span className="text-lg font-bold flex items-center gap-2">
              <SunIcon className="w-5 h-5 text-yellow-200" />
              Sunny (Bot)
            </span>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full"><X className="w-4 h-4" /></button>
          </div>
          
          <div className="p-4 h-64 overflow-y-auto bg-[#FDFBF7] flex flex-col gap-3 text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={`max-w-[85%] p-3 rounded-2xl ${msg.isBot ? "bg-white border border-primary/10 text-text-dark self-start rounded-tl-sm" : "bg-primary text-white self-end rounded-tr-sm"}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-3 border-t border-primary/10 bg-white flex items-center relative">
            <input 
              type="text" 
              placeholder="Ask anything..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-[#f4f2ee] rounded-full py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-primary border border-transparent"
            />
            <button type="submit" className="absolute right-4 text-primary p-1 rounded-full hover:bg-primary/10"><Send className="w-4 h-4" /></button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:scale-105 transition-transform flex items-center justify-center relative shadow-primary/30"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-surface animate-bounce" />
        )}
      </button>
    </div>
  );
}

const SunIcon = ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" /></svg>;
