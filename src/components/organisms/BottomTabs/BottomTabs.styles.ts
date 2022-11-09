import { Platform, StyleSheet } from 'react-native';

import { colors, shadows } from 'theme';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		paddingHorizontal: 10,
		paddingVertical: 20,
		...Platform.select({
			android: {
				...shadows.android,
				height: 70,
			},
			ios: {
				...shadows.ios,
				paddingBottom: 30,
				height: 90,
			},
		}),
	},
	focused: {
		color: colors.pink,
	},
	label: {
		fontFamily: 'MulishSemiBold',
		fontSize: 12,
	},
	pressed: {
		opacity: 0.8,
	},
	tabItem: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'space-between',
	},
});
