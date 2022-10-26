import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TopNav } from 'components/molecules';
import { DashboardScreen, MobilePaymentScreen } from 'screens';

export interface DashboardStackParamList
	extends Record<string, object | undefined> {
	Dashboard: undefined;
	MobilePayment: undefined;
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
							testID="mobile-payment-nav"
							onPressButtonLeft={() => navigation.goBack()}
						/>
					),
				})}
			/>
		</DashboardStack.Navigator>
	);
};
