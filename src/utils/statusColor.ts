import type { Character } from "../types";

export const statusColor: Record<Character["status"], string> = {
    Alive: "#55cc44",
    Dead: "#d63d2e",
    unknown: "#999",
};
