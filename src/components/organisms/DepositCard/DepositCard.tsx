import { StyleProp, View, ViewStyle } from 'react-native';

import {
	Button,
	Card,
	Flex,
	FloatNum,
	Heading,
	Icon,
	Text,
} from 'components/atoms';
import { colors } from 'theme';

import { styles } from './DepositCard.styles';

export interface Props {
	isFinished: boolean;
	amount: number;
	currency: string;
	date: string;
	lastIncome: number;
	rate: number;
	testID: string;
	onPressWithdrawalButton: () => void;
	onPressExtendButton: () => void;
	onPressTopUpButton: () => void;
	style?: StyleProp<ViewStyle>;
}

export const DepositCard = ({
	isFinished,
	amount,
	currency,
	date,
	rate,
	lastIncome,
	testID,
	onPressWithdrawalButton,
	onPressExtendButton,
	onPressTopUpButton,
	style,
}: Props) => {
	const onPressSecondaryButton = isFinished
		? onPressExtendButton
		: onPressTopUpButton;

	return (
		<Card direction="column" style={[styles.container, style]} testID={testID}>
			<Flex direction="row">
				<View style={styles.iconContainer}>
					{isFinished ? (
						<View style={styles.iconBackground}>
							<Icon color={colors.white} name="check" size={14} />
						</View>
					) : (
						<Icon color={colors.mainDark} name="deposits" size={27} />
					)}
				</View>
				<Flex direction="column" style={styles.header}>
					<Flex direction="row" style={styles.row}>
						<FloatNum
							floatStyle={styles.floatStyle}
							intStyle={styles.intStyle}
							number={`${(amount / 100).toFixed(2)}`}
							testID={`amount-${testID}`}
						/>
						<Heading
							size="h5"
							style={styles.currency}
							testID={`currency-${testID}`}
							text={currency}
						/>
						<Heading
							size="h5"
							style={styles.rate}
							testID={`rate-${testID}`}
							text={`${(rate * 100).toFixed(0)}%`}
						/>
					</Flex>
					<Flex direction="row" style={styles.row}>
						<Text
							style={styles.subheaderText}
							testID={`date-${testID}`}
							text={date}
						/>
						<Text
							style={[styles.subheaderText, styles.lastIncome]}
							testID={`last-income-${testID}`}
							text={`+ ${(lastIncome / 100).toFixed(2)}`}
						/>
					</Flex>
				</Flex>
			</Flex>
			<Flex direction="row">
				<Button
					style={isFinished ? styles.extendButton : styles.topUpButton}
					testID={`${isFinished ? 'extend' : 'top-up'}-btn-${testID}`}
					title={isFinished ? 'Extend' : 'Top - Up'}
					type="ternary"
					onPress={onPressSecondaryButton}
				/>
				<Button
					style={styles.withdrawalButton}
					testID={`withdrawal-btn-${testID}`}
					title="Withdrawal"
					type="ternary"
					onPress={onPressWithdrawalButton}
				/>
			</Flex>
		</Card>
	);
};
