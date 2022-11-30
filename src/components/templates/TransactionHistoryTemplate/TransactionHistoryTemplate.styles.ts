import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
	card: {
		marginBottom: 10,
	},
	container: {
		backgroundColor: colors.screenBackground,
		flex: 1,
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
	searchBar: {
		marginBottom: 10,
	},
	sectionTitle: {
		fontSize: 14,
		lineHeight: 22.4,
		marginBottom: 10,
		marginTop: 10,
	},
});
