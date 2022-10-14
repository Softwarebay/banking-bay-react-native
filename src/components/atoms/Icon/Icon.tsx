import { View } from 'react-native';

import {
	Check,
	EyeOff,
	Facebook,
	GooglePlus,
	Logo,
	Twitter,
} from 'assets/icons';

export interface Props {
	name: 'facebook' | 'twitter' | 'check' | 'eye-off' | 'google-plus' | 'logo';
	height?: number;
	width?: number;
	testID?: string;
}

export const Icon = ({ name, height, width, testID }: Props) => {
	switch (name) {
		case 'facebook':
			return <Facebook height={height} testID={testID} width={width} />;
		case 'google-plus':
			return <GooglePlus height={height} testID={testID} width={width} />;
		case 'twitter':
			return <Twitter height={height} testID={testID} width={width} />;
		case 'logo':
			return <Logo height={height} testID={testID} width={width} />;
		case 'check':
			return <Check height={height} testID={testID} width={width} />;
		case 'eye-off':
			return <EyeOff height={height} testID={testID} width={width} />;
		default:
			return <View testID={testID} />;
	}
};
