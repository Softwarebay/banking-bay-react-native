import { useNavigation } from '@react-navigation/native';
import { SignUpTemplate } from 'components/templates';

import type { NavigationProp } from 'navigation';

export const SignUpScreen = () => {
	const navigation = useNavigation<NavigationProp>();

	const registerUserWithEmailAndPassword = (userCredentials: {
		name: string;
		email: string;
		password: string;
	}) => {
		console.log(userCredentials);
		navigation.navigate('SuccessRegistration');
	};

	const registerViaFacebook = () => {
		console.log('Sign up via Facebook');
	};

	const registerViaGooglePlus = () => {
		console.log('Sign up via Google+');
	};

	const registerViaTwitter = () => {
		console.log('Sign up via Twitter');
	};

	const navigateToSignIn = () => {
		navigation.navigate('SignIn');
	};

	return (
		<SignUpTemplate
			footerLinkText="Sign in"
			footerText="Already have an account?"
			headingText="Sign up!"
			onPressFacebook={registerViaFacebook}
			onPressFooterLink={navigateToSignIn}
			onPressGooglePlus={registerViaGooglePlus}
			onPressTwitter={registerViaTwitter}
			onSubmitSignUpForm={registerUserWithEmailAndPassword}
		/>
	);
};
