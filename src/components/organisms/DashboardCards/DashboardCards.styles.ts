import { StyleSheet } from 'react-native';

import { colors } from 'theme';

export const styles = StyleSheet.create({
	bgImage: {
		flex: 1,
	},
	card: {
		aspectRatio: 290 / 176,
		marginHorizontal: 20,
	},
	cardContainer: {
		flexDirection: 'row',
		marginVertical: 20,
	},
	container: {
		backgroundColor: colors.mainDark,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		flex: 1,
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
