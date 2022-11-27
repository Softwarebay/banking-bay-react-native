import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { PasswordInput } from './PasswordInput';

import type { Props } from './PasswordInput';

describe('PasswordInput', () => {
	const props: Props = {
		placeholder: 'Enter password',
		testID: 'password-input-test-id',
		style: {
			height: 50,
		},
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<PasswordInput {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render input field and eye-off icon button', () => {
		render(<PasswordInput {...props} />);

		const passwordInput = screen.getByTestId('password-input-test-id');
		const inputField = screen.getByTestId('input-field-password-input-test-id');
		const iconBtn = screen.getByTestId('icon-btn-password-input-test-id');
		const eyeOffIcon = screen.getByTestId('eye-off-icon-test-id');

		expect(passwordInput.children).toHaveLength(2);
		expect(inputField).not.toBeNull();
		expect(iconBtn).not.toBeNull();
		expect(eyeOffIcon).not.toBeNull();
	});

	it('should apply additional styles', () => {
		render(<PasswordInput {...props} />);

		const passwordInput = screen.getByTestId('password-input-test-id');

		expect(passwordInput).toHaveStyle({
			height: 50,
		});
	});

	it('should initially hide password', () => {
		render(<PasswordInput {...props} />);

		const inputField = screen.getByTestId('input-field-password-input-test-id');

		expect(inputField.props).toHaveProperty('secureTextEntry', true);
	});

	it('should handle type events', () => {
		render(<PasswordInput {...props} />);

		const inputField = screen.getByTestId('input-field-password-input-test-id');

		fireEvent.changeText(inputField, 'password');

		expect(inputField.props).toHaveProperty('value', 'password');
	});

	it('should show/hide password after press on eye-off icon button', () => {
		render(<PasswordInput {...props} />);

		const iconBtn = screen.getByTestId('icon-btn-password-input-test-id');

		fireEvent.press(iconBtn);

		const inputFieldPasswordShown = screen.getByTestId(
			'input-field-password-input-test-id'
		);

		expect(inputFieldPasswordShown.props).toHaveProperty(
			'secureTextEntry',
			false
		);

		fireEvent.press(iconBtn);

		const inputFieldPasswordHidden = screen.getByTestId(
			'input-field-password-input-test-id'
		);

		expect(inputFieldPasswordHidden.props).toHaveProperty(
			'secureTextEntry',
			true
		);
	});
});
