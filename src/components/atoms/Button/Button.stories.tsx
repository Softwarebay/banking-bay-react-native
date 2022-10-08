import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import { Button } from './Button';

storiesOf('Atoms/Button', module)
	.addDecorator((getStory) => <CenterStory>{getStory()}</CenterStory>)
	.add('Default', () => (
		<Button
			testID={text('testID', 'btn-test-id')}
			title={text('title', 'Button')}
			onPress={action('onPress')}
		/>
	));
