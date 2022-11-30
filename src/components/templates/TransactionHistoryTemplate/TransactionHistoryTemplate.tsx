import { IconProps, InputFieldHandle, Text } from 'components/atoms';
import { SearchBar } from 'components/molecules';
import { TransactionCard } from 'components/organisms';
import { StatusBar } from 'expo-status-bar';
import { forwardRef } from 'react';
import {
	Keyboard,
	SectionList,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { colors } from 'theme';

import { styles } from './TransactionHistoryTemplate.styles';

interface Transaction {
	id: string;
	iconName: IconProps['name'];
	iconColor?: string;
	transactionType: 'incoming' | 'outgoing';
	title: string;
	transactionCategory: string;
	amount: number;
}

export interface TransactionHistoryItem {
	date: string;
	data: Transaction[];
}

export interface Props {
	transactionHistory: TransactionHistoryItem[];
	onSearch: () => void;
	onPressTransactionCard: () => void;
}

export const TransactionHistoryTemplate = forwardRef<InputFieldHandle, Props>(
	({ transactionHistory, onSearch, onPressTransactionCard }, ref) => {
		return (
			<>
				<StatusBar backgroundColor={colors.screenBackground} style="dark" />
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.container}>
						<SearchBar
							ref={ref}
							placeholder="Search"
							style={styles.searchBar}
							testID="transaction-history-searchbar-test-id"
							onSearch={onSearch}
						/>

						<SectionList<Transaction, TransactionHistoryItem>
							renderItem={({
								item: {
									id,
									amount,
									iconName,
									title,
									transactionCategory,
									transactionType,
									iconColor,
								},
							}) => (
								<TransactionCard
									amount={amount}
									category={transactionCategory}
									iconColor={iconColor}
									iconName={iconName}
									id={id}
									style={styles.card}
									testID={`${id}-transaction-history-item-test-id`}
									title={title}
									type={transactionType}
									onPress={onPressTransactionCard}
								/>
							)}
							renderSectionHeader={({ section: { date } }) => (
								<Text
									style={styles.sectionTitle}
									testID="transaction-history-title-test-id"
									text={date}
								/>
							)}
							sections={transactionHistory}
						/>
					</View>
				</TouchableWithoutFeedback>
			</>
		);
	}
);
