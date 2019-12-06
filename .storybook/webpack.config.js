// https://storybook.js.org/docs/configurations/custom-webpack-config/

const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../src/styles")
  });

  return config;
};
