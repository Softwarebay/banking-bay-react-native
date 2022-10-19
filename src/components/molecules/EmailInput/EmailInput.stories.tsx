import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { CenterStory } from 'utils/storybook/CenterStory';

import { EmailInput } from './EmailInput';

storiesOf('Atoms/EmailInput', module)
	.addDecorator((getStory) => <CenterStory>{getStory()}</CenterStory>)
	.add('Valid', () => (
		<EmailInput
			isValid={boolean('isValid', true)}
			placeholder={text('placeholder', 'Enter your email')}
			testID={text('testID', 'EmailInput-test-id')}
		/>
	))
	.add('Not valid', () => (
		<EmailInput
			isValid={boolean('isValid', false)}
			placeholder={text('placeholder', 'Enter your email')}
			testID={text('testID', 'EmailInput-test-id')}
		/>
	));
