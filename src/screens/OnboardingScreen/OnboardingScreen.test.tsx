import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { OnboardingScreen } from './OnboardingScreen';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
	useNavigation: () => ({ navigate: mockNavigate }),
}));

describe('OnboardingScreen', () => {
	it('should match snapshot', () => {
		const tree = testRenderer.create(<OnboardingScreen />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it("should navigate to SignInScreen after pressing on 'Get Started' button", () => {
		render(<OnboardingScreen />);

		const btn = screen.getByTestId('onboarding-btn-test-id');

		fireEvent.press(btn);

		expect(mockNavigate).toHaveBeenCalledWith('SignIn');
	});
});
