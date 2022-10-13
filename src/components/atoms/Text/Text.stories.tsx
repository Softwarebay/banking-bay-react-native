import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import { Text } from './Text';

storiesOf('Atoms/Text', module)
	.addDecorator((getStory) => <CenterStory center>{getStory()}</CenterStory>)
	.add('Default', () => <Text text={text('text', 'Body text')} />)
	.add('Long text', () => (
		<Text
			text={text(
				'text',
				'Lorem ipsum dolor sit amet. Ex quidem iure vitae neque et expedita officia a laboriosam reprehenderit eos inventore doloremque sit voluptate aperiam et architecto iusto?'
			)}
		/>
	));
