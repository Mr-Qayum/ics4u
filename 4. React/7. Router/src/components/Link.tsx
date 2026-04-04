import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type LinkProps = {
  children: ReactNode;
  to: string;
};

export const Link = ({ children, to }: LinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 rounded-md transition-all duration-200 border ${
          isActive
            ? 'bg-white text-gray-900 border-white shadow-lg scale-105'
            : 'bg-gray-700 text-gray-300 border-gray-700 hover:bg-gray-600 hover:text-white hover:border-gray-500'
        }`
      }
    >
      {children}
    </NavLink>
  );
};
