import { Pressable, StyleProp, Text, TextStyle } from 'react-native';

import { styles } from './Link.styles';

export interface Props {
	text: string;
	onPress: () => void;
	testID: string;
	style?: StyleProp<TextStyle>;
	testOnly_pressed?: boolean;
}

export const Link = ({
	text,
	onPress,
	testID,
	style,
	testOnly_pressed,
}: Props) => {
	return (
		<Pressable
			hitSlop={20}
			style={({ pressed }) => pressed && styles.pressed}
			testID={testID}
			testOnly_pressed={testOnly_pressed}
			onPress={onPress}
		>
			<Text style={[styles.link, style]}>{text}</Text>
		</Pressable>
	);
};
