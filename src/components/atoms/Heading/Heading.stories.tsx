import { color, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { colors } from 'theme';
import { CenterStory } from 'utils/storybook/CenterStory';

import { Heading } from './Heading';

storiesOf('Atoms/Heading', module)
	.addDecorator((getStory) => <CenterStory center>{getStory()}</CenterStory>)
	.add('h1', () => (
		<Heading
			color={color('color', colors.mainDark)}
			size="h1"
			testID={text('testID', 'Heading-test-id')}
			text={text('title', 'Heading')}
		/>
	))
	.add('h2', () => (
		<Heading
			color={color('color', colors.mainDark)}
			size="h2"
			testID={text('testID', 'Heading-test-id')}
			text={text('title', 'Heading')}
		/>
	))
	.add('h3', () => (
		<Heading
			color={color('color', colors.mainDark)}
			size="h3"
			testID={text('testID', 'Heading-test-id')}
			text={text('title', 'Heading')}
		/>
	))
	.add('h4', () => (
		<Heading
			color={color('color', colors.mainDark)}
			size="h4"
			testID={text('testID', 'Heading-test-id')}
			text={text('title', 'Heading')}
		/>
	))
	.add('h5', () => (
		<Heading
			color={color('color', colors.mainDark)}
			size="h5"
			testID={text('testID', 'Heading-test-id')}
			text={text('title', 'Heading')}
		/>
	))
	.add('h6', () => (
		<Heading
			color={color('color', colors.mainDark)}
			size="h6"
			testID={text('testID', 'Heading-test-id')}
			text={text('title', 'Heading')}
		/>
	))
	.add('h3 success', () => (
		<Heading
			color={color('color', colors.success)}
			size="h3"
			testID={text('testID', 'Heading-test-id')}
			text={text('title', 'Heading')}
		/>
	))
	.add('h3 error', () => (
		<Heading
			color={color('color', colors.error)}
			size="h3"
			testID={text('testID', 'Heading-test-id')}
			text={text('title', 'Heading')}
		/>
	))
	.add('h3 long text', () => (
		<Heading
			color={color('color', colors.mainDark)}
			size="h3"
			testID={text('testID', 'Heading-test-id')}
			text={text(
				'title',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
			)}
		/>
	));
