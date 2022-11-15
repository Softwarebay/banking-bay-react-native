import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { Checkbox } from './Checkbox';

import type { Props } from './Checkbox';

describe('Checkbox', () => {
	const props: Props = { testID: 'checkbox-test-id' };

	it('should match snapshot', () => {
		const tree = testRenderer.create(<Checkbox {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should initially render unchecked', () => {
		render(<Checkbox {...props} />);

		const checkbox = screen.getByTestId('checkbox-test-id');
		const checkIcon = screen.queryByTestId('checkbox-icon-test-id');

		expect(checkbox.children).toHaveLength(1);
		expect(checkIcon).toBeNull();
	});

	it('should toggle checked state', () => {
		render(<Checkbox {...props} />);

		const checkbox = screen.getByTestId('checkbox-test-id');

		fireEvent.press(checkbox);
		const checkedIcon = screen.queryByTestId('check-icon-test-id');

		expect(checkbox.children).toHaveLength(2);
		expect(checkedIcon).toBeTruthy();

		fireEvent.press(checkbox);
		const uncheckedIcon = screen.queryByTestId('check-icon-test-id');

		expect(checkbox.children).toHaveLength(1);
		expect(uncheckedIcon).toBeNull();
	});
});
