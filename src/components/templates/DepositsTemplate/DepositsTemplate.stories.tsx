import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { DepositsTemplate } from './DepositsTemplate';

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

storiesOf('Templates/DepositsTemplate', module)
	.addDecorator((getStory) => <ViewStory fullscreen>{getStory()}</ViewStory>)
	.add('Sections without scroll', () => (
		<DepositsTemplate
			deposits={deposits}
			depositsSubheading={text('depositsSubheading', 'Section 1')}
			heading={text('heading', 'Heading')}
			moneyboxes={moneyboxes}
			moneyboxSubheading={text('moneyboxSubheading', 'Section 2')}
			primaryButtonTitle={text('primaryButtonTitle', 'Primary')}
			secondaryButtonTitle={text('secondaryButtonTitle', 'Secondary')}
			onPressInfoIcon={action('onPressInfoIcon')}
			onPressPrimaryButton={action('onPressPrimaryButton')}
			onPressSecondaryButton={action('onPressSecondaryButton')}
		/>
	))
	.add('Sections with scroll', () => (
		<DepositsTemplate
			deposits={[
				...deposits,
				...deposits.map((deposit) => ({ ...deposit, id: `${deposit.id}1` })),
			]}
			depositsSubheading={text('depositsSubheading', 'Section 1')}
			heading={text('heading', 'Heading')}
			moneyboxes={[
				...moneyboxes,
				...moneyboxes.map((moneybox) => ({
					...moneybox,
					id: `${moneybox.id}1`,
				})),
			]}
			moneyboxSubheading={text('moneyboxSubheading', 'Section 2')}
			primaryButtonTitle={text('primaryButtonTitle', 'Primary')}
			secondaryButtonTitle={text('secondaryButtonTitle', 'Secondary')}
			onPressInfoIcon={action('onPressInfoIcon')}
			onPressPrimaryButton={action('onPressPrimaryButton')}
			onPressSecondaryButton={action('onPressSecondaryButton')}
		/>
	));
