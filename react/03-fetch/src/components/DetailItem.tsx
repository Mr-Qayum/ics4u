type DetailItemProps = {
    label: string;
    value: string | number;
};

export const DetailItem = ({ label, value }: DetailItemProps) => {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-4 transition hover:border-cyan-900/50 hover:bg-zinc-800/50">
            <p className="font-bold text-cyan-500/70 text-xs uppercase tracking-wider">{label}</p>
            <p className="mt-1 font-semibold text-sm text-zinc-100 tracking-tight">{value}</p>
        </div>
    )
}
