import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { MobilePaymentTemplate } from './MobilePaymentTemplate';

import type { Props } from './MobilePaymentTemplate';

describe('MobilePaymentTemplate', () => {
	const onSuccessMobilePayment = jest.fn<
		Props['onSuccessMobilePayment'],
		[string, number]
	>();

	const props: Props = {
		inputPlaceholder: '123456',
		onSuccessMobilePayment,
	};

	it('should match snapshot', () => {
		const tree = testRenderer
			.create(<MobilePaymentTemplate {...props} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render mobile number input with placeholder', () => {
		render(<MobilePaymentTemplate {...props} />);

		const mobileInputField = screen.getByTestId(
			'input-field-mobile-payment-input-test-id'
		);

		expect(mobileInputField).not.toBeNull();
		expect(mobileInputField.props).toHaveProperty('placeholder', '123456');
	});

	it('should display current account balance information', () => {
		render(<MobilePaymentTemplate {...props} />);

		const balance = screen.getByTestId('mobile-payment-balance-text-test-id');

		expect(balance).toHaveTextContent('Your balance: 4863.27 USD');
	});

	it("should render '$ 10.00' as default transfer value", () => {
		render(<MobilePaymentTemplate {...props} />);

		const transferValue = screen.getByTestId(
			'mobile-payment-float-num-test-id'
		);

		expect(transferValue).toHaveTextContent('$10.00');
	});

	it("should display 'No fees' as information about applied fees", () => {
		render(<MobilePaymentTemplate {...props} />);

		const feesInfo = screen.getByTestId('mobile-payment-fees-text-test-id');

		expect(feesInfo).toHaveTextContent('No fees');
	});

	it('should render confirm payment button', () => {
		render(<MobilePaymentTemplate {...props} />);

		const confirmBtn = screen.getByTestId('confirm-mobile-payment-btn-test-id');

		expect(confirmBtn).not.toBeNull();
		expect(confirmBtn).toHaveTextContent('Confirm');
	});

	it('should confirm payment when mobile number input is filled', () => {
		render(<MobilePaymentTemplate {...props} />);

		const mobileInputField = screen.getByTestId(
			'input-field-mobile-payment-input-test-id'
		);
		const confirmBtn = screen.getByTestId('confirm-mobile-payment-btn-test-id');

		fireEvent.changeText(mobileInputField, '123456');
		fireEvent.press(confirmBtn);

		expect(onSuccessMobilePayment).toHaveBeenCalledWith('123456', 10.0);
	});

	it("shouldn't confirm payment when mobile number input is empty", () => {
		render(<MobilePaymentTemplate {...props} />);

		const confirmBtn = screen.getByTestId('confirm-mobile-payment-btn-test-id');
		fireEvent.press(confirmBtn);

		expect(onSuccessMobilePayment).not.toHaveBeenCalled();
	});
});
