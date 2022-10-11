import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import { OnboardingSlide } from './OnboardingSlide';

storiesOf('Molecules/OnboardingSlide', module)
	.addDecorator((getStory) => <CenterStory center>{getStory()}</CenterStory>)
	.add('Default', () => (
		<OnboardingSlide
			description={text('description', 'Onboarding slide description.')}
			id={1}
			title={text('title', 'Onboarding Slide Title')}
		/>
	));
