import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { colors } from 'theme';
import { TransactionCard } from './TransactionCard';

import type { Props } from './TransactionCard';

describe('TransactionCard', () => {
	const mockOnPress = jest.fn<Props['onPress'], []>();
	const props: Omit<Props, 'type'> = {
		onPress: mockOnPress,
		testID: 'transaction-card-test-id',
		iconName: 'smartphone',
		iconColor: 'blue',
		amount: 10.0,
		category: 'Mobile Transfer',
		id: 'mobile',
		title: 'Transaction Title',
		style: {
			backgroundColor: 'blue',
		},
	};

	it('should match snapshot - incoming transfer', () => {
		const tree = testRenderer
			.create(<TransactionCard {...props} type="incoming" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - outgoing transfer', () => {
		const tree = testRenderer
			.create(<TransactionCard {...props} type="outgoing" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render icon, title, category subtitle, amount of money transferred', () => {
		render(<TransactionCard {...props} type="outgoing" />);

		const icon = screen.getByTestId('smartphone-icon-test-id');
		const title = screen.getByTestId('mobile-transaction-title-test-id');
		const subtitle = screen.getByTestId('mobile-transaction-subtitle-test-id');
		const amount = screen.getByTestId('mobile-transaction-amount-test-id');

		expect(icon).not.toBeNull();
		expect(title).toHaveTextContent('Transaction Title');
		expect(subtitle).toHaveTextContent('Mobile Transfer');
		expect(amount).toHaveTextContent(/10.00/);
	});

	it("should display incoming money transfer as green text with '+' sign", () => {
		render(<TransactionCard {...props} type="incoming" />);

		const amount = screen.getByTestId('mobile-transaction-amount-test-id');

		expect(amount).toHaveStyle({
			color: colors.green,
		});
		expect(amount).toHaveTextContent('+ 10.00');
	});

	it("should display outgoing money transfer as default color text with '-' sign", () => {
		render(<TransactionCard {...props} type="outgoing" />);

		const amount = screen.getByTestId('mobile-transaction-amount-test-id');

		expect(amount).toHaveStyle({
			color: colors.mainDark,
		});
		expect(amount).toHaveTextContent('- 10.00');
	});

	it('should apply additional styles', () => {
		render(<TransactionCard {...props} type="outgoing" />);

		const [card] = screen.getByTestId('transaction-card-test-id').children;

		expect(card).toHaveStyle({
			backgroundColor: 'blue',
		});
	});

	it('should handle press events', () => {
		render(<TransactionCard {...props} type="outgoing" />);

		const pressableCard = screen.getByTestId('transaction-card-test-id');

		fireEvent.press(pressableCard);

		expect(mockOnPress).toHaveBeenCalledTimes(1);
	});
});
