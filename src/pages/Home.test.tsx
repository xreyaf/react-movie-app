import { theme } from '../styles/theme';
import Home from './Home';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { ThemeProvider } from '@emotion/react';

test('it works', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Home />
      </Provider>
    </ThemeProvider>
  );
  expect(container.firstChild).toMatchSnapshot();
});
