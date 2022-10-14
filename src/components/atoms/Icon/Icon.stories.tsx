import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { colors } from 'theme';
import { CenterStory } from 'utils/storybook/CenterStory';

import { Icon } from './Icon';

storiesOf('Atom/Icon', module)
	.addDecorator((getStory) => (
		<CenterStory style={{ backgroundColor: colors.screenBackground }} center>
			{getStory()}
		</CenterStory>
	))
	.add('Logo', () => (
		<Icon
			height={number('height', 100, {})}
			name="logo"
			width={number('width', 100, {})}
		/>
	))
	.add('Facebook', () => (
		<Icon
			height={number('height', 100, {})}
			name="facebook"
			width={number('width', 100, {})}
		/>
	))
	.add('Twitter', () => (
		<Icon
			height={number('height', 100, {})}
			name="twitter"
			width={number('width', 100, {})}
		/>
	))
	.add('Google+', () => (
		<Icon
			height={number('height', 100, {})}
			name="google-plus"
			width={number('width', 100, {})}
		/>
	))
	.add('Check', () => (
		<Icon
			height={number('height', 100, {})}
			name="check"
			width={number('width', 100, {})}
		/>
	))
	.add('Eye off', () => (
		<Icon
			height={number('height', 100, {})}
			name="eye-off"
			width={number('width', 100, {})}
		/>
	));
