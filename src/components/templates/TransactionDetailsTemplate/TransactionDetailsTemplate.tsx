import { ImageBackground, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
	Button,
	Divider,
	Flex,
	FloatNum,
	Heading,
	Icon,
	Text,
} from 'components/atoms';

import { bgTransactionDetails } from 'assets/backgrounds';
import { colors } from 'theme';

import { styles } from './TransactionDetailsTemplate.styles';

interface Props {
	transactionDetails: TransactionDetails;
	buttonTitle: string;
	onPressPrimaryButton: () => void;
}

interface TransactionDetails {
	date: string;
	category: string;
	categoryIcon: string;
	iconColor: string;
	iconBg: string;
	amount: string;
	isIncoming: boolean;
	sentTo: string;
	card: string;
	currency: string;
	fee: string;
	balance: string;
}

export const TransactionDetailsTemplate = ({
	transactionDetails,
	buttonTitle,
	onPressPrimaryButton,
}: Props) => {
	const {
		amount,
		balance,
		card,
		category,
		categoryIcon,
		currency,
		date,
		fee,
		iconBg,
		iconColor,
		isIncoming,
		sentTo,
	} = transactionDetails;

	return (
		<>
			<StatusBar style="dark" />
			<ImageBackground
				source={bgTransactionDetails}
				style={styles.backgroundImg}
			>
				<SafeAreaView style={styles.container}>
					<View style={styles.header}>
						<View style={styles.category}>
							<View
								style={[
									styles.iconContainer,
									styles.categoryIcon,
									{ backgroundColor: iconBg },
								]}
							>
								<Icon color={iconColor} name={categoryIcon} />
							</View>
							<Text
								style={styles.categoryText}
								testID="transaction-details-category-test-id"
								text={category}
							/>
						</View>
						<Text
							style={styles.date}
							testID="transaction-details-date-test-id"
							text={date}
						/>

						<FloatNum
							floatStyle={[styles.amountFloat]}
							intStyle={styles.amountInt}
							number={amount}
							prefix={`${isIncoming ? '+' : '-'} $ `}
							style={styles.amount}
							testID="transaction-details-header-amount-test-id"
						/>

						<Text
							style={styles.sentToText}
							testID="transaction-details-status-test-id"
							text={`sent to ${sentTo}`}
						/>

						<Flex direction="row" style={styles.status}>
							<View style={[styles.iconContainer, styles.statusIcon]}>
								<Icon color={colors.white} name="check" />
							</View>
							<Text style={styles.statusText} text="Success" />
						</Flex>
					</View>

					<Divider />
					<View style={styles.content}>
						<View>
							<Flex direction="row" style={styles.detailText}>
								<Text text="Sent to" />
								<Heading
									size="h5"
									testID="transaction-details-sent-to-test-id"
									text={sentTo}
								/>
							</Flex>
							<Divider />
						</View>
						<View>
							<Flex direction="row" style={styles.detailText}>
								<Text text="Card" />
								<Heading
									size="h5"
									testID="transaction-details-card-test-id"
									text={card}
								/>
							</Flex>
							<Divider />
						</View>
						<View>
							<Flex direction="row" style={styles.detailText}>
								<Text text="Amount" />
								<Heading
									size="h5"
									testID="transaction-details-amount-test-id"
									text={`${amount} ${currency}`}
								/>
							</Flex>
							<Divider />
						</View>
						<View>
							<Flex direction="row" style={styles.detailText}>
								<Text text="Fee" />
								<Heading
									size="h5"
									testID="transaction-details-fee-test-id"
									text={`${fee} ${currency}`}
								/>
							</Flex>
							<Divider />
						</View>
						<View>
							<Flex direction="row" style={styles.detailText}>
								<Text text="Residual balance" />
								<Heading
									size="h5"
									testID="transaction-details-balance-test-id"
									text={`${balance} ${currency}`}
								/>
							</Flex>
							<Divider />
						</View>

						<Button
							style={styles.btn}
							testID="transaction-details-btn-test-id"
							title={buttonTitle}
							onPress={onPressPrimaryButton}
						/>
					</View>
				</SafeAreaView>
			</ImageBackground>
		</>
	);
};
