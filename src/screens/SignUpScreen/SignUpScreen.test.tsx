import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { SignUpScreen } from './SignUpScreen';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
	useNavigation: () => ({ navigate: mockNavigate }),
}));

describe('SignUpScreen', () => {
	it('should match snapshot', () => {
		const tree = testRenderer.create(<SignUpScreen />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it("should display 'Sign up!' as screen heading", () => {
		render(<SignUpScreen />);

		const heading = screen.getByTestId('sign-up-heading-test-id');

		expect(heading).toHaveTextContent('Sign up!');
	});

	it("should display 'Already have an account?' as form footer text", () => {
		render(<SignUpScreen />);

		const footerText = screen.getByTestId('sign-up-footer-text-test-id');

		expect(footerText).toHaveTextContent('Already have an account?');
	});

	it("should display 'Sign in' as form footer link", () => {
		render(<SignUpScreen />);

		const footerLink = screen.getByTestId('sign-up-footer-link-test-id');

		expect(footerLink).toHaveTextContent('Sign in');
	});

	it('should navigate to SignInScreen after pressing on form footer link', () => {
		render(<SignUpScreen />);
		console.log = jest.fn();

		const footerLink = screen.getByTestId('sign-up-footer-link-test-id');

		fireEvent.press(footerLink);

		expect(mockNavigate).toHaveBeenCalledWith('SignIn');
	});

	it('should log user credentials after successful sign up', () => {
		render(<SignUpScreen />);
		console.log = jest.fn();

		const submitBtn = screen.getByTestId('sign-up-form-submit-button-test-id');

		fireEvent.press(submitBtn);

		expect(console.log).toHaveBeenCalledWith({
			name: 'John Smith',
			email: 'test@test.com',
			password: 'password',
		});
	});

	it('should navigate to SuccessRegistrationScreen after successful sign up', () => {
		render(<SignUpScreen />);

		const submitBtn = screen.getByTestId('sign-up-form-submit-button-test-id');

		fireEvent.press(submitBtn);

		expect(mockNavigate).toHaveBeenCalledWith('SuccessRegistration');
	});

	it("should log 'Sign up via Facebook' after pressing on Facebook icon button", () => {
		render(<SignUpScreen />);
		console.log = jest.fn();

		const facebookIconBtn = screen.getByTestId(/facebook-icon-btn-test-id/i);

		fireEvent.press(facebookIconBtn);

		expect(console.log).toHaveBeenCalledWith('Sign up via Facebook');
	});

	it("should log 'Sign up via Google+' after pressing on Google+ icon button", () => {
		render(<SignUpScreen />);
		console.log = jest.fn();

		const googlePlusIconBtn = screen.getByTestId(
			/googlePlus-icon-btn-test-id/i
		);

		fireEvent.press(googlePlusIconBtn);

		expect(console.log).toHaveBeenCalledWith('Sign up via Google+');
	});

	it("should log 'Sign up via Twitter' after pressing on Twitter icon button", () => {
		render(<SignUpScreen />);
		console.log = jest.fn();

		const twitterIconBtn = screen.getByTestId(/twitter-icon-btn-test-id/i);

		fireEvent.press(twitterIconBtn);

		expect(console.log).toHaveBeenCalledWith('Sign up via Twitter');
	});
});
