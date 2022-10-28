import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
	amount: {
		marginVertical: 10,
	},
	amountFloat: {
		fontSize: 16,
		fontWeight: '700',
	},
	amountInt: {
		fontSize: 20,
		fontWeight: '700',
	},
	backgroundImg: {
		flex: 1,
	},
	btn: {
		marginTop: 'auto',
	},
	category: {},
	categoryIcon: {
		height: 60,
		marginBottom: 6,
		width: 60,
	},
	categoryText: {
		fontSize: 10,
		lineHeight: 12,
		textAlign: 'center',
		width: 60,
	},
	container: {
		flex: 1,
		paddingBottom: 40,
	},
	content: {
		flex: 1,
		paddingHorizontal: 20,
	},
	date: {
		fontSize: 12,
		lineHeight: 19,
	},
	detailText: {
		justifyContent: 'space-between',
		paddingVertical: 19,
	},
	header: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 40,
	},
	iconContainer: {
		alignItems: 'center',
		borderRadius: 100,
		justifyContent: 'center',
	},
	sentToText: {
		fontSize: 16,
		textAlign: 'center',
	},
	status: {
		marginBottom: 30,
		marginTop: 9,
	},
	statusIcon: {
		backgroundColor: colors.green,
		height: 16,
		marginRight: 6,
		width: 16,
	},
	statusText: {
		color: colors.green,
	},
});
