import { Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';

import { DepositsTemplate } from 'components/templates';
import { colors } from 'theme';

interface DepositData {
	id: string;
	isFinished: boolean;
	amount: number;
	currency: string;
	date: string;
	lastIncome: number;
	rate: number;
}

interface DepositItem extends DepositData {
	onPressWithdrawalButton: () => void;
	onPressTopUpButton: () => void;
	onPressExtendButton: () => void;
}

interface MoneyboxData {
	id: string;
	goal: number;
	saved: number;
	currency: string;
	title: string;
}

interface MoneyboxItem extends MoneyboxData {
	onPressWithdrawalButton: () => void;
	onPressTopUpButton: () => void;
	onPressExtendButton: () => void;
}

const depositData: DepositData[] = [
	{
		id: '1',
		amount: 300000,
		currency: 'USD',
		date: 'Sep 1 - Mar 1, 2022',
		isFinished: false,
		lastIncome: 6057,
		rate: 0.08,
	},
	{
		id: '2',
		amount: 150000,
		currency: 'USD',
		date: 'Sep 1, 2021 - Sep 1, 2022',
		isFinished: true,
		lastIncome: 15000,
		rate: 0.1,
	},
	{
		id: '3',
		amount: 300000,
		currency: 'USD',
		date: 'Sep 1 - Mar 1, 2022',
		isFinished: false,
		lastIncome: 6057,
		rate: 0.08,
	},
	{
		id: '4',
		amount: 150000,
		currency: 'USD',
		date: 'Sep 1, 2021 - Sep 1, 2022',
		isFinished: true,
		lastIncome: 15000,
		rate: 0.1,
	},
];

const moneyboxData: MoneyboxData[] = [
	{
		id: '1',
		goal: 120000,
		currency: 'USD',
		saved: 65027,
		title: 'New iPhone Pro Max',
	},
	{
		id: '2',
		goal: 120000,
		currency: 'USD',
		saved: 120000,
		title: 'New iPhone Pro Max',
	},
];

export const DepositsScreen = () => {
	useFocusEffect(() => {
		if (Platform.OS === 'ios') {
			return undefined;
		}
		void NavigationBar.setBackgroundColorAsync(colors.white);

		return () => {
			void NavigationBar.setBackgroundColorAsync(colors.screenBackground);
		};
	});

	const withdrawFromDeposit = (id: string, amount: number) => {
		console.log(
			`Withdrawing money from deposit id: ${id}, amount: ${(
				amount / 100
			).toFixed(2)}`
		);
	};

	const withdrawFromMoneybox = (id: string, amount: number) => {
		console.log(
			`Withdrawing money from moneybox id: ${id}, amount: ${(
				amount / 100
			).toFixed(2)}`
		);
	};

	const addToMoneybox = (id: string, amount: number) => {
		console.log(
			`Adding money to moneybox id: ${id}, amount: ${(amount / 100).toFixed(2)}`
		);
	};

	const addToDeposit = (id: string, amount: number) => {
		console.log(
			`Adding money to deposit id: ${id}, amount: ${(amount / 100).toFixed(2)}`
		);
	};

	const extendMoneybox = (id: string) => {
		console.log(`Extending deposit id: ${id}`);
	};

	const extendDeposit = (id: string) => {
		console.log(`Extending deposit id: ${id}`);
	};

	const createDeposit = () => {
		console.log('createDeposit');
	};

	const createMoneybox = () => {
		console.log('createMoneybox');
	};
	const showInfo = () => console.log('showInfo');

	const deposits: DepositItem[] = depositData.map((deposit) => ({
		...deposit,
		onPressWithdrawalButton: () =>
			withdrawFromDeposit(deposit.id, deposit.amount),
		onPressTopUpButton: () => addToDeposit(deposit.id, 10000),
		onPressExtendButton: () => extendDeposit(deposit.id),
	}));

	const moneyboxes: MoneyboxItem[] = moneyboxData.map((box) => ({
		...box,
		onPressWithdrawalButton: () => withdrawFromMoneybox(box.id, box.saved),
		onPressTopUpButton: () => addToMoneybox(box.id, 10000),
		onPressExtendButton: () => extendMoneybox(box.id),
	}));

	return (
		<DepositsTemplate
			deposits={deposits}
			depositsSubheading="Current deposits"
			heading="Deposits"
			moneyboxes={moneyboxes}
			moneyboxSubheading="Current moneyboxes"
			primaryButtonTitle="+ Deposit"
			secondaryButtonTitle="+ Moneybox"
			onPressInfoIcon={showInfo}
			onPressPrimaryButton={createDeposit}
			onPressSecondaryButton={createMoneybox}
		/>
	);
};
