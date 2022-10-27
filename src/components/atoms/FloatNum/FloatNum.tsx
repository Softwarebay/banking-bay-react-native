import { StyleProp, Text, TextStyle } from 'react-native';

import { Flex } from '../Flex/Flex';

import { styles } from './FloatNum.styles';

interface Props {
	number: string;
	prefix?: string;
	intStyle?: StyleProp<TextStyle>;
	floatStyle?: StyleProp<TextStyle>;
	style?: StyleProp<TextStyle>;
	testID?: string;
}

export const FloatNum = ({
	number,
	prefix,
	intStyle,
	floatStyle,
	style,
	testID,
}: Props) => {
	const [integer, float] = number.split('.');

	return (
		<Flex direction="row" style={[styles.container, style]} testID={testID}>
			<Text style={[styles.text, intStyle]}>{`${
				prefix ?? ''
			}${integer}.`}</Text>
			<Text style={[styles.text, floatStyle]}>{float}</Text>
		</Flex>
	);
};
