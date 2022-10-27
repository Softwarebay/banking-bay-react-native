import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TopNav } from 'components/molecules';
import {
	DashboardScreen,
	MobilePaymentScreen,
	SuccessPaymentScreen,
} from 'screens';

export interface DashboardStackParamList
	extends Record<string, object | undefined> {
	Dashboard: undefined;
	MobilePayment: undefined;
	SuccessPayment: undefined;
}

const DashboardStack = createNativeStackNavigator<DashboardStackParamList>();

export const DashboardStackScreen = () => {
	return (
		<DashboardStack.Navigator initialRouteName="DashboardScreen">
			<DashboardStack.Screen
				component={DashboardScreen}
				name="DashboardScreen"
				options={{ headerShown: false }}
			/>
			<DashboardStack.Screen
				component={MobilePaymentScreen}
				name="MobilePayment"
				options={() => ({
					header: ({ navigation }) => (
						<TopNav
							screenTitle="Mobile payment"
							onPressBackButton={navigation.goBack}
						/>
					),
				})}
			/>
			<DashboardStack.Screen
				component={SuccessPaymentScreen}
				name="SuccessPayment"
				options={{ headerShown: false }}
			/>
		</DashboardStack.Navigator>
	);
};
