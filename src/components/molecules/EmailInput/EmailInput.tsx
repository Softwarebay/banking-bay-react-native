import { forwardRef } from 'react';

import { Card, Icon, InputField, InputFieldHandle } from 'components/atoms';

import { styles } from './EmailInput.styles';

interface Props {
	placeholder: string;
	testID: string;
	isValid: boolean;
}

export const EmailInput = forwardRef<InputFieldHandle, Props>(
	({ placeholder, isValid, testID }, ref) => {
		return (
			<Card style={styles.container}>
				<InputField
					ref={ref}
					placeholder={placeholder}
					style={styles.inputField}
					testID={testID}
				/>
				{isValid && <Icon name="check" testID={`icon-${testID}`} />}
			</Card>
		);
	}
);
