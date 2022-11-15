import { StyleSheet } from 'react-native';

import { colors } from 'theme';

export const styles = StyleSheet.create({
	bgImage: {
		flex: 1,
	},
	cardContainer: {
		flexDirection: 'row',
	},
	container: {
		backgroundColor: colors.mainDark,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		flex: 0.55,
		overflow: 'hidden',
	},
	divider: {
		marginVertical: 20,
		opacity: 0.3,
	},
	nav: {
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingTop: 20,
	},
	navText: {
		color: colors.white,
	},
	paginatorContainer: {
		alignItems: 'center',
		marginTop: -10,
	},
});
