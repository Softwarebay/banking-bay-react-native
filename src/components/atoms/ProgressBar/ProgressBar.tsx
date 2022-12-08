import { StyleProp, View, ViewStyle } from 'react-native';
import { colors } from 'theme';

import { styles } from './ProgressBar.styles';

export interface Props {
	testID: string;
	value: number;
	maxValue: number;
	style?: StyleProp<ViewStyle>;
	progressColor?: string;
}

export const ProgressBar = ({
	maxValue,
	progressColor = colors.green,
	testID,
	value,
	style,
}: Props) => {
	const progress = (value / maxValue) * 100;

	return (
		<View style={style} testID={testID}>
			<View
				style={[
					styles.progress,
					styles.progressLine,
					{
						width: `${progress > 100 ? 100 : progress}%`,
						backgroundColor: progressColor,
					},
				]}
				testID={`progress-line-${testID}`}
			/>
			<View style={[styles.progress, styles.progressShadow]} />
		</View>
	);
};
