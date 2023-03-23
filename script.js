import { TMDB_API_KEY } from "./key.js";

const getTMDBData = async (url) => {
  return (await axios.get(url)).data;
}

const createMovieTile = (poster, title, date, description) => {
  const tile = document.createElement("div");
  const details = document.createElement("div");
  const img = document.createElement("img");
  const h1 = document.createElement("h1");
  const h3 = document.createElement("h3");
  const h4 = document.createElement("h4");

  tile.classList.add("tile");
  img.src = `https://image.tmdb.org/t/p/w500/${poster}`;
  h1.innerText = title;
  h3.innerText = date;
  h4.innerText = description;

  details.append(h1);
  details.append(h3);
  details.append(h4);

  tile.append(img);
  tile.append(details);

  return tile;
}

let movieData = await getTMDBData(`https://api.themoviedb.org/3//movie/popular?api_key=${TMDB_API_KEY}&language=en-US&adult=false`);

movieData.results.forEach(movie => {
  const tile = createMovieTile(movie.poster_path, movie.title, movie.release_date, movie.overview);
  document.body.append(tile);
});