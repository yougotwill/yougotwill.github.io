const withPlugins = require("next-compose-plugins");
const withSvgr = require("next-svgr");

const config = {
  target: 'serverless',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });
    return config;
  },
};

module.exports = withPlugins([
  withSvgr
], config);
