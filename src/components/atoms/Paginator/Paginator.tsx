import { View } from 'react-native';

import { Flex } from '../Flex/Flex';

import { styles } from './Paginator.styles';

export interface Props {
	slides: { id: number }[];
	currentIndex: number;
	testID?: string;
	activeColor?: string;
}

export const Paginator = ({
	slides,
	currentIndex,
	testID,
	activeColor,
}: Props) => {
	return (
		<Flex direction="row" testID={testID}>
			{slides.map((slide, index) => (
				<View
					key={slide.id}
					style={[
						styles.dot,
						index === currentIndex && styles.current,
						{ borderColor: activeColor },
					]}
				/>
			))}
		</Flex>
	);
};
