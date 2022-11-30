import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import {
	TransactionHistoryItem,
	TransactionHistoryTemplate,
} from './TransactionHistoryTemplate';

import type { Props } from './TransactionHistoryTemplate';

describe('TransactionHistoryTemplate', () => {
	const onSearch = jest.fn<Props['onSearch'], []>();
	const onPressTransactionCard = jest.fn<Props['onPressTransactionCard'], []>();

	const transactionHistory: TransactionHistoryItem[] = [
		{
			date: 'Today',
			data: [
				{
					id: '1',
					title: 'Adalyn Roth',
					iconName: 'money-transfer',
					transactionType: 'outgoing',
					transactionCategory: 'Money Transfer',
					amount: 140.0,
					iconColor: '#55ACEE',
				},
				{
					id: '2',
					title: 'Amazon',
					iconName: 'amazon',
					transactionType: 'outgoing',
					transactionCategory: 'Online payments',
					amount: 239.57,
					iconColor: '#55ACEE',
				},
			],
		},
		{
			date: 'Yesterday',
			data: [
				{
					id: '3',
					title: 'Paypal',
					iconName: 'paypal',
					transactionType: 'incoming',
					transactionCategory: 'Deposits',
					amount: 700.0,
					iconColor: '#55ACEE',
				},
				{
					id: '4',
					title: 'ATM',
					iconName: 'atm',
					transactionType: 'outgoing',
					transactionCategory: 'Cash withdrawal',
					amount: 1200.0,
					iconColor: '#FF8A71',
				},
				{
					id: '5',
					title: 'eBay',
					iconName: 'ebay',
					transactionType: 'outgoing',
					transactionCategory: 'Online payments',
					amount: 287.84,
					iconColor: '#FF8A71',
				},
			],
		},
	];

	const props: Props = {
		onSearch,
		onPressTransactionCard,
		transactionHistory,
	};

	it('should match snapshot', () => {
		const tree = testRenderer
			.create(<TransactionHistoryTemplate {...props} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render searchbar', () => {
		render(<TransactionHistoryTemplate {...props} />);

		const searchbar = screen.getByTestId(
			'transaction-history-searchbar-test-id'
		);

		expect(searchbar).not.toBeNull();
	});

	it("should run 'onSearch' function after press on search icon button", () => {
		render(<TransactionHistoryTemplate {...props} />);

		const iconBtn = screen.getByTestId(
			'icon-btn-transaction-history-searchbar-test-id'
		);

		fireEvent.press(iconBtn);

		expect(onSearch).toHaveBeenCalledTimes(1);
	});

	it('should render transaction history as list of transaction cards', () => {
		render(<TransactionHistoryTemplate {...props} />);

		const transactionItems = screen.getAllByTestId(
			/-transaction-history-item-test-id/
		);

		expect(transactionItems).toHaveLength(5);
	});

	it('should display titles for history sections', () => {
		render(<TransactionHistoryTemplate {...props} />);

		const sectionTitles = screen.getAllByTestId(
			'transaction-history-title-test-id'
		);

		expect(sectionTitles).toHaveLength(2);

		const [firstTitle, secondTitle] = sectionTitles;

		expect(firstTitle).toHaveTextContent('Today');
		expect(secondTitle).toHaveTextContent('Yesterday');
	});

	it('should handle press events on transaction card', () => {
		render(<TransactionHistoryTemplate {...props} />);

		const transactionItems = screen.getAllByTestId(
			/-transaction-history-item-test-id/
		);

		transactionItems.forEach((item) => {
			fireEvent.press(item);
		});

		expect(onPressTransactionCard).toHaveBeenCalledTimes(5);
	});
});
