import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import { SignInForm } from './SignInForm';

storiesOf('Organisms/SignInForm', module)
	.addDecorator((getStory) => <CenterStory>{getStory()}</CenterStory>)
	.add('Default', () => (
		<SignInForm
			onRestorePassword={action('onRestorePassword')}
			onSubmitSignInForm={action('onSubmitSignInForm')}
		/>
	));
