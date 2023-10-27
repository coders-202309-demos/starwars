import { useState, useCallback, PropsWithChildren } from "react";
import { CharacterStructure } from "../types";
import CharactersContext from "./CharactersContext";

const CharactersProviderWrapper = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [characters, setCharacters] = useState<CharacterStructure[]>([]);

  const loadCharacters = useCallback((characters: CharacterStructure[]) => {
    setCharacters(characters);
  }, []);

  const increaseMass = (character: CharacterStructure) => {
    setCharacters((characters) =>
      characters.map<CharacterStructure>((currentCharacter) => ({
        ...currentCharacter,
        mass:
          currentCharacter.id === character.id
            ? `${+currentCharacter.mass + 1}`
            : currentCharacter.mass,
      }))
    );
  };

  const decreaseMass = (character: CharacterStructure) => {
    setCharacters((characters) =>
      characters.map<CharacterStructure>((currentCharacter) => ({
        ...currentCharacter,
        mass:
          currentCharacter.id === character.id
            ? `${+currentCharacter.mass - 1}`
            : currentCharacter.mass,
      }))
    );
  };

  const resetAllMasses = () => {
    setCharacters((characters) =>
      characters.map((character) => ({
        ...character,
        mass: "0",
      }))
    );
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        loadCharacters,
        increaseMass,
        decreaseMass,
        resetAllMasses,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersProviderWrapper;
