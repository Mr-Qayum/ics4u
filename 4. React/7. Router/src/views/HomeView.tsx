import { Button } from '@/components/Button';
import { useNavigate } from 'react-router-dom';

export const HomeView = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <section className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-5xl font-bold tracking-tight">TMDB Explorer</h1>
        <p className="text-gray-400 text-lg">Explore movies and discover people using a fast, modern interface.</p>
        <Button onClick={() => navigate('/now-playing')}>Enter</Button>
        <footer className="pt-10 text-sm text-gray-500">Built with React, Vite and React Router</footer>
      </section>
    </main>
  );
};
