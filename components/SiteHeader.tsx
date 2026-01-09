"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SiteHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

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
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* LOGO */}
                <motion.div whileTap={{ scale: 0.97 }}>
                    <Link
                        href="/"
                        className="flex items-center gap-3 group"
                        onClick={() => setOpen(false)}
                    >
                        <img
                            src="/logo.png"
                            alt="Dan Thiesing Performance"
                            className="h-11 w-auto transition-transform duration-200 group-hover:scale-110 group-hover:rotate-[-2deg]"
                        />
                        <span className="hidden sm:inline font-semibold tracking-tight text-black/90 transition-all duration-200 group-hover:underline underline-offset-4">
                            Dan Thiesing Performance
                        </span>
                    </Link>
                </motion.div>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-6 text-sm text-black/60">
                    <Link href="/programs" className="hover:text-black transition">
                        Programs
                    </Link>
                    <Link href="/coaching" className="hover:text-black transition">
                        1 on 1 Coaching
                    </Link>
                    <Link href="/contact" className="hover:text-black transition">
                        Contact
                    </Link>
                    <a
                        href="https://instagram.com/danthiesing"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:text-black transition"
                    >
                        Instagram
                    </a>
                </nav>

                {/* MOBILE TOGGLE */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden rounded-lg border border-black/10 bg-white/80 px-3 py-2 text-sm font-medium text-black/70 backdrop-blur transition hover:bg-white"
                    aria-label="Toggle menu"
                >
                    {open ? "Close" : "Menu"}
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden absolute top-full left-0 w-full border-t border-black/5 bg-white/90 backdrop-blur">
                    <nav className="flex flex-col gap-4 px-6 py-6 text-sm text-black/70">
                        <Link
                            href="/programs"
                            onClick={() => setOpen(false)}
                            className="hover:text-black"
                        >
                            Programs
                        </Link>
                        <Link
                            href="/coaching"
                            onClick={() => setOpen(false)}
                            className="hover:text-black"
                        >
                            1 on 1 Coaching
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className="hover:text-black"
                        >
                            Contact
                        </Link>
                        <a
                            href="https://instagram.com/danthiesing"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600"
                        >
                            Instagram
                        </a>
                    </nav>
                </div>
            )}
        </motion.header>
    );
}
