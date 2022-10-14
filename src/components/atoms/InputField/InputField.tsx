import { forwardRef, useImperativeHandle, useState } from 'react';
import { StyleProp, TextInput, TextStyle } from 'react-native';

import { styles } from './InputField.styles';

interface Props {
	testID: string;
	placeholder?: string;
	secureTextEntry?: boolean;
	style?: StyleProp<TextStyle>;
}

export interface InputFieldHandle {
	getValue: () => string;
	clear: () => void;
}

export const InputField = forwardRef<InputFieldHandle, Props>(
	({ testID, placeholder, secureTextEntry, style }, ref) => {
		const [value, setValue] = useState('');

		useImperativeHandle(ref, () => ({
			getValue: () => value,
			clear: () => {
				setValue('');
			},
		}));

		return (
			<TextInput
				autoCorrect={false}
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
				style={[styles.inputField, style]}
				testID={testID}
				value={value}
				onChangeText={setValue}
			/>
		);
	}
);
