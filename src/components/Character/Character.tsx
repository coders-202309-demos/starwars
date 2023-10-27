import { CharacterStructure } from "../../features/characters/types";
import Button from "../Button/Button";
import CharacterStyled from "./CharacterStyled";
import useCharactersApi from "../../hooks/useCharactersApi";

interface CharacterProps {
  character: CharacterStructure;
}

const Character = ({
  character: { name, height, mass, created, pictureUrl },
  character,
}: CharacterProps): React.ReactElement => {
  const { increaseCharacterMass, decreaseCharacterMass } = useCharactersApi();

  const creationDate = new Date(created).toDateString();

  return (
    <CharacterStyled className="character">
      <img
        className="character__picture"
        src={pictureUrl}
        alt={name}
        width=""
        height=""
      />
      <div className="character__info">
        <h2 className="character__name">{name}</h2>
        <dl className="character__details">
          <div className="character__data">
            <dt>Height:</dt>
            <dd>{height}cm</dd>
          </div>
          <div className="character__data">
            <dt>Mass:</dt>
            <dd>{mass}g</dd>
          </div>
          <div className="character__data">
            <dt>Created at:</dt>
            <dd>{creationDate}</dd>
          </div>
        </dl>
        <div className="character__actions">
          <Button actionOnClick={() => increaseCharacterMass(character)}>
            Decrease mass
          </Button>
          <Button actionOnClick={() => decreaseCharacterMass(character)}>
            Increase mass
          </Button>
        </div>
      </div>
    </CharacterStyled>
  );
};

export default Character;
