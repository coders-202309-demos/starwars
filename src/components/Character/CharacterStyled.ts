import styled from "styled-components";

const CharacterStyled = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.accent};

  .character {
    &__info {
      padding: 10px;
    }

    &__details {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    &__data {
      display: flex;
    }

    &__actions {
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default CharacterStyled;
