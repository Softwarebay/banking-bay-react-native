import { StatusBar } from 'expo-status-bar';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

import { Flex, Heading, Link, Text } from 'components/atoms';
import { AuthViaSocials, SignInForm } from 'components/organisms';

import { colors } from 'theme';

import { styles } from './SignInTemplate.styles';

export interface Props {
	headingText: string;
	footerText: string;
	footerLinkText: string;
	onRestorePassword: () => void;
	onSubmitSignInForm: (userCredentials: {
		email: string;
		password: string;
		persistPassword: boolean;
	}) => void;
	onPressFooterLink: () => void;
	onPressFacebook: () => void;
	onPressGooglePlus: () => void;
	onPressTwitter: () => void;
}

export const SignInTemplate = ({
	headingText,
	footerText,
	footerLinkText,
	onRestorePassword,
	onSubmitSignInForm,
	onPressFooterLink,
	onPressFacebook,
	onPressGooglePlus,
	onPressTwitter,
}: Props) => {
	return (
		<>
			<StatusBar backgroundColor={colors.screenBackground} style="dark" />

			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<Heading
						size="h1"
						style={styles.heading}
						testID="sign-in-heading-test-id"
						text={headingText}
					/>
					<SignInForm
						onRestorePassword={onRestorePassword}
						onSubmitSignInForm={onSubmitSignInForm}
					/>
					<Flex direction="row" style={styles.footer}>
						<Text
							testID="sign-in-footer-text-test-id"
							text={`${footerText} `}
						/>
						<Link
							testID="sign-in-footer-link-test-id"
							text={footerLinkText}
							onPress={onPressFooterLink}
						/>
					</Flex>
					<AuthViaSocials
						onPressFacebook={onPressFacebook}
						onPressGooglePlus={onPressGooglePlus}
						onPressTwitter={onPressTwitter}
					/>
				</View>
			</TouchableWithoutFeedback>
		</>
	);
};
