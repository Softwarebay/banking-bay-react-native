import { Text as RNText } from 'react-native';

import { styles } from './Text.styles';

interface Props {
	text: string;
	testID?: string;
}

export const Text = ({ text, testID }: Props) => {
	return (
		<RNText style={styles.text} testID={testID}>
			{text}
		</RNText>
	);
};
