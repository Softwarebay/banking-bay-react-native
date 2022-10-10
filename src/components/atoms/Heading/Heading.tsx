import { Text } from 'react-native';

import { styles } from './Heading.styles';

interface Props {
	text: string;
	size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	color?: string;
	testID: string;
}

export const Heading = ({ text, size, color, testID }: Props) => {
	return (
		<Text
			style={[color ? { color } : styles.default, styles[size]]}
			testID={testID}
		>
			{text}
		</Text>
	);
};
