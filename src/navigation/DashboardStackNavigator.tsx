import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
	MobilePaymentScreen,
	SuccessPaymentScreen,
	TransactionDetailsScreen,
} from 'screens';

import { headerOptions } from './headerOptions';

export type DashboardStackParamList = {
	MobilePayment: undefined;
	SuccessPayment: undefined;
	TransactionDetails: undefined;
};

const DashboardStack = createNativeStackNavigator<DashboardStackParamList>();

export const DashboardStackNavigator = () => {
	return (
		<DashboardStack.Navigator
			screenOptions={{ ...headerOptions, presentation: 'modal' }}
		>
			<DashboardStack.Screen
				component={MobilePaymentScreen}
				name="MobilePayment"
				options={{
					title: 'Mobile payment',
				}}
			/>
			<DashboardStack.Screen
				component={SuccessPaymentScreen}
				name="SuccessPayment"
				options={{ headerShown: false }}
			/>
			<DashboardStack.Screen
				component={TransactionDetailsScreen}
				name="TransactionDetails"
				options={{
					headerTransparent: true,
					title: '',
					headerStyle: {
						backgroundColor: 'transparent',
					},
				}}
			/>
		</DashboardStack.Navigator>
	);
};
