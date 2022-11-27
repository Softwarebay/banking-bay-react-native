import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { TextInput } from './TextInput';

import type { Props } from './TextInput';

describe('TextInput', () => {
	const props: Props = {
		testID: 'text-input-test-id',
		placeholder: 'Placeholder',
		style: {
			height: 50,
		},
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<TextInput {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render text input with default keyboard type', () => {
		render(<TextInput {...props} />);

		const inputField = screen.getByTestId('input-field-text-input-test-id');

		expect(inputField.props).toHaveProperty('keyboardType', 'default');
	});

	it('should display placeholder', () => {
		render(<TextInput {...props} />);

		const inputField = screen.getByTestId('input-field-text-input-test-id');

		expect(inputField.props).toHaveProperty('placeholder', 'Placeholder');
	});

	it('should apply additional styles', () => {
		render(<TextInput {...props} />);

		const input = screen.getByTestId('text-input-test-id');

		expect(input).toHaveStyle({
			height: 50,
		});
	});

	it('should handle type events', () => {
		render(<TextInput {...props} />);

		const inputField = screen.getByTestId('input-field-text-input-test-id');

		fireEvent.changeText(inputField, 'hello');

		expect(inputField.props).toHaveProperty('value', 'hello');
	});
});
