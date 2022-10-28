import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { SignInForm } from './SignInForm';

storiesOf('Organisms/SignInForm', module)
	.addDecorator((getStory) => <ViewStory>{getStory()}</ViewStory>)
	.add('Default', () => (
		<SignInForm
			onRestorePassword={action('onRestorePassword')}
			onSubmitSignInForm={action('onSubmitSignInForm')}
		/>
	));
