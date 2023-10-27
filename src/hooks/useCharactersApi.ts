import { useCallback, useContext } from "react";
import { CharacterStructure } from "../features/characters/types";
import CharactersContext from "../features/characters/store/CharactersContext";
import UiContext from "../features/ui/store/UiContext";

const useCharactersApi = () => {
  const { loadCharacters, increaseMass, decreaseMass } =
    useContext(CharactersContext);
  const { setIsLoading, setIsError } = useContext(UiContext);

  const apiUrl = import.meta.env.VITE_SWAPI_URL;

  const getCharacters = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(`${apiUrl}/characters?_limit=10`);
      const characters = (await response.json()) as CharacterStructure[];

      setIsLoading(false);

      loadCharacters(
        characters.map((character) => ({
          ...character,
          pictureUrl: `https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`,
        }))
      );
    } catch {
      setIsError(true);
    }
  }, [apiUrl, loadCharacters, setIsError, setIsLoading]);

  const increaseCharacterMass = async (character: CharacterStructure) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(`${apiUrl}/characters/${character.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mass: +character.mass + 1 }),
      });

      setIsLoading(false);

      if (!response.ok) {
        setIsError(true);
        return;
      }

      increaseMass(character);
    } catch {
      setIsError(true);
    }
  };

  const decreaseCharacterMass = async (character: CharacterStructure) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(`${apiUrl}/characters/${character.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mass: +character.mass - 1 }),
      });

      setIsLoading(false);

      if (!response.ok) {
        setIsError(true);
        return;
      }

      decreaseMass(character);
    } catch {
      setIsError(true);
    }
  };

  const resetAllCharactersMasses = async (characters: CharacterStructure[]) => {
    setIsError(false);
    setIsLoading(true);

    try {
      characters.forEach(async (character) => {
        await fetch(`${apiUrl}/characters/${character.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mass: "0" }),
        });
      });

      setIsLoading(false);
    } catch {
      setIsError(true);
    }
  };

  return {
    getCharacters,
    increaseCharacterMass,
    decreaseCharacterMass,
    resetAllCharactersMasses,
  };
};

export default useCharactersApi;
