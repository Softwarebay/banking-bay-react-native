import {
	Dispatch,
	forwardRef,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { Card, Icon, InputField, InputFieldHandle } from 'components/atoms';

import { styles } from './EmailInput.styles';

interface Props {
	placeholder: string;
	testID: string;
	style?: StyleProp<TextStyle>;
	validate: (text: string) => boolean;
	setIsEmailValid: Dispatch<SetStateAction<boolean>>;
}

export const EmailInput = forwardRef<InputFieldHandle, Props>(
	({ placeholder, style, validate, setIsEmailValid, testID }, ref) => {
		const [isValid, setIsValid] = useState(false);

		const validRef = useRef(false);

		useEffect(() => {
			if (validRef.current !== isValid) {
				validRef.current = isValid;
				setIsEmailValid(isValid);
			}
		}, [isValid, setIsEmailValid]);

		return (
			<Card style={[styles.container, style]}>
				<InputField
					ref={ref}
					placeholder={placeholder}
					setIsValid={setIsValid}
					style={styles.inputField}
					testID={testID}
					validate={validate}
				/>
				{isValid && <Icon name="check" testID={`icon-${testID}`} />}
			</Card>
		);
	}
);
