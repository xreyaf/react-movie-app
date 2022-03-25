import { theme } from '../styles/theme';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { MemoryRouter } from 'react-router-dom';
import Series from './Series';
import { store } from '../app/store';
import { Provider } from 'react-redux';

test('it works', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <MemoryRouter>
          <Series />
        </MemoryRouter>
      </Provider>
    </ThemeProvider>
  );
  expect(container.firstChild).toMatchSnapshot();
});
