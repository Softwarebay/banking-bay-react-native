import { ImageStyle, Image as RNImage, StyleProp, View } from 'react-native';

import {
	card1,
	card2,
	onboarding1,
	onboarding2,
	onboarding3,
} from 'assets/images';

import { styles } from './Image.styles';

export interface Props {
	name: 'onboarding1' | 'onboarding2' | 'onboarding3' | 'card1' | 'card2';
	style?: StyleProp<ImageStyle>;
}

export const Image = ({ name, style }: Props) => {
	switch (name) {
		case 'onboarding1':
			return (
				<RNImage
					source={onboarding1}
					style={[styles.img, styles.onboarding, style]}
				/>
			);
		case 'onboarding2':
			return (
				<RNImage
					source={onboarding2}
					style={[styles.img, styles.onboarding, style]}
				/>
			);
		case 'onboarding3':
			return (
				<RNImage
					source={onboarding3}
					style={[styles.img, styles.onboarding, style]}
				/>
			);
		case 'card1':
			return (
				<RNImage source={card1} style={[styles.img, styles.card, style]} />
			);
		case 'card2':
			return (
				<RNImage source={card2} style={[styles.img, styles.card, style]} />
			);
		default:
			return <View />;
	}
};
