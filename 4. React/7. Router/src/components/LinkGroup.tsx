import { Link } from '@/components/Link';

type LinkGroupProps = {
  options: Array<{
    label: string;
    to: string;
  }>;
};

export const LinkGroup = ({ options }: LinkGroupProps) => {
  return (
    <div className="flex gap-6">
      {options.map((option) => (
        <Link key={option.label} to={option.to}>
          {option.label}
        </Link>
      ))}
    </div>
  );
};
