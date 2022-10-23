import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnboardingScreen, SignInScreen } from 'screens';
import { TopNav } from 'components/molecules';

import { TabNavigator } from './TabNavigator';

export interface RootStackParamList extends Record<string, object | undefined> {
	Onboarding: undefined;
	SignIn: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => (
	<NavigationContainer>
		<RootStack.Navigator>
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
				options={() => ({
					header: ({ navigation }) => (
						<TopNav
							screenTitle="Sign in"
							testID="sign-in-screen-nav"
							onPressButtonLeft={() => navigation.goBack()}
						/>
					),
				})}
			/>
			<RootStack.Screen
				component={TabNavigator}
				name="MainTabs"
				options={{
					headerShown: false,
				}}
			/>
		</RootStack.Navigator>
	</NavigationContainer>
);
