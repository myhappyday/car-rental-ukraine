import styled from '@emotion/styled';

export const ListStyled = styled.ul`
  display: grid;
  max-width: calc(100vw - 20px);
  // grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-template-columns: repeat(4, 274px);
  grid-gap: 50px 29px;
`;
