import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { DashboardCards } from './DashboardCards';

import type { Props } from './DashboardCards';

describe('DashboardCards', () => {
	const mockOnPressCreditCardsIconButton = jest.fn<
		Props['onPressCreditCardsIconButton'],
		[]
	>();
	const mockOnPressProfileIconButton = jest.fn<
		Props['onPressProfileIconButton'],
		[]
	>();
	const props: Props = {
		navText: 'Dashboard Nav',
		onPressCreditCardsIconButton: mockOnPressCreditCardsIconButton,
		onPressProfileIconButton: mockOnPressProfileIconButton,
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<DashboardCards {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render top nav text', () => {
		render(<DashboardCards {...props} />);

		const navText = screen.getByTestId('dashboard-nav-text-test-id');

		expect(navText).toHaveTextContent('Dashboard Nav');
	});

	it('should render profile icon button', () => {
		render(<DashboardCards {...props} />);

		const iconBtn = screen.getByTestId('dashboard-profile-icon-btn-test-id');
		const profileIcon = screen.getByTestId('profile-icon-test-id');

		expect(iconBtn).not.toBeEmptyElement();
		expect(profileIcon).not.toBeNull();
	});

	it('should handle press events on profile icon button', () => {
		render(<DashboardCards {...props} />);

		const iconBtn = screen.getByTestId('dashboard-profile-icon-btn-test-id');

		fireEvent.press(iconBtn);

		expect(mockOnPressProfileIconButton).toHaveBeenCalledTimes(1);
		expect(mockOnPressCreditCardsIconButton).not.toHaveBeenCalled();
	});

	it('should render credit cards icon button', () => {
		render(<DashboardCards {...props} />);

		const iconBtn = screen.getByTestId('dashboard-cards-btn-test-id');
		const cardsIcon = screen.getByTestId('credit-cards-icon-test-id');

		expect(iconBtn).not.toBeEmptyElement();
		expect(cardsIcon).not.toBeNull();
	});
	it('should handle press events on credit cards icon button', () => {
		render(<DashboardCards {...props} />);

		const iconBtn = screen.getByTestId('dashboard-cards-btn-test-id');

		fireEvent.press(iconBtn);

		expect(mockOnPressCreditCardsIconButton).toHaveBeenCalledTimes(1);
		expect(mockOnPressProfileIconButton).not.toHaveBeenCalled();
	});

	it('should render a divider', () => {
		render(<DashboardCards {...props} />);

		const divider = screen.getByTestId('dashboards-cards-divider-test-id');

		expect(divider).not.toBeNull();
	});

	it('should render 3 credit card images', () => {
		render(<DashboardCards {...props} />);

		const cardImgs = screen.getAllByTestId(/(card1|card2)-img-test-id/);

		expect(cardImgs).toHaveLength(3);
	});

	it('should render paginator', () => {
		render(<DashboardCards {...props} />);

		const paginator = screen.getByTestId('dashboard-cards-paginator-test-id');

		expect(paginator).not.toBeNull();
	});
});
