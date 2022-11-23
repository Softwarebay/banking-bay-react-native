import { IconProps } from 'components/atoms';
import { TransactionDetailsTemplate } from 'components/templates';
import { colors } from 'theme';

interface TransactionDetails {
	date: string;
	category: string;
	categoryIcon: IconProps['name'];
	iconColor: string;
	iconBg: string;
	amount: string;
	isIncoming: boolean;
	sentTo: string;
	card: string;
	currency: string;
	fee: string;
	balance: string;
}

const transactionDetails: TransactionDetails = {
	date: 'Sep 10, 2022 at 11:34 AM',
	category: 'Mobile Payment',
	categoryIcon: 'smartphone',
	iconColor: colors.white,
	iconBg: '#FF8A71',
	amount: '10.00',
	isIncoming: false,
	sentTo: 'Hillary Holmes',
	card: '**** 4253',
	currency: 'USD',
	fee: '0.00',
	balance: '4853.27',
};

export const TransactionDetailsScreen = () => {
	const onDownloadPDF = () => {
		console.log('onDownloadPDF');
	};

	return (
		<TransactionDetailsTemplate
			buttonTitle="Download PDF"
			transactionDetails={transactionDetails}
			onPressPrimaryButton={onDownloadPDF}
		/>
	);
};
