const withImages = require('next-images');

module.exports = withImages({
  target: 'serverless',
  distDir: 'out',
  future: {
    webpack5: true,
  },
});
