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
	text: {
		color: colors.buttonText,
		fontSize: 16,
	},
});
