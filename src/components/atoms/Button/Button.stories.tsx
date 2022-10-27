import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import { Button } from './Button';

storiesOf('Atoms/Button', module)
	.addDecorator((getStory) => <CenterStory>{getStory()}</CenterStory>)
	.add('Primary', () => (
		<Button
			testID={text('testID', 'btn-test-id')}
			title={text('title', 'Button')}
			type="primary"
			onPress={action('onPress')}
		/>
	))
	.add('Secondary', () => (
		<Button
			testID={text('testID', 'btn-test-id')}
			title={text('title', 'Button')}
			type="secondary"
			onPress={action('onPress')}
		/>
	));
