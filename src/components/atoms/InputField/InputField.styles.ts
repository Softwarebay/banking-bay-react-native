import { Platform, StyleSheet } from 'react-native';

import { colors, shadows } from 'theme';

export const styles = StyleSheet.create({
	inputField: {
		backgroundColor: colors.cardBackground,
		borderRadius: 10,
		color: colors.mainDark,
		fontSize: 14,
		fontWeight: '400',
		height: 50,
		paddingHorizontal: 20,
		paddingVertical: 14,
		...Platform.select({
			android: {
				...shadows.android,
			},
			ios: {
				...shadows.ios,
			},
		}),
	},
});
