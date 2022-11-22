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

export interface Props {
	latestTransactions: TransactionHistoryItem[];
	onPressViewAll: () => void;
	onPressTransactionCard: () => void;
	style?: StyleProp<ViewStyle>;
	testID?: string;
}

export const LatestTransactions = ({
	latestTransactions,
	onPressViewAll,
	onPressTransactionCard,
	style,
	testID,
}: Props) => {
	return (
		<View style={style} testID={testID}>
			<Flex direction="row" style={styles.header}>
				<Heading
					size="h4"
					testID="latest-transactions-title-test-id"
					text="Latest transactions"
				/>
				<Link
					testID="latest-transaction-link-test-id"
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
						testID={`${id}-latest-transaction-item-test-id`}
						title={title}
						type={transactionType}
						onPress={onPressTransactionCard}
					/>
				)}
			/>
		</View>
	);
};
