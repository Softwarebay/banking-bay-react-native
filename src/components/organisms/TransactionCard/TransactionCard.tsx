import { StyleProp, View, ViewStyle } from 'react-native';

import { Card, Heading, Icon, IconProps, Text } from 'components/atoms';

import { colors } from 'theme';
import { styles } from './TransactionCard.styles';

interface Props {
	id: string;
	iconName: IconProps['name'];
	iconColor: string;
	type: 'incoming' | 'outgoing';
	title: string;
	category: string;
	amount: number;
	style?: StyleProp<ViewStyle>;
}

export const TransactionCard = ({
	id,
	iconName,
	iconColor,
	title,
	category,
	type,
	amount,
	style,
}: Props) => {
	const amountText = `${type === 'incoming' ? '+' : '-'} ${amount}`;
	const amountColor = `${
		type === 'incoming' ? colors.success : colors.mainDark
	}`;

	return (
		<Card style={[styles.container, style]}>
			<View style={styles.iconContainer}>
				<Icon
					color={iconColor}
					name={iconName}
					testID={`${id}-transaction-icon-test-id`}
				/>
			</View>
			<View style={styles.description}>
				<Heading
					size="h6"
					testID={`${id}-transaction-title-test-id`}
					text={title}
				/>
				<Text
					style={styles.category}
					testID={`${id}-transaction-subtitle-test-id`}
					text={category}
				/>
			</View>
			<Heading
				color={amountColor}
				size="h6"
				testID={`${id}-transaction-amount-test-id`}
				text={amountText}
			/>
		</Card>
	);
};
