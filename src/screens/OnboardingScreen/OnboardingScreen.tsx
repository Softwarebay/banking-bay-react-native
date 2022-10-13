import { useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { OnboardingTemplate } from 'components/templates';

import type { StackParamList } from 'navigator';

import bgOnboarding1 from 'assets/bg-onboarding-1.png';
import bgOnboarding2 from 'assets/bg-onboarding-2.png';
import bgOnboarding3 from 'assets/bg-onboarding-3.png';

interface IOnboardingSlide {
	id: number;
	title: string;
	description: string;
	bgImage: ImageSourcePropType;
}

const onboardingSlides: IOnboardingSlide[] = [
	{
		id: 1,
		title: 'Welcome to BankingBay app!',
		description:
			'Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
		bgImage: bgOnboarding1,
	},
	{
		id: 2,
		title: 'Get a new card in a few clicks!',
		description:
			'Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
		bgImage: bgOnboarding2,
	},
	{
		id: 3,
		title: 'Easy payments all over the world!',
		description:
			'Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
		bgImage: bgOnboarding3,
	},
];

export const OnboardingScreen = () => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

	const onPressOnboardingBtn = () => {
		navigation.navigate('SignIn');
	};

	const onScroll = (index: number) => {
		setCurrentSlideIndex(index);
	};

	return (
		<OnboardingTemplate
			currentSlideIndex={currentSlideIndex}
			onboardingSlides={onboardingSlides}
			onPressOnboardingBtn={onPressOnboardingBtn}
			onScroll={onScroll}
		/>
	);
};
