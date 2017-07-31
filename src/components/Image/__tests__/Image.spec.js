import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Image from '../Image';

it('Image should be rendered without error', () => {
	shallow(<Image />)
});
