import { useNavigation } from '@react-navigation/native';

import type { NavigationProp } from 'navigator';

import { SignInTemplate } from 'components/templates';

export const SignInScreen = () => {
	const navigation = useNavigation<NavigationProp>();

	const signInViaEmailPassword = (userCredentials: {
		email: string;
		password: string;
		persistPassword: boolean;
	}) => {
		console.log(userCredentials);
		navigation.navigate('Root');
	};

	const restorePassword = () => {
		console.log('Restore password');
	};

	const navigateToSignUp = () => {
		console.log('To SignUp');
	};

	const signInViaFacebook = () => {
		console.log('Sign in via Facebook');
	};

	const signInViaGooglePlus = () => {
		console.log('Sign in via Google+');
	};

	const signInViaTwitter = () => {
		console.log('Sign in via Twitter');
	};

	return (
		<SignInTemplate
			footerLinkText="Register now"
			footerText="No account?"
			headingText="Welcome to BankingBay!"
			onPressFacebook={signInViaFacebook}
			onPressFooterLink={navigateToSignUp}
			onPressGooglePlus={signInViaGooglePlus}
			onPressTwitter={signInViaTwitter}
			onRestorePassword={restorePassword}
			onSubmitSignInForm={signInViaEmailPassword}
		/>
	);
};
