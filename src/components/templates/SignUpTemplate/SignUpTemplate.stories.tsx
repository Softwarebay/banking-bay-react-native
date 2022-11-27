import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { SignUpTemplate } from './SignUpTemplate';

storiesOf('Templates/SignUpTemplate', module)
	.addDecorator((getStory) => <ViewStory fullscreen>{getStory()}</ViewStory>)
	.add('Default', () => (
		<SignUpTemplate
			footerLinkText={text('footerLinkText', 'Press me!')}
			footerText={text('footerText', 'Footer text.')}
			headingText={text('headingText', 'Main Heading')}
			onPressFacebook={action('onPressFacebook')}
			onPressFooterLink={action('onPressFooterLink')}
			onPressGooglePlus={action('onPressGooglePlus')}
			onPressTwitter={action('onPressTwitter')}
			onSubmitSignUpForm={action('onSubmitSignUpForm')}
		/>
	));
