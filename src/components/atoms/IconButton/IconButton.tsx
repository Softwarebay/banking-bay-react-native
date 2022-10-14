import { Pressable, StyleProp, ViewStyle } from 'react-native';

import { Icon, Props as IconProps } from '../Icon/Icon';

import { styles } from './IconButton.styles';

interface Props {
	iconName: IconProps['name'];
	onPress: () => void;
	testID: string;
	btnStyle?: StyleProp<ViewStyle>;
}

export const IconButton = ({
	iconName,

	btnStyle,
	testID,
	onPress,
}: Props) => {
	return (
		<Pressable
			hitSlop={10}
			style={[styles.btn, btnStyle]}
			testID={testID}
			onPress={onPress}
		>
			<Icon name={iconName} />
		</Pressable>
	);
};
