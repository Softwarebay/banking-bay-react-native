import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import {
	FlatList,
	ImageBackground,
	useWindowDimensions,
	View,
	ViewabilityConfig,
	ViewToken,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
	Button,
	Heading,
	Image,
	ImageProps,
	Logo,
	Paginator,
	Text,
} from 'components/atoms';

import { bgOnboarding } from 'assets/backgrounds';

import { styles } from './OnboardingTemplate.styles';

export interface IOnboardingSlide {
	id: number;
	title: string;
	description: string;
	img: ImageProps['name'];
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
	const { width } = useWindowDimensions();
	const { img } = onboardingSlides[currentSlideIndex];

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
					<Image name={img} style={styles.heroImg} />
				</SafeAreaView>
				<View style={styles.container}>
					<View style={styles.content}>
						<Logo testID="onboarding-logo-test-id" />
						<FlatList<IOnboardingSlide>
							contentContainerStyle={styles.carousel}
							data={onboardingSlides}
							renderItem={({ item: { description, title, id } }) => (
								<View style={{ width: width - 100 }}>
									<Heading
										size="h3"
										style={[styles.title, styles.text]}
										testID={`onboarding-heading-${id}-test-id`}
										text={title}
									/>
									<Text
										style={[styles.subtitle, styles.text]}
										testID={`onboarding-text-${id}-test-id`}
										text={description}
									/>
								</View>
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
