import { action } from '@storybook/addon-actions';
import { object, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { CenterStory } from 'utils/storybook/CenterStory';

import { Facebook, GooglePlus, Twitter } from 'assets/icons';
import { IconButton } from './IconButton';

const btnStylesKnob = {
	width: 60,
	height: 60,
};

storiesOf('Atoms/IconButton', module)
	.addDecorator((getStory) => <CenterStory center>{getStory()}</CenterStory>)
	.add('Facebook', () => (
		<IconButton
			btnStyle={object('btnStyle', {
				...btnStylesKnob,
				backgroundColor: '#3B5999',
			})}
			icon={<Facebook />}
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
			icon={<Twitter />}
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
			icon={<GooglePlus />}
			testID={text('testID', 'IconButton-test-id')}
			onPress={action('onPress')}
		/>
	));
