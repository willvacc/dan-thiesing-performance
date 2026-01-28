import Image from "next/image";
import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";

export default function CoachingPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            {/* ============================= */}
            {/* HERO */}
            {/* ============================= */}
            <Reveal>
                <section className="rounded-3xl border border-black/5 bg-white/70 p-8 sm:p-10 lg:p-12 shadow-sm backdrop-blur">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black/85">
                            1 on 1 Online Coaching
                        </h1>

                        <p className="mt-4 text-base sm:text-lg text-black/60 leading-relaxed">
                            Personalized strength and conditioning built around your goals,
                            schedule, and training environment. This is not templated programming;
                            every decision is intentional, structured, and designed for long term progress.
                        </p>

                        <div className="mt-8">
                            <Button asChild variant="primary" className="w-full sm:w-auto">
                                <a
                                    href="https://calendly.com/danthiesing"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex w-full items-center justify-center"
                                >
                                    Book a Free Consultation
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
            </Reveal>

            {/* ============================= */}
            {/* WHO IT’S FOR */}
            {/* ============================= */}
            <Reveal delay={0.08}>
                <section className="grid gap-10 lg:grid-cols-2">
                    {[
                        {
                            title: "Built for High Level Athletes",
                            img: "/linebacker-speed-work.png",
                            alt: "Professional linebacker performing off-season speed training",
                            copy: [
                                "The same principles used with professional athletes apply to every program... structured progression, measurable outputs, and long term durability.",
                                "Training decisions are data-driven, sport specific, and aligned with competitive demands.",
                            ],
                        },
                        {
                            title: "And Everyday Gym Goers",
                            img: "/college-lacrosse.png",
                            alt: "College lacrosse athlete performing velocity-based strength training",
                            copy: [
                                "Clear, structured programming that removes guesswork and builds real strength over time.",
                                "Every plan is tailored to the individual - goals, history, schedule, and available equipment.",
                            ],
                        },
                    ].map((card) => (
                        <div
                            key={card.title}
                            className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm backdrop-blur"
                        >
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                                    <Image
                                        src={card.img}
                                        alt={card.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col justify-center">
                                    <h2 className="text-2xl font-semibold text-black/85">
                                        {card.title}
                                    </h2>

                                    {card.copy.map((p) => (
                                        <p
                                            key={p}
                                            className="mt-4 text-black/60 leading-relaxed"
                                        >
                                            {p}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </Reveal>

            {/* ============================= */}
            {/* HOW IT WORKS */}
            {/* ============================= */}
            <section className="grid gap-10 lg:grid-cols-3">
                {[
                    {
                        title: "Custom Programming",
                        desc: "Training built specifically around your sport, schedule, equipment access, and performance goals, not templates.",
                    },
                    {
                        title: "Ongoing Check-Ins",
                        desc: "Regular reviews and adjustments to keep progress moving and prevent stalls, setbacks, or wasted training time.",
                    },
                    {
                        title: "Built-In Accountability",
                        desc: "Clear structure, expectations, and follow through so training actually gets done consistently.",
                    },
                ].map((item, i) => (
                    <Reveal key={item.title} delay={0.06 * i}>
                        <div className="space-y-3">
                            <div className="text-sm font-semibold uppercase tracking-wide text-black/50">
                                {item.title}
                            </div>
                            <p className="text-sm sm:text-base text-black/60 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </section>

            {/* ============================= */}
            {/* COACHING OPTIONS */}
            {/* ============================= */}
            <section className="space-y-10">
                <Reveal>
                    <h3 className="text-2xl font-semibold text-black/85">
                        Coaching Options
                    </h3>
                </Reveal>

                <div className="space-y-4">
                    <Reveal>
                        <div className="text-sm font-semibold uppercase tracking-wide text-black/50">
                            One-Off Programs
                        </div>
                    </Reveal>

                    <div className="grid gap-4 sm:grid-cols-3">
                        {[
                            ["4 Week Program", "https://buy.stripe.com/cNi00i8wa8cO0Zo4kr3VC03"],
                            ["8 Week Program", "https://buy.stripe.com/14A9AS9Ae0Km0Zog393VC04"],
                            ["12 Week Program", "https://buy.stripe.com/bJeaEW5jYfFgfUig393VC05"],
                        ].map(([label, url]) => (
                            <Button key={label} asChild variant="secondary">
                                <a
                                    href={url}
                                    target="_blank"
                                    className="flex w-full items-center justify-center"
                                >
                                    {label}
                                </a>
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <Reveal>
                        <div className="text-sm font-semibold uppercase tracking-wide text-black/50">
                            Ongoing 1 on 1 Coaching
                        </div>
                    </Reveal>

                    <div className="grid gap-4 sm:grid-cols-3">
                        {[
                            ["2 Days / Week", "https://buy.stripe.com/6oUbJ05jYct48rQbMT3VC00"],
                            ["3 Days / Week", "https://buy.stripe.com/5kQeVc8wafFggYm18f3VC01"],
                            ["4+ Days / Week", "https://buy.stripe.com/bJe28q13IeBcbE2cQX3VC02"],
                        ].map(([label, url]) => (
                            <Button key={label} asChild variant="primary">
                                <a
                                    href={url}
                                    target="_blank"
                                    className="flex w-full items-center justify-center"
                                >
                                    {label}
                                </a>
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================= */}
            {/* TRAINING GALLERY */}
            {/* ============================= */}
            <Reveal delay={0.12}>
                <section className="rounded-3xl border border-black/5 bg-white/60 p-8 sm:p-10 shadow-sm backdrop-blur">
                    <div className="max-w-2xl mb-8">
                        <h3 className="text-2xl font-semibold text-black/85">
                            What Training Looks Like
                        </h3>
                        <p className="mt-3 text-black/60 leading-relaxed">
                            A look inside the training environment, coaching process, and
                            day-to-day work that supports long term performance.
                        </p>
                    </div>

                    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                        {[
                            "/example-1.png",
                            "/example-3.jpg",
                            "/example-2.png",
                            "/example-4.jpg",
                            "/example-5.jpg",
                        ].map((src) => (
                            <div
                                key={src}
                                className="relative aspect-[3/4] overflow-hidden rounded-2xl"
                            >
                                <Image
                                    src={src}
                                    alt="Training environment"
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-[1.03]"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </Reveal>

            {/* ============================= */}
            {/* FINAL CTA */}
            {/* ============================= */}
            <Reveal delay={0.1}>
                <section className="rounded-3xl border border-black/5 bg-white/60 p-8 sm:p-10 shadow-sm backdrop-blur text-center">
                    <h3 className="text-2xl font-semibold text-black/85">
                        Ready to Get Started?
                    </h3>

                    <p className="mt-3 max-w-xl mx-auto text-black/60 leading-relaxed">
                        Book a free consultation to discuss your goals, background,
                        and whether this coaching is the right fit.
                    </p>

                    <div className="mt-6">
                        <Button asChild variant="primary" className="w-full sm:w-auto">
                            <a
                                href="https://calendly.com/danthiesing"
                                target="_blank"
                                rel="noreferrer"
                                className="flex w-full items-center justify-center"
                            >
                                Book Your Consultation
                            </a>
                        </Button>
                    </div>
                </section>
            </Reveal>
        </div>
    );
}
