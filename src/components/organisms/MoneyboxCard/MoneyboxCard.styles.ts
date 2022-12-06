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
		marginLeft: 10,
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
		marginRight: 12,
	},
	intStyle: {
		fontFamily: 'MulishRegular',
		fontSize: 22,
		lineHeight: 22.1,
	},

	progress: {
		borderRadius: 10,
		height: 5,
	},
	progressContainer: {
		marginTop: 10,
	},
	progressLine: {
		backgroundColor: colors.green,
		left: 0,
		position: 'absolute',
		top: 0,
	},
	progressShadow: {
		backgroundColor: colors.bodyText,
		opacity: 0.2,
	},
	saved: {
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20,
		marginTop: 10,
	},
	savedFloat: {
		color: colors.bodyText,
		fontSize: 12,
		lineHeight: 22.1,
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
