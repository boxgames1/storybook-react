import { withInfo } from "@storybook/addon-info";
const wInfoStyle = {
  header: {
    h1: {
      color: "#e2e2e2"
    },
    body: {
      color: "#0101fa"
    },
    h2: {
      color: "#ad21fa"
    }
  },
  infoBody: {
    backgroundColor: "#eee"
  }
};

export const wInfo = text =>
  withInfo({
    inline: true,
    source: true,
    styles: wInfoStyle,
    text: text
  });
