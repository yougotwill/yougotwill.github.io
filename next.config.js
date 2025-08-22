const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');

const config = {
  target: 'serverless',
  async redirects() {
    return [
      {
        source: '/resume',
        destination:
          'https://drive.google.com/file/d/12aE7Z6JQOzLrjgR7T251Cmo-77n4EaDR/view?usp=sharing',
        permanent: false,
      },
    ];
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};

module.exports = withPlugins([withSvgr], config);
