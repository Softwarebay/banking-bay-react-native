import { color, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { colors } from 'theme';
import { ViewStory } from 'utils/storybook/ViewStory';

import { Icon } from './Icon';

storiesOf('Atoms/Icon', module)
	.addDecorator((getStory) => (
		<ViewStory style={{ backgroundColor: colors.screenBackground }} center>
			{getStory()}
		</ViewStory>
	))
	.add('Logo', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="logo"
			size={number('size', 20)}
		/>
	))
	.add('Facebook', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="facebook"
			size={number('size', 20)}
		/>
	))
	.add('Twitter', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="twitter"
			size={number('size', 20)}
		/>
	))
	.add('Google+', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="google-plus"
			size={number('size', 20)}
		/>
	))
	.add('Check', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="check"
			size={number('size', 20)}
		/>
	))
	.add('Eye off', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="eye-off"
			size={number('size', 20)}
		/>
	));
