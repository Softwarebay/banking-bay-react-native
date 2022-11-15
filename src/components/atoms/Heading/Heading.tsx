import { StyleProp, Text, TextStyle } from 'react-native';

import { styles } from './Heading.styles';

export interface Props {
	text: string;
	size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	color?: string;
	style?: StyleProp<TextStyle>;
	testID?: string;
}

export const Heading = ({ text, size, color, style, testID }: Props) => {
	return (
		<Text
			style={[color ? { color } : styles.default, styles[size], style]}
			testID={testID}
		>
			{text}
		</Text>
	);
};
