import { NavLink, Outlet } from "react-router-dom";
import "./MoviesView.css";

function MoviesView() {
  return (
    <div className="movies-container">
      <h1 className="movies-title">Movies</h1>
      <nav className="movies-nav">
        <NavLink to="/movies/now_playing" className="nav-link">Now Playing</NavLink>
        <NavLink to="/movies/popular" className="nav-link">Popular</NavLink>
        <NavLink to="/movies/top_rated" className="nav-link">Top Rated</NavLink>
        <NavLink to="/movies/upcoming" className="nav-link">Upcoming</NavLink>
      </nav>
      <div className="movies-content">
        <Outlet />
      </div>
    </div>
  );
}

export default MoviesView;