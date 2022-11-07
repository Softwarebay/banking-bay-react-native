import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ImageSourcePropType } from 'react-native';

import type { NavigationProp } from 'navigation';

import { OnboardingTemplate } from 'components/templates';

import { onboarding1, onboarding2, onboarding3 } from 'assets/images';

interface IOnboardingSlide {
	id: number;
	title: string;
	description: string;
	img: {
		name: 'onboarding1' | 'onboarding2' | 'onboarding3';
		src: ImageSourcePropType;
		aspectRatio: number;
	};
}

const onboardingSlides: IOnboardingSlide[] = [
	{
		id: 1,
		title: 'Welcome to BankingBay app!',
		description:
			'Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
		img: {
			name: 'onboarding1',
			src: onboarding1,
			aspectRatio: 335 / 426,
		},
	},
	{
		id: 2,
		title: 'Get a new card in a few clicks!',
		description:
			'Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
		img: {
			name: 'onboarding2',
			src: onboarding2,
			aspectRatio: 357 / 309,
		},
	},
	{
		id: 3,
		title: 'Easy payments all over the world!',
		description:
			'Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
		img: {
			name: 'onboarding3',
			src: onboarding3,
			aspectRatio: 335 / 319,
		},
	},
];

export const OnboardingScreen = () => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const navigation = useNavigation<NavigationProp>();

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
