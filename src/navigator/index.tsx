import {
	NavigationContainer,
	NavigatorScreenParams,
} from '@react-navigation/native';
import {
	createNativeStackNavigator,
	NativeStackNavigationOptions,
	NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import {
	MobilePaymentScreen,
	OnboardingScreen,
	SignInScreen,
	SuccessPaymentScreen,
	TransactionDetailsScreen,
} from 'screens';

import { chevronLeft } from 'assets/images';
import { colors } from 'theme';
import { RootTabParamList, TabNavigator } from './TabNavigator';

export const headerOptions: NativeStackNavigationOptions = {
	headerTitleAlign: 'center',
	headerShadowVisible: false,
	headerTitleStyle: {
		fontSize: 20,
		fontWeight: '500',
		color: colors.mainDark,
	},
	headerStyle: {
		backgroundColor: colors.screenBackground,
	},
	headerBackTitleVisible: false,
	headerBackImageSource: chevronLeft,
};

export type RootStackParamList = {
	Onboarding: undefined;
	SignIn: undefined;
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
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Group screenOptions={{ presentation: 'modal' }}>
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
					options={{
						title: 'Sign in',
					}}
				/>
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
