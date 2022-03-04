import React from "react";
import { FooterStyled } from "../styles/Footer.styled";
import { Logo } from "../styles/Header.styled";
import { css } from "@emotion/react";
import { ExternalLink } from "../styles/Links";
import logosvg from "../../assets/svg/logo.svg";

const Footer = () => {
  return (
    <FooterStyled>
      <Logo src={logosvg} alt="Logo" />
      <p
        css={css`
          max-width: 560px;
          margin: auto;
          line-height: 1.5rem;
        `}
      >
        A pet project created by{" "}
        <ExternalLink href="https://github.com/xreyaf" target="_blank">
          xreyaf
        </ExternalLink>
        <br /> Inspired by{" "}
        <ExternalLink href="https://pramodpoudel.com.np" target="_blank">
          Pramod Poudel
        </ExternalLink>
      </p>
    </FooterStyled>
  );
};

export default Footer;
