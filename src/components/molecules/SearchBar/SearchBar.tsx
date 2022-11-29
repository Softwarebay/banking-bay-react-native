import {
	Card,
	IconButton,
	InputField,
	InputFieldHandle,
} from 'components/atoms';
import { forwardRef } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { colors } from 'theme';

import { styles } from './SearchBar.styles';

export interface Props {
	placeholder: string;
	onSearch: () => void;
	style?: StyleProp<ViewStyle>;
	testID: string;
}

export const SearchBar = forwardRef<InputFieldHandle, Props>(
	({ placeholder, onSearch, style, testID }, ref) => {
		return (
			<Card style={[styles.container, style]} testID={testID}>
				<InputField
					ref={ref}
					placeholder={placeholder}
					style={styles.inputField}
					testID={`input-field-${testID}`}
				/>
				<IconButton
					btnStyle={styles.iconBtn}
					iconColor={colors.mainDark}
					iconName="search"
					iconSize={16}
					testID={`icon-btn-${testID}`}
					onPress={onSearch}
				/>
			</Card>
		);
	}
);
