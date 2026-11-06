type TextInputProps = {
    label: string;
    value: string;
    color: string;
}

export const TextInput = ({ label, value, color }: TextInputProps) => {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-300">{label}</span>
            <span id="axis" className={`w-full py-2 rounded-lg  font-mono ${color}`}>{value}</span>
        </div>
    )
}
