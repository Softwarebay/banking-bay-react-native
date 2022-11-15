import { Text as RNText, StyleProp, TextStyle } from 'react-native';

import { styles } from './Text.styles';

export interface Props {
	text: string;
	style?: StyleProp<TextStyle>;
	testID?: string;
}

export const Text = ({ text, style, testID }: Props) => {
	return (
		<RNText style={[styles.text, style]} testID={testID}>
			{text}
		</RNText>
	);
};
