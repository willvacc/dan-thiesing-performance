"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Reveal({
    children,
    delay = 0,
}: {
    children: React.ReactNode;
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 16, pointerEvents: "none" }}
            animate={
                isInView
                    ? { opacity: 1, y: 0, pointerEvents: "auto" }
                    : {}
            }
            transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}
