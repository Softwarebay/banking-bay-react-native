import {
	fireEvent,
	render,
	screen,
	within,
} from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { DepositsTemplate } from './DepositsTemplate';

import type { Props } from './DepositsTemplate';

interface MoneyboxItem {
	id: string;
	goal: number;
	saved: number;
	currency: string;
	title: string;
	onPressWithdrawalButton: () => void;
	onPressTopUpButton: () => void;
	onPressExtendButton: () => void;
}

interface DepositItem {
	id: string;
	isFinished: boolean;
	amount: number;
	currency: string;
	date: string;
	lastIncome: number;
	rate: number;
	onPressWithdrawalButton: () => void;
	onPressTopUpButton: () => void;
	onPressExtendButton: () => void;
}

describe('DepositsTemplate', () => {
	const onPressInfoIcon = jest.fn<Props['onPressInfoIcon'], []>();
	const onPressPrimaryButton = jest.fn<Props['onPressPrimaryButton'], []>();
	const onPressSecondaryButton = jest.fn<Props['onPressSecondaryButton'], []>();

	const deposits: DepositItem[] = [
		{
			id: '1',
			amount: 300000,
			currency: 'USD',
			date: 'Sep 1 - Mar 1, 2022',
			isFinished: false,
			lastIncome: 6057,
			rate: 0.08,
			onPressExtendButton: () => {},
			onPressTopUpButton: () => {},
			onPressWithdrawalButton: () => {},
		},
		{
			id: '2',
			amount: 150000,
			currency: 'USD',
			date: 'Sep 1, 2021 - Sep 1, 2022',
			isFinished: true,
			lastIncome: 15000,
			rate: 0.1,
			onPressExtendButton: () => {},
			onPressTopUpButton: () => {},
			onPressWithdrawalButton: () => {},
		},
	];

	const moneyboxes: MoneyboxItem[] = [
		{
			id: '1',
			goal: 120000,
			currency: 'USD',
			saved: 65027,
			title: 'New iPhone Pro Max',
			onPressExtendButton: () => {},
			onPressTopUpButton: () => {},
			onPressWithdrawalButton: () => {},
		},
	];
	const props: Props = {
		deposits,
		moneyboxes,
		heading: 'Heading',
		onPressInfoIcon,
		onPressPrimaryButton,
		onPressSecondaryButton,
		primaryButtonTitle: 'Primary',
		secondaryButtonTitle: 'Secondary',
		depositsSubheading: 'Deposits',
		moneyboxSubheading: 'Moneyboxes',
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<DepositsTemplate {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render heading', () => {
		render(<DepositsTemplate {...props} />);

		const heading = screen.getByTestId('deposits-template-heading-test-id');

		expect(heading).toHaveTextContent('Heading');
	});

	it('should render info icon button', () => {
		render(<DepositsTemplate {...props} />);

		const infoBtn = screen.getByTestId(
			'deposits-template-info-icon-btn-test-id'
		);
		const infoIcon = within(infoBtn).getByTestId('info-icon-test-id');

		expect(infoIcon).not.toBeNull();
	});

	it('should handle press events on info icon button', () => {
		render(<DepositsTemplate {...props} />);

		const infoBtn = screen.getByTestId(
			'deposits-template-info-icon-btn-test-id'
		);

		fireEvent.press(infoBtn);

		expect(onPressInfoIcon).toHaveBeenCalledTimes(1);
	});

	it('should display deposits section subheading', () => {
		render(<DepositsTemplate {...props} />);

		const subheading = screen.getByTestId(
			'deposits-template-deposits-section-subheading-test-id'
		);

		expect(subheading).toHaveTextContent('Deposits');
	});

	it('should render deposit cards', () => {
		render(<DepositsTemplate {...props} />);

		const depositCards = screen.getAllByTestId(/-deposit-card-test-id/);

		expect(depositCards).toHaveLength(2);
	});

	it('should display moneyboxes section subheading', () => {
		render(<DepositsTemplate {...props} />);

		const subheading = screen.getByTestId(
			'deposits-template-moneyboxes-section-subheading-test-id'
		);

		expect(subheading).toHaveTextContent('Moneyboxes');
	});

	it('should render moneybox cards', () => {
		render(<DepositsTemplate {...props} />);

		const moneyboxCards = screen.getAllByTestId(/-moneybox-card-test-id/);

		expect(moneyboxCards).toHaveLength(1);
	});

	it('should render primary footer button, handle press events', () => {
		render(<DepositsTemplate {...props} />);

		const primaryBtn = screen.getByTestId(
			'deposits-template-primary-btn-test-id'
		);

		expect(primaryBtn).toHaveTextContent('Primary');

		fireEvent.press(primaryBtn);

		expect(onPressPrimaryButton).toHaveBeenCalledTimes(1);
		expect(onPressSecondaryButton).not.toHaveBeenCalled();
	});

	it('should render secondary footer button, handle press events', () => {
		render(<DepositsTemplate {...props} />);

		const secondaryBtn = screen.getByTestId(
			'deposits-template-secondary-btn-test-id'
		);

		expect(secondaryBtn).toHaveTextContent('Secondary');

		fireEvent.press(secondaryBtn);

		expect(onPressSecondaryButton).toHaveBeenCalledTimes(1);
		expect(onPressPrimaryButton).not.toHaveBeenCalled();
	});
});
