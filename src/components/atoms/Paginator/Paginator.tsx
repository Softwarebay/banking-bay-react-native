import { View } from 'react-native';

import { Flex } from '../Flex/Flex';

import { styles } from './Paginator.styles';

interface Props {
	slides: { id: number }[];
	currentIndex: number;
	testID?: string;
}

export const Paginator = ({ slides, currentIndex, testID }: Props) => {
	return (
		<Flex direction="row" testID={testID}>
			{slides.map((slide, index) => (
				<View
					key={slide.id}
					style={[styles.dot, index === currentIndex && styles.current]}
				/>
			))}
		</Flex>
	);
};
