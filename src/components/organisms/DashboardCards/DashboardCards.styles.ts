import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
	bgImage: {
		aspectRatio: 1,
	},
	container: {
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		overflow: 'hidden',
	},
	nav: {
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 14,
	},
	navText: {
		color: colors.white,
		fontSize: 16,
		lineHeight: 25.6,
	},
});
