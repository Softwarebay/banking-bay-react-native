import { ImageStyle, Image as RNImage, StyleProp } from 'react-native';

import {
	card1,
	card2,
	onboarding1,
	onboarding2,
	onboarding3,
	registrationIcon,
	successIcon,
} from 'assets/images';

import { styles } from './Image.styles';

export interface Props {
	name:
		| 'onboarding1'
		| 'onboarding2'
		| 'onboarding3'
		| 'card1'
		| 'card2'
		| 'success-icon'
		| 'registration-icon';
	style?: StyleProp<ImageStyle>;
}

// eslint-disable-next-line consistent-return
export const Image = ({ name, style }: Props) => {
	switch (name) {
		case 'onboarding1':
			return (
				<RNImage
					source={onboarding1}
					style={[styles.img, styles.onboarding, style]}
					testID="onboarding1-img-test-id"
				/>
			);
		case 'onboarding2':
			return (
				<RNImage
					source={onboarding2}
					style={[styles.img, styles.onboarding, style]}
					testID="onboarding2-img-test-id"
				/>
			);
		case 'onboarding3':
			return (
				<RNImage
					source={onboarding3}
					style={[styles.img, styles.onboarding, style]}
					testID="onboarding3-img-test-id"
				/>
			);
		case 'card1':
			return (
				<RNImage
					source={card1}
					style={[styles.img, styles.card, style]}
					testID="card1-img-test-id"
				/>
			);
		case 'card2':
			return (
				<RNImage
					source={card2}
					style={[styles.img, styles.card, style]}
					testID="card2-img-test-id"
				/>
			);
		case 'success-icon':
			return (
				<RNImage
					source={successIcon}
					style={[styles.img, styles.successIcon, style]}
					testID="success-icon-img-test-id"
				/>
			);
		case 'registration-icon':
			return (
				<RNImage
					source={registrationIcon}
					style={[styles.img, styles.registrationIcon, style]}
					testID="registration-icon-img-test-id"
				/>
			);
		// no default
	}
};
