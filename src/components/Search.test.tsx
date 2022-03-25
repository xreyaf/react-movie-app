import { render, screen } from '@testing-library/react';
import Search from './Search';
import { theme } from '../styles/theme';
import { ThemeProvider } from '@emotion/react';
import userEvent from '@testing-library/user-event';
import { matchers } from '@emotion/jest';

expect.extend(matchers);
const onChange = jest.fn();

describe('Search component', () => {
  it('renders Search', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Search
          onChange={onChange}
          placeholder="placeholder"
          label="Search movies or TV series"
        />
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should implement onChange', () => {
    render(
      <ThemeProvider theme={theme}>
        <Search
          onChange={onChange}
          placeholder="placeholder"
          label="Search movies or TV series"
        />
      </ThemeProvider>
    );
    const input = screen.getByLabelText(/Search movies or TV series/i);
    userEvent.type(input, 'spider');
    expect(onChange).toHaveBeenCalledTimes(6);
  });
  it('should change border while focus', () => {
    render(
      <ThemeProvider theme={theme}>
        <Search
          onChange={onChange}
          placeholder="placeholder"
          label="Search movies or TV series"
        />
      </ThemeProvider>
    );
    const input = screen.getByLabelText(/Search movies or TV series/i);
    expect(input).toHaveStyleRule(
      'border',
      '3px solid hsla(224, 31.9%, 18.4%, 1)'
    );
    expect(input).toHaveStyleRule(
      'border',
      '3px solid hsla(246, 88.5%, 62.4%, 1)',
      { target: ':focus' }
    );
  });
});
