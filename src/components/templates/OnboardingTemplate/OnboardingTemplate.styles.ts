import { StyleSheet } from 'react-native';

import { colors } from 'theme';

export const styles = StyleSheet.create({
	carousel: {
		marginBottom: 30,
		marginTop: 30,
	},
	container: {
		backgroundColor: colors.screenBackground,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		marginHorizontal: 25,
		paddingHorizontal: 25,
		paddingVertical: 60,
	},
	content: {
		alignItems: 'center',
		marginBottom: 50,
	},
	heroImg: {
		aspectRatio: 843 / 1200,
		top: 120,
		width: '95%',
	},
	heroView: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
	imgBackground: {
		flex: 1,
	},
});
