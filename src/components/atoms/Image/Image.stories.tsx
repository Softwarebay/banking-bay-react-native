import { object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { StyleProp, View, ViewStyle } from 'react-native';
import { colors } from 'theme';
import { ViewStory } from 'utils/storybook/ViewStory';

import { Image } from './Image';

const onboardingStyleKnob = {
	aspectRatio: 843 / 1200,
	width: '95%',
};
const onboardingViewStyle: StyleProp<ViewStyle> = {
	flex: 1,
	backgroundColor: colors.mainDark,
	justifyContent: 'center',
};

storiesOf('Atom/Image', module)
	.addDecorator((getStory) => <ViewStory>{getStory()}</ViewStory>)
	.add('Onboarding image 1', () => (
		<View style={onboardingViewStyle}>
			<Image name="onboarding1" style={object('style', onboardingStyleKnob)} />
		</View>
	))
	.add('Onboarding image 2', () => (
		<View style={onboardingViewStyle}>
			<Image name="onboarding2" style={object('style', onboardingStyleKnob)} />
		</View>
	))
	.add('Onboarding image 3', () => (
		<View style={onboardingViewStyle}>
			<Image name="onboarding3" style={object('style', onboardingStyleKnob)} />
		</View>
	));
