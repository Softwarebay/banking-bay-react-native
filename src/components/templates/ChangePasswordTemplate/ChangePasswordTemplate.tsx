import { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

import { colors } from 'theme';
import { Button, InputFieldHandle, Text } from 'components/atoms';

import { PasswordInput } from 'components/molecules';
import { styles } from './ChangePasswordTemplate.styles';

export interface Props {
	passwordPlaceholder: string;
	confirmPasswordPlaceholder: string;
	headerText: string;
	onChangePassword: (newPassword: string) => void;
}

export const ChangePasswordTemplate = ({
	headerText,
	passwordPlaceholder,
	confirmPasswordPlaceholder,
	onChangePassword,
}: Props) => {
	const passwordRef = useRef<InputFieldHandle>(null);
	const confirmPasswordRef = useRef<InputFieldHandle>(null);

	const onPress = () => {
		const password = passwordRef.current?.getValue();
		const confirmPassword = confirmPasswordRef.current?.getValue();

		if (password && password === confirmPassword) {
			onChangePassword(password);
		}
	};
	return (
		<>
			<StatusBar backgroundColor={colors.screenBackground} style="dark" />
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<Text
						style={styles.headerText}
						testID="change-password-template-header-test-id"
						text={headerText}
					/>
					<PasswordInput
						ref={passwordRef}
						placeholder={passwordPlaceholder}
						style={styles.input}
						testID="change-password-template-password-input-test-id"
					/>
					<PasswordInput
						ref={confirmPasswordRef}
						placeholder={confirmPasswordPlaceholder}
						style={styles.input}
						testID="change-password-template-confirm-password-input-test-id"
					/>
					<Button
						style={styles.button}
						testID="change-password-template-button-test-id"
						title="Change Password"
						onPress={onPress}
					/>
				</View>
			</TouchableWithoutFeedback>
		</>
	);
};
