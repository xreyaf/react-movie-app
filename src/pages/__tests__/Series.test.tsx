import { ThemeProvider } from '@emotion/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderHook } from '@testing-library/react-hooks';
import { mount } from 'enzyme';
import { store } from '../../app/store';
import { useGetPopularQuery } from '../../features/movies/TMDBApi';
import { theme } from '../../styles/theme';
import Series from '../Series';
import Card from '../../components/Card';

const wrapper = ({ children }: { children: any }) => (
  <Provider store={store}>{children}</Provider>
);

describe('Series page', () => {
  it('should render series page', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useGetPopularQuery('tv'),
      {
        wrapper,
      }
    );

    const initialResponse = result.current;
    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(true);
    await waitForNextUpdate();

    const nextResponse = result.current;
    expect(nextResponse.data).not.toBeUndefined();
    expect(nextResponse.isLoading).toBe(false);
    expect(nextResponse.isSuccess).toBe(true);

    const container = mount(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <MemoryRouter>
            <Series />
          </MemoryRouter>
        </Provider>
      </ThemeProvider>
    );
    expect(container.find(Card)).toHaveLength(20);
  });
});
