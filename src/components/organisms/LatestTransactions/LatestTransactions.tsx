import { FlatList, StyleProp, View, ViewStyle } from 'react-native';

import { Flex, Heading, IconProps, Link } from 'components/atoms';
import { TransactionCard } from '../TransactionCard/TransactionCard';

import { styles } from './LatestTransactions.styles';

export interface TransactionHistoryItem {
	id: string;
	iconName: IconProps['name'];
	iconColor?: string;
	transactionType: 'incoming' | 'outgoing';
	title: string;
	transactionCategory: string;
	amount: number;
}

interface Props {
	latestTransactions: TransactionHistoryItem[];
	onPressViewAll: () => void;
	onPressTransactionCard: () => void;
	style?: StyleProp<ViewStyle>;
}

export const LatestTransactions = ({
	latestTransactions,
	onPressViewAll,
	onPressTransactionCard,
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

			<FlatList<TransactionHistoryItem>
				data={latestTransactions}
				renderItem={({
					item: {
						amount,
						iconName,
						id,
						title,
						transactionCategory,
						transactionType,
						iconColor,
					},
					index,
				}) => (
					<TransactionCard
						key={id}
						amount={amount}
						category={transactionCategory}
						iconColor={iconColor}
						iconName={iconName}
						id={id}
						style={[
							styles.card,
							index === 0 && styles.firstCard,
							index === latestTransactions.length - 1 && styles.lastCard,
						]}
						title={title}
						type={transactionType}
						onPress={onPressTransactionCard}
					/>
				)}
			/>
		</View>
	);
};
