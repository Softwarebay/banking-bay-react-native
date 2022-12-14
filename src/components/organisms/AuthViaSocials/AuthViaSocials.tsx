import { Flex, IconButton, IconProps } from 'components/atoms';
import { colors } from 'theme';

import { styles } from './AuthViaSocials.styles';

interface AuthViaSocialItem {
	name: string;
	btnColor: string;
	iconName: IconProps['name'];
	iconColor: string;
	onPress: () => void;
}

export interface Props {
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
			iconColor: colors.white,
			btnColor: '#3B5999',
			onPress: onPressFacebook,
		},
		{
			name: 'Twitter',
			iconName: 'twitter',
			iconColor: colors.white,
			btnColor: '#55ACEE',
			onPress: onPressTwitter,
		},
		{
			name: 'GooglePlus',
			iconName: 'google-plus',
			iconColor: colors.white,
			btnColor: '#DD4B39',
			onPress: onPressGooglePlus,
		},
	];

	return (
		<Flex direction="row" style={styles.container}>
			{authViaSocials.map(
				({ name, iconName, iconColor, btnColor, onPress }) => (
					<IconButton
						key={name}
						btnStyle={[styles.iconBtn, { backgroundColor: btnColor }]}
						iconColor={iconColor}
						iconName={iconName}
						iconSize={27}
						testID={`${name}-icon-btn-test-id`}
						onPress={onPress}
					/>
				)
			)}
		</Flex>
	);
};
