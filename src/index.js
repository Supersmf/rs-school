// eslint-disable-next-line node/no-unpublished-require
require('@babel/register')({
  presets: ['@babel/preset-env']
});

module.exports = require('./server.js');
