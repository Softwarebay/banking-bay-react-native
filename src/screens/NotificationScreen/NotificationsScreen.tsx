import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as NavigationBar from 'expo-navigation-bar';
import { useFocusEffect } from '@react-navigation/native';

import { colors } from 'theme';

export const NotificationsScreen = () => {
	useFocusEffect(() => {
		void NavigationBar.setBackgroundColorAsync(colors.white);

		return () => {
			void NavigationBar.setBackgroundColorAsync(colors.screenBackground);
		};
	});
	return (
		<SafeAreaView>
			<Text>NotificationsScreen</Text>
		</SafeAreaView>
	);
};
