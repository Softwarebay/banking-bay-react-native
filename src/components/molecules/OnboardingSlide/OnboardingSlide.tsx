import { useWindowDimensions, View } from 'react-native';

import { Heading, Text } from 'components/atoms';

import { styles } from './OnboardingSlide.styles';

interface Props {
	title: string;
	description: string;
	id: number;
}

export const OnboardingSlide = ({ title, description, id }: Props) => {
	const { width } = useWindowDimensions();

	return (
		<View style={{ width: width - 100 }}>
			<Heading
				size="h3"
				style={[styles.title, styles.text]}
				testID={`onboarding-heading-${id}-test-id`}
				text={title}
			/>
			<Text
				style={[styles.subtitle, styles.text]}
				testID={`onboarding-text-${id}-test-id`}
				text={description}
			/>
		</View>
	);
};
