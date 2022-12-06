import { color, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { colors } from 'theme';
import { ViewStory } from 'utils/storybook/ViewStory';

import { Icon } from './Icon';

storiesOf('Atoms/Icon', module)
	.addDecorator((getStory) => (
		<ViewStory style={{ backgroundColor: colors.screenBackground }} center>
			{getStory()}
		</ViewStory>
	))
	.add('Amazon', () => <Icon name="amazon" size={number('size', 20)} />)
	.add('Check', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="check"
			size={number('size', 20)}
		/>
	))
	.add('Chevron Left', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="chevron-left"
			size={number('size', 20)}
		/>
	))
	.add('Credit Card', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="credit-card"
			size={number('size', 20)}
		/>
	))
	.add('Credit Cards', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="credit-cards"
			size={number('size', 20)}
		/>
	))
	.add('Deposits', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="deposits"
			size={number('size', 20)}
		/>
	))
	.add('Dollar Sign', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="dollar-sign"
			size={number('size', 20)}
		/>
	))
	.add('Eye Off', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="eye-off"
			size={number('size', 20)}
		/>
	))
	.add('Facebook', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="facebook"
			size={number('size', 20)}
		/>
	))
	.add('FlagUSA', () => <Icon name="flag-usa" size={number('size', 20)} />)
	.add('Google +', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="google-plus"
			size={number('size', 20)}
		/>
	))
	.add('Wallet', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="loans"
			size={number('size', 20)}
		/>
	))
	.add('Logo', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="logo"
			size={number('size', 20)}
		/>
	))
	.add('Money Transfer', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="money-transfer"
			size={number('size', 20)}
		/>
	))
	.add('More', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="more"
			size={number('size', 20)}
		/>
	))
	.add('Notifications', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="notifications"
			size={number('size', 20)}
		/>
	))
	.add('Paypal', () => <Icon name="paypal" size={number('size', 20)} />)
	.add('Profile', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="profile"
			size={number('size', 20)}
		/>
	))
	.add('Repeat', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="repeat"
			size={number('size', 20)}
		/>
	))
	.add('Dashboard', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="dashboard"
			size={number('size', 20)}
		/>
	))
	.add('Smartphone', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="smartphone"
			size={number('size', 20)}
		/>
	))
	.add('Twitter', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="twitter"
			size={number('size', 20)}
		/>
	))
	.add('Search', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="search"
			size={number('size', 20)}
		/>
	))
	.add('Home', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="home"
			size={number('size', 20)}
		/>
	))
	.add('ATM', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="atm"
			size={number('size', 20)}
		/>
	))
	.add('eBay', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="ebay"
			size={number('size', 20)}
		/>
	))
	.add('Info', () => (
		<Icon
			color={color('color', colors.mainDark)}
			name="info"
			size={number('size', 20)}
		/>
	));
