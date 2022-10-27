import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import { MobilePaymentTemplate } from './MobilePaymentTemplate';

storiesOf('Templates/MobilePaymentTemplate', module)
	.addDecorator((getStory) => (
		<CenterStory style={{ paddingHorizontal: 0 }}>{getStory()}</CenterStory>
	))
	.add('Default', () => (
		<MobilePaymentTemplate
			inputPlaceholder={text('inputPlaceholder', '+17 | xxxxxxxxxx')}
			onSuccessMobilePayment={action('onSuccessMobilePayment')}
		/>
	));
