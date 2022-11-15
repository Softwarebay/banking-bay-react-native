import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { InputField } from './InputField';

import type { Props } from './InputField';

describe('InputField', () => {
	const props: Props = {
		testID: 'input-field-test-id',
		placeholder: 'Placeholder',
		style: {
			backgroundColor: 'red',
		},
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<InputField {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should hide password', () => {
		render(<InputField {...props} secureTextEntry />);

		const input = screen.getByTestId('input-field-test-id');

		expect(input.props).toHaveProperty('secureTextEntry', true);
	});

	it('should display placeholder', () => {
		render(<InputField {...props} />);

		const input = screen.getByTestId('input-field-test-id');

		expect(input.props).toHaveProperty('placeholder', 'Placeholder');
	});

	it('should apply additional styles', () => {
		render(<InputField {...props} />);

		const input = screen.getByTestId('input-field-test-id');

		expect(input).toHaveStyle({
			backgroundColor: 'red',
		});
	});

	it('should handle type events', () => {
		render(<InputField {...props} />);

		const input = screen.getByTestId('input-field-test-id');

		fireEvent.changeText(input, 'Input text');

		expect(input.props).toHaveProperty('value', 'Input text');
	});
});
