const withImages = require('next-images');

module.exports = withImages({
  distDir: 'out',
  future: {
    webpack5: true,
  },
});
