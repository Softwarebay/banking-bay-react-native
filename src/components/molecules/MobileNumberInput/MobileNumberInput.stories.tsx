import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { MobileNumberInput } from './MobileNumberInput';

storiesOf('Molecules/MobileNumberInput', module)
	.addDecorator((getStory) => <ViewStory>{getStory()}</ViewStory>)
	.add('Default', () => (
		<MobileNumberInput
			flagIcon="flag-usa"
			placeholder={text('placeholder', '+17 | xxxxxxxxxx')}
			testID="MobileNumberInput-test-id"
		/>
	));
