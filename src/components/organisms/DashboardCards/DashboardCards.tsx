import { useRef, useState } from 'react';
import {
	FlatList,
	Image,
	ImageBackground,
	ImageSourcePropType,
	useWindowDimensions,
	View,
	ViewabilityConfig,
	ViewToken,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Divider, Flex, IconButton, Paginator, Text } from 'components/atoms';

import { bgDashboard } from 'assets/backgrounds';
import { card1, card2 } from 'assets/images';
import { colors } from 'theme';

import { styles } from './DashboardCards.styles';

interface Props {
	navText: string;
	onPressProfileIconButton: () => void;
	onPressCreditCardsIconButton: () => void;
}

interface Card {
	id: number;
	cardImg: ImageSourcePropType;
}

const cards: Card[] = [
	{
		id: 1,
		cardImg: card1,
	},
	{
		id: 2,
		cardImg: card2,
	},
	{
		id: 3,
		cardImg: card1,
	},
];

export const DashboardCards = ({
	navText,
	onPressProfileIconButton,
	onPressCreditCardsIconButton,
}: Props) => {
	const { width } = useWindowDimensions();
	const [cardIndex, setCardIndex] = useState(0);

	const viewabilityConfig: ViewabilityConfig = {
		viewAreaCoveragePercentThreshold: 50,
	};

	const onViewableItemsChanged = ({
		viewableItems,
	}: {
		viewableItems: ViewToken[];
	}) => {
		const [{ index }] = viewableItems;
		setCardIndex(index ?? 0);
	};

	const viewabilityConfigCallbackPairs = useRef([
		{ viewabilityConfig, onViewableItemsChanged },
	]);

	return (
		<View style={styles.container}>
			<ImageBackground source={bgDashboard} style={[styles.bgImage, { width }]}>
				<SafeAreaView>
					<Flex direction="row" style={styles.nav}>
						<IconButton
							iconColor="#3B5999"
							iconName="profile-icon"
							iconSize={25}
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
							iconSize={25}
							testID="dashboard-cards-btn-test-id"
							onPress={onPressCreditCardsIconButton}
						/>
					</Flex>
					<Divider />
					<FlatList
						alwaysBounceHorizontal={false}
						contentContainerStyle={styles.cardContainer}
						data={cards}
						decelerationRate="fast"
						initialScrollIndex={cardIndex}
						renderItem={({ item }) => (
							<Image
								source={item.cardImg}
								style={[styles.card, { width: 0.8 * width }]}
							/>
						)}
						showsHorizontalScrollIndicator={false}
						snapToAlignment="center"
						viewabilityConfigCallbackPairs={
							viewabilityConfigCallbackPairs.current
						}
						horizontal
						pagingEnabled
					/>

					<View style={styles.paginatorContainer}>
						<Paginator
							activeColor={colors.white}
							currentIndex={cardIndex}
							slides={cards}
							testID="dashboard-cards-paginator-test-id"
						/>
					</View>
				</SafeAreaView>
			</ImageBackground>
		</View>
	);
};
