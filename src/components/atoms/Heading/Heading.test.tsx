import { render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { Heading } from './Heading';

import type { Props } from './Heading';

describe('Heading', () => {
	const props: Omit<Props, 'size'> = {
		text: 'Heading',
		testID: 'heading-test-id',
		style: {
			marginBottom: 20,
		},
	};

	it('should match snapshot - h1', () => {
		const tree = testRenderer.create(<Heading {...props} size="h1" />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - h2', () => {
		const tree = testRenderer.create(<Heading {...props} size="h2" />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - h3', () => {
		const tree = testRenderer.create(<Heading {...props} size="h3" />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - h4', () => {
		const tree = testRenderer.create(<Heading {...props} size="h4" />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - h5', () => {
		const tree = testRenderer.create(<Heading {...props} size="h5" />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - h6', () => {
		const tree = testRenderer.create(<Heading {...props} size="h6" />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render heading of size h1', () => {
		render(<Heading {...props} size="h1" />);

		const heading = screen.getByTestId('heading-test-id');

		expect(heading).toHaveTextContent('Heading');
		expect(heading).toHaveStyle({
			fontFamily: 'MulishBold',
			fontSize: 51,
			lineHeight: 56.1,
		});
	});

	it('should render heading of size h2', () => {
		render(<Heading {...props} size="h2" />);

		const heading = screen.getByTestId('heading-test-id');

		expect(heading).toHaveTextContent('Heading');
		expect(heading).toHaveStyle({
			fontFamily: 'MulishBold',
			fontSize: 44,
			lineHeight: 48.4,
		});
	});

	it('should render heading of size h3', () => {
		render(<Heading {...props} size="h3" />);

		const heading = screen.getByTestId('heading-test-id');

		expect(heading).toHaveTextContent('Heading');
		expect(heading).toHaveStyle({
			fontFamily: 'MulishBold',
			fontSize: 33,
			lineHeight: 36.3,
		});
	});

	it('should render heading of size h4', () => {
		render(<Heading {...props} size="h4" />);

		const heading = screen.getByTestId('heading-test-id');

		expect(heading).toHaveTextContent('Heading');
		expect(heading).toHaveStyle({
			fontFamily: 'MulishMedium',
			fontSize: 22,
			lineHeight: 26.4,
		});
	});

	it('should render heading of size h5', () => {
		render(<Heading {...props} size="h5" />);

		const heading = screen.getByTestId('heading-test-id');

		expect(heading).toHaveTextContent('Heading');
		expect(heading).toHaveStyle({
			fontFamily: 'MulishSemiBold',
			fontSize: 17,
			lineHeight: 22.1,
		});
	});

	it('should render heading of size h6', () => {
		render(<Heading {...props} size="h6" />);

		const heading = screen.getByTestId('heading-test-id');

		expect(heading).toHaveTextContent('Heading');
		expect(heading).toHaveStyle({
			fontFamily: 'MulishSemiBold',
			fontSize: 16,
			lineHeight: 25.6,
		});
	});

	it('should apply additional styles from props', () => {
		render(<Heading {...props} size="h6" />);

		const heading = screen.getByTestId('heading-test-id');

		expect(heading).toHaveStyle({
			marginBottom: 20,
		});
	});
});
