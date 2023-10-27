import { useContext } from "react";
import Button from "../Button/Button";
import CharactersContext from "../../features/characters/store/CharactersContext";
import HeaderStyled from "./HeaderStyled";
import useCharactersApi from "../../hooks/useCharactersApi";

const Header = (): React.ReactElement => {
  const { characters, resetAllMasses } = useContext(CharactersContext);
  const { resetAllCharactersMasses } = useCharactersApi();

  const onReset = async () => {
    await resetAllCharactersMasses(characters);

    resetAllMasses();
  };

  return (
    <HeaderStyled>
      <h1 className="title">StarWars Characters</h1>
      <Button actionOnClick={onReset}>Reset masses</Button>
    </HeaderStyled>
  );
};

export default Header;
