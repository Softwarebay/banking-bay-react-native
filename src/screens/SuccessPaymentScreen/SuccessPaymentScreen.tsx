import { useNavigation } from '@react-navigation/native';

import { SuccessPaymentTemplate } from 'components/templates';
import type { NavigationProp } from 'navigation';

export const SuccessPaymentScreen = () => {
	const navigation = useNavigation<NavigationProp>();

	const onDone = () => {
		navigation.navigate('Root');
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
