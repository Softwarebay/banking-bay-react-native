import { Flex, Heading, Link, Text } from 'components/atoms';
import { AuthViaSocials, SignUpForm } from 'components/organisms';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { colors } from 'theme';

import { styles } from './SignUpTemplate.styles';

export interface Props {
	headingText: string;
	footerText: string;
	footerLinkText: string;
	onSubmitSignUpForm: (userCredentials: {
		name: string;
		email: string;
		password: string;
	}) => void;
	onPressFooterLink: () => void;
	onPressFacebook: () => void;
	onPressGooglePlus: () => void;
	onPressTwitter: () => void;
}

export const SignUpTemplate = ({
	headingText,
	footerText,
	footerLinkText,
	onSubmitSignUpForm,
	onPressFacebook,
	onPressGooglePlus,
	onPressTwitter,
	onPressFooterLink,
}: Props) => {
	return (
		<>
			<StatusBar backgroundColor={colors.screenBackground} style="dark" />
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<Heading
						size="h1"
						style={styles.heading}
						testID="sign-up-heading-test-id"
						text={headingText}
					/>
					<SignUpForm onSubmitSignUpForm={onSubmitSignUpForm} />
					<Flex direction="row" style={styles.footer}>
						<Text
							testID="sign-up-footer-text-test-id"
							text={`${footerText} `}
						/>
						<Link
							testID="sign-up-footer-link-test-id"
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
