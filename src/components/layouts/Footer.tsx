import React from 'react';
import styled from '@emotion/styled';

const FooterStyled = styled.footer`
  background: ${(props) => props.theme.colors.grey900_80};
  backdrop-filter: blur(2px);
  padding: 6rem 5rem;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  @media ${({ theme }) => theme.media.largeDesktop} {
    padding: 3rem 2rem;
  }

  @media ${({ theme }) => theme.media.phone} {
    padding: 1rem 1rem 6rem 1rem;
  }

  *p {
    max-width: 560px;
    margin: auto;
    line-height: 1.5rem;
  }
`;

const ExternalLink = styled.a`
  color: ${(props) => props.theme.colors.primary400};
  font-weight: 700;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  &::after {
    content: '';
    background: ${(props) => props.theme.colors.primary400};
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
      <p>
        Писал
        <span> </span>
        <ExternalLink href="https://github.com/xreyaf" target="_blank">
          xreyaf
        </ExternalLink>
        <br />
        Источник вдохновения
        <span> </span>
        <ExternalLink href="https://pramodpoudel.com.np" target="_blank">
          Pramod Poudel
        </ExternalLink>
      </p>
    </FooterStyled>
  );
}

export default Footer;
