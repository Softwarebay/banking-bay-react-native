import { render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { Icon } from './Icon';

import type { Props } from './Icon';

describe('Icon', () => {
	const props: Omit<Props, 'name'> = {
		size: 20,
		color: 'red',
	};

	it('should match snapshot - facebook icon', () => {
		const tree = testRenderer
			.create(<Icon {...props} name="facebook" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - twitter icon', () => {
		const tree = testRenderer
			.create(<Icon {...props} name="twitter" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - check icon', () => {
		const tree = testRenderer.create(<Icon {...props} name="check" />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - eye-off icon', () => {
		const tree = testRenderer
			.create(<Icon {...props} name="eye-off" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - google-plus icon', () => {
		const tree = testRenderer
			.create(<Icon {...props} name="google-plus" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - logo icon', () => {
		const tree = testRenderer.create(<Icon {...props} name="logo" />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - chevron-left icon', () => {
		const tree = testRenderer
			.create(<Icon {...props} name="chevron-left" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - credit-card icon', () => {
		const tree = testRenderer
			.create(<Icon {...props} name="credit-card" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - dollar-sign icon', () => {
		const tree = testRenderer
			.create(<Icon {...props} name="dollar-sign" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - repeat icon', () => {
		const tree = testRenderer
			.create(<Icon {...props} name="repeat" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - smartphone icon', () => {
		const tree = testRenderer
			.create(<Icon {...props} name="smartphone" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - profile icon', () => {
		const tree = testRenderer
			.create(<Icon {...props} name="profile" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - credit-cards icon', () => {
		const tree = testRenderer
			.create(<Icon {...props} name="credit-cards" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - deposits icon', () => {
		const tree = testRenderer
			.create(<Icon {...props} name="deposits" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - loans icon', () => {
		const tree = testRenderer.create(<Icon {...props} name="loans" />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - notifications icon', () => {
		const tree = testRenderer
			.create(<Icon {...props} name="notifications" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - dashboard icon', () => {
		const tree = testRenderer
			.create(<Icon {...props} name="dashboard" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - more icon', () => {
		const tree = testRenderer.create(<Icon {...props} name="more" />).toJSON();

		expect(tree).toMatchSnapshot();
	});
	it('should match snapshot - amazon icon', () => {
		const tree = testRenderer
			.create(<Icon {...props} name="amazon" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - money-transfer icon', () => {
		const tree = testRenderer
			.create(<Icon {...props} name="money-transfer" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - paypal icon', () => {
		const tree = testRenderer
			.create(<Icon {...props} name="paypal" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - flag-usa icon', () => {
		const tree = testRenderer
			.create(<Icon {...props} name="flag-usa" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - search icon', () => {
		const tree = testRenderer
			.create(<Icon {...props} name="search" />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render facebook icon', () => {
		render(<Icon {...props} name="facebook" />);

		const icon = screen.getByTestId('facebook-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render twitter icon', () => {
		render(<Icon {...props} name="twitter" />);

		const icon = screen.getByTestId('twitter-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render check icon', () => {
		render(<Icon {...props} name="check" />);

		const icon = screen.getByTestId('check-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render eye-off icon', () => {
		render(<Icon {...props} name="eye-off" />);

		const icon = screen.getByTestId('eye-off-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render google-plus icon', () => {
		render(<Icon {...props} name="google-plus" />);

		const icon = screen.getByTestId('google-plus-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render logo icon', () => {
		render(<Icon {...props} name="logo" />);

		const icon = screen.getByTestId('logo-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render chevron-left icon', () => {
		render(<Icon {...props} name="chevron-left" />);

		const icon = screen.getByTestId('chevron-left-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render credit-card icon', () => {
		render(<Icon {...props} name="credit-card" />);

		const icon = screen.getByTestId('credit-card-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render dollar-sign icon', () => {
		render(<Icon {...props} name="dollar-sign" />);

		const icon = screen.getByTestId('dollar-sign-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render repeat icon', () => {
		render(<Icon {...props} name="repeat" />);

		const icon = screen.getByTestId('repeat-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render smartphone icon', () => {
		render(<Icon {...props} name="smartphone" />);

		const icon = screen.getByTestId('smartphone-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render profile icon', () => {
		render(<Icon {...props} name="profile" />);

		const icon = screen.getByTestId('profile-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render credit-cards icon', () => {
		render(<Icon {...props} name="credit-cards" />);

		const icon = screen.getByTestId('credit-cards-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render deposits icon', () => {
		render(<Icon {...props} name="deposits" />);

		const icon = screen.getByTestId('deposits-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render loans icon', () => {
		render(<Icon {...props} name="loans" />);

		const icon = screen.getByTestId('loans-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render notifications icon', () => {
		render(<Icon {...props} name="notifications" />);

		const icon = screen.getByTestId('notifications-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render dashboard icon', () => {
		render(<Icon {...props} name="dashboard" />);

		const icon = screen.getByTestId('dashboard-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render more icon', () => {
		render(<Icon {...props} name="more" />);

		const icon = screen.getByTestId('more-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render amazon icon', () => {
		render(<Icon {...props} name="amazon" />);

		const icon = screen.getByTestId('amazon-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render money-transfer icon', () => {
		render(<Icon {...props} name="money-transfer" />);

		const icon = screen.getByTestId('money-transfer-icon-test-id');

		expect(icon).not.toBeNull();
	});

	it('should render paypal icon', () => {
		render(<Icon {...props} name="paypal" />);

		const icon = screen.getByTestId('paypal-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render flag-usa icon', () => {
		render(<Icon {...props} name="flag-usa" />);

		const icon = screen.getByTestId('flag-usa-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});

	it('should render search icon', () => {
		render(<Icon {...props} name="search" />);

		const icon = screen.getByTestId('search-icon-test-id');

		expect(icon).not.toBeNull();

		expect(icon.props).toHaveProperty('height', 20);
		expect(icon.props).toHaveProperty('width', 20);
		expect(icon.props).toHaveProperty('color', 'red');
	});
});
