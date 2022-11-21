import { Pressable, StyleProp, View, ViewStyle } from 'react-native';

import { Card, Heading, Icon, IconProps, Text } from 'components/atoms';

import { colors } from 'theme';
import { styles } from './TransactionCard.styles';

export interface Props {
	id: string;
	iconName: IconProps['name'];
	iconColor?: string;
	type: 'incoming' | 'outgoing';
	title: string;
	category: string;
	amount: number;
	onPress: () => void;
	style?: StyleProp<ViewStyle>;
	testID?: string;
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
	testID,
	onPress,
}: Props) => {
	const amountText = `${type === 'incoming' ? '+' : '-'} ${amount.toFixed(2)}`;
	const amountColor = `${type === 'incoming' ? colors.green : colors.mainDark}`;

	return (
		<Pressable testID={testID} onPress={onPress}>
			{({ pressed }) => (
				<Card style={[styles.container, style, pressed && styles.pressed]}>
					<View style={styles.iconContainer}>
						<Icon color={iconColor} name={iconName} size={25} />
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
			)}
		</Pressable>
	);
};
