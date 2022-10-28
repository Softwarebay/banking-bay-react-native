import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { ViewStory } from 'utils/storybook/ViewStory';

import { Link } from './Link';

storiesOf('Atoms/Link', module)
	.addDecorator((getStory) => <ViewStory center>{getStory()}</ViewStory>)
	.add('Default', () => (
		<Link
			testID={text('testID', 'Link-test-id')}
			text={text('text', 'Click me!')}
			onPress={action('onPress')}
		/>
	));
