import { View } from 'react-native';

import { styles } from './Divider.styles';

interface Props {
	testID?: string;
}

export const Divider = ({ testID }: Props) => {
	return <View style={styles.line} testID={testID} />;
};
