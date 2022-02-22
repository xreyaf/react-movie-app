import React from "react";
import { ContainerStyled } from "../styles/Container.styled";
import { FooterStyled,  } from "../styles/Footer.styled";
import { Logo } from "../styles/Header.styled";
import { css } from "@emotion/react";
import { ExternalLink } from "../styles/Links";

const Footer = () => {
  return (
    <FooterStyled>
      <ContainerStyled>
        <Logo src="../logo.svg" alt="Logo" />
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
      </ContainerStyled>
    </FooterStyled>
  );
};

export default Footer;
