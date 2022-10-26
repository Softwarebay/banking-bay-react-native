import { Flex, Heading, IconProps, Link } from 'components/atoms';
import { StyleProp, View, ViewStyle } from 'react-native';

import { TransactionCard } from '../TransactionCard/TransactionCard';

import { styles } from './LatestTransactions.styles';

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
	latestTransactions: TransactionHistoryItem[];
	onPressViewAll: () => void;
	style?: StyleProp<ViewStyle>;
}

export const LatestTransactions = ({
	latestTransactions,
	onPressViewAll,
	style,
}: Props) => {
	return (
		<View style={style}>
			<Flex direction="row" style={styles.header}>
				<Heading
					size="h4"
					testID="latest-transactions-title-test-id"
					text="Latest transactions"
				/>
				<Link
					testID="latest-transaction-link"
					text="View All"
					onPress={onPressViewAll}
				/>
			</Flex>
			{latestTransactions.map(
				({
					id,
					title,
					transactionType,
					transactionCategory,
					iconName,
					iconColor,
					amount,
				}) => (
					<TransactionCard
						key={id}
						amount={amount}
						category={transactionCategory}
						iconColor={iconColor}
						iconName={iconName}
						id={id}
						style={styles.card}
						title={title}
						type={transactionType}
					/>
				)
			)}
		</View>
	);
};
