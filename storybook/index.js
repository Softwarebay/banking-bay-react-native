import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { loadStories } from './storyLoader';

import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  loadStories()
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null
});

export default StorybookUIRoot;
