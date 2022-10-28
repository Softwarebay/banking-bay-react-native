import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { Text } from './Text';

storiesOf('Atoms/Text', module)
	.addDecorator((getStory) => <ViewStory center>{getStory()}</ViewStory>)
	.add('Default', () => <Text text={text('text', 'Body text')} />)
	.add('Long text', () => (
		<Text
			text={text(
				'text',
				'Lorem ipsum dolor sit amet. Ex quidem iure vitae neque et expedita officia a laboriosam reprehenderit eos inventore doloremque sit voluptate aperiam et architecto iusto?'
			)}
		/>
	));
