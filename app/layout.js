import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import { ChatBot } from "../components/ChatBot";

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
  title: "Fieldtime | Outdoor Event Platform",
  description: "A day of Sound, Sun, and Slow Living.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} antialiased`} >
      <body className="min-h-screen text-foreground p-4 md:p-8 lg:p-12">
        {/* Main Floating Container */}
        <div className="relative max-w-[1400px] w-full mx-auto bg-surface rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col min-h-[90vh]">
          <Navbar />
          <main className="flex-1 w-full pb-20">
            {children}
          </main>
          
          <ChatBot />
        </div>
      </body>
    </html>
  );
}
