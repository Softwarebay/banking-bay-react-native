import { StyleSheet } from 'react-native';

import { colors } from 'theme';

export const styles = StyleSheet.create({
	category: {
		fontSize: 14,
		lineHeight: 22.4,
	},
	container: {
		paddingHorizontal: 15,
		paddingVertical: 15,
	},
	description: {
		flex: 1,
		marginHorizontal: 15,
	},
	iconContainer: {
		alignItems: 'center',
		backgroundColor: colors.grey100,
		borderRadius: 100,
		height: 50,
		justifyContent: 'center',
		width: 50,
	},
	pressed: {
		opacity: 0.8,
	},
});
