import axios from "axios";
import { useState, useEffect } from "react";
import "./MovieTileView.css";
import { useLocation, useNavigate } from "react-router-dom";

function MovieTileView() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation().pathname.split("/")[2];

  useEffect(() => {
    async function getData() {
      setMovies((await axios.get(`https://api.themoviedb.org/3/movie/${location}?api_key=${import.meta.env.VITE_TMDB_KEY}`)).data.results);
    };

    getData();
  }, [location]);

  return (
    <div className="movie-container">
      {movies && movies.map(movie => (
        <div className="movie-card" key={movie.id} onClick={() => navigate(`/movies/${movie.id}`) }>
          <h1>{`${movie.title}`}</h1>
          <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.id}`} />
        </div>
      ))}
    </div>
  );
}

export default MovieTileView;
