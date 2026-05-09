import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import type { ApiResponse, Character, StatusFilter } from "../types";

interface UseCharactersResult {
    characters: Character[];
    loading: boolean;
    error: string | null;
    totalPages: number;
}

interface FetchCharactersParams {
    page: number;
    name: string;
    status: StatusFilter;
}

export const fetchCharacters = async ({
    page,
    name,
    status,
}: FetchCharactersParams): Promise<ApiResponse> => {
    const params: Record<string, string> = { page: String(page) };
    if (name) params.name = name;
    if (status) params.status = status;

    const { data } = await axios.get<ApiResponse>(
        `${import.meta.env.VITE_API_BASE_URL}/character`,
        { params },
    );
    return data;
};

export const useGetCharactersListing = (
    page: number,
    name: string,
    status: StatusFilter,
): UseCharactersResult => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["characters", { page, name, status }],
        queryFn: () => fetchCharacters({ page, name, status }),
    });

    return {
        characters: data?.results ?? [],
        loading: isLoading,
        error: isError
            ? error instanceof Error
                ? error.message
                : "Something went wrong"
            : null,
        totalPages: data?.info.pages ?? 1,
    };
};
