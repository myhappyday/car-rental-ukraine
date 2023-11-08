import styled from '@emotion/styled';

export const ListStyled = styled.ul`
  display: grid;
  max-width: calc(100vw - 20px);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 16px;
`;
