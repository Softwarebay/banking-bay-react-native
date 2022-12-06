import { StyleProp, ViewStyle } from 'react-native';

import { Flex } from '../Flex/Flex';

import { styles } from './Card.styles';

export interface Props {
	children: React.ReactNode;
	style?: StyleProp<ViewStyle>;
	testID?: string;
	direction?: 'row' | 'column';
}

export const Card = ({ children, style, direction = 'row', testID }: Props) => {
	return (
		<Flex direction={direction} style={[styles.card, style]} testID={testID}>
			{children}
		</Flex>
	);
};
