exports.config = {
    specs: [
        'test/*.js'
    ],

    multiCapabilities: require('open-sauce-browsers')('angular-import-scope')
};
