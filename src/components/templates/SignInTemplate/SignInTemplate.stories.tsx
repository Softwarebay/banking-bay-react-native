import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import { SignInTemplate } from './SignInTemplate';

storiesOf('Templates/SignInTemplate', module)
	.addDecorator((getStory) => (
		<CenterStory style={{ paddingHorizontal: 0 }}>{getStory()}</CenterStory>
	))
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
