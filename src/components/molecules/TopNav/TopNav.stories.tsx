import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import { TopNav } from './TopNav';

storiesOf('Molecules/TopNav', module)
	.addDecorator((getStory) => (
		<CenterStory style={{ paddingHorizontal: 0 }}>{getStory()}</CenterStory>
	))
	.add('Default', () => (
		<TopNav
			screenTitle={text('screenTitle', 'Screen')}
			testID={text('testID', 'TopNav-test-id')}
			onPressButtonLeft={action('onPressButtonLeft')}
		/>
	));
