import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
	amount: {
		marginVertical: 12,
	},
	amountFloat: {
		fontSize: 20,
	},
	amountInt: {
		fontSize: 33,
	},
	amountText: {
		fontFamily: 'MulishBold',
	},
	backgroundImg: {
		flex: 1,
	},
	btn: {
		marginTop: 'auto',
	},
	categoryIcon: {
		height: 70,
		marginBottom: 6,
		width: 70,
	},
	categoryText: {
		fontFamily: 'MulishSemiBold',
		fontSize: 12,
		lineHeight: 14,
		marginTop: 5,
		textAlign: 'center',
		width: 70,
	},
	container: {
		flex: 1,
		paddingBottom: 30,
	},
	content: {
		flex: 1,
		paddingHorizontal: 20,
	},
	date: {
		fontSize: 14,
		lineHeight: 22.4,
		marginTop: 5,
	},
	detailText: {
		justifyContent: 'space-between',
		paddingVertical: 22,
	},
	header: {
		alignItems: 'center',
		flex: 2 / 3,
		justifyContent: 'center',
	},
	iconContainer: {
		alignItems: 'center',
		borderRadius: 100,
		justifyContent: 'center',
	},
	sentToText: {
		fontSize: 18,
		lineHeight: 28.8,
		textAlign: 'center',
	},
	status: {
		marginTop: 10,
	},
	statusIcon: {
		backgroundColor: colors.green,
		height: 18,
		marginRight: 8,
		width: 18,
	},
	statusText: {
		color: colors.green,
		fontFamily: 'MulishSemiBold',
		fontSize: 16,
	},
});
