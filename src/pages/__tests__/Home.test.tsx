import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { MemoryRouter } from 'react-router-dom';
import { renderHook } from '@testing-library/react-hooks';
import { store } from '../../app/store';
import { useGetTrendingQuery } from '../../features/movies/TMDBApi';
import { theme } from '../../styles/theme';
import Home from '../Home';
import Card from '../../components/Card';

const wrapper = ({ children }: { children: any }) => (
  <Provider store={store}>{children}</Provider>
);

describe('Home page', () => {
  it('should render home page', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useGetTrendingQuery({ mediaType: 'all', time: 'week' }),
      { wrapper }
    );

    const initialResponse = result.current;
    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(true);
    await waitForNextUpdate({ timeout: 10000 });

    const nextResponse = result.current;
    expect(nextResponse.data).not.toBeUndefined();
    expect(nextResponse.isLoading).toBe(false);
    expect(nextResponse.isSuccess).toBe(true);

    const container = mount(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Home />
          </Provider>
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(container.find('h1').text()).toEqual('Сейчас в тренде');
    expect(container.find('label').text()).toEqual('Найти фильм или сериал ');
    expect(container.find(Card)).toHaveLength(20);
  });
});
