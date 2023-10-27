import { useContext } from "react";
import Character from "../Character/Character";
import CharactersListStyled from "./CharactersListStyled";
import CharactersContext from "../../features/characters/store/CharactersContext";

const CharactersList = (): React.ReactElement => {
  const { characters } = useContext(CharactersContext);

  return (
    <CharactersListStyled>
      {characters.map((character) => (
        <li key={character.id}>
          <Character character={character} />
        </li>
      ))}
    </CharactersListStyled>
  );
};

export default CharactersList;
