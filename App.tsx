import Constants from 'expo-constants';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import StorybookUI from './storybook';
import { storybookStyles } from './storybook/Storybook.styles';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const LOAD_STORYBOOK = Constants.expoConfig?.extra?.loadStorybook === 'true';

const styles = StyleSheet.create({
	// eslint-disable-next-line react-native/no-color-literals
	container: {
		alignItems: 'center',
		backgroundColor: 'cyan',
		justifyContent: 'center',
	},
});

function App() {
	return (
		<SafeAreaProvider style={styles.container}>
			<Text>Hello</Text>
		</SafeAreaProvider>
	);
}

const Storybook = () => {
	return (
		<SafeAreaView style={storybookStyles.container}>
			<StorybookUI />
		</SafeAreaView>
	);
};
export default LOAD_STORYBOOK ? Storybook : App;
