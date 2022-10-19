import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { CenterStory } from 'utils/storybook/CenterStory';

import { Link } from './Link';

storiesOf('Atoms/Link', module)
	.addDecorator((getStory) => <CenterStory center>{getStory()}</CenterStory>)
	.add('Default', () => (
		<Link
			testID={text('testID', 'Link-test-id')}
			text={text('text', 'Click me!')}
			onPress={action('onPress')}
		/>
	));
