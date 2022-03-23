import React from 'react';
import { css } from '@emotion/react';
import logo from '../../assets/svg/logo.svg';
import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { Logo } from './Navbar';

const FooterStyled = styled.footer`
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

const ExternalLink = styled.a`
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

function Footer() {
  return (
    <FooterStyled>
      <Logo src={logo} alt="Logo" />
      <p
        css={css`
          max-width: 560px;
          margin: auto;
          line-height: 1.5rem;
        `}
      >
        A pet project created by
        <span> </span>
        <ExternalLink href="https://github.com/xreyaf" target="_blank">
          xreyaf
        </ExternalLink>
        <br />
        Inspired by
        <span> </span>
        <ExternalLink href="https://pramodpoudel.com.np" target="_blank">
          Pramod Poudel
        </ExternalLink>
      </p>
    </FooterStyled>
  );
}

export default Footer;
