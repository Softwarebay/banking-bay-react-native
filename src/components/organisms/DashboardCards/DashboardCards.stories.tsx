import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { DashboardCards } from './DashboardCards';

storiesOf('Organisms/DashboardCards', module)
	.addDecorator((getStory) => <ViewStory fullscreen>{getStory()}</ViewStory>)
	.add('Default', () => (
		<DashboardCards
			navText={text('navText', 'Nav Text')}
			onPressCreditCardsIconButton={action('onPressCreditCardsIconButton')}
			onPressProfileIconButton={action('onPressProfileIconButton')}
		/>
	));
