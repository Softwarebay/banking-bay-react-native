import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { ViewStory } from 'utils/storybook/ViewStory';

import { EmailInput } from './EmailInput';

storiesOf('Atoms/EmailInput', module)
	.addDecorator((getStory) => <ViewStory>{getStory()}</ViewStory>)
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
