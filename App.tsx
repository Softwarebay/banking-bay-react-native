import Constants from 'expo-constants';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { useInitialResources } from 'hooks/useInitialResources';

import { Navigator } from 'navigation';

import StorybookUI from './storybook';

import { storybookStyles } from './storybook/Storybook.styles';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const LOAD_STORYBOOK = Constants.expoConfig?.extra?.loadStorybook === 'true';

void SplashScreen.preventAutoHideAsync();

function App() {
	const { fontsLoaded, onLayoutRootView } = useInitialResources();

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaProvider onLayout={onLayoutRootView}>
			<Navigator />
		</SafeAreaProvider>
	);
}

const Storybook = () => {
	const { fontsLoaded, onLayoutRootView } = useInitialResources();

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaView style={storybookStyles.container} onLayout={onLayoutRootView}>
			<StorybookUI />
		</SafeAreaView>
	);
};
export default LOAD_STORYBOOK ? Storybook : App;
