export default function Card({
    title,
    desc,
}: {
    title: string;
    desc: string;
}) {
    return (
        <div className="rounded-2xl border border-black/5 bg-white/60 p-5 shadow-sm backdrop-blur">
            <div className="font-semibold text-black/80">{title}</div>
            <p className="mt-2 text-sm leading-relaxed text-black/55">{desc}</p>
        </div>
    );
}
