import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { SignInTemplate } from './SignInTemplate';

storiesOf('Templates/SignInTemplate', module)
	.addDecorator((getStory) => <ViewStory fullscreen>{getStory()}</ViewStory>)
	.add('Default', () => (
		<SignInTemplate
			footerLinkText={text('footerLinkText', 'Press me!')}
			footerText={text('footerText', 'Footer text.')}
			headingText={text('headingText', 'Main Heading')}
			onPressFacebook={action('onPressFacebook')}
			onPressFooterLink={action('onPressFooterLink')}
			onPressGooglePlus={action('onPressGooglePlus')}
			onPressTwitter={action('onPressTwitter')}
			onRestorePassword={action('onRestorePassword')}
			onSubmitSignInForm={action('onSubmitSignInForm')}
		/>
	));
