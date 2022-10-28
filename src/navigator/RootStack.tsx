import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnboardingScreen, SignInScreen } from 'screens';

import { TabNavigator } from './TabNavigator';
import { screenOptions } from './topNavOptions';

export interface RootStackParamList extends Record<string, object | undefined> {
	Onboarding: undefined;
	SignIn: undefined;
	TabNavigator: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => (
	<NavigationContainer>
		<RootStack.Navigator screenOptions={screenOptions}>
			<RootStack.Screen
				component={OnboardingScreen}
				name="Onboarding"
				options={{
					headerShown: false,
				}}
			/>
			<RootStack.Screen
				component={SignInScreen}
				name="SignIn"
				options={{
					title: 'Sign in',
				}}
			/>
			<RootStack.Screen
				component={TabNavigator}
				name="TabNavigator"
				options={{
					headerShown: false,
				}}
			/>
		</RootStack.Navigator>
	</NavigationContainer>
);
