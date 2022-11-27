import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { TextInput } from './TextInput';

storiesOf('Molecules/TextInput', module)
	.addDecorator((getStory) => <ViewStory>{getStory()}</ViewStory>)
	.add('Default', () => (
		<TextInput placeholder={text('placeholder', 'Enter text')} />
	));
