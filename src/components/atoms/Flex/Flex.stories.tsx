import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { Flex } from './Flex';

storiesOf('Atoms/Flex', module)
	.addDecorator((getStory) => <ViewStory center>{getStory()}</ViewStory>)
	.add('Column', () => (
		<Flex direction="column">
			<View
				style={{ height: 100, width: 100, borderWidth: 2, marginBottom: 5 }}
			/>
			<View
				style={{ height: 100, width: 100, borderWidth: 2, marginBottom: 5 }}
			/>
		</Flex>
	))
	.add('Row', () => (
		<Flex direction="row">
			<View
				style={{ height: 100, width: 100, borderWidth: 2, marginLeft: 5 }}
			/>
			<View
				style={{ height: 100, width: 100, borderWidth: 2, marginLeft: 5 }}
			/>
		</Flex>
	));
