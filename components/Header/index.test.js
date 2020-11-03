/** @format */
import { render, screen } from '@testing-library/react';
import Index from './index';

describe('App', () => {
	it('Main Page Component', () => {
		const { getByText } = render(<Index />);
		expect(getByText('My name is Cepho'));
		expect(screen.getByRole('heading', { name: 'My name is Cepho' }));
	});
});
