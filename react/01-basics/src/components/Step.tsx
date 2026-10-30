import type { ReactNode } from "react";

type StepProps = {
    title: string;
    children: ReactNode;
    renderExtra?: () => ReactNode;
};

export const Step = ({ title, children, renderExtra }: StepProps) => {
    console.log("Step is re-rendering");

    return (
        <div className="my-4 rounded-lg border border-gray-300 p-4">
            <h2 className="mb-4 font-semibold text-2xl text-blue-600">{title}</h2>
            {children}
            {renderExtra && <div className="mt-4 rounded-md bg-gray-100 p-3">{renderExtra()}</div>}
        </div>
    )
}