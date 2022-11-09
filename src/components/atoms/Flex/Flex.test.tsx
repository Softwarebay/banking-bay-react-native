import { render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { View } from 'react-native';
import { Flex } from './Flex';

import type { Props } from './Flex';

describe('Flex', () => {
	const props: Omit<Props, 'direction'> = {
		children: (
			<>
				<View />
				<View />
			</>
		),
		testID: 'flex-test-id',
		style: {
			width: 100,
		},
	};

	const rowProps: Props = { direction: 'row', ...props };
	const columnProps: Props = { direction: 'column', ...props };

	it('should match snapshot - column', () => {
		const tree = testRenderer.create(<Flex {...columnProps} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - row', () => {
		const tree = testRenderer.create(<Flex {...rowProps} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render children in a column', () => {
		render(<Flex {...columnProps} />);

		const flex = screen.getByTestId('flex-test-id');

		expect(flex).toHaveStyle({ flexDirection: 'column' });
		expect(flex.children).toHaveLength(2);
	});

	it('should render children in a row', () => {
		render(<Flex {...rowProps} />);

		const flex = screen.getByTestId('flex-test-id');

		expect(flex).toHaveStyle({ flexDirection: 'row' });
		expect(flex.children).toHaveLength(2);
	});

	it('should apply styles from props', () => {
		render(<Flex {...rowProps} />);

		const flex = screen.getByTestId('flex-test-id');

		expect(flex).toHaveStyle({ width: 100 });
	});
});
