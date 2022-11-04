import { action } from '@storybook/addon-actions';
import { object, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { colors } from 'theme';
import { ViewStory } from 'utils/storybook/ViewStory';

import {
	TransactionDetails,
	TransactionDetailsTemplate,
} from './TransactionDetailsTemplate';

const transactionDetails: TransactionDetails = {
	date: 'Sep 10, 2022 at 11:34 AM',
	category: 'Mobile Payment',
	categoryIcon: 'smartphone',
	iconColor: colors.white,
	iconBg: '#FF8A71',
	amount: '10.00',
	isIncoming: false,
	sentTo: 'Hillary Holmes',
	card: '**** 4253',
	currency: 'USD',
	fee: '0.00',
	balance: '4853.27',
};

storiesOf('Templates/TransactionDetailsTemplate', module)
	.addDecorator((getStory) => <ViewStory fullscreen>{getStory()}</ViewStory>)
	.add('Default', () => (
		<TransactionDetailsTemplate
			buttonTitle={text('buttonTitle', 'Button')}
			transactionDetails={object('transactionDetails', transactionDetails)}
			onPressPrimaryButton={action('onPressPrimaryButton')}
		/>
	));
