import { Button } from '@/components/Button';
import { Link } from '@/components/Link';
import { API_KEY, IMAGE_BASE_URL, MOVIE_ENDPOINT } from '@/core/constants';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

type DetailRepsonse = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
};

const ORIGINAL_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

export const MovieView = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<DetailRepsonse | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();

    const getMovie = async () => {
      setLoading(true);

      try {
        const response = await axios.get<DetailRepsonse>(`${MOVIE_ENDPOINT}/${id}`, {
          params: { api_key: API_KEY },
          signal: controller.signal,
        });

        setMovie(response.data);
      } catch (error) {
        console.error('Failed to fetch movie detail:', error);
      } finally {
        setLoading(false);
      }
    };

    getMovie();

    return () => controller.abort();
  }, [id]);

  if (loading || !movie) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div
        className="h-[300px] bg-cover bg-center mt-4"
        style={{
          backgroundImage: `url(${ORIGINAL_IMAGE_BASE_URL}${movie.backdrop_path})`,
        }}
      />
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8">
        <img
          className="w-[250px] h-[375px] object-cover rounded-xl shadow-lg"
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="space-y-4">
          <Button onClick={() => navigate('/now-playing')}>← Back</Button>
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="text-gray-400">Release Date: {movie.release_date}</p>
          <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
          <div className="flex gap-6 pt-4">
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto p-10 sm:p-5">
        <Outlet />
      </div>
    </div>
  );
};
