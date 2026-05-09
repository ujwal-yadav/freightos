import { Character } from "./Character";
import { CharacterSkeleton } from "./CharacterSkeleton";
import { Pagination } from "../../../components/Pagination";
import type { UseCharacterReturn } from "../hooks/useCharacters";

export const CharacterList = ({
    nameInput,
    status,
    characters,
    loading,
    error,
    page,
    totalPages,
    setPage,
    pageNumbers,
    handleNameChange,
    handleClearName,
    handleStatusChange,
}: UseCharacterReturn) => {
    return (
        <div>
            <div className="sticky top-0 z-10 flex gap-3 bg-white p-4 dark:bg-gray-900">
                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={nameInput}
                        onChange={handleNameChange}
                        className="focus:outline-accent dark:focus:outline-accent-light w-full rounded-md border border-gray-200 bg-white px-3 py-2 pr-8 text-base text-gray-900 focus:outline-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                    />
                    {nameInput && (
                        <button
                            type="button"
                            onClick={handleClearName}
                            className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer border-none bg-transparent text-lg leading-none text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                            aria-label="Clear search"
                        >
                            &times;
                        </button>
                    )}
                </div>
                <select
                    value={status}
                    onChange={handleStatusChange}
                    className="focus:outline-accent dark:focus:outline-accent-light rounded-md border border-gray-200 bg-white px-3 py-2 text-base text-gray-900 focus:outline-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                >
                    <option value="">All statuses</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                </select>
            </div>

            {loading && (
                <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 px-4 pb-4">
                    {Array.from({ length: 20 }, (_, i) => (
                        <CharacterSkeleton key={i} />
                    ))}
                </div>
            )}

            {error && (
                <p className="px-4 py-10 text-center text-red-600">{error}</p>
            )}

            {!loading && !error && (
                <>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 px-4 pb-4">
                        {characters.map((c) => (
                            <Character key={c.id} character={c} />
                        ))}
                    </div>

                    <Pagination
                        page={page}
                        totalPages={totalPages}
                        pageNumbers={pageNumbers}
                        setPage={setPage}
                    />
                </>
            )}
        </div>
    );
};
