import { useEffect, useState } from "react";
import axios from "axios";

type Movie = {
  id: number;
  original_title: string;
  poster_path: string;
};

export const App = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    const getTMDBData = async () => {
      try {
        const response = await axios.get<{ results: Movie[] }>(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    getTMDBData();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto p-10 sm:p-5">
      <h1 className="text-center text-4xl sm:text-3xl mb-10 font-bold text-white">
        Now Playing
      </h1>

      <div className="grid gap-7 sm:gap-5 grid-cols-[repeat(auto-fill,_minmax(220px,1fr))]">
        {movies &&
          movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-[#1e293b] rounded-xl overflow-hidden cursor-pointer transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >
              <img
                className="w-full block"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
              />
              <h2 className="text-center text-white text-base p-3">
                {movie.original_title}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
};
