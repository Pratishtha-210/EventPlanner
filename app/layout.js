import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import { ChatBot } from "../components/ChatBot";
import { ThemeProvider } from "../components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"]
});

export const metadata = {
  title: "Eventflow | Interactive Live Event Platform",
  description: "Discover and stream premium networking events, design workshops, and tech panels in real-time.",
  keywords: ["live stream", "events", "networking", "workshops", "tech panels"],
  openGraph: {
    title: "Eventflow Live",
    description: "Your hub for premium live digital events.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} antialiased`} >
      <body className="min-h-screen text-foreground p-3 md:p-6 lg:p-10 xl:p-[3%] bg-[url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-fixed bg-center transition-colors duration-1000">
        {/* Main Floating Container */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative max-w-[1400px] w-full mx-auto bg-surface rounded-[3rem] shadow-2xl flex flex-col min-h-[90vh] border border-surface-border overflow-hidden">
            <Navbar />
            <main className="flex-1 w-full pb-20">
              {children}
            </main>
            <ChatBot />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
