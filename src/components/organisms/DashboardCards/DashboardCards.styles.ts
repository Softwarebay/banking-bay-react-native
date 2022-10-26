import { StyleSheet } from 'react-native';

import { colors } from 'theme';

export const styles = StyleSheet.create({
	bgImage: {
		aspectRatio: 1,
	},
	card: {
		aspectRatio: 290 / 176,
		marginRight: 20,
	},
	cardContainer: {
		borderWidth: 1,
		flexDirection: 'row',
		marginVertical: 20,
		paddingLeft: 20,
	},
	container: {
		backgroundColor: colors.mainDark,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		overflow: 'hidden',
	},
	nav: {
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
	navText: {
		color: colors.white,
		fontSize: 16,
		lineHeight: 25.6,
	},
	paginatorContainer: {
		alignItems: 'center',
	},
});
