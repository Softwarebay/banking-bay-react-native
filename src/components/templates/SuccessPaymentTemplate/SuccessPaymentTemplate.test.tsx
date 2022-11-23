import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { SuccessPaymentTemplate } from './SuccessPaymentTemplate';

import type { Props } from './SuccessPaymentTemplate';

describe('SuccessPaymentTemplate', () => {
	const onPressPrimaryButton = jest.fn<Props['onPressPrimaryButton'], []>();
	const onPressSecondaryButton = jest.fn<Props['onPressSecondaryButton'], []>();

	const props: Props = {
		amount: '10.00',
		primaryButtonTitle: 'Primary Action',
		secondaryButtonTitle: 'Secondary Action',
		onPressPrimaryButton,
		onPressSecondaryButton,
	};

	it('should match snapshot', () => {
		const tree = testRenderer
			.create(<SuccessPaymentTemplate {...props} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render success image', () => {
		render(<SuccessPaymentTemplate {...props} />);

		const img = screen.getByTestId('success-icon-img-test-id');

		expect(img).not.toBeNull();
	});

	it('should render success heading', () => {
		render(<SuccessPaymentTemplate {...props} />);

		const heading = screen.getByTestId('payment-success-heading-test-id');

		expect(heading).toHaveTextContent('Success!');
	});

	it('should render success message', () => {
		render(<SuccessPaymentTemplate {...props} />);

		const message = screen.getByTestId('payment-success-message-test-id');

		expect(message).toHaveTextContent('Your payment has been processed!');
	});

	it('should display amount of transferred money', () => {
		render(<SuccessPaymentTemplate {...props} />);

		const transferValue = screen.getByTestId(
			'payment-success-float-num-test-id'
		);

		expect(transferValue).toHaveTextContent('$ 10.00');
	});

	it('should display primary and secondary button', () => {
		render(<SuccessPaymentTemplate {...props} />);

		const primaryBtn = screen.getByTestId(
			'payment-success-primary-btn-test-id'
		);

		const secondaryBtn = screen.getByTestId(
			'payment-success-secondary-btn-test-id'
		);

		expect(primaryBtn).toHaveTextContent('Primary Action');
		expect(secondaryBtn).toHaveTextContent('Secondary Action');
	});

	it('should handle press events on primary button', () => {
		render(<SuccessPaymentTemplate {...props} />);

		const primaryBtn = screen.getByTestId(
			'payment-success-primary-btn-test-id'
		);

		fireEvent.press(primaryBtn);

		expect(onPressPrimaryButton).toHaveBeenCalledTimes(1);
		expect(onPressSecondaryButton).not.toHaveBeenCalled();
	});

	it('should handle press events on secondary button', () => {
		render(<SuccessPaymentTemplate {...props} />);

		const secondaryBtn = screen.getByTestId(
			'payment-success-secondary-btn-test-id'
		);

		fireEvent.press(secondaryBtn);

		expect(onPressSecondaryButton).toHaveBeenCalledTimes(1);
		expect(onPressPrimaryButton).not.toHaveBeenCalled();
	});
});
