import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 0.5,
		paddingHorizontal: 20,
	},
	latestTransactions: {
		flex: 1,
		marginTop: 30,
	},
	paymentOptions: {
		marginBottom: -15,
		transform: [{ translateY: -30 }],
	},
});
