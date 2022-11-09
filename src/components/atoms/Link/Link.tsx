import { Pressable, StyleProp, Text, TextStyle } from 'react-native';

import { styles } from './Link.styles';

export interface Props {
	text: string;
	onPress: () => void;
	testID: string;
	style?: StyleProp<TextStyle>;
}

export const Link = ({ text, onPress, testID, style }: Props) => {
	return (
		<Pressable
			hitSlop={20}
			style={({ pressed }) => pressed && styles.pressed}
			testID={testID}
			onPress={onPress}
		>
			<Text style={[styles.link, style]}>{text}</Text>
		</Pressable>
	);
};
