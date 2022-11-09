import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { colors } from 'theme';
import { Button } from './Button';

import type { Props } from './Button';

describe('Button', () => {
	const mockOnPress = jest.fn<Props['onPress'], []>();
	const props: Props = {
		title: 'Button',
		onPress: mockOnPress,
		testID: 'btn-test-id',
	};
	const secondaryProps: Props = {
		...props,
		type: 'secondary',
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<Button {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should display button text passed as prop', () => {
		render(<Button {...props} />);

		const el = screen.getByTestId('btn-test-id');

		expect(el).toHaveTextContent('Button');
	});

	it('should default to primary button', () => {
		render(<Button {...props} />);

		const el = screen.getByTestId('btn-test-id');

		expect(el).not.toHaveStyle({
			backgroundColor: colors.grey100,
			borderColor: colors.grey300,
		});
	});

	it('should display secondary button', () => {
		render(<Button {...secondaryProps} />);

		const el = screen.getByTestId('btn-test-id');

		expect(el).toHaveStyle({
			backgroundColor: colors.grey100,
			borderColor: colors.grey300,
		});
	});

	it('should handle onPress events', () => {
		render(<Button {...props} />);

		const el = screen.getByTestId('btn-test-id');

		fireEvent.press(el);

		expect(mockOnPress).toHaveBeenCalledTimes(1);
	});
});
