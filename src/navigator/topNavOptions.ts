import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { chevronLeft } from 'assets/images';
import { colors } from 'theme';

export const screenOptions: NativeStackNavigationOptions = {
	headerTitleAlign: 'center',
	headerShadowVisible: false,
	headerTitleStyle: {
		fontSize: 20,
		fontFamily: 'MulishMedium',
		color: colors.mainDark,
	},
	headerStyle: {
		backgroundColor: colors.screenBackground,
	},
	headerBackTitleVisible: false,
	headerBackImageSource: chevronLeft,
};
