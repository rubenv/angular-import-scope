var config = require('./test-config').config;
config.multiCapabilities = require('open-sauce-browsers')('angular-import-scope');
exports.config = config;
