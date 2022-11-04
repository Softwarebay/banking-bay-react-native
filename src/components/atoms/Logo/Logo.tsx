import { colors } from 'theme';
import { Icon } from '../Icon/Icon';

interface Props {
	testID?: string;
}

export const Logo = ({ testID }: Props) => {
	return <Icon color={colors.mainDark} name="logo" size={40} testID={testID} />;
};
