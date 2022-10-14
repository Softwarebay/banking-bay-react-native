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
	name:
		| 'facebook'
		| 'twitter'
		| 'check'
		| 'eye-off'
		| 'google-plus'
		| 'logo'
		| string;
	testID?: string;
}

export const Icon = ({ name, testID }: Props) => {
	switch (name) {
		case 'facebook':
			return <Facebook testID={testID} />;
		case 'google-plus':
			return <GooglePlus testID={testID} />;
		case 'twitter':
			return <Twitter testID={testID} />;
		case 'logo':
			return <Logo testID={testID} />;
		case 'check':
			return <Check testID={testID} />;
		case 'eye-off':
			return <EyeOff testID={testID} />;
		default:
			return <View testID={testID} />;
	}
};
