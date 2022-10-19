import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import { Checkbox } from './Checkbox';

storiesOf('Atoms/Checkbox', module)
	.addDecorator((getStory) => <CenterStory center>{getStory()}</CenterStory>)
	.add('Default', () => (
		<Checkbox testID={text('testID', 'Checkbox-test-id')} />
	));
