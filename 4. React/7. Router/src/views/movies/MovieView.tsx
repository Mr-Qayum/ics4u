import { Button } from '@/components/Button';
import { LinkGroup } from '@/components/LinkGroup';
import { API_KEY, IMAGE_BASE_URL, MOVIE_ENDPOINT } from '@/core/constants';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

type DetailRepsonse = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  videos?: {
    results: Array<{
      key: string;
      name: string;
      site: string;
      type: string;
    }>;
  };
};

const ORIGINAL_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

export const MovieView = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<DetailRepsonse | null>(null);
  const [loading, setLoading] = useState(false);
  const [trailer, setTrailer] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();

    const getMovie = async () => {
      try {
        setLoading(true);

        const response = await axios.get<DetailRepsonse>(`${MOVIE_ENDPOINT}/${id}`, {
          params: { api_key: API_KEY, append_to_response: 'videos' },
          signal: controller.signal,
        });

        const trailerVideo =
          response.data.videos?.results.find(
            (video) => video.site === 'YouTube' && video.type === 'Trailer' && video.name?.toLowerCase().includes('official')
          ) || response.data.videos?.results.find((video) => video.site === 'YouTube' && video.type === 'Trailer');

        if (trailerVideo) {
          setTrailer(trailerVideo.key);
        }
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
    <section className="max-w-[1200px] mx-auto p-10">
      <div
        className="h-[300px] bg-cover bg-center mt-4"
        style={{
          backgroundImage: `url(${ORIGINAL_IMAGE_BASE_URL}${movie.backdrop_path})`,
        }}
      />
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col flex-row gap-8">
        <img
          className="w-[250px] h-[375px] object-cover rounded-xl shadow-lg"
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="space-y-4">
          <Button onClick={() => navigate(-1)}>← Back</Button>
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="text-gray-400 flex items-center gap-2">
            <FaCalendarAlt />
            {movie.release_date}
          </p>
          <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
          {trailer && (
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${trailer}`}
                title="Movie Trailer"
                allowFullScreen
              />
            </div>
          )}
          <LinkGroup
            options={[
              { label: 'Credits', to: 'credits' },
              { label: 'Reviews', to: 'reviews' },
            ]}
          />
        </div>
      </div>
      <section className="max-w-[1200px] mx-auto">
        <Outlet />
      </section>
    </section>
  );
};
