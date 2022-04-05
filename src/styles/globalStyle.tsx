import { css, Global, useTheme } from '@emotion/react';
import back from '../assets/img/bg.webp';

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        *,
        ::before,
        ::after {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          --swiper-navigation-color: white !important;
          --swiper-theme-color: white !important;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 5rem 0 0 0;
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
            sans-serif;
          background-image: url(${back});
          background-color: hsla(224, 39%, 11.6%, 1);
          background-size: 100%;
          background-position: 50% -160px;
          background-repeat: repeat-y;
          color: ${theme.colors.grey50};
          transition: 0.2s all ease-in;
        }

        h1 {
          font-weight: 600;
          font-size: 3.8rem;
          line-height: 5rem;
          color: ${theme.colors.grey50};
          margin-bottom: 1.5rem;
        }

        h2 {
          font-weight: 600;
          font-size: 2.6rem;
          color: ${theme.colors.grey50};
          line-height: 1.5;
          text-overflow: ellipsis;
        }

        h3 {
          font-weight: 600;
          font-size: 2.2rem;
          color: ${theme.colors.grey50};
          text-overflow: ellipsis;
          margin-bottom: 1.3rem;
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

        p,
        span {
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
          height: auto;
        }

        ul {
          list-style: none;
        }

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
      `}
    />
  );
};

export default GlobalStyles;
