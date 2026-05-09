import { Header } from "../../components/Header";
import { CharacterList } from "./components/CharacterList";
import { useCharacters } from "./hooks/useCharacters";

export const Characters = () => {
    const {
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
    } = useCharacters();

    return (
        <>
            <Header />
            <CharacterList
                nameInput={nameInput}
                status={status}
                characters={characters}
                loading={loading}
                error={error}
                page={page}
                totalPages={totalPages}
                setPage={setPage}
                pageNumbers={pageNumbers}
                handleNameChange={handleNameChange}
                handleClearName={handleClearName}
                handleStatusChange={handleStatusChange}
            />
        </>
    );
};
