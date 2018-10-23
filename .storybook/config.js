import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
const req = require.context("../src/stories", true, /\.js$/);
addDecorator(withKnobs);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
