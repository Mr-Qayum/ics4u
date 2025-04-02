import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import MoviesView from './views/MoviesView';
import ErrorView from './views/ErrorView';
import MovieTileView from './views/MovieTileView';
import MovieDetailView from './views/MovieDetailView';
import ProtectedRoutes from './views/ProtectedRoutes';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/movies" element={<MoviesView />}>
            <Route path="now_playing" element={<MovieTileView />}></Route>
            <Route path="popular" element={<MovieTileView />}></Route>
            <Route path="top_rated" element={<MovieTileView />}></Route>
            <Route path="upcoming" element={<MovieTileView />}></Route>
            <Route path=":id" element={<MovieDetailView />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<ErrorView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
