import {
	fireEvent,
	render,
	screen,
	within,
} from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { IconButton } from './IconButton';

import type { Props } from './IconButton';

describe('IconButton', () => {
	const mockOnPress = jest.fn<Props['onPress'], []>();
	const props: Props = {
		onPress: mockOnPress,
		iconColor: 'white',
		iconName: 'facebook',
		iconSize: 50,
		testID: 'facebook-icon-button-test-id',
		btnStyle: {
			backgroundColor: 'blue',
		},
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<IconButton {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render button with nested icon', () => {
		render(<IconButton {...props} />);

		const iconBtn = screen.getByTestId('facebook-icon-button-test-id');

		const icon = within(iconBtn).getByTestId('facebook-icon-test-id');

		expect(icon.props).toHaveProperty('width', 50);
		expect(icon.props).toHaveProperty('height', 50);
		expect(icon.props).toHaveProperty('color', 'white');
	});

	it('should apply additional button styles', () => {
		render(<IconButton {...props} />);

		const iconBtn = screen.getByTestId('facebook-icon-button-test-id');

		expect(iconBtn).toHaveStyle({ backgroundColor: 'blue' });
	});

	it('should handle press events', () => {
		render(<IconButton {...props} />);

		const iconBtn = screen.getByTestId('facebook-icon-button-test-id');

		fireEvent.press(iconBtn);

		expect(mockOnPress).toHaveBeenCalledTimes(1);
	});
});
