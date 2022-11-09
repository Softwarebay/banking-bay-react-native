import { object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { StyleProp, View, ViewStyle } from 'react-native';
import { colors } from 'theme';
import { ViewStory } from 'utils/storybook/ViewStory';

import { Image } from './Image';

const styleKnob = {
	width: '80%',
};
const darkViewStyle: StyleProp<ViewStyle> = {
	flex: 1,
	backgroundColor: colors.mainDark,
	justifyContent: 'center',
	alignItems: 'center',
};

storiesOf('Atom/Image', module)
	.addDecorator((getStory) => <ViewStory fullscreen>{getStory()}</ViewStory>)
	.add('Onboarding image 1', () => (
		<View style={darkViewStyle}>
			<Image name="onboarding1" style={object('style', styleKnob)} />
		</View>
	))
	.add('Onboarding image 2', () => (
		<View style={darkViewStyle}>
			<Image name="onboarding2" style={object('style', styleKnob)} />
		</View>
	))
	.add('Onboarding image 3', () => (
		<View style={darkViewStyle}>
			<Image name="onboarding3" style={object('style', styleKnob)} />
		</View>
	))
	.add('Card 1', () => (
		<View style={darkViewStyle}>
			<Image name="card1" style={object('style', styleKnob)} />
		</View>
	))
	.add('Card 2', () => (
		<View style={darkViewStyle}>
			<Image name="card2" style={object('style', styleKnob)} />
		</View>
	));
