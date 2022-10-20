import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
	amount: {},
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
		backgroundColor: colors.transactionCardIcon,
		borderRadius: 100,
		height: 40,
		justifyContent: 'center',
		width: 40,
	},

	subtitle: {
		fontSize: 12,
		lineHeight: 19.2,
	},
});
