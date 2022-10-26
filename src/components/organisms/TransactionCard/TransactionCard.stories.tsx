import { color, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import { TransactionCard } from './TransactionCard';

storiesOf('Organisms/TransactionCard', module)
	.addDecorator((getStory) => <CenterStory>{getStory()}</CenterStory>)
	.add('Outgoing transaction', () => (
		<TransactionCard
			amount={number('amount', 140.25)}
			category={text('subtitle', 'Money Transfer')}
			iconColor={color('iconColor', '#FF8A71')}
			iconName="smartphone"
			id="story-transaction-outgoing"
			title={text('title', 'Jane Doe')}
			type="outgoing"
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
		/>
	));
