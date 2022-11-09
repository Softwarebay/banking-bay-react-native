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
	subtitle: {
		fontSize: 18,
		lineHeight: 28.8,
	},
	text: {
		textAlign: 'center',
	},
	title: {
		marginBottom: 30,
		paddingHorizontal: 10,
	},
});
