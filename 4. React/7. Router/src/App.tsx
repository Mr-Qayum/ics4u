import { MainLayout } from '@/layouts/MainLayout';
import { ErrorView } from '@/views/ErrorView';
import { HomeView } from '@/views/HomeView';
import { CreditsView } from '@/views/movies/CreditsView';
import { MovieView } from '@/views/movies/MovieView';
import { NowPlayingView } from '@/views/movies/NowPlayingView';
import { ReviewsView } from '@/views/movies/ReviewsView';
import { TrendingView } from '@/views/movies/TrendingView';
import { SearchView } from '@/views/SearchView';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route element={<MainLayout />}>
        <Route path="/now-playing" element={<NowPlayingView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/movie/:id" element={<MovieView />}>
          <Route path="credits" element={<CreditsView />} />
          <Route path="reviews" element={<ReviewsView />} />
        </Route>
        <Route path="/trending" element={<TrendingView />} />
      </Route>
      <Route path="*" element={<ErrorView />} />
    </Routes>
  );
};
