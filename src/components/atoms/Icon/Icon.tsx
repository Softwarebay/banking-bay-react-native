import { View } from 'react-native';

import {
	Check,
	ChevronLeft,
	CreditCard,
	CreditCards,
	DollarSign,
	EyeOff,
	Facebook,
	GooglePlus,
	Logo,
	ProfileIcon,
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
		| 'profile-icon'
		| 'credit-cards'
		| string;
	color: string | 'none';
	testID?: string;
}

export const Icon = ({ name, testID, color }: Props) => {
	switch (name) {
		case 'facebook':
			return <Facebook color={color} testID={testID} />;
		case 'google-plus':
			return <GooglePlus color={color} testID={testID} />;
		case 'twitter':
			return <Twitter color={color} testID={testID} />;
		case 'logo':
			return <Logo color={color} testID={testID} />;
		case 'check':
			return <Check color={color} testID={testID} />;
		case 'eye-off':
			return <EyeOff color={color} testID={testID} />;
		case 'chevron-left':
			return <ChevronLeft color={color} testID={testID} />;
		case 'credit-card':
			return <CreditCard color={color} testID={testID} />;
		case 'smartphone':
			return <Smartphone color={color} testID={testID} />;
		case 'dollar-sign':
			return <DollarSign color={color} testID={testID} />;
		case 'repeat':
			return <Repeat color={color} testID={testID} />;
		case 'profile-icon':
			return <ProfileIcon color={color} testID={testID} />;
		case 'credit-cards':
			return <CreditCards color={color} testID={testID} />;
		default:
			return <View testID={testID} />;
	}
};
