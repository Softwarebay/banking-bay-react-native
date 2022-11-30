import { forwardRef } from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { Card, InputField, InputFieldHandle } from 'components/atoms';

import { styles } from './TextInput.styles';

export interface Props {
	placeholder: string;
	testID: string;
	style?: StyleProp<TextStyle>;
}

export const TextInput = forwardRef<InputFieldHandle, Props>(
	({ placeholder, style, testID }, ref) => {
		return (
			<Card style={[styles.container, style]} testID={testID}>
				<InputField
					ref={ref}
					keyboardType="default"
					placeholder={placeholder}
					secureTextEntry={false}
					style={styles.inputField}
					testID={`input-field-${testID}`}
				/>
			</Card>
		);
	}
);
