type PaginationProps = {
  page: number;
  maxPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  page,
  maxPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-6 mt-10">
      <button
        onClick={() => onPageChange(Math.max(page - 1, 1))}
        disabled={page === 1}
        className="px-5 py-2 rounded-xl bg-gray-800 text-white font-medium
                   hover:bg-gray-700 active:scale-95 transition
                   disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Prev
      </button>

      <p className="text-gray-300 font-medium">
        {page} / {maxPages}
      </p>

      <button
        onClick={() => onPageChange(Math.min(page + 1, maxPages))}
        disabled={page === maxPages}
        className="px-5 py-2 rounded-xl bg-blue-600 text-white font-medium
                   hover:bg-blue-500 active:scale-95 transition
                   disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};
