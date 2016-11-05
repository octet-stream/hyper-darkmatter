"use strict";

const assign = Object.assign;

const backgroundColor = "#1c1f26";
const foregroundColor = "#c0c5ce";
const borderColor = backgroundColor;
const cursorColor = foregroundColor;

const red = "#fd5656";
const green = "#75bb36";
const yellow = "#e7e781";
const blue = "#267faf";
const magenta = "#a76ebf";
const cyan = "#22bae4";
const lightCyan = "#58dbff";
const lightGreen = "#90cc5b";

const decorateConfig = config => assign({}, config, {
  backgroundColor, foregroundColor, cursorColor, borderColor,
  colors: {
    black: backgroundColor, white: foregroundColor,
    red, green, blue, cyan, magenta, yellow,
    lightRed: red, lightYellow: yellow, lightMagenta: magenta,
    lightBlack: backgroundColor, lightWhite: foregroundColor,
    lightCyan: cyan, lightBlue: blue, lightGreen
  },
  css: `
    ${config.css}
    .tab_active {
      background: rgba(101, 115, 126, .10);
    }
  `
});

module.exports.decorateConfig = decorateConfig;
