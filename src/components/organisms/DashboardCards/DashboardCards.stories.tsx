import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { CenterStory } from 'utils/storybook/CenterStory';

import { DashboardCards } from './DashboardCards';

storiesOf('Organisms/DashboardCards', module)
	.addDecorator((getStory) => (
		<CenterStory style={{ paddingHorizontal: 0 }}>{getStory()}</CenterStory>
	))
	.add('Default', () => (
		<DashboardCards
			navText={text('navText', 'Nav Text')}
			onPressCreditCardsIconButton={action('onPressCreditCardsIconButton')}
			onPressProfileIconButton={action('onPressProfileIconButton')}
		/>
	));
