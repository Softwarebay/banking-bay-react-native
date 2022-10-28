import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import { onboarding1, onboarding2, onboarding3 } from 'assets/images';

import { IOnboardingSlide, OnboardingTemplate } from './OnboardingTemplate';

const storySlides: IOnboardingSlide[] = [
	{
		id: 1,
		img: {
			name: 'onboarding1',
			src: onboarding1,
			aspectRatio: 335 / 426,
		},
		title: 'Onboarding Slide Title 1',
		description: 'Onboarding slide description 1.',
	},
	{
		id: 2,
		img: {
			name: 'onboarding2',
			src: onboarding2,
			aspectRatio: 357 / 309,
		},
		title: 'Onboarding Slide Title 2',
		description: 'Onboarding slide description 2.',
	},
	{
		id: 3,
		img: {
			name: 'onboarding3',
			src: onboarding3,
			aspectRatio: 335 / 319,
		},
		title: 'Onboarding Slide Title 3',
		description: 'Onboarding slide description 3.',
	},
];

storiesOf('Templates/OnboardingTemplate', module)
	.addDecorator((getStory) => (
		<CenterStory style={{ paddingHorizontal: 0 }}>{getStory()}</CenterStory>
	))
	.add('Default', () => (
		<OnboardingTemplate
			currentSlideIndex={number('currentSlideIndex', 0, {
				range: true,
				max: 2,
				min: 0,
			})}
			onboardingSlides={storySlides}
			onPressOnboardingBtn={action('onPressOnboardingBtn')}
			onScroll={action('onScroll')}
		/>
	));
