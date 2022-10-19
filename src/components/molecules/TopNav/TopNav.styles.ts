import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.screenBackground,
		justifyContent: 'center',
	},
	leftBtn: {
		left: 0,
		position: 'absolute',
	},
	padding: {
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
});
