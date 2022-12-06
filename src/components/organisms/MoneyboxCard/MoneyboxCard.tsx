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
	const progress = saved / goal > 1 ? 100 : (saved / goal) * 100;
	const isFinished = progress >= 100;

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
				<Text style={styles.goalTitle} text={title} />
				<Flex direction="row" style={styles.goal}>
					<FloatNum
						floatStyle={styles.floatStyle}
						intStyle={styles.intStyle}
						number={`${(goal / 100).toFixed(2)}`}
						testID={`goal-${testID}`}
					/>
					<Heading
						size="h5"
						style={styles.currency}
						testID={`currency-${testID}`}
						text={currency}
					/>
				</Flex>
			</Flex>

			<View style={styles.progressContainer}>
				<View
					style={[
						styles.progress,
						styles.progressLine,
						{ width: `${progress}%` },
					]}
				/>
				<View style={[styles.progress, styles.progressShadow]} />
			</View>

			<Flex direction="row" style={styles.saved}>
				<FloatNum
					floatStyle={styles.savedFloat}
					intStyle={styles.savedInt}
					number={`${(saved / 100).toFixed(2)}`}
					style={styles.savedFloatNum}
					testID={`saved-${testID}`}
				/>

				<Text style={styles.savedFloat} text={currency} />
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
