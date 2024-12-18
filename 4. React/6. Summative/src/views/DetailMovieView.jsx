import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "../context";
import "./DetailMovieView.css"

function DetailMovieView() {

  const [movie, setMovie] = useState([]);
  const { user, cart, setCart } = useStoreContext();
  const params = useParams();

  const addToCart = () => {
    setCart((prevCart) => {
      const cart = prevCart.set(params.id, { title: movie.original_title, url: movie.poster_path });
      localStorage.setItem(user.uid, JSON.stringify(cart.toJS()));
      return cart;
    });
  }

  useEffect(() => {
    (async function getMovie() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_TMDB_KEY}&append_to_response=videos`
      );
      setMovie(response.data);
    })();
  }, []);

  return (
    <div className="movie-detail">
      <button onClick={() => addToCart()} className="buy-button">Buy</button>
      <h1 className="movie-title">{movie.original_title}</h1>
      <p className="movie-overview">{movie.overview}</p>
      <div className="movie-info">
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
      </div>
      {movie.poster_path && (
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
        />
      )}

      {/* Trailers Section */}
      <div className="trailers-section">
        <h2>Trailers</h2>
        <div className="trailers-grid">
          {movie.videos && movie.videos.results.map((trailer) => (
            <div key={trailer.id} className="trailer-tile">
              <a
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="trailer-thumbnail"
                  src={`https://img.youtube.com/vi/${trailer.key}/0.jpg`}
                  alt={trailer.name}
                />
                <h3>{trailer.name}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DetailMovieView;