import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import { PaymentOptions } from './PaymentOptions';

storiesOf('Organisms/PaymentOptions', module)
	.addDecorator((getStory) => <CenterStory>{getStory()}</CenterStory>)
	.add('Default', () => (
		<PaymentOptions
			onPressMakePayment={action('onPressMakePayment')}
			onPressMobilePayment={action('onPressMobilePayment')}
			onPressMoneyTransfer={action('onPressMoneyTransfer')}
			onPressTopUpPayment={action('onPressTopUpPayment')}
		/>
	));
