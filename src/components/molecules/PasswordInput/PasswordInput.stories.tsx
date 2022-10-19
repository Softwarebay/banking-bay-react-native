import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import { PasswordInput } from './PasswordInput';

storiesOf('Molecules/PasswordInput', module)
	.addDecorator((getStory) => <CenterStory>{getStory()}</CenterStory>)
	.add('Default', () => (
		<PasswordInput
			placeholder={text('placeholder', 'Enter your password')}
			testID={text('testID', 'PasswordInput-test-id')}
		/>
	));
