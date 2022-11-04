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
		flex: 1,
		justifyContent: 'space-between',
		marginHorizontal: 20,
		paddingHorizontal: 20,
		paddingVertical: 60,
	},
	content: {
		alignItems: 'center',
		marginBottom: 50,
	},
	heroImg: {
		height: undefined,
	},
	heroView: {
		alignItems: 'center',
		flex: 1.2,
		justifyContent: 'center',
	},
	imgBackground: {
		flex: 1,
	},
	onboarding1: {
		top: 80,
		width: '95%',
	},
	onboarding2: {
		width: '95%',
	},
	onboarding3: {
		width: '90%',
	},
});
