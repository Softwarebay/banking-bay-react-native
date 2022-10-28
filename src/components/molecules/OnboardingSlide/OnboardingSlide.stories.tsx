import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { OnboardingSlide } from './OnboardingSlide';

storiesOf('Molecules/OnboardingSlide', module)
	.addDecorator((getStory) => <ViewStory center>{getStory()}</ViewStory>)
	.add('Default', () => (
		<OnboardingSlide
			description={text('description', 'Onboarding slide description.')}
			id={1}
			title={text('title', 'Onboarding Slide Title')}
		/>
	));
