import { Button } from '@/components/Button';
import { useNavigate } from 'react-router-dom';

export const ErrorView = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-gray-500">Page not found</p>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </main>
  );
};
