import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'grey';
};

export const Button = ({ children, onClick, variant = 'primary' }: ButtonProps) => {
  const baseStyles = 'inline-block px-6 py-3 rounded-2xl transition font-medium shadow-lg';

  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-500 text-white',
    grey: 'bg-gray-700 hover:bg-gray-600 text-white',
  };

  return (
    <button type="button" onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
};
