import react from 'react';
import Cover from '../Cover';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

test('Link changes the class when hovered', () => {
  const component = shallow(<Cover page="http://www.facebook.com" />);
});
