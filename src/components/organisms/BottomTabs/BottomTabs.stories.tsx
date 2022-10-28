/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment  */
import { TabNavigationState } from '@react-navigation/native';
import { storiesOf } from '@storybook/react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import { ViewStory } from 'utils/storybook/ViewStory';

import { TabParamList } from 'navigator/TabNavigator';

import { BottomTabs } from './BottomTabs';

const state: TabNavigationState<TabParamList> = {
	type: 'tab',
	key: 'tab-1',
	routeNames: ['Dashboard', 'Deposits', 'Loans', 'Notifications', 'More'],
	routes: [
		{ key: 'Dashboard-1', name: 'Dashboard' },
		{ key: 'Deposits-1', name: 'Deposits' },
		{ key: 'Loans-1', name: 'Loans' },
		{ key: 'Notifications-1', name: 'Notifications' },
		{ key: 'More-1', name: 'More' },
	],
	index: 0,
	stale: false,
	history: [],
};

const insets = {} as EdgeInsets;

const navigation = {
	emit: () => ({ defaultPrevented: false }),
	navigate: () => {},
} as any;

const descriptors = {} as any;

storiesOf('Organisms/BottomTabs', module)
	.addDecorator((getStory) => <ViewStory fullscreen>{getStory()}</ViewStory>)
	.add('Default', () => (
		<BottomTabs
			descriptors={descriptors}
			insets={insets}
			navigation={navigation}
			state={state}
		/>
	));
