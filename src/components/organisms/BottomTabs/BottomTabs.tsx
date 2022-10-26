import { Pressable } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { Flex, Icon, Text } from 'components/atoms';
import { colors } from 'theme';

import { styles } from './BottomTabs.styles';

export const BottomTabs = ({ state, navigation }: BottomTabBarProps) => {
	return (
		<Flex direction="row" style={styles.container}>
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
							color={isFocused ? colors.link : colors.bodyText}
							name={route.name.toLowerCase()}
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
