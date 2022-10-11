import { StyleSheet } from 'react-native';

import { colors } from 'theme';

export const styles = StyleSheet.create({
	carousel: {
		marginBottom: 30,
		marginTop: 30,
	},
	container: {
		backgroundColor: colors.background,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		flex: 1,
		justifyContent: 'space-around',
		marginHorizontal: 20,
		paddingHorizontal: 20,
		paddingVertical: 60,
	},
	content: {
		alignItems: 'center',
		marginBottom: 50,
	},
	heroView: {
		flex: 1.2,
	},
	imgBackground: {
		flex: 1,
	},
});
