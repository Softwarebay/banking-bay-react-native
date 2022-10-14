import { StyleProp, View, ViewStyle } from 'react-native';

import { styles } from './Flex.styles';

interface Props {
	direction: 'column' | 'row';
	children: React.ReactNode;
	style?: StyleProp<ViewStyle>;
	testID?: string;
}

export const Flex = ({ direction, children, style, testID }: Props) => {
	return (
		<View
			style={[styles.flex, { flexDirection: direction }, style]}
			testID={testID}
		>
			{children}
		</View>
	);
};
