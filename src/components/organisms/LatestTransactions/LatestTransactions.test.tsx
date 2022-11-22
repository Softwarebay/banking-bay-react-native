import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { LatestTransactions } from './LatestTransactions';

import type { Props } from './LatestTransactions';

describe('LatestTransactions', () => {
	const mockOnPressTransactionCard = jest.fn<
		Props['onPressTransactionCard'],
		[]
	>();
	const mockOnPressViewAll = jest.fn<Props['onPressViewAll'], []>();

	const props: Props = {
		onPressTransactionCard: mockOnPressTransactionCard,
		onPressViewAll: mockOnPressViewAll,
		testID: 'latest-transactions-test-id',
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
		style: {
			backgroundColor: 'blue',
		},
	};

	it('should match snapshot', () => {
		const tree = testRenderer
			.create(<LatestTransactions {...props} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it("should render section title and 'View all' button", () => {
		render(<LatestTransactions {...props} />);

		const title = screen.getByTestId('latest-transactions-title-test-id');
		const btn = screen.getByTestId('latest-transaction-link-test-id');

		expect(title).toHaveTextContent('Latest transactions');
		expect(btn).toHaveTextContent('View All');
	});

	it("should handle press events on 'View all' button", () => {
		render(<LatestTransactions {...props} />);

		const btn = screen.getByTestId('latest-transaction-link-test-id');

		fireEvent.press(btn);

		expect(mockOnPressViewAll).toHaveBeenCalledTimes(1);
	});

	it('should render latest transactions as a list of transaction cards', () => {
		render(<LatestTransactions {...props} />);

		const transactionItems = screen.getAllByTestId(
			/-latest-transaction-item-test-id/
		);

		expect(transactionItems).toHaveLength(2);
	});

	it('should handle press events on transaction card', () => {
		render(<LatestTransactions {...props} />);

		const transactionItems = screen.getAllByTestId(
			/-latest-transaction-item-test-id/
		);

		transactionItems.forEach((item) => {
			fireEvent.press(item);
		});

		expect(mockOnPressTransactionCard).toHaveBeenCalledTimes(2);
	});

	it('should apply additional styles', () => {
		render(<LatestTransactions {...props} />);

		const latestTransactions = screen.getByTestId(
			'latest-transactions-test-id'
		);

		expect(latestTransactions).toHaveStyle({
			backgroundColor: 'blue',
		});
	});
});
