import { action } from '@storybook/addon-actions';
import { color, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { TransactionCard } from './TransactionCard';

storiesOf('Organisms/TransactionCard', module)
	.addDecorator((getStory) => <ViewStory>{getStory()}</ViewStory>)
	.add('Outgoing transaction', () => (
		<TransactionCard
			amount={number('amount', 140.25)}
			category={text('subtitle', 'Money Transfer')}
			iconColor={color('iconColor', '#FF8A71')}
			iconName="smartphone"
			id="story-transaction-outgoing"
			title={text('title', 'Jane Doe')}
			type="outgoing"
			onPress={action('onPress')}
		/>
	))
	.add('Incoming transaction', () => (
		<TransactionCard
			amount={number('amount', 140.25)}
			category={text('subtitle', 'Money Transfer')}
			iconColor={color('iconColor', '#FF8A71')}
			iconName="smartphone"
			id="story-transaction-incoming"
			title={text('title', 'Jane Doe')}
			type="incoming"
			onPress={action('onPress')}
		/>
	));
