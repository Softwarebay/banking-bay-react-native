import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { DashboardTemplate } from './DashboardTemplate';

import type { Props } from './DashboardTemplate';

describe('DashboardTemplate', () => {
	const onPressProfileIconButton = jest.fn<
		Props['onPressProfileIconButton'],
		[]
	>();
	const onPressCreditCardsIconButton = jest.fn<
		Props['onPressCreditCardsIconButton'],
		[]
	>();
	const onPressMakePayment = jest.fn<Props['onPressMakePayment'], []>();
	const onPressMobilePayment = jest.fn<Props['onPressMobilePayment'], []>();
	const onPressMoneyTransfer = jest.fn<Props['onPressMoneyTransfer'], []>();
	const onPressTopUpPayment = jest.fn<Props['onPressTopUpPayment'], []>();
	const onPressTransactionCard = jest.fn<Props['onPressTransactionCard'], []>();
	const onPressViewAll = jest.fn<Props['onPressViewAll'], []>();

	const props: Props = {
		latestTransactions: [
			{
				id: 'item1',
				amount: 2.0,
				iconName: 'amazon',
				title: 'Item1',
				transactionCategory: 'Mobile',
				transactionType: 'outgoing',
			},
			{
				id: 'item2',
				amount: 3.0,
				iconName: 'amazon',
				title: 'Item2',
				transactionCategory: 'Mobile',
				transactionType: 'outgoing',
			},
		],
		navText: 'Dashboard Nav',
		onPressProfileIconButton,
		onPressCreditCardsIconButton,
		onPressMakePayment,
		onPressMobilePayment,
		onPressMoneyTransfer,
		onPressTopUpPayment,
		onPressTransactionCard,
		onPressViewAll,
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<DashboardTemplate {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render dashboard header with nav text, profile icon button, credit cards icon button and 3 card images', () => {
		render(<DashboardTemplate {...props} />);

		const navText = screen.getByTestId('dashboard-nav-text-test-id');
		const profileIcon = screen.getByTestId('profile-icon-test-id');
		const cardsIcon = screen.getByTestId('credit-cards-icon-test-id');
		const cardImgs = screen.getAllByTestId(/(card1|card2)-img-test-id/);

		expect(navText).toHaveTextContent('Dashboard Nav');
		expect(profileIcon).not.toBeNull();
		expect(cardsIcon).not.toBeNull();
		expect(cardImgs).toHaveLength(3);
	});

	it('should handle press events on header icon buttons', () => {
		render(<DashboardTemplate {...props} />);

		const cardsBtn = screen.getByTestId('dashboard-cards-btn-test-id');
		const profileBtn = screen.getByTestId('dashboard-profile-icon-btn-test-id');

		fireEvent.press(cardsBtn);
		expect(onPressCreditCardsIconButton).toHaveBeenCalledTimes(1);

		fireEvent.press(profileBtn);
		expect(onPressProfileIconButton).toHaveBeenCalledTimes(1);
	});

	it('should render 4 payment option buttons', () => {
		render(<DashboardTemplate {...props} />);

		const paymentBtns = screen.getAllByTestId(
			/(top-up-payment|mobile-payment|money-transfer|make-payment)-icon-btn-test-id/gi
		);

		expect(paymentBtns).toHaveLength(4);
	});

	it("should handle press events on 'Make a Payment' icon button", () => {
		render(<DashboardTemplate {...props} />);

		const makePaymentIconBtn = screen.getByTestId(
			'make-payment-icon-btn-test-id'
		);

		fireEvent.press(makePaymentIconBtn);

		expect(onPressMakePayment).toHaveBeenCalledTimes(1);
		expect(onPressMobilePayment).not.toHaveBeenCalled();
		expect(onPressMoneyTransfer).not.toHaveBeenCalled();
		expect(onPressTopUpPayment).not.toHaveBeenCalled();
	});

	it("should handle press events on 'Mobile Payment' icon button", () => {
		render(<DashboardTemplate {...props} />);

		const mobilePaymentIconBtn = screen.getByTestId(
			'mobile-payment-icon-btn-test-id'
		);

		fireEvent.press(mobilePaymentIconBtn);

		expect(onPressMobilePayment).toHaveBeenCalledTimes(1);
		expect(onPressMakePayment).not.toHaveBeenCalled();
		expect(onPressMoneyTransfer).not.toHaveBeenCalled();
		expect(onPressTopUpPayment).not.toHaveBeenCalled();
	});

	it("should handle press events on 'Money Transfer' icon button", () => {
		render(<DashboardTemplate {...props} />);

		const moneyTransferIconBtn = screen.getByTestId(
			'money-transfer-icon-btn-test-id'
		);

		fireEvent.press(moneyTransferIconBtn);

		expect(onPressMoneyTransfer).toHaveBeenCalledTimes(1);
		expect(onPressMakePayment).not.toHaveBeenCalled();
		expect(onPressMobilePayment).not.toHaveBeenCalled();
		expect(onPressTopUpPayment).not.toHaveBeenCalled();
	});

	it("should handle press events on 'Top-Up Payment' icon button", () => {
		render(<DashboardTemplate {...props} />);

		const topUpPaymentIconBtn = screen.getByTestId(
			'top-up-payment-icon-btn-test-id'
		);

		fireEvent.press(topUpPaymentIconBtn);

		expect(onPressTopUpPayment).toHaveBeenCalledTimes(1);
		expect(onPressMakePayment).not.toHaveBeenCalled();
		expect(onPressMobilePayment).not.toHaveBeenCalled();
		expect(onPressMoneyTransfer).not.toHaveBeenCalled();
	});

	it('should render divider', () => {
		render(<DashboardTemplate {...props} />);

		const divider = screen.getByTestId('dashboard-template-divider-test-id');

		expect(divider).not.toBeNull();
	});

	it("should render 'Latest transaction' section with a title and 'View all' button", () => {
		render(<DashboardTemplate {...props} />);

		const title = screen.getByTestId('latest-transactions-title-test-id');
		const btn = screen.getByTestId('latest-transaction-link-test-id');

		expect(title).toHaveTextContent('Latest transactions');
		expect(btn).toHaveTextContent('View All');
	});

	it("should handle press events on 'View all' button", () => {
		render(<DashboardTemplate {...props} />);

		const btn = screen.getByTestId('latest-transaction-link-test-id');

		fireEvent.press(btn);

		expect(onPressViewAll).toHaveBeenCalledTimes(1);
	});

	it('should render latest transactions as a list of transaction cards', () => {
		render(<DashboardTemplate {...props} />);

		const transactionItems = screen.getAllByTestId(
			/-latest-transaction-item-test-id/
		);

		expect(transactionItems).toHaveLength(2);
	});
	it('should handle press events on transaction card', () => {
		render(<DashboardTemplate {...props} />);

		const transactionItems = screen.getAllByTestId(
			/-latest-transaction-item-test-id/
		);

		transactionItems.forEach((item) => {
			fireEvent.press(item);
		});

		expect(onPressTransactionCard).toHaveBeenCalledTimes(2);
	});
});
