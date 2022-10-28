/* eslint-disable @typescript-eslint/no-unused-vars */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabs } from 'components/organisms';
import {
	DepositsScreen,
	LoansScreen,
	MoreScreen,
	NotificationsScreen,
} from 'screens';
import { DashboardStackScreen } from './DashboardStack';

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
			screenOptions={({ route }) => ({
				headerShown: false,
				// tabBarStyle: { display: getTabBarDisplay(route) },
			})}
			tabBar={(props) => <BottomTabs {...props} />}
		>
			<Tab.Screen component={DashboardStackScreen} name="Dashboard" />
			<Tab.Screen component={DepositsScreen} name="Deposits" />
			<Tab.Screen component={LoansScreen} name="Loans" />
			<Tab.Screen component={NotificationsScreen} name="Notifications" />
			<Tab.Screen component={MoreScreen} name="More" />
		</Tab.Navigator>
	);
};

// const getTabBarDisplay = (route) => {
// 	const routeName = getFocusedRouteNameFromRoute(route) ?? 'DashboardScreen';
// 	switch (routeName) {
// 		case 'DashboardScreen':
// 		case 'DepositsScreen':
// 		case 'LoansScreen':
// 		case 'NotificationsScreen':
// 		case 'MoreScreen':
// 			return 'flex';
// 		default:
// 			return 'none';
// 	}
// };
