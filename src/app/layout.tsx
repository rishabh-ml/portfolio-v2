import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./futuristic.css";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { CursorTrail } from "@/components/ui/cursor-trail";
import { KeyboardNavigation } from "@/components/providers/keyboard-navigation";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Rishabh Shukla - Full Stack Developer",
  description: "Futuristic developer portfolio with cutting-edge projects, open-source contributions, and achievements. Built with Next.js and TypeScript.",
  keywords: ["developer", "portfolio", "full stack", "react", "next.js", "typescript", "futuristic"],
  authors: [{ name: "Rishabh Shukla" }],
  creator: "Rishabh Shukla",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rishabh-portfolio-v2.vercel.app",
    title: "Rishabh Shukla - Full Stack Developer",
    description: "Futuristic developer portfolio with cutting-edge projects and achievements.",
    siteName: "Rishabh Shukla Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishabh Shukla - Full Stack Developer",
    description: "Futuristic developer portfolio with cutting-edge projects and achievements.",
    creator: "@rishabh_ml",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} font-mono antialiased bg-black text-white`}>
        <ThemeProvider>
          <CursorTrail />
          <KeyboardNavigation />
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
