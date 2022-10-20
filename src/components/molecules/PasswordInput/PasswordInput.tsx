import { forwardRef, useState } from 'react';

import {
	Card,
	IconButton,
	InputField,
	InputFieldHandle,
} from 'components/atoms';

import { colors } from 'theme';
import { styles } from './PasswordInput.styles';

interface Props {
	placeholder: string;
	testID: string;
}

export const PasswordInput = forwardRef<InputFieldHandle, Props>(
	({ placeholder, testID }, ref) => {
		const [hidePassword, setHidePassword] = useState(true);
		return (
			<Card style={styles.container}>
				<InputField
					ref={ref}
					placeholder={placeholder}
					secureTextEntry={hidePassword}
					style={styles.inputField}
					testID={testID}
				/>
				<IconButton
					btnStyle={styles.iconBtn}
					iconColor={colors.mainDark}
					iconName="eye-off"
					testID={`icon-btn-${testID}`}
					onPress={() => setHidePassword((hidden) => !hidden)}
				/>
			</Card>
		);
	}
);
