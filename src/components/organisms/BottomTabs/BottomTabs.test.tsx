import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { EdgeInsets } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BottomTabDescriptorMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { TabNavigationState } from '@react-navigation/native';

import type { RootTabParamList } from 'navigation/TabNavigator';

import { BottomTabs } from './BottomTabs';

const setFocusedRouteIndex = (
	routeIndex = 0
): TabNavigationState<RootTabParamList> => ({
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
	index: routeIndex > 0 && routeIndex > 5 ? 5 : routeIndex,
	stale: false,
	history: [],
});

describe('BottomTabs', () => {
	const mockNavigate = jest.fn<
		BottomTabBarProps['navigation']['navigate'],
		[]
	>();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const mockEmitEvent = jest.fn<any, []>(() => ({
		type: 'tabPress',
		canPreventDefault: true,
		target: '',
	}));

	const navigation: BottomTabBarProps['navigation'] = {
		emit: mockEmitEvent,
		navigate: mockNavigate,
		reset: jest.fn(),
		canGoBack: jest.fn(),
		dispatch: jest.fn(),
		getId: jest.fn(),
		getParent: jest.fn(),
		getState: jest.fn(),
		goBack: jest.fn(),
		isFocused: jest.fn(),
		setParams: jest.fn(),
	};

	const props: Omit<BottomTabBarProps, 'state'> = {
		navigation,
		insets: {} as EdgeInsets,
		descriptors: {} as BottomTabDescriptorMap,
	};

	it('should match snapshot - Dashboard route focused', () => {
		const tree = testRenderer
			.create(<BottomTabs {...props} state={setFocusedRouteIndex(0)} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - Deposits route focused', () => {
		const tree = testRenderer
			.create(<BottomTabs {...props} state={setFocusedRouteIndex(1)} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - Loans route focused', () => {
		const tree = testRenderer
			.create(<BottomTabs {...props} state={setFocusedRouteIndex(2)} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - Notifications route focused', () => {
		const tree = testRenderer
			.create(<BottomTabs {...props} state={setFocusedRouteIndex(3)} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - More route focused', () => {
		const tree = testRenderer
			.create(<BottomTabs {...props} state={setFocusedRouteIndex(4)} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should display 5 route icons', () => {
		render(<BottomTabs {...props} state={setFocusedRouteIndex(0)} />);

		const icons = screen.getAllByTestId(/-icon-test-id/);

		expect(icons).toHaveLength(5);
	});

	it('should display Dashboard route icon and name', () => {
		render(<BottomTabs {...props} state={setFocusedRouteIndex(0)} />);

		const routeIcon = screen.getByTestId('dashboard-icon-test-id');
		const routeName = screen.getByTestId(/dashboard-route-name-test-id/i);

		expect(routeIcon).not.toBeNull();
		expect(routeName).toHaveTextContent('Dashboard');
	});

	it('should navigate to Dashboard route', () => {
		render(<BottomTabs {...props} state={setFocusedRouteIndex(1)} />); // Initial route index must be different than 0 because it can't navigate to currently focused route

		const dashboardTab = screen.getByTestId(/dashboard-tab-item-test-id/i);

		fireEvent.press(dashboardTab);

		expect(mockEmitEvent).toHaveBeenCalledTimes(1);
		expect(mockNavigate).toHaveBeenCalledTimes(1);
		expect(mockNavigate).toHaveBeenCalledWith('Dashboard');
	});

	it('should display Deposits route icon and name', () => {
		render(<BottomTabs {...props} state={setFocusedRouteIndex(0)} />);

		const routeIcon = screen.getByTestId('deposits-icon-test-id');
		const routeName = screen.getByTestId(/deposits-route-name-test-id/i);

		expect(routeIcon).not.toBeNull();
		expect(routeName).toHaveTextContent('Deposits');
	});

	it('should navigate to Deposits route', () => {
		render(<BottomTabs {...props} state={setFocusedRouteIndex(0)} />);

		const depositsTab = screen.getByTestId(/deposits-tab-item-test-id/i);

		fireEvent.press(depositsTab);

		expect(mockEmitEvent).toHaveBeenCalledTimes(1);
		expect(mockNavigate).toHaveBeenCalledTimes(1);
		expect(mockNavigate).toHaveBeenCalledWith('Deposits');
	});

	it('should display Loans route icon and name', () => {
		render(<BottomTabs {...props} state={setFocusedRouteIndex(0)} />);

		const routeIcon = screen.getByTestId('loans-icon-test-id');
		const routeName = screen.getByTestId(/loans-route-name-test-id/i);

		expect(routeIcon).not.toBeNull();
		expect(routeName).toHaveTextContent('Loans');
	});

	it('should navigate to Loans route', () => {
		render(<BottomTabs {...props} state={setFocusedRouteIndex(0)} />);

		const loansTab = screen.getByTestId(/loans-tab-item-test-id/i);

		fireEvent.press(loansTab);

		expect(mockEmitEvent).toHaveBeenCalledTimes(1);
		expect(mockNavigate).toHaveBeenCalledTimes(1);
		expect(mockNavigate).toHaveBeenCalledWith('Loans');
	});

	it('should display Notifications route icon and name', () => {
		render(<BottomTabs {...props} state={setFocusedRouteIndex(0)} />);

		const routeIcon = screen.getByTestId('notifications-icon-test-id');
		const routeName = screen.getByTestId(/notifications-route-name-test-id/i);

		expect(routeIcon).not.toBeNull();
		expect(routeName).toHaveTextContent('Notifications');
	});

	it('should navigate to Notifications route', () => {
		render(<BottomTabs {...props} state={setFocusedRouteIndex(0)} />);

		const notificationsTab = screen.getByTestId(
			/notifications-tab-item-test-id/i
		);

		fireEvent.press(notificationsTab);

		expect(mockEmitEvent).toHaveBeenCalledTimes(1);
		expect(mockNavigate).toHaveBeenCalledTimes(1);
		expect(mockNavigate).toHaveBeenCalledWith('Notifications');
	});

	it('should display More route icon and name', () => {
		render(<BottomTabs {...props} state={setFocusedRouteIndex(0)} />);

		const routeIcon = screen.getByTestId('more-icon-test-id');
		const routeName = screen.getByTestId(/more-route-name-test-id/i);

		expect(routeIcon).not.toBeNull();
		expect(routeName).toHaveTextContent('More');
	});

	it('should navigate to More route', () => {
		render(<BottomTabs {...props} state={setFocusedRouteIndex(0)} />);

		const moreTab = screen.getByTestId(/more-tab-item-test-id/i);

		fireEvent.press(moreTab);

		expect(mockEmitEvent).toHaveBeenCalledTimes(1);
		expect(mockNavigate).toHaveBeenCalledTimes(1);
		expect(mockNavigate).toHaveBeenCalledWith('More');
	});

	it("shouldn't navigate to currently focused route", () => {
		render(<BottomTabs {...props} state={setFocusedRouteIndex(0)} />);

		const tab = screen.getByTestId(/dashboard-tab-item-test-id/i);

		fireEvent.press(tab);

		expect(mockEmitEvent).toHaveBeenCalledTimes(1);
		expect(mockNavigate).not.toHaveBeenCalled();
	});
});
