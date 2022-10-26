import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import { MobileNumberInput } from './MobileNumberInput';

storiesOf('Molecules/MobileNumberInput', module)
	.addDecorator((getStory) => <CenterStory>{getStory()}</CenterStory>)
	.add('Default', () => (
		<MobileNumberInput
			flagIcon="flag-usa"
			placeholder={text('placeholder', '+17 | xxxxxxxxxx')}
			testID="MobileNumberInput-test-id"
		/>
	));
