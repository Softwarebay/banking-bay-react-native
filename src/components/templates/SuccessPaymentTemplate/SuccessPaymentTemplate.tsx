import { ImageBackground, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Button, FloatNum, Heading, Image, Text } from 'components/atoms';

import { bgSummary } from 'assets/backgrounds';
import { colors } from 'theme';

import { styles } from './SuccessPaymentTemplate.styles';

interface Props {
	amount: string;
	primaryButtonTitle: string;
	secondaryButtonTitle: string;
	onPressPrimaryButton: () => void;
	onPressSecondaryButton: () => void;
}

export const SuccessPaymentTemplate = ({
	amount,
	primaryButtonTitle,
	secondaryButtonTitle,
	onPressPrimaryButton,
	onPressSecondaryButton,
}: Props) => {
	return (
		<>
			<StatusBar style="dark" />
			<ImageBackground source={bgSummary} style={styles.backgroundImg}>
				<View style={styles.container}>
					<View style={styles.center}>
						<Image name="success-icon" style={styles.successIcon} />
						<Heading
							color={colors.green}
							size="h2"
							testID="payment-success-heading-test-id"
							text="Success!"
						/>
						<FloatNum
							floatStyle={[styles.amountText, styles.amountFloat]}
							intStyle={[styles.amountText, styles.amountInt]}
							number={amount}
							prefix="$ "
							style={styles.amount}
						/>
						<Text
							style={styles.successMessage}
							testID="payment-success-message-test-id"
							text="Your payment has been processed!"
						/>
					</View>
					<Button
						style={styles.secondaryBtn}
						testID="payment-success-secondary-btn-test-id"
						title={secondaryButtonTitle}
						type="secondary"
						onPress={onPressSecondaryButton}
					/>
					<Button
						testID="payment-success-primary-btn-test-id"
						title={primaryButtonTitle}
						onPress={onPressPrimaryButton}
					/>
				</View>
			</ImageBackground>
		</>
	);
};
