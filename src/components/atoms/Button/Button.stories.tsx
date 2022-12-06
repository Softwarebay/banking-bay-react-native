import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { Button } from './Button';

storiesOf('Atoms/Button', module)
	.addDecorator((getStory) => <ViewStory>{getStory()}</ViewStory>)
	.add('Primary', () => (
		<Button
			testID="btn-test-id"
			title={text('title', 'Button')}
			type="primary"
			onPress={action('onPress')}
		/>
	))
	.add('Secondary', () => (
		<Button
			testID="btn-test-id"
			title={text('title', 'Button')}
			type="secondary"
			onPress={action('onPress')}
		/>
	))
	.add('Ternary', () => (
		<Button
			testID="btn-test-id"
			title={text('title', 'Button')}
			type="ternary"
			onPress={action('onPress')}
		/>
	));
