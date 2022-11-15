import { render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { Paginator } from './Paginator';

import type { Props } from './Paginator';

describe('Paginator', () => {
	const props: Omit<Props, 'currentIndex'> = {
		slides: [{ id: 1 }, { id: 2 }],
		activeColor: 'blue',
		testID: 'paginator-test-id',
	};

	it('should match snapshot - active index 0', () => {
		const tree = testRenderer
			.create(<Paginator {...props} currentIndex={0} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - active index 1', () => {
		const tree = testRenderer
			.create(<Paginator {...props} currentIndex={1} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should should apply highlight color based on props', () => {
		render(<Paginator {...props} currentIndex={0} />);

		const paginator = screen.getByTestId('paginator-test-id');

		paginator.children.forEach((dot) =>
			expect(dot).toHaveStyle({
				borderColor: 'blue',
			})
		);
	});

	it('should highlight first paginator dot when current index is 0', () => {
		render(<Paginator {...props} currentIndex={0} />);

		const paginator = screen.getByTestId('paginator-test-id');

		const [currentDot, nextDot] = paginator.children;

		expect(currentDot).toHaveStyle({
			opacity: 1,
		});
		expect(nextDot).toHaveStyle({
			opacity: 0.2,
		});
	});

	it('should highlight second paginator dot when current index is 1', () => {
		render(<Paginator {...props} currentIndex={1} />);

		const paginator = screen.getByTestId('paginator-test-id');

		const [prevDot, currentDot] = paginator.children;

		expect(currentDot).toHaveStyle({
			opacity: 1,
		});
		expect(prevDot).toHaveStyle({
			opacity: 0.2,
		});
	});
});
