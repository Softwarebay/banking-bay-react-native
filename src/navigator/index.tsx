import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnboardingScreen, SignInScreen } from 'screens';
import { TopNav } from 'components/molecules';

export interface StackParamList extends Record<string, object | undefined> {
	Onboarding: undefined;
	SignIn: undefined;
}

const Stack = createNativeStackNavigator<StackParamList>();

export const Navigator = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
				component={OnboardingScreen}
				name="Onboarding"
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				component={SignInScreen}
				name="SignIn"
				options={() => ({
					// eslint-disable-next-line react/no-unstable-nested-components
					header: ({ navigation }) => (
						<TopNav
							screenTitle="Sign in"
							testID="sign-in-screen-nav"
							onPressButtonLeft={() => navigation.goBack()}
						/>
					),
				})}
			/>
		</Stack.Navigator>
	</NavigationContainer>
);
