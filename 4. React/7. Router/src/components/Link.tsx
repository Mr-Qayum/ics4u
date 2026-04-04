import type { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

type LinkProps = {
  children: ReactNode;
  to: string;
};

export const Link = ({ children, to }: LinkProps) => {
  return (
    <RouterLink to={to} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">
      {children}
    </RouterLink>
  );
};
