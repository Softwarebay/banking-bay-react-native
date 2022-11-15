import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { Link } from './Link';

import type { Props } from './Link';

describe('Link', () => {
	const mockOnPress = jest.fn<Props['onPress'], []>();
	const props: Props = {
		onPress: mockOnPress,
		text: 'Link',
		testID: 'link-test-id',
		style: {
			marginBottom: 20,
		},
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<Link {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render text passed via props', () => {
		render(<Link {...props} />);

		const link = screen.getByTestId('link-test-id');

		expect(link).toHaveTextContent('Link');
	});

	it('should apply additional text styles from props', () => {
		render(<Link {...props} />);

		const linkText = screen.getByText('Link');

		expect(linkText).toHaveStyle({
			marginBottom: 20,
		});
	});

	it('should handle press events', () => {
		render(<Link {...props} />);

		const link = screen.getByTestId('link-test-id');

		fireEvent.press(link);

		expect(mockOnPress).toHaveBeenCalledTimes(1);
	});
});
