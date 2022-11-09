import { StyleProp, ViewStyle } from 'react-native';

import { Flex } from '../Flex/Flex';

import { styles } from './Card.styles';

export interface Props {
	children: React.ReactNode;
	style?: StyleProp<ViewStyle>;
	testID?: string;
}

export const Card = ({ children, style, testID }: Props) => {
	return (
		<Flex direction="row" style={[styles.card, style]} testID={testID}>
			{children}
		</Flex>
	);
};
