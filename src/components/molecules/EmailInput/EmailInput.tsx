import { Dispatch, forwardRef, SetStateAction } from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { Card, Icon, InputField, InputFieldHandle } from 'components/atoms';

import { colors } from 'theme';

import { styles } from './EmailInput.styles';

interface Props {
	placeholder: string;
	testID: string;
	style?: StyleProp<TextStyle>;
	isValid: boolean;
	validate?: (text: string) => boolean;
	setIsValid?: Dispatch<SetStateAction<boolean>>;
}

export const EmailInput = forwardRef<InputFieldHandle, Props>(
	({ placeholder, style, validate, isValid, setIsValid, testID }, ref) => {
		return (
			<Card style={[styles.container, style]}>
				<InputField
					ref={ref}
					keyboardType="email-address"
					placeholder={placeholder}
					setIsValid={setIsValid}
					style={styles.inputField}
					testID={testID}
					validate={validate}
				/>
				{isValid && (
					<Icon
						color={colors.mainDark}
						name="check"
						testID={`icon-${testID}`}
					/>
				)}
			</Card>
		);
	}
);
