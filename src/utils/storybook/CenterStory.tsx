import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
	children: React.ReactNode;
	style?: StyleProp<ViewStyle>;
	center?: boolean;
}

const styles = StyleSheet.create({
	center: {
		alignItems: 'center',
	},
	main: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 24,
	},
});

export const CenterStory = ({ children, center, style }: Props) => {
	return (
		<SafeAreaView style={[styles.main, center && styles.center, style]}>
			{children}
		</SafeAreaView>
	);
};
