import Link from "next/link";
import Reveal from "@/components/Reveal";
import Stat from "@/components/Stat";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      
      <section className="relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 shadow-xl backdrop-blur">
        {/* glow */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-400/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-sky-300/25 blur-3xl" />

        <div className="relative grid gap-10 p-10 sm:p-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <h1 className="text-4xl font-extrabold tracking-tight text-black/90 sm:text-5xl">
                Coaching-Driven Training. Built for Real Results.
                <span className="text-blue-600"> Start Training with Intent.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-black/60 sm:text-lg">
                Dan Thiesing Performance delivers structured training and coaching that helps you achieve your specific goals. 
                Train with intent, progress with confidence.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="primary">
                  <Link href="/programs">View Programs</Link>
                </Button>

                <Button asChild variant="secondary">
                  <Link href="/coaching">1-on-1 Online Coaching</Link>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                >
                  <a href="https://instagram.com/danthiesing" target="_blank">
                    Follow on Instagram
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 flex items-center gap-3 text-sm text-black/50">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500/80" />
                Performance-first strength & conditioning
              </div>
            </Reveal>
          </div>

          {/* right side “visual” panel */}
          <Reveal delay={0.12}>
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-white/30 to-white/0" />
              <div className="rounded-3xl border border-black/5 bg-white/50 p-8 shadow-sm backdrop-blur">
                <div className="text-sm font-semibold text-black/70">What athletes get</div>
                <div className="mt-6 grid gap-4">
                  <Card title="Train Smarter" desc="Structured programming built around the athlete, not random movements." />
                  <Card title="Get Faster + Stronger" desc="Strength, power, and speed work that carries over to your sport." />
                  <Card title="Stay Durable" desc="Build resilience and reduce injury risk through intelligent progression." />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section className="relative mt-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-2 items-center">

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-2xl" />
            <img
              src="/dan.png"
              alt="Dan Thiesing"
              className="relative z-10 w-full max-w-md rounded-3xl object-cover shadow-xl"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                About Me
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                Dan Thiesing
              </h2>
            </div>

            <p className="text-base leading-relaxed text-black/70">
              I’m a strength and conditioning coach with over a decade of experience
              helping athletes and everyday individuals reach their highest potential.
              Over the past 10 years, I’ve coached youth, high school, collegiate, and
              professional athletes, as well as general population clients looking to
              build strength, improve performance, and move with confidence.
            </p>

            <p className="text-base leading-relaxed text-black/70">
              My coaching approach centers around personalized program design,
              evidence-based methods, and a deep understanding of human movement.
              Every program is tailored to the individual; your goals, schedule,
              training history, and lifestyle, with structured, periodized plans that
              progress safely and intentionally.
            </p>

            <p className="text-base leading-relaxed text-black/70">
              Strength and conditioning isn’t just my career... it’s my passion.
              I stay committed to continuing education, current research, and emerging
              performance methods so my clients receive high-quality, up-to-date
              coaching that blends science with real-world application.
            </p>

            <p className="text-base leading-relaxed text-black/70">
              Whether you’re looking for fully personalized online coaching or a
              well-designed one-off program, my goal is to give you a clear path
              forward and a system that supports real progress.
            </p>

            {/* Credentials */}
            <div className="mt-6 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-black/80">
                Education & Certifications
              </p>
              <ul className="space-y-2 text-sm text-black/70">
                <li>• M.S. Exercise Science — Merrimack College</li>
                <li>• B.S. Exercise Science — Merrimack College</li>
                <li>• NASM — Certified Personal Trainer (CPT)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Stat value="+10 yrs" label="Coaching Experience" />
        <Stat value="Athlete-First" label="Programming Philosophy" delay={0.06} />
        <Stat value="Performance" label="Built for sport carryover" delay={0.12} />
      </section>

      {/* PATHS */}
      <section className="space-y-6">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-black/85 sm:text-3xl">
            Choose your training path
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.06}>
            <div className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl transition group-hover:bg-blue-500/25" />
              <div className="text-sm font-semibold text-black/60">Programs</div>
              <div className="mt-2 text-xl font-bold text-black/85">One-off training programs</div>
              <p className="mt-3 text-black/60">
                Delivered through TrainHeroic. Simple, structured plans you can start immediately.
              </p>
              <div className="mt-6">
                <Button asChild variant="primary">
                  <Link href="/programs">Browse programs</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg">
              <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl transition group-hover:bg-sky-500/25" />
              <div className="text-sm font-semibold text-black/60">Coaching</div>
              <div className="mt-2 text-xl font-bold text-black/85">1 on 1 online coaching</div>
              <p className="mt-3 text-black/60">
                Custom plans + check-ins + accountability. Built around your goals and your schedule.
              </p>
              <div className="mt-6">
                <Button asChild variant="secondary">
                  <Link href="/coaching">See coaching</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative z-20 rounded-3xl border border-black/5 bg-white/70 p-8 sm:p-10 shadow-sm backdrop-blur">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-bold text-black/85">Not sure what fits?</h3>
            <p className="mt-2 text-black/60">
              Reach out and we’ll point you to the right plan.
            </p>
          </div>

          <Button
            asChild
            variant="primary"
            className="relative z-30 pointer-events-auto w-full sm:w-auto"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
