import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const ExternalLink = styled.a`
  color: ${theme.colors.primary400};
  font-weight: 700;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  &::after {
    content: '';
    background: ${theme.colors.primary400};
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 4px;
    z-index: -1;
    transition: 0.3s;
    animation-timing-function: ease-in-out;
  }
  &:hover:after {
    width: 100%;
  }
`;
