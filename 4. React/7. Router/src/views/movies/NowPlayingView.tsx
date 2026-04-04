import { ImageGrid } from '@/components/ImageGrid';
import { Pagination } from '@/components/Pagination';
import { API_KEY } from '@/core/constants';
import type { GridData, MediaResponse } from '@/core/types';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

const ENDPOINT = 'https://api.themoviedb.org/3/movie/now_playing';

export const NowPlayingView = () => {
  const [movies, setMovies] = useState<GridData[] | null>(null);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const maxPages = useRef<number>(1);

  useEffect(() => {
    const controller = new AbortController();

    const getNowPlaying = async () => {
      try {
        setLoading(true);

        const response = await axios.get<MediaResponse>(ENDPOINT, {
          params: {
            api_key: API_KEY,
            page,
          },
          signal: controller.signal,
        });

        const gridData: GridData[] = response.data.results.map((movie) => ({
          id: movie.id,
          imagePath: movie.poster_path,
          primaryText: movie.original_title,
        }));

        maxPages.current = response.data.total_pages;
        setMovies(gridData);
      } catch (error) {
        console.error('Failed to fetch now playing movies:', error);
      } finally {
        setLoading(false);
      }
    };

    getNowPlaying();

    return () => controller.abort();
  }, [page]);

  if (loading) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="max-w-[1200px] mx-auto p-5 space-y-5">
      <h1 className="text-3xl font-bold mb-4">Now Playing</h1>
      {movies && (
        <>
          <ImageGrid results={movies} getHref={(id) => `/movie/${id}`} />
          <Pagination page={page} maxPages={maxPages.current} onClick={setPage} />
        </>
      )}
    </section>
  );
};
