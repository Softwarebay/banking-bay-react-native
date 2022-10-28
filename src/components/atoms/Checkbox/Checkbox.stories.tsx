import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { Checkbox } from './Checkbox';

storiesOf('Atoms/Checkbox', module)
	.addDecorator((getStory) => <ViewStory center>{getStory()}</ViewStory>)
	.add('Default', () => (
		<Checkbox testID={text('testID', 'Checkbox-test-id')} />
	));
