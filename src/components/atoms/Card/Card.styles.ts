import { Platform, StyleSheet } from 'react-native';

import { colors, shadows } from 'theme';

export const styles = StyleSheet.create({
	card: {
		backgroundColor: colors.white,
		borderRadius: 10,
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
		alignItems: 'center',
		flexDirection: 'row',
	},
});
