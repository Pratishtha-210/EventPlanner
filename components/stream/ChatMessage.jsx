export function ChatMessage({ message }) {
  // Simple deterministic color generation based on username for Twitch vibe
  const colors = ["text-red-500", "text-blue-500", "text-green-500", "text-yellow-500", "text-purple-500", "text-pink-500"];
  const nameColor = colors[message.user.length % colors.length];

  return (
    <div className="py-1.5 px-3 hover:bg-surface-border/30 transition-colors break-words text-sm leading-relaxed">
      <span className="text-foreground/40 text-xs mr-2">{message.time}</span>
      <span className={`font-bold mr-2 ${nameColor}`}>{message.user}</span>
      <span className="text-foreground/90">{message.text}</span>
    </div>
  );
}
