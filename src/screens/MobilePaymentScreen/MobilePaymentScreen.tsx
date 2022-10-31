import { useNavigation } from '@react-navigation/native';

import { MobilePaymentTemplate } from 'components/templates';

import type { NavigationProp } from 'navigator';

export const MobilePaymentScreen = () => {
	const navigation = useNavigation<NavigationProp>();

	const onSuccessMobilePayment = (mobileNumber: string, amount: number) => {
		console.log('onSuccessMobilePayment', mobileNumber, amount);
		navigation.navigate('SuccessPayment');
	};
	return (
		<MobilePaymentTemplate
			inputPlaceholder="+17 | xxxxxxxxxx"
			onSuccessMobilePayment={onSuccessMobilePayment}
		/>
	);
};
