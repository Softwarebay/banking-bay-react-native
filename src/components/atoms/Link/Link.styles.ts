import { StyleSheet } from 'react-native';

import { colors } from 'theme';

export const styles = StyleSheet.create({
	link: {
		color: colors.pink,
		fontFamily: 'MulishMedium',
		fontSize: 17,
		lineHeight: 27.2,
	},
	pressed: {
		opacity: 0.8,
	},
});
