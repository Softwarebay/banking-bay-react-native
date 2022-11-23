import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { SignInScreen } from './SignInScreen';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
	useNavigation: () => ({ navigate: mockNavigate }),
}));

describe('SignInScreen', () => {
	it('should match snapshot', () => {
		const tree = testRenderer.create(<SignInScreen />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it("should display 'Welcome to BankingBay!' as screen heading", () => {
		render(<SignInScreen />);

		const heading = screen.getByTestId('sign-in-heading-test-id');

		expect(heading).toHaveTextContent('Welcome to BankingBay!');
	});

	it("should display 'No account?' as form footer text", () => {
		render(<SignInScreen />);

		const footerText = screen.getByTestId('sign-in-footer-text-test-id');

		expect(footerText).toHaveTextContent('No account?');
	});

	it("should display 'Register now' as form footer link", () => {
		render(<SignInScreen />);

		const footerLink = screen.getByTestId('sign-in-footer-link-test-id');

		expect(footerLink).toHaveTextContent('Register now');
	});

	it("should log 'Restore password' after pressing on restore password link", () => {
		render(<SignInScreen />);
		console.log = jest.fn();

		const restorePassLink = screen.getByTestId(
			'sign-in-form-restore-password-link-test-id'
		);

		fireEvent.press(restorePassLink);

		expect(console.log).toHaveBeenCalledWith('Restore password');
	});

	it("should log 'To SignUp' after pressing on form footer link", () => {
		render(<SignInScreen />);
		console.log = jest.fn();

		const footerLink = screen.getByTestId('sign-in-footer-link-test-id');

		fireEvent.press(footerLink);

		expect(console.log).toHaveBeenCalledWith('To SignUp');
	});

	it('should log user credentials after successful sign in', () => {
		render(<SignInScreen />);
		console.log = jest.fn();

		const submitBtn = screen.getByTestId('sign-in-form-submit-button-test-id');

		fireEvent.press(submitBtn);

		expect(console.log).toHaveBeenCalledWith({
			email: 'test@test.com',
			password: 'password',
			persistPassword: false,
		});
	});

	it('should navigate to DashboardScreen after successful sign in', () => {
		render(<SignInScreen />);

		const submitBtn = screen.getByTestId('sign-in-form-submit-button-test-id');

		fireEvent.press(submitBtn);

		expect(mockNavigate).toHaveBeenCalledWith('Root');
	});

	it("should log 'Sign in via Facebook' after pressing on Facebook icon button", () => {
		render(<SignInScreen />);
		console.log = jest.fn();

		const facebookIconBtn = screen.getByTestId(/facebook-icon-btn-test-id/i);

		fireEvent.press(facebookIconBtn);

		expect(console.log).toHaveBeenCalledWith('Sign in via Facebook');
	});

	it("should log 'Sign in via Google+' after pressing on Google+ icon button", () => {
		render(<SignInScreen />);
		console.log = jest.fn();

		const googlePlusIconBtn = screen.getByTestId(
			/googlePlus-icon-btn-test-id/i
		);

		fireEvent.press(googlePlusIconBtn);

		expect(console.log).toHaveBeenCalledWith('Sign in via Google+');
	});

	it("should log 'Sign in via Twitter' after pressing on Twitter icon button", () => {
		render(<SignInScreen />);
		console.log = jest.fn();

		const twitterIconBtn = screen.getByTestId(/twitter-icon-btn-test-id/i);

		fireEvent.press(twitterIconBtn);

		expect(console.log).toHaveBeenCalledWith('Sign in via Twitter');
	});
});
