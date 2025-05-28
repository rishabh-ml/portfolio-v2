# Rishabh Portfolio v2 🚀

A futuristic, dark-themed developer portfolio featuring cutting-edge animations and a minimal-spaced design built with Next.js.

## ✨ Features

- 🔮 **Futuristic Design**: Dark theme with neon accent colors (#00ffc3, #ff6eff, #a0f0ff)
- ⚡ **Next.js 15**: Built with the latest Next.js and TypeScript
- 🎨 **Minimal Spacing**: Compact, professional layout with perfect alignment
- ✨ **Rich Animations**: Advanced Framer Motion animations with spring physics
- 📱 **Fully Responsive**: Seamless experience across all devices
- 🔥 **Performance Optimized**: Fast loading with static configuration
- 🎯 **Modern UI**: Glassmorphism effects and neon glow styling
- 🔧 **JetBrains Mono**: Monospace font for a developer-focused aesthetic

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS with custom futuristic theme
- **Animations**: Framer Motion with scroll-based triggers
- **UI Components**: Custom components with ShadCN UI base
- **Typography**: JetBrains Mono font family
- **Data**: Static configuration system (no CMS dependency)

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the futuristic portfolio.

## 🎮 Features & Interactions

### Navigation
- **Scroll Navigation**: Smooth scroll to sections
- **Keyboard Navigation**: Use `j/k` or `↑/↓` arrows to navigate sections
- **Quick Jump**: `g` for top, `G` for bottom
- **Dock Navigation**: Futuristic bottom dock with all links

### Animations
- **Scroll-triggered**: Sections animate as you scroll
- **Hover Effects**: Interactive buttons and cards with neon glow
- **Particle Systems**: Floating particles in hero and achievements
- **Loading States**: Custom futuristic loader animation

### Sections
1. **Hero**: Animated background with floating particles and neon buttons
2. **About**: Glowing avatar ring with animated quick info cards
3. **Tech Stack**: Categorized skills with level indicators and animated stats
4. **Projects**: Featured projects with overlay effects and tech displays
5. **OSS Contributions**: Timeline design with animated contribution cards
6. **Achievements**: 3D card effects with floating particles and progress animations
7. **Contact**: Animated form with neon styling and contact method cards
8. **Footer**: GitHub stats and minimal footer links

## 🎨 Design System

### Colors
- **Primary Neon**: `#00ffc3` (Cyan)
- **Secondary Neon**: `#ff6eff` (Purple)  
- **Accent Neon**: `#a0f0ff` (Blue)
- **Background**: Deep black with subtle gradients

### Layout
- **Minimal Spacing**: Compact sections with tight layout control
- **Glassmorphism**: Subtle glass effects on cards and navigation
- **Responsive**: Perfect alignment across all screen sizes

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── futuristic.css     # Custom futuristic design system
│   ├── globals.css        # Base styles
│   └── layout.tsx         # Root layout with providers
├── components/
│   ├── layout/            # Navigation and footer
│   ├── providers/         # Theme, transitions, keyboard nav
│   ├── sections/          # Main portfolio sections
│   └── ui/               # Reusable UI components
└── lib/
    ├── portfolio-config.ts # Static configuration
    └── utils.ts           # Utility functions
```

## 🔧 Customization

Edit `src/lib/portfolio-config.ts` to customize:
- Personal information
- Projects and achievements
- Tech stack and skills
- Social links
- Contact information

## 📱 Responsive Design

- **Mobile**: Optimized touch interactions and mobile navigation
- **Tablet**: Balanced layout with touch-friendly elements  
- **Desktop**: Full feature experience with cursor effects

## ⚡ Performance

- **Static Generation**: Fast loading with Next.js SSG
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Optimized bundle sizes
- **Service Worker**: Basic caching for offline support

---

Built with ❤️ using cutting-edge web technologies for a truly futuristic experience.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
