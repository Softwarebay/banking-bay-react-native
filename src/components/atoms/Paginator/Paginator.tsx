import { View } from 'react-native';

import { styles } from './Paginator.styles';

interface Props {
	slides: { id: number }[];
	currentIndex: number;
	testID?: string;
}

export const Paginator = ({ slides, currentIndex, testID }: Props) => {
	return (
		<View style={styles.container} testID={testID}>
			{slides.map((slide, index) => (
				<View
					key={slide.id}
					style={[styles.dot, index === currentIndex && styles.current]}
				/>
			))}
		</View>
	);
};
