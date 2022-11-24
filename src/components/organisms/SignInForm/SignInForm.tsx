import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';

import {
	Button,
	Checkbox,
	CheckboxHandle,
	Flex,
	InputFieldHandle,
	Link,
	Text,
} from 'components/atoms';
import { EmailInput, PasswordInput } from 'components/molecules';

import { styles } from './SignInForm.styles';

export interface Props {
	onRestorePassword: () => void;
	onSubmitSignInForm: (userCredentials: {
		email: string;
		password: string;
		persistPassword: boolean;
	}) => void;
}

export const SignInForm = ({
	onSubmitSignInForm,
	onRestorePassword,
}: Props) => {
	const emailRef = useRef<InputFieldHandle>(null);
	const passwordRef = useRef<InputFieldHandle>(null);
	const checkboxRef = useRef<CheckboxHandle>(null);

	const [isEmailValid, setIsEmailValid] = useState(false);

	useEffect(() => {
		emailRef.current?.setValue('test@test.com');
		passwordRef.current?.setValue('password');
		setIsEmailValid(true);
	}, []);

	const onPressSubmitButton = () => {
		const email = emailRef.current?.getValue();
		const password = passwordRef.current?.getValue();
		const persistPassword = checkboxRef.current?.getValue();

		if (email && password && persistPassword !== undefined && isEmailValid) {
			onSubmitSignInForm({
				email,
				password,
				persistPassword,
			});
		}
	};

	const validateEmail = (email: string) => {
		return !!email.match(
			/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
		);
	};

	return (
		<View>
			<EmailInput
				ref={emailRef}
				isValid={isEmailValid}
				placeholder="Enter your email"
				setIsValid={setIsEmailValid}
				style={styles.emailInput}
				testID="sign-in-form-email-input-test-id"
				validate={validateEmail}
			/>
			<PasswordInput
				ref={passwordRef}
				placeholder="Enter your password"
				testID="sign-in-form-password-input-test-id"
			/>
			<Flex direction="row" style={styles.actions}>
				<Flex direction="row">
					<Checkbox ref={checkboxRef} testID="sign-in-form-checkbox-test-id" />
					<Text style={styles.checkboxLabel} text="Remember me" />
				</Flex>
				<Link
					testID="sign-in-form-restore-password-link-test-id"
					text="Lost your password?"
					onPress={onRestorePassword}
				/>
			</Flex>
			<Button
				testID="sign-in-form-submit-button-test-id"
				title="Sign In"
				onPress={onPressSubmitButton}
			/>
		</View>
	);
};
