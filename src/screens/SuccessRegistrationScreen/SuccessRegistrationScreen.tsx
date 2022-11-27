import { useNavigation } from '@react-navigation/native';

import { SuccessRegistrationTemplate } from 'components/templates';
import type { NavigationProp } from 'navigation';

export const SuccessRegistrationScreen = () => {
	const navigation = useNavigation<NavigationProp>();

	const onDone = () => {
		navigation.navigate('Root');
	};

	return (
		<SuccessRegistrationTemplate
			primaryButtonTitle="Done"
			onPressPrimaryButton={onDone}
		/>
	);
};
