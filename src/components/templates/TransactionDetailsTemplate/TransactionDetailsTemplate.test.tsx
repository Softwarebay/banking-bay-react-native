import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { TransactionDetailsTemplate } from './TransactionDetailsTemplate';

import type { Props } from './TransactionDetailsTemplate';

describe('TransactionDetailsTemplate', () => {
	const onPressPrimaryButton = jest.fn<Props['onPressPrimaryButton'], []>();

	const outgoingTransaction: Props['transactionDetails'] = {
		amount: '10.00',
		balance: '1000.00',
		card: '***4521',
		category: 'Mobile Payment',
		categoryIcon: 'smartphone',
		currency: 'USD',
		date: 'Sep 10, 2022',
		fee: '0.00',
		iconBg: '#FF8A71',
		iconColor: '#FFF',
		sentTo: 'Sherlock Holmes',
		isIncoming: false,
	};

	const incomingTransaction: Props['transactionDetails'] = {
		amount: '10.00',
		balance: '1000.00',
		card: '***4521',
		category: 'Mobile Payment',
		categoryIcon: 'smartphone',
		currency: 'USD',
		date: 'Sep 10, 2022',
		fee: '0.00',
		iconBg: '#FF8A71',
		iconColor: '#FFF',
		sentTo: 'Sherlock Holmes',
		isIncoming: true,
	};

	const props: Omit<Props, 'transactionDetails'> = {
		buttonTitle: 'Button',
		onPressPrimaryButton,
	};

	it('should match snapshot - incoming transaction', () => {
		const tree = testRenderer
			.create(
				<TransactionDetailsTemplate
					{...props}
					transactionDetails={incomingTransaction}
				/>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - outgoing transaction', () => {
		const tree = testRenderer
			.create(
				<TransactionDetailsTemplate
					{...props}
					transactionDetails={outgoingTransaction}
				/>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should display transaction category and category icon', () => {
		render(
			<TransactionDetailsTemplate
				{...props}
				transactionDetails={incomingTransaction}
			/>
		);

		const icon = screen.getByTestId('smartphone-icon-test-id');
		const categoryText = screen.getByTestId(
			'transaction-details-header-category-test-id'
		);

		expect(icon).not.toBeNull();
		expect(categoryText).toHaveTextContent('Mobile Payment');
	});

	it('should display transaction date', () => {
		render(
			<TransactionDetailsTemplate
				{...props}
				transactionDetails={incomingTransaction}
			/>
		);

		const date = screen.getByTestId('transaction-details-header-date-test-id');

		expect(date).toHaveTextContent('Sep 10, 2022');
	});

	it("should display incoming money transfer with '+' sign", () => {
		render(
			<TransactionDetailsTemplate
				{...props}
				transactionDetails={incomingTransaction}
			/>
		);

		const transferredValue = screen.getByTestId(
			'transaction-details-header-amount-test-id'
		);

		expect(transferredValue).toHaveTextContent(/10.00/);
		expect(transferredValue).toHaveTextContent(/\+/);
	});

	it("should display outgoing money transfer with '-' sign", () => {
		render(
			<TransactionDetailsTemplate
				{...props}
				transactionDetails={outgoingTransaction}
			/>
		);

		const transferredValue = screen.getByTestId(
			'transaction-details-header-amount-test-id'
		);

		expect(transferredValue).toHaveTextContent(/10.00/);
		expect(transferredValue).toHaveTextContent(/-/);
	});

	it("should display receiver's/sender's name in page header", () => {
		render(
			<TransactionDetailsTemplate
				{...props}
				transactionDetails={outgoingTransaction}
			/>
		);

		const receiverName = screen.getByTestId(
			'transaction-details-header-sent-to-test-id'
		);

		expect(receiverName).toHaveTextContent('sent to Sherlock Holmes');
	});

	it('should display success message and icon', () => {
		render(
			<TransactionDetailsTemplate
				{...props}
				transactionDetails={outgoingTransaction}
			/>
		);

		const successIcon = screen.getByTestId('check-icon-test-id');
		const successText = screen.getByTestId(
			'transaction-details-header-status-text-test-id'
		);

		expect(successIcon).not.toBeNull();
		expect(successText).toHaveTextContent('Success');
	});

	it('should render a divider', () => {
		render(
			<TransactionDetailsTemplate
				{...props}
				transactionDetails={outgoingTransaction}
			/>
		);

		const divider = screen.getByTestId('transaction-details-divider-test-id');

		expect(divider).not.toBeNull();
	});

	it('should display transaction details in 5 rows', () => {
		render(
			<TransactionDetailsTemplate
				{...props}
				transactionDetails={outgoingTransaction}
			/>
		);

		const rows = screen.getAllByTestId(/transaction-details-row/);

		expect(rows).toHaveLength(5);
	});

	it("should display 'Sent to' row with receiver's name", () => {
		render(
			<TransactionDetailsTemplate
				{...props}
				transactionDetails={outgoingTransaction}
			/>
		);

		const [subtitle, value] = screen.getByTestId(
			'transaction-details-row-sent-to-test-id'
		).children;

		expect(subtitle).toHaveTextContent('Sent to');
		expect(value).toHaveTextContent('Sherlock Holmes');
	});

	it("should display 'Card' row with card number", () => {
		render(
			<TransactionDetailsTemplate
				{...props}
				transactionDetails={outgoingTransaction}
			/>
		);

		const [subtitle, value] = screen.getByTestId(
			'transaction-details-row-card-test-id'
		).children;

		expect(subtitle).toHaveTextContent('Card');
		expect(value).toHaveTextContent('***4521');
	});

	it("should display 'Amount' row with amount of transferred money and it's currency", () => {
		render(
			<TransactionDetailsTemplate
				{...props}
				transactionDetails={outgoingTransaction}
			/>
		);

		const [subtitle, value] = screen.getByTestId(
			'transaction-details-row-amount-test-id'
		).children;

		expect(subtitle).toHaveTextContent('Amount');
		expect(value).toHaveTextContent('10.00 USD');
	});

	it("should display 'Fee' row with amount of applied fee and it's currency", () => {
		render(
			<TransactionDetailsTemplate
				{...props}
				transactionDetails={outgoingTransaction}
			/>
		);

		const [subtitle, value] = screen.getByTestId(
			'transaction-details-row-fee-test-id'
		).children;

		expect(subtitle).toHaveTextContent('Fee');
		expect(value).toHaveTextContent('0.00 USD');
	});

	it("should display 'Residual balance' row with value of current balance and it's currency", () => {
		render(
			<TransactionDetailsTemplate
				{...props}
				transactionDetails={outgoingTransaction}
			/>
		);

		const [subtitle, value] = screen.getByTestId(
			'transaction-details-row-balance-test-id'
		).children;

		expect(subtitle).toHaveTextContent('Residual balance');
		expect(value).toHaveTextContent('1000.00 USD');
	});

	it('should render primary action button', () => {
		render(
			<TransactionDetailsTemplate
				{...props}
				transactionDetails={incomingTransaction}
			/>
		);

		const btn = screen.getByTestId('transaction-details-btn-test-id');

		expect(btn).toHaveTextContent('Button');
	});

	it('should handle press events on the primary action button', () => {
		render(
			<TransactionDetailsTemplate
				{...props}
				transactionDetails={incomingTransaction}
			/>
		);

		const btn = screen.getByTestId('transaction-details-btn-test-id');

		fireEvent.press(btn);

		expect(onPressPrimaryButton).toHaveBeenCalledTimes(1);
	});
});
