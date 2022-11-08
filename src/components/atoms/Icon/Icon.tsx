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
	FlagUSA,
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
		| 'flag-usa';
	size: number;
	color?: string;
	testID?: string;
}

export const Icon = ({ name, testID, color, size }: Props) => {
	switch (name) {
		case 'facebook':
			return (
				<Facebook color={color} height={size} testID={testID} width={size} />
			);
		case 'google-plus':
			return (
				<GooglePlus color={color} height={size} testID={testID} width={size} />
			);
		case 'twitter':
			return (
				<Twitter color={color} height={size} testID={testID} width={size} />
			);
		case 'logo':
			return <Logo color={color} height={size} testID={testID} width={size} />;
		case 'check':
			return <Check color={color} height={size} testID={testID} width={size} />;
		case 'eye-off':
			return (
				<EyeOff color={color} height={size} testID={testID} width={size} />
			);
		case 'chevron-left':
			return (
				<ChevronLeft color={color} height={size} testID={testID} width={size} />
			);
		case 'credit-card':
			return (
				<CreditCard color={color} height={size} testID={testID} width={size} />
			);
		case 'smartphone':
			return (
				<Smartphone color={color} height={size} testID={testID} width={size} />
			);
		case 'dollar-sign':
			return (
				<DollarSign color={color} height={size} testID={testID} width={size} />
			);
		case 'repeat':
			return (
				<Repeat color={color} height={size} testID={testID} width={size} />
			);
		case 'profile-icon':
			return (
				<ProfileIcon color={color} height={size} testID={testID} width={size} />
			);
		case 'credit-cards':
			return (
				<CreditCards color={color} height={size} testID={testID} width={size} />
			);
		case 'deposits':
			return (
				<Deposit color={color} height={size} testID={testID} width={size} />
			);
		case 'more':
			return (
				<MoreTiles color={color} height={size} testID={testID} width={size} />
			);
		case 'dashboard':
			return (
				<Report color={color} height={size} testID={testID} width={size} />
			);
		case 'notifications':
			return (
				<NotificationBell
					color={color}
					height={size}
					testID={testID}
					width={size}
				/>
			);
		case 'loans':
			return (
				<LoanWallet color={color} height={size} testID={testID} width={size} />
			);
		case 'paypal':
			return (
				<Paypal color={color} height={size} testID={testID} width={size} />
			);
		case 'amazon':
			return (
				<Amazon color={color} height={size} testID={testID} width={size} />
			);
		case 'money-transfer':
			return (
				<MoneyTransfer
					color={color}
					height={size}
					testID={testID}
					width={size}
				/>
			);
		case 'flag-usa':
			return (
				<FlagUSA color={color} height={size} testID={testID} width={size} />
			);
		default:
			return <View testID={testID} />;
	}
};
