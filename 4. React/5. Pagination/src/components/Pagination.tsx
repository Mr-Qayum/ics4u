type Props = {
  page: number;
  maxPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({ page, maxPages, onPageChange }: Props) => {
  return (
    <div className="flex items-center justify-center gap-6 mt-10">
      <button
        onClick={() => onPageChange(Math.max(page - 1, 1))}
        disabled={page === 1}
        className="px-5 py-2 rounded-lg bg-slate-700 text-white font-semibold
                   hover:bg-slate-600 active:scale-95 transition
                   disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Prev
      </button>

      <p className="font-medium">
        {page} / {maxPages}
      </p>

      <button
        onClick={() => onPageChange(Math.min(page + 1, maxPages))}
        disabled={page === maxPages}
        className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold
                   hover:bg-blue-500 active:scale-95 transition
                   disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};
