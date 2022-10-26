import { StyleSheet } from 'react-native';

import { colors } from 'theme';

export const styles = StyleSheet.create({
	amountCard: {
		alignItems: 'baseline',
		marginRight: 14,
		paddingHorizontal: 20,
		paddingVertical: 14,
	},
	amountHeading: {
		fontWeight: '500',
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
