import { action } from '@storybook/addon-actions';
import { color, object, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { Heading, IconButton } from 'components/atoms';
import { ViewStory } from 'utils/storybook/ViewStory';

import { colors } from 'theme';
import { Card } from './Card';

const cardStyleKnob = {
	height: 60,
	paddingHorizontal: 20,
	paddingVertical: 14,
};

storiesOf('Atoms/Card', module)
	.addDecorator((getStory) => <ViewStory>{getStory()}</ViewStory>)
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
				iconColor={color('iconColor', colors.mainDark)}
				iconName="check"
				testID="IconButton-test-id"
				onPress={action('onPressIconButton')}
			/>
		</Card>
	));
