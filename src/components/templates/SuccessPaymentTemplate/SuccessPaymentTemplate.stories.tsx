import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { SuccessPaymentTemplate } from './SuccessPaymentTemplate';

storiesOf('Templates/SuccessPaymentTemplate', module)
	.addDecorator((getStory) => <ViewStory fullscreen>{getStory()}</ViewStory>)
	.add('Default', () => (
		<SuccessPaymentTemplate
			amount="10.57"
			primaryButtonTitle={text('primaryButtonTitle', 'Primary')}
			secondaryButtonTitle={text('secondaryButtonTitle', 'Secondary')}
			onPressPrimaryButton={action('onPressPrimaryButton')}
			onPressSecondaryButton={action('onPressSecondaryButton')}
		/>
	));
