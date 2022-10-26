import { MobilePaymentTemplate } from 'components/templates';

export const MobilePaymentScreen = () => {
	const onSuccessMobilePayment = (mobileNumber: string, amount: number) => {
		console.log('onSuccessMobilePayment', mobileNumber, amount);
	};
	return (
		<MobilePaymentTemplate
			inputPlaceholder="+17 | xxxxxxxxxx"
			onSuccessMobilePayment={onSuccessMobilePayment}
		/>
	);
};
