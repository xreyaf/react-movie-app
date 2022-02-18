import styled from "@emotion/styled";

export const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  row-gap: 1.4rem;
  column-gap: 1.4rem;
  align-items: start;
  @media screen and (max-width: 1199.98px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (max-width: 991.98px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (max-width: 767.98px) {
   
      row-gap: .8rem;
      column-gap: .8rem;
    }
  @media screen and (max-width: 575.98px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
