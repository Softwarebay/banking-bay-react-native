import { StyleSheet } from 'react-native';

import { colors } from 'theme';

export const styles = StyleSheet.create({
	amountCard: {
		marginRight: 14,
		paddingHorizontal: 20,
		paddingVertical: 14,
	},
	amountFloat: {
		fontSize: 16,
	},
	amountInt: {
		fontSize: 28,
	},
	amountText: {
		fontFamily: 'MulishMedium',
		lineHeight: 31,
	},
	balanceText: {
		marginBottom: 6,
		marginTop: 14,
	},
	button: {
		marginTop: 'auto',
	},
	container: {
		backgroundColor: colors.screenBackground,
		flex: 1,
		paddingBottom: 47,
		paddingHorizontal: 20,
		paddingTop: 20,
	},
	text: {
		fontSize: 12,
		lineHeight: 19,
	},
});
