import { StyleProp, View, ViewStyle } from 'react-native';

import { styles } from './Divider.styles';

interface Props {
	style?: StyleProp<ViewStyle>;
	testID?: string;
}

export const Divider = ({ testID, style }: Props) => {
	return <View style={[styles.line, style]} testID={testID} />;
};
