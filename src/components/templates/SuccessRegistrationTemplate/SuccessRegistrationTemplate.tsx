import { ImageBackground, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Button, Heading, Image, Text } from 'components/atoms';

import { bgSummary } from 'assets/backgrounds';
import { colors } from 'theme';

import { styles } from './SuccessRegistrationTemplate.styles';

export interface Props {
	primaryButtonTitle: string;
	onPressPrimaryButton: () => void;
}

export const SuccessRegistrationTemplate = ({
	primaryButtonTitle,
	onPressPrimaryButton,
}: Props) => {
	return (
		<>
			<StatusBar style="dark" />
			<ImageBackground source={bgSummary} style={styles.backgroundImg}>
				<View style={styles.container}>
					<View style={styles.center}>
						<Image name="registration-icon" style={styles.registrationIcon} />
						<Heading
							color={colors.mainDark}
							size="h2"
							testID="registration-success-heading-test-id"
							text="Account created!"
						/>
						<Text
							style={styles.registrationMessage}
							testID="registration-success-message-test-id"
							text="Your account had been created successfully."
						/>
					</View>
					<Button
						testID="registration-success-primary-btn-test-id"
						title={primaryButtonTitle}
						onPress={onPressPrimaryButton}
					/>
				</View>
			</ImageBackground>
		</>
	);
};
