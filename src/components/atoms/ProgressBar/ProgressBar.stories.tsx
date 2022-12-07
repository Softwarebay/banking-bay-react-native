import { color, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { ProgressBar } from './ProgressBar';

storiesOf('Atoms/ProgressBar', module)
	.addDecorator((getStory) => <ViewStory>{getStory()}</ViewStory>)
	.add('Not full', () => (
		<ProgressBar
			maxValue={number('maxValue', 1000)}
			progressColor={color('progressColor', '#3EB290')}
			testID="ProgressBar-test-id"
			value={number('value', 700, { range: true, max: 1000, min: 0, step: 1 })}
		/>
	))
	.add('Full', () => (
		<ProgressBar
			maxValue={number('maxValue', 1000)}
			progressColor={color('progressColor', '#3EB290')}
			testID="ProgressBar-test-id"
			value={number('value', 1000, { range: true, max: 1000, min: 0, step: 1 })}
		/>
	));
