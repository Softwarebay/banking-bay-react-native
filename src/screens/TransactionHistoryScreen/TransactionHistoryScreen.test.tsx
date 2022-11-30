import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { TransactionHistoryScreen } from './TransactionHistoryScreen';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
	useNavigation: () => ({ navigate: mockNavigate }),
	useFocusEffect: jest.fn(),
}));

describe('TransactionHistoryScreen', () => {
	it('should match snapshot', () => {
		const tree = testRenderer.create(<TransactionHistoryScreen />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should display 8 transactions in transaction history', () => {
		render(<TransactionHistoryScreen testOnly_initialNumToRender={15} />);

		const transactionItems = screen.getAllByTestId(
			/-transaction-history-item-test-id/
		);

		expect(transactionItems).toHaveLength(8);
	});

	it('should display 3 section titles', () => {
		render(<TransactionHistoryScreen />);

		const sectionTitles = screen.getAllByTestId(
			'transaction-history-title-test-id'
		);

		expect(sectionTitles).toHaveLength(3);

		const [firstTitle, secondTitle, thirdTitle] = sectionTitles;

		expect(firstTitle).toHaveTextContent('Today');
		expect(secondTitle).toHaveTextContent('Sep 10, 2022');
		expect(thirdTitle).toHaveTextContent('Sep 5, 2022');
	});

	it('should navigate to TransactionDetailsScreen after pressing on TransactionCard', () => {
		render(<TransactionHistoryScreen />);

		const transactionItems = screen.getAllByTestId(
			/-transaction-history-item-test-id/
		);

		transactionItems.forEach((item) => {
			fireEvent.press(item);
			expect(mockNavigate).toHaveBeenCalledWith('TransactionDetails');
		});
	});

	it('should filter history based on search query', () => {
		render(<TransactionHistoryScreen />);

		const searchbarField = screen.getByTestId(
			'input-field-transaction-history-searchbar-test-id'
		);
		const searchBtn = screen.getByTestId(
			'icon-btn-transaction-history-searchbar-test-id'
		);

		fireEvent.changeText(searchbarField, 'Paypal');
		fireEvent.press(searchBtn);

		const transactionItems = screen.getAllByTestId(
			/-transaction-history-item-test-id/
		);

		expect(transactionItems).toHaveLength(1);

		const [filteredItem] = transactionItems;

		expect(filteredItem).toHaveTextContent('Paypal');
	});

	it('should display full transaction history after filtering based on empty search query', () => {
		render(<TransactionHistoryScreen testOnly_initialNumToRender={15} />);

		const searchbarField = screen.getByTestId(
			'input-field-transaction-history-searchbar-test-id'
		);
		const searchBtn = screen.getByTestId(
			'icon-btn-transaction-history-searchbar-test-id'
		);

		fireEvent.changeText(searchbarField, 'Paypal');
		fireEvent.press(searchBtn);

		const filteredItems = screen.getAllByTestId(
			/-transaction-history-item-test-id/
		);

		expect(filteredItems).toHaveLength(1);

		fireEvent.changeText(searchbarField, '');
		fireEvent.press(searchBtn);

		const allItems = screen.getAllByTestId(/-transaction-history-item-test-id/);

		expect(allItems).toHaveLength(8);
	});
});
