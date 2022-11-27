import {
	NavigationContainer,
	NavigatorScreenParams,
} from '@react-navigation/native';
import {
	createNativeStackNavigator,
	NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import {
	ChangePasswordScreen,
	MobilePaymentScreen,
	OnboardingScreen,
	SignInScreen,
	SuccessPaymentScreen,
	TransactionDetailsScreen,
} from 'screens';

import { RootTabParamList, TabNavigator } from './TabNavigator';

import { headerOptions } from './headerOptions';

export type RootStackParamList = {
	Onboarding: undefined;
	SignIn: undefined;
	ChangePassword: undefined;
	Root: NavigatorScreenParams<RootTabParamList> | undefined;
	MobilePayment: undefined;
	SuccessPayment: undefined;
	TransactionDetails: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => (
	<NavigationContainer>
		<Stack.Navigator
			initialRouteName="Onboarding"
			screenOptions={headerOptions}
		>
			<Stack.Screen
				component={TabNavigator}
				name="Root"
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				component={OnboardingScreen}
				name="Onboarding"
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				component={SignInScreen}
				name="SignIn"
				options={{
					...headerOptions,
					title: 'Sign in',
				}}
			/>
			<Stack.Screen
				component={ChangePasswordScreen}
				name="ChangePassword"
				options={{
					...headerOptions,
					title: 'New password',
				}}
			/>
			<Stack.Group>
				<Stack.Screen
					component={MobilePaymentScreen}
					name="MobilePayment"
					options={{
						title: 'Mobile payment',
					}}
				/>
				<Stack.Screen
					component={SuccessPaymentScreen}
					name="SuccessPayment"
					options={{ headerShown: false }}
				/>
				<Stack.Screen
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
			</Stack.Group>
		</Stack.Navigator>
	</NavigationContainer>
);
