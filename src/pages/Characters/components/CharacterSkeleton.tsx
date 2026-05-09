export const CharacterSkeleton = () => {
    return (
        <div className="animate-pulse overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
            <div className="aspect-square w-full bg-gray-200 dark:bg-gray-700" />
            <div className="p-3">
                <div className="mb-2 h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-3 w-1/3 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
        </div>
    );
};
