import { View } from 'react-native';

import { Flex, IconButton, IconProps, Text } from 'components/atoms';

import { colors } from 'theme';
import { styles } from './PaymentOptions.styles';

export interface PaymentOption {
	id: string;
	title: string;
	btnColor: string;
	iconColor: string;
	iconName: IconProps['name'];
	onPress: () => void;
}

export interface Props {
	onPressTopUpPayment: () => void;
	onPressMobilePayment: () => void;
	onPressMoneyTransfer: () => void;
	onPressMakePayment: () => void;
}

export const PaymentOptions = ({
	onPressTopUpPayment,
	onPressMobilePayment,
	onPressMoneyTransfer,
	onPressMakePayment,
}: Props) => {
	const paymentOptions: PaymentOption[] = [
		{
			id: 'top-up-payment',
			title: 'Top-Up Payment',
			btnColor: '#3EB290',
			iconColor: colors.white,
			iconName: 'credit-card',
			onPress: onPressTopUpPayment,
		},
		{
			id: 'mobile-payment',
			title: 'Mobile Payment',
			btnColor: '#FF8A71',
			iconColor: colors.white,
			iconName: 'smartphone',
			onPress: onPressMobilePayment,
		},
		{
			id: 'money-transfer',
			title: 'Money Transfer',
			btnColor: '#55ACEE',
			iconColor: colors.white,
			iconName: 'repeat',
			onPress: onPressMoneyTransfer,
		},
		{
			id: 'make-payment',
			title: 'Make a Payment',
			btnColor: '#EECC55',
			iconColor: colors.white,
			iconName: 'dollar-sign',
			onPress: onPressMakePayment,
		},
	];

	return (
		<Flex direction="row" style={styles.options}>
			{paymentOptions.map(
				({ id, btnColor, iconName, iconColor, title, onPress }) => (
					<View key={id} style={styles.option}>
						<IconButton
							btnStyle={[styles.btn, { backgroundColor: btnColor }]}
							iconColor={iconColor}
							iconName={iconName}
							iconSize={25}
							testID={`${id}-icon-btn-test-id`}
							onPress={onPress}
						/>
						<Text
							style={styles.optionTitle}
							testID={`${id}-title-test-id`}
							text={title}
						/>
					</View>
				)
			)}
		</Flex>
	);
};
