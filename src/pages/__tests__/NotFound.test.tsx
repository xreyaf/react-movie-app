import { ThemeProvider } from '@emotion/react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import NotFound from '../NotFound';
import { theme } from '../../styles/theme';

describe('Not found page', () => {
  it('should render NF page', function () {
    const container = mount(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      </ThemeProvider>
    );
    expect(container.find('img')).toHaveLength(1);
    expect(container.find('p')).toHaveLength(1);
    expect(container.find('h1').text()).toEqual('Потерялся, странник?');
  });
});
