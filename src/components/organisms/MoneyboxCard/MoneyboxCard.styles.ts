import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
	container: {
		alignItems: 'stretch',
		padding: 20,
	},
	currency: {
		fontFamily: 'MulishBold',
		marginLeft: 5,
	},
	extendButton: {
		backgroundColor: colors.coral,
		flex: 1,
		marginRight: 5,
	},
	floatStyle: {
		fontFamily: 'MulishRegular',
		fontSize: 17,
		lineHeight: 22.1,
	},
	goal: {
		marginLeft: 'auto',
	},
	goalTitle: {
		fontSize: 15,
	},
	iconBackground: {
		alignItems: 'center',
		backgroundColor: colors.green,
		borderRadius: 50,
		height: 27,
		justifyContent: 'center',
		width: 27,
	},
	iconContainer: {
		alignSelf: 'flex-start',
		marginRight: 10,
	},
	intStyle: {
		alignSelf: 'flex-start',
		fontFamily: 'MulishRegular',
		fontSize: 22,
		lineHeight: 22.1,
	},
	progressBar: {
		marginTop: 10,
	},
	saved: {
		justifyContent: 'center',
		marginBottom: 10,
		marginTop: 5,
	},
	savedCurrency: {
		top: 1,
	},
	savedFloat: {
		color: colors.bodyText,
		fontSize: 12,
	},
	savedFloatNum: {
		marginRight: 5,
	},
	savedInt: {
		color: colors.bodyText,
		fontSize: 15,
	},
	topUpButton: {
		backgroundColor: colors.blue,
		flex: 1,
		marginRight: 5,
	},
	withdrawalButton: {
		flex: 1,
		marginLeft: 5,
	},
});
