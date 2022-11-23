import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { DashboardScreen } from './DashboardScreen';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
	useNavigation: () => ({ navigate: mockNavigate }),
	useFocusEffect: jest.fn(),
}));

describe('DashboardScreen', () => {
	it('should match snapshot', () => {
		const tree = testRenderer.create(<DashboardScreen />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it("should display '€ 1.08 / 1.12' in dashboard nav text", () => {
		render(<DashboardScreen />);

		const navText = screen.getByTestId('dashboard-nav-text-test-id');

		expect(navText).toHaveTextContent('€ 1.08 / 1.12');
	});

	it('should display 6 items in latest transactions', () => {
		render(<DashboardScreen />);

		const transactionItems = screen.getAllByTestId(
			/-latest-transaction-item-test-id/
		);

		expect(transactionItems).toHaveLength(6);
	});

	it("should log 'onPressCreditCardsIconButton' after pressing on credit cards top nav icon button", () => {
		render(<DashboardScreen />);
		console.log = jest.fn();

		const cardsBtn = screen.getByTestId('dashboard-cards-btn-test-id');

		fireEvent.press(cardsBtn);

		expect(console.log).toHaveBeenCalledWith('onPressCreditCardsIconButton');
	});

	it("should log 'onPressProfileIconButton' after pressing on profile top nav icon button", () => {
		render(<DashboardScreen />);
		console.log = jest.fn();

		const profileBtn = screen.getByTestId('dashboard-profile-icon-btn-test-id');

		fireEvent.press(profileBtn);

		expect(console.log).toHaveBeenCalledWith('onPressProfileIconButton');
	});

	it("should log 'onPressMakePayment' after pressing on 'Make a Payment' icon button in payment options section", () => {
		render(<DashboardScreen />);
		console.log = jest.fn();

		const makePaymentIconBtn = screen.getByTestId(
			'make-payment-icon-btn-test-id'
		);

		fireEvent.press(makePaymentIconBtn);

		expect(console.log).toHaveBeenCalledWith('onPressMakePayment');
	});

	it("should log 'onPressMobilePayment' after pressing on 'Mobile Payment' icon button in payment options section", () => {
		render(<DashboardScreen />);
		console.log = jest.fn();

		const mobilePaymentIconBtn = screen.getByTestId(
			'mobile-payment-icon-btn-test-id'
		);

		fireEvent.press(mobilePaymentIconBtn);

		expect(mockNavigate).toHaveBeenCalledWith('MobilePayment');
	});

	it("should log 'onPressMoneyTransfer' after pressing on 'Money Transfer' icon button in payment options section", () => {
		render(<DashboardScreen />);
		console.log = jest.fn();

		const moneyTransferIconBtn = screen.getByTestId(
			'money-transfer-icon-btn-test-id'
		);

		fireEvent.press(moneyTransferIconBtn);

		expect(console.log).toHaveBeenCalledWith('onPressMoneyTransfer');
	});

	it("should log 'onPressTopUpPayment' after pressing on 'Top-Up Payment' icon button in payment options section", () => {
		render(<DashboardScreen />);
		console.log = jest.fn();

		const topUpPaymentIconBtn = screen.getByTestId(
			'top-up-payment-icon-btn-test-id'
		);

		fireEvent.press(topUpPaymentIconBtn);

		expect(console.log).toHaveBeenCalledWith('onPressTopUpPayment');
	});

	it("should log 'onPressViewAll' after pressing on 'View All' link in latest transactions section", () => {
		render(<DashboardScreen />);
		console.log = jest.fn();

		const link = screen.getByTestId('latest-transaction-link-test-id');

		fireEvent.press(link);

		expect(console.log).toHaveBeenCalledWith('onPressViewAll');
	});

	it('should navigate to transaction details screen after pressing on transaction card in latest transactions section', () => {
		render(<DashboardScreen />);

		const transactionItems = screen.getAllByTestId(
			/-latest-transaction-item-test-id/
		);

		transactionItems.forEach((item) => {
			fireEvent.press(item);

			expect(mockNavigate).toHaveBeenCalledWith('TransactionDetails');
		});
	});
});
