import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors } from 'theme';
import { styles } from './Button.styles';

interface Props {
	title: string;
	testID: string;
	onPress: () => void;
	style?: StyleProp<ViewStyle>;
}

export const Button = ({ title, testID, style, onPress }: Props) => {
	return (
		<Pressable
			style={({ pressed }) => [pressed && styles.pressed, style]}
			testID={testID}
			onPress={onPress}
		>
			<LinearGradient
				colors={[colors.buttonLight, colors.buttonDark]}
				end={{ x: 1, y: 1 }}
				start={{ x: 0, y: 0 }}
				style={styles.container}
			>
				<Text style={styles.text}>{title}</Text>
			</LinearGradient>
		</Pressable>
	);
};
