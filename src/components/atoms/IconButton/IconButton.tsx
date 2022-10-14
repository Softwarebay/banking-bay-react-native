import { Pressable, StyleProp, ViewStyle } from 'react-native';

import { Icon, Props as IconProps } from '../Icon/Icon';

import { styles } from './IconButton.styles';

interface Props {
	iconName: IconProps['name'];
	onPress: () => void;
	testID: string;
	btnStyle?: StyleProp<ViewStyle>;
	iconStyle?: {
		width: number;
		height: number;
	};
}

export const IconButton = ({
	iconName,
	iconStyle,
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
			<Icon
				height={iconStyle?.height}
				name={iconName}
				width={iconStyle?.width}
			/>
		</Pressable>
	);
};
