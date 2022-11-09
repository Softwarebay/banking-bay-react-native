import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { IOnboardingSlide, OnboardingTemplate } from './OnboardingTemplate';

const storySlides: IOnboardingSlide[] = [
	{
		id: 1,
		img: 'onboarding1',
		title: 'Onboarding Slide Title 1',
		description: 'Onboarding slide description 1.',
	},
	{
		id: 2,
		img: 'onboarding2',
		title: 'Onboarding Slide Title 2',
		description: 'Onboarding slide description 2.',
	},
	{
		id: 3,
		img: 'onboarding3',
		title: 'Onboarding Slide Title 3',
		description: 'Onboarding slide description 3.',
	},
];

storiesOf('Templates/OnboardingTemplate', module)
	.addDecorator((getStory) => <ViewStory fullscreen>{getStory()}</ViewStory>)
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
