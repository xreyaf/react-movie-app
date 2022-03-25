import { theme } from '../styles/theme';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import NotFound from './NotFound';
import { MemoryRouter } from 'react-router-dom';

test('it works', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    </ThemeProvider>
  );
  expect(container.firstChild).toMatchSnapshot();
});
