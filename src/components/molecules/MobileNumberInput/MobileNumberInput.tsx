import { forwardRef } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import {
	Card,
	Icon,
	IconProps,
	InputField,
	InputFieldHandle,
} from 'components/atoms';

import { styles } from './MobileNumberInput.styles';

interface Props {
	flagIcon: IconProps['name'];
	placeholder: string;
	testID: string;
	style?: StyleProp<ViewStyle>;
}

export const MobileNumberInput = forwardRef<InputFieldHandle, Props>(
	({ flagIcon, placeholder, testID, style }, ref) => {
		return (
			<Card style={[styles.container, style]}>
				<Icon name={flagIcon} size={20} />
				<InputField
					ref={ref}
					keyboardType="phone-pad"
					placeholder={placeholder}
					style={styles.inputField}
					testID={testID}
				/>
			</Card>
		);
	}
);
