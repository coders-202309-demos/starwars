import styled from "styled-components";

const CharactersListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
`;

export default CharactersListStyled;
