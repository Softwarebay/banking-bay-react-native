import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { MoneyboxCard } from './MoneyboxCard';

import type { Props } from './MoneyboxCard';

describe('MoneyboxCard', () => {
	const onPressExtendButton = jest.fn<Props['onPressExtendButton'], []>();
	const onPressTopUpButton = jest.fn<Props['onPressTopUpButton'], []>();
	const onPressWithdrawalButton = jest.fn<
		Props['onPressWithdrawalButton'],
		[]
	>();
	const props: Omit<Props, 'goal' | 'saved'> = {
		testID: 'moneybox-card-test-id',
		currency: 'USD',
		title: 'Test',
		style: {
			marginBottom: 10,
		},
		onPressExtendButton,
		onPressTopUpButton,
		onPressWithdrawalButton,
	};
	const goalReachedProps: Props = {
		...props,
		goal: 500000,
		saved: 500000,
	};
	const goalNotReachedProps: Props = {
		...props,
		goal: 500000,
		saved: 100000,
	};

	it('should match snapshot - goal reached', () => {
		const tree = testRenderer
			.create(<MoneyboxCard {...goalReachedProps} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - goal not reached', () => {
		const tree = testRenderer
			.create(<MoneyboxCard {...goalNotReachedProps} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should display moneybox title', () => {
		render(<MoneyboxCard {...goalReachedProps} />);

		const title = screen.getByTestId('goal-title-moneybox-card-test-id');

		expect(title).toHaveTextContent('Test');
	});

	it('should display moneybox saving goal value and saving currency', () => {
		render(<MoneyboxCard {...goalReachedProps} />);

		const goal = screen.getByTestId('goal-moneybox-card-test-id');
		const currency = screen.getByTestId('goal-currency-moneybox-card-test-id');

		expect(goal).toHaveTextContent('5000.00');
		expect(currency).toHaveTextContent('USD');
	});

	it("should display piggy-bank icon when saving goal isn't reached", () => {
		render(<MoneyboxCard {...goalNotReachedProps} />);

		const piggyIcon = screen.getByTestId('piggy-bank-icon-test-id');
		const checkIcon = screen.queryByTestId('check-icon-test-id');

		expect(piggyIcon).not.toBeNull();
		expect(checkIcon).toBeNull();
	});

	it('should display check icon when saving goal is reached', () => {
		render(<MoneyboxCard {...goalReachedProps} />);

		const checkIcon = screen.getByTestId('check-icon-test-id');
		const piggyIcon = screen.queryByTestId('piggy-bank-icon-test-id');

		expect(checkIcon).not.toBeNull();
		expect(piggyIcon).toBeNull();
	});

	it('should display full progress bar for when saving goal is reached', () => {
		render(<MoneyboxCard {...goalReachedProps} />);

		const progressLine = screen.getByTestId(
			'progress-line-progress-bar-moneybox-card-test-id'
		);

		expect(progressLine).toHaveStyle({
			width: '100%',
		});
	});

	it("should display not full progress bar for when saving goal isn't reached", () => {
		render(<MoneyboxCard {...goalNotReachedProps} />);

		const progressLine = screen.getByTestId(
			'progress-line-progress-bar-moneybox-card-test-id'
		);

		expect(progressLine).toHaveStyle({
			width: '20%',
		});
	});

	it('should display amount of saved money and money currency', () => {
		render(<MoneyboxCard {...goalNotReachedProps} />);

		const saved = screen.getByTestId('saved-moneybox-card-test-id');
		const currency = screen.getByTestId('saved-currency-moneybox-card-test-id');

		expect(saved).toHaveTextContent('1000.00');
		expect(currency).toHaveTextContent('USD');
	});

	it('should display two buttons', () => {
		render(<MoneyboxCard {...goalNotReachedProps} />);

		const buttons = screen.getAllByTestId(/-btn-moneybox-card-test-id/);

		expect(buttons).toHaveLength(2);
	});

	it("should render 'Withdrawal' and 'Extend' buttons when saving goal is reached", () => {
		render(<MoneyboxCard {...goalReachedProps} />);

		const withdrawalBtn = screen.getByTestId(
			'withdrawal-btn-moneybox-card-test-id'
		);
		const extendBtn = screen.getByTestId('extend-btn-moneybox-card-test-id');
		const topUpBtn = screen.queryByTestId('top-up-btn-moneybox-card-test-id');

		expect(withdrawalBtn).toHaveTextContent('Withdrawal');
		expect(extendBtn).toHaveTextContent('Extend');
		expect(topUpBtn).toBeNull();
	});

	it('should handle press events on both buttons when goal is reached', () => {
		render(<MoneyboxCard {...goalReachedProps} />);

		const withdrawalBtn = screen.getByTestId(
			'withdrawal-btn-moneybox-card-test-id'
		);
		const extendBtn = screen.getByTestId('extend-btn-moneybox-card-test-id');

		fireEvent.press(withdrawalBtn);
		expect(onPressWithdrawalButton).toHaveBeenCalledTimes(1);

		fireEvent.press(extendBtn);
		expect(onPressExtendButton).toHaveBeenCalledTimes(1);

		expect(onPressTopUpButton).not.toHaveBeenCalled();
	});

	it("should render 'Withdrawal' and 'Top - Up' buttons saving goal isn't reached", () => {
		render(<MoneyboxCard {...goalNotReachedProps} />);

		const withdrawalBtn = screen.getByTestId(
			'withdrawal-btn-moneybox-card-test-id'
		);
		const topUpBtn = screen.getByTestId('top-up-btn-moneybox-card-test-id');
		const extendBtn = screen.queryByTestId('extend-btn-moneybox-card-test-id');

		expect(withdrawalBtn).toHaveTextContent('Withdrawal');
		expect(topUpBtn).toHaveTextContent('Top - Up');
		expect(extendBtn).toBeNull();
	});

	it("should handle press events on both buttons when goal isn't reached", () => {
		render(<MoneyboxCard {...goalNotReachedProps} />);

		const withdrawalBtn = screen.getByTestId(
			'withdrawal-btn-moneybox-card-test-id'
		);
		const topUpBtn = screen.getByTestId('top-up-btn-moneybox-card-test-id');

		fireEvent.press(withdrawalBtn);
		expect(onPressWithdrawalButton).toHaveBeenCalledTimes(1);

		fireEvent.press(topUpBtn);
		expect(onPressTopUpButton).toHaveBeenCalledTimes(1);

		expect(onPressExtendButton).not.toHaveBeenCalled();
	});

	it('should apply additional styles', () => {
		render(<MoneyboxCard {...goalNotReachedProps} />);

		const card = screen.getByTestId('moneybox-card-test-id');

		expect(card).toHaveStyle({
			marginBottom: 10,
		});
	});
});
