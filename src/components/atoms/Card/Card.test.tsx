import { render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { colors } from 'theme';
import { Heading } from '../Heading/Heading';
import { Icon } from '../Icon/Icon';

import type { Props } from './Card';
import { Card } from './Card';

describe.only('Card', () => {
	const props: Props = {
		testID: 'card-test-id',
		style: {
			height: 100,
		},
		children: (
			<>
				<Heading size="h6" text="Text inside Card" />
				<Icon color={colors.mainDark} name="check" size={20} />
			</>
		),
	};

	it('should match snapshot - row', () => {
		const tree = testRenderer.create(<Card {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - column', () => {
		const tree = testRenderer
			.create(<Card {...props} direction="column" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render children in row', () => {
		render(<Card {...props} />);

		const card = screen.getByTestId('card-test-id');
		const cardText = screen.getByText('Text inside Card');
		const cardIcon = screen.getByTestId('check-icon-test-id');

		expect(cardText).toBeTruthy();
		expect(cardIcon).toBeTruthy();

		expect(card).toHaveStyle({ flexDirection: 'row', height: 100 });
	});

	it('should render children in column', () => {
		render(<Card {...props} direction="column" />);

		const card = screen.getByTestId('card-test-id');
		const cardText = screen.getByText('Text inside Card');
		const cardIcon = screen.getByTestId('check-icon-test-id');

		expect(cardText).toBeTruthy();
		expect(cardIcon).toBeTruthy();

		expect(card).toHaveStyle({ flexDirection: 'column', height: 100 });
	});
});
