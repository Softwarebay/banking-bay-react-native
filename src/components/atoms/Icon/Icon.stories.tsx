import { storiesOf } from '@storybook/react-native';
import { colors } from 'theme';
import { CenterStory } from 'utils/storybook/CenterStory';

import { Icon } from './Icon';

storiesOf('Atoms/Icon', module)
	.addDecorator((getStory) => (
		<CenterStory style={{ backgroundColor: colors.screenBackground }} center>
			{getStory()}
		</CenterStory>
	))
	.add('Logo', () => <Icon name="logo" />)
	.add('Facebook', () => <Icon name="facebook" />)
	.add('Twitter', () => <Icon name="twitter" />)
	.add('Google+', () => <Icon name="google-plus" />)
	.add('Check', () => <Icon name="check" />)
	.add('Eye off', () => <Icon name="eye-off" />);
