import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';

import { Button, InputFieldHandle } from 'components/atoms';

import { EmailInput, PasswordInput, TextInput } from 'components/molecules';
import { styles } from './SignUpForm.styles';

export interface Props {
	onSubmitSignUpForm: (userCredentials: {
		name: string;
		email: string;
		password: string;
	}) => void;
}

export const SignUpForm = ({ onSubmitSignUpForm }: Props) => {
	const nameRef = useRef<InputFieldHandle>(null);
	const emailRef = useRef<InputFieldHandle>(null);
	const passwordRef = useRef<InputFieldHandle>(null);
	const confirmPasswordRef = useRef<InputFieldHandle>(null);

	const [isEmailValid, setIsEmailValid] = useState(false);

	useEffect(() => {
		nameRef.current?.setValue('John Smith');
		emailRef.current?.setValue('test@test.com');
		passwordRef.current?.setValue('password');
		confirmPasswordRef.current?.setValue('password');
		setIsEmailValid(true);
	}, []);

	const validateEmail = (email: string) => {
		return !!email.match(
			/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
		);
	};

	const onPressSubmitButton = () => {
		const name = nameRef.current?.getValue();
		const email = emailRef.current?.getValue();
		const password = passwordRef.current?.getValue();
		const confirmPassword = confirmPasswordRef.current?.getValue();

		if (
			name &&
			email &&
			password &&
			isEmailValid &&
			password === confirmPassword
		) {
			onSubmitSignUpForm({
				name,
				email,
				password,
			});
		}
	};

	return (
		<View>
			<TextInput
				ref={nameRef}
				placeholder="Enter your name"
				style={styles.input}
				testID="sign-up-form-name-input-test-id"
			/>
			<EmailInput
				ref={emailRef}
				isValid={isEmailValid}
				placeholder="Enter your email"
				setIsValid={setIsEmailValid}
				style={styles.input}
				testID="sign-up-form-email-input-test-id"
				validate={validateEmail}
			/>
			<PasswordInput
				ref={passwordRef}
				placeholder="Enter your password"
				style={styles.input}
				testID="sign-up-form-password-input-test-id"
			/>
			<PasswordInput
				ref={confirmPasswordRef}
				placeholder="Confirm your password"
				style={styles.input}
				testID="sign-up-form-confirm-password-input-test-id"
			/>
			<Button
				testID="sign-up-form-submit-button-test-id"
				title="Sign Up"
				onPress={onPressSubmitButton}
			/>
		</View>
	);
};
