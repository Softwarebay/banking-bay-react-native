import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
	children: React.ReactNode;
	style?: StyleProp<ViewStyle>;
	center?: boolean;
	fullscreen?: boolean;
}

const styles = StyleSheet.create({
	center: {
		alignItems: 'center',
	},
	fullscreen: {
		paddingHorizontal: 0,
	},
	main: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 24,
	},
});

export const ViewStory = ({ children, center, fullscreen, style }: Props) => {
	return (
		<SafeAreaView
			style={[
				styles.main,
				center && styles.center,
				fullscreen && styles.fullscreen,
				style,
			]}
		>
			{children}
		</SafeAreaView>
	);
};
