import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import { AuthViaSocials } from './AuthViaSocials';

storiesOf('Organisms/AuthViaSocials', module)
	.addDecorator((getStory) => <CenterStory>{getStory()}</CenterStory>)
	.add('Default', () => (
		<AuthViaSocials
			onPressFacebook={action('onPressFacebook')}
			onPressGooglePlus={action('onPressGooglePlus')}
			onPressTwitter={action('onPressTwitter')}
		/>
	));
