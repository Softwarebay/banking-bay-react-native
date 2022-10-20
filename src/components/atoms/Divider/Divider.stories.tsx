import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import { Divider } from './Divider';

storiesOf('Atoms/Divider', module)
	.addDecorator((getStory) => <CenterStory>{getStory()}</CenterStory>)
	.add('Default', () => <Divider testID="Divider-test-id" />);
