import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { SignUpForm } from './SignUpForm';

storiesOf('Organisms/SignUpForm', module)
	.addDecorator((getStory) => <ViewStory>{getStory()}</ViewStory>)
	.add('Default', () => (
		<SignUpForm onSubmitSignUpForm={action('onSubmitSignUpForm')} />
	));
