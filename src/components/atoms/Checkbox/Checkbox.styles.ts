import { StyleSheet } from 'react-native';

import { colors } from 'theme';

export const styles = StyleSheet.create({
	checkIcon: {
		bottom: 2,
		color: colors.mainDark,
		fontSize: 22,
		right: 1,
	},
	checkbox: {
		alignItems: 'center',
		borderColor: colors.checkbox,
		borderRadius: 4,
		borderWidth: 1,
		height: 22,
		justifyContent: 'center',
		width: 22,
	},
});
