import { Button } from '@/components/Button';
import { ImageGrid } from '@/components/ImageGrid';
import { API_KEY } from '@/core/constants';
import type { GridData, MovieResponse } from '@/core/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ENDPOINT = 'https://api.themoviedb.org/3/trending/movie';

export const TrendingView = () => {
  const [movies, setMovies] = useState<GridData[] | null>(null);
  const [interval, setInterval] = useState<'day' | 'week'>('day');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const getTrending = async () => {
      setLoading(true);

      try {
        const response = await axios.get<MovieResponse>(`${ENDPOINT}/${interval}`, {
          params: { api_key: API_KEY },
          signal: controller.signal,
        });

        const gridData: GridData[] = response.data.results.map((movie) => ({
          id: movie.id,
          imagePath: movie.poster_path,
          primaryText: movie.original_title,
        }));

        setMovies(gridData);
      } catch (error) {
        console.error('Error to fetch trending movies:', error);
      } finally {
        setLoading(false);
      }
    };

    getTrending();

    return () => controller.abort();
  }, [interval]);

  if (loading) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <div className="max-w-[1200px] mx-auto p-10 sm:p-5">
      <h1 className="text-center text-4xl sm:text-3xl mb-10 font-bold text-white-900">Trending</h1>
      {movies && (
        <>
          <div className="flex gap-3 mb-6">
            <Button onClick={() => setInterval('day')} variant={interval === 'day' ? 'primary' : 'grey'}>
              Today
            </Button>
            <Button onClick={() => setInterval('week')} variant={interval === 'week' ? 'primary' : 'grey'}>
              Week
            </Button>
          </div>
          <ImageGrid results={movies} getHref={(id) => `/movie/${id}`} />
        </>
      )}
    </div>
  );
};
