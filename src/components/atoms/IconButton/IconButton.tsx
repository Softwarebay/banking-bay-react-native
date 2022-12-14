import { Pressable, StyleProp, ViewStyle } from 'react-native';

import { Icon, Props as IconProps } from '../Icon/Icon';

import { styles } from './IconButton.styles';

export interface Props {
	iconName: IconProps['name'];
	iconColor: IconProps['color'];
	iconSize: number;
	onPress: () => void;
	testID: string;
	btnStyle?: StyleProp<ViewStyle>;
	testOnly_pressed?: boolean;
}

export const IconButton = ({
	iconName,
	iconColor,
	btnStyle,
	testID,
	onPress,
	iconSize,
	testOnly_pressed,
}: Props) => {
	return (
		<Pressable
			hitSlop={20}
			style={({ pressed }) => [styles.btn, btnStyle, pressed && styles.pressed]}
			testID={testID}
			testOnly_pressed={testOnly_pressed}
			onPress={onPress}
		>
			<Icon color={iconColor} name={iconName} size={iconSize} />
		</Pressable>
	);
};
