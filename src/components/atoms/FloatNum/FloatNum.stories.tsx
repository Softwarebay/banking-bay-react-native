import { object, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { FloatNum } from './FloatNum';

const intStyleKnob = {
	fontSize: 32,
};

const floatStyleKnob = {
	fontSize: 20,
};

storiesOf('Atoms/FloatNum', module)
	.addDecorator((getStory) => <ViewStory center>{getStory()}</ViewStory>)
	.add('Default', () => (
		<FloatNum
			floatStyle={object('floatStyle', floatStyleKnob)}
			intStyle={object('intStyle', intStyleKnob)}
			number={text('number', '33.33')}
		/>
	));
