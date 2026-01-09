"use client";

import { motion } from "framer-motion";

export default function ProgramCard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative rounded-2xl bg-white p-6 shadow-lg"
        >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/0 to-blue-400/0 group-hover:from-blue-400/10 group-hover:to-transparent transition" />
            <h3 className="relative z-10 font-semibold">{title}</h3>
            <p className="relative z-10 mt-2 text-sm text-gray-600">
                {description}
            </p>
        </motion.div>
    );
}
