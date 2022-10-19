import { Flex, Heading, IconButton } from 'components/atoms';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './TopNav.styles';

interface Props {
	screenTitle: string;
	onPressButtonLeft: () => void;
	testID: string;
}

export const TopNav = ({ screenTitle, testID, onPressButtonLeft }: Props) => {
	return (
		<SafeAreaView>
			<Flex direction="row" style={[styles.container, styles.padding]}>
				<IconButton
					btnStyle={[styles.padding, styles.leftBtn]}
					iconName="chevron-left"
					testID="left-btn-{testID}"
					onPress={onPressButtonLeft}
				/>
				<Heading size="h4" testID={`title-${testID}`} text={screenTitle} />
			</Flex>
		</SafeAreaView>
	);
};
