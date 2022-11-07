import Constants from 'expo-constants';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Navigator } from 'navigation';
import StorybookUI from './storybook';

import { storybookStyles } from './storybook/Storybook.styles';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const LOAD_STORYBOOK = Constants.expoConfig?.extra?.loadStorybook === 'true';

function App() {
	return (
		<SafeAreaProvider>
			<Navigator />
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
