import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { ChangePasswordTemplate } from './ChangePasswordTemplate';

storiesOf('Templates/ChangePasswordTemplate', module)
	.addDecorator((getStory) => <ViewStory fullscreen>{getStory()}</ViewStory>)
	.add('Default', () => (
		<ChangePasswordTemplate
			confirmPasswordPlaceholder={text(
				'confirmPasswordPlaceholder',
				'Confirm password'
			)}
			headerText={text('headerText', 'Template header')}
			passwordPlaceholder={text('passwordPlaceholder', 'Password placeholder')}
			onChangePassword={action('onChangePassword')}
		/>
	));
