import Link from "next/link";
import React from "react";

type Variant = "primary" | "secondary" | "ghost";

export default function Button({
    children,
    variant = "primary",
    asChild = false,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    asChild?: boolean;
    children: React.ReactNode;
}) {
    const base =
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition active:scale-[0.98]";

    const styles: Record<Variant, string> = {
        primary: "bg-black text-white hover:scale-[1.02]",
        secondary: "border border-black/10 bg-white text-black/80 hover:scale-[1.02] hover:bg-white",
        ghost: "text-black/70 hover:text-black",
    };

    if (asChild) {
        // expects child to be <a> or <Link>
        return (
            <span className={`${base} ${styles[variant]}`}>
                {children}
            </span>
        );
    }

    return (
        <button className={`${base} ${styles[variant]}`} {...props}>
            {children}
        </button>
    );
}
