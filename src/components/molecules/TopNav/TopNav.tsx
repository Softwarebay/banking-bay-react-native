import { SafeAreaView } from 'react-native-safe-area-context';
import { Flex, Heading, IconButton } from 'components/atoms';
import { colors } from 'theme';

import { styles } from './TopNav.styles';

interface Props {
	screenTitle: string;
	onPressBackButton: () => void;
}

export const TopNav = ({ screenTitle, onPressBackButton }: Props) => {
	return (
		<SafeAreaView>
			<Flex direction="row" style={[styles.container, styles.padding]}>
				<IconButton
					btnStyle={[styles.padding, styles.leftBtn]}
					iconColor={colors.mainDark}
					iconName="chevron-left"
					testID="left-btn-{testID}"
					onPress={onPressBackButton}
				/>
				<Heading size="h4" testID="title-top-nav" text={screenTitle} />
			</Flex>
		</SafeAreaView>
	);
};
