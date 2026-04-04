import { Header } from '@/components/Header';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};
