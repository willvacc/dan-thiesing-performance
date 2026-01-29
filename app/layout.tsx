"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { useState } from "react";
import LogoIntro from "@/components/LogoIntro";
import SiteHeader from "@/components/SiteHeader";
import AnimatedBackdrop from "@/components/AnimatedBackdrop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">
        <LogoIntro onFinish={() => setReady(true)} />

        {ready && (
          <>
            <SiteHeader />

            <div className="relative">
              <AnimatedBackdrop />

              <main className="relative mx-auto max-w-6xl px-6 pt-28 pb-20">
                {children}
              </main>

              <footer className="relative mx-auto max-w-6xl px-6 pb-12">
                <div className="rounded-2xl border border-black/5 bg-white/70 px-6 py-4 shadow-sm backdrop-blur">
                  <div className="flex flex-col gap-2 text-sm text-black/60 sm:flex-row sm:items-center sm:justify-between">
                    <span>© {new Date().getFullYear()} Dan Thiesing Performance</span>
                    <a
                      href="https://instagram.com/danthiesing"
                      target="_blank"
                      className="text-black/70 hover:text-black transition"
                    >
                      Instagram: @danthiesing
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          </>
        )}
      </body>
    </html>
  );
}