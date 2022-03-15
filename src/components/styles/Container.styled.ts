import styled from "@emotion/styled";

export const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1440px;
  
  padding: 1rem 5rem;
  margin: 0 auto 5.5rem auto;
  height: 100%;
  @media screen and (max-width: 1199.98px) {
    padding: 1rem 2rem;
  }
  @media screen and (max-width: 991.98px) {
    padding: 1rem 1.5rem;
  }
  @media screen and (max-width: 816.98px) {
    padding: 1rem 1.2rem;
  }
  @media screen and (max-width: 575.98px) {
    padding: 1rem 1rem;
  }
`;

export const NotFoundContainerStyled = styled.div`
  min-height: calc(100vh - 184px);
  max-width: 880px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  h2 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 2rem;
  }
`;
