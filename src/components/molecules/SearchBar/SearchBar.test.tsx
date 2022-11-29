import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { SearchBar } from './SearchBar';

import type { Props } from './SearchBar';

describe('PasswordInput', () => {
	const onSearch = jest.fn<Props['onSearch'], []>();

	const props: Props = {
		testID: 'searchbar-test-id',
		placeholder: 'Search',
		style: {
			height: 50,
		},
		onSearch,
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<SearchBar {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render input field and search icon button', () => {
		render(<SearchBar {...props} />);

		const searchBar = screen.getByTestId('searchbar-test-id');
		const inputField = screen.getByTestId('input-field-searchbar-test-id');
		const iconBtn = screen.getByTestId('icon-btn-searchbar-test-id');
		const searchIcon = screen.getByTestId('search-icon-test-id');

		expect(searchBar.children).toHaveLength(2);
		expect(inputField).not.toBeNull();
		expect(iconBtn).not.toBeNull();
		expect(searchIcon).not.toBeNull();
	});

	it('should apply additional styles', () => {
		render(<SearchBar {...props} />);

		const searchBar = screen.getByTestId('searchbar-test-id');

		expect(searchBar).toHaveStyle({
			height: 50,
		});
	});

	it('should display placeholder', () => {
		render(<SearchBar {...props} />);

		const inputField = screen.getByTestId('input-field-searchbar-test-id');

		expect(inputField.props).toHaveProperty('placeholder', 'Search');
	});

	it('should handle type events', () => {
		render(<SearchBar {...props} />);

		const inputField = screen.getByTestId('input-field-searchbar-test-id');

		fireEvent.changeText(inputField, 'query');

		expect(inputField.props).toHaveProperty('value', 'query');
	});

	it("should run 'onSearch' function after press on search icon button", () => {
		render(<SearchBar {...props} />);

		const iconBtn = screen.getByTestId('icon-btn-searchbar-test-id');

		fireEvent.press(iconBtn);

		expect(onSearch).toHaveBeenCalledTimes(1);
	});
});
