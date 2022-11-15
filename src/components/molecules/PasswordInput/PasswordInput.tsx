import { forwardRef, useState } from 'react';

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
}

export const PasswordInput = forwardRef<InputFieldHandle, Props>(
	({ placeholder, testID }, ref) => {
		const [hidePassword, setHidePassword] = useState(true);
		return (
			<Card style={styles.container} testID={testID}>
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
