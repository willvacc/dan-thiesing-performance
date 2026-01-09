import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";

export default function ProgramsPage() {
    return (
        <div className="space-y-16">
            {/* ============================= */}
            {/* HEADER */}
            {/* ============================= */}
            <Reveal>
                <div className="rounded-3xl border border-black/5 bg-white/70 p-12 shadow-sm backdrop-blur">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black/85">
                            Programs
                        </h1>
                        <p className="mt-4 text-black/60 leading-relaxed">
                            One-off programs and structured templates for individuals who want a proven plan they can start immediately. 
                            Select programs are delivered through TrainHeroic.
                        </p>
                    </div>
                </div>
            </Reveal>

            {/* subtle divider to separate intro from decision */}
            <div className="mx-auto h-[2px] w-12 rounded-full bg-blue-500/25" />

            {/* ============================= */}
            {/* DECISION PATHS */}
            {/* ============================= */}
            <div className="grid gap-8 lg:grid-cols-2">
                {/* PRE-MADE PROGRAMS */}
                <Reveal delay={0.06}>
                    <div className="group h-full rounded-3xl border border-black/10 bg-white/80 p-10 shadow-sm backdrop-blur transition-shadow duration-300 hover:shadow-md">
                        <div className="flex h-full flex-col justify-between">
                            <div>
                                <div className="text-xs font-semibold uppercase tracking-wider text-black/50">
                                    Pre-Made Programs
                                </div>
                                <h2 className="mt-2 text-2xl font-semibold text-black/85">
                                    Buy a Program
                                </h2>
                                <p className="mt-4 text-black/60 leading-relaxed">
                                    Start immediately with a proven training plan delivered 
                                    through TrainHeroic. 
                                    
                                </p>
                                <p className="mt-4 text-black/60 leading-relaxed">
                                    Best for individuals who want structure without 
                                    ongoing customization.
                                </p>
                            </div>

                            <div className="mt-8">
                                <Button asChild variant="primary">
                                    <a
                                        href="https://marketplace.trainheroic.com/workout-plan/program/thiesing-program-1742227157"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View TrainHeroic Programs
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* CUSTOM COACHING */}
                <Reveal delay={0.12}>
                    <div className="group h-full rounded-3xl border border-black/5 bg-white/70 p-10 shadow-sm backdrop-blur transition-shadow duration-300 hover:shadow-md">
                        <div className="flex h-full flex-col justify-between">
                            <div>
                                <div className="text-xs font-semibold uppercase tracking-wider text-black/50">
                                    Custom Training
                                </div>
                                <h2 className="mt-2 text-2xl font-semibold text-black/85">
                                    Looking for 1 on 1 Coaching?
                                </h2>
                                <p className="mt-4 text-black/60 leading-relaxed">
                                    Built around your specific goals, equipment, and availability 
                                    with ongoing adjustments and accountability. 
                                </p>
                                <p className="mt-4 text-black/60 leading-relaxed">
                                    Best for individuals who want personalized guidance and 
                                    long-term development.
                                </p>
                            </div>

                            <div className="mt-8">
                                <Button asChild variant="secondary">
                                    <a href="/coaching">Explore 1 on 1 Coaching</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* ============================= */}
            {/* SUPPORTING CTA */}
            {/* ============================= */}
            <Reveal delay={0.18}>
                <div className="rounded-3xl border border-black/5 bg-white/60 p-12 shadow-sm backdrop-blur text-center">
                    <h3 className="text-2xl font-semibold text-black/85">
                        Not Sure Which Option Fits?
                    </h3>
                    <p className="mt-3 max-w-xl mx-auto text-black/60 leading-relaxed">
                        Share your goals, schedule, and access to equipment - I’ll point you in the right 
                        direction.
                    </p>

                    <div className="mt-6">
                        <Button asChild variant="secondary">
                            <a href="/contact">Get Guidance</a>
                        </Button>
                    </div>
                </div>
            </Reveal>
        </div>
    );
}
