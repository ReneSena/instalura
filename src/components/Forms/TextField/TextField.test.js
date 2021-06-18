import React from 'react';
import user from '@testing-library/user-event';
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

describe('when field is valid', () => {
	describe('and user is typing', () => {
		test('the value must be updated', () => {
			const onChangeMock = jest.fn();

			render(
				<TextField
					placeholder="Nome"
					value=""
					name="nome"
					isTouched
					onChange={onChangeMock}
				/>
			);
			const inputNome = screen.getByPlaceholderText(/nome/i);
			user.type(inputNome, 'Rene Sena');

			expect(onChangeMock).toHaveBeenCalledTimes(9);
		});
	});
});

describe('when field is invalid', () => {
	test('displays the respective error message', () => {
		render(
			<TextField
				placeholder="Email"
				value="rene.sena@gmail.com"
				name="email"
				error="O campo e-mail é obrigatório"
				isTouched
				onChange={() => {}}
			/>
		);

		const inputEmail = screen.getByPlaceholderText(/email/i);

		expect(inputEmail).toHaveValue('rene.sena@gmail.com');

		expect(screen.getByRole('alert')).toHaveTextContent(
			'O campo e-mail é obrigatório'
		);

		expect(inputEmail).toMatchSnapshot();
	});
});
