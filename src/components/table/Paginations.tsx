import React, { useMemo } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

const DOTS = "DOTS";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}) => {
  const paginationRange = useMemo(() => {
    if (totalPages <= 1) return [];

    const pages = new Set<number>();

    // Always include first and last
    pages.add(1);
    pages.add(totalPages);

    // Include siblings around current
    for (
      let i = currentPage - siblingCount;
      i <= currentPage + siblingCount;
      i++
    ) {
      if (i > 1 && i < totalPages) {
        pages.add(i);
      }
    }

    const sortedPages = Array.from(pages).sort((a, b) => a - b);

    const finalPages: (number | typeof DOTS)[] = [];

    for (let i = 0; i < sortedPages.length; i++) {
      const current = sortedPages[i];
      const prev = sortedPages[i - 1];

      if (prev && current - prev > 1) {
        finalPages.push(DOTS);
      }

      finalPages.push(current);
    }

    return finalPages;
  }, [currentPage, totalPages, siblingCount]);

  if (totalPages <= 1) return null;

  const base =
    "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200";

  return (
    <nav className="flex justify-center items-center gap-2 my-4">
      {/* Previous */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`${base} border border-gray-300 hover:bg-gray-100 disabled:opacity-50`}
      >
        ←
      </button>

      {paginationRange.map((page, index) =>
        page === DOTS ? (
          <span key={`dots-${index}`} className="px-2 text-gray-400">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            className={`${base} ${
              page === currentPage
                ? "bg-yellow-100 border border-yellow-300"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ),
      )}

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`${base} border border-gray-300 hover:bg-gray-100 disabled:opacity-50`}
      >
        →
      </button>
    </nav>
  );
};

export default React.memo(Pagination);
