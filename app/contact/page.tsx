"use client";

import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="space-y-12">
            {/* Header */}
            <Reveal>
                <div className="rounded-3xl border border-black/5 bg-white/70 p-10 shadow-sm backdrop-blur">
                    <h1 className="text-3xl font-extrabold tracking-tight text-black/85">
                        Contact
                    </h1>
                    <p className="mt-3 max-w-2xl text-black/60">
                        The fastest way to get started is to book a free consultation.
                        We’ll talk goals, background, and next steps. You can also reach
                        out on Instagram{" "}
                        <a
                            className="text-blue-600 hover:text-blue-700"
                            href="https://instagram.com/danthiesing"
                            target="_blank"
                        >
                            @danthiesing
                        </a>
                        .
                    </p>
                </div>
            </Reveal>

            {/* Calendly */}
            <Reveal delay={0.05}>
                <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm backdrop-blur">
                    <h2 className="text-xl font-semibold text-black/80">
                        Book a Free Consultation
                    </h2>
                    <p className="mt-2 mb-6 max-w-xl text-sm text-black/55">
                        A no-pressure call to see if working together makes sense.
                    </p>

                    <div
                        className="calendly-inline-widget rounded-2xl"
                        data-url="https://calendly.com/danthiesing"
                        style={{ minWidth: "320px", height: "646px" }}
                    />
                </div>
            </Reveal>

            {/* Contact Form (secondary) */}
            <Reveal delay={0.1}>
                <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm backdrop-blur">
                    {!submitted ? (
                        <form
                            className="grid gap-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                setSubmitted(true);
                            }}
                        >
                            <h2 className="text-lg font-semibold text-black/80">
                                Prefer to send a message?
                            </h2>

                            <div className="grid gap-2">
                                <label className="text-sm font-medium text-black/70">
                                    Name
                                </label>
                                <input
                                    required
                                    className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 outline-none focus:border-blue-500"
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="grid gap-2">
                                <label className="text-sm font-medium text-black/70">
                                    Email
                                </label>
                                <input
                                    required
                                    type="email"
                                    className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 outline-none focus:border-blue-500"
                                    placeholder="you@email.com"
                                />
                            </div>

                            <div className="grid gap-2">
                                <label className="text-sm font-medium text-black/70">
                                    Message
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 outline-none focus:border-blue-500"
                                    placeholder="Sport, goals, schedule, questions..."
                                />
                            </div>

                            <div className="pt-2">
                                <Button variant="primary" type="submit">
                                    Send message
                                </Button>
                            </div>

                            <p className="text-xs text-black/45">
                                (Later: connect this to Formspree, Resend, or a server
                                action so it emails Dan.)
                            </p>
                        </form>
                    ) : (
                        <div>
                            <div className="text-lg font-semibold text-black/80">
                                Message sent
                            </div>
                            <p className="mt-2 text-black/60">
                                We’ll get back to you soon. If you need a faster reply,
                                booking a consult or DMing on Instagram works best.
                            </p>
                        </div>
                    )}
                </div>
            </Reveal>
        </div>
    );
}
