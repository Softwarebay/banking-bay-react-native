import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreen } from 'screens';

export interface StackParamList extends Record<string, object | undefined> {
	Onboarding: undefined;
	SignUp: undefined;
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
		</Stack.Navigator>
	</NavigationContainer>
);
