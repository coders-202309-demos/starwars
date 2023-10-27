import styled from "styled-components";

const ButtonStyled = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 20px;
  padding: 5px 10px;
`;

export default ButtonStyled;
