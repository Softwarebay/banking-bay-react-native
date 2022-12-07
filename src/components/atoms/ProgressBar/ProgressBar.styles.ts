import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
	progress: {
		borderRadius: 10,
		height: 5,
	},
	progressLine: {
		left: 0,
		position: 'absolute',
		top: 0,
	},
	progressShadow: {
		backgroundColor: colors.bodyText,
		opacity: 0.2,
	},
});
