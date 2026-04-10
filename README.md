# Fieldtime Livestream Event Platform

A production-grade, highly responsive live event streaming UI built with Next.js (App Router) and Tailwind CSS.
Influenced by the layout and aesthetics of "Fieldtime - Outdoor Event Website" but integrated with interactive twitch-style livestream components.

## Tech Stack
- Frontend Framework: Next.js 15 (App Router)
- CSS Framework: Tailwind CSS v4
- Icons & Theme: `lucide-react`, `next-themes`
- Data Layer: Static JSON (`/data/events.js`)

## Features
- **Dual Theme Support:** Fully optimized light and dark modes toggle.
- **Event Discovery:** Responsive grid view populated by robust categorization filters and beautiful event previews.
- **Simulated Chat:** An animated chat layout that auto-scrolls simulating an active user base in real time.
- **Live Event Player:** 16:9 sticky iframe/mock container layout inspired by Twitch layout (70% video, 30% chat).

## Setup Steps
1. Clone the repository
   ```bash
   git clone https://github.com/Pratishtha-210/EventPlanner.git
   cd EventPlanner
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Run the development server
   ```bash
   npm run dev
   ```
4. Navigate to `http://localhost:3000` to view the platform.

## Deployment
Deploy effortlessly on **Vercel**:
1. Connect your GitHub repository to Vercel.
2. Select standard Next.js preset.
3. Deploy!
