import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { Divider } from './Divider';

storiesOf('Atoms/Divider', module)
	.addDecorator((getStory) => <ViewStory>{getStory()}</ViewStory>)
	.add('Default', () => <Divider testID="Divider-test-id" />);
