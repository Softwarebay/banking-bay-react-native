import { useCallback } from 'react';
import {
	Mulish_400Regular,
	Mulish_500Medium,
	Mulish_600SemiBold,
	Mulish_700Bold,
	useFonts,
} from '@expo-google-fonts/mulish';
import * as SplashScreen from 'expo-splash-screen';

export const useInitialResources = () => {
	const [fontsLoaded, fontsLoadingError] = useFonts({
		MulishBold: Mulish_700Bold,
		MulishSemiBold: Mulish_600SemiBold,
		MulishMedium: Mulish_500Medium,
		MulishRegular: Mulish_400Regular,
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	return { fontsLoaded, onLayoutRootView, fontsLoadingError };
};
