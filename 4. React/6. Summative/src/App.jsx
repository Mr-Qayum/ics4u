import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./context";
import HomeView from "../src/views/HomeView";
import RegisterView from "../src/views/RegisterView";
import LoginView from "../src/views/LoginView";
import MoviesView from "../src/views/MoviesView";
import AllMoviesView from "../src/views/AllMoviesView";
import DetailMovieView from "../src/views/DetailMovieView";
import CartView from "../src/views/CartView";
import ErrorView from "./views/ErrorView";
import ProtectedRoutes from "./util/ProtectedRoutes";
import './App.css'

function App() {

  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/cart" element={<CartView />} />
            <Route path="/movies" element={<MoviesView />}>
              <Route path="all" element={<AllMoviesView />} />
              <Route path=":id" element={<DetailMovieView />} />
            </Route>
          </Route>
          <Route path="*" element={<ErrorView />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
