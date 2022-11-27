import { forwardRef, useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import {
	Card,
	IconButton,
	InputField,
	InputFieldHandle,
} from 'components/atoms';

import { colors } from 'theme';
import { styles } from './PasswordInput.styles';

export interface Props {
	placeholder: string;
	testID: string;
	style?: StyleProp<ViewStyle>;
}

export const PasswordInput = forwardRef<InputFieldHandle, Props>(
	({ placeholder, style, testID }, ref) => {
		const [hidePassword, setHidePassword] = useState(true);
		return (
			<Card style={[styles.container, style]} testID={testID}>
				<InputField
					ref={ref}
					placeholder={placeholder}
					secureTextEntry={hidePassword}
					style={styles.inputField}
					testID={`input-field-${testID}`}
				/>
				<IconButton
					btnStyle={styles.iconBtn}
					iconColor={colors.mainDark}
					iconName="eye-off"
					iconSize={16}
					testID={`icon-btn-${testID}`}
					onPress={() => setHidePassword((hidden) => !hidden)}
				/>
			</Card>
		);
	}
);
