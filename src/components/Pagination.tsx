interface PaginationProps {
    page: number;
    totalPages: number;
    pageNumbers: (number | "...")[];
    setPage: (page: number) => void;
}

export const Pagination = ({
    page,
    totalPages,
    pageNumbers,
    setPage,
}: PaginationProps) => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-4">
            <button
                disabled={page <= 1}
                onClick={() => setPage(page - 1)}
                className="cursor-pointer rounded-md border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 hover:not-disabled:border-purple-300 hover:not-disabled:bg-purple-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:not-disabled:bg-purple-950"
            >
                Previous
            </button>
            {pageNumbers.map((p, i) =>
                p === "..." ? (
                    <span
                        key={`dots-${i}`}
                        className="px-1 text-sm text-gray-500 select-none"
                    >
                        ...
                    </span>
                ) : (
                    <button
                        key={p}
                        className={`min-w-9 cursor-pointer rounded-md border px-1 py-2 text-sm ${
                            p === page
                                ? "border-accent dark:border-accent-light text-accent dark:text-accent-light bg-purple-50 font-semibold dark:bg-purple-950"
                                : "border-gray-200 bg-white text-gray-900 hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-purple-950"
                        }`}
                        onClick={() => setPage(p)}
                    >
                        {p}
                    </button>
                ),
            )}
            <button
                disabled={page >= totalPages}
                onClick={() => setPage(page + 1)}
                className="cursor-pointer rounded-md border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 hover:not-disabled:border-purple-300 hover:not-disabled:bg-purple-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:not-disabled:bg-purple-950"
            >
                Next
            </button>
        </div>
    );
};
