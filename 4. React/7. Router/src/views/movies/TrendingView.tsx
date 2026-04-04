import { ButtonGroup } from '@/components/ButtonGroup';
import { ImageGrid } from '@/components/ImageGrid';
import { API_KEY } from '@/core/constants';
import type { GridData, MediaResponse } from '@/core/types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const ENDPOINT = 'https://api.themoviedb.org/3/trending/movie';

export const TrendingView = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState<GridData[] | null>(null);
  const [loading, setLoading] = useState(false);
  const interval = searchParams.get('interval') || 'day';

  useEffect(() => {
    const controller = new AbortController();

    const getTrending = async () => {
      try {
        setLoading(true);

        const response = await axios.get<MediaResponse>(`${ENDPOINT}/${interval}`, {
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
        console.error('Error fetching trending movies:', error);
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
    <section className="max-w-[1200px] mx-auto p-5 space-y-5">
      <h1 className="text-3xl font-bold mb-4">Trending</h1>
      {movies && (
        <>
          <ButtonGroup
            value={interval}
            onClick={(value: string) => {
              setSearchParams({ interval: value });
            }}
            options={[
              { label: 'Day', value: 'day' },
              { label: 'Week', value: 'week' },
            ]}
          />
          <ImageGrid results={movies} getHref={(id) => `/movie/${id}`} />
        </>
      )}
    </section>
  );
};
