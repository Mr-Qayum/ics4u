import type { ReactNode } from "react";

type TableProps = {
    headers: string[];
    children: ReactNode;
};

export const Table = ({ headers, children }: TableProps) => {
    return (
        <table className="mx-auto border-collapse border border-gray-700 bg-gray-900/60 shadow-lg backdrop-blur-sm">
            <thead className="bg-gray-800">
                <tr>
                    {headers.map((header) => (
                        <th className="border border-gray-700 px-4 py-2 text-left text-gray-200" key={header}>
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    )
}
