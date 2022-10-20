import { View } from 'react-native';

import { Flex, IconButton, IconProps, Text } from 'components/atoms';

import { styles } from './PaymentOptions.styles';

export interface PaymentOption {
	id: string;
	title: string;
	color: string;
	iconName: IconProps['name'];
	onPress: () => void;
}

interface Props {
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
			color: '#3EB290',
			iconName: 'credit-card',
			onPress: onPressTopUpPayment,
		},
		{
			id: 'mobile-payment',
			title: 'Mobile Payment',
			color: '#FF8A71',
			iconName: 'smartphone',
			onPress: onPressMobilePayment,
		},
		{
			id: 'money-transfer',
			title: 'Money Transfer',
			color: '#55ACEE',
			iconName: 'repeat',
			onPress: onPressMoneyTransfer,
		},
		{
			id: 'make-payment',
			title: 'Make a payment',
			color: '#EECC55',
			iconName: 'dollar-sign',
			onPress: onPressMakePayment,
		},
	];

	return (
		<Flex direction="row" style={styles.options}>
			{paymentOptions.map(({ id, color, iconName, title, onPress }) => (
				<View key={id} style={styles.option}>
					<IconButton
						btnStyle={[styles.btn, { backgroundColor: color }]}
						iconName={iconName}
						testID={`${id}-btn-test-id`}
						onPress={onPress}
					/>
					<Text
						style={styles.optionTitle}
						testID={`${id}-title-test-id`}
						text={title}
					/>
				</View>
			))}
		</Flex>
	);
};
