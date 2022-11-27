import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { SuccessRegistrationTemplate } from './SuccessRegistrationTemplate';

import type { Props } from './SuccessRegistrationTemplate';

describe('SuccessRegistrationTemplate', () => {
	const onPressPrimaryButton = jest.fn<Props['onPressPrimaryButton'], []>();

	const props: Props = {
		primaryButtonTitle: 'Primary Action',
		onPressPrimaryButton,
	};

	it('should match snapshot', () => {
		const tree = testRenderer
			.create(<SuccessRegistrationTemplate {...props} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render registration image', () => {
		render(<SuccessRegistrationTemplate {...props} />);

		const img = screen.getByTestId('registration-icon-img-test-id');

		expect(img).not.toBeNull();
	});

	it("should render 'Account created!' heading", () => {
		render(<SuccessRegistrationTemplate {...props} />);

		const heading = screen.getByTestId('registration-success-heading-test-id');

		expect(heading).toHaveTextContent('Account created!');
	});

	it('should render registration message', () => {
		render(<SuccessRegistrationTemplate {...props} />);

		const message = screen.getByTestId('registration-success-message-test-id');

		expect(message).toHaveTextContent(
			'Your account had been created successfully.'
		);
	});

	it('should display primary button', () => {
		render(<SuccessRegistrationTemplate {...props} />);

		const primaryBtn = screen.getByTestId(
			'registration-success-primary-btn-test-id'
		);

		expect(primaryBtn).toHaveTextContent('Primary Action');
	});

	it('should handle press events on primary button', () => {
		render(<SuccessRegistrationTemplate {...props} />);

		const primaryBtn = screen.getByTestId(
			'registration-success-primary-btn-test-id'
		);

		fireEvent.press(primaryBtn);

		expect(onPressPrimaryButton).toHaveBeenCalledTimes(1);
	});
});
