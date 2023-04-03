import axios from "axios";
import { TMDB_API_KEY } from "./key.js";
const cartContents = new Set();
const getTMDBData = async (url) => {
    return (await axios.get(url)).data;
};
const createMovieTile = (movie) => {
    const tile = document.createElement("div");
    const details = document.createElement("div");
    const img = document.createElement("img");
    const h1 = document.createElement("h1");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const buyButton = document.createElement("button");
    const trailerButton = document.createElement("button");
    tile.classList.add("tile");
    img.src = `https://image.tmdb.org/t/p/w500/${movie.poster}`;
    h1.innerText = movie.title;
    h3.innerText = movie.date;
    h4.innerText = movie.description;
    buyButton.innerText = "Buy";
    trailerButton.innerText = "Trailer";
    buyButton.addEventListener("click", () => {
        cartContents.add(movie.id);
        const cart = document.getElementById("cart");
        cart.innerHTML = `Your cart contains ${cartContents.size} movies`;
    });
    trailerButton.addEventListener("click", async () => {
        const trailersData = await getTMDBData(`https://api.themoviedb.org/3//movie/${movie.id}/videos?api_key=${TMDB_API_KEY}&language=en-US&adult=false`);
        const trailer = trailersData.results.filter((trailer) => {
            return trailer.type === "Trailer";
        });
        !trailer.length
            ? alert("Sorry! No trailers for this film.")
            : window.open(`https://www.youtube.com/watch?v=${trailer.at(0).key}`);
    });
    details.append(h1);
    details.append(h3);
    details.append(h4);
    tile.append(img);
    tile.append(details);
    tile.append(buyButton);
    tile.append(trailerButton);
    return tile;
};
let movieData = await getTMDBData(`https://api.themoviedb.org/3//movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&adult=false`);
const movies = document.getElementById("movies");
movieData.results.forEach((movie) => {
    const tile = createMovieTile({
        id: movie.id,
        poster: movie.poster_path,
        title: movie.title,
        date: movie.release_date,
        description: movie.overview,
    });
    movies.appendChild(tile);
});
