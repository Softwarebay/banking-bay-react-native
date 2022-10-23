import { View } from 'react-native';

import {
	Amazon,
	Check,
	ChevronLeft,
	CreditCard,
	CreditCards,
	Deposit,
	DollarSign,
	EyeOff,
	Facebook,
	GooglePlus,
	LoanWallet,
	Logo,
	MoneyTransfer,
	MoreTiles,
	NotificationBell,
	Paypal,
	ProfileIcon,
	Repeat,
	Report,
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
		| 'deposits'
		| 'loans'
		| 'notifications'
		| 'dashboard'
		| 'more'
		| 'amazon'
		| 'money-transfer'
		| 'paypal'
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
		case 'deposits':
			return <Deposit color={color} testID={testID} />;
		case 'more':
			return <MoreTiles color={color} testID={testID} />;
		case 'dashboard':
			return <Report color={color} testID={testID} />;
		case 'notifications':
			return <NotificationBell color={color} testID={testID} />;
		case 'loans':
			return <LoanWallet color={color} testID={testID} />;
		case 'paypal':
			return <Paypal color={color} testID={testID} />;
		case 'amazon':
			return <Amazon color={color} testID={testID} />;
		case 'money-transfer':
			return <MoneyTransfer color={color} testID={testID} />;
		default:
			return <View testID={testID} />;
	}
};
