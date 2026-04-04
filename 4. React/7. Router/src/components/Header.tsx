import { Link } from '@/components/Link';

export const Header = () => {
  return (
    <nav className="flex gap-4 p-4 bg-gray-800">
      <Link to="/">Home</Link>
      <Link to="/now-playing">Now Playing</Link>
      <Link to="/trending">Trending</Link>
      <Link to="/search">Search</Link>
    </nav>
  );
};
