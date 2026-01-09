export default function Card({
    title,
    desc,
}: {
    title: string;
    desc: string;
}) {
    return (
        <div className="group rounded-2xl border border-black/5 bg-white/60 p-4 sm:p-5 lg:p-6 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-md">
            <div className="text-sm sm:text-base font-semibold text-black/80">
                {title}
            </div>

            <p className="mt-2 text-sm sm:text-[0.95rem] leading-relaxed text-black/55">
                {desc}
            </p>
        </div>
    );
}
