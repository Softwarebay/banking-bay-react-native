import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { SearchBar } from './SearchBar';

storiesOf('Molecules/SearchBar', module)
	.addDecorator((getStory) => <ViewStory>{getStory()}</ViewStory>)
	.add('Default', () => (
		<SearchBar
			placeholder={text('placeholder', 'Placeholder')}
			testID="Searchbar-test-id"
			onSearch={action('onSearch')}
		/>
	));
