"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const existing = document.querySelector(
            'script[src="https://assets.calendly.com/assets/external/widget.js"]'
        ) as HTMLScriptElement | null;

        if (!existing) {
            const script = document.createElement("script");
            script.src = "https://assets.calendly.com/assets/external/widget.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const res = await fetch("https://formspree.io/f/xaqqwrak", {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });

            if (res.ok) {
                setSubmitted(true);
                form.reset();
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14 lg:space-y-16">
            {/* ============================= */}
            {/* HEADER */}
            {/* ============================= */}
            <Reveal>
                <section className="rounded-3xl border border-black/5 bg-white/70 p-6 sm:p-8 lg:p-12 shadow-sm backdrop-blur">
                    <div className="sm:max-w-3xl">
                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black/85">
                            Contact
                        </h1>
                        <p className="mt-3 text-base sm:text-lg text-black/60 leading-relaxed">
                            The fastest way to get started is to book a free consultation.
                            We’ll talk goals, training background, and next steps. You can
                            also reach out on Instagram{" "}
                            <a
                                href="https://instagram.com/danthiesing"
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium text-blue-600 hover:text-blue-700"
                            >
                                @danthiesing
                            </a>
                            .
                        </p>
                    </div>
                </section>
            </Reveal>

            {/* ============================= */}
            {/* MAIN CONTENT */}
            {/* ============================= */}
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
                {/* CALENDLY */}
                <Reveal delay={0.05}>
                    <section className="rounded-3xl border border-black/5 bg-white/70 p-6 sm:p-8 lg:p-10 shadow-sm backdrop-blur">
                        <h2 className="text-xl sm:text-2xl font-semibold text-black/80">
                            Book a Free Consultation
                        </h2>
                        <p className="mt-2 mb-6 text-sm sm:text-base text-black/55">
                            A no-pressure call to see if working together makes sense.
                        </p>

                        <div className="overflow-hidden rounded-2xl border border-black/5 bg-white/40">
                            <div
                                className="calendly-inline-widget w-full"
                                data-url="https://calendly.com/danthiesing"
                                style={{ minWidth: "320px", height: "720px" }}
                            />
                        </div>
                    </section>
                </Reveal>

                {/* FORM */}
                <Reveal delay={0.1}>
                    <section className="rounded-3xl border border-black/5 bg-white/70 p-6 sm:p-8 lg:p-10 shadow-sm backdrop-blur">
                        {!submitted ? (
                            <form
                                onSubmit={handleSubmit}
                                noValidate
                                className="grid gap-4"
                            >
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-semibold text-black/80">
                                        Prefer to send a message?
                                    </h2>
                                    <p className="mt-2 text-sm sm:text-base text-black/55">
                                        Share your goals, training history, and what you’re looking for.
                                    </p>
                                </div>

                                <input
                                    type="hidden"
                                    name="_subject"
                                    value="New Coaching Inquiry"
                                />

                                <div className="grid gap-2">
                                    <label className="text-sm font-medium text-black/70">
                                        Name
                                    </label>
                                    <input
                                        name="name"
                                        required
                                        placeholder="Your name"
                                        className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <label className="text-sm font-medium text-black/70">
                                        Email
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="you@email.com"
                                        className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <label className="text-sm font-medium text-black/70">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={6}
                                        required
                                        placeholder="Sport, goals, schedule, questions..."
                                        className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    disabled={loading}
                                    className="w-full sm:w-auto"
                                >
                                    {loading ? "Sending..." : "Send message"}
                                </Button>
                            </form>
                        ) : (
                            <div>
                                <h2 className="text-xl sm:text-2xl font-semibold text-black/80">
                                    Message sent
                                </h2>
                                <p className="mt-2 text-black/60 leading-relaxed">
                                    Thanks for reaching out. I’ll get back to you shortly.
                                </p>
                            </div>
                        )}
                    </section>
                </Reveal>
            </div>
        </div>
    );
}
