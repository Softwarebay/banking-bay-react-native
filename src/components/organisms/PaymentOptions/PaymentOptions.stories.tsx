import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { PaymentOptions } from './PaymentOptions';

storiesOf('Organisms/PaymentOptions', module)
	.addDecorator((getStory) => <ViewStory>{getStory()}</ViewStory>)
	.add('Default', () => (
		<PaymentOptions
			onPressMakePayment={action('onPressMakePayment')}
			onPressMobilePayment={action('onPressMobilePayment')}
			onPressMoneyTransfer={action('onPressMoneyTransfer')}
			onPressTopUpPayment={action('onPressTopUpPayment')}
		/>
	));
