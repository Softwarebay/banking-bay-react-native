import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabs } from 'components/organisms';

import {
	DashboardScreen,
	DepositsScreen,
	LoansScreen,
	MoreScreen,
	NotificationsScreen,
} from 'screens';

export interface TabParamList extends Record<string, object | undefined> {
	Dashboard: undefined;
	Deposits: undefined;
	Loans: undefined;
	Notifications: undefined;
	More: undefined;
}

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={{ headerShown: false }}
			tabBar={(props) => <BottomTabs {...props} />}
		>
			<Tab.Screen component={DashboardScreen} name="Dashboard" />
			<Tab.Screen component={DepositsScreen} name="Deposits" />
			<Tab.Screen component={LoansScreen} name="Loans" />
			<Tab.Screen component={NotificationsScreen} name="Notifications" />
			<Tab.Screen component={MoreScreen} name="More" />
		</Tab.Navigator>
	);
};
