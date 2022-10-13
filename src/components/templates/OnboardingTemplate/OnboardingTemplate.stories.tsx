import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import bgImg1 from 'assets/bg-onboarding-1.png';
import bgImg2 from 'assets/bg-onboarding-2.png';
import bgImg3 from 'assets/bg-onboarding-3.png';

import { IOnboardingSlide, OnboardingTemplate } from './OnboardingTemplate';

const storySlides: IOnboardingSlide[] = [
	{
		id: 1,
		bgImage: bgImg1,
		title: 'Onboarding Slide Title 1',
		description: 'Onboarding slide description 1.',
	},
	{
		id: 2,
		bgImage: bgImg2,
		title: 'Onboarding Slide Title 2',
		description: 'Onboarding slide description 2.',
	},
	{
		id: 3,
		bgImage: bgImg3,
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
