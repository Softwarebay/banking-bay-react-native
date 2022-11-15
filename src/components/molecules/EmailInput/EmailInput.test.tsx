import {
	fireEvent,
	render,
	screen,
	within,
} from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { EmailInput } from './EmailInput';

import type { Props } from './EmailInput';

describe('EmailInput', () => {
	const props: Omit<Props, 'isValid'> = {
		testID: 'email-input-test-id',
		placeholder: 'Enter email',
		style: {
			color: 'red',
		},
	};

	it('should match snapshot - input is valid', () => {
		const tree = testRenderer
			.create(<EmailInput {...props} isValid />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - input is not valid', () => {
		const tree = testRenderer
			.create(<EmailInput {...props} isValid={false} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should show typed in text', () => {
		render(<EmailInput {...props} isValid={false} />);

		const emailInputField = screen.getByTestId(
			'input-field-email-input-test-id'
		);

		expect(emailInputField.props).toHaveProperty('secureTextEntry', false);
	});

	it('should display placeholder', () => {
		render(<EmailInput {...props} isValid={false} />);

		const emailInputField = screen.getByTestId(
			'input-field-email-input-test-id'
		);

		expect(emailInputField.props).toHaveProperty('placeholder', 'Enter email');
	});

	it('should render check icon if input is valid', () => {
		render(<EmailInput {...props} isValid />);

		const emailInput = screen.getByTestId('email-input-test-id');
		const checkIcon = within(emailInput).getByTestId('check-icon-test-id');

		expect(emailInput.children).toHaveLength(2);
		expect(checkIcon).not.toBeNull();
	});

	it("shouldn't render check icon if input is not valid", () => {
		render(<EmailInput {...props} isValid={false} />);

		const emailInput = screen.getByTestId('email-input-test-id');
		const checkIcon = within(emailInput).queryByTestId('check-icon-test-id');

		expect(emailInput.children).toHaveLength(1);
		expect(checkIcon).toBeNull();
	});

	it('should handle type events', () => {
		render(<EmailInput {...props} isValid={false} />);

		const emailInputField = screen.getByTestId(
			'input-field-email-input-test-id'
		);

		fireEvent.changeText(emailInputField, 'test@test.com');

		expect(emailInputField.props).toHaveProperty('value', 'test@test.com');
	});
});
