import { render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { FloatNum } from './FloatNum';

import type { Props } from './FloatNum';

describe('FloatNum', () => {
	const props: Omit<Props, 'prefix'> = {
		number: '20.22',
		testID: 'floatNum-test-id',
		floatStyle: { fontSize: 30 },
		intStyle: { fontSize: 50 },
		style: {
			height: 200,
		},
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<FloatNum {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render integer and float as separate text', () => {
		render(<FloatNum {...props} />);

		const floatNum = screen.getByTestId('floatNum-test-id');

		expect(floatNum.children).toHaveLength(2);
	});

	it('should apply separate styles for integer and float', () => {
		render(<FloatNum {...props} />);

		const int = screen.getByText('20.');
		const float = screen.getByText('22');

		expect(int).toHaveStyle({ fontSize: 50 });
		expect(float).toHaveStyle({ fontSize: 30 });
	});

	it('should display prefix with the same styles as integer text', () => {
		render(<FloatNum {...props} prefix="$" />);

		const int = screen.getByText(/20/);
		const prefix = screen.getByText(/\$/);

		expect(int).toHaveStyle({ fontSize: 50 });
		expect(prefix).toHaveStyle({ fontSize: 50 });
	});

	it('should apply additional styles from props', () => {
		render(<FloatNum {...props} />);

		const floatNum = screen.getByTestId('floatNum-test-id');

		expect(floatNum).toHaveStyle({ height: 200 });
	});
});
