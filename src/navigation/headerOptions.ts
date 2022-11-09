import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { chevronLeft } from 'assets/images';
import { Platform } from 'react-native';
import { colors } from 'theme';

export const headerOptions: NativeStackNavigationOptions = {
	headerTitleAlign: 'center',
	headerShadowVisible: false,
	headerTitleStyle: {
		fontSize: 22,
		fontFamily: 'MulishMedium',
		color: colors.mainDark,
	},
	headerStyle: {
		backgroundColor: colors.screenBackground,
	},
	headerBackTitleVisible: false,
	headerBackImageSource: Platform.OS === 'android' ? chevronLeft : undefined,
};
