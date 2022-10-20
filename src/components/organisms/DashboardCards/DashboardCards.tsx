import { ImageBackground, useWindowDimensions, View } from 'react-native';

import { bgDashboard } from 'assets/backgrounds';
import { Divider, Flex, IconButton, Text } from 'components/atoms';
import { colors } from 'theme';
import { styles } from './DashboardCards.styles';

interface Props {
	navText: string;
	onPressProfileIconButton: () => void;
	onPressCreditCardsIconButton: () => void;
}

export const DashboardCards = ({
	navText,
	onPressProfileIconButton,
	onPressCreditCardsIconButton,
}: Props) => {
	const { width } = useWindowDimensions();

	return (
		<View style={styles.container}>
			<ImageBackground source={bgDashboard} style={[styles.bgImage, { width }]}>
				<Flex direction="row" style={styles.nav}>
					<IconButton
						iconColor="#3B5999"
						iconName="profile-icon"
						testID="dashboard-profile-icon-btn-test-id"
						onPress={onPressProfileIconButton}
					/>
					<Text
						style={styles.navText}
						testID="dashboard-nav-text-test-id"
						text={navText}
					/>
					<IconButton
						iconColor={colors.white}
						iconName="credit-cards"
						testID="dashboard-cards-btn-test-id"
						onPress={onPressCreditCardsIconButton}
					/>
				</Flex>
				<Divider />
			</ImageBackground>
		</View>
	);
};
