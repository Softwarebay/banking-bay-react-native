import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { PasswordInput } from './PasswordInput';

storiesOf('Molecules/PasswordInput', module)
	.addDecorator((getStory) => <ViewStory>{getStory()}</ViewStory>)
	.add('Default', () => (
		<PasswordInput
			placeholder={text('placeholder', 'Enter your password')}
			testID={text('testID', 'PasswordInput-test-id')}
		/>
	));
