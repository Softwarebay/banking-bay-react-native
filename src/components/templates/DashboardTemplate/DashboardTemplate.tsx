import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Divider, IconProps } from 'components/atoms';
import {
	DashboardCards,
	LatestTransactions,
	PaymentOptions,
} from 'components/organisms';

import { styles } from './DashboardTemplate.styles';

export interface TransactionHistoryItem {
	id: string;
	iconName: IconProps['name'];
	iconColor: string;
	transactionType: 'incoming' | 'outgoing';
	title: string;
	transactionCategory: string;
	amount: number;
}

interface Props {
	navText: string;
	latestTransactions: TransactionHistoryItem[];
	onPressCreditCardsIconButton: () => void;
	onPressProfileIconButton: () => void;
	onPressMakePayment: () => void;
	onPressTopUpPayment: () => void;
	onPressMobilePayment: () => void;
	onPressMoneyTransfer: () => void;
	onPressViewAll: () => void;
	onPressTransactionCard: () => void;
}

export const DashboardTemplate = ({
	navText,
	latestTransactions,
	onPressCreditCardsIconButton,
	onPressProfileIconButton,
	onPressMakePayment,
	onPressTopUpPayment,
	onPressMobilePayment,
	onPressMoneyTransfer,
	onPressViewAll,
	onPressTransactionCard,
}: Props) => {
	return (
		<>
			<StatusBar style="light" />
			<DashboardCards
				navText={navText}
				onPressCreditCardsIconButton={onPressCreditCardsIconButton}
				onPressProfileIconButton={onPressProfileIconButton}
			/>
			<View style={styles.content}>
				<View style={styles.paymentOptions}>
					<PaymentOptions
						onPressMakePayment={onPressMakePayment}
						onPressMobilePayment={onPressMobilePayment}
						onPressMoneyTransfer={onPressMoneyTransfer}
						onPressTopUpPayment={onPressTopUpPayment}
					/>
				</View>
				<Divider />
				<View style={styles.latestTransactions}>
					<LatestTransactions
						latestTransactions={latestTransactions}
						onPressTransactionCard={onPressTransactionCard}
						onPressViewAll={onPressViewAll}
					/>
				</View>
			</View>
		</>
	);
};
