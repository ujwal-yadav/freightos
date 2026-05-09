import { type ChangeEvent, useCallback, useMemo, useState } from "react";
import { useGetCharactersListing } from "../../../api/useGetCharactersListing";
import { useDebounce } from "../../../hooks/useDebounce";
import type { StatusFilter } from "../../../types";
import { getPageNumbers } from "../../../utils/getPageNumbers";

export type UseCharacterReturn = ReturnType<typeof useCharacters>;

export const useCharacters = () => {
    const [nameInput, setNameInput] = useState("");
    const [status, setStatus] = useState<StatusFilter>("");
    const [page, setPage] = useState(1);
    const debouncedName = useDebounce(nameInput, 400);

    const { characters, loading, error, totalPages } = useGetCharactersListing(
        page,
        debouncedName,
        status,
    );

    const pageNumbers = useMemo(
        () => getPageNumbers(page, totalPages),
        [page, totalPages],
    );

    const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value);
        setPage(1);
    }, []);

    const handleClearName = useCallback(() => {
        setNameInput("");
        setPage(1);
    }, []);

    const handleStatusChange = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            setStatus(e.target.value as StatusFilter);
            setPage(1);
        },
        [],
    );

    return {
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
    };
};
