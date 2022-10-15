import { action } from '@storybook/addon-actions';
import { object, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { CenterStory } from 'utils/storybook/CenterStory';
import { Heading, IconButton } from 'components/atoms';

import { Card } from './Card';

const cardStyleKnob = {
	height: 60,
};

storiesOf('Atoms/Card', module)
	.addDecorator((getStory) => <CenterStory>{getStory()}</CenterStory>)
	.add('With text and icon button', () => (
		<Card
			style={object('style', cardStyleKnob)}
			testID={text('testID', 'Card-test-id')}
		>
			<Heading
				size="h6"
				style={{ flex: 1 }}
				testID="heading-test-id"
				text="Text inside Card"
			/>
			<IconButton
				iconName="check"
				testID="IconButton-test-id"
				onPress={action('onPressIconButton')}
			/>
		</Card>
	));