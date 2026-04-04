import { Button } from '@/components/Button';
import { ImageGrid } from '@/components/ImageGrid';
import { Pagination } from '@/components/Pagination';
import { SearchBar } from '@/components/SearchBar';
import { API_KEY } from '@/core/constants';
import type { GridData } from '@/core/types';
import { useDebounce } from '@/hooks/useDebounce';
import { useThrottle } from '@/hooks/useThrottle';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

type SearchResponse = {
  results: Array<{
    id: number;
    name: string;
    profile_path: string | null;
  }>;
  total_pages: number;
  total_results: number;
};

const ENDPOINT = 'https://api.themoviedb.org/3/search/person';
const DELAY = 500;

export const SearchView = () => {
  const [mode, setMode] = useState<'debounce' | 'throttle'>('debounce');
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');
  const [results, setResults] = useState<GridData[] | null>(null);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const maxPages = useRef<number>(1);
  const debouncedQuery = useDebounce(query, DELAY);
  const throttledQuery = useThrottle(query, DELAY);
  const activeQuery = mode === 'debounce' ? debouncedQuery : throttledQuery;

  useEffect(() => {
    setMessage('');
    setResults(null);
    setPage(1);
  }, [query]);

  useEffect(() => {
    const controller = new AbortController();

    const getSearch = async () => {
      try {
        setLoading(true);
        setMessage('Searching...');

        const response = await axios.get<SearchResponse>(ENDPOINT, {
          params: {
            api_key: API_KEY,
            query: activeQuery,
            page: page,
          },
          signal: controller.signal,
        });

        const gridData: GridData[] = response.data.results.map((search) => ({
          id: search.id,
          imagePath: search.profile_path,
          primaryText: search.name,
        }));

        maxPages.current = response.data.total_pages;
        setResults(gridData);
        setMessage(response.data.results.length > 0 ? `Found ${response.data.total_results} result(s)` : 'No results found');
      } catch (error) {
        console.error('Failed to fetch search results:', error);
      } finally {
        setLoading(false);
      }
    };

    getSearch();

    return () => controller.abort();
  }, [activeQuery, page]);

  if (loading) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <>
      <div className="max-w-[1200px] mx-auto p-10 sm:p-5">
        <div className="flex gap-3 mb-6">
          <Button onClick={() => setMode('debounce')} variant={mode === 'debounce' ? 'primary' : 'grey'}>
            Debounce
          </Button>
          <Button onClick={() => setMode('throttle')} variant={mode === 'throttle' ? 'primary' : 'grey'}>
            Throttle
          </Button>
        </div>
        <SearchBar value={query} onSearchChange={setQuery} message={message} />
        {results && results.length > 0 ? (
          <>
            <Pagination page={page} maxPages={maxPages.current} onPageChange={setPage} />
            <ImageGrid results={results} getHref={(id) => `/person/${id}`} />
          </>
        ) : (
          message && <p className="text-center text-gray-400">{message}</p>
        )}
      </div>
    </>
  );
};
