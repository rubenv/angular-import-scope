var config = require('./test-config');
config.multiCapabilities = require('open-sauce-browsers')('angular-import-scope');
module.exports = config;