import React from "react";
import { storiesOf } from "@storybook/react";
import List from "./../components/List";

storiesOf("Wilkommen", module).add("to your new storybook", () => (
  <div>
    <h1>welcome to your new storybook</h1>
  </div>
));

storiesOf("Teesting List", module).add("Testing this stuff", () => (
  <div>
    <List list={["Dog", "Snake", "Cat"]} />
  </div>
));
