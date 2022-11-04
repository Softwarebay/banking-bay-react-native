import { StyleSheet } from 'react-native';

import { colors } from 'theme';

export const styles = StyleSheet.create({
	default: {
		color: colors.mainDark,
	},
	h1: {
		fontFamily: 'MulishBold',
		fontSize: 44,
		lineHeight: 48.4,
	},
	h2: {
		fontFamily: 'MulishBold',
		fontSize: 36,
		lineHeight: 39.6,
	},
	h3: {
		fontFamily: 'MulishBold',
		fontSize: 32,
		lineHeight: 35.2,
	},
	h4: {
		fontFamily: 'MulishMedium',
		fontSize: 20,
		lineHeight: 24,
	},
	h5: {
		fontFamily: 'MulishSemiBold',
		fontSize: 16,
		lineHeight: 20.8,
	},
	h6: {
		fontFamily: 'MulishSemiBold',
		fontSize: 14,
		lineHeight: 22.4,
	},
});
