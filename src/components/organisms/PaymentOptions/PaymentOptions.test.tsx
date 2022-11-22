import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { PaymentOptions } from './PaymentOptions';

import type { Props } from './PaymentOptions';

describe('PaymentOptions', () => {
	const mockOnPressMakePayment = jest.fn<Props['onPressMakePayment'], []>();
	const mockOnPressMobilePayment = jest.fn<Props['onPressMobilePayment'], []>();
	const mockOnPressMoneyTransfer = jest.fn<Props['onPressMoneyTransfer'], []>();
	const mockOnPressTopUpPayment = jest.fn<Props['onPressTopUpPayment'], []>();

	const props: Props = {
		onPressMakePayment: mockOnPressMakePayment,
		onPressMobilePayment: mockOnPressMobilePayment,
		onPressMoneyTransfer: mockOnPressMoneyTransfer,
		onPressTopUpPayment: mockOnPressTopUpPayment,
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<PaymentOptions {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render 4 icon buttons with bottom text', () => {
		render(<PaymentOptions {...props} />);

		const iconButtons = screen.getAllByTestId(
			/(top-up-payment|mobile-payment|money-transfer|make-payment)-icon-btn-test-id/gi
		);

		expect(iconButtons).toHaveLength(4);

		const makePaymentIcon = screen.getByTestId('dollar-sign-icon-test-id');
		const moneyTransferIcon = screen.getByTestId('repeat-icon-test-id');
		const topUpPaymentIcon = screen.getByTestId('credit-card-icon-test-id');
		const mobilePaymentIcon = screen.getByTestId('smartphone-icon-test-id');

		expect(makePaymentIcon).not.toBeNull();
		expect(moneyTransferIcon).not.toBeNull();
		expect(topUpPaymentIcon).not.toBeNull();
		expect(mobilePaymentIcon).not.toBeNull();

		const bottomTextElements = screen.getAllByTestId(
			/(top-up-payment|mobile-payment|money-transfer|make-payment)-title-test-id/gi
		);

		const bottomTexts = bottomTextElements.map((el) => el.children[0]);

		expect(bottomTexts).toContain('Make a Payment');
		expect(bottomTexts).toContain('Money Transfer');
		expect(bottomTexts).toContain('Top-Up Payment');
		expect(bottomTexts).toContain('Mobile Payment');
	});

	it("should handle press events on 'Make a Payment' icon button", () => {
		render(<PaymentOptions {...props} />);

		const makePaymentIconBtn = screen.getByTestId(
			'make-payment-icon-btn-test-id'
		);

		fireEvent.press(makePaymentIconBtn);

		expect(mockOnPressMakePayment).toHaveBeenCalledTimes(1);
		expect(mockOnPressMobilePayment).not.toHaveBeenCalled();
		expect(mockOnPressMoneyTransfer).not.toHaveBeenCalled();
		expect(mockOnPressTopUpPayment).not.toHaveBeenCalled();
	});

	it("should handle press events on 'Mobile Payment' icon button", () => {
		render(<PaymentOptions {...props} />);

		const mobilePaymentIconBtn = screen.getByTestId(
			'mobile-payment-icon-btn-test-id'
		);

		fireEvent.press(mobilePaymentIconBtn);

		expect(mockOnPressMobilePayment).toHaveBeenCalledTimes(1);
		expect(mockOnPressMakePayment).not.toHaveBeenCalled();
		expect(mockOnPressMoneyTransfer).not.toHaveBeenCalled();
		expect(mockOnPressTopUpPayment).not.toHaveBeenCalled();
	});

	it("should handle press events on 'Money Transfer' icon button", () => {
		render(<PaymentOptions {...props} />);

		const moneyTransferIconBtn = screen.getByTestId(
			'money-transfer-icon-btn-test-id'
		);

		fireEvent.press(moneyTransferIconBtn);

		expect(mockOnPressMoneyTransfer).toHaveBeenCalledTimes(1);
		expect(mockOnPressMakePayment).not.toHaveBeenCalled();
		expect(mockOnPressMobilePayment).not.toHaveBeenCalled();
		expect(mockOnPressTopUpPayment).not.toHaveBeenCalled();
	});

	it("should handle press events on 'Top-Up Payment' icon button", () => {
		render(<PaymentOptions {...props} />);

		const topUpPaymentIconBtn = screen.getByTestId(
			'top-up-payment-icon-btn-test-id'
		);

		fireEvent.press(topUpPaymentIconBtn);

		expect(mockOnPressTopUpPayment).toHaveBeenCalledTimes(1);
		expect(mockOnPressMakePayment).not.toHaveBeenCalled();
		expect(mockOnPressMobilePayment).not.toHaveBeenCalled();
		expect(mockOnPressMoneyTransfer).not.toHaveBeenCalled();
	});
});
