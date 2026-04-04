import { MainLayout } from '@/layouts/MainLayout';
import { HomeView } from '@/views/HomeView';
import { CastView } from '@/views/movies/CastView';
import { MovieView } from '@/views/movies/MovieView';
import { NowPlayingView } from '@/views/movies/NowPlayingView';
import { ReviewsView } from '@/views/movies/ReviewsView';
import { SearchView } from '@/views/SearchView';
import { Route, Routes } from 'react-router-dom';
import { TrendingView } from './views/movies/TrendingView';
import { PersonView } from './views/person/PersonView';

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route element={<MainLayout />}>
          <Route path="now-playing" element={<NowPlayingView />} />
          <Route path="search" element={<SearchView />} />
          <Route path="movie/:id" element={<MovieView />}>
            <Route path="cast" element={<CastView />} />
            <Route path="reviews" element={<ReviewsView />} />
          </Route>
          <Route path="trending" element={<TrendingView />} />
          <Route path="person/:id" element={<PersonView />} />
        </Route>
      </Routes>
    </div>
  );
};
