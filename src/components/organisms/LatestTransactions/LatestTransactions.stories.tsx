import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import {
	LatestTransactions,
	TransactionHistoryItem
} from './LatestTransactions';

const latestTransactions: TransactionHistoryItem[] = [
	{
		id: 'id1',
		iconName: 'smartphone',
		iconColor: '#FF8A71',
		transactionType: 'outgoing',
		title: '+17869871735',
		transactionCategory: 'Mobile Payment',
		amount: 25,
	},
	{
		id: 'id2',
		iconName: 'repeat',
		iconColor: '#55ACEE',
		transactionType: 'incoming',
		title: 'John Snow',
		transactionCategory: 'Money transfer',
		amount: 170.55,
	},
];

storiesOf('Organisms/LatestTransactions', module)
	.addDecorator((getStory) => <ViewStory>{getStory()}</ViewStory>)
	.add('Last two transactions', () => (
		<LatestTransactions
			latestTransactions={latestTransactions}
			onPressHeaderLink={action('onPressHeaderLink')}
		/>
	));
