import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { MobilePaymentTemplate } from 'components/templates';

import type { DashboardStackParamList } from 'navigator/DashboardStack';

export const MobilePaymentScreen = () => {
	const navigation =
		useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

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
