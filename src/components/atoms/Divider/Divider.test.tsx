import { render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { Divider } from './Divider';

import type { Props } from './Divider';

describe('Divider', () => {
	const props: Props = {
		testID: 'divider-test-id',
	};
	const propsWithStyle: Props = {
		...props,
		style: {
			opacity: 0.8,
		},
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<Divider {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render divider', () => {
		render(<Divider {...props} />);

		const divider = screen.getByTestId('divider-test-id');

		expect(divider).toBeTruthy();
	});

	it('should apply additional styles through props', () => {
		render(<Divider {...propsWithStyle} />);

		const divider = screen.getByTestId('divider-test-id');

		expect(divider).toHaveStyle({ opacity: 0.8 });
	});
});
