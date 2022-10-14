import { forwardRef } from 'react';

import {
	Card,
	IconButton,
	InputField,
	InputFieldHandle,
} from 'components/atoms';

import { styles } from './PasswordInput.styles';

interface Props {
	placeholder: string;
	testID: string;
	onPressShowPassword: () => void;
}

export const PasswordInput = forwardRef<InputFieldHandle, Props>(
	({ placeholder, testID, onPressShowPassword }, ref) => {
		return (
			<Card style={styles.container}>
				<InputField
					ref={ref}
					placeholder={placeholder}
					style={styles.inputField}
					testID={testID}
					secureTextEntry
				/>
				<IconButton
					btnStyle={styles.iconBtn}
					iconName="eye-off"
					testID={`icon-btn-${testID}`}
					onPress={onPressShowPassword}
				/>
			</Card>
		);
	}
);
