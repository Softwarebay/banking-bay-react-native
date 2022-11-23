import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { MobilePaymentScreen } from './MobilePaymentScreen';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
	useNavigation: () => ({ navigate: mockNavigate }),
}));

describe('MobilePaymentScreen', () => {
	it('should match snapshot', () => {
		const tree = testRenderer.create(<MobilePaymentScreen />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it("should display '+17 | xxxxxxxxxx' as mobile number input placeholder", () => {
		render(<MobilePaymentScreen />);

		const mobileInputField = screen.getByTestId(
			'input-field-mobile-payment-input-test-id'
		);

		expect(mobileInputField.props).toHaveProperty(
			'placeholder',
			'+17 | xxxxxxxxxx'
		);
	});

	it("should log 'onSuccessMobilePayment', mobile number and amount after successful payment", () => {
		render(<MobilePaymentScreen />);
		console.log = jest.fn();

		const mobileInputField = screen.getByTestId(
			'input-field-mobile-payment-input-test-id'
		);
		const confirmBtn = screen.getByTestId('confirm-mobile-payment-btn-test-id');

		fireEvent.changeText(mobileInputField, '123456');
		fireEvent.press(confirmBtn);

		expect(console.log).toHaveBeenCalledWith(
			'onSuccessMobilePayment',
			'123456',
			10.0
		);
	});

	it('should navigate to SuccessPaymentScreen after successful payment', () => {
		render(<MobilePaymentScreen />);

		const mobileInputField = screen.getByTestId(
			'input-field-mobile-payment-input-test-id'
		);
		const confirmBtn = screen.getByTestId('confirm-mobile-payment-btn-test-id');

		fireEvent.changeText(mobileInputField, '123456');
		fireEvent.press(confirmBtn);

		expect(mockNavigate).toHaveBeenCalledWith('SuccessPayment');
	});
});
