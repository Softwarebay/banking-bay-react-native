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
	IconProps,
	Text,
} from 'components/atoms';

import { bgMain } from 'assets/backgrounds';
import { colors } from 'theme';

import { styles } from './TransactionDetailsTemplate.styles';

export interface Props {
	transactionDetails: TransactionDetails;
	buttonTitle: string;
	onPressPrimaryButton: () => void;
}

export interface TransactionDetails {
	date: string;
	category: string;
	categoryIcon: IconProps['name'];
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
			<ImageBackground source={bgMain} style={styles.backgroundImg}>
				<SafeAreaView style={styles.container}>
					<View style={styles.header}>
						<View>
							<View
								style={[
									styles.iconContainer,
									styles.categoryIcon,
									{ backgroundColor: iconBg },
								]}
							>
								<Icon color={iconColor} name={categoryIcon} size={30} />
							</View>
							<Text
								style={styles.categoryText}
								testID="transaction-details-header-category-test-id"
								text={category}
							/>
						</View>
						<Text
							style={styles.date}
							testID="transaction-details-header-date-test-id"
							text={date}
						/>

						<FloatNum
							floatStyle={[styles.amountText, styles.amountFloat]}
							intStyle={[styles.amountText, styles.amountInt]}
							number={amount}
							prefix={`${isIncoming ? '+' : '-'} $ `}
							style={styles.amount}
							testID="transaction-details-header-amount-test-id"
						/>

						<Text
							style={styles.sentToText}
							testID="transaction-details-header-sent-to-test-id"
							text={`sent to ${sentTo}`}
						/>

						<Flex direction="row" style={styles.status}>
							<View style={[styles.iconContainer, styles.statusIcon]}>
								<Icon color={colors.white} name="check" size={12} />
							</View>
							<Text
								style={styles.statusText}
								testID="transaction-details-header-status-text-test-id"
								text="Success"
							/>
						</Flex>
					</View>

					<Divider testID="transaction-details-divider-test-id" />
					<View style={styles.content}>
						<View>
							<Flex
								direction="row"
								style={styles.detailText}
								testID="transaction-details-row-sent-to-test-id"
							>
								<Text text="Sent to" />
								<Heading size="h5" text={sentTo} />
							</Flex>
							<Divider />
						</View>
						<View>
							<Flex
								direction="row"
								style={styles.detailText}
								testID="transaction-details-row-card-test-id"
							>
								<Text text="Card" />
								<Heading size="h5" text={card} />
							</Flex>
							<Divider />
						</View>
						<View>
							<Flex
								direction="row"
								style={styles.detailText}
								testID="transaction-details-row-amount-test-id"
							>
								<Text text="Amount" />
								<Heading size="h5" text={`${amount} ${currency}`} />
							</Flex>
							<Divider />
						</View>
						<View>
							<Flex
								direction="row"
								style={styles.detailText}
								testID="transaction-details-row-fee-test-id"
							>
								<Text text="Fee" />
								<Heading size="h5" text={`${fee} ${currency}`} />
							</Flex>
							<Divider />
						</View>
						<View>
							<Flex
								direction="row"
								style={styles.detailText}
								testID="transaction-details-row-balance-test-id"
							>
								<Text text="Residual balance" />
								<Heading size="h5" text={`${balance} ${currency}`} />
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
