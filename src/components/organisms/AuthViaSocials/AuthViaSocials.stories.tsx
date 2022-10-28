import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { AuthViaSocials } from './AuthViaSocials';

storiesOf('Organisms/AuthViaSocials', module)
	.addDecorator((getStory) => <ViewStory>{getStory()}</ViewStory>)
	.add('Default', () => (
		<AuthViaSocials
			onPressFacebook={action('onPressFacebook')}
			onPressGooglePlus={action('onPressGooglePlus')}
			onPressTwitter={action('onPressTwitter')}
		/>
	));
