import { SuccessPaymentTemplate } from 'components/templates';

export const SuccessPaymentScreen = () => {
	const onDone = () => {
		console.log('onPressDone');
	};

	const onSendReceipt = () => {
		console.log('onPressSendReceipt');
	};

	return (
		<SuccessPaymentTemplate
			amount="10.00"
			primaryButtonTitle="Done"
			secondaryButtonTitle="Send Receipt"
			onPressPrimaryButton={onDone}
			onPressSecondaryButton={onSendReceipt}
		/>
	);
};
