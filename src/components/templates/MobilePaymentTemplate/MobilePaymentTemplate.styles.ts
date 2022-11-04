import { StyleSheet } from 'react-native';

import { colors } from 'theme';

export const styles = StyleSheet.create({
	amountCard: {
		marginRight: 15,
		paddingHorizontal: 22,
		paddingVertical: 18,
	},
	amountFloat: {
		fontSize: 20,
	},
	amountInt: {
		fontSize: 33,
	},
	amountText: {
		fontFamily: 'MulishMedium',
		lineHeight: 36.3,
	},
	balanceText: {
		marginBottom: 10,
		marginTop: 18,
	},
	button: {
		marginTop: 'auto',
	},
	container: {
		backgroundColor: colors.screenBackground,
		flex: 1,
		paddingBottom: 30,
		paddingHorizontal: 20,
		paddingTop: 30,
	},
	text: {
		fontSize: 14,
		lineHeight: 22.4,
	},
});
