import { useRef } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
	Button,
	Card,
	Flex,
	Heading,
	InputFieldHandle,
	Text,
} from 'components/atoms';
import { MobileNumberInput } from 'components/molecules';

import { colors } from 'theme';
import { styles } from './MobilePaymentTemplate.styles';

interface Props {
	inputPlaceholder: string;
	onSuccessMobilePayment: (mobileNumber: string, amount: number) => void;
}

export const MobilePaymentTemplate = ({
	inputPlaceholder,
	onSuccessMobilePayment,
}: Props) => {
	const mobileNumberRef = useRef<InputFieldHandle>(null);
	const amount = '10.00';
	const [integer, float] = amount.split('.');

	const onPressConfirmMobilePayment = () => {
		const mobileNumber = mobileNumberRef.current?.getValue();

		if (mobileNumber) {
			onSuccessMobilePayment(mobileNumber, parseFloat(amount));
		}
	};

	return (
		<>
			<StatusBar backgroundColor={colors.screenBackground} style="dark" />
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<MobileNumberInput
						ref={mobileNumberRef}
						flagIcon="flag-usa"
						placeholder={inputPlaceholder}
						testID="mobile-payment-input-test-id"
					/>
					<Text
						style={[styles.text, styles.balanceText]}
						testID="mobile-payment-balance-text-test-id"
						text="Your balance: 4863.27 USD"
					/>
					<Flex direction="row">
						<Card style={styles.amountCard}>
							<Heading
								size="h3"
								style={styles.amountHeading}
								testID="mobile-payment-amount-integer-test-id"
								text={`$${integer}.`}
							/>
							<Heading
								size="h5"
								style={styles.amountHeading}
								testID="mobile-payment-amount-float-test-id"
								text={`${float}`}
							/>
						</Card>
						<Text
							style={styles.text}
							testID="mobile-payment-fees-text-test-id"
							text="No fees"
						/>
					</Flex>

					<Button
						style={styles.button}
						testID="confirm-mobile-payment-btn-test-id"
						title="Confirm"
						onPress={onPressConfirmMobilePayment}
					/>
				</View>
			</TouchableWithoutFeedback>
		</>
	);
};
