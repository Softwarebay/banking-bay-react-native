import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ViewStory } from 'utils/storybook/ViewStory';

import { Paginator } from './Paginator';

storiesOf('Atoms/Paginator', module)
	.addDecorator((getStory) => <ViewStory center>{getStory()}</ViewStory>)
	.add('Current at index 0', () => (
		<Paginator
			currentIndex={number('currentIndex', 0, {
				range: true,
				min: 0,
				max: 2,
				step: 1,
			})}
			slides={[{ id: 1 }, { id: 2 }, { id: 3 }]}
		/>
	))
	.add('Current at index 1', () => (
		<Paginator
			currentIndex={number('currentIndex', 1, {
				range: true,
				min: 0,
				max: 2,
				step: 1,
			})}
			slides={[{ id: 1 }, { id: 2 }, { id: 3 }]}
		/>
	))
	.add('Current at index 2', () => (
		<Paginator
			currentIndex={number('currentIndex', 2, {
				range: true,
				min: 0,
				max: 2,
				step: 1,
			})}
			slides={[{ id: 1 }, { id: 2 }, { id: 3 }]}
		/>
	));
