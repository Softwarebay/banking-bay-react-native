import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
	DashboardScreen,
	MobilePaymentScreen,
	SuccessPaymentScreen,
	TransactionDetailsScreen,
} from 'screens';

import { screenOptions } from './topNavOptions';

export interface DashboardStackParamList
	extends Record<string, object | undefined> {
	Dashboard: undefined;
	MobilePayment: undefined;
	SuccessPayment: undefined;
	TransactionDetails: undefined;
}

const DashboardStack = createNativeStackNavigator<DashboardStackParamList>();

export const DashboardStackScreen = () => {
	return (
		<DashboardStack.Navigator screenOptions={screenOptions}>
			<DashboardStack.Screen
				component={DashboardScreen}
				name="DashboardScreen"
				options={{ headerShown: false }}
			/>
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
