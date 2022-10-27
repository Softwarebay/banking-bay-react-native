import { object, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import { FloatNum } from './FloatNum';

const intStyleKnob = {
	fontSize: 32,
};

const floatStyleKnob = {
	fontSize: 20,
};

storiesOf('Atoms/FloatNum', module)
	.addDecorator((getStory) => <CenterStory center>{getStory()}</CenterStory>)
	.add('Default', () => (
		<FloatNum
			floatStyle={object('floatStyle', floatStyleKnob)}
			intStyle={object('intStyle', intStyleKnob)}
			number={text('number', '33.33')}
		/>
	));
