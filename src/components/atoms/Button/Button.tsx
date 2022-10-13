import { Pressable, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors } from 'theme';
import { styles } from './Button.styles';

interface Props {
	title: string;
	testID: string;
	onPress: () => void;
}

export const Button = ({ title, testID, onPress }: Props) => {
	return (
		<Pressable
			style={({ pressed }) => [pressed && styles.pressed]}
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
