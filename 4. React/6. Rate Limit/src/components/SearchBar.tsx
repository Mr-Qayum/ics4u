import type { ChangeEvent } from "react";

type SearchBarProps = {
  value: string;
  message: string;
  onSearchChange: (value: string) => void;
};

export const SearchBar = ({
  value,
  message,
  onSearchChange,
}: SearchBarProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-4">Search People</h1>

      <input
        type="search"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onSearchChange(e.target.value);
        }}
        placeholder="Search actors, directors..."
        className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700
                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      {message && <p className="mt-3 text-gray-400 text-sm">{message}</p>}
    </div>
  );
};
