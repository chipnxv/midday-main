import { DevMessage } from "@/components/dev-message";
import { Footer } from "@/components/footer";
import { FooterCTA } from "@/components/footer-cta";
import { Header } from "@/components/header";
import "@/styles/globals.css";
import { cn } from "@midday/ui/cn";
import "@midday/ui/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Provider as Analytics } from "@midday/events/client";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { baseUrl } from "./sitemap";

export const preferredRegion = ["fra1", "sfo1", "iad1"];

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Vestern",
    template: "%s | Vestern",
  },
  description:
    "Vestern provides you with greater insight into your business and automates the boring tasks, allowing you to focus on what you love to do instead.",
  openGraph: {
    title: "Vestern | The All in one Finance app",
    description:
      "AI-driven insights meet human expertise, creating a new era of intelligent investing",
    url: baseUrl,
    siteName:
      "AI-driven insights meet human expertise, creating a new era of intelligent investing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
      },
      {
        url: "",
        width: 1800,
        height: 1600,
      },
    ],
  },
  twitter: {
    title: "Vestern | The All in one Finance app",
    description:
      "AI-driven insights meet human expertise, creating a new era of intelligent investing",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
      },
      {
        url: "",
        width: 1800,
        height: 1600,
      },
    ],
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

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)" },
    { media: "(prefers-color-scheme: dark)" },
  ],
};

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${GeistSans.variable} ${GeistMono.variable}`,
          "bg-[#fbfbfb] dark:bg-[#000000] overflow-x-hidden antialiased",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="container mx-auto px-4 overflow-hidden md:overflow-visible">
            {children}
          </main>
          <FooterCTA />
          <Footer />
          <Analytics />
          <DevMessage />
        </ThemeProvider>
      </body>
    </html>
  );
}
