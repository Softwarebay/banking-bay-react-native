import { forwardRef, useImperativeHandle, useState } from 'react';
import {
	KeyboardTypeOptions,
	StyleProp,
	TextInput,
	TextStyle,
} from 'react-native';

import { styles } from './InputField.styles';

interface Props {
	testID: string;
	placeholder?: string;
	secureTextEntry?: boolean;
	keyboardType?: KeyboardTypeOptions;
	style?: StyleProp<TextStyle>;
	validate?: (text: string) => boolean;
	setIsValid?: (valid: boolean) => void;
}

export interface InputFieldHandle {
	getValue: () => string;
	clear: () => void;
	setValue: (text: string) => void;
}

export const InputField = forwardRef<InputFieldHandle, Props>(
	(
		{
			testID,
			placeholder,
			secureTextEntry,
			keyboardType = 'default',
			style,
			validate,
			setIsValid,
		},
		ref
	) => {
		const [inputValue, setInputValue] = useState('');

		useImperativeHandle(ref, () => ({
			getValue: () => inputValue,
			clear: () => {
				setInputValue('');
			},
			setValue: (text) => {
				setInputValue(text);
			},
		}));

		const onChangeText = (text: string) => {
			setInputValue(text);
			if (validate && setIsValid) {
				const isValid = validate(text);
				setIsValid(isValid);
			}
		};

		return (
			<TextInput
				autoCorrect={false}
				keyboardType={keyboardType}
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
				style={[styles.inputField, style]}
				testID={testID}
				value={inputValue}
				onChangeText={onChangeText}
			/>
		);
	}
);
