import { useCallback, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

const getStoredTheme = (): Theme =>
    (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? "dark";

const apply = (theme: Theme) => {
    document.documentElement.dataset.theme = theme;
};

let listeners: Array<() => void> = [];

const subscribe = (cb: () => void) => {
    listeners.push(cb);
    return () => {
        listeners = listeners.filter((l) => l !== cb);
    };
};

const getSnapshot = (): Theme =>
    (document.documentElement.dataset.theme as Theme) ?? "light";

apply(getStoredTheme());

export const useTheme = () => {
    const theme = useSyncExternalStore(subscribe, getSnapshot);

    const toggleTheme = useCallback(() => {
        const next: Theme = theme === "light" ? "dark" : "light";
        localStorage.setItem(STORAGE_KEY, next);
        apply(next);
        listeners.forEach((l) => l());
    }, [theme]);

    return { theme, toggleTheme } as const;
};
