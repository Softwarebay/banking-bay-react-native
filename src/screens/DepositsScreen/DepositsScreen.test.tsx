import {
	fireEvent,
	render,
	screen,
	within,
} from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { DepositsScreen } from './DepositsScreen';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
	useNavigation: () => ({ navigate: mockNavigate }),
	useFocusEffect: jest.fn(),
}));

describe('DepositsScreen', () => {
	it('should match snapshot', () => {
		const tree = testRenderer.create(<DepositsScreen />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it("should display 'Deposits' as main heading", () => {
		render(<DepositsScreen />);

		const heading = screen.getByTestId('deposits-template-heading-test-id');

		expect(heading).toHaveTextContent('Deposits');
	});

	it("should display 'Current deposits' as deposits section subheading", () => {
		render(<DepositsScreen />);

		const subheading = screen.getByTestId(
			'deposits-template-deposits-section-subheading-test-id'
		);

		expect(subheading).toHaveTextContent('Current deposits');
	});

	it("should display 'Current moneyboxes' as moneyboxes section subheading", () => {
		render(<DepositsScreen />);

		const subheading = screen.getByTestId(
			'deposits-template-moneyboxes-section-subheading-test-id'
		);

		expect(subheading).toHaveTextContent('Current moneyboxes');
	});

	it("should display '+ Deposit' as primary button title", () => {
		render(<DepositsScreen />);

		const primaryBtn = screen.getByTestId(
			'deposits-template-primary-btn-test-id'
		);

		expect(primaryBtn).toHaveTextContent('+ Deposit');
	});

	it("should display '+ Moneybox' as secondary button title", () => {
		render(<DepositsScreen />);

		const secondaryBtn = screen.getByTestId(
			'deposits-template-secondary-btn-test-id'
		);

		expect(secondaryBtn).toHaveTextContent('+ Moneybox');
	});

	it("should log 'createDeposit' after pressing on primary button", () => {
		console.log = jest.fn();
		render(<DepositsScreen />);

		const primaryBtn = screen.getByTestId(
			'deposits-template-primary-btn-test-id'
		);

		fireEvent.press(primaryBtn);

		expect(console.log).toHaveBeenCalledWith('createDeposit');
	});

	it("should log 'createMoneybox' after pressing on secondary button", () => {
		console.log = jest.fn();
		render(<DepositsScreen />);

		const secondaryBtn = screen.getByTestId(
			'deposits-template-secondary-btn-test-id'
		);

		fireEvent.press(secondaryBtn);

		expect(console.log).toHaveBeenCalledWith('createMoneybox');
	});

	it("should log 'showInfo' after pressing on info icon", () => {
		console.log = jest.fn();
		render(<DepositsScreen />);

		const infoBtn = screen.getByTestId(
			'deposits-template-info-icon-btn-test-id'
		);

		fireEvent.press(infoBtn);

		expect(console.log).toHaveBeenCalledWith('showInfo');
	});

	describe('Deposits Section', () => {
		it('should render 4 deposit cards', () => {
			render(<DepositsScreen />);

			const deposits = screen.getAllByTestId(/deposit-card-test-id/);

			expect(deposits).toHaveLength(4);
		});
		describe('Ongoing - id: 1', () => {
			it('should display deposits icon', () => {
				render(<DepositsScreen />);

				const depositCard = screen.getByTestId('1-deposit-card-test-id');
				const icon = within(depositCard).getByTestId('deposits-icon-test-id');

				expect(icon).not.toBeNull();
			});

			it("should display '3000.00' as deposit value", () => {
				render(<DepositsScreen />);

				const depositCard = screen.getByTestId('1-deposit-card-test-id');
				const depositValue = within(depositCard).getByTestId(
					'deposit-amount-test-id'
				);

				expect(depositValue).toHaveTextContent('3000.00');
			});

			it("should display 'USD' as currency", () => {
				render(<DepositsScreen />);

				const depositCard = screen.getByTestId('1-deposit-card-test-id');
				const currency = within(depositCard).getByTestId(
					'deposit-currency-test-id'
				);

				expect(currency).toHaveTextContent('USD');
			});

			it("should display '8%' as rate", () => {
				render(<DepositsScreen />);

				const depositCard = screen.getByTestId('1-deposit-card-test-id');
				const rate = within(depositCard).getByTestId('deposit-rate-test-id');

				expect(rate).toHaveTextContent('8%');
			});

			it("should display 'Sep 1 - Mar 1, 2022' as date", () => {
				render(<DepositsScreen />);

				const depositCard = screen.getByTestId('1-deposit-card-test-id');
				const date = within(depositCard).getByTestId('deposit-date-test-id');

				expect(date).toHaveTextContent('Sep 1 - Mar 1, 2022');
			});

			it("should display '+ 60.57' as last income", () => {
				render(<DepositsScreen />);

				const depositCard = screen.getByTestId('1-deposit-card-test-id');
				const lastIncome = within(depositCard).getByTestId(
					'deposit-last-income-test-id'
				);

				expect(lastIncome).toHaveTextContent('+ 60.57');
			});

			it("should log 'Withdrawing money from deposit id: 1, amount: 3000.00' after pressing 'Withdrawal' button on the first DepositCard", () => {
				console.log = jest.fn();
				render(<DepositsScreen />);

				const depositCard = screen.getByTestId('1-deposit-card-test-id');
				const withdrawalBtn = within(depositCard).getByTestId(
					'deposit-withdrawal-btn-test-id'
				);

				fireEvent.press(withdrawalBtn);

				expect(console.log).toHaveBeenCalledWith(
					'Withdrawing money from deposit id: 1, amount: 3000.00'
				);
			});

			it("should log 'Adding money to deposit id: 1, amount: 1000.00' after pressing 'Top - Up' button on the first DepositCard", () => {
				console.log = jest.fn();
				render(<DepositsScreen />);

				const depositCard = screen.getByTestId('1-deposit-card-test-id');
				const topUpBtn = within(depositCard).getByTestId(
					'deposit-top-up-btn-test-id'
				);

				fireEvent.press(topUpBtn);

				expect(console.log).toHaveBeenCalledWith(
					'Adding money to deposit id: 1, amount: 1000.00'
				);
			});
		});

		describe('Finished - id: 2', () => {
			it('should display check icon', () => {
				render(<DepositsScreen />);

				const deposit = screen.getByTestId('2-deposit-card-test-id');
				const icon = within(deposit).getByTestId('check-icon-test-id');

				expect(icon).not.toBeNull();
			});

			it("should display '1500.00' as deposit value", () => {
				render(<DepositsScreen />);

				const depositCard = screen.getByTestId('2-deposit-card-test-id');
				const depositValue = within(depositCard).getByTestId(
					'deposit-amount-test-id'
				);

				expect(depositValue).toHaveTextContent('1500.00');
			});

			it("should display 'USD' as currency", () => {
				render(<DepositsScreen />);

				const depositCard = screen.getByTestId('2-deposit-card-test-id');
				const currency = within(depositCard).getByTestId(
					'deposit-currency-test-id'
				);

				expect(currency).toHaveTextContent('USD');
			});

			it("should display '10%' as rate", () => {
				render(<DepositsScreen />);

				const depositCard = screen.getByTestId('2-deposit-card-test-id');
				const rate = within(depositCard).getByTestId('deposit-rate-test-id');

				expect(rate).toHaveTextContent('10%');
			});

			it("should display 'Sep 1, 2021 - Sep 1, 2022' as date", () => {
				render(<DepositsScreen />);

				const depositCard = screen.getByTestId('2-deposit-card-test-id');
				const date = within(depositCard).getByTestId('deposit-date-test-id');

				expect(date).toHaveTextContent('Sep 1, 2021 - Sep 1, 2022');
			});

			it("should display '+ 150.00' as last income", () => {
				render(<DepositsScreen />);

				const depositCard = screen.getByTestId('2-deposit-card-test-id');
				const lastIncome = within(depositCard).getByTestId(
					'deposit-last-income-test-id'
				);

				expect(lastIncome).toHaveTextContent('+ 150.00');
			});

			it("should log 'Withdrawing money from deposit id: 2, amount: 1500.00' after pressing 'Withdrawal' button on the second DepositCard", () => {
				console.log = jest.fn();
				render(<DepositsScreen />);

				const depositCard = screen.getByTestId('2-deposit-card-test-id');
				const withdrawalBtn = within(depositCard).getByTestId(
					'deposit-withdrawal-btn-test-id'
				);

				fireEvent.press(withdrawalBtn);

				expect(console.log).toHaveBeenCalledWith(
					'Withdrawing money from deposit id: 2, amount: 1500.00'
				);
			});

			it("should log 'Extending deposit id: 2' after pressing 'Extend' button on the second DepositCard", () => {
				console.log = jest.fn();
				render(<DepositsScreen />);

				const depositCard = screen.getByTestId('2-deposit-card-test-id');
				const extendBtn = within(depositCard).getByTestId(
					'deposit-extend-btn-test-id'
				);

				fireEvent.press(extendBtn);

				expect(console.log).toHaveBeenCalledWith('Extending deposit id: 2');
			});
		});
	});

	describe('Moneyboxes Section', () => {
		it('should render 2 moneybox cards', () => {
			render(<DepositsScreen />);

			const moneyboxes = screen.getAllByTestId(/moneybox-card-test-id/);

			expect(moneyboxes).toHaveLength(2);
		});
		describe('Ongoing', () => {
			it('should display piggy-bank icon', () => {
				render(<DepositsScreen />);

				const moneyboxCard = screen.getByTestId('1-moneybox-card-test-id');
				const piggyIcon = within(moneyboxCard).getByTestId(
					'piggy-bank-icon-test-id'
				);

				expect(piggyIcon).not.toBeNull();
			});

			it("should display 'New iPhone Pro Max' as title", () => {
				render(<DepositsScreen />);

				const moneyboxCard = screen.getByTestId('1-moneybox-card-test-id');
				const title = within(moneyboxCard).getByTestId(
					'moneybox-goal-title-test-id'
				);

				expect(title).toHaveTextContent('New iPhone Pro Max');
			});

			it("should display '1200.00' as goal value", () => {
				render(<DepositsScreen />);

				const moneyboxCard = screen.getByTestId('1-moneybox-card-test-id');
				const goal = within(moneyboxCard).getByTestId('moneybox-goal-test-id');

				expect(goal).toHaveTextContent('1200.00');
			});

			it("should display 'USD' as currency", () => {
				render(<DepositsScreen />);

				const moneyboxCard = screen.getByTestId('1-moneybox-card-test-id');
				const goalCurrency = within(moneyboxCard).getByTestId(
					'moneybox-goal-currency-test-id'
				);
				const savedCurrency = within(moneyboxCard).getByTestId(
					'moneybox-saved-currency-test-id'
				);

				expect(goalCurrency).toHaveTextContent('USD');
				expect(savedCurrency).toHaveTextContent('USD');
			});

			it("should display '650.27' as saved value", () => {
				render(<DepositsScreen />);

				const moneyboxCard = screen.getByTestId('1-moneybox-card-test-id');
				const saved = within(moneyboxCard).getByTestId(
					'moneybox-saved-test-id'
				);

				expect(saved).toHaveTextContent('650.27');
			});

			it("should display progress bar with highlighted line's width of 54%", () => {
				render(<DepositsScreen />);

				const moneyboxCard = screen.getByTestId('1-moneybox-card-test-id');
				const progressLine = within(moneyboxCard).getByTestId(
					'progress-line-moneybox-progress-bar-test-id'
				);
				const saved = 650.27;
				const goal = 1200;

				const progress = (saved / goal) * 100;

				expect(progress).toBeGreaterThanOrEqual(54);
				expect(progressLine).toHaveStyle({
					width: `${progress}%`,
				});
			});

			it("should log 'Withdrawing money from moneybox id: 1, amount: 650.27' after pressing 'Withdrawal' button on the first MoneyboxCard", () => {
				console.log = jest.fn();
				render(<DepositsScreen />);

				const moneyboxCard = screen.getByTestId('1-moneybox-card-test-id');
				const withdrawalBtn = within(moneyboxCard).getByTestId(
					'moneybox-withdrawal-btn-test-id'
				);

				fireEvent.press(withdrawalBtn);

				expect(console.log).toHaveBeenCalledWith(
					'Withdrawing money from moneybox id: 1, amount: 650.27'
				);
			});

			it("should log 'Adding money to moneybox id: 1, amount: 1000.00' after pressing 'Top - Up' button on the first MoneyboxCard", () => {
				console.log = jest.fn();
				render(<DepositsScreen />);

				const moneyboxCard = screen.getByTestId('1-moneybox-card-test-id');
				const topUpBtn = within(moneyboxCard).getByTestId(
					'moneybox-top-up-btn-test-id'
				);

				fireEvent.press(topUpBtn);

				expect(console.log).toHaveBeenCalledWith(
					'Adding money to moneybox id: 1, amount: 1000.00'
				);
			});
		});

		describe('Finished', () => {
			it('should display check icon', () => {
				render(<DepositsScreen />);

				const moneyboxCard = screen.getByTestId('2-moneybox-card-test-id');
				const checkIcon =
					within(moneyboxCard).getByTestId('check-icon-test-id');

				expect(checkIcon).not.toBeNull();
			});

			it("should display 'Christmas Socks' as title", () => {
				render(<DepositsScreen />);

				const moneyboxCard = screen.getByTestId('2-moneybox-card-test-id');
				const title = within(moneyboxCard).getByTestId(
					'moneybox-goal-title-test-id'
				);

				expect(title).toHaveTextContent('Christmas Socks');
			});

			it("should display '12.00' as goal value", () => {
				render(<DepositsScreen />);

				const moneyboxCard = screen.getByTestId('2-moneybox-card-test-id');
				const goal = within(moneyboxCard).getByTestId('moneybox-goal-test-id');

				expect(goal).toHaveTextContent('12.00');
			});

			it("should display 'EUR' as currency", () => {
				render(<DepositsScreen />);

				const moneyboxCard = screen.getByTestId('2-moneybox-card-test-id');
				const goalCurrency = within(moneyboxCard).getByTestId(
					'moneybox-goal-currency-test-id'
				);
				const savedCurrency = within(moneyboxCard).getByTestId(
					'moneybox-saved-currency-test-id'
				);

				expect(goalCurrency).toHaveTextContent('EUR');
				expect(savedCurrency).toHaveTextContent('EUR');
			});

			it("should display '12.00' as saved value", () => {
				render(<DepositsScreen />);

				const moneyboxCard = screen.getByTestId('2-moneybox-card-test-id');
				const saved = within(moneyboxCard).getByTestId(
					'moneybox-saved-test-id'
				);

				expect(saved).toHaveTextContent('12.00');
			});

			it("should display progress bar with highlighted line's width of 100%", () => {
				render(<DepositsScreen />);

				const moneyboxCard = screen.getByTestId('2-moneybox-card-test-id');
				const progressLine = within(moneyboxCard).getByTestId(
					'progress-line-moneybox-progress-bar-test-id'
				);
				expect(progressLine).toHaveStyle({
					width: '100%',
				});
			});

			it("should log 'Withdrawing money from moneybox id: 2, amount: 12.00' after pressing 'Withdrawal' button on the second MoneyboxCard", () => {
				console.log = jest.fn();
				render(<DepositsScreen />);

				const moneyboxCard = screen.getByTestId('2-moneybox-card-test-id');
				const withdrawalBtn = within(moneyboxCard).getByTestId(
					'moneybox-withdrawal-btn-test-id'
				);

				fireEvent.press(withdrawalBtn);

				expect(console.log).toHaveBeenCalledWith(
					'Withdrawing money from moneybox id: 2, amount: 12.00'
				);
			});

			it("should log 'Extending moneybox id: 2' after pressing 'Extend' button on the second MoneyboxCard", () => {
				console.log = jest.fn();
				render(<DepositsScreen />);

				const moneyboxCard = screen.getByTestId('2-moneybox-card-test-id');
				const extendBtn = within(moneyboxCard).getByTestId(
					'moneybox-extend-btn-test-id'
				);

				fireEvent.press(extendBtn);

				expect(console.log).toHaveBeenCalledWith('Extending moneybox id: 2');
			});
		});
	});
});
