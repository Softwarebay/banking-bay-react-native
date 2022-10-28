import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { MobilePaymentTemplate } from './MobilePaymentTemplate';

storiesOf('Templates/MobilePaymentTemplate', module)
	.addDecorator((getStory) => <ViewStory fullscreen>{getStory()}</ViewStory>)
	.add('Default', () => (
		<MobilePaymentTemplate
			inputPlaceholder={text('inputPlaceholder', '+17 | xxxxxxxxxx')}
			onSuccessMobilePayment={action('onSuccessMobilePayment')}
		/>
	));
