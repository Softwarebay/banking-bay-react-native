import { StyleSheet } from 'react-native';

import { colors } from 'theme';

export const styles = StyleSheet.create({
	button: {
		alignSelf: 'stretch',
		marginBottom: 50,
		marginTop: 'auto',
	},
	container: {
		backgroundColor: colors.screenBackground,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		flex: 1,
		marginHorizontal: 25,
		paddingBottom: 0,
		paddingHorizontal: 25,
		paddingTop: 60,
	},
	content: {
		alignItems: 'center',
	},
	heroImg: {
		top: 50,
		width: '95%',
	},
	heroView: {
		alignItems: 'center',
		flex: 1,
	},
	imgBackground: {
		flex: 1,
	},
	subtitle: {
		fontSize: 18,
		lineHeight: 28.8,
		marginBottom: 20,
	},
	text: {
		textAlign: 'center',
	},
	title: {
		marginVertical: 20,
	},
});
