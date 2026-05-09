export interface Character {
    id: number;
    name: string;
    status: "Alive" | "Dead" | "unknown";
    image: string;
}

export interface ApiResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
}

export type StatusFilter = "" | "alive" | "dead";
