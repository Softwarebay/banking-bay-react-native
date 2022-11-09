import { ImageStyle, Image as RNImage, StyleProp, View } from 'react-native';

import { onboarding1, onboarding2, onboarding3 } from 'assets/images';

import { styles } from './Image.styles';

export interface Props {
	name: 'onboarding1' | 'onboarding2' | 'onboarding3';
	style?: StyleProp<ImageStyle>;
}

export const Image = ({ name, style }: Props) => {
	switch (name) {
		case 'onboarding1':
			return <RNImage source={onboarding1} style={[styles.img, style]} />;
		case 'onboarding2':
			return <RNImage source={onboarding2} style={[styles.img, style]} />;
		case 'onboarding3':
			return <RNImage source={onboarding3} style={[styles.img, style]} />;
		default:
			return <View />;
	}
};
