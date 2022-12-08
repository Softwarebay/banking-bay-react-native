import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { DepositCard } from './DepositCard';

import type { Props } from './DepositCard';

describe('DepositCard', () => {
	const onPressWithdrawalButton = jest.fn<
		Props['onPressWithdrawalButton'],
		[]
	>();
	const onPressExtendButton = jest.fn<Props['onPressExtendButton'], []>();
	const onPressTopUpButton = jest.fn<Props['onPressTopUpButton'], []>();

	const props: Omit<Props, 'isFinished'> = {
		onPressWithdrawalButton,
		onPressExtendButton,
		onPressTopUpButton,
		testID: 'deposit-card-test-id',
		amount: 100000,
		currency: 'USD',
		date: 'Sep 1 - Mar 1, 2022',
		lastIncome: 6057,
		rate: 0.03,
		style: {
			marginBottom: 10,
		},
	};

	it('should match snapshot - deposit ongoing', () => {
		const tree = testRenderer
			.create(<DepositCard {...props} isFinished={false} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - deposit finished', () => {
		const tree = testRenderer
			.create(<DepositCard {...props} isFinished />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should display current deposit value with currency', () => {
		render(<DepositCard {...props} isFinished />);

		const depositAmount = screen.getByTestId('deposit-amount-test-id');
		const currency = screen.getByTestId('deposit-currency-test-id');

		expect(depositAmount).toHaveTextContent('1000.00');
		expect(currency).toHaveTextContent('USD');
	});

	it('should display percentage of deposit rate', () => {
		render(<DepositCard {...props} isFinished />);

		const rate = screen.getByTestId('deposit-rate-test-id');

		expect(rate).toHaveTextContent('3%');
	});

	it('should display date', () => {
		render(<DepositCard {...props} isFinished />);

		const date = screen.getByTestId('deposit-date-test-id');

		expect(date).toHaveTextContent('Sep 1 - Mar 1, 2022');
	});

	it('should display value of last income', () => {
		render(<DepositCard {...props} isFinished />);

		const lastIncome = screen.getByTestId('deposit-last-income-test-id');

		expect(lastIncome).toHaveTextContent('+ 60.57');
	});

	it('should display two buttons', () => {
		render(<DepositCard {...props} isFinished />);

		const buttons = screen.getAllByTestId(/-btn-test-id/);

		expect(buttons).toHaveLength(2);
	});

	it("should render 'Withdrawal' and 'Extend' buttons for finished deposits", () => {
		render(<DepositCard {...props} isFinished />);

		const withdrawalBtn = screen.getByTestId('deposit-withdrawal-btn-test-id');
		const extendBtn = screen.getByTestId('deposit-extend-btn-test-id');
		const topUpBtn = screen.queryByTestId('deposit-top-up-btn-test-id');

		expect(withdrawalBtn).toHaveTextContent('Withdrawal');
		expect(extendBtn).toHaveTextContent('Extend');
		expect(topUpBtn).toBeNull();
	});

	it('should handle press events on both buttons for finished deposits', () => {
		render(<DepositCard {...props} isFinished />);

		const withdrawalBtn = screen.getByTestId('deposit-withdrawal-btn-test-id');
		const extendBtn = screen.getByTestId('deposit-extend-btn-test-id');

		fireEvent.press(withdrawalBtn);
		expect(onPressWithdrawalButton).toHaveBeenCalledTimes(1);

		fireEvent.press(extendBtn);
		expect(onPressExtendButton).toHaveBeenCalledTimes(1);

		expect(onPressTopUpButton).not.toHaveBeenCalled();
	});

	it("should render 'Withdrawal' and 'Top - Up' buttons for ongoing deposits", () => {
		render(<DepositCard {...props} isFinished={false} />);

		const withdrawalBtn = screen.getByTestId('deposit-withdrawal-btn-test-id');
		const topUpBtn = screen.getByTestId('deposit-top-up-btn-test-id');
		const extendBtn = screen.queryByTestId('deposit-extend-btn-test-id');

		expect(withdrawalBtn).toHaveTextContent('Withdrawal');
		expect(topUpBtn).toHaveTextContent('Top - Up');
		expect(extendBtn).toBeNull();
	});

	it('should handle press events on both buttons for ongoing deposits', () => {
		render(<DepositCard {...props} isFinished={false} />);

		const withdrawalBtn = screen.getByTestId('deposit-withdrawal-btn-test-id');
		const topUpBtn = screen.getByTestId('deposit-top-up-btn-test-id');

		fireEvent.press(withdrawalBtn);
		expect(onPressWithdrawalButton).toHaveBeenCalledTimes(1);

		fireEvent.press(topUpBtn);
		expect(onPressTopUpButton).toHaveBeenCalledTimes(1);

		expect(onPressExtendButton).not.toHaveBeenCalled();
	});

	it('should render check icon for finished deposits', () => {
		render(<DepositCard {...props} isFinished />);

		const checkIcon = screen.getByTestId('check-icon-test-id');
		const depositsIcon = screen.queryByTestId('deposits-icon-test-id');

		expect(checkIcon).not.toBeNull();
		expect(depositsIcon).toBeNull();
	});

	it('should render deposits icon for ongoing deposits', () => {
		render(<DepositCard {...props} isFinished={false} />);

		const depositsIcon = screen.getByTestId('deposits-icon-test-id');
		const checkIcon = screen.queryByTestId('check-icon-test-id');

		expect(depositsIcon).not.toBeNull();
		expect(checkIcon).toBeNull();
	});

	it('should apply additional styles', () => {
		render(<DepositCard {...props} isFinished />);

		const card = screen.getByTestId('deposit-card-test-id');

		expect(card).toHaveStyle({ marginBottom: 10 });
	});
});
