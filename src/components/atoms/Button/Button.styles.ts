import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		borderRadius: 10,
		height: 50,
		justifyContent: 'center',
	},
	pressed: {
		opacity: 0.8,
	},
	primaryText: {
		color: colors.white,
	},
	secondary: {
		backgroundColor: colors.grey100,
		borderColor: colors.grey300,
		borderWidth: 1,
	},
	secondaryText: {
		color: colors.mainDark,
	},
	text: {
		color: colors.white,
		fontSize: 16,
	},
});
