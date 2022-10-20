import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
	bgImage: {
		flex: 1,
	},
	container: {
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		flex: 1 / 2.5,
		overflow: 'hidden',
		width: '100%',
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
