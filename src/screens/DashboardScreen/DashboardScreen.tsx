import { useFocusEffect, useNavigation } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';

import { IconProps } from 'components/atoms';
import { DashboardTemplate } from 'components/templates';
import { colors } from 'theme';

import type { NavigationProp } from 'navigation';
import { Platform } from 'react-native';

interface TransactionHistoryItem {
	id: string;
	iconName: IconProps['name'];
	iconColor?: string;
	transactionType: 'incoming' | 'outgoing';
	title: string;
	transactionCategory: string;
	amount: number;
}

export const DashboardScreen = () => {
	const navigation = useNavigation<NavigationProp>();

	useFocusEffect(() => {
		if (Platform.OS === 'ios') {
			return undefined;
		}
		void NavigationBar.setBackgroundColorAsync(colors.white);

		return () => {
			void NavigationBar.setBackgroundColorAsync(colors.screenBackground);
		};
	});

	const latestTransactions: TransactionHistoryItem[] = [
		{
			title: 'Adalyn Roth',
			id: 'adalyn-roth-1',
			iconColor: '#55ACEE',
			amount: 140.0,
			iconName: 'money-transfer',
			transactionCategory: 'Money transfer',
			transactionType: 'outgoing',
		},
		{
			title: 'Amazon',
			id: 'amazon-1',
			amount: 239.57,
			iconName: 'amazon',
			transactionCategory: 'Online payments',
			transactionType: 'outgoing',
		},
		{
			title: 'Paypal',
			id: 'paypal-1',
			amount: 700.0,
			iconName: 'paypal',
			transactionCategory: 'Deposits',
			transactionType: 'incoming',
		},
		{
			title: 'Adalyn Roth',
			id: 'adalyn-roth-2',
			iconColor: '#55ACEE',
			amount: 140.0,
			iconName: 'money-transfer',
			transactionCategory: 'Money transfer',
			transactionType: 'outgoing',
		},
		{
			title: 'Amazon',
			id: 'amazon-2',
			amount: 239.57,
			iconName: 'amazon',
			transactionCategory: 'Online payments',
			transactionType: 'outgoing',
		},
		{
			title: 'Paypal',
			id: 'paypal-2',
			amount: 700.0,
			iconName: 'paypal',
			transactionCategory: 'Deposits',
			transactionType: 'incoming',
		},
	];
	const onPressCreditCardsIconButton = () => {
		console.log('onPressCreditCardsIconButton');
	};

	const onPressProfileIconButton = () => {
		console.log('onPressProfileIconButton');
	};

	const onPressMakePayment = () => {
		console.log('onPressMakePayment');
	};

	const onPressMobilePayment = () => {
		navigation.navigate('MobilePayment');
	};

	const onPressMoneyTransfer = () => {
		console.log('onPressMoneyTransfer');
	};

	const onPressTopUpPayment = () => {
		console.log('onPressTopUpPayment');
	};

	const onPressViewAll = () => {
		console.log('onPressViewAll');
	};

	const onPressTransactionCard = () => {
		navigation.navigate('TransactionDetails');
	};

	return (
		<DashboardTemplate
			latestTransactions={latestTransactions}
			navText="€ 1.08 / 1.12"
			onPressCreditCardsIconButton={onPressCreditCardsIconButton}
			onPressMakePayment={onPressMakePayment}
			onPressMobilePayment={onPressMobilePayment}
			onPressMoneyTransfer={onPressMoneyTransfer}
			onPressProfileIconButton={onPressProfileIconButton}
			onPressTopUpPayment={onPressTopUpPayment}
			onPressTransactionCard={onPressTransactionCard}
			onPressViewAll={onPressViewAll}
		/>
	);
};
