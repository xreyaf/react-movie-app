import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { useGetPopularQuery } from '../../features/movies/TMDBApi';
import { theme } from '../../styles/theme';
import { ThemeProvider } from '@emotion/react';
import Movies from '../Movies';
import { MemoryRouter } from 'react-router-dom';
import { createSerializer, matchers } from '@emotion/jest';
import { render } from '@testing-library/react';

expect.extend(matchers);
expect.addSnapshotSerializer(createSerializer());

describe('Movies page', () => {
  it('should render movies page', async () => {
    const wrapper = ({ children }: { children: any }) => (
      <Provider store={store}>{children}</Provider>
    );
    const { waitForNextUpdate } = renderHook(
      () => useGetPopularQuery('movie'),
      {
        wrapper,
      }
    );
    await waitForNextUpdate();
    const container = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <MemoryRouter>
            <Movies />
          </MemoryRouter>
        </Provider>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
