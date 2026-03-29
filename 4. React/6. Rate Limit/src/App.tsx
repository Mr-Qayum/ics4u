import { useState, useEffect, useRef } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useThrottle } from "../hooks/useThrottle";
import { SearchBar } from "../components/SearchBar";
import { PeopleGrid } from "../components/PeopleGrid";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const DELAY = 500;

export const App = () => {
  const [mode, setMode] = useState<"debounce" | "throttle">("debounce");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const maxPages = useRef<number>(1);

  const debouncedQuery = useDebounce(query, DELAY);
  const throttledQuery = useThrottle(query, DELAY);

  const activeQuery = mode === "debounce" ? debouncedQuery : throttledQuery;

  useEffect(() => {
    setMessage("");
    setResults([]);
  }, [query]);

  useEffect(() => {
    const controller = new AbortController();

    const getTMDBData = async () => {
      try {
        setMessage("Searching...");

        const response = await axios.get(
          "https://api.themoviedb.org/3/search/person",
          {
            params: {
              api_key: API_KEY,
              query: activeQuery,
              page: page,
            },
            signal: controller.signal,
          },
        );

        setResults(response.data.results || []);
        maxPages.current = response.data.total_pages;

        if (response.data.results?.length > 0) {
          setMessage(`Found ${response.data.results.length} result(s)`);
        } else {
          setMessage("No results found");
        }
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setMode("debounce")}
          className={`px-3 py-1 rounded ${
            mode === "debounce" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
        >
          Debounce
        </button>

        <button
          onClick={() => setMode("throttle")}
          className={`px-3 py-1 rounded ${
            mode === "throttle" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
        >
          Throttle
        </button>
      </div>
      <SearchBar value={query} onChange={setQuery} message={message} />
      <PeopleGrid
        results={results}
        page={page}
        maxPages={maxPages.current}
        onPageChange={setPage}
      />
    </div>
  );
};
