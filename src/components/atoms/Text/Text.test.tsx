import { render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { Text } from './Text';

import type { Props } from './Text';

describe('Text', () => {
	const props: Props = {
		text: 'Text',
		style: {
			marginBottom: 20,
		},
		testID: 'text-test-id',
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<Text {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render text passed via props', () => {
		render(<Text {...props} />);

		const text = screen.getByTestId('text-test-id');

		expect(text).toHaveTextContent('Text');
	});

	it('should apply additional styles from props', () => {
		render(<Text {...props} />);

		const text = screen.getByTestId('text-test-id');

		expect(text).toHaveStyle({
			marginBottom: 20,
		});
	});
});
