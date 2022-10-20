import { color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { colors } from 'theme';
import { CenterStory } from 'utils/storybook/CenterStory';

import { Icon } from './Icon';

storiesOf('Atoms/Icon', module)
	.addDecorator((getStory) => (
		<CenterStory style={{ backgroundColor: colors.screenBackground }} center>
			{getStory()}
		</CenterStory>
	))
	.add('Logo', () => (
		<Icon color={color('color', colors.mainDark)} fill="none" name="logo" />
	))
	.add('Facebook', () => (
		<Icon
			color={color('color', colors.mainDark)}
			fill={color('fill', colors.mainDark)}
			name="facebook"
		/>
	))
	.add('Twitter', () => (
		<Icon
			color={color('color', colors.mainDark)}
			fill={color('fill', colors.mainDark)}
			name="twitter"
		/>
	))
	.add('Google+', () => (
		<Icon
			color={color('color', colors.mainDark)}
			fill={color('fill', colors.mainDark)}
			name="google-plus"
		/>
	))
	.add('Check', () => (
		<Icon color={color('color', colors.mainDark)} fill="none" name="check" />
	))
	.add('Eye off', () => (
		<Icon color={color('color', colors.mainDark)} fill="none" name="eye-off" />
	));
