"use client";

import { useState, useRef, useEffect } from "react";
import { SendHorizontal, Smile } from "lucide-react";
import { ChatMessage } from "./ChatMessage";

const INITIAL_MESSAGES = [
  { id: 1, user: "TrailBlazer99", text: "Whoa the quality of this stream is insane!", time: "10:01" },
  { id: 2, user: "MountainGoat", text: "Has anyone seen Bear yet?", time: "10:02" },
  { id: 3, user: "SurvivalistFan", text: "He said he'd start showing the water trick at 10:15", time: "10:02" },
  { id: 4, user: "EchoOutdoors", text: "Audio is a bit low, or is it just me?", time: "10:03" },
  { id: 5, user: "CampFireCozy", text: "Audio is fine here, try refreshing.", time: "10:04" },
];

export function ChatBox() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulate incoming messages occasionally
  useEffect(() => {
    const interval = setInterval(() => {
      const mockUsers = ["HikerPro", "NatureLover", "Camper24", "ExplorerMike", "RiverRafting"];
      const mockTexts = ["Looks beautiful out there!", "Wow! 😍", "Is that a bear track?", "Following this strictly.", "+1", "Can't wait to go there next week!"];
      
      const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
      const randomText = mockTexts[Math.floor(Math.random() * mockTexts.length)];
      
      const now = new Date();
      const timeStr = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

      setMessages(prev => [...prev, {
        id: Date.now(),
        user: randomUser,
        text: randomText,
        time: timeStr
      }]);
    }, 8000); // New message every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const now = new Date();
    const timeStr = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

    setMessages(prev => [...prev, {
      id: Date.now(),
      user: "You",
      text: inputValue,
      time: timeStr
    }]);
    setInputValue("");
  };

  return (
    <div className="flex flex-col h-[500px] lg:h-full bg-surface border border-surface-border rounded-2xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="h-14 border-b border-surface-border flex items-center justify-center bg-surface/50 font-bold tracking-wide">
        LIVE CHAT
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto scrollbar-thin py-2">
        {messages.map(msg => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        <div ref={endOfMessagesRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 border-t border-surface-border bg-background">
        <form onSubmit={handleSendMessage} className="relative flex items-center">
          <button type="button" className="absolute left-3 text-foreground/40 hover:text-foreground transition-colors">
            <Smile className="w-5 h-5" />
          </button>
          <input
            type="text"
            placeholder="Send a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full bg-surface border border-surface-border rounded-xl pl-10 pr-12 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 text-foreground"
          />
          <button 
            type="submit" 
            disabled={!inputValue.trim()}
            className="absolute right-2 p-1.5 bg-primary text-white rounded-lg disabled:opacity-50 disabled:bg-surface-border disabled:text-foreground/40 transition-colors"
          >
            <SendHorizontal className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
