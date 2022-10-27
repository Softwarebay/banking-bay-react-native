import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import { SuccessPaymentTemplate } from './SuccessPaymentTemplate';

storiesOf('Templates/SuccessPaymentTemplate', module)
	.addDecorator((getStory) => (
		<CenterStory style={{ paddingHorizontal: 0 }}>{getStory()}</CenterStory>
	))
	.add('Default', () => (
		<SuccessPaymentTemplate
			amount="10.57"
			primaryButtonTitle={text('primaryButtonTitle', 'Primary')}
			secondaryButtonTitle={text('secondaryButtonTitle', 'Secondary')}
			onPressPrimaryButton={action('onPressPrimaryButton')}
			onPressSecondaryButton={action('onPressSecondaryButton')}
		/>
	));
