import React from 'react';
import { css } from '@emotion/react';
import { FooterStyled } from '../styles/Footer.styled';
import { Logo } from '../styles/Header.styled';
import { ExternalLink } from '../styles/Links';
import logo from '../../assets/svg/logo.svg';

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
