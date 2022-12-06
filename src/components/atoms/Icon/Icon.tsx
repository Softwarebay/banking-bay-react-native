import {
	Amazon,
	Atm,
	Check,
	ChevronLeft,
	CreditCard,
	CreditCards,
	Deposit,
	DollarSign,
	Ebay,
	EyeOff,
	Facebook,
	FlagUSA,
	GooglePlus,
	Home,
	Info,
	LoanWallet,
	Logo,
	MoneyTransfer,
	MoreTiles,
	NotificationBell,
	Paypal,
	ProfileIcon,
	Repeat,
	Report,
	Search,
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
		| 'profile'
		| 'credit-cards'
		| 'deposits'
		| 'loans'
		| 'notifications'
		| 'dashboard'
		| 'more'
		| 'amazon'
		| 'money-transfer'
		| 'paypal'
		| 'flag-usa'
		| 'search'
		| 'atm'
		| 'ebay'
		| 'home'
		| 'info';
	size: number;
	color?: string;
}

// eslint-disable-next-line consistent-return
export const Icon = ({ name, color, size }: Props) => {
	switch (name) {
		case 'facebook':
			return (
				<Facebook
					color={color}
					height={size}
					testID="facebook-icon-test-id"
					width={size}
				/>
			);
		case 'google-plus':
			return (
				<GooglePlus
					color={color}
					height={size}
					testID="google-plus-icon-test-id"
					width={size}
				/>
			);
		case 'twitter':
			return (
				<Twitter
					color={color}
					height={size}
					testID="twitter-icon-test-id"
					width={size}
				/>
			);
		case 'logo':
			return (
				<Logo
					color={color}
					height={size}
					testID="logo-icon-test-id"
					width={size}
				/>
			);
		case 'check':
			return (
				<Check
					color={color}
					height={size}
					testID="check-icon-test-id"
					width={size}
				/>
			);
		case 'eye-off':
			return (
				<EyeOff
					color={color}
					height={size}
					testID="eye-off-icon-test-id"
					width={size}
				/>
			);
		case 'chevron-left':
			return (
				<ChevronLeft
					color={color}
					height={size}
					testID="chevron-left-icon-test-id"
					width={size}
				/>
			);
		case 'credit-card':
			return (
				<CreditCard
					color={color}
					height={size}
					testID="credit-card-icon-test-id"
					width={size}
				/>
			);
		case 'smartphone':
			return (
				<Smartphone
					color={color}
					height={size}
					testID="smartphone-icon-test-id"
					width={size}
				/>
			);
		case 'dollar-sign':
			return (
				<DollarSign
					color={color}
					height={size}
					testID="dollar-sign-icon-test-id"
					width={size}
				/>
			);
		case 'repeat':
			return (
				<Repeat
					color={color}
					height={size}
					testID="repeat-icon-test-id"
					width={size}
				/>
			);
		case 'profile':
			return (
				<ProfileIcon
					color={color}
					height={size}
					testID="profile-icon-test-id"
					width={size}
				/>
			);
		case 'credit-cards':
			return (
				<CreditCards
					color={color}
					height={size}
					testID="credit-cards-icon-test-id"
					width={size}
				/>
			);
		case 'deposits':
			return (
				<Deposit
					color={color}
					height={size}
					testID="deposits-icon-test-id"
					width={size}
				/>
			);
		case 'more':
			return (
				<MoreTiles
					color={color}
					height={size}
					testID="more-icon-test-id"
					width={size}
				/>
			);
		case 'dashboard':
			return (
				<Report
					color={color}
					height={size}
					testID="dashboard-icon-test-id"
					width={size}
				/>
			);
		case 'notifications':
			return (
				<NotificationBell
					color={color}
					height={size}
					testID="notifications-icon-test-id"
					width={size}
				/>
			);
		case 'loans':
			return (
				<LoanWallet
					color={color}
					height={size}
					testID="loans-icon-test-id"
					width={size}
				/>
			);
		case 'paypal':
			return (
				<Paypal
					color={color}
					height={size}
					testID="paypal-icon-test-id"
					width={size}
				/>
			);
		case 'amazon':
			return (
				<Amazon
					color={color}
					height={size}
					testID="amazon-icon-test-id"
					width={size}
				/>
			);
		case 'money-transfer':
			return (
				<MoneyTransfer
					color={color}
					height={size}
					testID="money-transfer-icon-test-id"
					width={size}
				/>
			);
		case 'flag-usa':
			return (
				<FlagUSA
					color={color}
					height={size}
					testID="flag-usa-icon-test-id"
					width={size}
				/>
			);
		case 'search':
			return (
				<Search
					color={color}
					height={size}
					testID="search-icon-test-id"
					width={size}
				/>
			);
		case 'home':
			return (
				<Home
					color={color}
					height={size}
					testID="home-icon-test-id"
					width={size}
				/>
			);
		case 'atm':
			return (
				<Atm
					color={color}
					height={size}
					testID="atm-icon-test-id"
					width={size}
				/>
			);
		case 'ebay':
			return (
				<Ebay
					color={color}
					height={size}
					testID="ebay-icon-test-id"
					width={size}
				/>
			);
		case 'info':
			return (
				<Info
					color={color}
					height={size}
					testID="info-icon-test-id"
					width={size}
				/>
			);
		// no default
	}
};
