"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SiteHeader() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            animate={{
                backgroundColor: scrolled
                    ? "rgba(255,255,255,0.78)"
                    : "rgba(255,255,255,0)",
                backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
                borderColor: scrolled ? "rgba(0,0,0,0.06)" : "rgba(0,0,0,0)",
            }}
            transition={{ duration: 0.22 }}
            style={{
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
            }}
            className="fixed top-0 z-50 w-full"
        >
            <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">

                {/* LOGO */}
                <motion.div whileTap={{ scale: 0.97 }}>
                    <Link href="/" className="flex items-center gap-3 group">
                        <img
                            src="/logo.png"
                            alt="Dan Theising Performance"
                            className="
      h-11 w-auto cursor-pointer
      transition-transform duration-200
      group-hover:scale-110
      group-hover:rotate-[-2deg]
    "
                        />
                        <span
                            className="
      font-semibold tracking-tight
      text-black/90
      transition-all duration-200
      group-hover:text-black
      group-hover:underline
      underline-offset-4
      cursor-pointer
    "
                        >
                            Dan Theising Performance
                        </span>
                    </Link>
                </motion.div>

                {/* NAV */}
                <nav className="flex items-center gap-6 text-sm text-black/60">
                    <Link className="hover:text-black transition" href="/programs">
                        Programs
                    </Link>
                    <Link className="hover:text-black transition" href="/coaching">
                        1 on 1 Coaching
                    </Link>
                    <Link className="hover:text-black transition" href="/contact">
                        Contact
                    </Link>
                    <a
                        href="https://instagram.com/danthiesing"
                        target="_blank"
                        className="hover:text-black transition text-blue-600"
                    >
                        Instagram
                    </a>
                </nav>
            </div>
        </motion.header>
    );
}
