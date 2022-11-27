import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { ChangePasswordTemplate } from './ChangePasswordTemplate';

import type { Props } from './ChangePasswordTemplate';

describe('ChangePasswordTemplate', () => {
	const onChangePassword = jest.fn<
		Props['confirmPasswordPlaceholder'],
		[string]
	>();

	const props: Props = {
		headerText: 'Template header',
		passwordPlaceholder: 'Password placeholder',
		confirmPasswordPlaceholder: 'Confirm password placeholder',
		onChangePassword,
	};

	it('should match snapshot', () => {
		const tree = testRenderer
			.create(<ChangePasswordTemplate {...props} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render template header', () => {
		render(<ChangePasswordTemplate {...props} />);

		const headerText = screen.getByTestId(
			'change-password-template-header-test-id'
		);

		expect(headerText).toHaveTextContent('Template header');
	});

	it('should render two password inputs with specified placeholders', () => {
		render(<ChangePasswordTemplate {...props} />);

		const inputs = screen.getAllByTestId(
			/^change-password-template-(\w(-\w)?)+-input-test-id/g
		);

		expect(inputs).toHaveLength(2);

		const enterPasswordInputField = screen.getByTestId(
			'input-field-change-password-template-password-input-test-id'
		);

		const confirmPasswordInputField = screen.getByTestId(
			'input-field-change-password-template-confirm-password-input-test-id'
		);

		expect(enterPasswordInputField.props).toHaveProperty(
			'placeholder',
			'Password placeholder'
		);

		expect(confirmPasswordInputField.props).toHaveProperty(
			'placeholder',
			'Confirm password placeholder'
		);
	});

	it('should render initially empty inputs', () => {
		render(<ChangePasswordTemplate {...props} />);

		const enterPasswordInputField = screen.getByTestId(
			'input-field-change-password-template-password-input-test-id'
		);

		const confirmPasswordInputField = screen.getByTestId(
			'input-field-change-password-template-confirm-password-input-test-id'
		);

		expect(enterPasswordInputField.props).toHaveProperty('value', '');
		expect(confirmPasswordInputField.props).toHaveProperty('value', '');
	});

	it("should render 'Change Password' button", () => {
		render(<ChangePasswordTemplate {...props} />);

		const btn = screen.getByTestId('change-password-template-button-test-id');

		expect(btn).toHaveTextContent('Change Password');
	});

	it('should submit form when both inputs have the same value', () => {
		render(<ChangePasswordTemplate {...props} />);

		const enterPasswordInputField = screen.getByTestId(
			'input-field-change-password-template-password-input-test-id'
		);

		const confirmPasswordInputField = screen.getByTestId(
			'input-field-change-password-template-confirm-password-input-test-id'
		);

		fireEvent.changeText(enterPasswordInputField, 'password');
		fireEvent.changeText(confirmPasswordInputField, 'password');

		const btn = screen.getByTestId('change-password-template-button-test-id');

		fireEvent.press(btn);

		expect(onChangePassword).toHaveBeenCalledTimes(1);
		expect(onChangePassword).toHaveBeenCalledWith('password');
	});

	it('should not submit form when inputs have different value', () => {
		render(<ChangePasswordTemplate {...props} />);

		const enterPasswordInputField = screen.getByTestId(
			'input-field-change-password-template-password-input-test-id'
		);

		const confirmPasswordInputField = screen.getByTestId(
			'input-field-change-password-template-confirm-password-input-test-id'
		);

		fireEvent.changeText(enterPasswordInputField, 'password');
		fireEvent.changeText(confirmPasswordInputField, 'drowssap');

		const btn = screen.getByTestId('change-password-template-button-test-id');

		fireEvent.press(btn);

		expect(onChangePassword).not.toHaveBeenCalled();
	});

	it('should not submit form when one or more inputs are empty', () => {
		render(<ChangePasswordTemplate {...props} />);

		const enterPasswordInputField = screen.getByTestId(
			'input-field-change-password-template-password-input-test-id'
		);

		const confirmPasswordInputField = screen.getByTestId(
			'input-field-change-password-template-confirm-password-input-test-id'
		);

		expect(enterPasswordInputField.props).toHaveProperty('value', '');
		expect(confirmPasswordInputField.props).toHaveProperty('value', '');

		const btn = screen.getByTestId('change-password-template-button-test-id');

		fireEvent.press(btn);

		expect(onChangePassword).not.toHaveBeenCalled();
	});
});
