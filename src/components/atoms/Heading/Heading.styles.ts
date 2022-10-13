import { StyleSheet } from 'react-native';

import { colors } from 'theme';

export const styles = StyleSheet.create({
	default: {
		color: colors.mainDark,
	},
	h1: {
		fontSize: 44,
		fontWeight: '700',
		lineHeight: 48.4,
	},
	h2: {
		fontSize: 36,
		fontWeight: '700',
		lineHeight: 39.6,
	},
	h3: {
		fontSize: 28,
		fontWeight: '700',
		lineHeight: 30.8,
	},
	h4: {
		fontSize: 20,
		fontWeight: '500',
		lineHeight: 24,
	},
	h5: {
		fontSize: 16,
		fontWeight: '600',
		lineHeight: 20.8,
	},
	h6: {
		fontSize: 14,
		fontWeight: '600',
		lineHeight: 22.4,
	},
});
