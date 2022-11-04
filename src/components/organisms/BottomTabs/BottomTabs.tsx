import { Pressable } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { Flex, Icon, IconProps, Text } from 'components/atoms';
import { colors } from 'theme';

import { styles } from './BottomTabs.styles';

export const BottomTabs = ({ state, navigation }: BottomTabBarProps) => {
	let displayBottomTabs: 'none' | 'flex' = 'flex';

	const focusedScreen = state.routes.find(
		(route, index) => index === state.index && route
	);

	const routeName =
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		getFocusedRouteNameFromRoute(focusedScreen!) ?? 'DashboardScreen';
	switch (routeName) {
		case 'DashboardScreen':
		case 'DepositsScreen':
		case 'LoansScreen':
		case 'NotificationsScreen':
		case 'MoreScreen':
			displayBottomTabs = 'flex';
			break;
		default:
			displayBottomTabs = 'none';
	}

	return (
		<Flex
			direction="row"
			style={[styles.container, { display: displayBottomTabs }]}
		>
			{state.routes.map((route, index) => {
				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					});
				};

				return (
					<Pressable
						key={route.key}
						style={({ pressed }) => [styles.tabItem, pressed && styles.pressed]}
						onLongPress={onLongPress}
						onPress={onPress}
					>
						<Icon
							color={isFocused ? colors.pink : colors.bodyText}
							name={route.name.toLowerCase() as IconProps['name']}
							size={25}
						/>
						<Text
							style={[styles.label, isFocused && styles.focused]}
							text={route.name}
						/>
					</Pressable>
				);
			})}
		</Flex>
	);
};
