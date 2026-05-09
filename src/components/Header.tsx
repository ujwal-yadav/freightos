import { useTheme } from "../hooks/useTheme";
import sunIcon from "../assets/sun.svg";
import moonIcon from "../assets/moon.svg";

export const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="flex items-center justify-between px-4 pt-6">
            <h1 className="m-0 text-2xl font-medium text-gray-900 dark:text-gray-100">
                Rick and Morty Characters
            </h1>
            <button
                className="cursor-pointer rounded-md border border-gray-200 bg-white p-2 transition-colors hover:border-purple-400 dark:border-gray-700 dark:bg-gray-900"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
                <img
                    src={theme === "light" ? moonIcon : sunIcon}
                    alt=""
                    className="h-5 w-5 dark:invert"
                />
            </button>
        </header>
    );
};
