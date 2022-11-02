import {
	NavigationContainer,
	NavigatorScreenParams,
} from '@react-navigation/native';
import {
	createNativeStackNavigator,
	NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { OnboardingScreen, SignInScreen } from 'screens';

import {
	DashboardStackNavigator,
	DashboardStackParamList,
} from './DashboardStackNavigator';
import { RootTabParamList, TabNavigator } from './TabNavigator';

import { headerOptions } from './headerOptions';

export type RootStackParamList = {
	Onboarding: undefined;
	SignIn: undefined;
	Root: NavigatorScreenParams<RootTabParamList> | undefined;
	DashboardStack: NavigatorScreenParams<DashboardStackParamList>;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => (
	<NavigationContainer>
		<Stack.Navigator
			initialRouteName="Onboarding"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen component={TabNavigator} name="Root" />
			<Stack.Screen component={OnboardingScreen} name="Onboarding" />
			<Stack.Screen
				component={SignInScreen}
				name="SignIn"
				options={{
					...headerOptions,
					headerShown: true,
					title: 'Sign in',
				}}
			/>
			<Stack.Screen component={DashboardStackNavigator} name="DashboardStack" />
		</Stack.Navigator>
	</NavigationContainer>
);
