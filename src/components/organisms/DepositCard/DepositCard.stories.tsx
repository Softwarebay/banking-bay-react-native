import { action } from '@storybook/addon-actions';
import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { DepositCard } from './DepositCard';

storiesOf('Organisms/DepositCard', module)
	.addDecorator((getStory) => <ViewStory>{getStory()}</ViewStory>)
	.add('Ongoing', () => (
		<DepositCard
			amount={number('amount', 300000)}
			currency={text('currency', 'USD')}
			date={text('date', 'Sep 1 - Mar 1, 2022')}
			isFinished={false}
			lastIncome={number('lastIncome', 2560)}
			rate={number('rate', 0.08, { range: true, min: 0, max: 1, step: 0.01 })}
			testID="test-id"
			onPressExtendButton={action('onPressExtendButton')}
			onPressTopUpButton={action('onPressTopUpButton')}
			onPressWithdrawalButton={action('onPressWithdrawalButton')}
		/>
	))
	.add('Finished', () => (
		<DepositCard
			amount={number('amount', 300000)}
			currency={text('currency', 'USD')}
			date={text('date', 'Sep 1 - Mar 1, 2022')}
			lastIncome={number('lastIncome', 2560)}
			rate={number('rate', 0.08, { range: true, min: 0, max: 1, step: 0.01 })}
			testID="test-id"
			isFinished
			onPressExtendButton={action('onPressExtendButton')}
			onPressTopUpButton={action('onPressTopUpButton')}
			onPressWithdrawalButton={action('onPressWithdrawalButton')}
		/>
	));
