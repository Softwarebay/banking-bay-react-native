import { StyleSheet } from 'react-native';

import { colors } from 'theme';

export const styles = StyleSheet.create({
	carousel: {
		// marginBottom: 20,
		marginTop: 20,
	},
	container: {
		backgroundColor: colors.screenBackground,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		marginHorizontal: 25,
		paddingHorizontal: 25,
		paddingVertical: 30,
	},
	content: {
		alignItems: 'center',
		marginBottom: 30,
	},
	heroImg: {
		// height: undefined,
	},
	heroView: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
	imgBackground: {
		flex: 1,
	},
	onboarding1: {
		// top: 80,
		// width: '95%',
	},
	onboarding2: {
		// width: '95%',
	},
	onboarding3: {
		// width: '95%',
	},
});
