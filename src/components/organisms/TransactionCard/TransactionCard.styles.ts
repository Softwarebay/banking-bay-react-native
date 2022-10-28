import { StyleSheet } from 'react-native';

import { colors } from 'theme';

export const styles = StyleSheet.create({
	amount: {},
	category: {
		fontSize: 12,
		lineHeight: 19.2,
	},
	container: {
		paddingHorizontal: 10,
		paddingVertical: 19,
	},
	description: {
		flex: 1,
		marginHorizontal: 14,
	},
	iconContainer: {
		alignItems: 'center',
		backgroundColor: colors.grey100,
		borderRadius: 100,
		height: 40,
		justifyContent: 'center',
		width: 40,
	},
	pressed: {
		opacity: 0.8,
	},
});
