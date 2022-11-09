import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { OnboardingTemplate } from 'components/templates';
import type { ImageProps } from 'components/atoms';
import type { NavigationProp } from 'navigation';

interface OnboardingSlide {
	id: number;
	title: string;
	description: string;
	img: ImageProps['name'];
}

const onboardingSlides: OnboardingSlide[] = [
	{
		id: 1,
		title: 'Welcome to BankingBay app!',
		description:
			'Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
		img: 'onboarding1',
	},
	{
		id: 2,
		title: 'Get a new card in a few clicks!',
		description:
			'Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
		img: 'onboarding2',
	},
	{
		id: 3,
		title: 'Easy payments all over the world!',
		description:
			'Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
		img: 'onboarding3',
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
