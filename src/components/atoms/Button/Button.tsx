import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors } from 'theme';
import { styles } from './Button.styles';

export interface Props {
	title: string;
	type?: 'primary' | 'secondary';
	testID: string;
	onPress: () => void;
	style?: StyleProp<ViewStyle>;
}

export const Button = ({
	title,
	testID,
	style,
	type = 'primary',
	onPress,
}: Props) => {
	const secondaryContainerStyles =
		type === 'secondary' ? [styles.container, styles.secondary] : [];

	return (
		<Pressable
			style={({ pressed }) => [
				pressed && styles.pressed,
				...secondaryContainerStyles,
				style,
			]}
			testID={testID}
			onPress={onPress}
		>
			{type === 'secondary' && (
				<Text style={[styles.text, styles[`${type}Text`]]}>{title}</Text>
			)}

			{type === 'primary' && (
				<LinearGradient
					colors={[colors.buttonLight, colors.buttonDark]}
					end={{ x: 1, y: 1 }}
					start={{ x: 0, y: 0 }}
					style={styles.container}
				>
					<Text style={[styles.text, styles[`${type}Text`]]}>{title}</Text>
				</LinearGradient>
			)}
		</Pressable>
	);
};
