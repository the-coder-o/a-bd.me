import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { ThemeProvider } from "@/app/components/ThemeProvider";
import Navigation from "@/app/components/Navigation";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  metadataBase: new URL("https://a-bd.me"),
  title: "Abdul Basit",
  description:
    "Tashkent-based Software Engineer and a Content Creator, sharing insights on well-designed products and technology advancements.",
  openGraph: {
    title: "Abdul Basit",
    url: "https://a-bd-me/",
    images: [{ url: "https://b-r.io/api/og?title=B-R.io", alt: "b-r.io" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <body className="width-full bg-contrast text-primary antialiased dark:bg-primary">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navigation />
            <div className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
              {children}
            </div>
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
