/** @format */

import React from 'react';
import renderer from 'react-test-renderer';
import Index from './index';

test('Index renders with props', () => {
	const component = renderer.create(<Index text='My name is Cepho' />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
