import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import { DashboardTemplate, TransactionHistoryItem } from './DashboardTemplate';

const latestTransactions: TransactionHistoryItem[] = [
	{
		title: 'Adalyn Roth',
		id: 'adalyn-roth-124743782',
		iconColor: '#55ACEE',
		amount: 140.0,
		iconName: 'money-transfer',
		transactionCategory: 'Money transfer',
		transactionType: 'outgoing',
	},
	{
		title: 'Amazon',
		id: 'amazon-124743782',
		iconColor: 'none',
		amount: 239.57,
		iconName: 'amazon',
		transactionCategory: 'Online payments',
		transactionType: 'outgoing',
	},
	{
		title: 'Paypal',
		id: 'paypal-124743782',
		iconColor: 'none',
		amount: 700.0,
		iconName: 'paypal',
		transactionCategory: 'Deposits',
		transactionType: 'incoming',
	},
];

storiesOf('Templates/DashboardTemplate', module)
	.addDecorator((getStory) => (
		<CenterStory style={{ paddingHorizontal: 0 }}>{getStory()}</CenterStory>
	))
	.add('Default', () => (
		<DashboardTemplate
			latestTransactions={latestTransactions}
			navText={text('navText', 'navText')}
			onPressCreditCardsIconButton={action('onPressCreditCardsIconButton')}
			onPressHeaderLink={action('onPressHeaderLink')}
			onPressMakePayment={action('onPressMakePayment')}
			onPressMobilePayment={action('onPressMobilePayment')}
			onPressMoneyTransfer={action('onPressMoneyTransfer')}
			onPressProfileIconButton={action('onPressProfileIconButton')}
			onPressTopUpPayment={action('onPressTopUpPayment')}
		/>
	));
