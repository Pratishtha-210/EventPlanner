# Live Event Platform (EventFlow)

A production-grade, highly responsive live event streaming and discovery UI built with **Next.js (App Router)** and **Tailwind CSS**.

This project resolves the structural requirements of the "Frontend Engineering Assignment" while applying a highly stylized, Pinterest-inspired layout featuring interactive UI elements and dynamic mock content.

## 🧠 Approach & Architecture

- **No Backend**: Demonstrates a robust static UI rendering using local JSON stores (`data/events.js`), keeping the implementation strictly frontend.
- **Next.js (App Router)**: Adopts modern file-based routing (`/event/[id]`) with auto-generated static parameters.
- **Tailwind CSS**: Employs scalable utility classes for full mobile, tablet, and desktop responsiveness.
- **Theme Support**: Includes full dark and light mode toggle integrating CSS variable generation with `next-themes`.

## ✨ Core Features

### PART 1 — Landing Page (Discover)
- **Grid-based Layout**: Dynamically houses 15 carefully curated modern event cards.
- **Instant Search & Filter Engine**: Categorizes events instantly via state-managed filters without reload lag.
- **Sleek Event Cards**: Fully responsive hover animations featuring Like, Share, category tags, and host tracking UI.
- **Pinterest Aesthetic**: Custom layout features integrated sticker emojis, glassmorphism UI snippets, and organic shape transitions.

### PART 2 — Event Streaming Page (`/event/[id]`) (65 Marks)
- **🎥 Video Section**: Large, highly responsive Video Container (Features responsive 16:9 Youtube/Mock livestream iframe embedded natively).
- **💬 Live Chat UI**: A responsive chat panel mounted beside the video on large screens, and below on mobile. Features input box, simulated message list, and automated local scrolling (No backend required).
- **📝 Description Section**: Cleanly spaced typography beneath the event containing host details, tags, and rich event descriptions.
- **🎨 Creativity**: Custom styling features glassmorphic overlays, bounce hover transitions, rotating emoji stickers, and responsive CSS grids.

## 🛠️ Tech Stack Used
- Frontend Framework: Next.js 15 (App Router / React 19)
- CSS Framework: Tailwind CSS v4
- Icons & Visuals: `lucide-react`, Coverr Videos, Unsplash
- State Management: React Hooks (`useState`, `useEffect`)
- Advanced UI: `next-themes`

## 🚀 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-link>
   cd EventPlanner
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the development server**
   ```bash
   npm run dev
   ```
4. **Access the application**
   Navigate to `http://localhost:3000` to view the beautiful platform.

## 🌐 Deployment
This platform is optimized for Vercel deployment. Connect your repository to Vercel and it will auto-detect the `Next.js` configuration.
