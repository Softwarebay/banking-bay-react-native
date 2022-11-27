import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { SuccessRegistrationTemplate } from './SuccessRegistrationTemplate';

storiesOf('Templates/SuccessRegistrationTemplate', module)
	.addDecorator((getStory) => <ViewStory fullscreen>{getStory()}</ViewStory>)
	.add('Default', () => (
		<SuccessRegistrationTemplate
			primaryButtonTitle={text('primaryButtonTitle', 'Primary')}
			onPressPrimaryButton={action('onPressPrimaryButton')}
		/>
	));
