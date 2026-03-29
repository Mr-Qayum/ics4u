import type { ChangeEvent } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  message: string;
};

export const SearchBar = ({ value, onChange, message }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
      <h1 className="text-xl font-semibold mb-4 text-gray-800">Search</h1>

      <input
        type="search"
        onChange={handleChange}
        placeholder="Type to search..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   transition"
      />

      <p className="mt-4 text-gray-600 min-h-[24px]">{message}</p>
    </div>
  );
};
