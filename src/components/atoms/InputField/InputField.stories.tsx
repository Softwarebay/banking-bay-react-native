import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { CenterStory } from 'utils/storybook/CenterStory';
import { colors } from 'theme';

import { InputField } from './InputField';

storiesOf('Atoms/InputField', module)
	.addDecorator((getStory) => (
		<CenterStory style={{ backgroundColor: colors.screenBackground }}>
			{getStory()}
		</CenterStory>
	))
	.add('Text', () => (
		<InputField
			placeholder={text('placeholder', 'Enter your mail')}
			secureTextEntry={boolean('secureTextEntry', false)}
			testID={text('testID', 'InputField-test-id')}
		/>
	))
	.add('Password', () => (
		<InputField
			placeholder={text('placeholder', 'Enter your password')}
			secureTextEntry={boolean('secureTextEntry', true)}
			testID={text('testID', 'InputField-test-id')}
		/>
	));
