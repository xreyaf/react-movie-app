// import { render, screen } from '@testing-library/react';
// import { ThemeProvider } from '@emotion/react';
// import userEvent from '@testing-library/user-event';
// import { matchers } from '@emotion/jest';
// import { theme } from '../../styles/theme';
// import Input from '../Input';
// import toJson from 'enzyme-to-json';
// import { mount } from 'enzyme';
// import { createSerializer } from '@emotion/jest';
// import React from 'react';
//
// expect.extend(matchers);
// const onChange = jest.fn();
// expect.addSnapshotSerializer(createSerializer());
//
// describe('Search component', () => {
//   it('renders Search', () => {
//     const container = mount(
//       <ThemeProvider theme={theme}>
//         <Input
//           onChange={onChange}
//           placeholder="placeholder"
//           label="Search movies or TV series"
//         />
//       </ThemeProvider>
//     );
//
//     expect(toJson(container)).toMatchSnapshot();
//   });
//   it('should implement onChange', () => {
//     render(
//       <ThemeProvider theme={theme}>
//         <Input
//           onChange={onChange}
//           placeholder="placeholder"
//           label="Search movies or TV series"
//         />
//       </ThemeProvider>
//     );
//     const input = screen.getByLabelText(/Search movies or TV series/i);
//     userEvent.type(input, 'spider');
//     expect(onChange).toHaveBeenCalledTimes(6);
//   });
//   it('should change border while focus', () => {
//     render(
//       <ThemeProvider theme={theme}>
//         <Input
//           onChange={onChange}
//           placeholder="placeholder"
//           label="Search movies or TV series"
//           icon={<Unicons.UilEnvelope size={24} />}
//         />
//       </ThemeProvider>
//     );
//     const input = screen.getByLabelText(/Search movies or TV series/i);
//     expect(input).toHaveStyleRule(
//       'border',
//       '3px solid hsla(224, 31.9%, 18.4%, 1)'
//     );
//     expect(input).toHaveStyleRule(
//       'border',
//       '3px solid hsla(246, 88.5%, 62.4%, 1)',
//       { target: ':focus' }
//     );
//   });
// });
