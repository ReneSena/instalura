import React from 'react';
import { render, screen } from '../../../infra/tests/testUtils';
import TextField from './index';

describe('<TextField />', () => {
	test('renders component', () => {
		render(
			<TextField
				placeholder="Nome"
				value="Rene Sena"
				name="nome"
				onChange={() => {}}
			/>
		);

		/* screen.debug() */
		const textField = screen.getByPlaceholderText(/nome/i);

		expect(textField).toMatchSnapshot();
	});
});
