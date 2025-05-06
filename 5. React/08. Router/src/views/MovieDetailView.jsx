import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MoviesView.css";

function MovieDetailView() {
    const param = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function getData() {
            setMovie((await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=${import.meta.env.VITE_TMDB_KEY}`)).data);
        };

        getData();
    }, []);

    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
        </div>
    );
}

export default MovieDetailView;