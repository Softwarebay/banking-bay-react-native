import { useCallback } from 'react';
import { Pressable } from 'react-native';
import { Route } from '@react-navigation/native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { Flex, Icon, IconProps, Text } from 'components/atoms';
import { colors } from 'theme';

import { styles } from './BottomTabs.styles';

export const BottomTabs = ({ state, navigation }: BottomTabBarProps) => {
	const onPress = useCallback(
		(route: Route<string>, isFocused: boolean) => {
			const event = navigation.emit({
				type: 'tabPress',
				target: route.key,
				canPreventDefault: true,
			});

			if (!isFocused && !event.defaultPrevented) {
				navigation.navigate(route.name);
			}
		},
		[navigation]
	);

	const onLongPress = useCallback(
		(route: Route<string>) => {
			navigation.emit({
				type: 'tabLongPress',
				target: route.key,
			});
		},
		[navigation]
	);
	return (
		<Flex direction="row" style={styles.container}>
			{state.routes.map((route, index) => {
				const isFocused = state.index === index;

				return (
					<Pressable
						key={route.key}
						style={({ pressed }) => [styles.tabItem, pressed && styles.pressed]}
						testID={`${route.name}-tab-item-test-id`}
						onLongPress={() => onLongPress(route)}
						onPress={() => onPress(route, isFocused)}
					>
						<Icon
							color={isFocused ? colors.pink : colors.bodyText}
							name={route.name.toLowerCase() as IconProps['name']}
							size={25}
						/>
						<Text
							style={[styles.label, isFocused && styles.focused]}
							testID={`${route.name}-route-name-test-id`}
							text={route.name}
						/>
					</Pressable>
				);
			})}
		</Flex>
	);
};
