import { View } from 'react-native';

import {
	Check,
	ChevronLeft,
	CreditCard,
	DollarSign,
	EyeOff,
	Facebook,
	GooglePlus,
	Logo,
	Repeat,
	Smartphone,
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
		| 'chevron-left'
		| 'credit-card'
		| 'dollar-sign'
		| 'repeat'
		| 'smartphone'
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
		case 'chevron-left':
			return <ChevronLeft testID={testID} />;
		case 'credit-card':
			return <CreditCard testID={testID} />;
		case 'smartphone':
			return <Smartphone testID={testID} />;
		case 'dollar-sign':
			return <DollarSign testID={testID} />;
		case 'repeat':
			return <Repeat testID={testID} />;
		default:
			return <View testID={testID} />;
	}
};
