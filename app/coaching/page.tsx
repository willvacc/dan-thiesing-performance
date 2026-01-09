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
                <div className="rounded-3xl border border-black/5 bg-white/70 p-8 sm:p-10 md:p-12 shadow-sm backdrop-blur">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black/85">
                            1 on 1 Online Coaching
                        </h1>
                        <p className="mt-4 text-black/60 leading-relaxed">
                            Individualized strength and conditioning programs for all levels of individuals.
                            From high level athletes to everyday gym goers, and everyone in-between.
                            Programming, check-ins, and accountability — built around your specific goals.
                        </p>

                        <div className="mt-8">
                            <Button asChild variant="primary" className="w-full sm:w-auto">
                                <a
                                    href="https://calendly.com/danthiesing"
                                    target="_blank"
                                >
                                    Book a 1 on 1 Consultation
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* ============================= */}
            {/* WHO IT’S FOR */}
            {/* ============================= */}
            <Reveal delay={0.08}>
                <div className="grid gap-10 lg:grid-cols-2">
                    {[
                        {
                            title: "Built for High-Level Athletes",
                            img: "/linebacker-speed-work.png",
                            alt: "Professional linebacker performing off-season speed training",
                            copy: [
                                "The same principles used with professional athletes apply to every program; structured progression, measurable performance, and long-term durability.",
                                "Training decisions are intentional, data-driven, and aligned with competitive demands.",
                            ],
                        },
                        {
                            title: "And Everyday Gym Goers",
                            img: "/college-lacrosse.png",
                            alt: "College lacrosse athlete performing velocity-based strength training",
                            copy: [
                                "Structured programs designed to take the guesswork out of the gym. Built for individuals who want clarity, progression, and real strength gains.",
                                "Nothing is generic; every plan is built around the individual.",
                            ],
                        },
                    ].map((card) => (
                        <div
                            key={card.title}
                            className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm backdrop-blur"
                        >
                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Image */}
                                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                                    <Image
                                        src={card.img}
                                        alt={card.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Text */}
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
                </div>
            </Reveal>

            {/* ============================= */}
            {/* HOW IT WORKS */}
            {/* ============================= */}
            <div className="grid gap-6 md:grid-cols-3">
                {[
                    {
                        title: "Custom Plan",
                        desc: "Training built around your equipment access, schedule, and performance goals.",
                    },
                    {
                        title: "Ongoing Check-ins",
                        desc: "Regular reviews and adjustments based on performance, readiness, and recovery.",
                    },
                    {
                        title: "Accountability",
                        desc: "Clear progression, structure, and consistent execution over time.",
                    },
                ].map((item, i) => (
                    <Reveal key={item.title} delay={0.06 * i}>
                        <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm backdrop-blur">
                            <div className="font-semibold text-black/80">
                                {item.title}
                            </div>
                            <p className="mt-3 text-sm text-black/55 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>

            {/* ============================= */}
            {/* TRAINING GALLERY */}
            {/* ============================= */}
            <Reveal delay={0.12}>
                <div className="rounded-3xl border border-black/5 bg-white/60 p-8 sm:p-10 shadow-sm backdrop-blur">
                    <div className="max-w-2xl mb-8">
                        <h3 className="text-2xl font-semibold text-black/85">
                            What Training Looks Like
                        </h3>
                        <p className="mt-3 text-black/60 leading-relaxed">
                            A look inside the environment, coaching, and day-to-day work that
                            supports long-term performance.
                        </p>
                    </div>

                    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                        {[
                            "/example-1.png",
                            "/example-2.png",
                            "/example-3.jpg",
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
                </div>
            </Reveal>

            {/* ============================= */}
            {/* FINAL CTA */}
            {/* ============================= */}
            <Reveal delay={0.1}>
                <div className="rounded-3xl border border-black/5 bg-white/60 p-8 sm:p-10 shadow-sm backdrop-blur text-center">
                    <h3 className="text-2xl font-semibold text-black/85">
                        Ready to Get Started?
                    </h3>
                    <p className="mt-3 max-w-xl mx-auto text-black/60">
                        Book a free consultation to discuss your goals, background, and
                        whether this coaching is the right fit.
                    </p>

                    <div className="mt-6">
                        <Button asChild variant="primary" className="w-full sm:w-auto">
                            <a href="https://calendly.com/danthiesing" target="_blank">
                                Book Your Consultation
                            </a>
                        </Button>
                    </div>
                </div>
            </Reveal>
        </div>
    );
}
