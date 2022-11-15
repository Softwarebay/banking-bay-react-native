import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { AuthViaSocials } from './AuthViaSocials';

import type { Props } from './AuthViaSocials';

describe('AuthViaSocials', () => {
	const mockOnPressFacebook = jest.fn<Props['onPressFacebook'], []>();
	const mockOnPressGooglePlus = jest.fn<Props['onPressGooglePlus'], []>();
	const mockOnPressTwitter = jest.fn<Props['onPressTwitter'], []>();

	const props: Props = {
		onPressFacebook: mockOnPressFacebook,
		onPressGooglePlus: mockOnPressGooglePlus,
		onPressTwitter: mockOnPressTwitter,
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<AuthViaSocials {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render 3 icon buttons', () => {
		render(<AuthViaSocials {...props} />);

		const authButtons = screen.getAllByTestId(
			/(facebook|twitter|googlePlus)-icon-btn-test-id/gi
		);

		expect(authButtons).toHaveLength(3);
	});

	it('should handle press events on Facebook icon', () => {
		render(<AuthViaSocials {...props} />);

		const facebookIconBtn = screen.getByTestId(/facebook-icon-btn-test-id/i);

		fireEvent.press(facebookIconBtn);

		expect(mockOnPressFacebook).toHaveBeenCalledTimes(1);
		expect(mockOnPressGooglePlus).not.toHaveBeenCalledTimes(1);
		expect(mockOnPressTwitter).not.toHaveBeenCalledTimes(1);
	});

	it('should handle press events on Google+ icon', () => {
		render(<AuthViaSocials {...props} />);

		const googlePlusIconBtn = screen.getByTestId(
			/googlePlus-icon-btn-test-id/i
		);

		fireEvent.press(googlePlusIconBtn);

		expect(mockOnPressGooglePlus).toHaveBeenCalledTimes(1);
		expect(mockOnPressFacebook).not.toHaveBeenCalledTimes(1);
		expect(mockOnPressTwitter).not.toHaveBeenCalledTimes(1);
	});

	it('should handle press events on Twitter icon', () => {
		render(<AuthViaSocials {...props} />);

		const twitterIconBtn = screen.getByTestId(/twitter-icon-btn-test-id/i);

		fireEvent.press(twitterIconBtn);

		expect(mockOnPressTwitter).toHaveBeenCalledTimes(1);
		expect(mockOnPressFacebook).not.toHaveBeenCalledTimes(1);
		expect(mockOnPressGooglePlus).not.toHaveBeenCalledTimes(1);
	});
});
