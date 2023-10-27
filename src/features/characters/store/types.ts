import { CharacterStructure } from "../types";

interface CharactersContextStructure {
  characters: CharacterStructure[];
  loadCharacters: (characters: CharacterStructure[]) => void;
  increaseMass: (character: CharacterStructure) => void;
  decreaseMass: (character: CharacterStructure) => void;
  resetAllMasses: () => void;
}

export default CharactersContextStructure;
