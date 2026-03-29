import { useState, useEffect, useRef } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { useThrottle } from "./hooks/useThrottle";
import { SearchBar } from "./components/SearchBar";
import { PersonGrid } from "./components/PersonGrid";
import axios from "axios";
import { Pagination } from "./components/Pagination";

export type Person = {
  id: number;
  name: string;
  profile_path: string | null;
};

type TMDBData = {
  results: Person[];
  total_pages: number;
};

const ENDPOINT = "https://api.themoviedb.org/3/search/person";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const DELAY = 500;

export const App = () => {
  const [mode, setMode] = useState<"debounce" | "throttle">("debounce");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const [results, setResults] = useState<Person[]>([]);
  const [page, setPage] = useState<number>(1);
  const maxPages = useRef<number>(1);

  const debouncedQuery = useDebounce(query, DELAY);
  const throttledQuery = useThrottle(query, DELAY);

  const activeQuery = mode === "debounce" ? debouncedQuery : throttledQuery;

  useEffect(() => {
    setMessage("");
    setResults([]);
    setPage(1);
  }, [query]);

  useEffect(() => {
    const controller = new AbortController();

    const getTMDBData = async () => {
      try {
        setMessage("Searching...");

        const response = await axios.get<TMDBData>(ENDPOINT, {
          params: {
            api_key: API_KEY,
            query: activeQuery,
            page: page,
          },
          signal: controller.signal,
        });

        setResults(response.data.results || []);
        maxPages.current = response.data.total_pages;

        setMessage(
          response.data.results.length > 0
            ? `Found ${response.data.results.length} result(s)`
            : "No results found",
        );
      } catch (err: any) {
        if (err.name !== "CanceledError") {
          setMessage("Error fetching data");
        }
      }
    };

    getTMDBData();
    return () => controller.abort();
  }, [activeQuery, page]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setMode("debounce")}
            className={`px-4 py-2 rounded-xl font-medium transition
              ${
                mode === "debounce"
                  ? "bg-blue-600 hover:bg-blue-500"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
          >
            Debounce
          </button>

          <button
            onClick={() => setMode("throttle")}
            className={`px-4 py-2 rounded-xl font-medium transition
              ${
                mode === "throttle"
                  ? "bg-blue-600 hover:bg-blue-500"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
          >
            Throttle
          </button>
        </div>

        <SearchBar value={query} onSearchChange={setQuery} message={message} />

        <Pagination
          page={page}
          maxPages={maxPages.current}
          onPageChange={setPage}
        />

        <PersonGrid results={results} />
      </div>
    </div>
  );
};
