import { Pressable, StyleProp, ViewStyle } from 'react-native';

import { Icon, Props as IconProps } from '../Icon/Icon';

import { styles } from './IconButton.styles';

interface Props {
	iconName: IconProps['name'];
	iconColor: IconProps['color'];
	onPress: () => void;
	testID: string;
	btnStyle?: StyleProp<ViewStyle>;
}

export const IconButton = ({
	iconName,
	iconColor,
	btnStyle,
	testID,
	onPress,
}: Props) => {
	return (
		<Pressable
			hitSlop={20}
			style={({ pressed }) => [styles.btn, btnStyle, pressed && styles.pressed]}
			testID={testID}
			onPress={onPress}
		>
			<Icon color={iconColor} name={iconName} />
		</Pressable>
	);
};
