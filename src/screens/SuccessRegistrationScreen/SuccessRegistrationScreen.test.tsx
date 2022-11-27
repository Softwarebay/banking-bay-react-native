import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { SuccessRegistrationScreen } from './SuccessRegistrationScreen';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
	useNavigation: () => ({ navigate: mockNavigate }),
}));

describe('SuccessRegistrationScreen', () => {
	it('should match snapshot', () => {
		const tree = testRenderer.create(<SuccessRegistrationScreen />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it("should display 'Done' primary button", () => {
		render(<SuccessRegistrationScreen />);

		const primaryBtn = screen.getByTestId(
			'registration-success-primary-btn-test-id'
		);

		expect(primaryBtn).toHaveTextContent('Done');
	});

	it('should navigate to DashboardScreen after pressing on primary button', () => {
		render(<SuccessRegistrationScreen />);

		const primaryBtn = screen.getByTestId(
			'registration-success-primary-btn-test-id'
		);

		fireEvent.press(primaryBtn);

		expect(mockNavigate).toHaveBeenCalledWith('Root');
	});
});
