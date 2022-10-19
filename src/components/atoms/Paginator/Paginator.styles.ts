import { StyleSheet } from 'react-native';

import { colors } from 'theme';

export const styles = StyleSheet.create({
	current: {
		opacity: 1,
	},
	dot: {
		borderColor: colors.mainDark,
		borderRadius: 100,
		borderWidth: 3,
		height: 8,
		marginHorizontal: 8,
		opacity: 0.2,
		width: 8,
	},
});
