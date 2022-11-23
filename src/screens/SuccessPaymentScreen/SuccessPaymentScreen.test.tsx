import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { SuccessPaymentScreen } from './SuccessPaymentScreen';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
	useNavigation: () => ({ navigate: mockNavigate }),
}));

describe('SuccessPaymentScreen', () => {
	it('should match snapshot', () => {
		const tree = testRenderer.create(<SuccessPaymentScreen />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it("should display '$ 10.00' as amount of transferred money", () => {
		render(<SuccessPaymentScreen />);

		const transferValue = screen.getByTestId(
			'payment-success-float-num-test-id'
		);

		expect(transferValue).toHaveTextContent('$ 10.00');
	});

	it("should display 'Done' primary button", () => {
		render(<SuccessPaymentScreen />);

		const primaryBtn = screen.getByTestId(
			'payment-success-primary-btn-test-id'
		);

		expect(primaryBtn).toHaveTextContent('Done');
	});

	it('should navigate to DashboardScreen after pressing on primary button', () => {
		render(<SuccessPaymentScreen />);

		const primaryBtn = screen.getByTestId(
			'payment-success-primary-btn-test-id'
		);

		fireEvent.press(primaryBtn);

		expect(mockNavigate).toHaveBeenCalledWith('Root');
	});
	it("should display 'Send Receipt' secondary button", () => {
		render(<SuccessPaymentScreen />);

		const secondaryBtn = screen.getByTestId(
			'payment-success-secondary-btn-test-id'
		);

		expect(secondaryBtn).toHaveTextContent('Send Receipt');
	});

	it("should log 'onPressSendReceipt' after pressing on secondary button", () => {
		render(<SuccessPaymentScreen />);
		console.log = jest.fn();

		const secondaryBtn = screen.getByTestId(
			'payment-success-secondary-btn-test-id'
		);

		fireEvent.press(secondaryBtn);

		expect(console.log).toHaveBeenCalledWith('onPressSendReceipt');
	});
});
