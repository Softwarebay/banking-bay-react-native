import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { colors } from 'theme';
import { ProgressBar } from './ProgressBar';

import type { Props } from './ProgressBar';

describe('ProgressBar', () => {
	const props: Props = {
		maxValue: 100,
		testID: 'progress-bar-test-id',
		value: 80,
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<ProgressBar {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should display green progress line as default color', () => {
		render(<ProgressBar {...props} />);

		const line = screen.getByTestId('progress-line-progress-bar-test-id');

		expect(line).toHaveStyle({
			backgroundColor: colors.green,
		});
	});

	it('should apply other colors to progress line', () => {
		render(<ProgressBar {...props} progressColor="#1ecbe1" />);

		const line = screen.getByTestId('progress-line-progress-bar-test-id');

		expect(line).toHaveStyle({
			backgroundColor: '#1ecbe1',
		});
	});

	it('should calculate progress line width based on value and maxValue', () => {
		render(<ProgressBar {...props} />);

		const line = screen.getByTestId('progress-line-progress-bar-test-id');

		expect(line).toHaveStyle({
			width: '80%',
		});
	});

	it('should display full progress line on progress > 100%', () => {
		render(<ProgressBar {...props} value={300} />);

		const line = screen.getByTestId('progress-line-progress-bar-test-id');

		expect(line).toHaveStyle({
			width: '100%',
		});
	});

	it('should apply additional styles', () => {
		const style = { marginBottom: 10 };
		render(<ProgressBar {...props} style={style} />);

		const bar = screen.getByTestId('progress-bar-test-id');

		fireEvent.press(bar);

		expect(bar).toHaveStyle(style);
	});
});
