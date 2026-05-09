import type { Character as CharacterType } from "../../../types";
import { statusColor } from "../../../utils/statusColor";

interface Props {
    character: CharacterType;
}

export const Character = ({ character }: Props) => {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-900">
            <img
                src={character.image}
                alt={character.name}
                width={300}
                height={300}
                loading="lazy"
                className="block aspect-square w-full object-cover"
            />
            <div className="p-3">
                <h3 className="m-0 mb-1 truncate text-base font-medium text-gray-900 dark:text-gray-100">
                    {character.name}
                </h3>
                <span
                    className="inline-flex items-center gap-1.5 text-sm"
                    style={{ color: statusColor[character.status] }}
                >
                    <span
                        className="inline-block h-2 w-2 rounded-full"
                        style={{
                            backgroundColor: statusColor[character.status],
                        }}
                    />
                    {character.status}
                </span>
            </div>
        </div>
    );
};
