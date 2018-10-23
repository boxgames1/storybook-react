import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { wInfo } from "../utils";
import { text, boolean } from "@storybook/addon-knobs/react";

import { Button, Welcome } from "@storybook/react/demo";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add(
    "with text",
    wInfo(`
      description or documentation about my component, supports markdown
    
      ~~~js
      <Button>Click Here</Button>
      ~~~
    
    `)(() => (
      <Button bg={text("bg", "green", "group1")} onClick={action("clicked")}>
        {text("text", "This is an awesome button")}
      </Button>
    ))
  )
  .add(
    "with some emoji",
    wInfo(`
        description of the button
    `)(() => (
      <Button
        bg={text("bg", "green", "group1")}
        disabled={boolean("disabled", false)}
        onClick={action("clicked")}
      >
        <span role="img" aria-label="so cool">
          {text("text", "😀 😎 👍 💯")}
        </span>
      </Button>
    ))
  );
