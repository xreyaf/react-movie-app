import { css } from "@emotion/react";
import { theme } from "./theme";
import back from "../assets/img/bg-min.png";

export const GlobalStyle = css`
  //fonts
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 5rem 0 0 0;
    font-family: var(--body-font);
    background-color: ${theme.colors.grey900};
    background-image: url(${back});
    background-size: 100%;
    background-position: 50% -160px;
    background-repeat: repeat-y;
    color: ${theme.colors.grey50};
    transition: 0.2s all ease-in;
  }

  h1 {
    font-weight: 600;
    font-size: 4rem;
    line-height: 5rem;
    color: ${theme.colors.grey50};
  }

  h2 {
    font-weight: 600;
    font-size: 3rem;
    color: ${theme.colors.grey50};
    line-height: 1.5;
    text-overflow: ellipsis;
  }

  h3 {
    font-weight: 600;
    font-size: 2.5rem;
    color: ${theme.colors.grey50};
    line-height: 1.5;
    text-overflow: ellipsis;
  }

  h4 {
    font-weight: 600;
    font-size: 2rem;
    color: ${theme.colors.grey50};
    line-height: 1.5;
    text-overflow: ellipsis;
  }

  h5 {
    font-weight: 600;
    font-size: 1.5rem;
    color: ${theme.colors.grey50};
    line-height: 1.5;
    text-overflow: ellipsis;
  }

  h6 {
    font-weight: 600;
    font-size: 1rem;
    color: ${theme.colors.grey50};
    line-height: 1.5;
    text-overflow: ellipsis;
  }

  p, span {
    color: ${theme.colors.grey400};
    font-weight: 500;
    line-height: 1.5rem;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.primary400};
    background-color: transparent;
  }

  img {
    max-width: 100%;
    height: auto;  }

  ul {
    list-style: none;
  }

  //variables
  :root {
    --body-font: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  }

  //scroll bar
  ::-webkit-scrollbar {
    width: 0.5rem;
    border-radius: 0.5rem;
    background-color: ${theme.colors.grey900};

    &-thumb {
      background-color: ${theme.colors.grey800};
      border-radius: 0.5rem;

      &:hover {
        background-color: ${theme.colors.grey700};
      }
    }
  }
`;
