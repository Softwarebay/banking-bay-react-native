import { useNavigation } from '@react-navigation/native';
import { ChangePasswordTemplate } from 'components/templates';

import type { NavigationProp } from 'navigation';

export const ChangePasswordScreen = () => {
	const navigation = useNavigation<NavigationProp>();

	const onChangePassword = (newPassword: string) => {
		console.log('onChangePassword', newPassword);
		navigation.navigate('Root');
	};
	return (
		<ChangePasswordTemplate
			confirmPasswordPlaceholder="Confirm your password"
			headerText="Enter new password and confirm."
			passwordPlaceholder="Enter your password"
			onChangePassword={onChangePassword}
		/>
	);
};
