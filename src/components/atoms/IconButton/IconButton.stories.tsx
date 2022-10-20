import { action } from '@storybook/addon-actions';
import { color, object, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { colors } from 'theme';

import { CenterStory } from 'utils/storybook/CenterStory';

import { IconButton } from './IconButton';

const btnStylesKnob = {
	width: 60,
	height: 60,
	borderRadius: 100,
};

storiesOf('Atoms/IconButton', module)
	.addDecorator((getStory) => <CenterStory center>{getStory()}</CenterStory>)
	.add('Facebook', () => (
		<IconButton
			btnStyle={object('btnStyle', {
				...btnStylesKnob,
				backgroundColor: '#3B5999',
			})}
			iconColor={color('iconColor', colors.white)}
			iconName="facebook"
			testID={text('testID', 'IconButton-test-id')}
			onPress={action('onPress')}
		/>
	))
	.add('Twitter', () => (
		<IconButton
			btnStyle={object('btnStyle', {
				...btnStylesKnob,
				backgroundColor: '#55ACEE',
			})}
			iconColor={color('iconColor', colors.white)}
			iconName="twitter"
			testID={text('testID', 'IconButton-test-id')}
			onPress={action('onPress')}
		/>
	))
	.add('Google', () => (
		<IconButton
			btnStyle={object('btnStyle', {
				...btnStylesKnob,
				backgroundColor: '#DD4B39',
			})}
			iconColor={color('iconColor', colors.white)}
			iconName="google-plus"
			testID={text('testID', 'IconButton-test-id')}
			onPress={action('onPress')}
		/>
	));
