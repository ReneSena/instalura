import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from './index';

// Create test to others function

describe('useForm()', () => {
	describe('when user types', () => {
		test('change the value', () => {
			const { result } = renderHook(() =>
				useForm({
					initialValues: {
						nome: 'Fer',
					},
				})
			);

			const initialValues = { nome: 'Fer' };
			expect(result.current.values).toEqual(initialValues);

			const event = {
				target: {
					getAttribute: () => 'nome',
					value: 'Rene',
				},
			};

			act(() => {
				result.current.handleChange(event);
			});

			// expect, to be a new value
			expect(result.current.values).toEqual({ nome: 'Rene' });
		});
	});
});
