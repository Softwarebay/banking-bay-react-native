import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	backgroundImg: {
		flex: 1,
	},
	button: {
		flex: 0.48,
	},
	buttonContainer: {
		justifyContent: 'space-between',
		marginTop: 'auto',
	},
	card: {
		marginBottom: 10,
	},
	container: {
		flex: 1,
		paddingBottom: Platform.select({
			ios: -10,
			android: 20,
		}),
		paddingHorizontal: 20,
	},
	deposits: {
		flex: 1.2,
	},
	firstItem: {
		marginTop: 10,
	},
	header: {
		justifyContent: 'space-between',
		marginTop: 40,
		// flex: 1
	},
	moneyboxes: {
		flex: 1,
	},
	subheading: {
		fontSize: 14,
		marginTop: 15,
	},
});
