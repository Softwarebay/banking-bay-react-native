import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors } from 'theme';
import { styles } from './Button.styles';

export interface Props {
	title: string;
	type?: 'primary' | 'secondary' | 'ternary';
	testID: string;
	onPress: () => void;
	style?: StyleProp<ViewStyle>;
	testOnly_pressed?: boolean;
}

export const Button = ({
	title,
	testID,
	style,
	type = 'primary',
	onPress,
	testOnly_pressed,
}: Props) => {
	let containerStyles: StyleProp<ViewStyle>[] = [];

	switch (type) {
		case 'secondary':
			containerStyles = [styles.container, styles.secondary];
			break;
		case 'ternary':
			containerStyles = [styles.container, styles.ternary];
			break;
		default:
			containerStyles = [];
			break;
	}

	return (
		<Pressable
			style={({ pressed }) => [
				pressed && styles.pressed,
				...containerStyles,
				style,
			]}
			testID={testID}
			testOnly_pressed={testOnly_pressed}
			onPress={onPress}
		>
			{type === 'secondary' && (
				<Text style={[styles.text, styles.secondaryText]}>{title}</Text>
			)}

			{type === 'ternary' && (
				<Text style={[styles.text, styles.ternaryText]}>{title}</Text>
			)}

			{type === 'primary' && (
				<LinearGradient
					colors={[colors.buttonLight, colors.buttonDark]}
					end={{ x: 1, y: 1 }}
					start={{ x: 0, y: 0 }}
					style={styles.container}
				>
					<Text style={styles.text}>{title}</Text>
				</LinearGradient>
			)}
		</Pressable>
	);
};
