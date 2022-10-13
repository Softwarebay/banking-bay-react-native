import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import {
	FlatList,
	ImageBackground,
	ImageSourcePropType,
	View,
	ViewabilityConfig,
	ViewToken,
} from 'react-native';

import { Button, Logo, Paginator } from 'components/atoms';
import { OnboardingSlide } from 'components/molecules';

import { styles } from './OnboardingTemplate.styles';

export interface IOnboardingSlide {
	id: number;
	title: string;
	description: string;
	bgImage: ImageSourcePropType;
}

interface Props {
	onboardingSlides: IOnboardingSlide[];
	currentSlideIndex: number;
	onPressOnboardingBtn: () => void;
	onScroll: (index: number) => void;
}

export const OnboardingTemplate = ({
	onboardingSlides,
	currentSlideIndex,
	onPressOnboardingBtn,
	onScroll,
}: Props) => {
	const viewabilityConfig: ViewabilityConfig = {
		viewAreaCoveragePercentThreshold: 50,
	};

	const onViewableItemsChanged = ({
		viewableItems,
	}: {
		viewableItems: ViewToken[];
	}) => {
		const [{ index }] = viewableItems;
		onScroll(index ?? currentSlideIndex);
	};

	const viewabilityConfigCallbackPairs = useRef([
		{ viewabilityConfig, onViewableItemsChanged },
	]);

	return (
		<>
			<StatusBar style="light" />
			<ImageBackground
				source={onboardingSlides[currentSlideIndex].bgImage}
				style={styles.imgBackground}
			>
				<View style={styles.heroView} />
				<View style={styles.container}>
					<View style={styles.content}>
						<Logo testID="onboarding-logo-test-id" />
						<FlatList<IOnboardingSlide>
							bounces={false}
							contentContainerStyle={styles.carousel}
							data={onboardingSlides}
							renderItem={({ item }) => (
								<OnboardingSlide
									description={item.description}
									id={item.id}
									title={item.title}
								/>
							)}
							showsHorizontalScrollIndicator={false}
							viewabilityConfigCallbackPairs={
								viewabilityConfigCallbackPairs.current
							}
							horizontal
							pagingEnabled
						/>
						<Paginator
							currentIndex={currentSlideIndex}
							slides={onboardingSlides}
						/>
					</View>
					<Button
						testID="onboarding-btn-test-id"
						title="Get Started"
						onPress={onPressOnboardingBtn}
					/>
				</View>
			</ImageBackground>
		</>
	);
};
