import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
	container: {
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
	header: {
		flex: 1,
		marginBottom: 10,
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
	lastIncome: {
		color: colors.green,
		fontFamily: 'MulishSemiBold',
		fontSize: 14,
	},
	rate: {
		marginLeft: 'auto',
	},
	row: {
		justifyContent: 'space-between',
		width: '100%',
	},
	subheaderText: {
		fontSize: 14,
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
