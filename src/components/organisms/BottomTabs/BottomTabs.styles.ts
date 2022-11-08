import { Platform, StyleSheet } from 'react-native';

import { colors, shadows } from 'theme';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		paddingHorizontal: 10,
		paddingTop: 16,
		...Platform.select({
			android: {
				...shadows.android,
			},
			ios: {
				...shadows.ios,
			},
		}),
		height: 70,
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
	safeAreaContainer: {
		backgroundColor: colors.white,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		justifyContent: 'flex-end',
		...Platform.select({
			android: {
				...shadows.android,
			},
			ios: {
				...shadows.ios,
			},
		}),
		height: 70,
	},
	tabItem: {
		alignItems: 'center',
		flex: 1,
		height: '100%',
		justifyContent: 'space-between',
	},
});
