import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		borderRadius: 10,
		height: 55,
		justifyContent: 'center',
	},
	pressed: {
		opacity: 0.8,
	},
	secondary: {
		backgroundColor: colors.grey100,
		borderColor: colors.grey300,
		borderWidth: 1,
	},
	secondaryText: {
		color: colors.mainDark,
	},
	ternary: {
		backgroundColor: colors.green,
		borderWidth: 0,
		height: 40,
	},
	ternaryText: {
		fontSize: 15,
	},
	text: {
		color: colors.white,
		fontFamily: 'MulishSemiBold',
		fontSize: 17,
	},
});
