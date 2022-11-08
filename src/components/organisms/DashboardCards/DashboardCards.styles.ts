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
	divider: {
		marginBottom: 5,
		opacity: 0.3,
	},
	nav: {
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
	navText: {
		color: colors.white,
	},
	paginatorContainer: {
		alignItems: 'center',
		marginTop: 5,
	},
});
