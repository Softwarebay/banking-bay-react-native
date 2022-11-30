import { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { TransactionHistoryTemplate } from 'components/templates';
import { IconProps, InputFieldHandle } from 'components/atoms';
import type { NavigationProp } from 'navigation';

interface Transaction {
	id: string;
	iconName: IconProps['name'];
	iconColor?: string;
	transactionType: 'incoming' | 'outgoing';
	title: string;
	transactionCategory: string;
	amount: number;
}

interface TransactionHistoryItem {
	date: string;
	data: Transaction[];
}

export interface Props {
	testOnly_initialNumToRender?: number;
}

export const TransactionHistoryScreen = ({
	testOnly_initialNumToRender,
}: Props) => {
	const navigation = useNavigation<NavigationProp>();
	const searchRef = useRef<InputFieldHandle>(null);

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
	const [history, setHistory] = useState(transactionHistory);

	const navigateToTransactionDetails = () => {
		navigation.navigate('TransactionDetails');
	};

	const filterHistory = () => {
		const query = searchRef.current?.getValue();

		if (query && query !== '') {
			const filteredHistory: TransactionHistoryItem[] = [];

			transactionHistory.forEach((item) => {
				const { date, data } = item;

				const filteredData = data.filter(({ title }) => title.includes(query));

				if (filteredData.length) {
					filteredHistory.push({ date, data: filteredData });
				}
			});

			setHistory(filteredHistory);
		}
		if (query === '') {
			setHistory(transactionHistory);
		}
	};

	return (
		<TransactionHistoryTemplate
			ref={searchRef}
			testOnly_initialNumToRender={testOnly_initialNumToRender}
			transactionHistory={history}
			onPressTransactionCard={navigateToTransactionDetails}
			onSearch={filterHistory}
		/>
	);
};
