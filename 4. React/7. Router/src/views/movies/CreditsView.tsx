import { ImageGrid } from '@/components/ImageGrid';
import { API_KEY, MOVIE_ENDPOINT } from '@/core/constants';
import type { GridData } from '@/core/types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type CreditsResponse = {
  cast: Array<{
    id: number;
    name: string;
    profile_path: string | null;
    character: string;
  }>;
};

export const CreditsView = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState<GridData[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const getCredits = async () => {
      try {
        setLoading(true);

        const response = await axios.get<CreditsResponse>(`${MOVIE_ENDPOINT}/${id}/credits`, {
          params: { api_key: API_KEY },
          signal: controller.signal,
        });

        const gridData: GridData[] = response.data.cast.map((cast) => ({
          id: cast.id,
          imagePath: cast.profile_path,
          primaryText: cast.name,
          secondaryText: cast.character,
        }));

        setCredits(gridData);
      } catch (error) {
        console.error('Failed to fetch cast detail:', error);
      } finally {
        setLoading(false);
      }
    };

    getCredits();

    return () => controller.abort();
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="min-h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-6">Credits</h2>
      {!credits && <p className="text-gray-400 text-center">No credits available.</p>}
      <ImageGrid results={credits} getHref={(id) => `/person/${id}`} />
    </section>
  );
};
