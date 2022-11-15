import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { MobileNumberInput } from './MobileNumberInput';

import type { Props } from './MobileNumberInput';

describe('MobileNumberInput', () => {
	const props: Props = {
		flagIcon: 'flag-usa',
		placeholder: 'Mobile number placeholder',
		testID: 'mobile-number-input-test-id',
		style: {
			height: 50,
		},
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<MobileNumberInput {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render input field and icon', () => {
		render(<MobileNumberInput {...props} />);

		const mobileNumberInput = screen.getByTestId('mobile-number-input-test-id');
		const icon = screen.getByTestId('flag-usa-icon-test-id');
		const inputField = screen.getByTestId(
			'input-field-mobile-number-input-test-id'
		);

		expect(mobileNumberInput.children).toHaveLength(2);
		expect(icon).not.toBeNull();
		expect(inputField).not.toBeNull();
	});

	it('should display placeholder', () => {
		render(<MobileNumberInput {...props} />);

		const inputField = screen.getByTestId(
			'input-field-mobile-number-input-test-id'
		);

		expect(inputField.props).toHaveProperty(
			'placeholder',
			'Mobile number placeholder'
		);
	});

	it('should show numberpad', () => {
		render(<MobileNumberInput {...props} />);

		const inputField = screen.getByTestId(
			'input-field-mobile-number-input-test-id'
		);

		expect(inputField.props).toHaveProperty('keyboardType', 'phone-pad');
	});

	it('should apply additional styles', () => {
		render(<MobileNumberInput {...props} />);

		const mobileNumberInput = screen.getByTestId('mobile-number-input-test-id');

		expect(mobileNumberInput).toHaveStyle({
			height: 50,
		});
	});

	it('should handle type events', () => {
		render(<MobileNumberInput {...props} />);

		const inputField = screen.getByTestId(
			'input-field-mobile-number-input-test-id'
		);

		fireEvent.changeText(inputField, '123456');

		expect(inputField.props).toHaveProperty('value', '123456');
	});
});
