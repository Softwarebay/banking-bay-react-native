import { StyleSheet } from 'react-native';

import { colors } from 'theme';

export const styles = StyleSheet.create({
	default: {
		color: colors.mainDark,
	},
	h1: {
		fontFamily: 'MulishBold',
		fontSize: 46,
		lineHeight: 50.5,
	},
	h2: {
		fontFamily: 'MulishBold',
		fontSize: 44,
		lineHeight: 48.4,
	},
	h3: {
		fontFamily: 'MulishBold',
		fontSize: 33,
		lineHeight: 36.3,
	},
	h4: {
		fontFamily: 'MulishMedium',
		fontSize: 22,
		lineHeight: 26.4,
	},
	h5: {
		fontFamily: 'MulishSemiBold',
		fontSize: 17,
		lineHeight: 22.1,
	},
	h6: {
		fontFamily: 'MulishSemiBold',
		fontSize: 16,
		lineHeight: 25.6,
	},
});
