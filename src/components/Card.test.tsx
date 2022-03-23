import Card from './Card';
import { MemoryRouter } from 'react-router-dom';

import { configure, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

const data = {
  id: 12,
  name: 'Some name',
  title: 'Some title',
  poster_path: '1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  vote_average: 8.7,
};

describe('Card component testing', () => {
  test('render the card', () => {
    const w = render(
      <MemoryRouter>
        <Card item={data} type={'movie'} />
      </MemoryRouter>
    );

    expect(w.find('p').text()).toContain('Some title');
  });
});
