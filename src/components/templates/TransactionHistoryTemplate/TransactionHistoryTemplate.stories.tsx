import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import {
	TransactionHistoryItem,
	TransactionHistoryTemplate,
} from './TransactionHistoryTemplate';

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
		date: 'Sep 10, 2022',
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
	{
		date: 'Sep 5, 2022',
		data: [
			{
				id: '6',
				title: '+17869871235',
				iconName: 'smartphone',
				transactionType: 'outgoing',
				transactionCategory: 'Mobile payment',
				amount: 10.0,
				iconColor: '#FF8A71',
			},
			{
				id: '7',
				title: 'Maribel Farrell',
				iconName: 'money-transfer',
				transactionType: 'incoming',
				transactionCategory: 'Money transfer',
				amount: 568.0,
				iconColor: '#55ACEE',
			},
			{
				id: '8',
				title: 'Electricity',
				iconName: 'home',
				transactionType: 'outgoing',
				transactionCategory: 'Utility bills',
				amount: 198.27,
				iconColor: '#55ACEE',
			},
		],
	},
];

storiesOf('Atom/TransactionHistoryTemplate', module)
	.addDecorator((getStory) => <ViewStory>{getStory()}</ViewStory>)
	.add('Default', () => (
		<TransactionHistoryTemplate
			transactionHistory={transactionHistory}
			onPressTransactionCard={action('onPressTransactionCard')}
			onSearch={action('onSearch')}
		/>
	));
