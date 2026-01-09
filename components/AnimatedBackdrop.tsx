"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedBackdrop() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 900], [0, 120]);
    const y2 = useTransform(scrollY, [0, 900], [0, -90]);

    return (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            {/* base wash */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.10),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.10),transparent_55%)]" />

            {/* moving glows */}
            <motion.div
                style={{ y: y1 }}
                className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-blue-400/18 blur-3xl"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute -bottom-44 right-1/4 h-[620px] w-[620px] rounded-full bg-sky-300/18 blur-3xl"
            />

            {/* subtle grain */}
            <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(0,0,0,0.25)_1px,transparent_1px)] [background-size:14px_14px]" />
        </div>
    );
}
