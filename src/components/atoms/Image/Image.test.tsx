import { render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { Image } from './Image';

import type { Props } from './Image';

describe('Image', () => {
	const props: Omit<Props, 'name'> = {
		style: {
			width: 100,
		},
	};

	it('should match snapshot - onboarding1', () => {
		const tree = testRenderer
			.create(<Image {...props} name="onboarding1" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - onboarding2', () => {
		const tree = testRenderer
			.create(<Image {...props} name="onboarding2" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - onboarding3', () => {
		const tree = testRenderer
			.create(<Image {...props} name="onboarding3" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - card1', () => {
		const tree = testRenderer
			.create(<Image {...props} name="card1" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - card2', () => {
		const tree = testRenderer
			.create(<Image {...props} name="card2" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - success-icon', () => {
		const tree = testRenderer
			.create(<Image {...props} name="success-icon" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render onboarding1 image', () => {
		render(<Image {...props} name="onboarding1" />);

		const img = screen.getByTestId('onboarding1-img-test-id');

		expect(img).not.toBeNull();

		expect(img).toHaveStyle({
			width: 100,
		});
	});

	it('should render onboarding2 image', () => {
		render(<Image {...props} name="onboarding2" />);

		const img = screen.getByTestId('onboarding2-img-test-id');

		expect(img).not.toBeNull();

		expect(img).toHaveStyle({
			width: 100,
		});
	});

	it('should render onboarding3 image', () => {
		render(<Image {...props} name="onboarding3" />);

		const img = screen.getByTestId('onboarding3-img-test-id');

		expect(img).not.toBeNull();

		expect(img).toHaveStyle({
			width: 100,
		});
	});

	it('should render card1 image', () => {
		render(<Image {...props} name="card1" />);

		const img = screen.getByTestId('card1-img-test-id');

		expect(img).not.toBeNull();

		expect(img).toHaveStyle({
			width: 100,
		});
	});

	it('should render card2 image', () => {
		render(<Image {...props} name="card2" />);

		const img = screen.getByTestId('card2-img-test-id');

		expect(img).not.toBeNull();

		expect(img).toHaveStyle({
			width: 100,
		});
	});

	it('should render success-icon image', () => {
		render(<Image {...props} name="success-icon" />);

		const img = screen.getByTestId('success-icon-img-test-id');

		expect(img).not.toBeNull();

		expect(img).toHaveStyle({
			width: 100,
		});
	});
});
