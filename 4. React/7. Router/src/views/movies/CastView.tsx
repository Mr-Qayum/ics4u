import { ImageGrid } from '@/components/ImageGrid';
import { API_KEY, MOVIE_ENDPOINT } from '@/core/constants';
import type { GridData } from '@/core/types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type CastResponse = {
  cast: Array<{
    id: number;
    name: string;
    profile_path: string | null;
    character: string;
  }>;
};

export const CastView = () => {
  const { id } = useParams();
  const [cast, setCast] = useState<GridData[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const getCast = async () => {
      setLoading(true);

      try {
        const response = await axios.get<CastResponse>(`${MOVIE_ENDPOINT}/${id}/credits`, {
          params: { api_key: API_KEY },
          signal: controller.signal,
        });

        const gridData: GridData[] = response.data.cast.map((cast) => ({
          id: cast.id,
          imagePath: cast.profile_path,
          primaryText: cast.name,
          secondaryText: cast.character,
        }));

        setCast(gridData);
      } catch (error) {
        console.error('Failed to fetch cast detail:', error);
      } finally {
        setLoading(false);
      }
    };

    getCast();

    return () => controller.abort();
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Cast</h2>
      <ImageGrid results={cast} getHref={(id) => `/person/${id}`} />
    </div>
  );
};
