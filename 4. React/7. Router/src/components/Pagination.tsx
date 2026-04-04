import { Button } from './Button';

type PaginationProps = {
  page: number;
  maxPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({ page, maxPages, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-6 m-8">
      <Button onClick={() => onPageChange(Math.max(page - 1, 1))}>Prev</Button>
      <p className="text-gray-300 font-medium">
        {page} / {maxPages}
      </p>
      <Button onClick={() => onPageChange(Math.min(page + 1, maxPages))}>Next</Button>
    </div>
  );
};
