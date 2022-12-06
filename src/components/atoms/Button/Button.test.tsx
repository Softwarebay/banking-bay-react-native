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

	const ternaryProps: Props = {
		...props,
		type: 'ternary',
	};

	it('should match snapshot - primary button', () => {
		const tree = testRenderer.create(<Button {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - secondary button', () => {
		const tree = testRenderer.create(<Button {...secondaryProps} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - ternary button', () => {
		const tree = testRenderer.create(<Button {...ternaryProps} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should display button text passed as prop', () => {
		render(<Button {...props} />);

		const btn = screen.getByTestId('btn-test-id');

		expect(btn).toHaveTextContent('Button');
	});

	it('should default to primary button', () => {
		render(<Button {...props} />);

		const btn = screen.getByTestId('btn-test-id');

		expect(btn).not.toHaveStyle({
			backgroundColor: colors.grey100,
			borderColor: colors.grey300,
		});
	});

	it('should display secondary button', () => {
		render(<Button {...secondaryProps} />);

		const btn = screen.getByTestId('btn-test-id');

		expect(btn).toHaveStyle({
			backgroundColor: colors.grey100,
			borderColor: colors.grey300,
		});
	});

	it('should display ternary button', () => {
		render(<Button {...ternaryProps} />);

		const btn = screen.getByTestId('btn-test-id');

		expect(btn).toHaveStyle({
			backgroundColor: colors.green,
			borderWidth: 0,
		});
	});

	it('should apply active styles when button is pressed', () => {
		render(<Button {...props} testOnly_pressed />);

		const btn = screen.getByTestId('btn-test-id');

		expect(btn).toHaveStyle({
			opacity: 0.8,
		});
	});

	it('should handle onPress events', () => {
		render(<Button {...props} />);

		const btn = screen.getByTestId('btn-test-id');

		fireEvent.press(btn);

		expect(mockOnPress).toHaveBeenCalledTimes(1);
	});
});
