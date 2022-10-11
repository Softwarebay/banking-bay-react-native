import { Image } from 'react-native';

import logo from 'assets/logo.png';

interface Props {
	testID?: string;
}

export const Logo = ({ testID }: Props) => {
	return <Image source={logo} testID={testID} />;
};
