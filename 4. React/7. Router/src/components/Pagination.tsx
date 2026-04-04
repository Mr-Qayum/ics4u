import { Button } from '@/components/Button';

type PaginationProps = {
  page: number;
  maxPages: number;
  onClick: (page: number) => void;
};

export const Pagination = ({ page, maxPages, onClick }: PaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-6">
      <Button onClick={() => onClick(Math.max(page - 1, 1))} disabled={page === 1}>
        Prev
      </Button>
      <p className="text-gray-300 font-medium">
        {page} / {maxPages}
      </p>
      <Button onClick={() => onClick(Math.min(page + 1, maxPages))} disabled={page === maxPages}>
        Next
      </Button>
    </div>
  );
};
