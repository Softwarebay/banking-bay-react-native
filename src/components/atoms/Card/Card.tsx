import { StyleProp, View, ViewStyle } from 'react-native';

import { styles } from './Card.styles';

interface Props {
	children: React.ReactNode;
	style?: StyleProp<ViewStyle>;
	testID?: string;
}

export const Card = ({ children, style, testID }: Props) => {
	return (
		<View style={[styles.card, style]} testID={testID}>
			{children}
		</View>
	);
};
