import { forwardRef, useImperativeHandle, useState } from 'react';
import { Pressable } from 'react-native';

import { colors } from 'theme';
import { Icon } from '../Icon/Icon';

import { styles } from './Checkbox.styles';

export interface CheckboxHandle {
	getValue: () => boolean;
	clear: () => void;
}

export interface Props {
	testID: string;
}

export const Checkbox = forwardRef<CheckboxHandle, Props>(({ testID }, ref) => {
	const [isChecked, setIsChecked] = useState(false);

	useImperativeHandle(ref, () => ({
		getValue: () => isChecked,
		clear: () => {
			setIsChecked(false);
		},
	}));

	const onPress = () => {
		setIsChecked((checked) => !checked);
	};

	return (
		<Pressable
			hitSlop={20}
			style={styles.checkbox}
			testID={testID}
			onPress={onPress}
		>
			{isChecked && <Icon color={colors.mainDark} name="check" />}
		</Pressable>
	);
});
