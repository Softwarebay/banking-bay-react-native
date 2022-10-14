import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { styles } from './IconButton.styles';

interface Props {
	icon: React.ReactElement<SvgProps>;
	onPress: () => void;
	testID: string;
	btnStyle?: StyleProp<ViewStyle>;
}

export const IconButton = ({ icon, testID, onPress, btnStyle }: Props) => {
	return (
		<Pressable
			hitSlop={10}
			style={[styles.btn, btnStyle]}
			testID={testID}
			onPress={onPress}
		>
			{icon}
		</Pressable>
	);
};
