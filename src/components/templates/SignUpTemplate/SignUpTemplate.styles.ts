import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.screenBackground,
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 20,
	},
	footer: {
		marginBottom: 50,
		marginTop: 30,
	},
	heading: {
		marginBottom: 30,
		paddingHorizontal: 35,
		textAlign: 'center',
	},
});
