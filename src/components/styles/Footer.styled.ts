import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const FooterStyled = styled.footer`
  background: ${theme.colors.grey900_80};
  backdrop-filter: blur(2px);
  padding: 6rem 5rem;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  @media screen and (max-width: 1199.98px) {
    padding: 3rem 2rem;
  }

  @media screen and (max-width: 575.98px) {
    padding: 1rem 1rem;
  }
`;
