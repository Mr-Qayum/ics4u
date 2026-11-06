type NumberInputProps = {
    label: string;
    value: number;
    setValue: (val: number) => void;
}

export const NumberInput = ({ label, value, setValue }: NumberInputProps) => {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-gray-300 text-sm" htmlFor={label}>{label}</label>
            <input
                className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2"
                id={label}
                onChange={(event) => setValue(Number(event.target.value))}
                value={value}
                type="number"
            />
        </div>
    )
}
