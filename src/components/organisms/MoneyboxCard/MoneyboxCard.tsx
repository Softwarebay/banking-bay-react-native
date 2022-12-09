import { StyleProp, View, ViewStyle } from 'react-native';

import {
	Button,
	Card,
	Flex,
	FloatNum,
	Heading,
	Icon,
	ProgressBar,
	Text,
} from 'components/atoms';
import { colors } from 'theme';

import { styles } from './MoneyboxCard.styles';

export interface Props {
	title: string;
	goal: number;
	saved: number;
	currency: string;
	testID: string;
	style?: StyleProp<ViewStyle>;
	onPressWithdrawalButton: () => void;
	onPressExtendButton: () => void;
	onPressTopUpButton: () => void;
}

export const MoneyboxCard = ({
	title,
	saved,
	goal,
	currency,
	style,
	testID,
	onPressWithdrawalButton,
	onPressExtendButton,
	onPressTopUpButton,
}: Props) => {
	const isFinished = saved / goal >= 1;

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
						<Icon color={colors.bodyText} name="piggy-bank" size={27} />
					)}
				</View>
				<Text
					style={styles.goalTitle}
					testID="moneybox-goal-title-test-id"
					text={title}
				/>
				<Flex direction="row" style={styles.goal}>
					<FloatNum
						floatStyle={styles.floatStyle}
						intStyle={styles.intStyle}
						number={`${(goal / 100).toFixed(2)}`}
						testID="moneybox-goal-test-id"
					/>
					<Heading
						size="h5"
						style={styles.currency}
						testID="moneybox-goal-currency-test-id"
						text={currency}
					/>
				</Flex>
			</Flex>

			<ProgressBar
				maxValue={goal}
				style={styles.progressBar}
				testID="moneybox-progress-bar-test-id"
				value={saved}
			/>

			<Flex direction="row" style={styles.saved}>
				<FloatNum
					floatStyle={styles.savedFloat}
					intStyle={styles.savedInt}
					number={`${(saved / 100).toFixed(2)}`}
					style={styles.savedFloatNum}
					testID="moneybox-saved-test-id"
				/>

				<Text
					style={[styles.savedFloat, styles.savedCurrency]}
					testID="moneybox-saved-currency-test-id"
					text={currency}
				/>
			</Flex>

			<Flex direction="row">
				<Button
					style={isFinished ? styles.extendButton : styles.topUpButton}
					testID={`moneybox-${isFinished ? 'extend' : 'top-up'}-btn-test-id`}
					title={isFinished ? 'Extend' : 'Top - Up'}
					type="ternary"
					onPress={onPressSecondaryButton}
				/>
				<Button
					style={styles.withdrawalButton}
					testID="moneybox-withdrawal-btn-test-id"
					title="Withdrawal"
					type="ternary"
					onPress={onPressWithdrawalButton}
				/>
			</Flex>
		</Card>
	);
};
