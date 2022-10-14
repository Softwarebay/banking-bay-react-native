import { Flex, IconButton } from 'components/atoms';

import { styles } from './AuthViaSocials.styles';

interface AuthViaSocialItem {
	name: string;
	color: string;
	iconName: string;
	onPress: () => void;
}

interface Props {
	onPressFacebook: () => void;
	onPressTwitter: () => void;
	onPressGooglePlus: () => void;
}

export const AuthViaSocials = ({
	onPressFacebook,
	onPressGooglePlus,
	onPressTwitter,
}: Props) => {
	const authViaSocials: AuthViaSocialItem[] = [
		{
			name: 'Facebook',
			iconName: 'facebook',
			color: '#3B5999',
			onPress: onPressFacebook,
		},
		{
			name: 'Twitter',
			iconName: 'twitter',
			color: '#55ACEE',
			onPress: onPressTwitter,
		},
		{
			name: 'GooglePlus',
			iconName: 'google-plus',
			color: '#DD4B39',
			onPress: onPressGooglePlus,
		},
	];

	return (
		<Flex direction="row" style={styles.container}>
			{authViaSocials.map(({ name, iconName, color, onPress }) => (
				<IconButton
					key={name}
					btnStyle={[styles.iconBtn, { backgroundColor: color }]}
					iconName={iconName}
					testID={`${name}-btn-test-id`}
					onPress={onPress}
				/>
			))}
		</Flex>
	);
};
