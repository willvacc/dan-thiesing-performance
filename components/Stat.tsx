"use client";

import { motion } from "framer-motion";

export default function Stat({
    value,
    label,
    delay = 0,
}: {
    value: string;
    label: string;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
            className="rounded-3xl border border-black/5 bg-white/70 p-7 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md"
        >
            <div className="text-3xl font-extrabold tracking-tight text-black/85">{value}</div>
            <div className="mt-1 text-sm text-black/55">{label}</div>
        </motion.div>
    );
}
