import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import {
	FlatList,
	Image,
	ImageBackground,
	ImageSourcePropType,
	View,
	ViewabilityConfig,
	ViewToken,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { bgOnboarding } from 'assets/backgrounds';

import { Button, Logo, Paginator } from 'components/atoms';
import { OnboardingSlide } from 'components/molecules';

import { styles } from './OnboardingTemplate.styles';

export interface IOnboardingSlide {
	id: number;
	title: string;
	description: string;
	img: {
		name: 'onboarding1' | 'onboarding2' | 'onboarding3';
		src: ImageSourcePropType;
		aspectRatio: number;
	};
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
	const {
		img: { aspectRatio, name, src },
	} = onboardingSlides[currentSlideIndex];

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
			<ImageBackground source={bgOnboarding} style={styles.imgBackground}>
				<SafeAreaView style={styles.heroView}>
					<Image
						source={src}
						style={[styles.heroImg, { aspectRatio }, styles[name]]}
					/>
				</SafeAreaView>
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
